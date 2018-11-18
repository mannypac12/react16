import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Radium, { StyleRoot } from 'radium'
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        {id:'asdf', name: 'Max', age: 28 },
        {id:'awgwh', name: 'Manu', age: 29 }, 
        {id:'wagea', name: 'Stephanie', age: 26 } 
      ], 
      showPersons:false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()')
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  switchNameHandler = (newName) => {
    console.log('Was Clicked')
    this.setState({    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 26 } 
    ], 
    showPersons: false})
  }

  nameChangedHandler = (event, id) => {
    const personIndex= this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name=event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {
    console.log('[App.js] Inside render()')
    let persons = null; 


    if (this.state.showPersons) {

      persons = (
          <Persons persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'good'}, React.createElement('h1', null,`Hi, I'm a React App!!!`))
  }
}

export default Radium(App);
