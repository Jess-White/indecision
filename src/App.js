import React, { useState, useEffect } from 'react';
import './App.css';
import { getRepoData } from './services/github';
import BarChart from './components/BarChart';

const FRAMEWORKDATA = [{owner: "vuejs", repo: "vue"},{owner: "facebook", repo: "react"}]

function fetchRepos(repos) {
  const promises = repos.map(getRepoData)
  return Promise.all(promises)
}

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchRepos(FRAMEWORKDATA)
    .then(response => {
      setData(response)
    })
  }, [])
  
  return (
    <div className="App">
      <BarChart data={data}/>
    </div>
  );
}

export default App;
