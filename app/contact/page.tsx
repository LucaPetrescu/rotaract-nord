"use client";
import PageShell from "@/components/PageShell";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

/* Inline brand SVGs — lucide-react v1 removed brand icons */
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/* ─────────────────────────── Form state types ─────────────────────────── */
type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

/* ─────────────────────────── Input field ─────────────────────────── */
function Field({
  id, label, type = "text", placeholder, value, onChange, required = true,
}: {
  id: keyof FormData;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const sharedStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.8rem 1rem",
    border: `1.5px solid ${focused ? "var(--gold)" : "rgba(0,0,0,0.14)"}`,
    fontSize: "0.95rem",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    background: focused ? "#fff" : "var(--cream)",
    color: "var(--navy)",
    boxShadow: focused ? "0 0 0 3px rgba(200,168,75,0.12)" : "none",
    borderRadius: 0,
  };

  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: focused ? "var(--gold)" : "var(--navy)",
          marginBottom: "0.4rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          transition: "color 0.2s",
        }}
      >
        {label}{required && <span style={{ color: "var(--gold)", marginLeft: "2px" }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={sharedStyle}
      />
    </div>
  );
}

/* ─────────────────────────── Textarea field ─────────────────────────── */
function TextareaField({
  id, label, placeholder, value, onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: focused ? "var(--gold)" : "var(--navy)",
          marginBottom: "0.4rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          transition: "color 0.2s",
        }}
      >
        {label}<span style={{ color: "var(--gold)", marginLeft: "2px" }}>*</span>
      </label>
      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        value={value}
        required
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "0.8rem 1rem",
          border: `1.5px solid ${focused ? "var(--gold)" : "rgba(0,0,0,0.14)"}`,
          fontSize: "0.95rem",
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.2s, box-shadow 0.2s",
          background: focused ? "#fff" : "var(--cream)",
          color: "var(--navy)",
          boxShadow: focused ? "0 0 0 3px rgba(200,168,75,0.12)" : "none",
          borderRadius: 0,
          minHeight: "140px",
        }}
      />
    </div>
  );
}

/* ─────────────────────────── Social icon button ─────────────────────────── */
function SocialLink({ href, label, children, hoverColor }: { href: string; label: string; children: React.ReactNode; hoverColor: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "42px",
        height: "42px",
        border: `1.5px solid ${hovered ? hoverColor : "rgba(200,168,75,0.3)"}`,
        background: hovered ? hoverColor : "transparent",
        color: hovered ? "#fff" : "var(--navy)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "all 0.18s",
      }}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────── Contact info item ─────────────────────────── */
function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
      <div style={{
        width: "42px", height: "42px", background: "var(--navy)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--gold)", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.25rem",
        }}>
          {label}
        </div>
        <div style={{ color: "var(--navy)", fontWeight: 500, fontSize: "0.95rem", lineHeight: 1.4 }}>
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none", display: "block" }}>
        {content}
      </a>
    );
  }
  return content;
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const setField = (key: keyof FormData) => (val: string) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    /* Simulate async submission — wire to your API route here */
    await new Promise(r => setTimeout(r, 1200));
    setStatus("success");
  };

  const handleReset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  return (
    <PageShell
      eyebrow="Rotaract București Nord · Contact"
      heading={
        <>
          Ia legătura{" "}
          <span style={{ color: "#E8185D", fontStyle: "italic" }}>cu noi</span>
        </>
      }
      description="Ai întrebări, vrei să te alături echipei sau propui un parteneriat? Suntem bucuroși să te ascultăm."
    >
      <section style={{ padding: "5rem 2rem 7rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "4rem",
            alignItems: "start",
          }}
            className="contact-grid"
          >

            {/* ── Left sidebar ── */}
            <aside>
              {/* Info block */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div className="section-label" style={{ marginBottom: "0.75rem" }}>Informații Contact</div>
                <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />

                <ContactItem
                  icon={<Mail size={18} />}
                  label="Email"
                  value="contact@rotaract-bucurestinord.ro"
                  href="mailto:contact@rotaract-bucurestinord.ro"
                />
                <ContactItem
                  icon={<Phone size={18} />}
                  label="Telefon"
                  value="+40 721 234 567"
                  href="tel:+40721234567"
                />
                <ContactItem
                  icon={<MapPin size={18} />}
                  label="Sediu"
                  value={"Calea Floreasca 167, Sector 1\nBucurești, România"}
                />
              </div>

              {/* Meeting info */}
              <div style={{
                background: "var(--navy)",
                padding: "1.5rem",
                marginBottom: "2rem",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "var(--gold)",
                }} />
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Ședințe lunare
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#fff", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
                  Prima și a treia marți,<br />
                  <span style={{ color: "var(--gold)" }}>ora 19:00</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.6, marginTop: "0.75rem", marginBottom: 0 }}>
                  Participarea publicului la prima ședință din lună este liberă — vino să ne cunoști fără angajament.
                </p>
              </div>

              {/* Social icons */}
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.85rem" }}>
                  Urmărește-ne
                </div>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  <SocialLink href="https://facebook.com" label="Facebook" hoverColor="#1877F2">
                    <FacebookIcon size={17} />
                  </SocialLink>
                  <SocialLink href="https://instagram.com" label="Instagram" hoverColor="#E1306C">
                    <InstagramIcon size={17} />
                  </SocialLink>
                  <SocialLink href="https://linkedin.com" label="LinkedIn" hoverColor="#0A66C2">
                    <LinkedInIcon size={17} />
                  </SocialLink>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.85rem" }}>
                  Locație
                </div>
                <div style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "var(--navy)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  border: "1px solid rgba(200,168,75,0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Grid pattern */}
                  <svg style={{ position: "absolute", inset: 0, opacity: 0.06 }} width="100%" height="100%">
                    <pattern id="mapgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E8185D" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#mapgrid)"/>
                  </svg>
                  <MapPin size={28} style={{ color: "var(--gold)", position: "relative", zIndex: 1 }} />
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", textAlign: "center", position: "relative", zIndex: 1, lineHeight: 1.5 }}>
                    Calea Floreasca 167<br />
                    Sector 1, București
                  </div>
                  <a
                    href="https://maps.google.com/?q=Calea+Floreasca+167+Bucuresti"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "relative", zIndex: 1,
                      padding: "0.4rem 1rem",
                      border: "1px solid rgba(200,168,75,0.4)",
                      color: "var(--gold)",
                      textDecoration: "none",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "all 0.18s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    }}
                  >
                    Deschide în Maps
                  </a>
                  {/* Replace the div above with a real iframe when embedding: */}
                  {/*
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sediu Rotaract București Nord"
                  />
                  */}
                </div>
              </div>
            </aside>

            {/* ── Right: Form ── */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", padding: "2.5rem" }}>
              {status === "success" ? (
                /* ── Success state ── */
                <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%",
                    background: "#2E6B3E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "#fff",
                  }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", color: "var(--navy)", marginBottom: "0.75rem" }}>
                    Mesaj trimis cu succes!
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "360px", margin: "0 auto 2rem" }}>
                    Mulțumim că ne-ai contactat. Îți vom răspunde în termen de 48 de ore lucrătoare.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-outline"
                    style={{ cursor: "pointer" }}
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", color: "var(--navy)", marginBottom: "0.35rem" }}>
                      Trimite-ne un mesaj
                    </h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                      Completează formularul și te vom contacta cât mai curând posibil.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Two-column row for name + email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <Field
                        id="name"
                        label="Nume Complet"
                        placeholder="Ion Popescu"
                        value={form.name}
                        onChange={setField("name")}
                      />
                      <Field
                        id="email"
                        label="Adresă Email"
                        type="email"
                        placeholder="ion@exemplu.ro"
                        value={form.email}
                        onChange={setField("email")}
                      />
                    </div>

                    <Field
                      id="subject"
                      label="Subiect"
                      placeholder="Vreau să mă alătur clubului"
                      value={form.subject}
                      onChange={setField("subject")}
                    />

                    <TextareaField
                      id="message"
                      label="Mesaj"
                      placeholder="Spune-ne cum te putem ajuta sau cum ai vrea să te implici în activitățile clubului..."
                      value={form.message}
                      onChange={setField("message")}
                    />

                    {/* Checkboxes for interest */}
                    <div style={{ marginBottom: "1.75rem" }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                        Sunt interesat de
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {["Membership", "Voluntariat", "Parteneriat", "Sponsorizare", "Presă"].map(opt => (
                          <label
                            key={opt}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.82rem",
                              color: "var(--text-muted)",
                              cursor: "pointer",
                              padding: "0.35rem 0.75rem",
                              border: "1px solid rgba(0,0,0,0.1)",
                              background: "var(--cream)",
                              transition: "all 0.15s",
                              userSelect: "none",
                            }}
                          >
                            <input type="checkbox" style={{ accentColor: "var(--gold)" }} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        cursor: status === "loading" ? "not-allowed" : "pointer",
                        opacity: status === "loading" ? 0.75 : 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <span style={{
                            width: "16px", height: "16px", borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.4)",
                            borderTopColor: "#fff",
                            display: "inline-block",
                            animation: "spin 0.7s linear infinite",
                          }} />
                          Se trimite...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Trimite Mesajul
                        </>
                      )}
                    </button>

                    <p style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginTop: "1rem", lineHeight: 1.6 }}>
                      Prin trimiterea acestui formular ești de acord cu prelucrarea datelor tale conform{" "}
                      <a href="#" style={{ color: "var(--gold)", textDecoration: "none" }}>politicii de confidențialitate</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </PageShell>
  );
}
