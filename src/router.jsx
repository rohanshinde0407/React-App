import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Cards from "./pages/Cards";
import Invoice from "./pages/Invoice";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "cards", element: <Cards /> },
      { path: "invoice", element: <Invoice /> },
      { path: "goals", element: <Goals /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export default router;
