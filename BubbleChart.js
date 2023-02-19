import React from "react";
import {Bubble} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function BubbleChart({chartData})  {
    //options isnt a requirement
    return <Bubble data={chartData}/>; 
    
}

export default BubbleChart;