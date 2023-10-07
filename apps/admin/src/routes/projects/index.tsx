import { ListOfProjects } from '../../components/ListOfProjects'
import { Link } from 'react-router-dom'
import { Typography, TypographySize } from '../../components/Typography'

export const ProjectsPage = () => {
  return (
    <section className='flex flex-col'>
      <Typography size={TypographySize.titleMedium} className='self-center'>Projects Page</Typography>
      <ListOfProjects/>
    </section>
  )
}
