"use client";

const projects = [
  {
    category: "Social",
    title: "Ajutăm Împreună",
    desc: "Colectăm alimente, îmbrăcăminte și rechizite pentru familiile defavorizate din nordul Capitalei. O inițiativă lunară cu impact real în comunitate.",
    image: "🤲",
    color: "#C8A84B",
  },
  {
    category: "Educație",
    title: "Școala Altfel",
    desc: "Oferim mentorat și ore de meditații gratuite pentru elevi din zone dezavantajate, sprijinind accesul la educație de calitate.",
    image: "📚",
    color: "#1A2744",
  },
  {
    category: "Mediu",
    title: "Verde pentru București",
    desc: "Plantăm arbori și organizăm acțiuni de curățenie în parcurile din nordul orașului. Până acum am plantat peste 500 de puieți.",
    image: "🌳",
    color: "#2E6B3E",
  },
  {
    category: "Sănătate",
    title: "Donează Viață",
    desc: "Campanii de donare de sânge și sensibilizare privind donarea de organe, în parteneriat cu spitalele din București.",
    image: "❤️",
    color: "#8B1A1A",
  },
  {
    category: "Profesional",
    title: "Networking Events",
    desc: "Organizăm întâlniri lunare unde tinerii profesioniști se conectează, împărtășesc experiențe și construiesc relații de business valoroase.",
    image: "🌐",
    color: "#2A5080",
  },
  {
    category: "Cultură",
    title: "Nopțile Culturale",
    desc: "Seri tematice cu dezbateri, prezentări și activități culturale care reunesc membrii clubului și invitați speciali.",
    image: "🎭",
    color: "#6A3070",
  },
];

export default function Projects() {
  return (
    <section id="proiecte" style={{ background: "var(--cream)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ justifyContent: "center", display: "flex" }}>Proiectele Noastre</div>
          <div className="divider-gold" style={{ margin: "1rem auto" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--navy)", maxWidth: "500px", margin: "0 auto" }}>
            Inițiative cu{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>impact real</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                padding: "2rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: p.color }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{
                  width: "48px", height: "48px", background: p.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", flexShrink: 0,
                }}>
                  {p.image}
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: p.color, marginBottom: "0.25rem" }}>
                    {p.category}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--navy)", margin: 0 }}>
                    {p.title}
                  </h3>
                </div>
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#contact" className="btn-outline">Vrei să te implici? Contactează-ne</a>
        </div>
      </div>
    </section>
  );
}
