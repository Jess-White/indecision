import axios from 'axios';

// export const getVoteData = (votes) => {
//   return fetch('https://localhost:3000/api/votes')
//   .then(response => response.json())
// }

export const castNewVote = ({email, framework}) => {
  return fetch('http://localhost:3000/api/votes', { 
    method: 'post',
    body: JSON.stringify({email, framework})
  })
  .then(response => response.json())
}

export const getVoteData = (votes) => {
  return axios('http://localhost:3000/api/votes')
  .then(response => response.data)
}