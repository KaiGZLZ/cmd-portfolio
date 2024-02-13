'use server'

import { z } from 'zod'

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

    return {
      message: 'Form sent'
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

    throw err
  }
}
