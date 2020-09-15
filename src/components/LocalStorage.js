import React from 'react'

class LocalStorage extends React.Component{

    constructor(props){
        super(props)
    }

    handleClickButton(e){
        e.preventDefault()
        localStorage.setItem('data',e.target.elements.mlocal.value.trim())
        const person = {
            name : localStorage.getItem('data'),
            age : 28,
            location:'Marvrus'
        }
        localStorage.setItem('objectItem',JSON.stringify(person))

    }

    handleShowLocalStorage(){

        console.log(JSON.parse(localStorage.getItem('objectItem')))
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleClickButton}>
            <input type="text" name="mlocal"/>
            <button>Save localStorage</button>
            </form>
            <button onClick={this.handleShowLocalStorage}>Show localStorage</button>
            </div>
        )
    }
}

export default LocalStorage