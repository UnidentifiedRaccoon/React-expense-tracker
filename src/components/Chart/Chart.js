import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  const maxValue = props.dataPoints.reduce((max, datePoint) => {
    return max + datePoint.value;
  }, 0);
  return (
    <ul className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </ul>
  );
};

export default Chart;
