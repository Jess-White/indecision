import React, {Component} from 'react';
import axios from 'axios';

class VueData extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        VueData: [],
        returnedData: []
      }
    }

componentDidMount() {
  axios.get("https://api.github.com/repos/vuejs/vue")
  .then(response => this.state.returnedData.push(response.data))
  .then(response =>
    this.setState({
      VueData: this.state.returnedData
    }))
  .then(
    response => 
    console.log(this.state.VueData))
}

render() {
  if(!this.state.returnedData) {
    return(
      <h1>Still waiting on that repo data....</h1>
      )
  }

  return (
    <div>
    {this.state.VueData.map((result, index) => (
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

export default VueData