
// Aura — 3-Panel Inbox Mockup
const { useState } = React;

function InboxMockup() {
  const [activeMsg, setActiveMsg] = useState(0);

  const sidebarNav = [
    { Icon: InboxIcon, label: 'Inbox',   count: 12, active: true },
    { Icon: Star,      label: 'Starred', count: 3 },
    { Icon: Send,      label: 'Sent' },
    { Icon: FileText,  label: 'Drafts',  count: 2 },
    { Icon: Archive,   label: 'Archive' },
    { Icon: Trash2,    label: 'Trash' },
  ];

  const labels = [
    { name: 'Work',     color: '#00d2ff' },
    { name: 'Personal', color: '#A4F4FD' },
    { name: 'Travel',   color: '#f59e0b' },
    { name: 'Finance',  color: '#10b981' },
  ];

  const messages = [
    { sender: 'Linear',     subject: 'Weekly product digest',              preview: 'Your team shipped 23 issues this week...',              time: '9:41 AM',  unread: true },
    { sender: 'Sophia Chen',subject: 'Re: Q3 roadmap review',              preview: 'Thanks for sending the deck over. I had a few thoughts...', time: '8:12 AM',  unread: true },
    { sender: 'Figma',      subject: 'Marcus commented on your file',      preview: 'Love the new direction on the landing hero.',            time: 'Yesterday' },
    { sender: 'Stripe',     subject: 'Payout of $12,480.00 sent',          preview: 'Your payout is on its way to your bank...',             time: 'Yesterday' },
    { sender: 'Vercel',     subject: 'Deployment ready for aura-web',      preview: 'Preview is live at aura-web-g3f.vercel.app',            time: 'Mon' },
    { sender: 'GitHub',     subject: '[aura/core] PR #482 approved',       preview: 'david-lim approved your pull request.',                 time: 'Mon' },
  ];

  const readerActions = [Reply, Forward, Archive, Trash2];

  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '64px 24px', position: 'relative', zIndex: 10 }}>
      <FadeIn delay={0} y={40}>
        {/* Outer container */}
        <div style={{
          borderRadius: '16px', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(14,16,20,0.9)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        }}>

          {/* Title bar */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: c }} />
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Aura — Inbox</div>
          </div>

          {/* 3-column body */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 4fr 5fr', height: '520px' }}>

            {/* ── Sidebar ── */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
              {/* Compose */}
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', borderRadius: '8px', background: '#fff', color: '#000', fontSize: '12px', fontWeight: 600, padding: '8px 12px', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                <Sparkles style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                Compose with Aura
              </button>

              {/* Nav items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {sidebarNav.map(({ Icon, label, count, active }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '6px 10px', borderRadius: '6px', fontSize: '12px', cursor: 'default',
                    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                    transition: 'background 0.15s',
                  }}>
                    <Icon style={{ width: '14px', height: '14px' }} />
                    <span style={{ flex: 1 }}>{label}</span>
                    {count && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{count}</span>}
                  </div>
                ))}
              </div>

              {/* Labels */}
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px', paddingLeft: '10px' }}>Labels</div>
                {labels.map(l => (
                  <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 10px', fontSize: '12px', color: 'rgba(255,255,255,0.6)', cursor: 'default' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: l.color, flexShrink: 0 }} />
                    {l.name}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Message List ── */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
              {/* Search bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                <Search style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Search mail</span>
              </div>

              {/* Messages */}
              {messages.map((msg, i) => (
                <div key={i} onClick={() => setActiveMsg(i)} style={{
                  padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.04)',
                  cursor: 'pointer', transition: 'background 0.15s',
                  background: activeMsg === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: msg.unread ? 600 : 400, color: msg.unread ? '#fff' : 'rgba(255,255,255,0.7)' }}>{msg.sender}</span>
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{msg.time}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: msg.unread ? 500 : 400, color: msg.unread ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.subject}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msg.preview}</div>
                </div>
              ))}
            </div>

            {/* ── Reader ── */}
            <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
              {/* Toolbar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {readerActions.map((Icon, i) => (
                    <button key={i} style={{ width: '28px', height: '28px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'background 0.15s' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                      <Icon style={{ width: '14px', height: '14px' }} />
                    </button>
                  ))}
                </div>
                <button style={{ width: '28px', height: '28px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)' }}>
                  <MoreHorizontal style={{ width: '14px', height: '14px' }} />
                </button>
              </div>

              {/* Message header */}
              <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '12px', margin: '0 0 12px 0' }}>Weekly product digest</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #00d2ff, #0B2551)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>L</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Linear</span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>to me · 9:41 AM</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '9999px' }}>Work</span>
                </div>
              </div>

              {/* Email body */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* AI Summary */}
                <div className="liquid-glass" style={{ borderRadius: '10px', padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Sparkles style={{ width: '14px', height: '14px', color: '#A4F4FD' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Summary by Aura</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.</p>
                </div>

                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Hi team,</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>Let me know if you would like a deeper breakdown by project or contributor.</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>— The Linear team</p>

                {/* Attachment */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '8px 12px' }}>
                  <Paperclip style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.5)' }} />
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>digest-may-6.pdf</span>
                </div>
              </div>
            </div>

          </div>{/* end grid */}
        </div>
      </FadeIn>
    </div>
  );
}

Object.assign(window, { InboxMockup });
