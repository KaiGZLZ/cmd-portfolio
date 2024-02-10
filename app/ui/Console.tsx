'use client'

import { useEffect, useRef, useState } from 'react'
import TypewriterComponent from 'typewriter-effect'
import { navigate } from '../actions'

interface ConsoleProps {
  // Command options for the console
  posibleComands: string[]

  // When true, the console will start typing the initial message
  // If null or undefined, the console will start typing the initial message when the console is visible/intersected
  startTyping?: boolean | null

  children: React.ReactNode
}

export default function Console ({
  posibleComands,
  startTyping,
  children
}: ConsoleProps): JSX.Element {
  const [answerStack, setAnswerStack] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0)

  const [errorStack, setErrorStack] = useState<string[]>([])

  const refInput = useRef<HTMLInputElement>(null)

  const [hidden, setHidden] = useState<boolean>(true)

  const [startTypingInternal, setStartTypingInternal] = useState<boolean>(false)

  // Focus the input when the input and the possible commands are visible
  useEffect(() => {
    if (refInput.current !== null && !hidden) {
      refInput.current.focus()
    }
  }, [refInput, hidden])

  // Typewriter options
  const options = {
    delay: 1,
    loop: false,
    cursor: ''
  }

  // The setting for the console's intersection observer
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <main className="flex min-h-screen flex-col items-initial justify-initial px-10 py-5  md:px-15 md:py-12">
      {children}

      <div className="block min-h-64" ref={ref}
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
                    setHidden(false)
                  })
                  .start()
              }}
            />
          </div>
          : null
        }

        <ul className={hidden ? 'hidden' : ''}>
          {
            posibleComands.map((comand, index) => (
              <li key={index}>
              &nbsp;&nbsp;&nbsp;
                {comand}
              </li>
            ))
          }
        </ul>
        {
          errorStack.map((error, index) => (
            <div key={index} className="text-red-500">{error}</div>
          ))
        }
        <div className="block">
          <form
            className={hidden ? 'hidden' : ''}
            onSubmit={(e) => {
              e.preventDefault()

              if (answer.trim() === '') {
                return
              }

              window.scrollTo(0, document.body.scrollHeight)

              const newStack = [...answerStack, answer.trim()]
              setAnswerStack(newStack)
              setAnswer('')
              setCurrentAnswerIndex(newStack.length)

              if (!posibleComands.includes(answer.trim())) {
                const newError = 'The command "' + answer.trim() + '" is not valid'

                setErrorStack([...errorStack, newError])
                return
              }
              if (answer.trim() === 'clear' || answer.trim() === 'clr') {
                setErrorStack([])
                setAnswerStack([])
                return
              }
              if (answer.trim() === 'cd home') {
                console.log('redirecting to home')
                // eslint-disable-next-line
              navigate('/')
                return
              }
              posibleComands.forEach((pc) => {
                if (answer.trim() === pc) {
                  const route = pc.split(' ')[1]

                  // eslint-disable-next-line
                navigate('/' + route)
                }
              })
            }}>
            {'>>'} <input
              type="text"
              className="border-none p-2 bg-inherit outline-none "
              ref={refInput}
              value={answer}
              onChange={(e) => { setAnswer(e.target.value) }}
              onKeyDown={(e) => {
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
                if (e.key === 'Tab') {
                  e.preventDefault()
                  const reg = new RegExp('^' + answer.trim(), 'i')

                  const comands = posibleComands.filter((pa) => reg.test(pa))

                  if (comands.length === 1) {
                    setAnswer(comands[0])
                  }
                }
              }
              }
            />
          </form>
        </div>

      </div>
    </main>
  )
}
