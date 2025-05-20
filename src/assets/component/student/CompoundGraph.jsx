import { LineChart } from "@mui/x-charts/LineChart";

export default function CompoundGraph({ dataset }) {
  return (
    <div className="w-7xl mt-10">
      <h3 className="text-lg font-bold text-gray-700 mb-4">📊 גרף גידול הסכום</h3>
      <LineChart
        height={350}
        dataset={dataset}
        xAxis={[
          {
            dataKey: "year",
            valueFormatter: (value) => `${value} שנה`,
          },
        ]}
        series={[
          {
            dataKey: "amount",
            label: "סכום מצטבר (₪)",
            color: "#8b5cf6",
            showMark: false,
            area: true,
            stack: "total",
          },
        ]}
        yAxis={[{ width: 60 }]}
        hideLegend
      />
    </div>
  );
}
