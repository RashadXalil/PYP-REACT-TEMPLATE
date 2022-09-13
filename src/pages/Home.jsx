import React from 'react'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import TeamMembers from '../components/TeamMembers'

const Home = () => {
  return (
    <>
      <Header />
      <ProjectList />
      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <div className="w3-row-padding" />
        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <TeamMembers />
        {/* Contact Section */}
        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Lets get in touch and talk about your next project.</p>
          <form action="/action_page.php" target="_blank">
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              required=""
              name="Name"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required=""
              name="Email"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required=""
              name="Subject"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required=""
              name="Comment"
            />
            <button className="w3-button w3-black w3-section" type="submit">
              <i className="fa fa-paper-plane" /> SEND MESSAGE
            </button>
          </form>
        </div>
        {/* Image of location/map */}
        <div className="w3-container">
          <img
            src="https://www.w3schools.com//w3images/map.jpg"
            className="w3-image"
            style={{ width: '100%' }}
            alt="..."
          />
        </div>
        {/* End page content */}
      </div>
    </>
  )
}

export default Home
