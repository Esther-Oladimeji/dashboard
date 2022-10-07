import React from 'react'
import Chart from '../components/Chart'
import Featured from '../components/Featured'
import {userData} from "../data"
import styled from "styled-components"
import LargeWidget from '../components/LargeWidget'
import SmallWidget from '../components/SmallWidget'
import BChart from '../components/BChart'
import HomeCharts from '../components/HomeCharts'
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <HomeStyle>
        <Navbar />
            <Featured/>
            <HomeCharts/>
            <div className="widget-styling">
                <SmallWidget/>
               
            </div>
        </HomeStyle>
    )
}

const HomeStyle = styled.div `
width: 100%;
margin: 0 10px;
display: flex;
flex-direction: column;
`