import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

import { useState } from 'react'

import Usersfiled from './components/Usersfiled'
import Usersdata from './components/Usersdata'
const App = () => {
  
  const [users, setusers] = useState([])
  const registerUser = (data) =>{
    setusers([...users,data])
  }
  return (
    <div>
      <h2 className='text-center mt-3'>Register User Data</h2>
      <Usersfiled register={registerUser}/>
      <Usersdata userDetails={users}/>
    </div>
  )
}

export default App