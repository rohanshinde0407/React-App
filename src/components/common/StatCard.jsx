import { MoreVertical } from "lucide-react";
import "./StatCard.css";

export default function StatCard({ value, label, icon: Icon, borderColor = "#e53e3e" }) {
  return (
    <div className="stat-card" style={{ borderTopColor: borderColor }}>
      <div className="stat-card__header">
        <div>
          <span className="stat-card__value" style={{ color: borderColor }}>
            {value}
          </span>
          <p className="stat-card__label">{label}</p>
        </div>
        <button className="stat-card__menu">
          <MoreVertical size={18} color="#94a3b8" />
        </button>
      </div>
      {Icon && (
        <div className="stat-card__icon" style={{ color: borderColor }}>
          <Icon size={32} />
        </div>
      )}
    </div>
  );
}
