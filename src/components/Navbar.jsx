function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">
            <img src="/logo.png" alt="GV Logo" />
          </a>
        </div>

        <nav>
          <a href="#">Kreu</a>
          <a href="#about">Rreth Nesh</a>
          <a href="#services">Shërbime</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
