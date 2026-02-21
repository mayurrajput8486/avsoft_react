import React from 'react'
import { useState } from 'react'
const LivetextChecker = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
        <h2 className='text-center mt-4'>Live Text Checker</h2>
        <div className='bg-dark w-75 p-2 text-center mx-auto rounded-3'>
            <input
                type='text'
                placeholder='Enter Username'
                value={username}
                className='me-2 p-2 border border-0 outline-none'
                style={{outline : 'none'}}
                onChange={(event)=>setUsername(event.target.value)}
            />
            <input
                type='password'
                value={password}
                placeholder='Enter Password'
                className='p-2 border border-0'
                style={{outline : 'none'}}
                onChange={(event)=>setPassword(event.target.value)}
            />
            <div className='text-light mt-2'>
                My Username is <span className='fw-bold text-warning'>{username}</span> and password is <span className='fw-bold text-warning'>{password}</span>
            </div>
        </div>
    </div>
  )
}

export default LivetextChecker