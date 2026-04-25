"use client";
const team = [
  { name: "Alexandru Ionescu", role: "Președinte", initials: "AI" },
  { name: "Maria Constantin", role: "Vicepreședinte", initials: "MC" },
  { name: "Andrei Popescu", role: "Secretar General", initials: "AP" },
  { name: "Elena Radu", role: "Trezorier", initials: "ER" },
  { name: "Bogdan Marin", role: "Coordonator Proiecte", initials: "BM" },
  { name: "Ioana Stoica", role: "Director Comunicare", initials: "IS" },
];

const colors = ["#1A2744", "#C8A84B", "#2E6B3E", "#2A5080", "#8B1A1A", "#6A3070"];

export default function Team() {
  return (
    <section id="echipa" style={{ background: "var(--navy)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label">Echipa Noastră</div>
          <div className="divider-gold" style={{ margin: "1rem auto" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff" }}>
            Comitetul{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Director</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
        }}>
          {team.map((m, i) => (
            <div
              key={m.name}
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                border: "1px solid rgba(200,168,75,0.15)",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,168,75,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,168,75,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: colors[i % colors.length],
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.25rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "#fff",
                border: "2px solid rgba(200,168,75,0.3)",
              }}>
                {m.initials}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>
                {m.name}
              </h3>
              <div style={{ fontSize: "0.78rem", color: "var(--gold)", letterSpacing: "0.06em", fontWeight: 500 }}>
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
