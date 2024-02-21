import "./style.css"

import { JobsList } from "../../data/home";
// import { animate, inView, scroll } from "motion";
import {
  contactButtonBottom,
  contactButtonHero,
  jobsList,
  projectList,
  stackList,
} from "../../nodes";
import { createListOfProjects } from "../../components/organisms/ListOfProjects";
import { createContactForm } from "../../components/molecules/ContactForm";
import { createModal } from "../../components/molecules/Modal";
import { projectService } from "../../services/project.service";
import { createJobCard } from "../../components/molecules/JobCard";
import { shuffleArray } from "../../utils";
import { createTechStack } from "../../components/molecules/TechStack";

// import { ArrowIcon } from "../../components/icons/ArrowIcon";
// import { ButtonSizes, ButtonStyles, createButton } from "../../components/atoms/Button";


const projects =await projectService.getProjects() 
shuffleArray(projects)
const projectListEl = createListOfProjects(projects)

const formContainer = createContactForm();
const formContainer2 = createContactForm();
function createJobs() {
  const jobsContainer = document.createElement("div");
  jobsContainer.className = "jobs-list l-flex l-flex-col l-gap-20";
  const jobsList = JobsList.map((job) => {
    return createJobCard({jobTitle:job.jobTitle,organization:job.organization,from:job.from,to:job.to,jobLogo:job.logoUrl,jobUrl:job.link,description:job.description})
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
      width: "90vmin"
    }),

    
  );
  contactButtonHero.classList.add("l-horizontal","l-gap-3")
  contactButtonBottom?.append(formContainer2);
  projectList?.append(projectListEl);
  stackList?.append(createTechStack());

};
// function animations() {
//   inView(
//     ".section",
//     ({ target }) => {
//       animate(
//         target.querySelectorAll(".typography--title-medium"),
//         { opacity: 1, transform: "none" },
//         { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
//       );
//     },
//     { margin: "-100px" }
//   );
//   inView(
//     ".skills__stack-list",
//     ({ target }) => {
//       animate(
//         target.querySelectorAll(".level"),
//         { width: [0, target.clientWidth] },
//         { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
//       );
//     },
//     { margin:"-50px" }
//   );

//   scroll(animate(".layer-1", { opacity: 0 }), {
//     offset: ["start start", "center center"],
//   });
//   scroll(animate(".bg-contact", { opacity: 1 }), {
//     offset: ["start start", "center center"],
//   });
//   scroll(animate(".progress-bar", { scaleY: [0, 1] }), {
//     offset: ["start start", "end end"],
//   });
// }
