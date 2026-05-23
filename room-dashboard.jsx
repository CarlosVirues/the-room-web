
// THE ROOM — SIGNALS Dashboard Mockup
const { useRef, useEffect, useState } = React;

// Local FadeIn (room-hero.jsx loads after this file)
function DashFadeIn({ children, delay = 0, y = 20 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ── Canvas Network Graph ─────────────────────────────────────────────────── */
function NetworkGraph() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;

    const platforms = [
      { x: .12, y: .18, label: 'YouScan',    r: 14 },
      { x: .14, y: .30, label: 'TikTok',     r: 17 },
      { x: .11, y: .43, label: 'Instagram',  r: 16 },
      { x: .13, y: .54, label: 'X / Twitter',r: 14 },
      { x: .11, y: .64, label: 'Facebook',   r: 18 },
      { x: .13, y: .74, label: 'YouTube',    r: 15 },
      { x: .10, y: .84, label: 'Medios',     r: 17 },
      { x: .12, y: .93, label: 'Regionales', r: 13 },
    ];
    const categories = [
      { x: .78, y: .25, label: 'Oportunidades', n: 12, color: '#4ADE80' },
      { x: .80, y: .47, label: 'Alertas',       n:  3, color: '#F97316' },
      { x: .78, y: .66, label: 'Tensiones',     n:  7, color: '#A855F7' },
      { x: .78, y: .84, label: 'Ventanas',      n:  5, color: '#60A5FA' },
    ];
    const hub = { x: .63, y: .55, label: 'MISIONES', sub: '6 / 18', color: '#14B8A6', r: 26 };

    // Floating signal dots
    const dots = Array.from({ length: 48 }, () => ({
      x: .22 + Math.random() * .38,
      y: .05 + Math.random() * .90,
      vx: (Math.random() - .5) * .0004,
      vy: (Math.random() - .5) * .0004,
      r:  1.5 + Math.random() * 2.5,
      a:  .25 + Math.random() * .55,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0C0E12';
      ctx.fillRect(0, 0, W, H);

      // Subtle connection lines platform → category
      platforms.forEach(p => {
        categories.forEach(c => {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255,255,255,0.025)';
          ctx.lineWidth = 1;
          const cpx = (p.x + c.x) / 2;
          ctx.moveTo(p.x * W, p.y * H);
          ctx.quadraticCurveTo(cpx * W, ((p.y + c.y) / 2) * H, c.x * W, c.y * H);
          ctx.stroke();
        });
      });

      // Platform → hub lines
      platforms.forEach(p => {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        ctx.moveTo(p.x * W, p.y * H);
        ctx.lineTo(hub.x * W, hub.y * H);
        ctx.stroke();
      });

      // Signal dots
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < .2 || d.x > .62) d.vx *= -1;
        if (d.y < .02 || d.y > .97) d.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(251,191,36,${d.a})`;
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Platform nodes
      platforms.forEach(p => {
        const px = p.x * W, py = p.y * H;
        // glow
        const g = ctx.createRadialGradient(px, py, 0, px, py, p.r * 2.5);
        g.addColorStop(0, 'rgba(233,55,168,.35)'); g.addColorStop(1, 'rgba(233,55,168,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(px, py, p.r * 2.5, 0, Math.PI * 2); ctx.fill();
        // body
        ctx.fillStyle = '#D72A9C';
        ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2); ctx.fill();
        // highlight
        ctx.fillStyle = 'rgba(255,160,220,.6)';
        ctx.beginPath(); ctx.arc(px - p.r * .25, py - p.r * .3, p.r * .35, 0, Math.PI * 2); ctx.fill();
        // label
        ctx.fillStyle = 'rgba(255,255,255,.65)';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.fillText(p.label, px + p.r + 6, py);
      });

      // Category nodes
      categories.forEach(c => {
        const r = 22;
        const cx2 = c.x * W, cy = c.y * H;
        const g = ctx.createRadialGradient(cx2, cy, 0, cx2, cy, r * 2.5);
        g.addColorStop(0, c.color + '55'); g.addColorStop(1, c.color + '00');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx2, cy, r * 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = c.color;
        ctx.beginPath(); ctx.arc(cx2, cy, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#000'; ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(c.n, cx2, cy);
        ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.font = '9px Inter, sans-serif';
        ctx.textBaseline = 'top'; ctx.fillText(c.label, cx2, cy + r + 4);
      });

      // Hub node
      const hx = hub.x * W, hy = hub.y * H;
      const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, hub.r * 2.5);
      hg.addColorStop(0, 'rgba(20,184,166,.4)'); hg.addColorStop(1, 'rgba(20,184,166,0)');
      ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(hx, hy, hub.r * 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#14B8A6'; ctx.beginPath(); ctx.arc(hx, hy, hub.r, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 9px Inter, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(hub.sub, hx, hy);
      ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.font = '9px Inter, sans-serif';
      ctx.textBaseline = 'top'; ctx.fillText(hub.label, hx, hy + hub.r + 4);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} width={660} height={370} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

/* ── Radar / Diamond Chart ────────────────────────────────────────────────── */
function RadarChart() {
  const cx = 90, cy = 90, r = 64;
  const axes = [
    { label: 'Tendencias',   angle: -90, val: .75 },
    { label: 'Competidores', angle:   0, val: .55 },
    { label: 'Gaps',         angle:  90, val: .60 },
    { label: 'Ventanas',     angle: 180, val: .80 },
  ];
  const pts = axes.map(a => {
    const rad = (a.angle * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r * a.val, y: cy + Math.sin(rad) * r * a.val };
  });
  const poly = pts.map(p => `${p.x},${p.y}`).join(' ');
  const outerPts = axes.map(a => {
    const rad = (a.angle * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r, label: a.label, angle: a.angle };
  });
  return (
    <svg viewBox="0 0 180 180" style={{ width: '100%', height: '100%' }}>
      {/* Axis lines */}
      {outerPts.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      ))}
      {/* Outer diamond */}
      <polygon points={outerPts.map(p => `${p.x},${p.y}`).join(' ')} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Inner diamond */}
      <polygon points={poly} fill="rgba(20,184,166,0.12)" stroke="#14B8A6" strokeWidth="1.5" />
      {/* Dots on axes */}
      {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="#14B8A6" />)}
      {/* Labels */}
      {outerPts.map((p, i) => {
        const off = p.angle === -90 ? -8 : p.angle === 90 ? 14 : 0;
        const dx = p.angle === 0 ? 6 : p.angle === 180 ? -6 : 0;
        return (
          <text key={i} x={p.x + dx} y={p.y + off}
            textAnchor={p.angle === 0 ? 'start' : p.angle === 180 ? 'end' : 'middle'}
            fontSize="8" fill="rgba(255,255,255,0.5)"
          >{p.label}</text>
        );
      })}
    </svg>
  );
}

/* ── Line Chart ───────────────────────────────────────────────────────────── */
function LineChart() {
  const days = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  const vals = [28, 32, 30, 38, 42, 50, 61];
  const W = 200, H = 60, pad = 16;
  const maxV = Math.max(...vals);
  const pts = vals.map((v, i) => ({
    x: pad + (i / (vals.length - 1)) * (W - pad * 2),
    y: H - pad - ((v / maxV) * (H - pad * 2)),
  }));
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ');
  const areaD = pathD + ` L${pts[pts.length-1].x} ${H-pad} L${pts[0].x} ${H-pad} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '48px' }}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#lineGrad)" />
      <path d={pathD} fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
      {days.map((d, i) => (
        <text key={i} x={pad + (i / (vals.length-1)) * (W - pad * 2)} y={H - 2}
          textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)">{d}</text>
      ))}
    </svg>
  );
}

/* ── Main Dashboard ───────────────────────────────────────────────────────── */
function SignalsDashboard() {
  const [tab, setTab] = useState('Todas');
  const tabs = ['Todas', 'Crisis 9', 'Electoral 8', 'Reputación 27'];
  const insights = [
    { time:'09:14', title:'ECUAYAPA',               score:91, desc:'Ecuador #6 global en emprendimiento GEM 2025. Plataforma Ecuayapa conecta 12.000 emprendedores y no tiene narrativa presidencial visible.' },
    { time:'09:11', title:'160K EMPLEOS JÓVENES',   score:88, desc:'160.000 empleos para jóvenes creados bajo Noboa (feb 2026). Dato real sin narrativa de comunicación sostenida.' },
    { time:'09:05', title:'#ESTOTAMBIÉNESECUADOR',  score:85, desc:'Hashtag orgánico de orgullo nacional activo en X e Instagram. Ciudadanos muestran lo positivo del país sin narrativa oficial.' },
    { time:'09:04', title:'MIGRACIÓN CIRCULAR',     score:79, desc:'Retorno de migrantes desde España y EE.UU. detectado. Dato positivo sin encuadre gubernamental visible.' },
  ];
  const logEntries = [
    { time:'09:15', text:'Iniciando análisis de 23.795 menciones — territorios feb-may 2026 + Caso Encuentro...', accent: true },
    { time:'09:16', text:'Filtro semántico: 14.023 menciones de medios y duplicados excluidos. Foco: conversación ciudadana real.', accent: true },
    { time:'09:17', text:'Clasificación completada — 9.441 menciones territorios + 10.803 CEN procesadas.', accent: false },
    { time:'09:18', text:'Señal crítica: 616 menciones vinculan al gobierno con narrativa de corrupción (Caso Encuentro).', accent: false },
  ];
  const missions = [
    { tag:'Por revisar', date:'May 2026', title:'El Presidente habla primero, con datos y con plan', meta:'Declaración en todas las plataformas; video <2 min; Silencio_Gobierno menciones -60% en 72h' },
    { tag:'Por revisar', date:'May 2026', title:'Convertir la decisión difícil en argumento de credibilidad', meta:'Acción legislativa visible; mensaje directo a zonas afectadas' },
  ];

  const S = { // styles namespaced to avoid collision
    wrap: { borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#0C0E12', fontFamily: "'JetBrains Mono', 'Inter', monospace" },
    titleBar: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 16px', borderBottom:'1px solid rgba(255,255,255,0.06)', background:'rgba(0,0,0,0.4)' },
    body: { display:'grid', gridTemplateColumns:'58% 42%', minHeight:'520px' },
    leftPanel: { borderRight:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column' },
    graphArea: { flex:'0 0 320px', position:'relative', background:'#0C0E12' },
    legend: { display:'flex', gap:'16px', padding:'8px 16px', borderTop:'1px solid rgba(255,255,255,0.05)', flexWrap:'wrap' },
    legendItem: { display:'flex', alignItems:'center', gap:'6px', fontSize:'10px', color:'rgba(255,255,255,0.5)' },
    dot: (c) => ({ width:'8px', height:'8px', borderRadius:'50%', backgroundColor:c, flexShrink:0 }),
    insightsHeader: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 16px', borderTop:'1px solid rgba(255,255,255,0.06)' },
    insightsLabel: { fontSize:'11px', fontWeight:600, color:'rgba(255,255,255,0.8)', letterSpacing:'0.1em' },
    tabs: { display:'flex', gap:'0', padding:'0 16px', borderBottom:'1px solid rgba(255,255,255,0.05)' },
    tab: (active) => ({ fontSize:'10px', padding:'7px 10px', cursor:'pointer', borderBottom: active ? '1px solid #14B8A6' : '1px solid transparent', color: active ? '#14B8A6' : 'rgba(255,255,255,0.4)', background:'none', border:'none', borderBottom: active ? '1px solid #14B8A6' : '1px solid transparent', fontFamily:'inherit', letterSpacing:'0.05em' }),
    insightRow: { display:'flex', alignItems:'flex-start', gap:'10px', padding:'10px 16px', borderBottom:'1px solid rgba(255,255,255,0.04)', cursor:'default' },
    score: (s) => ({ fontSize:'11px', fontWeight:700, color: s>90?'#4ADE80':s>85?'#F59E0B':'rgba(255,255,255,0.5)', marginLeft:'auto', flexShrink:0 }),
    rightPanel: { display:'flex', flexDirection:'column' },
    statsRow: { display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderBottom:'1px solid rgba(255,255,255,0.06)' },
    statCell: { padding:'14px 12px', borderRight:'1px solid rgba(255,255,255,0.06)' },
    statNum: { fontSize:'22px', fontWeight:700, color:'#14B8A6', letterSpacing:'-0.02em', lineHeight:1 },
    statLabel: { fontSize:'8px', color:'rgba(255,255,255,0.35)', letterSpacing:'0.12em', marginTop:'4px', textTransform:'uppercase' },
    chartsArea: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'12px' },
    missionsSplit: { display:'grid', gridTemplateColumns:'1fr 1fr', flex:1 },
    logPanel: { borderRight:'1px solid rgba(255,255,255,0.06)', padding:'10px', overflow:'hidden' },
    logHeader: { fontSize:'9px', letterSpacing:'0.15em', color:'rgba(255,255,255,0.35)', marginBottom:'8px', textTransform:'uppercase' },
    logEntry: { display:'flex', gap:'8px', marginBottom:'10px', fontSize:'10px', lineHeight:1.5 },
    logTime: { color:'rgba(255,255,255,0.3)', flexShrink:0 },
    mCard: { padding:'8px 10px', borderBottom:'1px solid rgba(255,255,255,0.04)' },
    mTag: { fontSize:'9px', color:'rgba(255,255,255,0.35)', letterSpacing:'0.08em', marginBottom:'4px' },
    mTitle: { fontSize:'11px', color:'rgba(255,255,255,0.85)', lineHeight:1.4, fontFamily:"'Manrope', sans-serif" },
    mMeta: { fontSize:'9px', color:'rgba(255,255,255,0.35)', marginTop:'4px', lineHeight:1.4 },
  };

  return (
    <div style={{ maxWidth:'72rem', margin:'0 auto', padding:'0 24px 80px', position:'relative', zIndex:10 }}>
      <DashFadeIn y={40} delay={0.1}>
        <div style={S.wrap}>

          {/* ── Title bar */}
          <div style={S.titleBar}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <span style={{ fontSize:'13px', fontWeight:700, color:'#14B8A6', letterSpacing:'0.1em' }}>SIGNALS</span>
              <span style={{ color:'rgba(255,255,255,0.2)', fontSize:'13px' }}>—</span>
              <span style={{ fontSize:'13px', fontWeight:700, color:'rgba(255,255,255,0.8)', letterSpacing:'0.08em' }}>THE ROOM</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <span style={{ width:'7px', height:'7px', borderRadius:'50%', backgroundColor:'#14B8A6', display:'inline-block', boxShadow:'0 0 6px #14B8A6' }} />
              <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.5)', letterSpacing:'0.05em' }}>27 señales identificadas</span>
              <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.2)', cursor:'pointer' }}>⊕</span>
            </div>
          </div>

          {/* ── Body */}
          <div style={S.body}>

            {/* LEFT PANEL */}
            <div style={S.leftPanel}>
              {/* Network graph */}
              <div style={S.graphArea}><NetworkGraph /></div>

              {/* Legend */}
              <div style={S.legend}>
                {[['#4ADE80','Oportunidad narrativa'],['#F97316','Alerta de crisis'],['#A855F7','Tensión ciudadana'],['#60A5FA','Ventana de oportunidad']].map(([c,l]) => (
                  <div key={l} style={S.legendItem}><div style={S.dot(c)} />{l}</div>
                ))}
              </div>

              {/* Insights header */}
              <div style={S.insightsHeader}>
                <span style={S.insightsLabel}>INSIGHTS</span>
                <span style={{ fontSize:'10px', color:'rgba(255,255,255,0.3)' }}>27 señales</span>
              </div>

              {/* Filter tabs */}
              <div style={S.tabs}>
                {tabs.map(t => (
                  <button key={t} style={S.tab(tab===t)} onClick={() => setTab(t)}>{t}</button>
                ))}
              </div>

              {/* Insight rows */}
              {insights.map((ins, i) => (
                <div key={i} style={S.insightRow}>
                  <span style={{ fontSize:'10px', color:'rgba(255,255,255,0.3)', flexShrink:0 }}>{ins.time}</span>
                  <span style={{ color:'#14B8A6', fontSize:'12px', flexShrink:0 }}>↗</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:'11px', fontWeight:700, color:'#fff', letterSpacing:'0.05em', marginBottom:'2px' }}>{ins.title}</div>
                    <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.4)', lineHeight:1.5, fontFamily:"'Manrope', sans-serif", overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{ins.desc}</div>
                  </div>
                  <div style={S.score(ins.score)}>{ins.score}%</div>
                </div>
              ))}
            </div>

            {/* RIGHT PANEL */}
            <div style={S.rightPanel}>
              {/* Stats */}
              <div style={S.statsRow}>
                {[['61','OPORTUNIDADES ACTIVAS'],['4.2 sem','VENTANA PROMEDIO'],['17','ALTA PRIORIDAD']].map(([n,l],i) => (
                  <div key={l} style={{ ...S.statCell, borderRight: i<2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div style={S.statNum}>{n}</div>
                    <div style={S.statLabel}>{l} ▾</div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div style={S.chartsArea}>
                <div>
                  <div style={{ fontSize:'9px', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', marginBottom:'4px' }}>URGENCIA POR MÓDULO ▾</div>
                  <div style={{ width:'160px', height:'160px', margin:'0 auto' }}><RadarChart /></div>
                </div>
                <div>
                  <div style={{ fontSize:'9px', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', marginBottom:'8px' }}>OPORTUNIDADES ACTIVAS ▾</div>
                  <LineChart />
                </div>
              </div>

              {/* Missions split */}
              <div style={S.missionsSplit}>
                {/* Log */}
                <div style={S.logPanel}>
                  <div style={S.logHeader}>MISIONES — LOG</div>
                  {logEntries.map((e, i) => (
                    <div key={i} style={S.logEntry}>
                      <span style={S.logTime}>{e.time}</span>
                      <span style={{ color: e.accent ? '#14B8A6' : 'rgba(255,255,255,0.45)', lineHeight:1.5 }}>{e.text}</span>
                    </div>
                  ))}
                </div>

                {/* Mission cards */}
                <div style={{ overflow:'hidden' }}>
                  <div style={{ fontSize:'9px', letterSpacing:'0.15em', color:'rgba(255,255,255,0.35)', padding:'10px 10px 6px', textTransform:'uppercase' }}>
                    MISIONES&nbsp;&nbsp;
                    <span style={{ color:'#D72631' }}>● Crisis 3</span>&nbsp;
                    <span style={{ color:'#F59E0B' }}>● Electoral 3</span>
                  </div>
                  {missions.map((m, i) => (
                    <div key={i} style={S.mCard}>
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'4px' }}>
                        <span style={{ width:'8px', height:'8px', borderRadius:'2px', background:'rgba(255,255,255,0.15)', display:'inline-block' }} />
                        <span style={S.mTag}>{m.tag} · {m.date}</span>
                      </div>
                      <div style={S.mTitle}>{m.title}</div>
                      <div style={S.mMeta}>{m.meta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>{/* end body */}
        </div>
      </DashFadeIn>
    </div>
  );
}

Object.assign(window, { SignalsDashboard });
