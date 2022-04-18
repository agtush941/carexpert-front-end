import React, { Component } from 'react';
import axios from 'axios';
import Permission from '../Permission';


class DoctorReg extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            city: '',
            address: '',
            contact: '',
            email: '',
            age: '',
            sex: '',
            yoe: '',
            qualification: '',
            specialist: '',
            flag:false,
            errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {
            name: this.state.name,
            city: this.state.city,
            address: this.state.address,
            contact: this.state.contact,
            email: this.state.email,
            age: this.state.age,
            sex: this.state.sex,
            yoe: this.state.yoe,
            qualification: this.state.qualification,
            specialist: this.state.specialist,
        }
        console.log(sessionStorage.getItem('usertoken'))
        axios.post('http://localhost:3001/Hospital/register_doctor',newUser ,{headers: {
          'authorization': sessionStorage.getItem('usertoken')
        }})
          .then(responce => {
            console.log(responce.data);
            return responce.data;
          }) 
          .then(res => {
            if(res === 'doctor email already exist...') {
              this.setState({errors: res})
            }else {
              this.setState({flag:true})
            }
          })
      }
    
      render() {
        return (
          <div className="body">
          
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit} >
                  <h1 className="h3 mb-3 font-weight-normal btn-rg">Register Doctor</h1>
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder="Enter city"
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">contact</label>
                    <input
                      type="text"
                      className="form-control"
                      name="contact"
                      placeholder="Enter your Phone Number"
                      value={this.state.contact}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      placeholder="Enter your age"
                      value={this.state.age}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sex">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sex"
                      placeholder="Male or Female"
                      value={this.state.sex}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="yoe">year of practice start</label>
                    <input
                      type="number"
                      className="form-control"
                      name="yoe"
                      placeholder="2001,2002...etc"
                      value={this.state.yoe}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="qualification">qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      name="qualification"
                      placeholder="MBBS,MD...etc"
                      value={this.state.qualification}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialist">specialist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="specialist"
                      placeholder="heart,brain..etc"
                      value={this.state.specialist}
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register!
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Permission org = 'H' route = "/HospitalLogin"/>
          </div>
        )
      }
}

export default DoctorReg;