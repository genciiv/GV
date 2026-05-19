import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loader-logo">GV</div>
      <span>Duke ngarkuar eksperiencën...</span>
    </div>
  );
}

export default LoadingScreen;