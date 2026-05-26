import "./Skeleton.css";

export default function Skeleton({ width, height, borderRadius, variant = "rect", count = 1, gap = "0.75rem" }) {
  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : variant === "circle" ? width || "48px" : "100px"),
    borderRadius: borderRadius || (variant === "circle" ? "50%" : variant === "text" ? "4px" : "12px"),
  };

  if (count === 1) {
    return <div className="skeleton" style={style} />;
  }

  return (
    <div className="skeleton-group" style={{ gap }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton" style={style} />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <Skeleton variant="text" width="40%" height="0.75rem" />
      <Skeleton variant="text" width="60%" height="2rem" />
      <Skeleton variant="text" width="80%" height="0.75rem" />
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="skeleton-card">
      <Skeleton variant="text" width="50%" height="0.875rem" />
      <div className="skeleton-chart-bars">
        {[60, 80, 45, 90, 70].map((h, i) => (
          <Skeleton key={i} width="28px" height={`${h}%`} borderRadius="4px 4px 0 0" />
        ))}
      </div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="skeleton-card">
      <Skeleton variant="text" width="30%" height="1rem" />
      <Skeleton height="2.5rem" borderRadius="6px" />
      <Skeleton variant="text" count={5} height="2.25rem" gap="0.5rem" />
    </div>
  );
}

export function SkeletonActivity() {
  return (
    <div className="skeleton-activity">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton-activity__row">
          <Skeleton variant="circle" width="44px" height="44px" />
          <div className="skeleton-activity__text">
            <Skeleton variant="text" width="70%" height="0.875rem" />
            <Skeleton variant="text" width="40%" height="0.625rem" />
          </div>
          <Skeleton variant="text" width="50px" height="0.875rem" />
        </div>
      ))}
    </div>
  );
}
