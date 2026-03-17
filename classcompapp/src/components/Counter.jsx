import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0   //initial Value
        }
        //const [count, setCount] = useState(0)
        //this.setState()
    }
    render(){
        return(
            <div>
                <h2>Counter App - {this.props.topic}</h2>
                <h3>Count - {this.state.count}</h3>
                <button onClick={()=>this.setState({count : this.state.count + 1})}>+</button>
                <button onClick={()=>this.setState({count : this.state.count - 1})}>-</button>
            </div>
        )
    }
}
export default Counter;