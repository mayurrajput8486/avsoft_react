import React, { useState, useMemo, useCallback } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)

    /* const user = {
        name : 'Virat',
        age : 36
    } */

    const appName = "React"

    const user = useMemo(()=>{
        return {
        name : 'Virat',
        age : 36
    }
    },[])

    //useMemo(), React.memo() are used for values 

    /* const handleClick = () =>{
        return 'I am Function'
    } */

    const handleClick = useCallback(()=>{
        return 'I am Function'
    },[])

    
  return (
    <div>
        <h2>I am Parent Comp</h2>
        <h3>Current Value - {count}</h3>
        <button onClick={()=>setCount(count + 1)}>+</button>

        <Child appname={appName} userdata={user} myfun={handleClick}/>
    </div>
  )
}

export default Parent