import "./style.css";

import { JobsList } from "@/data/home";
import {
  contactButtonBottom,
  contactButtonHero,
  jobsList,
  projectList,
  stackList,
} from "@/nodes";
import { createListOfProjects } from "@/components/organisms/ListOfProjects";
import { createContactForm } from "@/components/molecules/ContactForm";
import { createModal } from "@/components/molecules/Modal";
import { createJobCard } from "@/components/molecules/JobCard";
import { createTechStack } from "@/components/molecules/TechStack";
import { projectService } from "@/services/project.service";
import { shuffleArray } from "@/utils";

function createJobs() {
  const jobsContainer = document.createElement("div");
  jobsContainer.className = "jobs-list l-flex l-flex-col l-gap-20";
  const jobsList = JobsList.map((job) => {
    return createJobCard({
      jobTitle: job.jobTitle,
      organization: job.organization,
      from: job.from,
      to: job.to,
      jobLogo: job.logoUrl,
      jobUrl: job.link,
      description: job.description,
    });
  });
  jobsContainer.append(...jobsList);
  return jobsContainer;
}

export const createHomePage = async () => {
  const projects = await projectService.getProjects({
    published:true
  });

  shuffleArray(projects);
  const projectListEl = createListOfProjects(projects);

  const formContainer = createContactForm();
  const formContainer2 = createContactForm();

  jobsList?.append(createJobs());
  const contactModal = createModal({
    label: "Send me a message",
    element: formContainer,
    width: "90vmin",
  })
  contactModal.id = "contact-button-modal"
  contactButtonHero?.append(
    contactModal
  );
  
  contactButtonHero.classList.add("l-horizontal", "l-gap-3");
  contactButtonBottom?.append(formContainer2);
  projectList?.append(projectListEl);
  stackList?.append(createTechStack());
};
