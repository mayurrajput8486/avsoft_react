import React from 'react'
import { useState } from 'react'
const LikeDisLike = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
  return (
    <div>
        <h2 className='text-center mt-3'>Like and Dislike</h2>
        <div className='bg-dark p-3 w-25 mx-auto rounded-5 text-center'>
            <button className='bg-dark border border-0 fs-1 text-light' onClick={()=>setLike(like + 1)}>👍- {like}</button>
            <br/>
            <button className='bg-dark border border-0 fs-1 text-light' onClick={()=>setDislike( dislike + 1)}>👎- {dislike}</button>
        </div>
    </div>
  )
}

export default LikeDisLike