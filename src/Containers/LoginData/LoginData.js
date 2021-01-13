import React, { Component } from 'react';
import Button from '../../Components/UI/Button/Button';
import Classes from './LoginData.css';
// import axios from '../../axiosOrders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Input from '../../Components/UI/Input/Input';



class RegistrationData extends Component {
    state = {
        orderForm: {
                email:  {
                    elementType: 'input',
                    elementConfig: {
                        type: "text",
                        placeholder: 'Your Email'
                    },
                value: '',
                validation: {
                        required: true
                    },
                valid: false,
                touched: false
                },
                Password:  {
                    elementType: 'input',
                    elementConfig: {
                        type: "",
                        placeholder: 'Enter a Password'
                    },
                value: '',
                validation: {
                        required: true
                    },
                valid: false,
                touched: false
                },
                            
        },
        formIsValid: false,
        loading: false
    };

    orderHandler = (event) => {
        // event.preventDefault();
    }

    checkValidity (value, rules) {
        let isValid = true;
               
        if (rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }
            //this is done to copy the state deeply
            //since the state is nested objects and
            // so inner objects didnt get copied in first spread operator
        const updatedFormElement = {                            
            ...updatedOrderForm[inputIdentifier]                
        }
        updatedFormElement.value=event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid}); 

    
    };                                                          

    render () {
        const formElementsArray = [];
        for ( let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler} >
                    {/* <Input elementType='...' elementConfig='...' Value='...' />   */}
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.value}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}

                             />
                    ))}  
                    <Button buttonType='Success' disabled={!this.state.formIsValid}  >Login</Button>
                </form>
        );
        if (this.state.loading) {
            form= <Spinner />
        }
        return (
            <div className={Classes.RegistrationData} >
                {console.log('Hello world')}
                <h3>Enter Your Login Details</h3>
                {form}        
            </div>
        )
    }

}
export default RegistrationData;