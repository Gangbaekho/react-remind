import React from 'react'
import Option from './Option'

class Options extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Delete all options</button>
                {this.props.options.map((option)=>{
                    return <Option key={option} optionText={option}/>
                })}
            </div>
        )
    }
}

export default Options