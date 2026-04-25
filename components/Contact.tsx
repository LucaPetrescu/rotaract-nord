"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "var(--cream)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label">Contact</div>
          <div className="divider-gold" style={{ margin: "1rem auto" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--navy)" }}>
            Ia legătura{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>cu noi</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Info */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--navy)", marginBottom: "1.5rem" }}>
              Suntem aici pentru tine
            </h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Ai întrebări despre club, despre proiectele noastre sau vrei să te alături echipei?
              Nu ezita să ne contactezi — te vom răspunde în cel mai scurt timp.
            </p>

            {[
              { icon: <Mail size={18}/>, label: "Email", val: "contact@rotaract-bucurestinord.ro" },
              { icon: <Phone size={18}/>, label: "Telefon", val: "+40 123 456 789" },
              { icon: <MapPin size={18}/>, label: "Locație", val: "București, Sector 1 & 2, România" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "40px", height: "40px", background: "var(--navy)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--gold)", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "var(--navy)", fontWeight: 500 }}>{item.val}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid rgba(200,168,75,0.3)",
                    color: "var(--navy)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--navy)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--navy)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--navy)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,168,75,0.3)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#fff", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.07)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", marginBottom: "0.5rem" }}>Mesaj trimis!</h3>
                <p style={{ color: "var(--text-muted)" }}>Îți vom răspunde în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { id: "name", label: "Nume complet", type: "text", placeholder: "Ion Popescu" },
                  { id: "email", label: "Adresă de email", type: "email", placeholder: "ion@exemplu.ro" },
                ].map((f) => (
                  <div key={f.id} style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid rgba(0,0,0,0.12)",
                        fontSize: "0.95rem",
                        fontFamily: "'DM Sans', sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                        background: "var(--cream)",
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = "var(--gold)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.4rem" }}>
                    Mesaj
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Scrie-ne un mesaj..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1px solid rgba(0,0,0,0.12)",
                      fontSize: "0.95rem",
                      fontFamily: "'DM Sans', sans-serif",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                      background: "var(--cream)",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Trimite Mesajul
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
