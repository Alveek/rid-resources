import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function App({ data }: any) {
  return (
    <BarChart
      width={500}
      height={300}
      barSize={50}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="" /> */}
      <XAxis dataKey="currentYear" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="result" fill="#3182ce" />
    </BarChart>
  );
}
