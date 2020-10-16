import axios from 'axios';

export const castNewVote = ({email, framework}) => {
  return axios
    .post('http://localhost:3000/api/votes', {email, framework})
    .then(response => response.data)
}

export const getVoteData = (votes) => {
  return axios('http://localhost:3000/api/votes')
    .then(response => response.data)
}