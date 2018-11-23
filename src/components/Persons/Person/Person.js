import React, { Component } from 'react'
import Radium from 'radium'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import { AuthContext } from '../../../containers/App'

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
        this.inputElement = React.createRef();
      }
    
    // componentWillMount() {
    //     console.log('[Person.js] Inside ComponentWillMount()')
    // }



    componentDidMount() {
        console.log('[Person.js] Inside ComponentDidMount()')
        if (this.props.position === 0) {
            this.inputElement.current.focus()
        }
    }

    focus() {
        this.inputElement.current.focus();
    }    

    render () {
        console.log('[Person.js] Inside render()')
        return (
            <>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} !</p>
                <p>{this.props.children}</p>
                <input ref={this.inputElement} type="text" onChange={this.props.changed} value= {this.props.name}/>
            </>
        )
    } 
} 


export default withClass(Person, classes.Person);