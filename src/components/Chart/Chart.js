import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const dataPointsValues = props.points.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointsValues);

    console.log(dataPointsValues);

    const chartsByMounth = props.points.map((mounth) => (
        
             // <ChartBar value={mounth.value} max={totalMaximun} label={mounth.label}></ChartBar>   
      

       <ChartBar value={mounth.value} max={totalMaximun} label={mounth.label}></ChartBar>   
      
      
        ));


    // return ( <div className="chart">
    //      <ChartBar value={props.value} max={totalMaximun} label={props.label}></ChartBar>   
    // </div>);
    return (<div className="chart">{chartsByMounth} </div>);
}
 
export default Chart;