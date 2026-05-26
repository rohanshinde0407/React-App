import { useState, useEffect } from "react";
import { CreditCard, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import useMediaQuery from "../hooks/useMediaQuery";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import DataTable from "../components/common/DataTable";
import ActivityList from "../components/common/ActivityList";
import { SkeletonCard, SkeletonTable } from "../components/common/Skeleton";
import Skeleton from "../components/common/Skeleton";
import "./Cards.css";

const columns = [
  { key: "cardNo", label: "Card Number" },
  { key: "holder", label: "Card Holder" },
  { key: "type", label: "Card Type" },
  { key: "expiry", label: "Expiry Date" },
  { key: "limit", label: "Credit Limit" },
  { key: "status", label: "Status" },
];

const data = [
  { cardNo: "**** **** **** 4532", holder: "John Doe", type: "Visa", expiry: "12/2025", limit: "$10,000", status: "Active" },
  { cardNo: "**** **** **** 8821", holder: "Jane Smith", type: "Mastercard", expiry: "06/2024", limit: "$15,000", status: "Active" },
  { cardNo: "**** **** **** 3310", holder: "Bob Wilson", type: "Amex", expiry: "03/2023", limit: "$25,000", status: "Blocked" },
  { cardNo: "**** **** **** 7745", holder: "Alice Brown", type: "Visa", expiry: "09/2025", limit: "$8,000", status: "Active" },
];

const monthlyData = [
  { name: "Jan", value: 3200 },
  { name: "Feb", value: 4100 },
  { name: "Mar", value: 8295 },
  { name: "Apr", value: 2800 },
  { name: "May", value: 3500 },
  { name: "Jun", value: 4000 },
];

export default function Cards() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  /* ====================== MOBILE VIEW ====================== */
  if (isMobile) {
    return (
      <div className="mc">
        {loading ? (
          <div className="mc__skeleton">
            <Skeleton variant="rect" height="220px" borderRadius="16px" />
            <div className="mc__skeleton-stats">
              <Skeleton variant="rect" height="64px" borderRadius="14px" />
              <Skeleton variant="rect" height="64px" borderRadius="14px" />
            </div>
            <Skeleton variant="text" width="140px" height="16px" borderRadius="4px" />
            <div className="mc__skeleton-activity">
              {[1, 2].map((i) => (
                <div key={i} className="mc__skeleton-row">
                  <Skeleton variant="circle" width="46px" height="46px" />
                  <div className="mc__skeleton-row-text">
                    <Skeleton variant="text" width="70%" height="14px" />
                    <Skeleton variant="text" width="40%" height="10px" />
                  </div>
                  <Skeleton variant="text" width="50px" height="14px" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mc__summary animate-slide-up delay-1">
              <p className="mc__month">March 2022</p>
              <h1 className="mc__amount">$8,295.00 USD</h1>
              <div className="mc__chart">
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={monthlyData} barSize={30}>
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#64748b", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                      {monthlyData.map((entry, idx) => (
                        <Cell
                          key={idx}
                          fill={entry.name === "Mar" ? "#1a3c6e" : "#e2e8f0"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mc__stats animate-slide-up delay-2">
              <div className="mc__stat">
                <div className="mc__stat-icon">
                  <TrendingDown size={18} />
                </div>
                <div>
                  <p className="mc__stat-label">Income</p>
                  <p className="mc__stat-value">$453.00</p>
                </div>
              </div>
              <div className="mc__stat">
                <div className="mc__stat-icon">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="mc__stat-label">Spend</p>
                  <p className="mc__stat-value">$453.00</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up delay-3">
              <ActivityList />
            </div>
          </>
        )}
      </div>
    );
  }

  /* ====================== DESKTOP VIEW ====================== */
  return (
    <div>
      <PageHeader title="Cards" breadcrumb="Card Management" />
      {loading ? (
        <>
          <div className="cards__stats">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <SkeletonTable />
        </>
      ) : (
        <>
          <div className="cards__stats">
            <div className="animate-slide-up delay-1">
              <StatCard value="245" label="Total Active Cards" icon={CreditCard} borderColor="#38b2ac" />
            </div>
            <div className="animate-slide-up delay-2">
              <StatCard value="12" label="Blocked Cards" icon={AlertTriangle} borderColor="#e53e3e" />
            </div>
            <div className="animate-slide-up delay-3">
              <StatCard value="98" label="Cards Issued This Month" icon={CheckCircle} borderColor="#3182ce" />
            </div>
          </div>
          <div className="animate-slide-up delay-4">
            <DataTable title="Card Details" columns={columns} data={data} />
          </div>
        </>
      )}
    </div>
  );
}
