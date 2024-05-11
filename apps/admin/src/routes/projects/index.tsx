// import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { projectService } from '@/services/project.service'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, TypographySize, TableClient, Button, ButtonSizes } from 'ui-react'
import type { Project } from '@/models/project.model'
import { createColumnHelper } from '@tanstack/react-table'

interface ProjectTable extends Omit<Project, 'published'> {
  published: string
}

const columnHelper = createColumnHelper<ProjectTable[]>()

const columns = [
  columnHelper.accessor('id', {
    header: 'Id'
  }),
  columnHelper.accessor('title', {
    header: 'Title',
    enableSorting: false
  }),
  columnHelper.accessor('shortDescription', {
    header: 'Short description'
  }),
  columnHelper.accessor('published', {
    header: 'Publicado'
  }),
  columnHelper.accessor('slug', {
    header: 'Slug'
  }),
  columnHelper.accessor('repository', {
    header: 'Repository Url'
  }),
  columnHelper.accessor('link', {
    header: 'Environment Url'
  })
]

export const ProjectsPage = (): JSX.Element => {
  const [data, setData] = useState<ProjectTable[]>([])
  const navigate = useNavigate()
  const actions = [
    {
      name: 'Edit',
      fn: (project: Project) => {
        navigate(`/project/edit/${project.id}`)
      }
    },
    {
      name: 'Delete',
      fn: (project: Project) => {
        alert(`Eliminar ${project.id}`)
      }
    }
  ]
  const getProjects = async (): Promise<void> => {
    const projects = await projectService.getProjects()

    setData(
      projects.map((project) => ({
        ...project,
        published: project.published ? 'Published' : 'Draft'
      }))
    )
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <section className="flex flex-col">
      <div className='flex justify-between'>

      <Typography size={TypographySize.titleSmall} className="">
        Projects Page
      </Typography>
      <Link to="/project/create">
        <Button tag='span' size={ButtonSizes.LARGE}>
            Create Project
        </Button>
      </Link>
      </div>
        <TableClient columns={columns} data={data} actions={actions} />
    </section>
  )
}
