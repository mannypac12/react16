import React, { PureComponent }from 'react'

import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
        this.lastPersonRef = React.createRef();
      }
    
    componentWillMount() {
    console.log('[Persons.js] Inside ComponentWillMount()')
    }

    componentDidMount() {
    console.log('[Persons.js] Inside ComponentDidMount()')
    this.lastPersonRef.current.focus();
    }
        

    render () {
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, index) => {
            return  <Person 
            click={() => this.props.clicked(index)}
            key={person.id}
            name={person.name} 
            age={person.age}
            ref={this.lastPersonRef}
            authenticated={this.props.isAuthenticated}
            changed={( event ) => this.props.changed(event, person.id)}/>
          })
    }
}

export default Persons;
