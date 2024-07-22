// un graphique en forme de donut pour les objectifs / le score
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const GoalChart = () => {
  return (
    <RadialBarChart width={300} height={300} innerRadius="10%" outerRadius="80%">
      <RadialBar minAngle={15} clockWise={true} dataKey="score" />
      <Tooltip />
      <Legend />
    </RadialBarChart>
  );
};

export default GoalChart;
