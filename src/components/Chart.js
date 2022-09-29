import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import styled from "styled-components"

const Chart = ({title, grid, data, dataKey}) => {

    return (
        
        <ChartStyle>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="50%" aspect = {1}>
                <LineChart data={data} width={500}
            height= {300}>
                <XAxis dataKey="name" stroke="#8884d8" />
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" strokeDasharray="3 4 5 2"/>
                    <Tooltip />
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                </LineChart>
            </ResponsiveContainer>
        </ChartStyle>
       
    )
}

export default Chart

const ChartContainer = styled.div`

`
const ChartStyle = styled.div `
margin: 20px;
padding: 20px;
-webkit-box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0 0  15px -10px rgba(0, 0, 0, 0.75);
`
const ChartTitle = styled.h3 `
margin-bottom: 20px;
`