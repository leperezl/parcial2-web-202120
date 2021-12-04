import React from 'react'
import { BarChart, CartesianGrid , XAxis, YAxis, Tooltip, Legend ,Bar} from 'recharts';
const MyChart = (props) => {


    return (

        <BarChart width={730} height={250} data={props.data.stock}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    )
}

export default MyChart

