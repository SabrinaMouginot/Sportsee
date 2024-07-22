//L'activité quotidienne est un graphique à barres pour montrer l'activité quotidienne
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DailyActivityChart = () => {
  return (
    <BarChart width={500} height={300} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="calories" fill="#8884d8" />
      <Bar dataKey="kilogram" fill="#82ca9d" />
    </BarChart>
  );
};

export default DailyActivityChart;
