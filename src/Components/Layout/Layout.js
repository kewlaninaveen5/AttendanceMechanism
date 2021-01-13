import React, { Component } from "react";
import RegisterPanel from '../RegisterPanel/RegisterPanel';
import LoggedInPanel from '../../Containers/LoggedInPanel/LoggedInPanel';
import './Layout.css';



class Layout extends Component {

    

    state = {
        LoggedIn: false,
        UserType: null
      };

      loggedInTeacher = () => {
          this.setState({LoggedIn: true, UserType: 'Teacher'})
      }

      loggedInStudent = () => {
        this.setState({LoggedIn: true, UserType: 'Student'})
    }
      

    render () {
        
        return (
            <div className="Layout" >
                {this.state.LoggedIn ?
                 <LoggedInPanel UserType={this.state.UserType} /> 
                 : <RegisterPanel /> }
                <button onClick={this.loggedInTeacher}>temporary Login as teacher</button>
                <button onClick={this.loggedInStudent}>temporary Login as student</button>
                
            </div>
        );
    };
};

export default Layout;

