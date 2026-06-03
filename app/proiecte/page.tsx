"use client";
import PageShell from "@/components/PageShell";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */
type Category = "Toate" | "Social" | "Educație" | "Profesional" | "Cultură" | "Mediu" | "Sănătate";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "Toate">;
  tagline: string;
  description: string;
  impact: string;
  imageUrl: string;
  active: boolean;
}

const categoryColors: Record<string, string> = {
  Social: "#E8185D",
  Educație: "#2A5080",
  Profesional: "#1A2744",
  Cultură: "#6A3070",
  Mediu: "#2E6B3E",
  Sănătate: "#8B1A1A",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ajutăm Împreună",
    category: "Social",
    tagline: "Solidaritate lunară pentru familii defavorizate",
    description:
      "Colectăm alimente, îmbrăcăminte și rechizite pentru familiile în nevoie din nordul Capitalei. Proiectul rulează lunar, cu distribuție directă în cartierele vulnerabile din Sectoarele 1 și 2.",
    impact: "340 kg alimente distribuite în ultima ediție · 12 familii sprijinite",
    imageUrl: "https://picsum.photos/seed/ajutam/800/500",
    active: true,
  },
  {
    id: 2,
    title: "Școala Altfel",
    category: "Educație",
    tagline: "Mentorat și meditații gratuite pentru elevi",
    description:
      "Membrii clubului oferă ore de mentorat și meditații gratuite pentru elevi din zone dezavantajate. Acoperim matematică, informatică, română și limbi străine — cu accent pe pregătirea pentru bacalaureat.",
    impact: "35 elevi înscriși · 8 voluntari activi · rata de promovare bac: 91%",
    imageUrl: "https://picsum.photos/seed/scoala/800/500",
    active: true,
  },
  {
    id: 3,
    title: "Verde pentru București",
    category: "Mediu",
    tagline: "Plantăm arbori și curățăm parcurile",
    description:
      "Organizăm acțiuni de plantare și curățenie în parcurile din nordul orașului. Proiectul funcționează în parteneriat cu Primăria Sectorului 1 și cluburi Rotaract partenere.",
    impact: "500+ puieți plantați · 3 parcuri revitalizate · 200+ voluntari",
    imageUrl: "https://picsum.photos/seed/verde/800/500",
    active: true,
  },
  {
    id: 4,
    title: "Donează Viață",
    category: "Sănătate",
    tagline: "Campanii semestriale de donare de sânge",
    description:
      "Organizăm de două ori pe an campanii de donare de sânge în parteneriat cu Centrul de Transfuzii al Municipiului București. Oferim transport gratuit și consiliere pentru donatori noi.",
    impact: "180 unități de sânge donate · echivalent 540 vieți potenial salvate",
    imageUrl: "https://picsum.photos/seed/donate/800/500",
    active: true,
  },
  {
    id: 5,
    title: "Networking Events",
    category: "Profesional",
    tagline: "Conexiuni reale între tineri profesioniști",
    description:
      "Întâlniri lunare tematice unde membrii și invitații construiesc relații profesionale valoroase. Fiecare ediție are un speaker invitat și o temă de industrie. Format hibrid: față în față și online.",
    impact: "12 ediții/an · 60–80 participanți/ediție · comunitate de 400+ alumni",
    imageUrl: "https://picsum.photos/seed/networking/800/500",
    active: true,
  },
  {
    id: 6,
    title: "Nopțile Culturale",
    category: "Cultură",
    tagline: "Seri de dezbateri și experiențe culturale",
    description:
      "Un format lunar care explorează arta, istoria, filosofia și identitatea culturală românească. Invitați: istorici, scriitori, regizori, arhitecți. Locații: muzee, galerii, spații industriale reconvertite.",
    impact: "8 ediții completate · 55 participanți medie · 20+ invitați speciali",
    imageUrl: "https://picsum.photos/seed/cultural/800/500",
    active: true,
  },
  {
    id: 7,
    title: "Burse Rotaract 2024",
    category: "Educație",
    tagline: "Sprijinim studenții cu potențial",
    description:
      "Program de burse private pentru studenți merituoși din familii cu venituri reduse. Finanțat integral din donații ale membrilor și partenerilor clubului. Bursa acoperă taxele de studiu pentru un semestru.",
    impact: "4 burse acordate în 2024 · valoare totală: 8.400 RON",
    imageUrl: "https://picsum.photos/seed/burse/800/500",
    active: false,
  },
  {
    id: 8,
    title: "Hai la Vot!",
    category: "Social",
    tagline: "Mobilizare civică pentru tineri",
    description:
      "Campanie de informare și mobilizare a tinerilor alegători, desfășurată înaintea alegerilor locale și europarlamentare. Materiale educative, sesiuni Q&A cu reprezentanți electorali și transport gratuit la secții.",
    impact: "2.100 de tineri informați · 12 evenimente publice în 2024",
    imageUrl: "https://picsum.photos/seed/vot/800/500",
    active: false,
  },
];

const categories: Category[] = ["Toate", "Social", "Educație", "Mediu", "Sănătate", "Profesional", "Cultură"];

/* ─────────────────────────── Filter pill ─────────────────────────── */
function FilterPill({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "0.45rem 1.1rem",
        border: `1.5px solid ${active ? color : "rgba(0,0,0,0.15)"}`,
        background: active ? color : hovered ? "rgba(0,0,0,0.04)" : "transparent",
        color: active ? "#fff" : hovered ? color : "var(--text-muted)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.78rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.18s",
      }}
    >
      {label}
    </button>
  );
}

/* ─────────────────────────── Project card ─────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[project.category] ?? "#E8185D";

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? color : "rgba(0,0,0,0.07)"}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 56px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "200px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "50%",
          background: `linear-gradient(to top, ${color}cc 0%, transparent 100%)`,
        }} />
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
          padding: "0.3rem 0.7rem",
        }}>
          {project.category}
        </div>
        {/* Status badge */}
        {!project.active && (
          <div style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "rgba(0,0,0,0.55)",
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.25rem 0.6rem",
          }}>
            Finalizat
          </div>
        )}
        {project.active && (
          <div style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "#2E6B3E",
            color: "#fff",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.25rem 0.6rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7CFC9F", display: "inline-block" }} />
            Activ
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: "0.35rem",
          lineHeight: 1.25,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          color: color,
          marginBottom: "0.85rem",
          fontStyle: "italic",
        }}>
          {project.tagline}
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.75, flexGrow: 1, margin: "0 0 1.25rem" }}>
          {project.description}
        </p>

        {/* Impact bar */}
        <div style={{
          background: "var(--cream)",
          borderLeft: `3px solid ${color}`,
          padding: "0.6rem 0.85rem",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
          lineHeight: 1.5,
          marginBottom: "1.25rem",
        }}>
          <span style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>Impact</span>
          {project.impact}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: color,
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "gap 0.2s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={e => (e.currentTarget.style.gap = "0.7rem")}
          onMouseLeave={e => (e.currentTarget.style.gap = "0.4rem")}
        >
          Implică-te
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function ProiectePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Toate");

  const filtered =
    activeCategory === "Toate"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const activeCategoryColor =
    activeCategory === "Toate" ? "var(--gold)" : categoryColors[activeCategory];

  return (
    <PageShell
      eyebrow="Rotaract București Nord · Proiecte"
      heading={
        <>
          Inițiative cu{" "}
          <span style={{ color: "#E8185D", fontStyle: "italic" }}>impact real</span>
        </>
      }
      description="Proiectele noastre acoperă arii diverse — de la social și educație la mediu și cultură. Fiecare inițiativă este condusă de membri voluntari și măsurată prin impact concret."
    >
      <section style={{ padding: "5rem 2rem 7rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Filter pills */}
          <div style={{
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(200,168,75,0.15)",
          }}>
            {categories.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                color={cat === "Toate" ? "var(--navy)" : categoryColors[cat]}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Section label when filtered */}
          {activeCategory !== "Toate" && (
            <div style={{ marginBottom: "2rem" }}>
              <div className="section-label" style={{ color: activeCategoryColor }}>
                {activeCategory} · {filtered.length} {filtered.length === 1 ? "proiect" : "proiecte"}
              </div>
              <div style={{ width: "3rem", height: "2px", background: activeCategoryColor, marginTop: "0.75rem" }} />
            </div>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}>
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            /* Empty state — shouldn't happen with current data but graceful */
            <div style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.4 }}>○</div>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                Niciun proiect în această categorie momentan.
              </p>
            </div>
          )}

          {/* Bottom CTA strip */}
          <div style={{
            marginTop: "5rem",
            background: "var(--navy)",
            padding: "3rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}>
            <div>
              <div className="section-label" style={{ color: "var(--gold)", marginBottom: "0.5rem" }}>Vrei să contribui?</div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", color: "#fff", margin: 0 }}>
                Fiecare proiect are nevoie de oameni ca tine.
              </h3>
            </div>
            <a href="/contact" className="btn-primary">Contactează-ne</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
