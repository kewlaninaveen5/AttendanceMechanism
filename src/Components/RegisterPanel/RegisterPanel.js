import React, { Component } from "react";
import Button from '../UI/Button/Button';
import RegistrationData from '../../Containers/RegistrationData/RegistrationData';
import LoginData from '../../Containers/LoginData/LoginData';

const TEACHER = 'Teacher';
const STUDENT = 'Student'; 

class RegisterPanel extends Component {

    state = {
        Registering: false,
        UserType: null,
        LogInDetails: false
    }
    
    registerStudent = () => {
        //   const currentValue = this.state.Registering;
          this.setState({Registering: true, UserType: STUDENT, LogInDetails: false});
          
      }  
      
      registerTeacher = () => {
        //   const currentValue = this.state.Registering;
          this.setState({Registering: true, UserType: TEACHER, LogInDetails: false});
          
      } 

      login = () => {
          this.setState({LogInDetails: true, Registering: false})
          
      }

    render () { 
        let RegisterInput = null;
        if (this.state.Registering) {
            RegisterInput = <div>
                <h3>Registering as: {this.state.UserType} </h3>
             <RegistrationData UserType={this.state.UserType} />
            </div>
        }

        let LoginInput = this.state.LogInDetails ? <div>
            <LoginData />
            </div> : 
            <Button buttonType='Registration' clicked={this.login} >LOGIN</Button>
        

        // let LoginInput = <Button buttonType='Registration' clicked={this.login} >LOGIN</Button>;
        // if (this.state.LogInDetails) {
        //     LoginInput = <div>
            
        //      <LoginData />
        //     </div>
        // }     
           
        return (
            <div>
                <Button buttonType='Registration' clicked={this.registerStudent} >
                    Register as a Student</Button>
                <Button buttonType='Registration' clicked={this.registerTeacher}>
                    Register as a Teacher</Button>
                {RegisterInput}
                {LoginInput}
                
                
            </div>
        )
    }
}

export default RegisterPanel;