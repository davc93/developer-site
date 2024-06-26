import { ProjectForm } from '../../components/ProjectForm'
import { ProjectFormProvider } from '../../components/ProjectForm/Context'

export const CreateProjectPage = () => {
  return (
    <ProjectFormProvider>
      <ProjectForm project={null} />
    </ProjectFormProvider>
  )
}
