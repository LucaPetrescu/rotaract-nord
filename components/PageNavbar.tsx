"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Acasă", href: "/" },
  { label: "Evenimente", href: "/evenimente" },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Membri", href: "/membrii" },
  { label: "Contact", href: "/contact" },
];

export default function PageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,168,75,0.2)",
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
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #E8185D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="#E8185D" strokeWidth="1.5" fill="none"/>
              <circle cx="11" cy="11" r="4" fill="#E8185D"/>
            </svg>
          </div>
          <div>
            <div style={{ color: "#E8185D", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, lineHeight: 1.1 }}>Rotaract</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>București Nord</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="pnav-desktop">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#E8185D" : "rgba(26,26,46,0.7)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: pathname === l.href ? 500 : 400,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
                borderBottom: pathname === l.href ? "1px solid #E8185D" : "1px solid transparent",
                paddingBottom: "2px",
              }}
              onMouseEnter={e => { if (pathname !== l.href) (e.currentTarget as HTMLElement).style.color = "#E8185D"; }}
              onMouseLeave={e => { if (pathname !== l.href) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
            Alătură-te
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#E8185D", display: "none" }}
          className="pnav-mobile"
          aria-label={open ? "Închide meniu" : "Deschide meniu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            borderTop: "1px solid rgba(200,168,75,0.2)",
            padding: "1rem 2rem 2rem",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: pathname === l.href ? "#E8185D" : "rgba(26,26,46,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                fontWeight: pathname === l.href ? 500 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ marginTop: "1rem", display: "inline-block", fontSize: "0.8rem" }}
          >
            Alătură-te
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pnav-desktop { display: none !important; }
          .pnav-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
