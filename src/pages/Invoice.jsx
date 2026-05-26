import { useState, useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import DataTable from "../components/common/DataTable";
import { SkeletonTable } from "../components/common/Skeleton";

const columns = [
  { key: "invoiceId", label: "Invoice ID" },
  { key: "client", label: "Client" },
  { key: "date", label: "Date" },
  { key: "dueDate", label: "Due Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

const data = [
  { invoiceId: "INV-001", client: "Acme Corp", date: "01-01-2022", dueDate: "15-01-2022", amount: "$5,400", status: "Paid" },
  { invoiceId: "INV-002", client: "Globex Inc", date: "05-01-2022", dueDate: "20-01-2022", amount: "$3,200", status: "Pending" },
  { invoiceId: "INV-003", client: "Stark Industries", date: "10-01-2022", dueDate: "25-01-2022", amount: "$12,800", status: "Overdue" },
  { invoiceId: "INV-004", client: "Wayne Enterprises", date: "12-01-2022", dueDate: "27-01-2022", amount: "$7,600", status: "Paid" },
  { invoiceId: "INV-005", client: "Oscorp", date: "15-01-2022", dueDate: "30-01-2022", amount: "$2,900", status: "Pending" },
  { invoiceId: "INV-006", client: "Umbrella Corp", date: "18-01-2022", dueDate: "02-02-2022", amount: "$6,100", status: "Paid" },
  { invoiceId: "INV-007", client: "Cyberdyne", date: "20-01-2022", dueDate: "04-02-2022", amount: "$8,500", status: "Overdue" },
  { invoiceId: "INV-008", client: "Initech", date: "22-01-2022", dueDate: "06-02-2022", amount: "$1,900", status: "Pending" },
];

const actions = [
  { label: "Create Invoice", variant: "outline" },
  { label: "Export All", variant: "outline" },
];

export default function Invoice() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <PageHeader title="Invoice" breadcrumb="Invoice Management" />
      {loading ? (
        <SkeletonTable />
      ) : (
        <div className="animate-slide-up delay-1">
          <DataTable title="Invoice List" columns={columns} data={data} actions={actions} />
        </div>
      )}
    </div>
  );
}
