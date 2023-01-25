import Link from 'next/link'
import React from 'react'
import { Project } from '../../models/project.model'



export const ProjectCard = ({ title, images, shortDescription,slug,techs }: Project) => {
  const mainTechs = techs.slice(0,3)
  return (
    <div className='project-card flex flex-col items-center text-center '>
      <img src={images[0] || '/not-available/2.svg'} alt={title} />
      <h3 className='mb-4'>{title}</h3>
      <p>{shortDescription}</p>
      <div className='project-card__techs my-2'>
        <h4 className='text-gray-600 font-bold'>Technologies</h4>
        <div className="gap-2 grid grid-cols-3 mt-8 mb-3">
            {mainTechs.map((tech) => {

              if(tech.includes('-')){
                const splited = tech.split("-").join(' ')
                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-10 h-10' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize text-center'>{splited}</span>
                </div>
                )
              } else {

                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-10 h-10' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize'>{tech}</span>
                </div>
                )

              }


            })}
          </div>
      </div>
      <Link className='btn btn--primary' href={`/projects/${slug}`}>More details</Link>
    </div>
  )
}
