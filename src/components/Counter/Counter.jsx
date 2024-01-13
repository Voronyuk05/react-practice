import { Component } from "react"
import './Counter.css'
import { Buttons } from "./Buttons"
import { CounterValue } from "./CounterValue"

export class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue,
    }

    handleIncrement=()=>{
        this.setState((prevState) =>{
            return {
                value: prevState.value + 1
            }
        })
    }
    handleDecrement=()=>{
        this.setState((prevState) =>{
            return {
                value: prevState.value - 1
            }
        })
    }


    render() {
        const {initialValue} = this.props

        return(
            <div className="Counter Counter__controls">
                <CounterValue value={this.state.value} />
                <Buttons handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} />
            </div>
        )
    }
}


