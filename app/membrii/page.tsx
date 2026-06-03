"use client";
import PageShell from "@/components/PageShell";
import { useState } from "react";
import { Mail } from "lucide-react";

/* Inline brand SVGs — lucide-react v1 removed brand icons */
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/* ─────────────────────────── Data ─────────────────────────── */
interface BoardMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  email: string;
  linkedin?: string;
  colorIndex: number;
}

interface Member {
  name: string;
  initials: string;
  joinYear: number;
  colorIndex: number;
}

const boardColors = [
  "#1A2744", // navy
  "#E8185D", // gold
  "#2E6B3E", // green
  "#2A5080", // blue
  "#6A3070", // purple
  "#8B1A1A", // burgundy
];

const board: BoardMember[] = [
  {
    name: "Alexandru Ionescu",
    role: "Președinte",
    bio: "Absolvent de Drept și MBA, Alexandru conduce clubul din 2024. Pasionat de leadership și diplomație internațională, a reprezentat clubul la conferința Rotaract District 2241 din Praga.",
    initials: "AI",
    email: "alexandru.ionescu@rotaract-bni.ro",
    linkedin: "#",
    colorIndex: 0,
  },
  {
    name: "Maria Constantin",
    role: "Vicepreședinte",
    bio: "Specialistă în marketing digital, Maria coordonează relațiile cu partenerii și comunicarea externă a clubului. A inițiat seria de Nopți Culturale în 2023.",
    initials: "MC",
    email: "maria.constantin@rotaract-bni.ro",
    linkedin: "#",
    colorIndex: 1,
  },
  {
    name: "Andrei Popescu",
    role: "Secretar General",
    bio: "Jurist și doctorand în drept european, Andrei gestionează documentația clubului și relațiile cu Districtul 2241. Vorbitor la conferințele internaționale Rotaract.",
    initials: "AP",
    email: "andrei.popescu@rotaract-bni.ro",
    linkedin: "#",
    colorIndex: 2,
  },
  {
    name: "Elena Radu",
    role: "Trezorier",
    bio: "Auditor financiar cu experiență în sectorul nonprofit, Elena asigură transparența și sustenabilitatea financiară a tuturor proiectelor clubului.",
    initials: "ER",
    email: "elena.radu@rotaract-bni.ro",
    colorIndex: 3,
  },
  {
    name: "Bogdan Marin",
    role: "Coordonator Proiecte",
    bio: "Manager de proiecte în construcții, Bogdan supraveghează execuția și raportarea tuturor inițiativelor active ale clubului. Inițiatorul proiectului \"Verde pentru București\".",
    initials: "BM",
    email: "bogdan.marin@rotaract-bni.ro",
    linkedin: "#",
    colorIndex: 4,
  },
  {
    name: "Ioana Stoica",
    role: "Director Comunicare",
    bio: "Jurnalist și creator de conținut, Ioana construiește povestea vizibilă a clubului — de la social media la relații cu presa. Câștigătoarea premiului \"Rotaract Communication Excellence\" 2024.",
    initials: "IS",
    email: "ioana.stoica@rotaract-bni.ro",
    linkedin: "#",
    colorIndex: 5,
  },
];

/* 36 general members — realistic Romanian names */
const members: Member[] = [
  { name: "Radu Petrescu", initials: "RP", joinYear: 2023, colorIndex: 0 },
  { name: "Irina Gheorghe", initials: "IG", joinYear: 2022, colorIndex: 1 },
  { name: "Mihai Dumitrescu", initials: "MD", joinYear: 2024, colorIndex: 2 },
  { name: "Larisa Moldovan", initials: "LM", joinYear: 2023, colorIndex: 3 },
  { name: "Cristian Popa", initials: "CP", joinYear: 2021, colorIndex: 4 },
  { name: "Teodora Nistor", initials: "TN", joinYear: 2024, colorIndex: 5 },
  { name: "Vlad Sandu", initials: "VS", joinYear: 2022, colorIndex: 0 },
  { name: "Oana Mihai", initials: "OM", joinYear: 2023, colorIndex: 1 },
  { name: "Sergiu Luca", initials: "SL", joinYear: 2024, colorIndex: 2 },
  { name: "Andreea Iorga", initials: "AI", joinYear: 2021, colorIndex: 3 },
  { name: "Florin Matei", initials: "FM", joinYear: 2022, colorIndex: 4 },
  { name: "Diana Vlad", initials: "DV", joinYear: 2023, colorIndex: 5 },
  { name: "Cosmin Tudor", initials: "CT", joinYear: 2024, colorIndex: 0 },
  { name: "Gabriela Stan", initials: "GS", joinYear: 2022, colorIndex: 1 },
  { name: "Relu Ionescu", initials: "RI", joinYear: 2021, colorIndex: 2 },
  { name: "Nicoleta Bălan", initials: "NB", joinYear: 2023, colorIndex: 3 },
  { name: "Sorin Enache", initials: "SE", joinYear: 2024, colorIndex: 4 },
  { name: "Alina Ciobanu", initials: "AC", joinYear: 2022, colorIndex: 5 },
  { name: "Dan Petre", initials: "DP", joinYear: 2021, colorIndex: 0 },
  { name: "Claudia Munteanu", initials: "CM", joinYear: 2023, colorIndex: 1 },
  { name: "Marius Florescu", initials: "MF", joinYear: 2024, colorIndex: 2 },
  { name: "Simona Bădescu", initials: "SB", joinYear: 2022, colorIndex: 3 },
  { name: "Petru Anghel", initials: "PA", joinYear: 2023, colorIndex: 4 },
  { name: "Raluca Dobre", initials: "RD", joinYear: 2021, colorIndex: 5 },
  { name: "Adrian Grigore", initials: "AG", joinYear: 2024, colorIndex: 0 },
  { name: "Mirela Stanciu", initials: "MS", joinYear: 2022, colorIndex: 1 },
  { name: "Ciprian Rotaru", initials: "CR", joinYear: 2023, colorIndex: 2 },
  { name: "Bianca Alexandrescu", initials: "BA", joinYear: 2024, colorIndex: 3 },
  { name: "Ionuț Grecu", initials: "IG", joinYear: 2021, colorIndex: 4 },
  { name: "Corina Draghici", initials: "CD", joinYear: 2022, colorIndex: 5 },
  { name: "Bogdan Ene", initials: "BE", joinYear: 2023, colorIndex: 0 },
  { name: "Lidia Pascu", initials: "LP", joinYear: 2024, colorIndex: 1 },
  { name: "Octavian Preda", initials: "OP", joinYear: 2022, colorIndex: 2 },
  { name: "Roxana Toma", initials: "RT", joinYear: 2023, colorIndex: 3 },
  { name: "Valentin Stancu", initials: "VS", joinYear: 2021, colorIndex: 4 },
  { name: "Georgiana Oprea", initials: "GO", joinYear: 2024, colorIndex: 5 },
];

/* ─────────────────────────── Board Card ─────────────────────────── */
function BoardCard({ member }: { member: BoardMember }) {
  const [hovered, setHovered] = useState(false);
  const color = boardColors[member.colorIndex % boardColors.length];

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? color : "rgba(0,0,0,0.07)"}`,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top color accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: color }} />

      <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
        {/* Avatar */}
        <div style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: member.colorIndex === 1 ? "#1A2744" : "#fff",
          border: "2px solid rgba(200,168,75,0.25)",
        }}>
          {member.initials}
        </div>

        <div style={{ flexGrow: 1, minWidth: 0 }}>
          <div style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color,
            marginBottom: "0.3rem",
          }}>
            {member.role}
          </div>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--navy)",
            margin: 0,
            lineHeight: 1.25,
          }}>
            {member.name}
          </h3>
        </div>
      </div>

      <p style={{
        color: "var(--text-muted)",
        fontSize: "0.875rem",
        lineHeight: 1.75,
        margin: 0,
        flexGrow: 1,
      }}>
        {member.bio}
      </p>

      {/* Contact row */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1rem" }}>
        <a
          href={`mailto:${member.email}`}
          title={`Email ${member.name}`}
          style={{
            width: "34px", height: "34px",
            background: "var(--cream)",
            border: "1px solid rgba(0,0,0,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "all 0.18s",
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = color;
            (e.currentTarget as HTMLElement).style.color = "#fff";
            (e.currentTarget as HTMLElement).style.borderColor = color;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "var(--cream)";
            (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.1)";
          }}
          aria-label={`Email ${member.name}`}
        >
          <Mail size={15} />
        </a>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title={`LinkedIn ${member.name}`}
            style={{
              width: "34px", height: "34px",
              background: "var(--cream)",
              border: "1px solid rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "all 0.18s",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = color;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--cream)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.1)";
            }}
            aria-label={`LinkedIn ${member.name}`}
          >
            <LinkedInIcon size={15} />
          </a>
        )}

        <span style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginLeft: "auto", fontStyle: "italic" }}>
          {member.email}
        </span>
      </div>
    </article>
  );
}

/* ─────────────────────────── Member Avatar ─────────────────────────── */
function MemberAvatar({ member }: { member: Member }) {
  const [hovered, setHovered] = useState(false);
  const color = boardColors[member.colorIndex % boardColors.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem 0.5rem",
        border: `1px solid ${hovered ? color : "transparent"}`,
        transition: "border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        cursor: "default",
        background: hovered ? "#fff" : "transparent",
      }}
    >
      <div style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "0.85rem",
        color: member.colorIndex === 1 ? "#1A2744" : "#fff",
        border: "1.5px solid rgba(200,168,75,0.2)",
      }}>
        {member.initials}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          color: "var(--navy)",
          lineHeight: 1.3,
        }}>
          {member.name}
        </div>
        <div style={{
          fontSize: "0.68rem",
          color: "var(--text-muted)",
          marginTop: "0.15rem",
        }}>
          din {member.joinYear}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function MembriPage() {
  return (
    <PageShell
      eyebrow="Rotaract București Nord · Oamenii Noștri"
      heading={
        <>
          Comunitatea{" "}
          <span style={{ color: "#E8185D", fontStyle: "italic" }}>noastră</span>
        </>
      }
      description="Suntem 50+ tineri profesioniști uniți de valorile Rotaract. Cunoaște echipa care conduce clubul și comunitatea de membri care îl fac să funcționeze."
    >
      {/* ── Board section ── */}
      <section style={{ padding: "5rem 2rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="section-label">Conducere</div>
            <div className="divider-gold" style={{ marginTop: "0.75rem" }} />
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--navy)",
              marginTop: "0.5rem",
            }}>
              Comitetul{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Director</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "560px", marginTop: "0.75rem" }}>
              Mandatul actualului comitet director acopere perioada {new Date().getFullYear()}–{new Date().getFullYear() + 1},
              conform calendarului Rotary International.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}>
            {board.map((m) => (
              <BoardCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Transition divider */}
      <div style={{ maxWidth: "1200px", margin: "0 2rem 0", borderTop: "1px solid rgba(200,168,75,0.18)" }} />

      {/* ── Members section ── */}
      <section style={{ padding: "3rem 2rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div className="section-label">Comunitate</div>
            <div className="divider-gold" style={{ marginTop: "0.75rem" }} />
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--navy)",
              marginTop: "0.5rem",
            }}>
              Membrii{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>activi</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "0.25rem",
          }}>
            {members.map((m, i) => (
              <MemberAvatar key={i} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA banner */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #fff5f8 0%, #fff 100%)",
            padding: "3rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative circle */}
            <div style={{
              position: "absolute", right: "-60px", top: "-60px",
              width: "220px", height: "220px", borderRadius: "50%",
              border: "1px solid rgba(200,168,75,0.12)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="section-label" style={{ color: "#E8185D", marginBottom: "0.5rem" }}>
                Vrei să faci parte din echipă?
              </div>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                color: "#fff",
                margin: 0,
                lineHeight: 1.3,
              }}>
                Membership-ul este deschis tinerilor<br />
                <span style={{ color: "#E8185D", fontStyle: "italic" }}>între 18 și 30 de ani.</span>
              </h3>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <a href="/contact" className="btn-primary">Aplică Acum</a>
              <a href="/evenimente" className="btn-outline">Vezi Evenimente</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 480px) {
          .member-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </PageShell>
  );
}
