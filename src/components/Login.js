import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);


    this.state ={
      username: '',
      password:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }
  
     handleChange(event) {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
  
      handleSubmit(event) {
        event.preventDefault();
        const data = {
          "username":this.state.username,
          "password":this.state.password
      };
          axios.post(`Your_Api_Auth_Key`, data)
          .then(res => {
            sessionStorage.subcriptionId=res.data.subcriptionId;
            console.log(res);
            console.log(res.data);
          })

          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "x-api-key": sessionStorage.subcriptionId,
            }
          };

          axios.post(`Your_Request_Token_API_Key`,data, axiosConfig )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    

  render() {
    return (
      <div className="row" style={{marginTop:"100px", marginBottom:"50px"}}>
      <div className="col-md-offset-4 col-md-4">
      <div className="container" style={{backgroundColor:"#fff", boxShadow:"0 7px 21px 0 rgba(0, 0, 0,0.1)" }}>
      <div className="Login">
      <div className="row">
      <div className="col-md-offset-1 col-md-5"><img src={"https://i.ibb.co/6JbBSFq/logo.png"} width={100} height={100}/></div>
      <div className="col-md-6" style={{textAlign:"center"}}><h3> SIGN IN </h3></div>
      </div><hr width="80%" />
      
      
      <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>User name</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <div className="row">
          <div className="col-md-offset-3 col-md-6">
          <Link to="/Accounts" style={{textDecoration:"none"}}><Button block type="submit" bsStyle="success">Login</Button></Link>
          </div>
        </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}