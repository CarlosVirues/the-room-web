
// THE ROOM — Navbar v2: Ultra-minimal mono
const { useState, useEffect } = React;

// R.O.O.M menu — letter reveals its method word on hover (desktop), letters only on mobile
function RoomMenu({ items, dark }) {
  useEffect(() => {
    if (document.getElementById('room-menu-style')) return;
    const s = document.createElement('style');
    s.id = 'room-menu-style';
    s.textContent = `
      .rm-menu { display:flex; align-items:center; gap:30px; }
      .rm-item { display:inline-flex; align-items:baseline; gap:8px; text-decoration:none; cursor:pointer; }
      .rm-letter { font-family:'JetBrains Mono',monospace; font-weight:700; font-size:15px; letter-spacing:0.1em; color:rgba(245,241,235,0.5); transition:color .2s ease; }
      .rm-word { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.16em; text-transform:uppercase; max-width:0; overflow:hidden; white-space:nowrap; opacity:0; color:rgba(245,241,235,0); transition:max-width .35s cubic-bezier(.22,1,.36,1), opacity .3s ease, color .2s ease; }
      .rm-item:hover .rm-letter, .rm-item.active .rm-letter { color:#F5F1EB; }
      .rm-item:hover .rm-word { max-width:110px; opacity:1; color:rgba(245,241,235,0.5); }
      .rm-item.active .rm-letter { color:#D72631; }
      .rm-item.active .rm-word { max-width:110px; opacity:1; color:#D72631; }
      @media (max-width:768px) {
        .rm-menu { gap:18px; }
        .rm-word { display:none; }
        .rm-letter { font-size:13px; }
      }
    `;
    document.head.appendChild(s);
  }, []);
  return (
    <div className="rm-menu">
      {items.map((it, i) => (
        <a key={i} href={it.href} className={'rm-item' + (it.active ? ' active' : '')} aria-label={it.word}>
          <span className="rm-letter">{it.letter}</span>
          <span className="rm-word">{it.word}</span>
        </a>
      ))}
    </div>
  );
}

// Shared items (R.O.O.M = RADAR · OBSERVE · OWN · MOVE)
function roomItems(active, fromSubpage) {
  const home = fromSubpage ? 'index.html' : '';
  return [
    { letter: 'R', word: 'Radar',   href: home + '#sistema', active: active === 'radar' },
    { letter: 'O', word: 'Observe', href: 'observe.html',    active: active === 'observe' },
    { letter: 'O', word: 'Own',     href: 'own.html',        active: active === 'own' },
    { letter: 'M', word: 'Move',    href: 'move.html',       active: active === 'move' },
  ];
}

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
    <nav className="r-nav" style={{
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

      {/* Center: R.O.O.M menu */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RoomMenu items={roomItems(null, false)} />
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

Object.assign(window, { Navbar, RoomMenu, roomItems });
