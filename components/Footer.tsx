"use client";
import Link from "next/link";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Evenimente", href: "/evenimente" },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Membri", href: "/membrii" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", padding: "3rem 2rem 1.5rem", borderTop: "1px solid rgba(232,24,93,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" stroke="#E8185D" strokeWidth="1.5" fill="none"/>
                <circle cx="16" cy="16" r="6" fill="#E8185D"/>
              </svg>
              <div>
                <div style={{ color: "#E8185D", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600 }}>Rotaract</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>București Nord</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "280px" }}>
              Parte din Rotary International District 2241 România și Republica Moldova.
              Tineri profesioniști dedicați comunității și schimbării pozitive.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Navigare
            </div>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8185D")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Rotary family */}
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Familia Rotary
            </div>
            {[
              { label: "Rotary International", url: "https://www.rotary.org" },
              { label: "District 2241", url: "#" },
              { label: "Rotaract.org", url: "https://www.rotary.org/en/get-involved/rotaract-clubs" },
            ].map(l => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8185D")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Rotaract București Nord. Toate drepturile rezervate.
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            Service Above Self
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          footer > div > div:last-child { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  );
}
