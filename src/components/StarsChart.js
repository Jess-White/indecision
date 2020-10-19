import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';

export default class StarsChart extends React.Component {
  render() {
    console.log(this.props.repos)
    return (
      <div>
      <Card style={{backgroundColor: "#000058", paddingBottom: "2%"}}>
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
              fontSize:30,
              fontColor:"#ffff1b"
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
          />
        </Card>
        </div>
      );
    }
  }