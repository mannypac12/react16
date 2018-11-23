import React, { Fragment }from 'react';
import classes from './Cockpit.css' 


const cockpit = (props) => {

    const assignedClasses = []
    let btnClass = classes.Button;    

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    } 
    
    return (
        <Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really Working</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>        
            <button onClick={props.login}>Log in</button>
        </Fragment>
    );
};

export default React.memo(cockpit);