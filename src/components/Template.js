import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

class Template extends React.Component{

    render(){

        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer'
        const options = ["Thing one", "Thing two", "Thing threee"]

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}

export default Template