import { useState, useEffect } from "react";
import { User, Settings as SettingsIcon, Headphones, LogOut, ChevronRight } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";
import PageHeader from "../components/common/PageHeader";
import Skeleton from "../components/common/Skeleton";
import "./Settings.css";

const profileMenu = [
  { icon: User, label: "Profile setting" },
  { icon: SettingsIcon, label: "Setting" },
  { icon: Headphones, label: "Support" },
  { icon: LogOut, label: "Sign out" },
];

export default function Settings() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* ====================== MOBILE VIEW ====================== */
  if (isMobile) {
    return (
      <div className="mp">
        {loading ? (
          <div className="mp__skeleton">
            <Skeleton variant="circle" width="84px" height="84px" />
            <Skeleton variant="text" width="120px" height="18px" borderRadius="4px" />
            <Skeleton variant="text" width="160px" height="12px" borderRadius="4px" />
            <div className="mp__skeleton-menu">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} variant="rect" height="62px" borderRadius="14px" />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mp__header animate-slide-up delay-1">
              <div className="mp__avatar">
                <span>RS</span>
              </div>
              <h2 className="mp__name">Rohan Shinde</h2>
              <p className="mp__email">rohanshinde@gmail.com</p>
            </div>

            <div className="mp__menu">
              {profileMenu.map((item, i) => (
                <button
                  key={item.label}
                  className={`mp__menu-item animate-slide-up delay-${i + 2}`}
                >
                  <div className="mp__menu-icon">
                    <item.icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="mp__menu-label">{item.label}</span>
                  <ChevronRight size={18} className="mp__menu-arrow" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  /* ====================== DESKTOP VIEW ====================== */
  return (
    <div className="settings">
      <PageHeader title="Settings" breadcrumb="Admin Settings" />

      {loading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="skeleton-card">
            <Skeleton variant="text" width="30%" height="1rem" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Skeleton variant="rect" height="2.5rem" borderRadius="8px" />
              <Skeleton variant="rect" height="2.5rem" borderRadius="8px" />
              <Skeleton variant="rect" height="2.5rem" borderRadius="8px" />
              <Skeleton variant="rect" height="2.5rem" borderRadius="8px" />
            </div>
          </div>
          <div className="skeleton-card">
            <Skeleton variant="text" width="25%" height="1rem" />
            <Skeleton variant="text" count={3} height="1.5rem" gap="0.5rem" />
          </div>
        </div>
      ) : (
        <>
          <div className="settings__card animate-slide-up delay-1">
            <h3>Profile Information</h3>
            <div className="settings__form">
              <div className="settings__field">
                <label>Full Name</label>
                <input type="text" placeholder="Admin User" />
              </div>
              <div className="settings__field">
                <label>Email</label>
                <input type="email" placeholder="admin@example.com" />
              </div>
              <div className="settings__field">
                <label>Role</label>
                <input type="text" placeholder="Administrator" disabled />
              </div>
              <div className="settings__field">
                <label>Phone</label>
                <input type="tel" placeholder="+1 234 567 890" />
              </div>
            </div>
          </div>

          <div className="settings__card animate-slide-up delay-2">
            <h3>Notifications</h3>
            <div className="settings__toggle-group">
              <div className="settings__toggle-row">
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="settings__toggle-row">
                <span>STR Alerts</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="settings__toggle-row">
                <span>Report Generation Alerts</span>
                <input type="checkbox" />
              </div>
            </div>
          </div>

          <div className="settings__actions animate-slide-up delay-3">
            <button className="settings__btn settings__btn--primary">Save Changes</button>
            <button className="settings__btn settings__btn--outline">Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}
