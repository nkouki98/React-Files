import React from "react";
import {PolarArea} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function PolarChart({chartData})  {
    //options isnt a requirement
    return <PolarArea data={chartData}/>; 
    
}

export default PolarChart;