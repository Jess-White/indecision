import React, { Component} from 'react';
import { castNewVote } from '../services/VoteCounterApi';

export default class VoteForm extends React.Component {
    state = {
      email: "",
      selectedFramework: ""
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    handleSubmit = (event) => {
      event.preventDefault() 
      castNewVote({email: this.state.email, framework: this.state.selectedFramework
      })
      .then(()=> {
        this.props.handleVote({email: this.state.email, framework: this.state.selectedFramework})
        this.setState({
          email: "",
          selectedFramework: ""
        })
      })
    }
  render() {
    console.log(this.props.frameworks, "waffle")
    return (
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <select name="selectedFramework"
                value={this.selectedFramework}
                onChange={this.handleChange}
                required
                >
                <option value="" disabled>Choose a Framework</option>
                {this.props.frameworks.map(framework => 
                  <option value={framework.repo}>{framework.repo}</option>)
                }}
                </select>
              </div>
              <div className="text-center">
                <button className="btn-lg" type="submit">
                  Vote
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }