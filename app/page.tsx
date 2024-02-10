'use client'

import { useEffect, useRef, useState } from 'react'
import { posibleComands } from './comands'
import TypewriterComponent from 'typewriter-effect'
import { navigate } from './actions'

export default function Home (): JSX.Element {
  const [answerStack, setAnswerStack] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0)

  const [errorStack, setErrorStack] = useState<string[]>([])

  const refInput = useRef<HTMLInputElement>(null)
  const [startTyping, setStartTyping] = useState<boolean>(false)

  useEffect(() => {
    if (refInput.current !== null && startTyping) {
      refInput.current.focus()
    }
  }, [refInput, startTyping])

  const options = {
    delay: 5,
    loop: false,
    cursor: ''
  }

  return (
    <main className="flex min-h-screen flex-col items-initial justify-initial p-10 md:p-24"
      onClick={() => {
        if (refInput.current !== null) {
          refInput.current.focus()
        }
      }}
    >
      <div>
        <TypewriterComponent options={options}
          onInit={(typewriter) => {
            typewriter.typeString('>> Hola mi nombre es <strong>Jesús González</strong> y soy un <strong>Desarrollador Full Stack</strong><p></p>')
              .typeString('>> Bienvenido a mi sitio web personal. <p></p>')
              .typeString('>> A continuacion las diferentes opciones para escoger: <p></p><p></p>')
              .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
              .pasteString('&nbsp;&nbsp;&nbsp;cd about <p></p>', null)
              .pasteString('&nbsp;&nbsp;&nbsp;cd projects <p></p>', null)
              .pasteString('&nbsp;&nbsp;&nbsp;cd contact <p></p>', null)
              .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
              .typeString('>> Escriba en la consola alguna de las opciones para continuar...')
              .callFunction(() => {
                setStartTyping(true)
              })
              .start()
          }}
        />
      </div>
      {
        errorStack.map((error, index) => (
          <div key={index} className="text-red-500">{error}</div>
        ))
      }
      <div className="flex-row">
        <form
          className={startTyping ? '' : 'hidden'}
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
            if (answer.trim() === 'cd about') {
              console.log('redirecting to about')
              // eslint-disable-next-line
              navigate('/about')
            }
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
                const reg = new RegExp('^' + answer, 'i')

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
    </main>
  )
}
