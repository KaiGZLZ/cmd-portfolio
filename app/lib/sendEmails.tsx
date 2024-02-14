// eslint-disable-next-line
const nodemailer = require('nodemailer')

interface Email {
  email: string
  subject: string
  text?: string
  html?: string
  attachments?: Array<{
    filename?: string
    path: string
  }>
}

export default async function sendMail ({
  email,
  subject,
  text,
  html,
  attachments
}: Email
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL_HOST,
      pass: process.env.EMAIL_PASSWORD_HOST
    }
  })

  await transporter.verify().then(() => {
    // console.log('Ready for send Emails')
  })

  const message = {
    from: process.env.EMAIL_HOST,
    to: email,
    subject,
    text,
    html,
    attachments: attachments ?? []
  }

  try {
    await transporter.sendMail(message)
  } catch (e) {
    console.log('ERROR ', e)
  }
}
