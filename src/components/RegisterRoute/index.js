import Navbar from '../Navbar'

import RegisterDetailsContext from '../../context/RegisterDetailsContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <>
    <Navbar />
    <RegisterDetailsContext.Consumer>
      {value => {
        const {
          username,
          topic,
          onChangeUsername,
          onChangeTopic,
          isErrorGenerated,
          onChangeRegistrationStatus,
          onChangeError,
        } = value

        const changeUsername = event => {
          onChangeUsername(event.target.value)
        }
        const changeTopic = event => {
          onChangeTopic(event.target.value)
        }
        const onSubmitForm = event => {
          event.preventDefault()
          if (username === '') {
            onChangeError()
          } else {
            const {history} = props
            history.replace('/')
            onChangeRegistrationStatus()
          }
        }

        const getSelectValue = () => {
          const list = topicsList.filter(
            eachitem => eachitem.displayText === topic,
          )
          return list[0].id
        }
        return (
          <div className="register-route-bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="form-image"
            />
            <form className="register-form" onSubmit={onSubmitForm}>
              <h1 className="form-heading">Let us join</h1>
              <label className="label" htmlFor="userInput">
                NAME
              </label>
              <input
                id="userInput"
                type="text"
                className="input"
                onChange={changeUsername}
                value={username}
                placeholder="Your name"
              />
              <label className="label" htmlFor="userTopic">
                TOPICS
              </label>
              <select
                className="select-input"
                id="userTopic"
                value={getSelectValue()}
                onChange={changeTopic}
              >
                {topicsList.map(eachitem => (
                  <option value={eachitem.id} key={eachitem.id}>
                    {eachitem.displayText}
                  </option>
                ))}
              </select>
              <button className="form-button" type="submit">
                Register Now
              </button>
              {isErrorGenerated ? (
                <p className="error-message">Please enter your name</p>
              ) : null}
            </form>
          </div>
        )
      }}
    </RegisterDetailsContext.Consumer>
  </>
)

export default RegisterRoute
