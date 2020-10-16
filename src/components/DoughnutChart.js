import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class DoughnutChart extends React.Component {
  render() {
    console.log(this.props.repos)
    return (
      <div>
      <Doughnut
      data={
        {labels: this.props.repos.map(repo => repo.name),
          datasets: [
            {
            label: "stars",
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: this.props.repos.map(repo => repo.stargazers_count)
          }
        ]}
      }
          options={{
            title:{
              display:true,
              text:'Stars',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          />
          <Doughnut
          data={
            {labels: this.props.repos.map(repo => repo.name),
              datasets: [
              {
                label: "forks",
                backgroundColor: 'red',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: this.props.repos.map(repo => repo.forks_count)
              }
            ]}
          }
              options={{
                title:{
                  display:true,
                  text:'forks',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
              />
            <Doughnut
            data={
              {labels: this.props.repos.map(repo => repo.name),
                datasets: [
                {
                  label: "commits",
                  backgroundColor: 'yellow',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.commits
                }
              ]}
            }
                options={{
                  title:{
                    display:true,
                    text:'commits',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
                />
                <Doughnut
                data={
                  {labels: this.props.repos.map(repo => repo.name),
                    datasets: [
                    {
                      label: "issues",
                      backgroundColor: 'orange',
                      borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 1,
                      data: this.props.issues
                    }
                  ]}
                }
                    options={{
                      title:{
                        display:true,
                        text:'issues',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position:'right'
                      }
                    }}
                    />
                    <Doughnut
                data={
                  {labels: this.props.repos.map(repo => repo.name),
                    datasets: [
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
                        text:'pulls',
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