

/* import ChildD from './ChildD'
const ChildC = ({founderB}) => {
  return (
    <div style={{
        border : '2px solid',
    }}>
        <h3>Child C - {founderB}</h3>
        <ChildD founderC={founderB}/>
    </div>
  )
}

export default ChildC */


//This is contextAPI
import PersonContext from '../context/person'
import ChildD from './ChildD'
import { useContext } from 'react'
const ChildC = () => {
  const person = useContext(PersonContext)
  return (
    <div style={{
        border : '2px solid',
    }}>
        <h3>Child C - {person}</h3>
        <ChildD/>
    </div>
  )
}

export default ChildC