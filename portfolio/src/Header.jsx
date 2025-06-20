import React from "react";

export default function Header() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <header className="site-header">
        <div className="brand" style={{display:'flex', flexWrap:'wrap'}}>
            <div>
                Kamron Arabi&nbsp;
            </div>
            <div>
              in&nbsp;

                <span className="za-red">S</span>
                <span className="za-blue">o</span>
                <span className="za-green">u</span>
                <span className="za-gold">t</span>
                <span className="za-red">h</span>&nbsp;

                <span className="za-blue">A</span>
                <span className="za-green">f</span>
                <span className="za-gold">r</span>
                <span className="za-red">i</span>
                <span className="za-blue">c</span>
                <span className="za-green">a</span>
            </div>
        </div>

      <nav className="nav-links">
        <button onClick={() => goTo("experience")}>Experience</button>
        <button onClick={() => goTo("project")}>Project</button>
        <button onClick={() => goTo("highlights")}>Highlights</button>
      </nav>
    </header>
  );
}
