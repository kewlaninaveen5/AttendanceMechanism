import React from 'react';
import './Student.css';

const students = (props) => {

    return (
        <div>
            {console.log(props.key)}
            <div>
                <div className='Student'>{props.name} </div>
            <span className='present'>Present</span>
            </div> 
            
            

        </div>
    )
}

export default students;