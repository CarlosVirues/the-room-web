
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
    <section id={id} style={{
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
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
      <div style={{
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
    { label: "Tecnología predictiva", desc: "Escucha el país en tiempo real.", tag: "01" },
    { label: "Metodología de decisión acelerada", desc: "Convierte señales en misiones en horas.", tag: "02" },
    { label: "Ejecución creativa", desc: "Sale de la sala con piezas listas para activar.", tag: "03" },
  ];
  return (
    <Wrapper id="solucion" bg="#F5F4F1">
      <Eyebrow light>La nueva ventaja</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>
        <SectionHeadline light>Liderar el ciclo, no responderle.</SectionHeadline>
        <div>
          <BodyText light>THE ROOM cruza tres capas que nadie más cruza en política:</BodyText>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(10,10,10,0.08)' }}>
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
        marginTop: '60px',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0',
        borderTop: '2px solid #0A0A0A',
      }}>
        {[
          { formula: "Lectura sin activación", result: "= reporte" },
          { formula: "Activación sin lectura", result: "= riesgo" },
          { formula: "THE ROOM", result: "= lectura temprana + activación estratégica", bold: true },
        ].map((f, i) => (
          <div key={i} style={{ padding: '28px 0', borderRight: i < 2 ? '1px solid rgba(10,10,10,0.12)' : 'none', paddingRight: '32px', paddingLeft: i > 0 ? '32px' : '0' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(10,10,10,0.5)', marginBottom: '6px' }}>{f.formula}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace', monospace", fontSize: '13px', fontWeight: f.bold ? 700 : 400, color: f.bold ? '#D72631' : '#0A0A0A' }}>{f.result}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

/* ─── Section 4: 4 PASOS ─── */
function SecSistema() {
  const steps = [
    {
      num: '01', name: 'RADAR', sub: 'Detección anticipatoria con IA',
      desc: 'IA predictiva entrenada para política. Detecta conversaciones positivas y negativas antes de que escalen a tendencia. Clasifica cada señal por tema, tipo y emoción dominante.',
      quote: 'Mientras otros monitorean, nosotros anticipamos.',
      highlight: false,
    },
    {
      num: '02', name: 'MISIONES', sub: 'De la señal a la decisión',
      desc: 'Cada conversación crítica se convierte en una misión con objetivo, ventana de tiempo y métricas. No se trata de generar más contenido, sino de elegir qué amplificar y cuándo.',
      quote: 'La conversación se transforma en plan.',
      highlight: false,
    },
    {
      num: '03', name: 'ASESORES IA', sub: 'Estrategia con la lógica de los que ganaron',
      desc: 'Cada misión se discute con asesores entrenados sobre la lógica de figuras políticas reales que dominaron su ciclo. Distintos ángulos, distintos enfoques, una decisión final.',
      quote: 'La estrategia que tardaría días, en minutos.',
      highlight: true,
    },
    {
      num: '04', name: 'CONTENIDO IA', sub: 'Producción con agentes IA + curaduría humana',
      desc: 'Agentes que generan video, copy y arte. Curaduría humana antes de salir. Cada pieza nace conectada a la misión y a la ventana de tiempo que la conversación permite.',
      quote: 'Producción a velocidad de máquina, criterio de equipo político.',
      highlight: false,
    },
  ];

  return (
    <Wrapper id="sistema" bg="#111111">
      <Eyebrow>4 pasos · un solo objetivo</Eyebrow>

      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.06)', marginTop: '60px', marginBottom: '64px' }}>
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
      <div style={{ border: '1px solid rgba(215,38,49,0.3)', borderLeft: '3px solid #D72631', padding: '40px 48px', backgroundColor: 'rgba(215,38,49,0.04)' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#D72631', letterSpacing: '0.25em', marginBottom: '20px' }}>
          MISIÓN ACTIVADA
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#F5F4F1', marginBottom: '40px', lineHeight: 1.3 }}>
          EL PRESIDENTE HABLA PRIMERO, CON DATOS Y CON PLAN
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
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

/* ─── Section 6: DIFERENCIADOR ─── */
function SecDiferenciador() {
  const rows = [
    ["Social listening con dos semanas de retraso", "Inteligencia en tiempo real"],
    ["Reportes en PowerPoint", "Misiones con Action Board"],
    ["Análisis sin recomendación", "Misiones con objetivo, ventana y métricas"],
    ["Métricas vanidosas (alcance, menciones)", "KPIs políticos (conversaciones convertidas, velocidad de respuesta)"],
    ["Equipo subcontratado por proyecto", "Sala dedicada: estrategia + creativos + tecnología"],
    ["Casado con un partido", "Sistema apartidista, sobrevive a cualquier gobierno"],
  ];
  return (
    <Wrapper id="diferenciador" bg="#F5F4F1">
      <Eyebrow light>Qué nos hace distintos</Eyebrow>
      <SectionHeadline light style={{ maxWidth: '680px', marginBottom: '60px' }}>No entregamos reportes. Entregamos cosas que pasan en la calle.</SectionHeadline>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid rgba(10,10,10,0.12)' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
        <SectionHeadline>Acción permanente. No promesas.</SectionHeadline>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>
        <SectionHeadline>Un sistema que crece con la operación política.</SectionHeadline>
        <BodyText>THE ROOM se diseña para escalar institucionalmente. Empieza en una oficina de comunicación. Crece a ministerios, voceros sectoriales, gobernaciones, bloques legislativos. Mismo sistema, distintos frentes, una sola narrativa coordinada.</BodyText>
      </div>
      <div style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}>
        <SectionHeadline>Tres capacidades que nadie más cruza en Latinoamérica.</SectionHeadline>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(245,244,241,0.05)', marginBottom: '48px' }}>
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
  SecDiferenciador, SecEntregables, SecEscalabilidad,
  SecEquipo, SecCierre, Footer,
  Eyebrow, SectionHeadline, BodyText, Wrapper, Divider,
});
