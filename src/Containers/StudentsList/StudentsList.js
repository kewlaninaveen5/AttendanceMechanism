import React, { Component } from 'react';
import Student from './Student/Student';
// import Order from '../CheckoutPanel/Order/Order';
import axios from '../../axiosOrders';
// import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class StudentsList extends Component {

    state = {
        Students: [],
        loading: true
    };    
    
    componentDidMount () {
            
        axios.get('students.json')
        .then(
            res =>{
            const fetchedStudents= [];
            for (let key in res.data) {
                fetchedStudents.push(
                     {...
                        res.data[key],
                        id: key
                    }
            );
                    
            }
            this.setState({loading: false, Students: fetchedStudents})
        })
        .catch(err => {
            this.setState({loading: false})
        } )
    };

    render () {               

        return (
            <div>
                {console.log(this.state.Students)}
                {this.state.Students.map(order => (
                    <Student
                         key={order.id} 
                         name={order.userDetails.name}
                         
                        //    ingredients={order.ingredients}
                        //    price={order.price}    
                           /> 
                ))}
                
            </div>
        );
            
        
    };
}

export default StudentsList;