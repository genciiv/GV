import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <nav className={open ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>
            Kreu
          </a>
          <a href="#services" onClick={closeMenu}>
            Shërbime
          </a>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
          <a href="#pricing" onClick={closeMenu}>
            Çmime
          </a>
          <a href="#contact" onClick={closeMenu}>
            Kontakt
          </a>
        </nav>

        <a href="#contact-form" className="nav-btn">
          Fillo Projektin
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
