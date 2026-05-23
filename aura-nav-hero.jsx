
// Aura — Navbar, Hero, MenuBar
const { useState, useEffect } = React;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: scrolled ? 'rgba(12,12,12,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      opacity: 0,
      animation: 'auraFadeDown 0.6s cubic-bezier(.22,1,.36,1) 0s forwards',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo only — no wordmark */}
          <LogoMark />

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hide-mobile">
            {links.map((l, i) => (
              <a key={l} href="#" style={{
                color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.15s',
                opacity: 0, animation: `auraFadeDown 0.5s cubic-bezier(.22,1,.36,1) ${0.1 + i * 0.05}s forwards`,
              }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >{l}</a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="hide-mobile"><AppleButton /></div>
            <button
              className="show-mobile"
              onClick={() => setOpen(o => !o)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', fontSize: '16px',
              }}
            >
              {open ? <XIcon /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'rgba(12,12,12,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(l => (
            <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', fontWeight: 500, textDecoration: 'none' }}>{l}</a>
          ))}
          <AppleButton full={true} />
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      paddingTop: 'clamp(80px, 12vw, 112px)',
      paddingBottom: '80px',
      textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', zIndex: 10,
      padding: 'clamp(80px,12vw,112px) 24px 80px',
    }}>
      <h1 style={{
        fontSize: 'clamp(42px, 8vw, 80px)',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: 0.9,
        margin: 0,
        opacity: 0,
        animation: 'auraFadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.3s forwards',
      }}>
        <span style={{ display: 'block', color: '#fff', marginBottom: '4px' }}>Your email.</span>
        <span className="animate-shiny" style={auraGradientStyle}>Revitalized</span>
      </h1>

      <p style={{
        marginTop: '32px', color: 'rgba(255,255,255,0.6)',
        maxWidth: '28rem', fontSize: '16px', lineHeight: 1.5,
        opacity: 0, animation: 'auraFadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.5s forwards',
      }}>
        Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity.
      </p>

      <div style={{
        marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        opacity: 0, animation: 'auraFadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.7s forwards',
      }}>
        <AppleButton />
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Download for Intel / Apple Silicon</span>
      </div>
    </section>
  );
}

function MenuBar() {
  const items = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  return (
    <div style={{
      width: '100%', height: '40px',
      background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)',
      position: 'relative', zIndex: 10,
      opacity: 0, animation: 'auraFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.9s forwards',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
          <AppleLogo style={{ width: '14px', height: '14px', color: '#fff' }} />
          <span style={{ fontWeight: 700, color: '#fff' }}>Aura</span>
          {items.map((item, i) => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.7)', cursor: 'default', display: i > 3 ? 'none' : 'inline' }}
              className={i > 2 ? 'hide-xs' : ''}
            >{item}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
          <Search style={{ width: '14px', height: '14px' }} />
          <span>Wed May 6  1:09 PM</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Navbar, Hero, MenuBar });
