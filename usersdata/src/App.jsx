import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

import { useState } from 'react'

import Usersfiled from './components/Usersfiled'
import Usersdata from './components/Usersdata'
const App = () => {
  const [users, setUsers] = useState([])

  const addUserDetails = (data) =>{
    setUsers([...users,data])
  }
  return (
    <div>
      <h2 className='text-center mt-3'>Register User Data</h2>
      <Usersfiled addUser={addUserDetails}/>
      <Usersdata usersData={users}/>
    </div>
  )
}

export default App