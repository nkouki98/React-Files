import { useEffect } from 'react';
import * as d3 from 'd3';

function ChartD3({ data, id }) {
  useEffect(() => {

    const svg = d3.select(`#${id}`)
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);
// ADD HERE ANY SVG OR D3 UPDATES LIKE LABELS, other attributes
      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");

      svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - (10 * d) - 3)

    // cleanup function to remove the chart on unmount
    return () => {
      svg.selectAll("rect")
        .remove();
    }
  }, [data, id]);

  return <div id={id}></div>;
}

export default ChartD3;
