import React from 'react'

const Member = ({ member }) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={member.image} alt="Dan" style={{ width: '100%' }} />
      <h3>{member.name}</h3>
      <p className="w3-opacity">{member.position}</p>
      <p>{member.desc}</p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
  )
}

export default Member
