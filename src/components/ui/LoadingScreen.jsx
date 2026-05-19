import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loader-glow"></div>

      <div className="loader-logo">
        <img src="/logo.png" alt="GV Logo" />
      </div>

      <h2>GV Digital Studio</h2>
      <p>Duke përgatitur eksperiencën premium...</p>

      <div className="loader-line">
        <span></span>
      </div>
    </div>
  );
}

export default LoadingScreen;