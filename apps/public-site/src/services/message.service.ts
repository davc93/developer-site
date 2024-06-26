import { type Message } from '@/models/message.model'

class MessageService {
  async sendMessage (message: Message): Promise<unknown> {
    const response = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify(message)
    })
    const data = await response.json()
    if (!response.ok) {
      const message = typeof data.message === 'string' ? data.message as string : 'Something went wrong'
      throw new Error(message)
    }
    return data
  }
}

export const messageService = new MessageService()
