// import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { projectService } from '@/services/project.service'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, TypographySize, Table } from 'ui-react'
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
    header: 'Title'
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
      <Typography size={TypographySize.titleSmall} className="">
        Projects Page
      </Typography>
      <div className="space-y-4">
        <Table columns={columns} data={data} actions={actions} />
      </div>
    </section>
  )
}
