import { useEffect, useState } from "react";

function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      ></div>

      <div
        className="cursor-glow"
        style={{ left: pos.x, top: pos.y }}
      ></div>
    </>
  );
}

export default MouseFollower;