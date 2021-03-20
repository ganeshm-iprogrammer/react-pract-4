
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {


  state = {
    persons: [
      { id: 1, name: "nirmala", age: "32" },
      { id: 2, name: "shubhangi", age: "3" },
      { id: 3, name: "rani", age: "47" },

    ],
    otherState: 'some other value',
    ShowPersons: false
  }



  togglePersonHandler = () => {
    const doesShow = this.state.ShowPersons;
    this.setState({ ShowPersons: !doesShow });

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons:persons    })

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; //old array
    // const persons= this.state.persons.slice();//best practice new person array
    const persons = [...this.state.persons];//spread operator  to update state immutability
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    let persons = null;
    if (this.state.ShowPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}

        </div>
      );
    }



    return (
      <div className="App">
        <button onClick={this.togglePersonHandler} >TogglePerson</button>

        {persons}


      </div>

    );
  }
}

export default App;