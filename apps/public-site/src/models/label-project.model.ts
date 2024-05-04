export interface LabelProject {
  id?: number
  order: number | null | undefined
  projectId?: number
  labelId?: number
  createdAt: Date | string
}

export interface CreateLabelProjectDto
  extends Omit<LabelProject, 'id' | 'createdAt'> {}
