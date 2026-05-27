
// THE ROOM — Content Sections (2–10)
const { useState, useRef, useEffect } = React;

/* ─── Shared primitives ─── */
function Eyebrow({ children, light }) {
  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '10px', fontWeight: 500,
      color: '#D72631', letterSpacing: '0.25em',
      textTransform: 'uppercase', marginBottom: '20px',
      display: 'flex', alignItems: 'center', gap: '10px',
    }}>
      <span style={{ width: '24px', height: '1px', backgroundColor: '#D72631', display: 'inline-block', flexShrink: 0 }}></span>
      {children}
    </div>
  );
}

function SectionHeadline({ children, light, style = {} }) {
  return (
    <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700,
      letterSpacing: '-0.025em', lineHeight: 1.05,
      color: light ? '#0A0A0A' : '#F5F4F1',
      marginBottom: '24px',
      ...style,
    }}>{children}</h2>
  );
}

function BodyText({ children, light, style = {} }) {
  return (
    <p style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: 'clamp(16px, 1.6vw, 18px)', fontWeight: 400,
      color: light ? 'rgba(10,10,10,0.65)' : 'rgba(245,244,241,0.65)',
      lineHeight: 1.75, ...style,
    }}>{children}</p>
  );
}

function Wrapper({ id, bg, children, style = {} }) {
  return (
    <section id={id} className="r-section" style={{
      backgroundColor: bg || '#0A0A0A',
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      ...style,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', ...style.inner }}>
        {children}
      </div>
    </section>
  );
}

function Divider({ color }) {
  return <div style={{ width: '100%', height: '1px', backgroundColor: color || 'rgba(245,244,241,0.08)', margin: '0' }} />;
}

/* ─── Section 2: EL PROBLEMA ─── */
function SecProblema() {
  const negPoints = [
    "Pierdes la narrativa",
    "Otros definen la conversación",
    "La opinión pública se mueve sin ti",
    "La acción llega sin impacto",
  ];
  return (
    <Wrapper id="problema" bg="#0A0A0A">
      <Eyebrow>El costo de llegar tarde</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <SectionHeadline>Cuando el gobierno responde, la conversación ya se movió.</SectionHeadline>
        </div>
        <div>
          <BodyText>
            Hay millones de conversaciones sucediendo en cada esquina, en cada comedor, en cada cancha de barrio. Conversaciones que mueven mercados, marcas y gobiernos.
          </BodyText>
          <BodyText style={{ marginTop: '16px' }}>
            Revisar un informe de social listening sobre lo que pasó hace dos semanas ya no es suficiente. Para entonces, la opinión pública se movió. La narrativa se instaló. El daño está hecho.
          </BodyText>
        </div>
      </div>

      {/* 4 pain points */}
      <div className="r-grid-4" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px',
        marginTop: '80px', borderTop: '1px solid rgba(245,244,241,0.08)',
      }}>
        {negPoints.map((pt, i) => (
          <div key={i} style={{
            padding: '40px 32px',
            borderRight: i < 3 ? '1px solid rgba(245,244,241,0.08)' : 'none',
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', color: '#D72631',
              letterSpacing: '0.1em', marginBottom: '16px',
            }}>✕</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '18px', fontWeight: 600,
              color: '#F5F4F1', lineHeight: 1.3,
            }}>{pt}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(245,244,241,0.06)' }}>
        <BodyText style={{ color: 'rgba(245,244,241,0.4)', fontStyle: 'italic' }}>
          No es falta de gestión. Es falta de sincronización con el país.
        </BodyText>
      </div>
    </Wrapper>
  );
}

/* ─── Section 3: LA SOLUCIÓN ─── */
function SecSolucion() {
  const layers = [
    { label: "Lectura en tiempo real", desc: "Escuchamos el país a cada minuto. IA propietaria que detecta micro-conversaciones antes de que escalen a tendencia. No es un reporte de la semana pasada: es lo que está pasando ahora mismo.", tag: "01" },
    { label: "Producción en tiempo real", desc: "Convertimos cada señal en contenido viral mientras la conversación todavía está caliente. Agentes IA produciendo guion, video, copy y arte en simultáneo, con curaduría humana antes de publicar.", tag: "02" },
    { label: "Distribución masiva", desc: "Sembramos en cientos de cuentas reales con audiencias construidas. La narrativa no depende de pauta ni de un único canal: se activa en red, al mismo tiempo, en los segmentos que importan.", tag: "03" },
  ];
  return (
    <Wrapper id="solucion" bg="#F5F4F1">
      <Eyebrow light>La nueva ventaja</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>
        <SectionHeadline light>Liderar el ciclo, no responderle.</SectionHeadline>
        <div>
          <BodyText light>THE ROOM cruza tres capas que nadie más cruza en política:</BodyText>
        </div>
      </div>

      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(10,10,10,0.08)' }}>
        {layers.map((l, i) => (
          <div key={i} style={{ backgroundColor: '#F5F4F1', padding: '48px 40px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', color: '#D72631',
              letterSpacing: '0.2em', marginBottom: '32px',
            }}>{l.tag}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '22px', fontWeight: 700,
              color: '#0A0A0A', lineHeight: 1.2, marginBottom: '12px',
            }}>{l.label}</div>
            <BodyText light>{l.desc}</BodyText>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '60px', paddingTop: '36px',
        borderTop: '2px solid #0A0A0A',
        display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 700,
          color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.15,
        }}>
          Leer <span style={{ color: '#D72631' }}>+</span> Producir <span style={{ color: '#D72631' }}>+</span> Distribuir, en simultáneo.
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px', color: 'rgba(10,10,10,0.45)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          Eso es controlar el ciclo.
        </div>
      </div>
    </Wrapper>
  );
}

/* ─── Section 4: 4 PASOS ─── */
function SecSistema() {
  const steps = [
    {
      num: '01', name: 'RADAR', sub: 'Detección anticipatoria con IA',
      cadence: 'ACTUALIZACIÓN CADA MINUTO',
      desc: 'IA predictiva entrenada para política. Detecta conversaciones positivas y negativas antes de que escalen a tendencia. Clasifica cada señal por tema, tipo y emoción dominante.',
      quote: 'Mientras otros monitorean, nosotros anticipamos.',
      highlight: false,
    },
    {
      num: '02', name: 'MISIONES', sub: 'De la señal a la decisión',
      cadence: 'ACTIVAS AHORA: 6',
      desc: 'Cada conversación crítica se convierte en una misión con objetivo, ventana de tiempo y métricas. No se trata de generar más contenido, sino de elegir qué amplificar y cuándo.',
      quote: 'La conversación se transforma en plan.',
      highlight: false,
    },
    {
      num: '03', name: 'ASESORES IA', sub: 'Estrategia con la lógica de los que ganaron',
      cadence: '6 ASESORES DISPONIBLES',
      desc: 'Cada misión se discute con asesores entrenados sobre la lógica de figuras políticas reales que dominaron su ciclo. Distintos ángulos, distintos enfoques, una decisión final.',
      quote: 'La estrategia que tardaría días, en minutos.',
      highlight: true,
    },
    {
      num: '04', name: 'CONTENIDO', sub: 'Producción 24/7 con ADN viral',
      cadence: 'PRODUCCIÓN 24/7',
      desc: 'Agentes IA producen piezas en formato, voz y volumen requeridos. Cada pieza nace construida sobre los componentes que hacen viral al contenido en LATAM: estructura narrativa, gancho, duración, formato. Edición y criterio humano firman cada salida antes de la activación.',
      quote: 'Producción a velocidad de máquina, criterio de equipo político.',
      highlight: false,
    },
  ];

  return (
    <Wrapper id="sistema" bg="#111111">
      <Eyebrow>4 pasos · un solo objetivo</Eyebrow>

      {/* Header row */}
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 500, lineHeight: 1.05,
            letterSpacing: '-0.01em', color: '#F5F4F1', margin: 0,
          }}>
            De la señal a la acción,{' '}
            <em style={{ color: '#D72631' }}>en horas.</em>
          </h2>
        </div>
        <div>
          <BodyText>
            La política no espera. Cada hora sin respuesta es terreno cedido al adversario. THE ROOM convierte conversaciones en piezas listas para activar, en el mismo día.
          </BodyText>
        </div>
      </div>

      {/* 4-column step cards */}
      <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)' }}>
        {steps.map((s) => (
          <div key={s.num} style={{
            backgroundColor: s.highlight ? 'rgba(215,38,49,0.06)' : '#111111',
            borderTop: s.highlight ? '2px solid #D72631' : '2px solid transparent',
            padding: '40px 32px',
            display: 'flex', flexDirection: 'column', gap: '16px',
            position: 'relative',
          }}>
            {/* Step number */}
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', fontWeight: 700,
              color: s.highlight ? '#D72631' : 'rgba(245,244,241,0.25)',
              letterSpacing: '0.18em',
            }}>{s.num}</div>

            {/* Name */}
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '22px', fontWeight: 700,
              color: s.highlight ? '#F5F4F1' : '#F5F4F1',
              letterSpacing: '-0.01em', lineHeight: 1.1,
            }}>{s.name}</div>

            {/* Sub-label */}
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px', fontWeight: 500,
              color: s.highlight ? 'rgba(215,38,49,0.8)' : 'rgba(245,244,241,0.3)',
              letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>{s.sub}</div>

            {/* Cadence indicator */}
            {s.cadence && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px', fontWeight: 600,
                color: 'rgba(245,244,241,0.55)',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '6px 10px',
                border: '1px solid rgba(245,244,241,0.08)',
                borderRadius: '2px',
                alignSelf: 'flex-start',
                background: 'rgba(245,244,241,0.02)',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: '#E63946', display: 'inline-block', flexShrink: 0,
                  animation: 'roomPulse 1.8s ease-in-out infinite',
                }} />
                {s.cadence}
              </div>
            )}

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: s.highlight ? 'rgba(215,38,49,0.2)' : 'rgba(245,244,241,0.07)' }} />

            {/* Body */}
            <div style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '14px', color: 'rgba(245,244,241,0.65)', lineHeight: 1.75, flex: 1,
            }}>{s.desc}</div>

            {/* Quote */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '15px', fontStyle: 'italic',
              color: s.highlight ? 'rgba(215,38,49,0.7)' : 'rgba(245,244,241,0.3)',
              lineHeight: 1.4,
            }}>{s.quote}</div>
          </div>
        ))}
      </div>

      {/* Closing quote */}
      <div style={{
        marginTop: '64px',
        paddingTop: '48px',
        borderTop: '1px solid rgba(245,244,241,0.07)',
        display: 'flex', alignItems: 'center', gap: '32px',
      }}>
        <div style={{ width: '3px', height: '64px', backgroundColor: '#D72631', flexShrink: 0 }} />
        <div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 400, color: 'rgba(245,244,241,0.55)',
            lineHeight: 1.3, margin: 0,
          }}>
            El primero que llega define la narrativa.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 600, color: '#F5F4F1',
            lineHeight: 1.3, margin: 0,
          }}>
            El que llega después, la persigue.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

/* ─── Section 5: CASO REAL ─── */
function SecCaso() {
  const stats = [
    { n: "258", label: "menciones sobre el silencio del gobierno", pct: "93.8% indignación" },
    { n: "406", label: "menciones de desabastecimiento", pct: "indignación activa" },
    { n: "194", label: "menciones de «promesa rota»", pct: "119 indignación / 72 frustración" },
    { n: "101", label: "menciones que comparan con Venezuela", pct: "97% indignación" },
  ];
  const phases = [
    { tag: "RADAR", body: "258 menciones ecuatorianas sobre silencio gubernamental. 75% de toda la conversación global sobre \"silencio ante crisis de combustible\" es específicamente Ecuador." },
    { tag: "OBSERVE", body: "Cada día sin comunicación oficial es un día que el vacío se llena con indignación. El primero que habla con datos interrumpe el ciclo." },
    { tag: "OWN", body: "Reconocer la situación, explicar causas con datos verificables, presentar acciones concretas. No es disculpa. Es demostración." },
    { tag: "MOVE", body: "Declaración oficial en 48 horas. Video directo, menos de 2 minutos. Estructura de 3 puntos. Distribución simultánea en todas las plataformas." },
  ];
  return (
    <Wrapper id="caso" bg="#0A0A0A">
      <Eyebrow>Caso · Presidencia · Ecuador · Mayo 2026</Eyebrow>
      <SectionHeadline style={{ maxWidth: '800px' }}>Crisis de gasolina. 4 días de silencio gubernamental. Esto fue lo que el RADAR detectó.</SectionHeadline>

      {/* Stats grid */}
      <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.06)', marginTop: '60px', marginBottom: '64px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '36px 28px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700,
              color: '#F5B400', letterSpacing: '-0.02em', marginBottom: '8px',
            }}>{s.n}</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.5)', lineHeight: 1.5, marginBottom: '12px' }}>{s.label}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#D72631', letterSpacing: '0.1em' }}>{s.pct}</div>
          </div>
        ))}
      </div>

      <BodyText style={{ maxWidth: '800px', marginBottom: '16px' }}>
        Mientras el ciudadano hacía cola por cuarto día consecutivo, el comunicado oficial decía: <em style={{ color: '#F5F4F1' }}>"el riesgo país bajó."</em>
      </BodyText>
      <BodyText style={{ maxWidth: '800px', marginBottom: '64px' }}>
        El RADAR detectó tres patrones simultáneos: silencio percibido, narrativa de promesa rota, y un marco "Venezuela" en formación temprana — todavía en 101 menciones, todavía desmontable.
      </BodyText>

      {/* Mission card */}
      <div className="r-caso-card" style={{ border: '1px solid rgba(215,38,49,0.3)', borderLeft: '3px solid #D72631', padding: '40px 48px', backgroundColor: 'rgba(215,38,49,0.04)' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#D72631', letterSpacing: '0.25em', marginBottom: '20px' }}>
          MISIÓN ACTIVADA
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#F5F4F1', marginBottom: '40px', lineHeight: 1.3 }}>
          EL PRESIDENTE HABLA PRIMERO, CON DATOS Y CON PLAN
        </div>
        <div className="r-caso-phases" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {phases.map((ph, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#D72631', letterSpacing: '0.15em', paddingTop: '3px', flexShrink: 0 }}>→ {ph.tag}</div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: 'rgba(245,244,241,0.65)', lineHeight: 1.65 }}>{ph.body}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(245,244,241,0.08)', fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontStyle: 'italic', color: 'rgba(245,244,241,0.4)' }}>
          De miles de señales a una misión específica con Action Board firmado. Eso es THE ROOM.
        </div>
      </div>
    </Wrapper>
  );
}

/* ─── Section 5.5: AMPLIFICACIÓN ORGÁNICA ─── */
function SecAmplificacion() {
  const cards = [
    {
      tag: '→ Cientos de cuentas activables',
      body: 'Audiencias reales pre-construidas en verticales temáticas. No bots, no granjas. Comunidades con engagement orgánico activo.',
    },
    {
      tag: '→ Activación simultánea',
      body: 'La narrativa se siembra al mismo tiempo en decenas o cientos de cuentas, según la intensidad que la misión requiera. Saturación controlada, no spam.',
    },
    {
      tag: '→ Trazabilidad completa',
      body: 'De la activación al impacto narrativo. Cada movimiento queda documentado. Sabemos qué cuenta movió qué conversación.',
    },
  ];
  return (
    <Wrapper id="amplificacion" bg="#0A0A0A">
      <Eyebrow>Amplificación orgánica</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '56px' }}>
        <SectionHeadline style={{ marginBottom: 0 }}>La narrativa no se distribuye sola.</SectionHeadline>
        <BodyText>Distribución no es publicar. Es activar. THE ROOM siembra cada narrativa en una red propia, no en el feed de un canal oficial.</BodyText>
      </div>

      {/* Featured block */}
      <div style={{
        border: '1px solid rgba(215,38,49,0.3)',
        borderLeft: '3px solid #D72631',
        padding: 'clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px)',
        backgroundColor: 'rgba(215,38,49,0.04)',
        marginBottom: '64px',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', color: '#D72631',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          marginBottom: '18px',
        }}>Modelo de distribución</div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 700,
          color: '#F5F4F1', lineHeight: 1.15, letterSpacing: '-0.015em',
          marginBottom: '20px',
        }}>
          No publicamos en una cuenta. <span style={{ color: '#D72631' }}>Activamos cientos.</span>
        </div>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(15px, 1.4vw, 17px)',
          color: 'rgba(245,244,241,0.7)', lineHeight: 1.7,
          maxWidth: '780px',
        }}>
          Cada narrativa se distribuye simultáneamente en una red curada de cientos de cuentas ecuatorianas con audiencias reales — construidas previamente en verticales como farándula, deportes, entretenimiento, lifestyle. Cuando una conversación tiene que ganar el ciclo, no compite contra el algoritmo: lo satura.
        </div>
      </div>

      {/* Three cards */}
      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)' }}>
        {cards.map((c, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '40px 32px' }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '17px', fontWeight: 700,
              color: '#F5F4F1', lineHeight: 1.3,
              marginBottom: '16px', letterSpacing: '-0.005em',
            }}>{c.tag}</div>
            <div style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '14px', color: 'rgba(245,244,241,0.6)',
              lineHeight: 1.7,
            }}>{c.body}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── Section 5.7: CAPA 04 · MOVE ─── */
function MoveLabel({ es, en }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: '18px', color: '#F5F4F1', letterSpacing: '-0.01em',
      }}>{es}</span>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '10px',
        color: 'rgba(245,244,241,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>{en}</span>
    </div>
  );
}

function SecMove() {
  const problema = [
    ['Pauta donde se habla del tema', 'Decide qué ruta narrativa activar'],
    ['Repostea con muchos influencers', 'Trata cada cuenta como un personaje'],
    ['Responde rápido con community managers', 'Coreografía los primeros minutos'],
    ['Mide alcance', 'Mide qué narrativa ganó'],
  ];

  const mecanicas = [
    { num: '01', es: 'Ruteo narrativo', en: 'Narrative Routing', claim: 'Distribuimos rutas, no piezas.' },
    { num: '02', es: 'Storyworld coordinado', en: 'Coordinated Storyworld', claim: 'Cada cuenta es un personaje, no un canal.' },
    { num: '03', es: 'Control de primeros minutos', en: 'First Minutes Command', claim: 'Los primeros 15 minutos deciden cómo se lee el resto.' },
  ];

  const rutas = [
    { es: 'Ruta humor', en: 'Humor Route', desc: 'Sátira que hace el tema compartible.', c: '#F5B400' },
    { es: 'Ruta legal', en: 'Legal Route', desc: 'Autoridad técnica que desarma argumentos.', c: '#60A5FA' },
    { es: 'Ruta empatía', en: 'Empathy Route', desc: 'Testimonio en primera persona.', c: '#A855F7' },
    { es: 'Ruta datos', en: 'Data Route', desc: 'Cifras y fuentes verificables.', c: '#4ADE80' },
  ];

  const personajes = [
    { es: 'El satírico', en: 'The Satirist', desc: 'Convierte ataques en memes.' },
    { es: 'El técnico', en: 'The Expert', desc: 'Argumento legal o de dato.' },
    { es: 'El ciudadano', en: 'The Citizen', desc: 'Voz cotidiana, testimonial.' },
    { es: 'El insider', en: 'The Insider', desc: 'Datos desde adentro, autoridad.' },
    { es: 'El oficial', en: 'The Official', desc: 'Vocería institucional.' },
    { es: 'El conector', en: 'The Connector', desc: 'Mueve la conversación entre plataformas.' },
  ];

  const timeline = [
    { t: 'MIN 0', es: 'Pieza madre publicada', en: 'Mother post live' },
    { t: 'MIN 0–5', es: '5–10 comentarios clave de cuentas reales', en: '5–10 key comments' },
    { t: 'MIN 5–10', es: '2–3 creadores publican su versión', en: '2–3 creators react' },
    { t: 'MIN 10–15', es: 'Stitches, dúos y micro-respuestas que encuadran', en: 'Stitches & duos frame the read' },
  ];

  const noEs = [
    ['Granja de bots', 'Bot farm', 'Red de personas reales', 'Network of real people'],
    ['Repost masivo', 'Mass reposting', 'Rutas narrativas distintas', 'Distinct narrative routes'],
    ['Pauta donde se habla del tema', 'Ads on the topic', 'Coreografía de primeros minutos', 'First-minutes choreography'],
    ['Community management reactivo', 'Reactive CM', 'Activación coordinada en <15 min', 'Coordinated activation under 15 min'],
    ['Medir alcance', 'Measuring reach', 'Medir qué narrativa ganó', 'Measuring which narrative won'],
  ];

  const mono = { fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase' };
  const cardBg = '#0A0A0A';

  return (
    <section id="move" className="r-section" style={{
      backgroundColor: '#0A0A0A',
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      borderTop: '1px solid rgba(245,244,241,0.06)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── A · OPENER ── */}
        <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '28px' }}>Capa 04 · MOVE</div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 500,
          lineHeight: 1.04, letterSpacing: '-0.015em', color: '#F5F4F1',
          margin: '0 0 20px 0', maxWidth: '15ch',
        }}>
          MOVE ya no es ejecutar rápido. <em style={{ color: '#D72631', fontStyle: 'italic' }}>Es coreografiar narrativa.</em>
        </h2>
        <div style={{ ...mono, fontSize: '12px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.1em', marginBottom: '32px' }}>
          MOVE isn't speed anymore. It's narrative choreography.
        </div>
        <BodyText style={{ maxWidth: '620px' }}>
          El resto del mercado vende alcance. Nosotros entregamos narrativa orquestada en tiempo real.
        </BodyText>

        {/* ── B · EL PROBLEMA ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>El problema · The Problem</div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.6vw, 44px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 48px 0', maxWidth: '20ch',
          }}>
            Hoy se produce contenido. Casi nadie coordina narrativa.
          </h3>
          <div className="r-compare" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(245,244,241,0.1)' }}>
            <div style={{ padding: '18px 28px', borderBottom: '2px solid rgba(245,244,241,0.15)', borderRight: '1px solid rgba(245,244,241,0.1)' }}>
              <div style={{ ...mono, fontSize: '9px', color: 'rgba(245,244,241,0.4)' }}>Lo que hace el mercado · The market</div>
            </div>
            <div style={{ padding: '18px 28px', borderBottom: '2px solid #D72631' }}>
              <div style={{ ...mono, fontSize: '9px', color: '#D72631' }}>Lo que falta · What's missing</div>
            </div>
            {problema.map((row, i) => (
              <React.Fragment key={i}>
                <div style={{ padding: '18px 28px', borderBottom: i < problema.length-1 ? '1px solid rgba(245,244,241,0.07)' : 'none', borderRight: '1px solid rgba(245,244,241,0.07)' }}>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: 'rgba(245,244,241,0.4)', lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: 'rgba(245,244,241,0.2)' }}>{row[0]}</div>
                </div>
                <div style={{ padding: '18px 28px', borderBottom: i < problema.length-1 ? '1px solid rgba(245,244,241,0.07)' : 'none', backgroundColor: 'rgba(245,244,241,0.02)' }}>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 600, color: '#F5F4F1', lineHeight: 1.5 }}>{row[1]}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.08em', marginTop: '24px', textTransform: 'none' }}>
            Producir más rápido dejó de ser ventaja. Coordinar mejor sí lo es.
          </div>
        </div>

        {/* ── C · LAS 3 MECÁNICAS (ancla) ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>El sistema · The System</div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.6vw, 44px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 48px 0', maxWidth: '22ch',
          }}>
            Tres mecánicas que no existen juntas en ningún otro lado.
          </h3>
          <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)' }}>
            {mecanicas.map((m) => (
              <div key={m.num} style={{ backgroundColor: cardBg, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ ...mono, fontSize: '11px', fontWeight: 700, color: '#D72631' }}>{m.num}</div>
                <MoveLabel es={m.es} en={m.en} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: 'rgba(245,244,241,0.7)', lineHeight: 1.3 }}>{m.claim}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(245,244,241,0.08)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 600, color: '#F5F4F1' }}>
              Inteligencia decide. Personajes ejecutan. Primeros minutos enmarcan.
            </div>
            <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.08em', marginTop: '6px' }}>
              Intelligence decides. Characters execute. The first minutes frame everything.
            </div>
          </div>
        </div>

        {/* ── D · MECÁNICA 01 · RUTEO ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>Mecánica 01 · Mechanic 01</div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 16px 0', maxWidth: '18ch' }}>
            No distribuimos posts. Distribuimos rutas narrativas.
          </h3>
          <BodyText style={{ maxWidth: '620px', marginBottom: '40px' }}>
            Un tema = múltiples rutas. La IA decide qué combinación se necesita para que la narrativa se digiera.
          </BodyText>
          <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '1px solid rgba(245,244,241,0.07)' }}>
            {rutas.map((r, i) => (
              <div key={i} style={{ backgroundColor: cardBg, padding: '32px 24px' }}>
                <div style={{ width: '24px', height: '3px', backgroundColor: r.c, marginBottom: '20px' }} />
                <MoveLabel es={r.es} en={r.en} />
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.6, marginTop: '12px' }}>{r.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.08em', marginTop: '24px', textTransform: 'none' }}>
            No empujamos contenido. Activamos rutas. Cada ruta tiene su voz, su plataforma y su momento.
          </div>
        </div>

        {/* ── E · MECÁNICA 02 · STORYWORLD ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>Mecánica 02 · Mechanic 02</div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 16px 0', maxWidth: '18ch' }}>
            Cada cuenta es un personaje. El sistema dirige la obra.
          </h3>
          {/* Governance line — visible */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(74,222,128,0.25)', background: 'rgba(74,222,128,0.04)', borderRadius: '2px', padding: '8px 14px', marginBottom: '40px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80', flexShrink: 0 }} />
            <span style={{ ...mono, fontSize: '10px', color: 'rgba(245,244,241,0.7)', letterSpacing: '0.1em' }}>Red de personas reales con audiencias propias — no bots, no granjas</span>
          </div>
          <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)' }}>
            {personajes.map((p, i) => (
              <div key={i} style={{ backgroundColor: cardBg, padding: '32px 28px' }}>
                <MoveLabel es={p.es} en={p.en} />
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.6, marginTop: '12px' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.06em', marginTop: '24px', textTransform: 'none', lineHeight: 1.7 }}>
            El sistema decide quién entra primero, quién remata, quién se queda en comentarios, quién migra de TikTok a X, quién a Facebook.
          </div>

          {/* La red — escala, sincronía y trazabilidad */}
          <div style={{ marginTop: 'clamp(40px, 6vw, 64px)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 700, color: '#F5F4F1', letterSpacing: '-0.01em', marginBottom: '24px' }}>
              No publicamos en una cuenta. <span style={{ color: '#D72631' }}>Activamos cientos.</span>
            </div>
            <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)' }}>
              {[
                { es: 'Cientos de cuentas', en: 'Activable network', desc: 'Audiencias reales pre-construidas en verticales — farándula, deportes, entretenimiento, lifestyle. Comunidades con engagement orgánico activo.' },
                { es: 'Activación simultánea', en: 'Simultaneous activation', desc: 'La narrativa se siembra al mismo tiempo en decenas o cientos de cuentas, según la intensidad que la misión requiera. Saturación controlada, no spam.' },
                { es: 'Trazabilidad completa', en: 'Full traceability', desc: 'De la activación al impacto narrativo. Cada movimiento documentado: qué cuenta movió qué conversación.' },
              ].map((c, i) => (
                <div key={i} style={{ backgroundColor: cardBg, padding: '32px 28px' }}>
                  <MoveLabel es={c.es} en={c.en} />
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.6, marginTop: '12px' }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── F · MECÁNICA 03 · PRIMEROS MINUTOS ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>Mecánica 03 · Mechanic 03</div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 16px 0', maxWidth: '22ch' }}>
            Los primeros 15 minutos definen cómo se lee el resto.
          </h3>
          <div style={{ ...mono, fontSize: '12px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.1em', marginBottom: '44px' }}>First Minutes Command</div>
          <div className="r-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '2px solid #D72631' }}>
            {timeline.map((tl, i) => (
              <div key={i} style={{ backgroundColor: cardBg, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#D72631', flexShrink: 0 }} />
                  <span style={{ ...mono, fontSize: '12px', fontWeight: 700, color: '#F5F4F1', letterSpacing: '0.12em' }}>{tl.t}</span>
                </div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: '#F5F4F1', lineHeight: 1.5, fontWeight: 500 }}>{tl.es}</div>
                <div style={{ ...mono, fontSize: '9px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.1em', marginTop: 'auto' }}>{tl.en}</div>
              </div>
            ))}
          </div>
          <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.06em', marginTop: '24px', textTransform: 'none' }}>
            No es alcance. Es coreografía. Cuentas reales, ya en tu ecosistema, sincronizadas.
          </div>
        </div>

        {/* ── G · LO QUE NO ES (gobernanza) ── */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
          <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '20px' }}>Límite · Boundary</div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(26px, 3.6vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5F4F1', margin: '0 0 40px 0' }}>
            Lo que esto <em style={{ color: '#D72631', fontStyle: 'normal' }}>NO</em> es.
          </h3>
          <div style={{ border: '1px solid rgba(245,244,241,0.1)' }}>
            {noEs.map((row, i) => (
              <div key={i} className="r-compare" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < noEs.length-1 ? '1px solid rgba(245,244,241,0.07)' : 'none' }}>
                <div style={{ padding: '20px 28px', borderRight: '1px solid rgba(245,244,241,0.07)' }}>
                  <div style={{ ...mono, fontSize: '8px', color: 'rgba(245,244,241,0.3)', marginBottom: '6px' }}>No es · Not this</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: 'rgba(245,244,241,0.4)', lineHeight: 1.4, textDecoration: 'line-through', textDecorationColor: 'rgba(245,244,241,0.2)' }}>{row[0]} <span style={{ color: 'rgba(245,244,241,0.25)', textDecoration: 'none' }}>· {row[1]}</span></div>
                </div>
                <div style={{ padding: '20px 28px', backgroundColor: 'rgba(215,38,49,0.03)' }}>
                  <div style={{ ...mono, fontSize: '8px', color: '#D72631', marginBottom: '6px' }}>Es · But this</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 600, color: '#F5F4F1', lineHeight: 1.4 }}>{row[2]} <span style={{ ...mono, fontSize: '9px', color: 'rgba(245,244,241,0.4)', fontWeight: 400 }}>· {row[3]}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── H · CTA a página futura ── */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)', paddingTop: '40px', borderTop: '1px solid rgba(245,244,241,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2.4vw, 28px)', fontStyle: 'italic', color: 'rgba(245,244,241,0.6)', maxWidth: '24ch' }}>
            Esto es solo la mecánica. La operación completa se ve adentro.
          </div>
          <a href="index.html#cierre" className="r-move-cta" style={{
            ...mono, fontSize: '11px', color: '#F5F1EB',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            border: '1px solid rgba(245,241,235,0.35)', padding: '15px 30px',
            textDecoration: 'none', letterSpacing: '0.12em', flexShrink: 0,
            lineHeight: 1.5,
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#F5F1EB'; e.currentTarget.style.color = '#0A0A0A'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F5F1EB'; }}
          >
            Solicitar acceso a la sala · Request access →
          </a>
        </div>

      </div>
    </section>
  );
}

/* ─── Section 5.7b: MOVE · TEASER (landing) ─── */
function SecMoveTeaser() {
  const mecanicas = [
    { num: '01', es: 'Ruteo narrativo', en: 'Narrative Routing', claim: 'Distribuimos rutas, no piezas.' },
    { num: '02', es: 'Storyworld coordinado', en: 'Coordinated Storyworld', claim: 'Cada cuenta es un personaje, no un canal.' },
    { num: '03', es: 'Control de primeros minutos', en: 'First Minutes Command', claim: 'Los primeros 15 minutos deciden el resto.' },
  ];
  const mono = { fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase' };
  return (
    <Wrapper id="move" bg="#0A0A0A">
      <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '24px' }}>Capa 04 · MOVE</div>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '56px' }}>
        <div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 500,
            lineHeight: 1.06, letterSpacing: '-0.015em', color: '#F5F4F1', margin: '0 0 16px 0',
          }}>
            MOVE ya no es ejecutar rápido. <em style={{ color: '#D72631', fontStyle: 'italic' }}>Es coreografiar narrativa.</em>
          </h2>
          <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.1em' }}>
            MOVE isn't speed anymore. It's narrative choreography.
          </div>
        </div>
        <BodyText>
          El resto del mercado vende alcance. Nosotros entregamos narrativa orquestada en tiempo real: ruteo narrativo, storyworld coordinado y control de los primeros minutos.
        </BodyText>
      </div>

      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)' }}>
        {mecanicas.map((m) => (
          <div key={m.num} style={{ backgroundColor: '#0A0A0A', padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ ...mono, fontSize: '11px', fontWeight: 700, color: '#D72631' }}>{m.num}</div>
            <MoveLabel es={m.es} en={m.en} />
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', color: 'rgba(245,244,241,0.65)', lineHeight: 1.3 }}>{m.claim}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="move.html" className="r-move-cta" style={{
          ...mono, fontSize: '11px', color: '#0A0A0A', backgroundColor: '#F5F1EB',
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          border: '1px solid #F5F1EB', padding: '15px 32px',
          textDecoration: 'none', letterSpacing: '0.12em', lineHeight: 1.5,
          transition: 'opacity 0.2s ease',
        }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
          Ver cómo funciona · See how it works →
        </a>
        <span style={{ ...mono, fontSize: '10px', color: 'rgba(245,244,241,0.3)', letterSpacing: '0.1em', textTransform: 'none' }}>
          Las 3 mecánicas en detalle, rutas, personajes y la coreografía minuto a minuto.
        </span>
      </div>
    </Wrapper>
  );
}

/* ─── R.O.O.M phase page (OBSERVE / OWN) ─── */
function RoomPhase({ capa, titleEs, titleEm, titleEn, intro, cards, caption, next }) {
  const mono = { fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase' };
  return (
    <section className="r-section" style={{
      backgroundColor: '#0A0A0A',
      padding: 'clamp(96px, 11vw, 150px) clamp(24px, 6vw, 80px) clamp(80px, 10vw, 140px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ ...mono, fontSize: '10px', color: '#D72631', marginBottom: '28px' }}>{capa}</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 500,
          lineHeight: 1.04, letterSpacing: '-0.015em', color: '#F5F4F1',
          margin: '0 0 20px 0', maxWidth: '16ch',
        }}>
          {titleEs} <em style={{ color: '#D72631', fontStyle: 'italic' }}>{titleEm}</em>
        </h1>
        <div style={{ ...mono, fontSize: '12px', color: 'rgba(245,244,241,0.4)', letterSpacing: '0.1em', marginBottom: '32px' }}>{titleEn}</div>
        <BodyText style={{ maxWidth: '640px' }}>{intro}</BodyText>

        <div className="r-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.07)', borderTop: '1px solid rgba(245,244,241,0.07)', marginTop: 'clamp(48px, 7vw, 80px)' }}>
          {cards.map((c, i) => (
            <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '36px 28px' }}>
              <div style={{ ...mono, fontSize: '11px', fontWeight: 700, color: '#D72631', marginBottom: '20px' }}>{String(i + 1).padStart(2, '0')}</div>
              <MoveLabel es={c.es} en={c.en} />
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px', color: 'rgba(245,244,241,0.55)', lineHeight: 1.65, marginTop: '12px' }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ ...mono, fontSize: '11px', color: 'rgba(245,244,241,0.35)', letterSpacing: '0.06em', marginTop: '24px', textTransform: 'none' }}>{caption}</div>

        {/* Flow nav */}
        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)', paddingTop: '40px', borderTop: '1px solid rgba(245,244,241,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <a href="index.html#cierre" className="r-move-cta" style={{
            ...mono, fontSize: '11px', color: '#0A0A0A', backgroundColor: '#F5F1EB',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            border: '1px solid #F5F1EB', padding: '15px 30px',
            textDecoration: 'none', letterSpacing: '0.12em', lineHeight: 1.5,
            transition: 'opacity 0.2s ease',
          }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >Solicitar acceso a la sala · Request access →</a>
          {next && (
            <a href={next.href} style={{
              ...mono, fontSize: '11px', color: 'rgba(245,241,235,0.55)',
              textDecoration: 'none', letterSpacing: '0.12em',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
              onMouseOver={e => e.currentTarget.style.color = '#F5F1EB'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(245,241,235,0.55)'}
            >Siguiente · Next: {next.label} →</a>
          )}
        </div>
      </div>
    </section>
  );
}

function SecRadar() {
  return (
    <RoomPhase
      capa="Capa 01 · RADAR"
      titleEs="No monitorea."
      titleEm="Anticipa."
      titleEn="It doesn't monitor. RADAR sees the conversation before it trends."
      intro="Mientras otros revisan reportes de la semana pasada, RADAR escucha el país a cada minuto y detecta la señal cuando todavía es pequeña — antes de que escale a tendencia."
      cards={[
        { es: 'Detección anticipatoria', en: 'Anticipatory detection', desc: 'IA predictiva entrenada para política. Encuentra la conversación antes de que sea tendencia.' },
        { es: 'Escucha multiplataforma', en: 'Multi-platform listening', desc: 'TikTok, X, Instagram, Facebook, YouTube, medios y regionales — en una sola lectura.' },
        { es: 'Clasificación por señal', en: 'Signal classification', desc: 'Cada señal etiquetada por tema, tipo y emoción dominante. Conversación real, sin ruido.' },
        { es: 'Priorización por urgencia', en: 'Urgency scoring', desc: 'Qué importa ahora: score de oportunidad, crisis y ventana de tiempo para actuar.' },
      ]}
      caption="Mientras otros monitorean, nosotros anticipamos."
      next={{ href: 'observe.html', label: 'OBSERVE' }}
    />
  );
}

function SecObserve() {
  return (
    <RoomPhase
      capa="Capa 02 · OBSERVE"
      titleEs="Detectar no es entender."
      titleEm="OBSERVE convierte señal en sentido."
      titleEn="Detection isn't understanding. OBSERVE turns signal into meaning."
      intro="El RADAR encuentra la conversación. OBSERVE la lee: qué significa, hacia dónde va, quién la mueve y cuánto tiempo tienes antes de que se instale."
      cards={[
        { es: 'Lectura de emoción', en: 'Emotion read', desc: 'Indignación, miedo, orgullo, esperanza. La emoción decide cómo y cuán rápido se propaga.' },
        { es: 'Mapa de actores', en: 'Actor map', desc: 'Quién mueve la conversación: medios, cuentas, comunidades. Dónde está el centro de gravedad.' },
        { es: 'Ventana de tiempo', en: 'Time window', desc: 'Cuánto tiempo tienes antes de que la narrativa se instale. La ventana define la urgencia.' },
        { es: 'Riesgo narrativo', en: 'Narrative risk', desc: 'Qué encuadre adverso está en formación temprana — todavía pequeño, todavía desmontable.' },
      ]}
      caption="No es escuchar más fuerte. Es entender qué significa antes que nadie."
      next={{ href: 'own.html', label: 'OWN' }}
    />
  );
}

function SecOwn() {
  return (
    <RoomPhase
      capa="Capa 03 · OWN"
      titleEs="No reacciones."
      titleEm="Apropia la narrativa."
      titleEn="Don't react. Own the narrative."
      intro="OWN decide qué historia te corresponde contar y por qué te corresponde a ti contarla. De la indignación ajena al encuadre propio, respaldado con hechos."
      cards={[
        { es: 'Encuadre propio', en: 'Own frame', desc: 'La historia que te corresponde contar, y la razón por la que te toca a ti contarla.' },
        { es: 'Datos verificables', en: 'Verifiable data', desc: 'No es opinión contra opinión. Es demostración con evidencia que el adversario no puede negar.' },
        { es: 'Acción visible', en: 'Visible action', desc: 'Apropiar no es hablar: es mostrar una decisión concreta que respalda el mensaje.' },
        { es: 'Autoridad moral', en: 'Moral authority', desc: 'Reconocer antes de explicar. La credibilidad se gana asumiendo, no evadiendo.' },
      ]}
      caption="No es disculpa. Es demostración. El que asume con datos define el encuadre."
      next={{ href: 'move.html', label: 'MOVE' }}
    />
  );
}

/* ─── Section 6: DIFERENCIADOR ─── */
function SecDiferenciador() {
  const rows = [
    ["Social listening con dos semanas de retraso", "Inteligencia en tiempo real"],
    ["Reportes en PowerPoint", "Misiones con Action Board"],
    ["Análisis sin recomendación", "Ejecución en horas"],
    ["Métricas vanidosas (alcance, menciones)", "KPIs políticos (conversaciones convertidas, velocidad de respuesta)"],
    ["Contenido producido por equipos humanos en días", "Contenido producido por agentes IA en horas, con ADN viral"],
    ["Distribución vía pauta o una cuenta oficial", "Distribución simultánea en cientos de cuentas con audiencias reales"],
    ["Equipo subcontratado por proyecto", "Sala dedicada: estrategia + creativos + tecnología"],
    ["Casado con un partido", "Sistema apartidista, sobrevive a cualquier gobierno"],
  ];
  return (
    <Wrapper id="diferenciador" bg="#F5F4F1">
      <Eyebrow light>Qué nos hace distintos</Eyebrow>
      <SectionHeadline light style={{ maxWidth: '680px', marginBottom: '60px' }}>No entregamos reportes. Entregamos cosas que pasan en la calle.</SectionHeadline>

      <div className="r-compare" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid rgba(10,10,10,0.12)' }}>
        {/* Headers */}
        <div style={{ padding: '20px 32px', backgroundColor: 'rgba(10,10,10,0.04)', borderBottom: '2px solid rgba(10,10,10,0.15)', borderRight: '1px solid rgba(10,10,10,0.12)' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(10,10,10,0.4)', textTransform: 'uppercase' }}>Lo que hace otro proveedor</div>
        </div>
        <div style={{ padding: '20px 32px', backgroundColor: '#0A0A0A', borderBottom: '2px solid #D72631' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: '#D72631', textTransform: 'uppercase' }}>Lo que hace THE ROOM</div>
        </div>
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            <div style={{ padding: '20px 32px', borderBottom: i < rows.length-1 ? '1px solid rgba(10,10,10,0.08)' : 'none', borderRight: '1px solid rgba(10,10,10,0.08)' }}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', color: 'rgba(10,10,10,0.45)', lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: 'rgba(10,10,10,0.2)' }}>{row[0]}</div>
            </div>
            <div style={{ padding: '20px 32px', borderBottom: i < rows.length-1 ? '1px solid rgba(10,10,10,0.08)' : 'none', backgroundColor: 'rgba(10,10,10,0.02)' }}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.5 }}>{row[1]}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── Section 7: QUÉ RECIBES ─── */
function SecEntregables() {
  const cols = [
    { period: "CADA SEMANA", items: ["Signal Brief de inteligencia", "Detección temprana de crisis y oportunidades", "Check-in operativo de seguimiento"] },
    { period: "CADA MES", items: ["Sesión R.O.O.M. presencial (4 horas)", "Action Board firmado en sala", "Medición de impacto de misiones activas"] },
    { period: "CADA 72H POST-SESIÓN", items: ["First Play ejecutado", "Pieza piloto en distribución", "Métricas iniciales en dashboard"] },
  ];
  return (
    <Wrapper id="entregables" bg="#0A0A0A">
      <Eyebrow>Entregables semanales y mensuales</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
        <SectionHeadline>Acción permanente. No promesas.</SectionHeadline>
      </div>
      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)' }}>
        {cols.map((col, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '40px 32px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#D72631', letterSpacing: '0.2em', marginBottom: '32px' }}>{col.period}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {col.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D72631', marginTop: '8px', flexShrink: 0 }} />
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '16px', fontWeight: 500, color: '#F5F4F1', lineHeight: 1.5 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── Section 8: ESCALABILIDAD ─── */
function SecEscalabilidad() {
  const steps = ["COMUNICACIÓN", "MINISTERIOS", "VOCEROS", "TERRITORIOS", "CONGRESISTAS"];
  return (
    <Wrapper id="escalabilidad" bg="#111111">
      <Eyebrow>De un vocero al estado completo</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>
        <SectionHeadline>Un sistema que crece con la operación política.</SectionHeadline>
        <BodyText>THE ROOM se diseña para escalar institucionalmente. Empieza en una oficina de comunicación. Crece a ministerios, voceros sectoriales, gobernaciones, bloques legislativos. Mismo sistema, distintos frentes, una sola narrativa coordinada.</BodyText>
      </div>
      <div className="r-escala" style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ flex: 1, position: 'relative' }}>
            <div style={{
              backgroundColor: i === 0 ? '#D72631' : `rgba(245,244,241,${0.04 + i * 0.03})`,
              padding: '32px 24px',
              height: `${120 + i * 40}px`,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              marginLeft: i > 0 ? '1px' : '0',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px', fontWeight: 600,
                color: i === 0 ? 'rgba(245,244,241,0.9)' : 'rgba(245,244,241,0.5)',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                writingMode: 'horizontal-tb',
              }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ position: 'absolute', right: '-1px', top: 0, bottom: 0, width: '1px', backgroundColor: 'rgba(245,244,241,0.06)', zIndex: 1 }} />
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── Section 9: QUIÉNES SOMOS ─── */
function SecEquipo() {
  const orgs = [
    { name: "McCANN", desc: "Verdad estratégica de mercado y narrativa creativa con presencia en 120+ países.", tag: "Narrativa creativa global" },
    { name: "MAMBO", desc: "15+ años instalando cambio cultural en empresas e instituciones. Acts, not ads.", tag: "Cambio cultural" },
    { name: "ALMA", desc: "IA y tecnología operativa. Sistema SIGNAL propio. Capacidad integrada desde el día uno.", tag: "IA & tecnología" },
  ];
  return (
    <Wrapper id="equipo" bg="#0A0A0A">
      <Eyebrow>Mabeca Corporation</Eyebrow>
      <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
        <SectionHeadline>Tres capacidades que nadie más cruza en Latinoamérica.</SectionHeadline>
      </div>
      <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)', marginBottom: '48px' }}>
        {orgs.map((o, i) => (
          <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '48px 36px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(245,244,241,0.25)', letterSpacing: '0.15em', marginBottom: '20px' }}>{o.tag}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '40px', fontWeight: 700, color: '#F5F4F1', marginBottom: '20px', letterSpacing: '-0.02em' }}>{o.name}</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '15px', color: 'rgba(245,244,241,0.6)', lineHeight: 1.7 }}>{o.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(245,244,241,0.08)', paddingTop: '32px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '18px', color: 'rgba(245,244,241,0.5)', marginBottom: '8px' }}>Creatividad + Cultura + Tecnología en un solo flujo operativo.</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: '#F5F4F1' }}>Eso es THE ROOM.</div>
      </div>
    </Wrapper>
  );
}

/* ─── Section 10: CIERRE / CTA ─── */
function SecCierre({ onCtaClick }) {
  return (
    <section id="cierre" style={{ backgroundColor: '#D72631', padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700,
          color: '#F5F4F1', lineHeight: 1.05, letterSpacing: '-0.025em',
          marginBottom: '32px',
        }}>
          Mientras otros analizan la conversación de ayer, nosotros ya estamos moviendo la de mañana.
        </div>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: '20px', color: 'rgba(245,244,241,0.75)', marginBottom: '56px', fontStyle: 'italic' }}>
          THE ROOM no se contrata. Se entra.
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => onCtaClick && onCtaClick('acceso')}
            style={{
              fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 700,
              backgroundColor: '#F5F4F1', color: '#D72631',
              border: 'none', borderRadius: '3px', padding: '18px 48px',
              cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
              transition: 'opacity 0.2s ease',
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            Solicitar acceso a la sala
          </button>
          <button
            onClick={() => onCtaClick && onCtaClick('pdf')}
            style={{
              fontFamily: "'Manrope', sans-serif", fontSize: '15px', fontWeight: 600,
              backgroundColor: 'transparent', color: '#F5F4F1',
              border: '1px solid rgba(245,244,241,0.5)', borderRadius: '3px', padding: '18px 48px',
              cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
              transition: 'border-color 0.2s ease',
            }}
            onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(245,244,241,0.9)'}
            onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(245,244,241,0.5)'}
          >
            Ver presentación (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ backgroundColor: '#050505', padding: '48px clamp(24px, 6vw, 80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: '#F5F4F1', marginBottom: '6px' }}>THE ROOM</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(245,244,241,0.25)', letterSpacing: '0.15em' }}>A MABECA CORPORATION SYSTEM</div>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(245,244,241,0.2)', letterSpacing: '0.1em', textAlign: 'right', lineHeight: 2 }}>
          <div>Operando en Ecuador · Expandiendo a LATAM</div>
          <div>Powered by SIGNAL — Anticipatory Intelligence Engine</div>
          <div>© 2026 Mabeca Corporation. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  SecProblema, SecSolucion, SecSistema, SecCaso,
  SecAmplificacion, SecMove, SecMoveTeaser,
  RoomPhase, SecRadar, SecObserve, SecOwn,
  SecDiferenciador, SecEntregables, SecEscalabilidad,
  SecEquipo, SecCierre, Footer,
  Eyebrow, SectionHeadline, BodyText, Wrapper, Divider,
});
