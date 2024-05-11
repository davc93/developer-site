import {
  Button,
  ButtonSizes,
  TableClient,
  Typography,
  TypographySize
} from 'ui-react'
import { createColumnHelper } from '@tanstack/react-table'
import type { Label } from '@/models/project.model'
import { useEffect, useState } from 'react'
import { labelService } from '@/services/label.service'
import { Link, useNavigate } from 'react-router-dom'
const columnHelper = createColumnHelper<Label[]>()

const columns = [
  columnHelper.accessor('id', {
    header: 'Id'
  }),
  columnHelper.accessor('title', {
    header: 'Title'
  })
]

export const LabelsPage = (): JSX.Element => {
  const [data, setData] = useState<Label[]>([])
  const navigate = useNavigate()

  const actions = [
    {
      name: 'Edit',
      fn: (label: Label) => {
        navigate(`/label/edit/${label.id}`)
      }
    },
    {
      name: 'Delete',
      fn: (label: Label) => {
        alert(`Eliminar ${label.id}`)
      }
    }
  ]

  const getLabels = async (): Promise<void> => {
    const labels = await labelService.getLabels()
    setData(labels)
  }
  useEffect(() => {
    getLabels()
  }, [])

  return (
    <div className="flex flex-col">
      <div className='flex justify-between'>

      <Typography size={TypographySize.titleSmall} className="">
        Labels
      </Typography>
      <Link to={'/label/create'} className="self-end">
        <Button size={ButtonSizes.LARGE}>Create Label</Button>
      </Link>
      </div>

      <TableClient columns={columns} data={data} actions={actions} />
    </div>
  )
}
