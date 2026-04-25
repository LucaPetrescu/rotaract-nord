"use client";
export default function About() {
  const values = [
    { icon: "🤝", title: "Serviciu", desc: "Contribuim activ la comunitate prin proiecte de voluntariat și acțiuni sociale." },
    { icon: "🌐", title: "Internațional", desc: "Suntem parte dintr-o rețea globală de peste 1 milion de tineri din 200 de țări." },
    { icon: "💡", title: "Dezvoltare", desc: "Ne perfecționăm constant prin întâlniri, conferințe și programe de mentorat." },
    { icon: "❤️", title: "Prietenie", desc: "Construim relații autentice și o comunitate bazată pe respect și sprijin reciproc." },
  ];

  return (
    <section id="despre" style={{ background: "#fff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: text */}
          <div>
            <div className="section-label">Despre Noi</div>
            <div className="divider-gold" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Tineri care fac{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>diferența</span>
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem", fontSize: "1rem" }}>
              Rotaract București Nord este un club al tinerilor profesioniști cu vârste
              între 18 și 30 de ani, înfiinţat sub sponsorizarea unui club Rotary din
              nordul Capitalei. Facem parte din Rotary International District 2241.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "1rem" }}>
              Misiunea noastră este să oferim oportunităților de serviciu, de leadership
              și de prietenie tinerilor care doresc să contribuie la o lume mai bună —
              atât local, cât și global.
            </p>
            <a href="#contact" className="btn-primary">Devino Membru</a>
          </div>

          {/* Right: values grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--cream)",
                  border: "1px solid rgba(200,168,75,0.15)",
                  padding: "1.75rem",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,168,75,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.5rem" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #despre > div > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
