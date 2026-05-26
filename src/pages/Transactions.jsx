import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import PageHeader from "../components/common/PageHeader";
import DataTable from "../components/common/DataTable";
import ActivityList from "../components/common/ActivityList";
import { SkeletonTable, SkeletonActivity } from "../components/common/Skeleton";
import Skeleton from "../components/common/Skeleton";
import "./Transactions.css";

const columns = [
  { key: "id", label: "Transaction ID" },
  { key: "date", label: "Date" },
  { key: "sender", label: "Sender" },
  { key: "receiver", label: "Receiver" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "type", label: "Type" },
];

const data = [
  { id: "TXN-001", date: "02-01-2022", sender: "John Doe", receiver: "Jane Smith", amount: "$1,200", status: "Completed", type: "Wire Transfer" },
  { id: "TXN-002", date: "02-01-2022", sender: "Alice Brown", receiver: "Bob Wilson", amount: "$850", status: "Pending", type: "ACH" },
  { id: "TXN-003", date: "03-01-2022", sender: "Charlie Davis", receiver: "Eva Martinez", amount: "$3,400", status: "Completed", type: "Wire Transfer" },
  { id: "TXN-004", date: "03-01-2022", sender: "Frank Miller", receiver: "Grace Lee", amount: "$675", status: "Flagged", type: "International" },
  { id: "TXN-005", date: "04-01-2022", sender: "Henry Clark", receiver: "Ivy Johnson", amount: "$2,100", status: "Completed", type: "ACH" },
  { id: "TXN-006", date: "05-01-2022", sender: "Jack White", receiver: "Kate Green", amount: "$950", status: "Pending", type: "Wire Transfer" },
  { id: "TXN-007", date: "06-01-2022", sender: "Leo King", receiver: "Mia Hall", amount: "$4,300", status: "Completed", type: "International" },
  { id: "TXN-008", date: "07-01-2022", sender: "Nina Fox", receiver: "Oscar Wells", amount: "$1,750", status: "Completed", type: "ACH" },
];

export default function Transactions() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* ====================== MOBILE VIEW ====================== */
  if (isMobile) {
    return (
      <div className="mt">
        <h2 className="mt__title animate-slide-up delay-1">Transactions</h2>
        {loading ? (
          <div className="mt__skeleton">
            <Skeleton variant="text" width="140px" height="16px" borderRadius="4px" />
            <div className="mt__skeleton-pills">
              {[70, 80, 85, 65].map((w, i) => (
                <Skeleton key={i} variant="rect" width={`${w}px`} height="30px" borderRadius="20px" />
              ))}
            </div>
            <SkeletonActivity />
          </div>
        ) : (
          <div className="animate-slide-up delay-2">
            <ActivityList />
          </div>
        )}
      </div>
    );
  }

  /* ====================== DESKTOP VIEW ====================== */
  return (
    <div>
      <PageHeader title="Transactions" breadcrumb="All Transactions" />
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="animate-slide-up delay-1">
          <DataTable title="Transaction History" columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}
