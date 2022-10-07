import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Userdata() {
  return (
  <UserdataStyle>
  <div className="user-data-title">Top Countries</div>
  <Doughnut data={data} width={50}
  height={30}
  options={{ maintainAspectRatio: false }}/>
  </UserdataStyle>
  );
}

const UserdataStyle = styled.div`
max-height: 200px;
width: 500px;
box-shadow: 0 0 15px -10px rgba( 0 ,0, 0, 0.75);
background-color: white;
text-align: center;
`