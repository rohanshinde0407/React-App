import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  FileText,
  Target,
  Settings,
} from "lucide-react";
import "./MobileNav.css";

const tabs = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/transactions", icon: ArrowLeftRight, label: "Transactions" },
  { to: "/cards", icon: CreditCard, label: "Cards" },
  { to: "/invoice", icon: FileText, label: "Invoice" },
  { to: "/goals", icon: Target, label: "Goals" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === "/"}
          className={({ isActive }) =>
            `mobile-nav__tab ${isActive ? "mobile-nav__tab--active" : ""}`
          }
        >
          <tab.icon size={20} strokeWidth={1.8} />
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
