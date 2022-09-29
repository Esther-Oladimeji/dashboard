import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { name: '1', uv: 300, },
    { name: '2', uv: 145,  },
    { name: '3', uv: 100,},
    { name: '4', uv: 8 },
    { name: '5', uv: 100 },
   
  ];
  
 const BChart = () => {
      return (
        <ResponsiveContainer width="50%" aspect = {1}>
          <BarChart
            width={500}
            height= {300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#8884d8" />

          </BarChart>
        </ResponsiveContainer>
      );
  }

  export default BChart