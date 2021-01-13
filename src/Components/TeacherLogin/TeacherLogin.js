import React from 'react';
import StudentsList from '../../Containers/StudentsList/StudentsList';

const teacherLogin = () => {

    return (
        <div>
            <h3> Welcome to Teacher Portal </h3>
        <h3>Your Students are as below</h3>
        <StudentsList />
        
        </div>
        
    )
};

export default teacherLogin;