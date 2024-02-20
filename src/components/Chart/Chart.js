import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.points.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);

  console.log(props);
  console.log(dataPointsValues);
  console.log(totalMaximun);

  const chartsByMounth = props.points.map((mounth) => (
    <ChartBar
      key={mounth.label}
      value={mounth.value}
      max={totalMaximun}
      label={mounth.label}
    ></ChartBar>
  ));

  return <div className="chart">{chartsByMounth} </div>;
};

export default Chart;
