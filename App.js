import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { CountryData } from './CountryData';
import ChartD3 from './components/BarChartD3';
import BubbleChart from './components/BubbleChart';
import PolarChart  from './components/PolarArea';
function App() {
  


  const dataD3 = [12,3,4,5,3,2,3,4];
  const chartId = 'chart3';

  const [userData, setUserData] = useState({
    labels: CountryData.map((data) => data.year),
    datasets: [
      {
        label: "Population changes",
        data: CountryData.map((data) => data.population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className='App'>
      <h1>BAR CHART</h1>
      <div style={{width: 700}}>
        <BarChart chartData={userData}/>
      </div>

      <h1>Bubble Chart</h1>
      <div style={{width: 700}}>
        <BubbleChart chartData={userData}/>
      </div>
    
      <h1>PIE CHART</h1>
      <div style={{width: 700}}>
        <PieChart chartData={userData}/>
      </div>

      
      <h1>Polar area chart</h1>
      <div style={{width: 700}}>
        <PolarChart chartData={userData}/>
      </div>



      <h2>D3 BASIC</h2>
      <div>
        <ChartD3 data={dataD3} id={chartId} />
      </div>
      
     

    </div>
  );
}

export default App;
