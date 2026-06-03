"use client";
const steps = [
  { num: "01", title: "Ia legătura cu noi", desc: "Completează formularul de contact sau vino la una dintre întâlnirile noastre publice." },
  { num: "02", title: "Participă la o întâlnire", desc: "Te invităm la o ședință de club pentru a cunoaște echipa și a înțelege valorile noastre." },
  { num: "03", title: "Propune-ți candidatura", desc: "Completezi un formular de aderare și ești prezentat membrilor activi ai clubului." },
  { num: "04", title: "Bun venit în familie!", desc: "Devii oficial membru Rotaract și începi să contribui la proiectele noastre." },
];

export default function Join() {
  return (
    <section id="membri" style={{ background: "#fff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <div className="section-label">Devino Membru</div>
            <div className="divider-gold" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Cum te{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>alături</span>{" "}
              nouă?
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Membership-ul Rotaract este deschis tinerilor cu vârste între 18 și 30 de ani,
              care doresc să contribuie la comunitate, să se dezvolte personal și profesional
              și să facă parte dintr-o rețea globală de tineri lideri.
            </p>
            <div style={{
              background: "var(--cream)",
              border: "1px solid rgba(232,24,93,0.15)",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontWeight: 500 }}>
                Urmăresc Ședință Lunară
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "var(--navy)", fontWeight: 600 }}>
                Prima și a treia marți a fiecărei luni, ora 19:00
              </div>
            </div>
            <a href="#contact" className="btn-primary">Aplică Acum</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "rgba(232,24,93,0.2)",
                  lineHeight: 1,
                  flexShrink: 0,
                  width: "3rem",
                }}>
                  {s.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.4rem" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #membri > div > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
