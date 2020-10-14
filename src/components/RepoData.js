import React, {Component} from 'react';

const git_hub_api_urls = [
            "https://api.github.com/repos/vuejs/vue",
            "https://api.github.com/repos/angular/angular.js",
            "https://api.github.com/repos/emberjs/ember.js",
            "https://api.github.com/repos/facebook/react"
              ]

class RepoData extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        VueData: [],
        AngularData: [],
        EmberData: [],
        ReactData: [],
        returnedData: []
      }
    }

componentDidMount() {
  Promise.all(git_hub_api_urls.map(url =>
    fetch(url)
      .then(response => response.json())
      .then(response => this.state.returnedData.push(response))
    ))
  .then(console.log(this.state.returnedData))
  .then(response =>
    this.setState({
      returnedData: this.state.returnedData
    }))
  .then(
    response => 
    console.log(this.state.returnedData))
}

render() {
  if(!this.state.returnedData) {
    return(
      <h1>Still waiting on that repo data....</h1>
      )
  }

  return (
    <div>
    {this.state.returnedData.map((data, index) => (

    <div>
    {this.state.data.map((result, index) => (
        <div>
        <p>{result.watchers}</p>
        <p>{result.forks}</p>
        <p>{result.stargazers_count}</p>
        </div>
        ))}
        </div>
    ))}
    </div>
    )
}
}

export default RepoData