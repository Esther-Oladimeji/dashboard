import React from 'react';
import styled from "styled-components"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }, {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
    ]
};

export default function Chart() {
    return (
        <ChartStyle>
            <Line
                data={data}
                width={30}
                height={50}
                options={{
                maintainAspectRatio: false
            }}/>;
        </ChartStyle>
    )
}

const ChartStyle = styled.div `
width: 70%; 
margin:0 20px 0 10px;
background-color: white;
-webkit-box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);
`
