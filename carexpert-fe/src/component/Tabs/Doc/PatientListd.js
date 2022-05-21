import React, { Component } from 'react';
import axios from 'axios';
import {Button,Nav} from 'react-bootstrap';

class PatientListD extends Component {
    constructor(){
        super();
        this.state = {
    
          isLoading: true,    
          patients: []
        }
      }

      componentDidMount(){
        axios.get('https://limitless-refuge-36101.herokuapp.com/Doctor/Patients',{
            headers: {
              authorization: sessionStorage.getItem('usertoken')
            }
          })
            .then(res => {
              this.setState({patients: res.data});
              this.setState({isLoading: false});
            })
      }

      render(){
        const { patients, isLoading} = this.state;
        return(<><h1>works</h1>
            {(!isLoading && patients !== []? patients.map(patient => {
                return (<Nav.Link href={'/Home/Pat/Profile/' + patient.id}>
                  <div key={patient.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                    <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {patient.name} </p>
                    </div></Nav.Link>
                )
                }) : <h4>Loading</h4>)}</>
        )
      }

}

export default PatientListD;
