import React from 'react'
import Member from './Member'

const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO & Founder',
      desc:
        'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: 'https://www.w3schools.com//w3images/team1.jpg',
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'Architect',
      desc:
        'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: 'https://www.w3schools.com//w3images/team2.jpg',
    },
    {
      id: 3,
      name: 'Mike Ross',
      position: 'Architect',
      desc:
        'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: 'https://www.w3schools.com//w3images/team3.jpg',
    },
    {
      id: 4,
      name: 'Dan Star',
      position: 'Architect',
      desc:
        'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: 'https://www.w3schools.com//w3images/team4.jpg',
    },
  ]
  return (
    <div className="w3-row-padding w3-grayscale">
      {members.map((member) => {
        return <Member key={member.id} member={member} />
      })}
    </div>
  )
}

export default TeamMembers
