import { useNavigate } from "react-router-dom"
import type { LabelsResponse } from "../models"

export type Label = LabelsResponse['data'][0]

export const useTableActions = () => {
    const navigate = useNavigate()

    const actions = [
      {
        name: 'Edit',
        fn: (labelId: number) => {
          navigate(`edit/${labelId}`)
        }
      },
      {
        name: 'Delete',
        fn: (labelId: number) => {
          alert(`Eliminar ${labelId}`)
        }
      }
    ]
    return { actions }
}
