import { useState, useEffect } from "react";
import { Globe, CalendarDays, Bell, Wallet, CircleDollarSign, LayoutGrid } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import DonutChart from "../components/common/DonutChart";
import BarChartCard from "../components/common/BarChartCard";
import DataTable from "../components/common/DataTable";
import ActivityList from "../components/common/ActivityList";
import { SkeletonCard, SkeletonChart, SkeletonTable, SkeletonActivity } from "../components/common/Skeleton";
import Skeleton from "../components/common/Skeleton";
import "./Dashboard.css";

const donutData = [
  { name: "Reason 1", value: 70 },
  { name: "Reason 2", value: 25 },
  { name: "Reason 3", value: 125 },
  { name: "Others", value: 230 },
];

const barData = [
  { name: "5 Nov 2021", cleared: 320, reported: 198 },
  { name: "6 Nov 2021", cleared: 280, reported: 150 },
  { name: "7 Nov 2021", cleared: 200, reported: 240 },
  { name: "8 Nov 2021", cleared: 480, reported: 320 },
  { name: "9 Nov 2021", cleared: 350, reported: 450 },
];

const tableColumns = [
  { key: "caseId", label: "AML Case ID" },
  { key: "branchId", label: "Branch ID" },
  { key: "identifiedDate", label: "Identified Date" },
  { key: "transactionDate", label: "Date of Transaction" },
  { key: "mode", label: "Mode of Transaction" },
  { key: "amount", label: "Amount of Transactions" },
  { key: "type", label: "Type of Transaction" },
  { key: "accountNo", label: "Account Number" },
  { key: "customer", label: "Customer" },
];

const tableData = [
  { caseId: "225", branchId: "Branch 1", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "70", amount: "70", type: "70", accountNo: "70", customer: "70" },
  { caseId: "180", branchId: "Branch 3", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "160", amount: "160", type: "160", accountNo: "160", customer: "160" },
  { caseId: "205", branchId: "Branch 4", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "65", amount: "65", type: "65", accountNo: "65", customer: "65" },
  { caseId: "199", branchId: "Branch 5", identifiedDate: "02-01-2022", transactionDate: "28-12-2021", mode: "152", amount: "152", type: "152", accountNo: "152", customer: "152" },
  { caseId: "057", branchId: "Branch 6", identifiedDate: "02-01-2022", transactionDate: "28-12-2021", mode: "152", amount: "65", type: "160", accountNo: "65", customer: "65" },
  { caseId: "145", branchId: "Branch 7", identifiedDate: "02-01-2022", transactionDate: "29-12-2021", mode: "152", amount: "65", type: "160", accountNo: "65", customer: "65" },
];

const tableActions = [
  { label: "Generate Report", variant: "outline" },
  { label: "Report AML Case", variant: "outline" },
];

const quickActions = [
  { icon: Wallet, label: "Fund Transfer" },
  { icon: CircleDollarSign, label: "Add Money" },
  { icon: LayoutGrid, label: "More" },
];

export default function Dashboard() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  /* ====================== MOBILE VIEW ====================== */
  if (isMobile) {
    return (
      <div className="mh">
        {loading ? (
          <div className="mh__skeleton">
            <div className="mh__skeleton-header">
              <Skeleton variant="circle" width="48px" height="48px" />
              <div className="mh__skeleton-text">
                <Skeleton variant="text" width="110px" height="14px" />
                <Skeleton variant="text" width="80px" height="10px" />
              </div>
              <Skeleton variant="circle" width="40px" height="40px" />
            </div>
            <Skeleton variant="text" width="220px" height="32px" borderRadius="6px" />
            <div className="mh__skeleton-actions">
              {[1, 2, 3].map((i) => (
                <div key={i} className="mh__skeleton-action">
                  <Skeleton variant="rect" width="56px" height="56px" borderRadius="16px" />
                  <Skeleton variant="text" width="60px" height="10px" />
                </div>
              ))}
            </div>
            <Skeleton variant="text" width="140px" height="16px" borderRadius="4px" />
            <div className="mh__skeleton-pills">
              {[70, 80, 85, 65].map((w, i) => (
                <Skeleton key={i} variant="rect" width={`${w}px`} height="30px" borderRadius="20px" />
              ))}
            </div>
            <SkeletonActivity />
          </div>
        ) : (
          <>
            {/* ---- Header ---- */}
            <div className="mh__header animate-slide-up delay-1">
              <div className="mh__user">
                <div className="mh__avatar">RS</div>
                <div className="mh__user-info">
                  <h2 className="mh__name">Rohan Shinde</h2>
                  <p className="mh__greeting">Good Morning</p>
                </div>
              </div>
              <button className="mh__bell" aria-label="Notifications">
                <Bell size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* ---- Balance ---- */}
            <h1 className="mh__balance animate-slide-up delay-2">
              $42,295.00 <span className="mh__currency">USD</span>
            </h1>

            {/* ---- Quick Actions ---- */}
            <div className="mh__actions animate-slide-up delay-3">
              {quickActions.map((action) => (
                <button key={action.label} className="mh__action-btn">
                  <div className="mh__action-icon">
                    <action.icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className="mh__action-label">{action.label}</span>
                </button>
              ))}
            </div>

            {/* ---- Divider ---- */}
            <div className="mh__divider" />

            {/* ---- Activity ---- */}
            <div className="animate-slide-up delay-4">
              <ActivityList />
            </div>
          </>
        )}
      </div>
    );
  }

  /* ====================== DESKTOP VIEW ====================== */
  return (
    <div className="dashboard">
      <PageHeader title="AML Dashboard" breadcrumb="XXXXXXXX" />

      {loading ? (
        <>
          <div className="dashboard__stats">
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="dashboard__charts">
            <SkeletonChart />
            <SkeletonChart />
          </div>
          <SkeletonTable />
        </>
      ) : (
        <>
          <div className="dashboard__stats">
            <div className="animate-slide-up delay-1">
              <StatCard value="450" label="Total STR ( Suspicious Transaction Report)" icon={Globe} borderColor="#e53e3e" />
            </div>
            <div className="animate-slide-up delay-2">
              <StatCard value="3" label="Days Pending for AML Process" icon={CalendarDays} borderColor="#ed8936" />
            </div>
          </div>

          <div className="dashboard__charts">
            <div className="animate-scale-in delay-3">
              <DonutChart title="Suspicious Transactions as on 10-01-2022" data={donutData} centerValue="450" centerLabel="STR" />
            </div>
            <div className="animate-scale-in delay-4">
              <BarChartCard title="STR Summary" data={barData} />
            </div>
          </div>

          <div className="animate-slide-up delay-5">
            <DataTable title="AML Report" columns={tableColumns} data={tableData} actions={tableActions} />
          </div>
        </>
      )}
    </div>
  );
}
