'use client'

import { useEffect, useRef, useState } from 'react'
import TypewriterComponent from 'typewriter-effect'

export interface Command {
  command: string
  description?: string
  action?: () => void
}

interface ConsoleProps extends React.HTMLProps<HTMLDivElement> {
  // Command options for the console
  posibleComands: Command[]

  // When true, the console will start typing the initial message
  // If null or undefined, the console will start typing the initial message when the console is visible/intersected
  startTyping?: boolean | null
  // When true, there will be a focus in the input
  startTypingFocus?: boolean

  children: React.ReactNode
}

export default function Console ({
  posibleComands,
  startTyping,
  startTypingFocus = true,
  children,
  ...props
}: ConsoleProps): JSX.Element {
  const [answerStack, setAnswerStack] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0)

  const [errorStack, setErrorStack] = useState<string[]>([])

  const refInput = useRef<HTMLInputElement>(null)

  const [inputHidden, setInputHidden] = useState<boolean>(true)

  // Focus the input when the input and the possible commands are visible
  useEffect(() => {
    if (refInput.current !== null && !inputHidden && startTypingFocus) {
      refInput.current.focus()
    }
  }, [refInput, inputHidden])

  // Typewriter options
  const options = {
    delay: 1,
    loop: false,
    cursor: ''
  }

  // The setting for the console's intersection observer

  // This is used to start typing the initial message when the console is visible/intersected
  const [startTypingInternal, setStartTypingInternal] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  // The general commands for the console
  const generalComands = [
    {
      command: 'clear',
      description: 'Clear the console',
      action: () => {
        setErrorStack([])
        setAnswerStack([])
      }

    },
    {
      command: 'clr',
      description: 'Clear the console',
      action: () => {
        setErrorStack([])
        setAnswerStack([])
      }
    }
  ] as Command[]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Aquí es donde puedes manejar el evento cuando el elemento entra en la pantalla
          setStartTypingInternal(true)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    )

    if (ref.current !== null) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current !== null) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Handle the form submit for the console
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (answer.trim().toLowerCase() === '') {
      return
    }

    const newStack = [...answerStack, answer.trim().toLowerCase()]
    setAnswerStack(newStack)
    setAnswer('')
    setCurrentAnswerIndex(newStack.length)

    if (generalComands.find((gc) => gc.command === answer.trim().toLowerCase())) {
      const generalComand = generalComands.find((gc) => gc.command === answer.trim().toLowerCase())

      if (generalComand?.action) {
        generalComand.action()
      }
      return
    }

    if (posibleComands.find((pc) => pc.command === answer.trim().toLowerCase())) {
      const posibleComand = posibleComands.find((pc) => pc.command === answer.trim().toLowerCase())

      if (posibleComand?.action) {
        posibleComand.action()
      }
    } else {
      const newError = 'The command "' + answer.trim().toLowerCase() + '" is not valid'

      setErrorStack([...errorStack, newError])
    }
  }

  // When something is added to the answer stack, the input will be focussed
  useEffect(() => {
    if (refInput.current !== null) {
      refInput.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [answerStack])

  // Handle the arrow up and down keys in the console to catch the previous commands and autocomplete
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'ArrowUp') {
      if (currentAnswerIndex > 0) {
        setAnswer(answerStack[currentAnswerIndex - 1])
        setCurrentAnswerIndex(currentAnswerIndex - 1)
      }
    }
    if (e.key === 'ArrowDown') {
      if (currentAnswerIndex < answerStack.length - 1) {
        setAnswer(answerStack[currentAnswerIndex + 1])
        setCurrentAnswerIndex(currentAnswerIndex + 1)
      } else {
        setAnswer('')
        setCurrentAnswerIndex(answerStack.length)
      }
    }
    // Autocomplete the command
    if (e.key === 'Tab') {
      e.preventDefault()
      const reg = new RegExp('^' + answer.trim().toLowerCase(), 'i')

      const posibleComand = posibleComands.filter((pa) => reg.test(pa.command))

      if (posibleComand.length === 1) {
        setAnswer(posibleComand[0].command)
        return
      } else if (posibleComand.length > 1) {
        const common = posibleComand[0].command.split('').reduce((acc, letter, index) => {
          if (posibleComand.every((pa) => pa.command[index] === letter)) {
            return acc + letter
          }
          return acc
        }, '')

        setAnswer(common)
      }

      const generalComand = generalComands.find((pa) => reg.test(pa.command))

      if (generalComand) {
        setAnswer(generalComand.command)
      }
    }
  }

  return (
    <main {...props} className="flex min-h-screen flex-col items-initial justify-initial px-10 py-5 lg:max-w-screen-xl lg:px-15 lg:py-12">
      {children}

      <div className="block min-h-80 lg:text-lg" ref={ref}
        onClick={() => {
          if (refInput.current !== null) {
            refInput.current.focus()
          }
        }}
      >

        { startTyping ?? startTypingInternal
          ? <div >
            <TypewriterComponent options={options}
              onInit={(typewriter) => {
                typewriter
                  .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                  .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                  .typeString('>> Escriba en la consola alguna de las opciones para continuar...')
                  .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                  .callFunction(() => {
                    setInputHidden(false)
                  })
                  .start()
              }}
            />
          </div>
          : null
        }

        <ul className={inputHidden ? 'hidden' : ''}>
          {
            posibleComands.map((comand, index) => (
              <li key={index}>
              &nbsp;&nbsp;&nbsp;
                {comand.command}
              </li>
            ))
          }
        </ul>
        {
          errorStack.map((error, index) => (
            <div key={index} className={`text-red-500 ${index === 0 ? 'mt-5' : ''}`}>{error}</div>
          ))
        }
        <div className="block">
          <form
            className={inputHidden ? 'hidden' : ''}
            onSubmit={onSubmit}
          >
            {'>>'}
            <input
              type="text"
              className="border-none p-2 bg-inherit outline-none "
              ref={refInput}
              value={answer}
              onChange={(e) => { setAnswer(e.target.value) }}
              onKeyDown={onKeyDown}
            />
          </form>
        </div>

      </div>
    </main>
  )
}
