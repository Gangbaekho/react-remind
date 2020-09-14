import React from 'react'

class Action extends React.Component{

    constructor(props){
     super(props)
    }

    render(){
        return (
            <div>
                <button 
                disabled={!this.props.hasOptions}
                onClick={this.props.handlePick}
                >What should I do?</button>
            </div>
        )
    }
}

export default Action