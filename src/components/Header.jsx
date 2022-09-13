import React from 'react'

const Header = () => {
  return (
    <>
      {/* Header */}
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: 1500 }}
        id="home"
      >
        <img
          className="w3-image"
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt="Architecture"
          width={1500}
          height={800}
        />
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min">
              <b>BR</b>
            </span>
            <span className="w3-hide-small w3-text-light-grey">Architects</span>
          </h1>
        </div>
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>
      </header>
    </>
  )
}

export default Header
