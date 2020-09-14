import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import StateLess from './StateLess'

class IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options:["Thing One","Thing two", "Thing three"]
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option)
            }
        })
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options : []
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }

    render(){

        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer'
        const options = ["Thing one", "Thing two", "Thing threee"]

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOption handleAddOption = {this.handleAddOption}/>
                <StateLess title={title} subtitle={subTitle}/>
            </div>
        )
    }
}

export default IndecisionApp