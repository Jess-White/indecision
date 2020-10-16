import React, { useState, useEffect } from 'react';
import './App.css';
import { getRepoData, fetchRepos, fetchBatchCommits, fetchBatchIssues, fetchBatchPulls } from './services/github';
import BarChart from './components/BarChart';
import { FRAMEWORKDATA } from './services/FrameworkData';

function App() {
  const otherFrameworks = [{owner: "sveltejs", name: "svelte"}, {owner: "jquery", name: "jquery"}]
  const [frameworks, setFrameworks] = useState(FRAMEWORKDATA)
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState([])
  const [issues, setIssues] = useState([])
  const [pulls, setPulls] = useState([])
  useEffect(() => {
    fetchRepos(frameworks)
      .then(response => {
        setRepos(response)
      })
    fetchBatchCommits(frameworks)
      .then(response => {
        console.log(response)
        setCommits(response)
      })
    fetchBatchIssues(frameworks)
      .then(response => {
        console.log(response)
        setIssues(response)
      })
    fetchBatchPulls(frameworks)
      .then(response => {
        console.log(response)
        setPulls(response)
      })
  }, [frameworks])

  const handleChange = (event) => {
    console.log(event.target.value)
    const framework = otherFrameworks.find(other => other.name === event.target.value)
    setFrameworks([...frameworks, framework])
    console.log(framework)
  } 

  return (
    <div className="App">
      <select onChange={handleChange}>
        <option value="">Please select</option>
        {otherFrameworks.map(other => 
          <option>{other.name}</option>) 
        }}
      </select>
      <BarChart repos={repos} commits={commits} issues={issues} pulls={pulls}/>
    </div>
  );
}

export default App;
