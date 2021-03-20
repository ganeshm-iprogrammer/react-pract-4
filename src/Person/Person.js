import react from 'react';
import './Person.css'
function Person(props) {

    return (
        <div className="Person">
            <p onClick={props.click}> i am {props.name} and i am {props.age} years old!</p>
          
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person