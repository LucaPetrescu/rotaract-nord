"use client";
import PageShell from "@/components/PageShell";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

/* ─────────────────────────── Data ─────────────────────────── */
interface Event {
  id: number;
  title: string;
  date: string; // ISO YYYY-MM-DD
  time: string;
  location: string;
  category: "Social" | "Educație" | "Profesional" | "Cultură" | "Mediu" | "Sănătate";
  description: string;
  upcoming: boolean;
  imageUrl: string;
}

const categoryColors: Record<string, string> = {
  Social: "#E8185D",
  Educație: "#2A5080",
  Profesional: "#1A2744",
  Cultură: "#6A3070",
  Mediu: "#2E6B3E",
  Sănătate: "#8B1A1A",
};

const events: Event[] = [
  {
    id: 1,
    title: "Gală de Primăvară — Rotaract Night",
    date: "2025-06-14",
    time: "19:00",
    location: "Grand Hotel Bucharest, Calea Victoriei 63",
    category: "Cultură",
    description:
      "Seara festivă anuală a clubului nostru — premii pentru membrii activi, muzică live și networking într-un cadru elegant. Dresscode: smart casual.",
    upcoming: true,
    imageUrl: "https://picsum.photos/seed/gala/800/480",
  },
  {
    id: 2,
    title: "Workshop: Vorbitul în Public",
    date: "2025-06-21",
    time: "10:00",
    location: "Impact Hub Bucharest, str. Economu Cezărescu 29",
    category: "Profesional",
    description:
      "Training practic de public speaking condus de Mihai Bran, trainer certificat. Vom lucra pe tehnici de structurare a discursurilor și gestionare a emoțiilor de scenă.",
    upcoming: true,
    imageUrl: "https://picsum.photos/seed/workshop/800/480",
  },
  {
    id: 3,
    title: "Campanie de Donare de Sânge",
    date: "2025-07-05",
    time: "09:00",
    location: "Centrul de Transfuzii, str. Dionisie Lupu 37",
    category: "Sănătate",
    description:
      "Alătură-te campaniei noastre semestriale de donare de sânge. O singură donație poate salva până la trei vieți. Transport gratuit asigurat de club.",
    upcoming: true,
    imageUrl: "https://picsum.photos/seed/blood/800/480",
  },
  {
    id: 4,
    title: "Networking Profesional — Summer Edition",
    date: "2025-07-19",
    time: "18:30",
    location: "Grădina Eden, str. Aviatorilor 4",
    category: "Profesional",
    description:
      "Întâlnire lunară de networking în aer liber. Tema: industria tech și oportunități în startupuri. Invitați speciali din ecosistemul local de inovație.",
    upcoming: true,
    imageUrl: "https://picsum.photos/seed/network/800/480",
  },
  /* ── Past events ── */
  {
    id: 5,
    title: "Plantare Arbori — Parcul Herăstrău",
    date: "2025-04-20",
    time: "09:30",
    location: "Parcul Regele Mihai I (Herăstrău), Intrarea B",
    category: "Mediu",
    description:
      "Am plantat 120 de puieți de stejar și tei împreună cu voluntari din 4 cluburi partenere. O dimineață verde cu impact pe 50 de ani.",
    upcoming: false,
    imageUrl: "https://picsum.photos/seed/trees/800/480",
  },
  {
    id: 6,
    title: "Simpozion: Leadership & Valori Rotaract",
    date: "2025-04-12",
    time: "14:00",
    location: "Universitatea București, Sala Moruzi",
    category: "Educație",
    description:
      "Dezbatere cu studenți și tineri profesioniști pe tema lidershipului etic și implicării civice. Peste 80 de participanți din 6 universități.",
    upcoming: false,
    imageUrl: "https://picsum.photos/seed/symposium/800/480",
  },
  {
    id: 7,
    title: "Colectă Ajutăm Împreună — Aprilie",
    date: "2025-04-05",
    time: "10:00",
    location: "Piața Floreasca, stand Rotaract",
    category: "Social",
    description:
      "Colectă lunară de alimente și rechizite. Am strâns 340 de kg de produse alimentare și 200 de pachete de rechizite pentru 12 familii.",
    upcoming: false,
    imageUrl: "https://picsum.photos/seed/collect/800/480",
  },
  {
    id: 8,
    title: "Noapte Culturală: Bucureștiul Interbelic",
    date: "2025-03-28",
    time: "19:00",
    location: "Muzeul Municipiului București",
    category: "Cultură",
    description:
      "Tur ghidat prin expoziția de arhivă, urmat de o dezbatere despre identitatea culturală a Capitalei. Prezenți 55 de membri și invitați.",
    upcoming: false,
    imageUrl: "https://picsum.photos/seed/culture/800/480",
  },
];

/* ─────────────────────────── Helpers ─────────────────────────── */
function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
}

function buildCalendarUrl(event: Event) {
  const start = event.date.replace(/-/g, "") + "T" + event.time.replace(":", "") + "00";
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.description);
  const location = encodeURIComponent(event.location);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${start}&details=${details}&location=${location}`;
}

/* ─────────────────────────── Card ─────────────────────────── */
function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[event.category] ?? "#E8185D";

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: past ? "#fff" : "#fff",
        border: `1px solid ${hovered ? color : "rgba(0,0,0,0.07)"}`,
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "none",
        overflow: "hidden",
        opacity: past ? 0.82 : 1,
        position: "relative",
      }}
    >
      {/* Top accent */}
      <div style={{ height: "3px", background: color, flexShrink: 0 }} />

      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "180px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.imageUrl}
          alt={event.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: past ? "grayscale(40%)" : "none",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Category badge */}
        <div style={{
          position: "absolute",
          top: "0.75rem",
          left: "0.75rem",
          background: color,
          color: "#fff",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.25rem 0.6rem",
        }}>
          {event.category}
        </div>
        {past && (
          <div style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "rgba(0,0,0,0.55)",
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.25rem 0.6rem",
          }}>
            Trecut
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Date / time row */}
        <div style={{ display: "flex", gap: "1.25rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", fontSize: "0.8rem" }}>
            <Calendar size={13} />
            <span>{formatDate(event.date)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", fontSize: "0.8rem" }}>
            <Clock size={13} />
            <span>{event.time}</span>
          </div>
        </div>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "var(--navy)",
          marginBottom: "0.5rem",
          lineHeight: 1.3,
        }}>
          {event.title}
        </h3>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.35rem", marginBottom: "0.85rem" }}>
          <MapPin size={13} style={{ color: "var(--text-muted)", marginTop: "3px", flexShrink: 0 }} />
          <span style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.5 }}>{event.location}</span>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.75, flexGrow: 1, margin: "0 0 1.25rem" }}>
          {event.description}
        </p>

        {/* CTA */}
        {!past && (
          <a
            href={buildCalendarUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: color,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: `1px solid ${color}`,
              paddingBottom: "1px",
              transition: "opacity 0.2s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <Calendar size={13} />
            Adaugă în Calendar
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function EvenimentePage() {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <PageShell
      eyebrow="Rotaract București Nord · Evenimente"
      heading={
        <>
          Calendar{" "}
          <span style={{ color: "#E8185D", fontStyle: "italic" }}>Evenimente</span>
        </>
      }
      description="Evenimentele noastre reunesc membri, parteneri și comunitate. Vino alături de noi și fii parte din schimbare."
    >
      {/* ── Upcoming ── */}
      <section style={{ padding: "5rem 2rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="section-label">Urmează</div>
            <div className="divider-gold" style={{ marginTop: "0.75rem" }} />
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--navy)",
              marginTop: "0.5rem",
            }}>
              Evenimente{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>viitoare</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Gold rule divider */}
      <div style={{ maxWidth: "1200px", margin: "0 2rem", borderTop: "1px solid rgba(200,168,75,0.2)" }} />

      {/* ── Past ── */}
      <section style={{ padding: "4rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="section-label">Arhivă</div>
            <div className="divider-gold" style={{ marginTop: "0.75rem" }} />
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--navy)",
              marginTop: "0.5rem",
            }}>
              Evenimente{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>trecute</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {past.map((e) => (
              <EventCard key={e.id} event={e} past />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 480px) {
          article { margin: 0 !important; }
        }
      `}</style>
    </PageShell>
  );
}
