import React, { Component} from 'react';
import { castNewVote } from '../services/VoteCounterApi';
import EmailErrorComponent from '././EmailErrorComponent';
import SessionErrorComponent from '././SessionErrorComponent';
import SuccessComponent from '././SuccessComponent';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class VoteForm extends React.Component {
    state = {
      email: "",
      selectedFramework: "",
      hasError: false,
      hasSuccess: false
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault() 
      if (!localStorage.getItem('sameSession')) {
        castNewVote({email: this.state.email, framework: this.state.selectedFramework
        })
        .then(() => {
          this.props.handleVote({email: this.state.email, framework: this.state.selectedFramework})
          this.setState({
            email: "",
            selectedFramework: "",
            hasEmailError: false,
            hasSessionError: false,
            hasSuccess: true
          })
          this.myFormRef.reset()
        })
        .then(() => {
          localStorage.setItem('sameSession', true)
          console.log(localStorage)
        })
        .catch(() => {
          this.setState({
            hasEmailError: true,
            hasSessionError: false,
            hasSuccess: false,
            email: "",
            selectedFramework: ""
          })
          this.myFormRef.reset()
        })
        .then(() => {
          console.log(this.state.hasError)
        })
      } else {
        this.setState({
            hasEmailError: false,
            hasSessionError: true,
            hasSuccess: false,
            email: "",
            selectedFramework: ""
          })
          this.myFormRef.reset()
      }
    }
  render() {
    console.log(this.props.frameworks, "waffle")
    return (
        <Card style={{backgroundColor: "#000058"}}>
          <div className="card-header">
          Vote!
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
              <div className="form-group">
                <h4>Enter Your Email:</h4>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.email}
                  onChange={this.handleChange}
                  required
                  style={{
                    padding: "1%",
                    backgroundColor: "#ffff1b",
                    color: "#000080", 
                    fontSize: "20px", 
                    fontWeight: "bold"
                  }}
                />
              </div>
              <h4>Choose a Framework:</h4>
              <div>
                <select name="selectedFramework"
                value={this.selectedFramework}
                onChange={this.handleChange}
                required
                style={{
                    padding: "1%"
                  }}
                >
                <option value="" disabled>Choose a Framework</option>
                {this.props.frameworks.map(framework => 
                  <option value={framework.repo}>{framework.repo}</option>)
                }}
                </select>
              </div>
              <div className="text-center">
                <Button 
                  className="btn-lg" 
                  style={{
                    backgroundColor: "#ffff1b", 
                    color: "#000080", 
                    fontSize: "20px", 
                    fontWeight: "bold",
                    marginTop: "2%"
                  }} 
                  type="submit"
                >
                  Vote
                </Button>
              </div>
            </form>
          </div>
          {this.state.hasEmailError && <EmailErrorComponent></EmailErrorComponent>}
          {this.state.hasSessionError && <SessionErrorComponent></SessionErrorComponent>}
          {this.state.hasSuccess && <SuccessComponent></SuccessComponent>}
        </Card>
      );
    }
  }