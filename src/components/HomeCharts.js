import React from 'react'
import BChart from './BChart'
import Chart from './Chart'
import styled from 'styled-components'


const HomeCharts = () => {
  return (
     <ChartStyles className = "charts-container">
    <Chart  />
    <BChart />
    </ChartStyles>
  )
}

export default HomeCharts

const ChartStyles = styled.div`
margin: 30px 0;
height: 300px;
display: flex;
justify-content: space-around;
.charts-container{
    display: flex;
}
`