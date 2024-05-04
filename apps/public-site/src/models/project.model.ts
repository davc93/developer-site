import { type Image } from './image.model'
import { type Label } from './label.model'
export interface Project {
  id: number
  link: string
  repository: string
  title: string
  shortDescription: string
  published: boolean
  description: string
  createdAt: Date
  slug: string
  images: Image[]
  labels: Label[]
}

export interface CreateProjectDto extends Omit<Project, 'id' | 'createdAt'> {}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
