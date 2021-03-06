import axios from 'axios';

export const castNewVote = ({email, framework}) => {
  return axios
    .post('/api/votes', {email, framework})
    .then(response => response.data)
}

export const getVoteData = () => {
  return axios('/api/votes')
    .then(response => response.data)
}

export const tallyVotes = (votes) => {
  let tallyArray = 
  [{"name": "ember.js", "total": 0},
  {"name": "vue", "total": 0},
  {"name": "angular.js", "total": 0},
  {"name": "react", "total": 0}]
  votes.forEach((vote) => {
    tallyArray.forEach((tally) => {
      if (tally["name"] === vote.framework) {
        tally["total"] = tally["total"] + 1
      }
    });
  })
  return tallyArray;
}

