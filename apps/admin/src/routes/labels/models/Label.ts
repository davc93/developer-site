export interface LabelsResponse {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  title: string
  type: string
  image: string
  createdAt: Date
}

export interface Meta {
  page: number
  size: number
  pageCount: number
  total: number
}
