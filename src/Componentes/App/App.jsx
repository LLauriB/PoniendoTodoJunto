import './App.css';
import Person from '../personcard/person';
import {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
          person: [{
            firstName: "Doe",
            lastName: ",Jane",
            age: 45,
            HairColor: "Black"
          },
          {
            firstName: "Smith",
            lastName: ",John",
            age: 88,
            HairColor: "Brown"

          },
          {
            firstName: "Fillmore",
            lastName: ",Millard",
            age: 50,
            HairColor: "Brown"
          },
          {
            firstName: "Smith",
            lastName: ",Maria",
            age: 62,
            HairColor: "Brown"
          }]
        }
    }

  render = () => {
      return(
          <div className='App'>
            
            {this.state.person.map((person) => {
              return (<Person firstName={person.firstName}
                              lastName={person.lastName}
                              age={person.age} 
                              HairColor={person.HairColor}/>)
            })
            }
          </div>
      )
  }
}

export default App;
