"use client";
export default function Quote() {
  return (
    <section style={{
      background: "var(--navy)",
      padding: "5rem 2rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }}>
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1.5" fill="#C8A84B"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        <div style={{ color: "var(--gold)", fontSize: "5rem", lineHeight: 0.8, marginBottom: "1.5rem", fontFamily: "'Playfair Display', serif", opacity: 0.4 }}>
          "
        </div>
        <blockquote style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontStyle: "italic",
          color: "#fff",
          fontWeight: 400,
          lineHeight: 1.5,
          margin: "0 0 1.5rem",
        }}>
          Service Above Self
        </blockquote>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Motto-ul Rotary International
        </p>
      </div>
    </section>
  );
}
