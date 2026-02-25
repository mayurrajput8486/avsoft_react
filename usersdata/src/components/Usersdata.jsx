import React from 'react'

const Usersdata = ({userDetails}) => {
  return (
    <div className='mt-4'>
        <table className='table w-50 mx-auto'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    userDetails.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Usersdata

