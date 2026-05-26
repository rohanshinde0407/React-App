import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MoreVertical } from "lucide-react";
import "./DonutChart.css";

const COLORS = ["#38b2ac", "#ed4f8b", "#f6c344", "#3182ce"];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {value}
    </text>
  );
};

export default function DonutChart({ title, data, centerLabel, centerValue }) {
  return (
    <div className="donut-chart-card">
      <div className="donut-chart-card__header">
        <h3>{title}</h3>
        <button className="donut-chart-card__menu">
          <MoreVertical size={18} color="#94a3b8" />
        </button>
      </div>
      <div className="donut-chart-card__body">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              label={renderCustomLabel}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        {centerValue && (
          <div className="donut-chart-card__center">
            <span className="donut-chart-card__center-value">{centerValue}</span>
            <span className="donut-chart-card__center-label">{centerLabel}</span>
          </div>
        )}
      </div>
      <div className="donut-chart-card__legend">
        {data.map((item, index) => (
          <div key={item.name} className="donut-chart-card__legend-item">
            <span
              className="donut-chart-card__legend-dot"
              style={{ background: COLORS[index % COLORS.length] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
