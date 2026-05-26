import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./BarChartCard.css";

export default function BarChartCard({ title, data }) {
  return (
    <div className="bar-chart-card">
      <div className="bar-chart-card__header">
        <h3>{title}</h3>
        <div className="bar-chart-card__date-range">
          <span>Start date</span>
          <span className="bar-chart-card__arrow">→</span>
          <span>End date</span>
          <button className="bar-chart-card__cal-btn">📅</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barGap={4} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "NUMBER OF CASES",
              angle: -90,
              position: "insideLeft",
              offset: 0,
              style: { fontSize: 10, fill: "#94a3b8", fontWeight: 600 },
            }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              fontSize: 13,
            }}
          />
          <Legend
            iconType="square"
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
          <Bar
            dataKey="cleared"
            name="Total Cleared Case"
            fill="#38b2ac"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="reported"
            name="Total Reported Case"
            fill="#ed8936"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
