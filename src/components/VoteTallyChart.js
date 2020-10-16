import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class VoteTallyChart extends React.Component {
    TallyVotes() {
      
      this.props.votes.map(vote =>

        voteHash[vote:] 0

        )
    }
  render() {
    console.log(this.props.votes)
    return (
      <div>
      <Doughnut
      data={
        {labels: this.props.votes.map(vote => vote,
          datasets: [
            {
            label: vote.framework,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: this.props.votes.map
          }
        ]}
      }
          options={{
            title:{
              display:true,
              text:'Votes',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          />
        </div>
      );
    }
  }