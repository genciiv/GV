function FloatingDecor({ variant = "default" }) {
  return (
    <div className={`floating-decor decor-${variant}`} aria-hidden="true">
      <div className="decor-icon decor-a">✦</div>
      <div className="decor-icon decor-b">⚡</div>
      <div className="decor-icon decor-c">◎</div>
    </div>
  );
}

export default FloatingDecor;