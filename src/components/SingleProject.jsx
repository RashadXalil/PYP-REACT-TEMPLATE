import React from 'react'

const SingleProject = ({ project }) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
          {project.title}
        </div>
        <img src={project.image} alt="House" style={{ width: '100%' }} />
      </div>
    </div>
  )
}

export default SingleProject
