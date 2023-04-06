import {Link} from 'react-router-dom'

import RegisterDetailsContext from '../../context/RegisterDetailsContext'

import Navbar from '../Navbar'

import './index.css'

const HomeRoute = () => {
  const RenderUserDetailsCard = props => {
    const {username, topic} = props
    return (
      <div className="registered-card">
        <h1 className="username">Hello {username}</h1>
        <p className="topic">Welcome to {topic}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="meetup-image"
        />
      </div>
    )
  }

  const renderRegisterCard = () => (
    <div className="register-card">
      <div className="content-card">
        <h1 className="register-heading">Welcome to Meetup</h1>
        <p className="register-description">Please register for the topic</p>
        <Link to="/register" style={{textDecoration: 'none'}}>
          <button className="register-button" type="button">
            Register
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
        className="meetup-image"
      />
    </div>
  )

  return (
    <RegisterDetailsContext.Consumer>
      {value => {
        const {isRegistered, username, topic} = value
        const userDetails = {username, topic}
        return (
          <>
            <Navbar />
            {isRegistered
              ? RenderUserDetailsCard(userDetails)
              : renderRegisterCard()}
          </>
        )
      }}
    </RegisterDetailsContext.Consumer>
  )
}

export default HomeRoute
