
// Aura — Sections: FeatureTriage, LogoCloud, Testimonials, FinalCTA

function FeatureTriage() {
  const chips = ['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'];
  const categories = [
    { name: 'Priority',  count: 4,  color: '#ffffff',  items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'] },
    { name: 'Follow-up', count: 7,  color: '#e5e5e5',  items: ['Marcus — design review', 'Figma — comment thread'] },
    { name: 'Updates',   count: 18, color: '#a3a3a3',  items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'] },
    { name: 'Archived',  count: 13, color: '#525252',  items: ['Stripe payout · Newsletter · Receipts'] },
  ];

  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(80px,10vw,112px) 24px', position: 'relative', zIndex: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,64px)', alignItems: 'start' }}>

        {/* Left — copy */}
        <FadeIn delay={0} y={20}>
          <SectionEyebrow label="Triage" tag="AI-native" />
          <h2 style={{ marginTop: '20px', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.02, color: '#fff' }}>
            Clear your inbox<br />in a single pass.
          </h2>
          <p style={{ marginTop: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '28rem', lineHeight: 1.6 }}>
            Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {chips.map(chip => (
              <span key={chip} style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.7)',
                padding: '6px 12px', borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
              }}>{chip}</span>
            ))}
          </div>
        </FadeIn>

        {/* Right — triage card */}
        <FadeIn delay={0.15} y={20}>
          <div className="liquid-glass" style={{ borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Today · 42 messages triaged</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {categories.map(cat => (
                <div key={cat.name} className="liquid-glass" style={{ borderRadius: '10px', padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: cat.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>{cat.name}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{cat.count}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {cat.items.map((item, i) => (
                      <div key={i} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function LogoCloud() {
  const logos = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'];
  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(64px,8vw,80px) 24px', position: 'relative', zIndex: 10 }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)' }}>
          Trusted by the world's most thoughtful teams
        </span>
      </div>
      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '24px' }}>
        {logos.map((name, i) => (
          <FadeIn key={name} delay={i * 0.05} y={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{
              fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,0.5)', cursor: 'default', transition: 'color 0.2s',
            }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >{name}</span>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Aura gave our leadership team four hours of their week back. It reads like email from the future.",
      name: "Parker Wilf", role: "Group Product Manager", company: "MERCURY",
    },
    {
      quote: "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.",
      name: "Andrew von Rosenbach", role: "Senior Engineering Program Manager", company: "COHERE",
    },
    {
      quote: "Triage that actually understands context. Our team stopped dreading Monday morning inboxes.",
      name: "Mathies Christensen", role: "Engineering Manager", company: "LUNAR",
    },
  ];

  return (
    <div style={{
      maxWidth: '72rem', margin: '0 auto',
      padding: 'clamp(80px,10vw,112px) 24px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative', zIndex: 10,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {items.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20}>
            <figure className="liquid-glass" style={{ borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', margin: 0 }}>
              <blockquote style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, flex: 1, margin: 0 }}>
                "{t.quote}"
              </blockquote>
              <figcaption style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{t.role}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff', letterSpacing: '0.05em', marginTop: '4px' }}>{t.company}</div>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(80px,10vw,128px) 24px', position: 'relative', zIndex: 10 }}>
      <FadeIn y={20}>
        <div className="liquid-glass" style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', padding: 'clamp(64px,8vw,96px) 32px', textAlign: 'center' }}>
          {/* Glow overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.3,
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
          }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(36px,6vw,60px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.02, color: '#fff', margin: '0 0 24px 0' }}>
              Close the tabs.<br />Open your day.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '28rem', margin: '0 auto 40px', fontSize: '14px', lineHeight: 1.6 }}>
              Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <AppleButton />
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent', color: '#fff', fontSize: '14px', fontWeight: 500,
                padding: '12px 20px', cursor: 'pointer', transition: 'background 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                Talk to sales
                <ChevronRight style={{ width: '14px', height: '14px' }} />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

Object.assign(window, { FeatureTriage, LogoCloud, Testimonials, FinalCTA });
