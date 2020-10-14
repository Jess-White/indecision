import React, {Component} from 'react';
import axios from 'axios';

class APIConfig extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        Data: [],
        returnedData: [],
        gitURL: []
      }
    }



componentDidMount() {
  axios.get(`https://api.github.com/repos/${owner}/${repo}`)
  .then(response => this.state.returnedData.push(response.data))
  .then(response =>
    this.setState({
      Data: this.state.returnedData
    }))
  .then(
    response => 
    console.log(this.state.Data))
}

render() {
  if(!this.state.returnedData) {
    return(
      <h1>Still waiting on that repo data....</h1>
      )
  }

  return (
    <div>
    {this.state.Data.map((result, index) => (
        <div>
        <p>{result.watchers}</p>
        <p>{result.forks}</p>
        <p>{result.stargazers_count}</p>
        </div>
      ))}
    </div>
    )
};

}

export default APIConfig