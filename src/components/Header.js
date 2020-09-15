import React from 'react'

class Header extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

export default Header