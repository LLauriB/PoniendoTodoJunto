import { Component } from "react";

class Person extends Component{
    constructor(props){
        super(props);
        this.state = {
            edad: this.props.age,
        }
    }

    incrementarEdad= () => {
        this.setState({
            edad: this.state.edad + 1
        });
    }


    render = () => {
        return(
            <>
               <h1>{this.props.firstName} {this.props.lastName} </h1>
                <p>Age:{this.state.edad}</p>
                <p>Hair Color: {this.props.HairColor}</p>
                <button onClick={this.incrementarEdad}>Birthday Button for {this.props.firstName}</button>
            </>
        );

    }
} 

export default Person;
