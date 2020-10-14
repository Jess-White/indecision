import React, { useState, useEffect } from 'react';
import './App.css';
import { getRepoData, fetchRepos } from './services/github';
import BarChart from './components/BarChart';
import { FRAMEWORKDATA } from './services/Endpoints'

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
