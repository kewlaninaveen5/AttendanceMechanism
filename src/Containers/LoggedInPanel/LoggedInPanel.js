import React, { Component } from "react";
import StudentLogin from '../../Components/StudentLogin/StudentLogin';
import TeacherLogin from '../../Components/TeacherLogin/TeacherLogin';

 
class LoggedInPanel extends Component {

    render () {
        
        return (
            <div>
                {this.props.UserType == 'Teacher' ? <TeacherLogin /> : <StudentLogin />}
                
            </div>
        )
    }
};

export default LoggedInPanel