import React from 'react'
import { increment, decrement } from '../features/counter/counterSlicer'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{textAlign : 'center'}}>
        <h2>Counter Using Redux</h2>
        <h2>Counter Value - {count}</h2>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default Counter