import { ProjectForm } from '../../containers/ProjectForm'
import { ProjectFormProvider } from '../../containers/ProjectForm/Context'

export const CreateProjectPage = () => {
  return (
    <ProjectFormProvider>
      <ProjectForm project={null} />
    </ProjectFormProvider>
  )
}
