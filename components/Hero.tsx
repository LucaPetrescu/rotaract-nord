"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0F1A2E 0%, #1A2744 50%, #0F1A2E 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative geometric elements */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
      }}>
        {/* Large circle */}
        <div style={{
          position: "absolute", right: "-10%", top: "10%",
          width: "600px", height: "600px", borderRadius: "50%",
          border: "1px solid rgba(200,168,75,0.12)",
        }} />
        <div style={{
          position: "absolute", right: "-5%", top: "15%",
          width: "450px", height: "450px", borderRadius: "50%",
          border: "1px solid rgba(200,168,75,0.08)",
        }} />
        {/* Rotary wheel hint */}
        <svg style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", opacity: 0.06 }}
          width="480" height="480" viewBox="0 0 480 480">
          <circle cx="240" cy="240" r="220" stroke="#C8A84B" strokeWidth="3" fill="none"/>
          <circle cx="240" cy="240" r="170" stroke="#C8A84B" strokeWidth="2" fill="none"/>
          <circle cx="240" cy="240" r="80" stroke="#C8A84B" strokeWidth="3" fill="none"/>
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 240 + 80 * Math.cos(angle);
            const y1 = 240 + 80 * Math.sin(angle);
            const x2 = 240 + 220 * Math.cos(angle);
            const y2 = 240 + 220 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C8A84B" strokeWidth="1.5"/>;
          })}
        </svg>
        {/* Bottom left ornament */}
        <div style={{
          position: "absolute", left: "-5%", bottom: "-5%",
          width: "350px", height: "350px", borderRadius: "50%",
          border: "1px solid rgba(200,168,75,0.08)",
        }} />
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8rem 2rem 4rem",
        position: "relative",
        zIndex: 2,
        width: "100%",
      }}>
        <div style={{ maxWidth: "680px" }}>
          <div className="section-label animate-fadeInUp" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            Rotaract District 2241 · București Nord
          </div>

          <div className="divider-gold animate-fadeInUp" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }} />

          <h1
            className="animate-fadeInUp"
            style={{
              color: "#fff",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 1.5rem",
              animationDelay: "0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Serviciu.{" "}
            <span style={{ color: "#C8A84B", fontStyle: "italic" }}>Prietenie.</span>{" "}
            Schimbare.
          </h1>

          <p
            className="animate-fadeInUp"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              animationDelay: "0.45s",
              opacity: 0,
              animationFillMode: "forwards",
              fontWeight: 300,
            }}
          >
            Suntem un club de tineri profesioniști din nordul Bucureștiului, dedicați
            dezvoltării personale, comunității și valorilor Rotary International.
            Împreună construim o lume mai bună.
          </p>

          <div
            className="animate-fadeInUp"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animationDelay: "0.6s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a href="#proiecte" className="btn-primary">Proiectele Noastre</a>
            <a href="#despre" className="btn-outline">Află Mai Mult</a>
          </div>

          {/* Stats */}
          <div
            className="animate-fadeInUp"
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(200,168,75,0.2)",
              animationDelay: "0.75s",
              opacity: 0,
              animationFillMode: "forwards",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "50+", label: "Membri Activi" },
              { num: "15+", label: "Proiecte / An" },
              { num: "2015", label: "Fondați" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ color: "#C8A84B", fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}>
                  {s.num}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 400 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0.5,
      }}>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, transparent, #C8A84B)",
          animation: "pulse 2s infinite",
        }} />
        <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
      </div>
    </section>
  );
}
