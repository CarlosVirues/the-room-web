
// Aura — Shared Primitives: Icons, FadeIn, LogoMark, AppleButton, SectionEyebrow
const { useState, useEffect, useRef } = React;

// ── Inline SVG Icons (no CDN dependency) ──────────────────────────────────────
function Svg({ className, style, viewBox = '0 0 24 24', children }) {
  return (
    <svg className={className} style={{ width: '1em', height: '1em', flexShrink: 0, ...style }}
      viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const ChevronRight = (p) => <Svg {...p}><path d="M9 18l6-6-6-6"/></Svg>;
const Menu = (p) => <Svg {...p}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></Svg>;
const XIcon = (p) => <Svg {...p}><path d="M18 6L6 18M6 6l12 12"/></Svg>;
const Search = (p) => <Svg {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></Svg>;
const Sparkles = (p) => <Svg {...p}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></Svg>;
const Paperclip = (p) => <Svg {...p}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></Svg>;
const Reply = (p) => <Svg {...p}><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></Svg>;
const Forward = (p) => <Svg {...p}><polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></Svg>;
const Archive = (p) => <Svg {...p}><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></Svg>;
const Trash2 = (p) => <Svg {...p}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></Svg>;
const MoreHorizontal = (p) => <Svg {...p}><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/></Svg>;
const Star = (p) => <Svg {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Svg>;
const Send = (p) => <Svg {...p}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Svg>;
const FileText = (p) => <Svg {...p}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></Svg>;
const InboxIcon = (p) => <Svg {...p}><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></Svg>;

// ── Scroll-triggered fade-in ───────────────────────────────────────────────────
function FadeIn({ children, delay = 0, y = 20, className = '', style: extraStyle = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}s`,
      ...extraStyle,
    }}>{children}</div>
  );
}

// ── Brand SVGs ────────────────────────────────────────────────────────────────
function AppleLogo({ className = '', style = {} }) {
  return (
    <svg className={className} style={{ width: '1em', height: '1em', ...style }} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );
}

function LogoMark({ className = '', style = {} }) {
  return (
    <svg className={className} style={{ width: '2rem', height: '2rem', ...style }} viewBox="0 0 256 256" fill="white">
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"/>
    </svg>
  );
}

// ── AppleButton ───────────────────────────────────────────────────────────────
function AppleButton({ label = 'Download Aura', full = false }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        borderRadius: '9999px', backgroundColor: hov ? 'rgba(255,255,255,0.9)' : '#fff',
        color: '#000', fontWeight: 500, fontSize: '14px',
        padding: '12px 20px', border: 'none', cursor: 'pointer',
        width: full ? '100%' : 'auto',
        transition: 'background 0.15s, transform 0.1s',
        fontFamily: 'Inter, system-ui, sans-serif',
        transform: 'scale(1)',
        whiteSpace: 'nowrap',
      }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <AppleLogo style={{ width: '16px', height: '16px' }} />
      {label}
      <ChevronRight style={{ width: '14px', height: '14px', transition: 'transform 0.2s', transform: hov ? 'translateX(1px)' : 'none' }} />
    </button>
  );
}

// ── SectionEyebrow ────────────────────────────────────────────────────────────
function SectionEyebrow({ label, tag }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff', flexShrink: 0, display: 'inline-block' }}></span>
      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{label}</span>
      {tag && (
        <span style={{ padding: '2px 8px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{tag}</span>
      )}
    </div>
  );
}

// ── Gradient style for "Revitalized" ──────────────────────────────────────────
const auraGradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
  display: 'block',
};

Object.assign(window, {
  FadeIn, AppleLogo, LogoMark, AppleButton, SectionEyebrow, auraGradientStyle,
  ChevronRight, Menu, XIcon, Search, Sparkles, Paperclip,
  Reply, Forward, Archive, Trash2, MoreHorizontal,
  Star, Send, FileText, InboxIcon,
});
