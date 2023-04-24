import { labelService } from "./label.service";
import { navigation, renderPage } from "./navigation";
import {  favoriteTools, navLinks, navLinksExternal, navBar, projectsCarrousel } from "./nodes";
// import { projectService } from "./project.service";
import { menuButtonAnimation } from "./animations/menu-button";
import { diegoCardAnimation } from "./animations/diego-card";




window.addEventListener("DOMContentLoaded", ()=>{
  renderPage()
  menuButtonAnimation()
  diegoCardAnimation()  
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target: any = event.target;
    navigation(target.href);
  });
});
navLinksExternal.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target: any = event.target;
    setTimeout(() => {
      window.location.href = target.href;
    }, 600);
  });
});

// export async function loadProjectCarrousel() {
//   try {
//     const projects = await projectService.getProjects();
//     const projectsCard = projects.map((project) => {
//       const projectCard = document.createElement("div");
//       projectCard.classList.add("project-card");
//       const title = document.createElement("h2");
//       title.textContent = project.title;
//       const shortDescription = document.createElement("p");
//       shortDescription.textContent = project.shortDescription;
//       const featureImage = document.createElement("img");
//       featureImage.alt = project.title;
//       featureImage.src = ""
//       projectCard.append(title, shortDescription, featureImage);
//       if (project.published) {
//         const publishedIcon = document.createElement("img");
//         publishedIcon.alt = "published";
//         projectCard.append(publishedIcon);
//       }

//       return projectCard;
//     });
//     projectsCarrousel.append(...projectsCard);
//   } catch (error) {

//     projectsCarrousel.textContent = `${error}`
//   }
// }

async function loadLabels() {
  const labels = await labelService.getLabels()
  const techs = labels.filter((label)=> label.type == 'tech')
  const techsToSelect = [
    'react',
    'angular',
    'tailwind',
    'nodejs',
    'typescript',

    'mongodb',
    'postgresql',
    'css',
    'sequelize'
  ]
  const selectedTechs = techs.filter((tech)=>{
    const textTransform = tech.title.toLowerCase().replaceAll(' ','-')
      return techsToSelect.some((item)=>item == textTransform)
    

  })
  const techContainer = document.createElement('div')
  techContainer.classList.add('favorite-tools__list')
  const techList = selectedTechs.map((tech)=>{
    const li = document.createElement('li')
    const cardTech = document.createElement('div')
    cardTech.classList.add('card--tech')
    const image = document.createElement('img')
    image.classList.add(tech.title.toLowerCase())
    image.src = tech.image
    image.alt = tech.title
    
    const title = document.createElement('h3')
    title.textContent = tech.title
    li.append(cardTech)
    cardTech.append(image,title)
    return li

  })
  techContainer.append(...techList)
  favoriteTools.insertAdjacentElement('beforeend',techContainer)



}


// loadProjectCarrousel();
loadLabels()