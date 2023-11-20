import "./style.css"

import { technologies } from "../../data/technologies";
import { JobsList } from "../../data/home";
import { animate, inView, scroll } from "motion";
import {
  contactButtonBottom,
  contactButtonHero,
  jobsList,
  projectList,
  stackList,
} from "../../nodes";
import { createProjects } from "../../components/ListOfProjects";
import { createContactForm } from "../../components/ContactForm";
import { createCarousel } from "../../components/Carousel";
import { TypographyColor, TypographySize, createTypography } from "../../components/Typography";
import { createModal } from "../../components/Modal";
import { projectService } from "../../services/project.service";
import { ProjectCardType } from "../../components/ProjectCard";
import { createJobCard } from "../../components/JobCard";
import { shuffleArray } from "../../utils/notifications";
const projects =await projectService.getProjects() 
shuffleArray(projects)
const projectsEl = createProjects(projects,ProjectCardType.LARGE);
const technologiesEl = createTechnologies();
const formContainer = createContactForm();
const formContainer2 = createContactForm();
const carousel = createCarousel(projectsEl)

function animations() {
  inView(
    ".section",
    ({ target }) => {
      animate(
        target.querySelectorAll(".typography--title-medium"),
        { opacity: 1, transform: "none" },
        { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    },
    { margin: "-100px" }
  );
  inView(
    ".skills__stack-list",
    ({ target }) => {
      animate(
        target.querySelectorAll(".level"),
        { width: [0, target.clientWidth] },
        { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    },
    { margin:"-50px" }
  );

  scroll(animate(".layer-1", { opacity: 0 }), {
    offset: ["start start", "center center"],
  });
  scroll(animate(".bg-contact", { opacity: 1 }), {
    offset: ["start start", "center center"],
  });
  scroll(animate(".progress-bar", { scaleY: [0, 1] }), {
    offset: ["start start", "end end"],
  });
}

function createTechnologies() {
  const techsContainer = document.createElement("div");
  techsContainer.className = "tech-container";
  const techsEls = technologies
    .sort((a, b) => b.knowledgeLevel - a.knowledgeLevel)
    .map((tech) => {
      const width = 30;

      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.padding = "0";
      const level = document.createElement("div");
      level.className = "level";
      level.style.width = `${((100 - width) / 5) * tech.knowledgeLevel}%`;
      level.style.background = "var(--primary--500)";
      const name = createTypography({
        label: tech.name,
        size: TypographySize.bodyMedium,
        color: TypographyColor.White,
      });
      name.style.width = `${width}%`;
      container.append(name, level);
      return container;
    });
  techsContainer.append(...techsEls);
  return techsContainer;
}

function createJobs() {
  const jobsContainer = document.createElement("div");
  jobsContainer.className = "jobs-list";
  const jobsList = JobsList.map((job) => {
    return createJobCard({title:job.jobTitle,organization:job.organization,fromUntil:job.fromUntil,image:job.logoUrl,jobUrl:job.link})
  });
  jobsContainer.append(...jobsList);
  return jobsContainer;
}

export const createHomePage = () => {
  jobsList?.append(createJobs());
  contactButtonHero?.append(
    createModal({
      label: "Send me a message",
      element: formContainer,
      width: "90vmin",
    })
  );
  contactButtonBottom?.append(formContainer2);
  projectList?.append(carousel);
  stackList?.append(technologiesEl);

  animations();
};
