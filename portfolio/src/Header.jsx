import React from "react";

export default function Header() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <header className="site-header">
        <div className="brand">
        Kamron Arabi&nbsp;in&nbsp;South Africa
        </div>
      <nav className="nav-links">
        <button onClick={() => goTo("projects")}>Project</button>
        <button onClick={() => goTo("highlights")}>Highlights</button>
        <button onClick={() => goTo("contact")}>Contact</button>
      </nav>
    </header>
  );
}
