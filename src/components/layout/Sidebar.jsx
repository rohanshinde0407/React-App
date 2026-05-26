import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  FileText,
  Target,
  Settings,
  HelpCircle,
} from "lucide-react";
import "./Sidebar.css";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/transactions", icon: ArrowLeftRight, label: "Transactions" },
  { to: "/cards", icon: CreditCard, label: "Cards" },
  { to: "/invoice", icon: FileText, label: "Invoice" },
  { to: "/goals", icon: Target, label: "Goals" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                }
                title={item.label}
              >
                <item.icon size={22} strokeWidth={1.8} />
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar__bottom">
          <button className="sidebar__link" title="Help">
            <HelpCircle size={22} strokeWidth={1.8} />
          </button>
        </div>
      </nav>
    </aside>
  );
}
