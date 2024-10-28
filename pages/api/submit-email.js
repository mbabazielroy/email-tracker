import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      const newEmail = await prisma.email.create({
        data: { email },
      })
      res.status(200).json({ message: 'Email submitted successfully', email: newEmail })
    } catch (error) {
      res.status(400).json({ message: 'Error submitting email', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
