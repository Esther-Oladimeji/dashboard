import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from "styled-components"
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,],
      backgroundColor: [
        'rgb(40, 40, 43)',
        "rgb(54, 69, 79)",
        'rgb(52, 52, 52)',
        ,
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        ,
      ],
      borderWidth: 1,
    },
  ],
};

export default function BChart() {
  return(
    <PieStyle>
    <Pie data={data} width={40}
  height={60}
  options={{ maintainAspectRatio: false }}/>
  </PieStyle>
  )
}

const PieStyle = styled.div`
width: 40%;
`