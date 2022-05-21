import React, { Component } from 'react';
import axios from 'axios';

class DoctorList extends Component {
    constructor(){
        super();
        this.state = {
    
          isLoading: true,    
          Doctors: []
        }
      }

      componentDidMount(){
        axios.get('https://limitless-refuge-36101.herokuapp.com/Hospital/Doctors',{
            headers: {
              authorization: sessionStorage.getItem('usertoken')
            }
          })
            .then(res => {
              this.setState({Doctors: res.data});
              this.setState({isLoading: false});
            })
      }

      render(){
        const { Doctors, isLoading} = this.state;
        return(<>
            {(!isLoading ? Doctors.map(Doctor => {
                return (
                  <div key={Doctor.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                    <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {Doctor.name} </p>
                    </div>
                )
                }) : <h4>Loading</h4>)}</>
        )
      }

}

export default DoctorList;
