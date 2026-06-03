import PageNavbar from "./PageNavbar";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  /** Overline label shown above the page title in the hero strip */
  eyebrow: string;
  /** Main hero heading — pass JSX for italic/gold spans */
  heading: React.ReactNode;
  /** Optional short description under the heading */
  description?: string;
}

export default function PageShell({ children, eyebrow, heading, description }: PageShellProps) {
  return (
    <>
      <PageNavbar />

      {/* Page hero strip */}
      <header
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #fff5f8 60%, #ffffff 100%)",
          padding: "8rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rotary wheel — top right */}
        <svg
          style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", opacity: 0.05, pointerEvents: "none" }}
          width="420" height="420" viewBox="0 0 480 480"
        >
          <circle cx="240" cy="240" r="220" stroke="#E8185D" strokeWidth="3" fill="none"/>
          <circle cx="240" cy="240" r="170" stroke="#E8185D" strokeWidth="2" fill="none"/>
          <circle cx="240" cy="240" r="80" stroke="#E8185D" strokeWidth="3" fill="none"/>
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={240 + 80 * Math.cos(angle)} y1={240 + 80 * Math.sin(angle)}
                x2={240 + 220 * Math.cos(angle)} y2={240 + 220 * Math.sin(angle)}
                stroke="#E8185D" strokeWidth="1.5"
              />
            );
          })}
        </svg>

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>{eyebrow}</div>
          <div className="divider-gold" style={{ marginBottom: "1.25rem" }} />
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            {heading}
          </h1>
          {description && (
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "1.25rem",
              maxWidth: "560px",
              fontWeight: 300,
            }}>
              {description}
            </p>
          )}
        </div>
      </header>

      {/* Page body */}
      <main style={{ background: "var(--cream)", minHeight: "40vh" }}>
        {children}
      </main>

      <Footer />
    </>
  );
}
