import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/users'
const ChildE = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h3>Child E - {user}</h3>
    </div>
  )
}

export default ChildE