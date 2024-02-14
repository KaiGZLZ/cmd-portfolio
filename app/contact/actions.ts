'use server'

import { z } from 'zod'
import sendMail from '../lib/sendEmails'

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

const InputsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

export async function contactFormAction (data: Inputs): Promise<formResponse> {
  try {
    const validatedData = InputsSchema.parse(data)

    // Email function

    if (process.env.EMAIL_HOST) {
      // First an email to the user will be sent to confirm the message
      if (process.env.CV_URL_ENGLISH ?? process.env.CV_URL_SPANISH) {
        await sendMail({
          email: process.env.EMAIL_HOST,
          subject: 'Mensaje recibido',
          text: '',
          attachments: [
            {
              filename: 'CV-Jesus-Gonzalez-EN.pdf',
              path: process.env.CV_URL_ENGLISH ?? ''
            },
            {
              filename: 'CV-Jesus-Gonzalez-ES.pdf',
              path: process.env.CV_URL_SPANISH ?? ''
            }
          ],
          html: `
          <p>Hola <strong>${validatedData.name}</strong>! Muchas gracias por tu mensaje.</p>
          <p>A continuación adjunto mi CV para que puedas ver todas mis aptitudes, habilidades y experiencia.</p>
          <p>Este es mi correo personal por lo que puedes responder este correo si deseas comentar algo más.</p>
          <p>En breve me pondré en contacto contigo.</p>
          <p>Saludos</p>
          <p>Jesús</p>
          `
        })
      }

      await sendMail({
        email: process.env.EMAIL_HOST,
        subject: 'Contacto por la página web del portafolio',
        text: '',
        html: `
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Mensaje:</strong> ${validatedData.message}</p>
        `
      })

      return {
        message: 'Contact mail successfully sent'
      }
    }
    return {
      message: 'Mail not sent'
    }
  } catch (err) {
    // In case that there is an error from the validation, returns a custom error
    if ((err instanceof z.ZodError)) {
      const error = err

      return {
        message: 'Form not sent',
        errors: error.errors.map((error) => {
          return {
            message: error.message,
            path: error.path.join('.')
          }
        })
      }
    }

    console.log({ err })

    throw err
  }
}
