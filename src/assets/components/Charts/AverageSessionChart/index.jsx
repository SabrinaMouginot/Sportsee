//La durée moyenne des sessions est un graphique linéaire pour montrer les sessions moyennes
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AverageSessionChart = () => {
  return (
    <LineChart width={500} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  );
};

export default AverageSessionChart;
