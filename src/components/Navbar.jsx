import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/guides", label: "Guides" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          INSIDE LINE
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              onClick={() => setOpen(false)}
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}