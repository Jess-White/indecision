import React, { useState, useEffect } from 'react';
import './App.css';
import { getRepoData, fetchRepos, fetchBatchCommits, fetchBatchIssues, fetchBatchPulls } from './services/github';
import { castNewVote, getVoteData } from './services/VoteCounterApi';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import VoteTallyChart from './components/VoteTallyChart';
import VoteForm from './components/VoteForm';
import VoteIndex from './components/VoteIndex';
import { FRAMEWORKDATA } from './services/FrameworkData';

function App() {
  const otherFrameworks = [{owner: "sveltejs", name: "svelte"}, {owner: "jquery", name: "jquery"}]
  const [frameworks, setFrameworks] = useState(FRAMEWORKDATA)
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState([])
  const [issues, setIssues] = useState([])
  const [pulls, setPulls] = useState([])
  const [vote, setVote] = useState({email: '', framework: ''})
  const [error, setError] = useState("")
  const [votes, setVotes] = useState([])
  useEffect(() => {
    fetchRepos(frameworks)
      .then(response => {
        setRepos(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchCommits(frameworks)
      .then(response => {
        console.log(response)
        setCommits(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchIssues(frameworks)
      .then(response => {
        console.log(response)
        setIssues(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchPulls(frameworks)
      .then(response => {
        console.log(response)
        setPulls(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    getVoteData(votes) 
      .then(response => {
        setVotes(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
  }, [frameworks])

  const handleChange = (event) => {
    console.log(event.target.value)
    const framework = otherFrameworks.find(other => other.name === event.target.value)
    setFrameworks([...frameworks, framework])
    console.log(framework)
  } 
  const handleVote = (vote) => {
    setVotes([...votes, vote])
  }

  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setInputValues({...inputValues, [name]: value});
  // }
  if (error) {
    return <h1>{error}</h1>
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
      <DoughnutChart repos={repos} commits={commits} issues={issues} pulls={pulls}/>
      <VoteForm vote={vote} frameworks={frameworks}handleVote={handleVote} />
      <VoteIndex votes={votes} />
      <VoteTallyChart votes={votes} />
    </div>
  );
}

export default App;
