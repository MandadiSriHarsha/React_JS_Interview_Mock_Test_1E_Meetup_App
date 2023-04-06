import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import RegisterDetailsContext from './context/RegisterDetailsContext'

import HomeRoute from './components/HomeRoute'

import RegisterRoute from './components/RegisterRoute'

import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

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

class App extends Component {
  state = {
    isRegistered: false,
    username: '',
    topic: topicsList[0].displayText,
    isErrorGenerated: false,
  }

  onChangeUsername = nameValue => {
    this.setState({username: nameValue})
  }

  onChangeTopic = topicValue => {
    const text = topicsList.filter(eachitem => eachitem.id === topicValue)
    this.setState({topic: text[0].displayText})
  }

  onChangeRegistrationStatus = () => {
    this.setState({isRegistered: true})
  }

  onChangeError = () => {
    this.setState(prevState => ({
      isErrorGenerated: !prevState.isErrorGenerated,
    }))
  }

  render() {
    const {isRegistered, username, topic, isErrorGenerated} = this.state
    return (
      <RegisterDetailsContext.Provider
        value={{
          isRegistered,
          username,
          topic,
          isErrorGenerated,
          onChangeError: this.onChangeError,
          onChangeUsername: this.onChangeUsername,
          onChangeTopic: this.onChangeTopic,
          onChangeRegistrationStatus: this.onChangeRegistrationStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </RegisterDetailsContext.Provider>
    )
  }
}

export default App
