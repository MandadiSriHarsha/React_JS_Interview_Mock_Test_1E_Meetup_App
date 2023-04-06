import React from 'react'

const RegisterDetailsContext = React.createContext({
  isRegistered: '',
  username: '',
  topic: '',
  isErrorGenerated: '',
  onChangeUsername: () => {},
  onChangeTopic: () => {},
  onChangeRegistrationStatus: () => {},
  onChangeError: () => {},
})

export default RegisterDetailsContext
