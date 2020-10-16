import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends React.Component {
  render() {
    console.log(this.props.repos)
    return (
      <div>
        <Bar
          data={
            {labels: this.props.repos.map(repo => repo.name),
              datasets: [
                {
                  label: "stars",
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.repos.map(repo => repo.stargazers_count)
                },
                {
                  label: "forks",
                  backgroundColor: 'red',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.repos.map(repo => repo.forks_count)
                },
                {
                  label: "commits",
                  backgroundColor: 'yellow',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.commits
                },
                {
                  label: "issues",
                  backgroundColor: 'orange',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.issues
                },
                {
                  label: "pulls",
                  backgroundColor: 'green',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.pulls
                }
              ]}
            }
          options={{
            title:{
              display:true,
              text: 'Stars',
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