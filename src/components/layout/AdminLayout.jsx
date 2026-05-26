import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./AdminLayout.css";

export default function AdminLayout() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);

  useEffect(() => {
    setPageKey(location.pathname);
  }, [location.pathname]);

  return (
    <div className="admin-layout">
      {!isMobile && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <main className={`admin-layout__main ${isMobile ? "admin-layout__main--mobile" : ""}`}>
        <div className="admin-layout__page animate-page" key={pageKey}>
          <Outlet />
        </div>
      </main>
      {isMobile && <MobileNav />}
    </div>
  );
}
