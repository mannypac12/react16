import React, { Component } from 'react'
import Radium from 'radium'
import classes from './Person.css'
// class Person extends Component {

//     construction(name, age) {
//         super()
//         this.name = name
        
//     }

// } 

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
      }
    
    // componentWillMount() {
    //     console.log('[Person.js] Inside ComponentWillMount()')
    // }

    // componentDidMount() {
    //     console.log('[Person.js] Inside ComponentDidMount()')
    // }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside shouldComponentUpdate()', nextProps, nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentDidUpdate()', nextProps, nextState)
    }

    render () {
        console.log('[Person.js] Inside render()')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value= {this.props.name}/>
            </div>

        )
    } 
} 


export default Radium(Person);