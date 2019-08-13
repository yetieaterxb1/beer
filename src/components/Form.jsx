import React from 'react';
class Form extends React.Component {
    constructor(){
        this.state={
            submitButtonToggle: true,
            username: ''
        }
    }

    inputHandler=(e)=>{
        if(e){
            this.setState({
                username: e.target.value
            })
        }
    }

    render(){
        return(
            <div>
                <input type='text' value='this.state.username' id='username' onChange='inputHandler' />
                <Button title='Submit' disabled={this.state.username.length > 0}> </Button>
            </div>
        )
    }
}