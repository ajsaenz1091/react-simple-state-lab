import React, {Component} from 'react'



class Cell extends Component {
    constructor(props){
        super();
        this.state ={
            color: props.value
        }
    }
    changeStateColor = () =>{
        // if(this.state.color === '#F00' || this.state.color === '#00F'){
            this.setState({color: '#333'})
    }
    render(){
        console.log(this.state.color)
        return(
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.changeStateColor} ></div>    
        )
    }
}

export default Cell;