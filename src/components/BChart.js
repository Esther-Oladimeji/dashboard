import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from "styled-components"
import {faker} from '@faker-js/faker';
ChartJS.register(ArcElement, Tooltip, Legend);

const labels= ['Red', 'Blue', 'Yellow' ]

export const data = {
  labels,
  datasets: [
    {
      label: '# of Votes',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
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
    <div>
    <Pie data={data} width={70}
  height={70}
  options={{ maintainAspectRatio: false }}/>
  </div>
  </PieStyle>
  )
}

const PieStyle = styled.div`
width: 30%;
background-color: white;
-webkit-box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);

`