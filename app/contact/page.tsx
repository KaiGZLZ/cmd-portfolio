'use client'

import { useState } from 'react'
import Console from '../ui/Console'
import { volkhov } from '../ui/fonts'
import { contactFormAction } from './actions'
import comands from './comands'
import { useForm, type SubmitHandler } from 'react-hook-form'
import Loader from '../ui/Loader'
import toast from 'react-simple-toasts'
import 'react-simple-toasts/dist/theme/info.css'
import 'react-simple-toasts/dist/theme/success.css'
import 'react-simple-toasts/dist/theme/failure.css'

interface Inputs {
  name: string
  email: string
  message: string
}

interface formError {
  message: string
  path: string
}

interface formResponse {
  message: string
  errors?: formError[]
}

export default function Contact (): JSX.Element {
  window.scrollTo(0, 0)

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const dataToSend = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim()
    }

    const taskToast = toast('Enviando la solicitud...', {
      theme: 'info',
      loading: true,
      position: 'top-right',
      duration: Infinity
    })

    setIsLoading(true)

    await contactFormAction(dataToSend).then((res: formResponse) => {
      if (res.errors) {
        res.errors.forEach((error) => {
          setError(error.path === 'name' ? 'name' : error.path === 'email' ? 'email' : 'message', {
            message: error.message
          })
        })
      } else {
        setIsLoading(false)
        reset()
        clearErrors()
        taskToast.update({
          message: '✅ Correo enviado correctamente',
          theme: 'success',
          loading: false,
          duration: 3000
        })
      }
    }).catch((err) => {
      console.log({ err })
      setIsLoading(false)
      taskToast.update({
        message: '❌ Error al enviar el correo',
        theme: 'failure',
        loading: false,
        duration: 3000
      })
    })
  }

  const [cvButtons, setCvButtons] = useState(false)

  return (
    <div className='flex items-center justify-center h-full w-full'>

      <Console
        posibleComands={comands}
      >
        <div className="flex flex-col items-center justify-center w-full min-w-[300] lg:min-w-[740px] gap-4 mb-20">
          {/* Botones de las redes sociales */}
          <div className={`flex ${volkhov.className} animate-fade-left`}>
            <a
              className="flex items-center justify-center cursor-pointer text-lg lg:text-xl px-2 py-1 m-2 font-bold rounded-xl bg-slate-800 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900"
              href='https://github.com/KaiGZLZ'
              target='_blank'
              rel='noreferrer'
            >
            GitHub
            </a>
            <a
              className="flex items-center justify-center cursor-pointer text-lg lg:text-xl px-2 py-1 m-2 font-bold rounded-xl bg-slate-800 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900"
              href='https://www.linkedin.com/in/jesus-alfonso-gonzalez/'
              target='_blank'
              rel='noreferrer'
            >
            Linkedin
            </a>
            <div className='relative'>
              <div
                className="flex items-center justify-center cursor-pointer text-lg lg:text-xl px-2 py-1 m-2 font-bold rounded-xl bg-slate-800 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900"
                onClick={() => { setCvButtons(!cvButtons) }}
              >
                CV
              </div>
              <a
                className={`absolute transition-opacity duration-200 ${cvButtons ? 'opacity-100' : 'opacity-0'} ml-2 top-full left-[-30%] flex items-center justify-center cursor-pointer text-lg lg:text-xl px-2 py-1 font-bold rounded-xl bg-slate-700 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900`}
                href='https://drive.google.com/file/d/1XLXoj1OFBIkmouHsOrdH6QNo5yCujcP7/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
              >
                ES
              </a>
              <a
                className={`absolute ${cvButtons ? 'animate-fade' : 'opacity-0'} ml-2 top-full left-[50%] flex items-center justify-center cursor-pointer text-lg lg:text-xl px-2 py-1 font-bold rounded-xl bg-slate-700 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900`}
                href='https://drive.google.com/file/d/1n7u_XdkqIs_wSqE39v-j_OaeBz57xgFr/view'
                target='_blank'
                rel='noreferrer'
              >
                EN
              </a>
            </div>

          </div>
          {/* Seccion del formulario */}
          {/* eslint-disable-next-line */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full gap-5 -z-10">
            <section className='flex flex-col w-full lg:w-2/3 animate-fade-left animate-delay-300'>
              <label htmlFor="name" className="w-full text-left mb-2 text-white">Nombre</label>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: 'El nombre es requerido'
                })}
                placeholder='Nombre del remitente...'
                className=" px-3 py-2 rounded-xl bg-slate-800 border border-gray-500 text-white"
              />
              <span className={`text-red-400 mt-2 ${errors.name ? '' : 'opacity-0'}`}>{errors.name?.message ?? 'Error en el nombre'}</span>

            </section>
            <section className='flex flex-col w-full lg:w-2/3 animate-fade-left animate-delay-500'>
              <label htmlFor="email" className="w-full text-left mb-2 text-white">Correo</label>
              <input
                type="text"
                id="email"
                {...register('email', {
                  required: { value: true, message: 'El correo es requerido' },
                  validate: (value) => {
                    const RegExp = /^\S+@\S+$/i
                    return RegExp.test(value) || 'El correo no es valido'
                  }
                })}
                placeholder='Correo de contacto...'
                className="px-3 py-2 rounded-xl bg-slate-800 border border-gray-500 text-white"
              />
              <span className={`text-red-400 mt-2 ${errors.email ? '' : 'opacity-0'}`}>{errors.email?.message ?? 'Error en el correo'}</span>
            </section>
            <section className='flex flex-col w-full lg:w-2/3 animate-fade-left animate-delay-700'>
              <label htmlFor="message" className="w-full text-left mb-2 text-white">Mensaje</label>
              <textarea
                id="message"
                {...register('message', {
                  required: 'El mensaje es requerido'
                })}
                placeholder='Inserte su mensaje aqui...'
                className="h-40 px-3 py-2 rounded-xl bg-slate-800 border border-gray-500 text-white"
              />
              <span className={`text-red-400 mt-2 ${errors.message ? '' : 'opacity-0'}`}>{errors.message?.message ?? 'Error en el mensaje'}</span>
            </section>
            <button
              type="submit"
              disabled={isLoading}
              className="animate-fade-left animate-delay-1000 w-2/3 lg:w-1/3 px-2 py-1 m-2 font-bold rounded-xl bg-slate-800 border border-gray-500 transition duration-300 hover:bg-slate-300 hover:text-gray-900"
            >
              Enviar <Loader isLoading={isLoading} />
            </button>
          </form>
        </div>
      </Console>
    </div>
  )
}
