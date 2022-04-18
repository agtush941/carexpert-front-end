import React, { Component } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

class HospitalReg extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            city: '',
            state: '',
            address: '',
            contact: '',
            email: '',
            password: '',
            headsname: '',
            headsemail: '',
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
            state: this.state.state,
            address: this.state.address,
            contact: this.state.contact,
            email: this.state.email,
            password: this.state.password,
            headsname: this.state.headsname,
            headsemail: this.state.headsemail,
        }
    
        axios.post('http://localhost:3001/Hospital/register', newUser)
          .then(responce => {
            console.log(responce.data);
            return responce.data;
          }) 
          .then(res => {
            if(res === 'user already exist...') {
              this.setState({errors: res})
            }else {
              this.setState({flag:true})
            }
          })
      }
    
      render() {
        return (
            
            <div className="body">
                {this.state.flag && (
          <Navigate to="/Hospitallogin" replace={true} />
        )}
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit} >
                  <h1 className="h3 mb-3 font-weight-normal btn-rg">Register Hospital</h1>
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
                    <label htmlFor="state">state</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      placeholder="Enter state"
                      value={this.state.state}
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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
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
                    <label htmlFor="headsname">name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="headsname"
                      placeholder="Enter your name"
                      value={this.state.headsname}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="headsemail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="headsemail"
                      placeholder="Enter email"
                      value={this.state.headsemail}
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
          
          </div>
        )
      }
}

export default HospitalReg;