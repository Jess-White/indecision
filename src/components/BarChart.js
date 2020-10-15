import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class BarChart extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        <Bar
          data={
            {labels: this.props.data.map(repo => repo.name),
              datasets: [
                {
                  label: this.name,
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  data: this.props.data.map(repo => repo.stargazers_count)
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