import { config } from '@/config'
import type { Project } from '@/models/project.model'
import type { Label } from '@/models/label.model'

class ProjectService {
  async getProjects (queryParamsObj?: Record<string, any>): Promise<Project[]> {
    const queryParams = queryParamsObj
      ? `?${new URLSearchParams(queryParamsObj).toString()}`
      : ''
    const url = `${config.apiUrl}/projects${queryParams}`

    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      if (data.message) {
        throw new Error(data.message as string)
      } else {
        throw new Error('Something went wrong')
      }
    }

    return data
  }

  async getProject (id: number): Promise<Project> {
    const response = await fetch(`${config.apiUrl}/projects/${id}`)
    const data = await response.json()
    if (!response.ok) {
      const message = typeof data.message === 'string' ? data.message as string : 'Something went wrong'
      throw new Error(message)
    }

    return data
  }

  async getLabels (): Promise<Label[]> {
    const response = await fetch(`${config.apiUrl}/labels`)
    const data = await response.json()
    if (!response.ok) {
      const message = typeof data.message === 'string' ? data.message as string : 'Something went wrong'
      throw new Error(message)
    }

    return data
  }
}

export const projectService = new ProjectService()
