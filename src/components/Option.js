import React from 'react'

class Option extends React.Component{

    render(){
      return(
          <div>
            Option : {this.props.optionText}
          </div>
      )
    }
}

export default Option