
// THE ROOM — Hero v2: Editorial asymmetric layout
const { useState, useEffect, useRef } = React;

/* Live clock for terminal timestamp */
function LiveClock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setT([n.getHours(), n.getMinutes(), n.getSeconds()].map(v => String(v).padStart(2,'0')).join(':'));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

/* Data-wall component removed — replaced by video */
function Hero({ onCtaClick }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  const fadeIn = {
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(18px)',
    transition: 'opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1)',
  };

  return (
    <section id="hero" style={{
      height: '100vh', minHeight: '680px',
      backgroundColor: '#0A0A0A',
      display: 'grid',
      gridTemplateColumns: '40% 60%',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── LEFT: Text column ── */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 48px 0 clamp(32px, 5vw, 80px)',
        position: 'relative', zIndex: 10,
        ...fadeIn,
      }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', color: '#E63946',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          marginBottom: '44px',
        }}>
          Political Intelligence System →
        </div>

        {/* Headline — serif editorial */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(34px, 3.5vw, 48px)',
          fontWeight: 500,
          lineHeight: 1.18,
          letterSpacing: '-0.01em',
          margin: '0 0 28px 0',
        }}>
          <span style={{ color: '#F5F1EB', display: 'block' }}>En política</span>
          <span style={{ color: '#F5F1EB', display: 'block' }}>no gana quien tiene razón.</span>
          <span style={{ color: '#E63946', display: 'block' }}>Gana quien controla</span>
          <span style={{ color: '#E63946', display: 'block' }}>la conversación.</span>
        </h1>

        {/* Subhead */}
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '14px', color: '#808080',
          lineHeight: 1.7, maxWidth: '320px',
          marginBottom: '44px', margin: '0 0 44px 0',
        }}>
          El sistema operativo que anticipa el ciclo de noticias y ejecuta en horas — no en días.
        </p>

        {/* Single CTA */}
        <div>
          <button
            onClick={() => onCtaClick && onCtaClick('demo')}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#F5F1EB', backgroundColor: 'transparent',
              border: '1px solid rgba(245,241,235,0.35)',
              padding: '13px 28px', cursor: 'pointer',
              transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#F5F1EB';
              e.currentTarget.style.color = '#0A0A0A';
              e.currentTarget.style.borderColor = '#F5F1EB';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#F5F1EB';
              e.currentTarget.style.borderColor = 'rgba(245,241,235,0.35)';
            }}
          >
            Solicitar acceso →
          </button>
        </div>

        {/* Scroll indicator — bottom left */}
        <div style={{
          position: 'absolute', bottom: '36px',
          left: 'clamp(32px, 5vw, 80px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        }}>
          <div style={{ width: '1px', height: '56px', backgroundColor: 'rgba(245,241,235,0.15)' }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '9px', color: 'rgba(245,241,235,0.3)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            writingMode: 'horizontal-tb',
          }}>Scroll ↓</span>
        </div>
      </div>

      {/* ── RIGHT: Video column ── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          src="uploads/magnific_cinematic-closeup-of-a-da_2985586721.mp4"
        />

        {/* Left vignette — blends text col into video */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.55) 18%, rgba(10,10,10,0.0) 45%)',
        }} />

        {/* Top + bottom darken */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 20%, transparent 80%, rgba(10,10,10,0.7) 100%)',
        }} />

        {/* Terminal timestamp — bottom right */}
        <div style={{
          position: 'absolute', bottom: '28px', right: '28px',
          display: 'flex', alignItems: 'center', gap: '7px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.14em', color: '#E63946',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            backgroundColor: '#E63946', display: 'inline-block', flexShrink: 0,
            animation: 'roomPulse 1.8s ease-in-out infinite',
          }} />
          QUITO · <LiveClock /> · LIVE
        </div>
      </div>

    </section>
  );
}

Object.assign(window, { Hero, LiveClock });
