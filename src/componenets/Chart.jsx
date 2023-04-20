import React from 'react'
import { Line } from 'react-chartjs-2';
import { useColorModeValue } from "@chakra-ui/react";
import {Chart as ChartJS,  CategoryScale, LinearScale  , PointElement ,LineElement, Title, Tooltip,Legend} from "chart.js"

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);





const Chart = ({arr=[],currency,days}) => {

    const prices= arr.map((item)=>item[1])
    const date= ["12/2/22","12/3/22","12,6,22"]
 


    const data = {
        labels: arr.map((item)=>item[0]),
        datasets: [
            {
                label: `Price in ${currency}`,
                data: arr.map((item)=>item[1]),
                fill: false,
                backgroundColor: useColorModeValue("rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)"),
                borderColor: useColorModeValue("rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)"),
            },
        ],
    };


    

    
  return (
    <Line
    options={{
        responsive: true,
    }}

    data={data}
    />
  )
}

export default Chart