

/* const ChildD = ({founderC}) => {
  return (
    <div>
        <h3>Child D - {founderC}</h3>
    </div>
  )
}

export default ChildD */



//This is contextAPI
//To access provider data then we use a hook called useContext

import { useContext} from "react"
import FounderContext from "../context/Founder"
import ChildE from "./ChildE"
const ChildD = () => {

  const reactDev = useContext(FounderContext)
  return (
    <div>
        <h3>Child D - {reactDev}</h3>
        <ChildE/>
    </div>
  )
}

export default ChildD