import { useLocation } from "react-router-dom";
import { Bell, ChevronDown, Search } from "lucide-react";
import "./Header.css";

const pageTitles = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/cards": "Cards",
  "/invoice": "Invoice",
  "/goals": "Goals",
  "/settings": "Settings",
};

export default function Header() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">{title}</h1>
      </div>

      <div className="header__right">
        <div className="header__search">
          <Search size={16} className="header__search-icon" />
          <input type="text" placeholder="Search..." className="header__search-input" />
        </div>

        <button className="header__icon-btn" aria-label="Notifications">
          <Bell size={19} strokeWidth={1.8} />
          <span className="header__badge">3</span>
        </button>

        <div className="header__divider" />

        <button className="header__profile">
          <div className="header__avatar">RS</div>
          <div className="header__profile-info">
            <span className="header__profile-name">Rohan Shinde</span>
            <span className="header__profile-role">Admin</span>
          </div>
          <ChevronDown size={16} className="header__profile-chevron" />
        </button>
      </div>
    </header>
  );
}
