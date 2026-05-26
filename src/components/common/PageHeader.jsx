import "./PageHeader.css";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {breadcrumb && <p className="page-header__breadcrumb">{breadcrumb}</p>}
    </div>
  );
}
