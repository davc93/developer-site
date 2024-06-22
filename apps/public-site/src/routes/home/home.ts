import './style.css'

import { JobsList } from './data/home'
import {
  contactButtonBottom,
  contactButtonHero,
  jobsList,
  projectList,
  stackList
} from '@/nodes'
import { createListOfProjects } from './components'
import { createContactForm } from '@/components/ContactForm'
import { createModal } from '@/components/ui/molecules/Modal'
import { createJobCard } from '@/routes/home/components/JobCard'
import { createTechStack } from '@/routes/home/components/TechStack'
import { projectService } from '@/services/project.service'
import { shuffleArray } from '@/utils'

function createJobs():HTMLElement {
  const jobsContainer = document.createElement('div')
  jobsContainer.className = 'jobs-list'
  const jobsList = JobsList.map((job) => {
    return createJobCard({
      jobTitle: job.jobTitle,
      organization: job.organization,
      from: job.from,
      to: job.to,
      jobLogo: job.logoUrl,
      jobUrl: job.link,
      description: job.description
    })
  })
  jobsContainer.append(...jobsList)
  return jobsContainer
}

export const createHomePage = async () => {
  const projects = await projectService.getProjects({
    published: true
  })

  shuffleArray(projects)
  const projectListEl = createListOfProjects(projects)

  const formContainer = createContactForm()
  const formContainer2 = createContactForm()

  jobsList?.append(createJobs())
  const contactModal = createModal({
    label: 'Send me a message',
    element: formContainer,
    width: '90vmin'
  })
  contactModal.id = 'contact-button-modal'
  contactButtonHero?.append(contactModal)
  contactButtonBottom?.append(formContainer2)
  projectList?.append(projectListEl)
  stackList?.append(createTechStack())
}
