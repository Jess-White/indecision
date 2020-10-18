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
            label: "API DATA",
            backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
            borderColor: "#ffff1b",
            borderWidth: 1,
            data: this.props.repos.map(repo => repo.stargazers_count)
          }
        ]}
      }
          options={{
            title:{
              display:true,
              text:'Stars',
              fontSize:20,
              color:"#ffff1b"
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
                label: "Forks",
                backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
                borderColor: "#ffff1b",
                borderWidth: 1,
                data: this.props.repos.map(repo => repo.forks_count)
              }
            ]}
          }
              options={{
                title:{
                  display:true,
                  text:'Forks',
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
                  label: "Commits",
                  backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
                  borderColor: "#ffff1b",
                  borderWidth: 1,
                  data: this.props.commits
                }
              ]}
            }
                options={{
                  title:{
                    display:true,
                    text:'Commits',
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
                      label: "Issues",
                      backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
                      borderColor: "#ffff1b",
                      borderWidth: 1,
                      data: this.props.issues
                    }
                  ]}
                }
                    options={{
                      title:{
                        display:true,
                        text:'Issues',
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
                      label: "Pulls",
                      backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
                      borderColor: "#ffff1b",
                      borderWidth: 1,
                      data: this.props.pulls
                    }
                  ]}
                }
                    options={{
                      title:{
                        display:true,
                        text:'Pulls',
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