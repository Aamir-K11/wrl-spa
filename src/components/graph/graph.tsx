import React from 'react';
import "./graph.css";
import { LineChart } from '@mui/x-charts/LineChart';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Card from '../ui/card';
import WeekSelector from '../week-selector/week-selector';

const Graph = () => {
  
  return (
    <Card header='Number of Contacts Per Day'>
         <div className='graph'> 
            <WeekSelector/>
            <div className='chart'>
                <LineChart
                xAxis={[{ data: [0, 5, 10, 15], tickSize: 0 }]} 
                yAxis={[{ data: [0, 10, 20, 30, 40, 50], tickSize: 0 }]}     
                series={[
                {
                    curve: "linear",
                    data: [5, 10, 15, 15],
                },
                ]}
                width={1200}
                height={300}   
                sx={{
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.line}`]: {
                    stroke: 'gray',
                    strokeWidth: 0,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                    fill: 'white',
                    },
                },
                [`& .${chartsGridClasses.line}`]: { 
                    stroke: 'rgba(128, 128, 128, 0.2)', 
                    strokeWidth: 1.5
                },
                }}
                grid={{ vertical: true, horizontal: true }}
                />
            </div>
        </div>
    </Card>
  )
}

export default Graph
