import React from 'react'
import {FunctionComponent} from "react"
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject
}> = ({
    project:{
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {
  return (
    <div>
        <img  src={image_path} alt={name} className='cursor-pointer' />
        <p className='my-2 text-center'>{name}</p>
        
    </div>
  )
}

export default ProjectCard