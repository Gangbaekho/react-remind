import React from 'react'

class Action extends React.Component{

    handlePick(){
        alert("Action button is clicked")
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

export default Action