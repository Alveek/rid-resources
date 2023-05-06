import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    year: 2023,
    value: 1,
  },
  {
    year: 2024,
    value: 1.2,
  },
  {
    year: 2025,
    value: 0.8,
  },
  {
    year: 2026,
    value: 1.5,
  },
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='year' />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey='value'
        fill='#3182ce'
      />
    </BarChart>
  );
}
