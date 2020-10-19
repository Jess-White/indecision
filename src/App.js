import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import './App.css';
import { fetchRepos, fetchBatchCommits, fetchBatchIssues, fetchBatchPulls } from './services/github';
import { getVoteData } from './services/VoteCounterApi';
import Header from './components/Header';
import StarsChart from './components/StarsChart';
import ForksChart from './components/ForksChart';
import CommitsChart from './components/CommitsChart';
import IssuesChart from './components/IssuesChart';
import PullsChart from './components/PullsChart';
import VoteTallyChart from './components/VoteTallyChart';
import VoteForm from './components/VoteForm';
import About from './components/About';
import { FRAMEWORKDATA } from './services/FrameworkData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState([])
  const [issues, setIssues] = useState([])
  const [pulls, setPulls] = useState([])
  const vote = useState({email: '', framework: ''})
  const [error, setError] = useState("")
  const [votes, setVotes] = useState([])
  const [showStars, setShowStars] = useState(false);
  const [showForks, setShowForks] = useState(false);
  const [showCommits, setShowCommits] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [showPulls, setShowPulls] = useState(false);
  const [showVotes, setShowVotes] = useState(false);

  const [showAbout, setShowAbout] = useState(false);

  const handleShowStars = () => {
    setShowForks(false)
    setShowCommits(false)
    setShowIssues(false)
    setShowPulls(false)
    setShowVotes(false)
    setShowStars(true)
    setShowAbout(false)
  }
  const handleShowForks = () => {
    setShowStars(false)
    setShowCommits(false)
    setShowIssues(false)
    setShowPulls(false)
    setShowVotes(false)
    setShowForks(true)
    setShowAbout(false)
  };
  const handleShowCommits = () => {
    setShowStars(false)
    setShowForks(false)
    setShowIssues(false)
    setShowPulls(false)
    setShowVotes(false)
    setShowCommits(true)
    setShowAbout(false)
  };
  const handleShowIssues = () => {
    setShowStars(false)
    setShowForks(false)
    setShowCommits(false)
    setShowPulls(false)
    setShowVotes(false)
    setShowIssues(true)
    setShowAbout(false)
  };
  const handleShowPulls = () => {
    setShowStars(false)
    setShowForks(false)
    setShowCommits(false)
    setShowIssues(false)
    setShowVotes(false)
    setShowPulls(true)
    setShowAbout(false)
  };
  const handleShowVotes = () => {
    setShowStars(false)
    setShowForks(false)
    setShowCommits(false)
    setShowIssues(false)
    setShowPulls(false)
    setShowVotes(true)
    setShowAbout(false)
  };

  const handleShowAbout = () => {
    setShowForks(false)
    setShowCommits(false)
    setShowIssues(false)
    setShowPulls(false)
    setShowVotes(false)
    setShowStars(false);
    setShowAbout(true)
  }

  const handleCloseStars = () => setShowStars(false);
  const handleCloseForks = () => setShowForks(false);
  const handleCloseCommits = () => setShowCommits(false);
  const handleCloseIssues = () => setShowIssues(false);
  const handleClosePulls = () => setShowPulls(false);
  const handleCloseVotes = () => setShowVotes(false);
  const handleCloseAbout = () => setShowAbout(false);

  useEffect(() => {
    fetchRepos(FRAMEWORKDATA)
      .then(response => {
        setRepos(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchCommits(FRAMEWORKDATA)
      .then(response => {
        console.log(response)
        setCommits(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchIssues(FRAMEWORKDATA)
      .then(response => {
        console.log(response)
        setIssues(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    fetchBatchPulls(FRAMEWORKDATA)
      .then(response => {
        console.log(response)
        setPulls(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
    getVoteData() 
      .then(response => {
        setVotes(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
  }, [])

  const handleVote = (vote) => {
    setVotes([...votes, vote])
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="App">
      <Header />
      
      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowAbout}>What is this for?
      </Button>
      <Modal show={showAbout} onHide={handleCloseStars}>
      <ModalBody>
      <About></About>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseAbout}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowStars}>Stars
      </Button>
      <Modal show={showStars} onHide={handleCloseStars}>
      <ModalBody>
      <StarsChart repos={repos}/>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseStars}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowForks}>Forks
      </Button>

      <Modal show={showForks} onHide={handleCloseStars}>
      <ModalBody>
      <ForksChart repos={repos}/>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseForks}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowCommits}>Commits
      </Button>
      <Modal show={showCommits} onHide={handleCloseCommits}>
      <ModalBody>
      <CommitsChart repos={repos} commits={commits}/>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseCommits}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowIssues}>Issues
      </Button>
      <Modal show={showIssues} onHide={handleCloseIssues}>
      <ModalBody>
      <IssuesChart repos={repos} issues={issues}/>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseIssues}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowPulls}>Pulls
      </Button>
      <Modal show={showPulls} onHide={handleClosePulls}>
      <ModalBody>
      <PullsChart repos={repos} pulls={pulls} />
      </ModalBody>
        <ModalFooter>
          <Button 
          className="close-btn" 
          color="danger" 
          style={{ 
            backgroundColor: "#000080", 
            color: "#ffff1b", 
            width: "100%"
          }} 
            onClick={handleClosePulls}>Close
          </Button>
        </ModalFooter>
      </Modal>

      <VoteForm vote={vote} handleVote={handleVote} />

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowVotes}>See How Other People Voted
      </Button>
      <Modal show={showVotes} onHide={handleCloseVotes}>
      <ModalBody>
      <VoteTallyChart votes={votes}/>
      </ModalBody>
        <ModalFooter>
          <Button 
          className="close-btn" 
          style={{ 
            backgroundColor: "#000080", 
            color: "#ffff1b", 
            width: "100%"
          }} 
          onClick={handleCloseVotes}>Close</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default App;
