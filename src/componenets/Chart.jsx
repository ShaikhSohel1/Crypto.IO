import React from 'react'
import { Line } from 'react-chartjs-2';
import { useColorModeValue } from "@chakra-ui/react";
import {Chart as ChartJS,  CategoryScale, LinearScale  , PointElement ,LineElement, Title, Tooltip,Legend} from "chart.js"


ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);





const Chart = ({arr=[],currency,days}) => {

    const prices= arr.map((item)=>item[1])
    const date= ["12/2/22","12/3/22","12,6,22"]

    for(let i=0;i<arr.length;i++){
       if(days==="24h")  date.push(new Date( arr[i][0]).toLocaleTimeString());
       else
       date.push(new Date( arr[i][0]).toLocaleDateString()); 

       prices.push(arr[i][1]);
    }
    
    


    const data =  {
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data:prices,borderColor: useColorModeValue("rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)"),
            backgroundColor: useColorModeValue("rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)"),
        }]
    }


    

    
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