import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import "./ActivityList.css";

const filters = ["This Day", "This Week", "This Month", "6 Month"];

const activities = [
  { id: 1, name: "To Jin", tag: "Work", date: "12 jun 2022", amount: "-$59", type: "out" },
  { id: 2, name: "From Google", tag: "Salary", date: "10 jun 2022", amount: "+$859", type: "in" },
  { id: 3, name: "To David", tag: "Work", date: "7 jun 2022", amount: "-$479", type: "out" },
  { id: 4, name: "From Google", tag: "Bonus", date: "10 jun 2022", amount: "+$859", type: "in" },
];

export default function ActivityList() {
  const [activeFilter, setActiveFilter] = useState("This Week");

  return (
    <div className="al">
      <h3 className="al__title">Recent activity</h3>

      <div className="al__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`al__pill ${activeFilter === f ? "al__pill--active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="al__list">
        {activities.map((item, i) => (
          <div
            key={item.id}
            className="al__row"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div className={`al__icon al__icon--${item.type}`}>
              {item.type === "out" ? (
                <ArrowUpRight size={18} strokeWidth={2} />
              ) : (
                <ArrowDownLeft size={18} strokeWidth={2} />
              )}
            </div>

            <div className="al__info">
              <p className="al__name">
                {item.name} <span className="al__dot">&middot;</span> {item.tag}
              </p>
              <p className="al__date">{item.date}</p>
            </div>

            <span className={`al__amount ${item.type === "in" ? "al__amount--in" : "al__amount--out"}`}>
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
