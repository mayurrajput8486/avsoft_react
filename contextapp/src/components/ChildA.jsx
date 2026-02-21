
/* import ChildB from './ChildB'
const ChildA = ({founder}) => {
  return (
    <div style={{
        border : '2px solid',
        padding : '5px'
    }}>
        <h3>Child A - {founder}</h3>
        <ChildB founderA={founder}/>
    </div>
  )
}

export default ChildA */

//This is ContextAPI
import ChildB from './ChildB'
const ChildA = () => {
  return (
    <div style={{
        border : '2px solid',
        padding : '5px'
    }}>
        <h3>Child A </h3>
        <ChildB/>
    </div>
  )
}

export default ChildA