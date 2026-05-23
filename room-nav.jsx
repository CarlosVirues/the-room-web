
// THE ROOM — Navbar v2: Ultra-minimal mono
const { useState, useEffect } = React;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ['Sistema', 'Caso', 'Equipo'];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const monoBase = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
    textDecoration: 'none', transition: 'color 0.2s ease',
    background: 'none', border: 'none', cursor: 'pointer',
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px', display: 'flex', alignItems: 'center',
      backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,241,235,0.05)' : '1px solid transparent',
      transition: 'background 0.3s ease, border-color 0.3s ease',
      padding: '0 clamp(32px, 5vw, 80px)',
    }}>

      {/* Left: Logo */}
      <div style={{ flex: 1 }}>
        <button
          onClick={() => scrollTo('#hero')}
          style={{ ...monoBase, color: '#F5F1EB', fontWeight: 700, fontSize: '13px', letterSpacing: '0.18em', padding: 0 }}
        >
          THE ROOM
        </button>
      </div>

      {/* Center: links — hidden on mobile */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="hide-mobile">
        {[['Sistema','#sistema'],['Diferenciador','#diferenciador'],['Entregables','#entregables']].map(([label, id]) => (
          <button
            key={label}
            onClick={() => scrollTo(id)}
            style={{ ...monoBase, color: 'rgba(245,241,235,0.45)', padding: 0 }}
            onMouseOver={e => e.currentTarget.style.color = '#F5F1EB'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(245,241,235,0.45)'}
          >{label}</button>
        ))}
      </div>

      {/* Right: Login */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <a
          href="#"
          style={{
            ...monoBase,
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#F5F1EB', fontWeight: 600, fontSize: '11px',
            padding: '8px 18px',
            border: '1px solid rgba(245,241,235,0.2)',
            borderRadius: '2px',
            transition: 'background 0.2s ease, border-color 0.2s ease',
            textDecoration: 'none',
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'rgba(245,241,235,0.06)'; e.currentTarget.style.borderColor = 'rgba(245,241,235,0.5)'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,241,235,0.2)'; }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.7}}>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
          </svg>
          Ingresar
        </a>
      </div>
    </nav>
  );
}

Object.assign(window, { Navbar });
