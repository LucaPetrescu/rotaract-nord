"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Acasă", href: "#home" },
  { label: "Despre Noi", href: "#despre" },
  { label: "Proiecte", href: "#proiecte" },
  { label: "Evenimente", href: "/evenimente" },
  { label: "Membri", href: "#membri" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,24,93,0.15)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #E8185D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="#E8185D" strokeWidth="1.5" fill="none"/>
              <circle cx="11" cy="11" r="4" fill="#E8185D"/>
            </svg>
          </div>
          <div>
            <div style={{ color: "#E8185D", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, lineHeight: 1.1 }}>Rotaract</div>
            <div style={{ color: "rgba(26,26,46,0.5)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>București Nord</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(26,26,46,0.75)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8185D")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(26,26,46,0.75)")}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
            Alătură-te
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#E8185D", display: "none" }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            borderTop: "1px solid rgba(232,24,93,0.15)",
            padding: "1rem 2rem 2rem",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(26,26,46,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(26,26,46,0.08)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
