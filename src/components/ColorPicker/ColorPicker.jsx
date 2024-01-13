import { Component } from 'react'
import { Container, Title, ColorPickerOptions } from './ColorPicker.module.jsx'

export class ColorPicker extends Component {
    state = {
        colorOptionIdx: 0
    }


    handleClick = (optionId) => {
        if (optionId === this.props.colorOptionIdx) {
            return
        }
        this.setState({
            colorOptionIdx: optionId
        })
    }

    render() {
        const {options} = this.props
        const {colorOptionIdx} = this.state
        const label = options[colorOptionIdx].label
        return (
            <Container>
                <Title>Color Picker</Title>
                <span >Обраний колір: {label}</span>
                <br />
                {this.props.options.map(({label, color}, index) => (
                    <ColorPickerOptions onClick={() => this.handleClick(index)} 
                    key={label} 
                    bgc={color}
                    idx={index}
                    currentIdx={colorOptionIdx}
                    >
                    </ColorPickerOptions>
                ))}
            </Container>
        )
    }
}