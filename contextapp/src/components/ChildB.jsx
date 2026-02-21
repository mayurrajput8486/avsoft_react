

/* import ChildC from './ChildC'
const ChildB = ({founderA}) => {
  return (
    <div style={{
        border : '2px solid',
        padding : '5px'
    }}>
        <h3>Child B - {founderA}</h3>
        <ChildC founderB={founderA}/>
    </div>
  )
}

export default ChildB */

//This is contextAPI
import FounderContext from '../context/Founder'
import ChildC from './ChildC'
import { useContext } from 'react'

const ChildB = () => {
  const user = useContext(FounderContext)
  // variableName = useContext(contextName)
  return (
    <div style={{
        border : '2px solid',
        padding : '5px'
    }}>
        <h3>Child B - {user}</h3>
        <ChildC/>
    </div>
  )
}

export default ChildB