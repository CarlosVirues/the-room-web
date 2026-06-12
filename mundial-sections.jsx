
// THE ROOM — Mundial Edition: components
// Reuses Wrapper / Eyebrow / BodyText / SectionHeadline / MoveLabel / Footer from room-sections.jsx (window globals)

const monoMu = { fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase' };

/* ─── 1 · HERO ─── */
function SecMundialHero() {
  const stats = [
    { num: '5B', label: 'Espectadores' },
    { num: '104', label: 'Partidos' },
    { num: '48', label: 'Selecciones' },
    { num: '90', label: 'Min · vida útil de una tendencia' },
  ];
  return (
    <section id="mundial-hero" className="r-section" style={{
      backgroundColor: '#0A0A0A',
      padding: 'clamp(100px, 12vw, 160px) clamp(24px, 6vw, 80px) clamp(72px, 9vw, 120px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ ...monoMu, fontSize: '10px', color: '#D72631', marginBottom: '28px' }}>Mundial Edition · 2026</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(40px, 7vw, 84px)', fontWeight: 500,
          lineHeight: 1.02, letterSpacing: '-0.02em', color: '#F5F4F1',
          margin: '0 0 24px 0', maxWidth: '18ch',
        }}>
          Sistema de inteligencia <em style={{ color: '#D72631', fontStyle: 'italic' }}>predictiva</em> y ejecución para el Mundial.
        </h1>
        <div style={{ ...monoMu, fontSize: '12px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.12em', marginBottom: '36px' }}>
          Predictive Intelligence &amp; Execution System for the World Cup.
        </div>
        <BodyText style={{ maxWidth: '620px', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          Una sola conversación global, durante seis semanas. <strong style={{ color: '#F5F4F1' }}>Ninguna marca puede comprar ese contexto.</strong> Pero todas van a intentar entrar.
        </BodyText>

        <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '1px solid rgba(245,244,241,0.07)', borderBottom: '1px solid rgba(245,244,241,0.07)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '36px 28px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500, color: '#D72631', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '12px' }}>{s.num}</div>
              <div style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 2 · PROBLEMA ─── */
function SecMundialProblema() {
  return (
    <Wrapper id="mundial-problema" bg="#0A0A0A">
      <Eyebrow>El problema · The problem</Eyebrow>
      <SectionHeadline style={{ maxWidth: '22ch' }}>
        Todos van a hablar. Esa es exactamente <em style={{ color: '#D72631', fontStyle: 'italic' }}>la trampa</em>.
      </SectionHeadline>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        <BodyText>
          La pregunta no es si tu marca entra a la conversación. Es <strong style={{ color: '#F5F4F1' }}>de qué habla, de qué no, y cuándo</strong>.
        </BodyText>
        <BodyText>
          Entrar tarde te hace invisible: publicas lo que ya vio todo el mundo. Entrar mal te hace viral por las razones equivocadas — el escándalo del jugador, la polémica arbitral, la política colándose en el deporte.
        </BodyText>
      </div>
      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(245,244,241,0.08)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(18px, 2.2vw, 26px)', color: 'rgba(245,244,241,0.6)', lineHeight: 1.4, maxWidth: '720px' }}>
        En el Mundial, el costo de equivocarse es más alto que el costo de no estar.
      </div>
    </Wrapper>
  );
}

/* ─── 3 · SISTEMA · 4 CAPAS ─── */
function SecMundialSistema() {
  const capas = [
    { num: '01', tag: 'Signal',  es: 'Inteligencia predictiva', en: 'Predictive Intelligence', desc: 'Detecta la tendencia antes del pico. Lectura predictiva, no monitoreo.' },
    { num: '02', tag: 'La Mesa', es: 'Tres cerebros IA',         en: 'AI Advisors',             desc: 'Tres voces leen cada tendencia y proponen el ángulo: periodista, memero, streamer.' },
    { num: '03', tag: 'Move',    es: 'Ejecución en horas',       en: 'Execution',               desc: 'Las misiones aceptadas salen a tus canales en horas, no en días.' },
    { num: '04', tag: 'Measure', es: 'Decisión de marca',        en: 'Brand Decision Metrics',  desc: 'Mide qué conversación ganaste. Aprende partido a partido.' },
  ];
  return (
    <Wrapper id="mundial-sistema" bg="#0A0A0A">
      <Eyebrow>El sistema · The system</Eyebrow>
      <SectionHeadline style={{ maxWidth: '20ch' }}>
        Un sistema operativo de <em style={{ color: '#D72631', fontStyle: 'italic' }}>cuatro capas</em>.
      </SectionHeadline>
      <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', marginTop: '56px', borderTop: '1px solid rgba(245,244,241,0.07)' }}>
        {capas.map((c, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ ...monoMu, fontSize: '11px', fontWeight: 700, color: '#D72631' }}>{c.num} · {c.tag}</div>
            <MoveLabel es={c.es} en={c.en} />
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.65 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── 4 · LIVE FEED ─── */
function fmtRelative(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const diff = (new Date().getTime() - d.getTime()) / 1000;
  if (diff < 60) return 'hace segundos';
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} d`;
  return d.toLocaleDateString('es-EC', { day: '2-digit', month: 'short' });
}
function fmtAbsolute(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString('es-EC', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
}

function FeedImage({ src, alt }) {
  if (!src) return null;
  return (
    <figure style={{ marginTop: '18px', position: 'relative' }}>
      <img
        src={src}
        alt={alt || ''}
        style={{ display: 'block', width: '100%', height: 'auto', maxHeight: '460px', objectFit: 'cover', borderRadius: '2px', border: '1px solid rgba(245,244,241,0.08)' }}
        onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
      />
      {alt && <figcaption style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.4)', marginTop: '10px', textTransform: 'none', letterSpacing: '0.1em' }}>{alt}</figcaption>}
    </figure>
  );
}

function FeedEntryMision({ e }) {
  return (
    <article style={{
      borderLeft: '2px solid #D72631',
      padding: '22px 24px',
      background: 'rgba(245,244,241,0.02)',
    }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D72631', animation: 'roomPulse 1.8s ease-in-out infinite' }} />
        <span style={{ ...monoMu, fontSize: '9px', fontWeight: 700, color: '#D72631' }}>Misión detectada</span>
        {e.match && <span style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.4)' }}>· {e.match}</span>}
        {e.minute && <span style={{ ...monoMu, fontSize: '9px', color: '#F5F4F1' }}>· {e.minute}</span>}
        <span style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.3)', marginLeft: 'auto' }}>{fmtRelative(e.timestamp)}</span>
      </header>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 500, color: '#F5F4F1', lineHeight: 1.2, marginBottom: '10px' }}>{e.title}</div>
      {e.angle && <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: 'rgba(245,244,241,0.65)', lineHeight: 1.6 }}>{e.angle}</div>}
      {Array.isArray(e.tags) && e.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
          {e.tags.map((t, i) => (
            <span key={i} style={{ ...monoMu, fontSize: '9px', padding: '4px 10px', border: '1px solid rgba(245,244,241,0.15)', color: 'rgba(245,244,241,0.55)', letterSpacing: '0.14em' }}>{t}</span>
          ))}
        </div>
      )}
      <FeedImage src={e.image} alt={e.image_alt} />
    </article>
  );
}

function FeedEntryNota({ e }) {
  return (
    <article style={{
      borderLeft: '2px solid rgba(245,244,241,0.15)',
      padding: '22px 24px',
    }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
        <span style={{ ...monoMu, fontSize: '9px', fontWeight: 700, color: 'rgba(245,244,241,0.6)' }}>Nota editorial</span>
        <span style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.3)', marginLeft: 'auto' }}>{fmtRelative(e.timestamp)}</span>
      </header>
      {e.title && <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2.4vw, 28px)', fontStyle: 'italic', fontWeight: 500, color: '#F5F4F1', lineHeight: 1.25, marginBottom: '12px' }}>{e.title}</div>}
      {e.body && <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '15px', color: 'rgba(245,244,241,0.7)', lineHeight: 1.7 }}>{e.body}</div>}
      <FeedImage src={e.image} alt={e.image_alt} />
    </article>
  );
}

function FeedEntryPartido({ e }) {
  return (
    <article style={{
      border: '1px solid rgba(245,244,241,0.12)',
      padding: '28px 28px',
      background: 'rgba(215,38,49,0.03)',
    }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span style={{ ...monoMu, fontSize: '9px', fontWeight: 700, color: '#D72631' }}>Tarjeta de partido</span>
        {e.stage && <span style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.4)' }}>· {e.stage}</span>}
        <span style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.3)', marginLeft: 'auto' }}>{fmtRelative(e.timestamp)}</span>
      </header>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 500, color: '#F5F4F1', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: '20px' }}>{e.match}</div>
      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.08)', borderTop: '1px solid rgba(245,244,241,0.08)', borderBottom: '1px solid rgba(245,244,241,0.08)' }}>
        {[
          { l: 'Detección', v: e.detected },
          { l: 'Conversación ganada', v: e.winner },
          { l: 'Velocidad', v: e.speed },
        ].filter(x => x.v).map((x, i) => (
          <div key={i} style={{ background: 'transparent', padding: '16px 18px' }}>
            <div style={{ ...monoMu, fontSize: '9px', color: 'rgba(245,244,241,0.35)', marginBottom: '8px' }}>{x.l}</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13.5px', color: 'rgba(245,244,241,0.85)', lineHeight: 1.55 }}>{x.v}</div>
          </div>
        ))}
      </div>
      <FeedImage src={e.image} alt={e.image_alt} />
    </article>
  );
}

function FeedEntry({ entry }) {
  if (entry.type === 'mision') return <FeedEntryMision e={entry} />;
  if (entry.type === 'nota') return <FeedEntryNota e={entry} />;
  if (entry.type === 'partido') return <FeedEntryPartido e={entry} />;
  return null;
}

function LiveFeed() {
  const [data, setData] = React.useState(null);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    // Cache-bust so updates appear immediately after a push
    fetch('mundial-feed.json?t=' + Math.floor(Date.now() / 60000))
      .then(r => { if (!r.ok) throw new Error('No se pudo cargar el feed (' + r.status + ')'); return r.json(); })
      .then(setData)
      .catch(e => setErr(e.message));
  }, []);

  const entries = data ? [...(data.entries || [])].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) : [];
  const updated = data?.updated || entries[0]?.timestamp;

  return (
    <Wrapper id="mundial-live" bg="#0A0A0A">
      <Eyebrow>
        Live Feed · Mundial 2026
        {updated && <span style={{ marginLeft: '14px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.18em' }}>· Actualizado {fmtRelative(updated)}</span>}
      </Eyebrow>
      <SectionHeadline style={{ maxWidth: '20ch' }}>
        El Mundial, en vivo <em style={{ color: '#D72631', fontStyle: 'italic' }}>desde la sala</em>.
      </SectionHeadline>
      <BodyText style={{ maxWidth: '640px', marginBottom: '48px' }}>
        Misiones detectadas, notas editoriales y tarjetas de partido. Subimos cada movimiento mientras pasa.
      </BodyText>

      {err && (
        <div style={{ border: '1px solid rgba(215,38,49,0.4)', padding: '20px 24px', color: 'rgba(245,244,241,0.7)', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
          No se pudo cargar el feed. {err}
        </div>
      )}
      {!err && !data && (
        <div style={{ ...monoMu, fontSize: '10px', color: 'rgba(245,244,241,0.4)' }}>Cargando feed…</div>
      )}
      {!err && data && entries.length === 0 && (
        <div style={{ ...monoMu, fontSize: '10px', color: 'rgba(245,244,241,0.4)' }}>Sin entradas todavía. La sala arranca al primer pitazo.</div>
      )}
      {!err && entries.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {entries.map((e, i) => <FeedEntry key={i} entry={e} />)}
        </div>
      )}

      <div style={{ ...monoMu, fontSize: '10px', color: 'rgba(245,244,241,0.3)', marginTop: '36px', textTransform: 'none', letterSpacing: '0.08em' }}>
        Feed alimentado desde la sala. Las marcas aliadas reciben acceso privado y antes que el público.
      </div>
    </Wrapper>
  );
}

/* ─── 5 · SPAR ─── */
function SecMundialSpar() {
  const letters = [
    { letter: 'S', name: 'Surprise',  desc: 'Lo inesperado. Te obliga a detener el scroll.' },
    { letter: 'P', name: 'Personal',  desc: 'Te hace ver más informado. Toca tu orgullo de hincha.' },
    { letter: 'A', name: 'Arousal',   desc: 'Levanta emociones fuertes: risa, euforia, burla, orgullo.' },
    { letter: 'R', name: 'Retell',    desc: 'Valor en compartir. Te hace pertenecer a tu tribu futbolera.' },
  ];
  return (
    <Wrapper id="mundial-spar" bg="#0A0A0A">
      <Eyebrow>Modelo SPAR · The viral DNA</Eyebrow>
      <SectionHeadline style={{ maxWidth: '20ch' }}>
        El <em style={{ color: '#D72631', fontStyle: 'italic' }}>ADN viral</em> de cada pieza.
      </SectionHeadline>
      <BodyText style={{ maxWidth: '640px', marginBottom: '48px' }}>
        Antes de publicarlo, el contenido tiene que valer la pena ser contado. Si no tiene S+P+A+R, no se mueve solo — y en el Mundial, lo que no se mueve solo, no existe.
      </BodyText>
      <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '1px solid rgba(245,244,241,0.07)' }}>
        {letters.map((l, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '40px 28px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '220px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(56px, 7vw, 88px)', fontStyle: 'italic', color: '#D72631', lineHeight: 0.9, fontWeight: 500 }}>{l.letter}</div>
            <div style={{ ...monoMu, fontSize: '11px', fontWeight: 700, color: '#F5F4F1' }}>{l.name}</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.65 }}>{l.desc}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── 6 · PARTIDO TIPO (timeline) ─── */
function SecMundialMatch() {
  const steps = [
    { t: 'Pre · -2h',  a: 'Expectativa, pronóstico, rivalidad. Misiones de calentamiento al aire.' },
    { t: 'Min 23',    a: 'Gol. La mesa propone 3 ángulos.' },
    { t: 'Min 26',    a: 'Misión aceptada.' },
    { t: 'Min 40',    a: 'Pieza publicada. La tendencia sigue caliente.' },
    { t: 'Post · +1h', a: 'Cierre emocional. Las misiones de mañana ya están rankeadas.' },
  ];
  return (
    <Wrapper id="mundial-match" bg="#0A0A0A">
      <Eyebrow>En acción · Match day</Eyebrow>
      <SectionHeadline style={{ maxWidth: '22ch' }}>
        Así se vive un partido <em style={{ color: '#D72631', fontStyle: 'italic' }}>dentro de THE ROOM</em>.
      </SectionHeadline>
      <div className="r-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '2px solid #D72631', marginTop: '40px' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '160px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D72631' }} />
              <span style={{ ...monoMu, fontSize: '11px', fontWeight: 700, color: '#F5F4F1' }}>{s.t}</span>
            </div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13.5px', color: 'rgba(245,244,241,0.7)', lineHeight: 1.55 }}>{s.a}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '32px', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.4vw, 28px)', color: '#D72631' }}>
        Del gol a la pieza: 17 minutos.
      </div>
    </Wrapper>
  );
}

/* ─── 7 · CIERRE ─── */
function SecMundialCierre() {
  const mono = monoMu;
  return (
    <Wrapper id="mundial-cierre" bg="#0A0A0A">
      <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(245,244,241,0.08)' }}>
        <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '24px' }}>Cierre · Closing</div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 500,
          lineHeight: 1.1, letterSpacing: '-0.015em', color: '#F5F4F1',
          margin: '0 0 36px 0', maxWidth: '22ch',
        }}>
          Mientras otros analizan la conversación de ayer, nosotros ya estamos moviendo <em style={{ color: '#D72631', fontStyle: 'italic' }}>la de mañana</em>.
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', paddingTop: '32px', borderTop: '1px solid rgba(245,244,241,0.08)' }}>
          <a href="mailto:carlos@epifania.ai" className="r-move-cta" style={{
            ...mono, fontSize: '11px', color: '#0A0A0A', backgroundColor: '#F5F1EB',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            border: '1px solid #F5F1EB', padding: '15px 30px',
            textDecoration: 'none', letterSpacing: '0.12em', lineHeight: 1.5,
            transition: 'opacity 0.2s ease',
          }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >Solicitar audiencia · Request audience →</a>
          <a href="index.html" style={{
            ...mono, fontSize: '11px', color: 'rgba(245,241,235,0.55)',
            textDecoration: 'none', letterSpacing: '0.12em',
          }}
            onMouseOver={e => e.currentTarget.style.color = '#F5F1EB'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(245,241,235,0.55)'}
          >Conocer el sistema completo →</a>
        </div>
      </div>
    </Wrapper>
  );
}

Object.assign(window, {
  SecMundialHero, SecMundialProblema, SecMundialSistema,
  LiveFeed, FeedEntry, FeedEntryMision, FeedEntryNota, FeedEntryPartido,
  SecMundialSpar, SecMundialMatch, SecMundialCierre,
});
