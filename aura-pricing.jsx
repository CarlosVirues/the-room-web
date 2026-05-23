
// Aura — Pricing Section
const { useState } = React;

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      tier: 'Free',
      price: 'Free',
      desc: 'For creators taking their first steps with Forma.',
      features: [
        'Up to 3 projects in the cloud',
        'Image export up to 1080p',
        'Basic editing tools',
        'Free templates and icons',
        'Access via web and mobile app',
      ],
    },
    {
      tier: 'Standard',
      price: yearly ? '$99,99/y' : '$9,99/m',
      desc: 'For freelancers and small teams who need more freedom and flexibility.',
      features: [
        'Up to 50 projects in the cloud',
        'Export up to 4K',
        'Advanced editing toolkit',
        'Team collaboration (up to 5 members)',
        'Access to premium template library',
      ],
    },
    {
      tier: 'Pro',
      price: yearly ? '$199,99/y' : '$19,99/m',
      desc: 'For studios, agencies, and professional creators working with brands.',
      features: [
        'Unlimited projects',
        'Export up to 8K + animations',
        'AI-powered content generation tools',
        'Unlimited team members',
        'Brand customization',
      ],
      isPro: true,
    },
  ];

  const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="c3-pricing-section" style={{ position: 'relative', zIndex: 10 }}>
      {/* Pricing-scoped SVG noise filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <filter id="c3-noise-pricing">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch"/>
            <feComponentTransfer><feFuncA type="linear" slope="0.075"/></feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise"/>
            <feBlend in="SourceGraphic" in2="noise" mode="overlay"/>
          </filter>
        </defs>
      </svg>

      {/* Watermark */}
      <div className="c3-watermark-container">
        <div className="c3-watermark-main" style={{ filter: 'url(#c3-noise-pricing)' }}>
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>

      {/* Toggle */}
      <div className="c3-toggle-wrap">
        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>Yearly</span>
        <button
          className={`c3-toggle${yearly ? ' active' : ''}`}
          onClick={() => setYearly(y => !y)}
          aria-pressed={yearly}
        >
          <div className="c3-toggle-knob"/>
        </button>
      </div>

      {/* Cards */}
      <div className="c3-grid">
        {plans.map((plan) => (
          <div key={plan.tier} className={`c3-card${plan.isPro ? ' c3-card-pro' : ''}`}>
            <div className="c3-tier-small">{plan.tier}</div>
            <div className="c3-tier-large">{plan.price}</div>
            <div className="c3-desc">{plan.desc}</div>
            <ul className="c3-list" style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
              {plan.features.map((f, i) => (
                <li key={i}>
                  <span className="c3-check"><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="c3-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
