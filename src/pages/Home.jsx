import React from 'react'
import Chart from '../components/Chart'
import Featured from '../components/Featured'
import {userData  } from "../data"
import styled from "styled-components"
import LargeWidget from '../components/LargeWidget'
import SmallWidget from '../components/SmallWidget'
import BChart from '../components/BChart'

export default function Home()  {
    return (
        <HomeStyle>
            <Featured/>
                <div className = "charts-container">
            <Chart data = {userData} title = "User Data" grid dataKey = "Active user"  />
            <BChart />
            </div>
            <div className="widget-styling">
                <SmallWidget />
            </div>
        </HomeStyle>
    )
}



const HomeStyle = styled.div `
flex: 4;
.charts-container{
    display: flex;
}

`