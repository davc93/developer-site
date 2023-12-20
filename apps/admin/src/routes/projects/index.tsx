import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { Link } from 'react-router-dom'
import { Typography, TypographySize } from '../../components/atoms/Typography'

export const ProjectsPage = () => {
  return (
    <section className='flex flex-col'>
      <Typography size={TypographySize.titleMedium} className='self-center'>Projects Page</Typography>
      <ListOfProjects/>
    </section>
  )
}
