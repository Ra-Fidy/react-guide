import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {id:'2d1f', name: 'Max', age: 28},
      {id:'32er', name: 'Manu', age: 29},
      {id:'q54f', name: 'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  togglePersonHandler = () => {
    this.setState ({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = (event, persId) => {
    let persons = [...this.state.person]
    let updatedPersons = persons.map(pers => {
      if(pers.id === persId) pers.name = event.target.value
      return pers
    })
    this.setState ({ person: updatedPersons })

    // const persIndex = this.state.person.findIndex(pers => pers.id === persId)
    // let persons = [...this.state.person]
    // persons[persIndex].name = event.target.value
    // this.setState ({
    //   person: persons
    // })

    // const persIndex = this.state.person.findIndex(pers => pers.id === persId)
    // const person = {...this.state.person[persIndex]}
    // person.name = event.target.value
    // const persons = [...this.state.person]
    // persons[persIndex] = person
    // this.setState ({person: persons})
  }

  deletePersonHandler = persIndex => {
    let persons = [...this.state.person]
    persons.splice(persIndex, 1)

    this.setState({
      person: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            persons = [...this.state.person].map((person, persIndex) => {
              return <Person 
                click={() => this.deletePersonHandler(persIndex)}
                key={person.id}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }          
        </div> 
      )
      style.backgroundColor = 'red'      
    }

    const classes = []
    if(this.state.person.length < 3) classes.push('red')
    if(this.state.person.length < 2) classes.push('bold')

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>

        <button 
          onClick={this.togglePersonHandler}
          style={style}
        >
          Toggle Persons
        </button>       
      
        {persons}
      </div>
    );
  }
}

export default App;