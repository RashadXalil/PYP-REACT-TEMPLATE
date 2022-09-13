import React from 'react'
import SingleProject from './SingleProject'

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'Brick House',
      image: 'https://www.w3schools.com/w3images/house3.jpg',
    },
    {
      id: 2,
      title: 'Summer House',
      image: 'https://www.w3schools.com/w3images/house2.jpg',
    },
    {
      id: 3,
      title: 'Renovated',
      image: 'https://www.w3schools.com/w3images/house3.jpg',
    },
    {
      id: 4,
      title: 'Barn House',
      image: 'https://www.w3schools.com/w3images/house4.jpg',
    },
    {
      id: 5,
      title: 'Summer House',
      image: 'https://www.w3schools.com/w3images/house4.jpg',
    },
    {
      id: 6,
      title: 'Brick House',
      image: 'https://www.w3schools.com/w3images/house3.jpg',
    },
    {
      id: 7,
      title: 'Renovated',
      image: 'https://www.w3schools.com/w3images/house2.jpg',
    },
    {
      id: 8,
      title: 'Brick House',
      image: 'https://www.w3schools.com/w3images/house3.jpg',
    },
  ]

  return (
    <>
      {/* Project Section */}
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>
      <div className="w3-row-padding">
        {projects.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
    </>
  )
}

export default ProjectList
