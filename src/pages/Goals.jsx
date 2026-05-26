import { useState, useEffect } from "react";
import { Target, TrendingUp, CheckCircle } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import BarChartCard from "../components/common/BarChartCard";
import StatCard from "../components/common/StatCard";
import { SkeletonCard, SkeletonChart } from "../components/common/Skeleton";
import "./Goals.css";

const barData = [
  { name: "Jan", cleared: 120, reported: 80 },
  { name: "Feb", cleared: 180, reported: 110 },
  { name: "Mar", cleared: 250, reported: 170 },
  { name: "Apr", cleared: 310, reported: 220 },
  { name: "May", cleared: 380, reported: 290 },
  { name: "Jun", cleared: 420, reported: 350 },
];

export default function Goals() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <PageHeader title="Goals" breadcrumb="Goal Tracking" />
      {loading ? (
        <>
          <div className="goals__stats">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <SkeletonChart />
        </>
      ) : (
        <>
          <div className="goals__stats">
            <div className="animate-slide-up delay-1">
              <StatCard value="12" label="Active Goals" icon={Target} borderColor="#3182ce" />
            </div>
            <div className="animate-slide-up delay-2">
              <StatCard value="85%" label="Avg. Completion Rate" icon={TrendingUp} borderColor="#38b2ac" />
            </div>
            <div className="animate-slide-up delay-3">
              <StatCard value="8" label="Goals Completed" icon={CheckCircle} borderColor="#48bb78" />
            </div>
          </div>
          <div className="animate-scale-in delay-4">
            <BarChartCard title="Goal Progress Overview" data={barData} />
          </div>
        </>
      )}
    </div>
  );
}
