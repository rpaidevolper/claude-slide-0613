import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { ImagePlaceholder, useSlidePageNumber } from '@open-slide/core';
import yinAvatar from '@assets/rpai/yin-avatar.webp';
import qrWebsite from '@assets/rpai/qr-website.png';
import qrInstagram from '@assets/rpai/qr-instagram.png';
import appsScriptIntro from './assets/apps-script-intro.png';
import hands1EditorLog from './assets/hands1-editor-log.png';
import authNeed from './assets/auth-1-need.png';
import authUnverified from './assets/auth-2-unverified.png';
import authConfirm from './assets/auth-3-confirm.png';
import hands2WriteSheet from './assets/hands2-write-sheet.png';
import triggerNewDialog from './assets/trigger-new-dialog.png';
import hands4FormPreview from './assets/hands4-form-preview.png';
import sec3FormPreview from './assets/sec3-form-preview.png';
import sec3GeminiIntro from './assets/sec3-gemini-intro.png';

// ─── Design System ───────────────────────────────────────────────────────────
export const design: DesignSystem = {
  palette: { bg: '#1565c0', text: '#ffffff', accent: '#00e5c0' },
  fonts: {
    display: '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif',
    body:    '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif',
  },
  typeScale: { hero: 150, body: 54 },
  radius: 8,
};

// ─── Tokens ──────────────────────────────────────────────────────────────────
const GRAD  = 'linear-gradient(135deg,#1565c0 0%,#0288d1 45%,#00acc1 100%)';
const teal  = '#00e5c0';
const white = '#ffffff';
const cardBg     = 'rgba(0,15,55,0.70)';   // general dark card
const cardBgTeal = 'rgba(0,45,65,0.75)';   // teal-accent card
const cardBgRed  = 'rgba(70,0,0,0.70)';    // warning/bad card
const pill       = 'rgba(255,255,255,0.18)';
const F = '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif';
const mono = '"JetBrains Mono","Menlo","Consolas",monospace';

const fill: CSSProperties = {
  width: '100%', height: '100%',
  fontFamily: F, position: 'relative', overflow: 'hidden',
};

// ─── Decorative SVGs ─────────────────────────────────────────────────────────
const CircuitDeco = () => (
  <svg width="240" height="220" viewBox="0 0 240 220" fill="none"
    style={{ position: 'absolute', top: 0, left: 0, opacity: 0.22, pointerEvents: 'none' }}>
    <line x1="0" y1="70" x2="90" y2="70" stroke="white" strokeWidth="1.5"/>
    <line x1="90" y1="70" x2="90" y2="0" stroke="white" strokeWidth="1.5"/>
    <circle cx="90" cy="70" r="5" fill="white"/>
    <circle cx="5" cy="70" r="3" fill="white"/>
    <line x1="40" y1="130" x2="150" y2="130" stroke="white" strokeWidth="1.5"/>
    <line x1="150" y1="130" x2="150" y2="50" stroke="white" strokeWidth="1.5"/>
    <circle cx="150" cy="130" r="5" fill="white"/>
    <circle cx="40" cy="130" r="3" fill="white"/>
    <line x1="70" y1="180" x2="70" y2="30" stroke="white" strokeWidth="1"/>
    <circle cx="70" cy="30" r="3.5" fill="none" stroke="white" strokeWidth="1.5"/>
    <circle cx="70" cy="180" r="3.5" fill="none" stroke="white" strokeWidth="1.5"/>
    <line x1="200" y1="40" x2="240" y2="40" stroke="white" strokeWidth="1"/>
    <circle cx="200" cy="40" r="3" fill="white"/>
    <line x1="180" y1="0" x2="180" y2="80" stroke="white" strokeWidth="1"/>
    <circle cx="180" cy="80" r="3" fill="white"/>
  </svg>
);

const RingDeco = () => (
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none"
    style={{ position: 'absolute', top: 0, right: 0, opacity: 0.2, pointerEvents: 'none' }}>
    <circle cx="220" cy="0" r="70"  stroke="white" strokeWidth="1.5"/>
    <circle cx="220" cy="0" r="110" stroke="white" strokeWidth="1.5"/>
    <circle cx="220" cy="0" r="150" stroke="white" strokeWidth="1.5"/>
    <circle cx="220" cy="0" r="190" stroke="white" strokeWidth="1"/>
  </svg>
);

const DotGrid = ({ side }: { side: 'left' | 'right' }) => (
  <svg width="130" height="90" fill="none"
    style={{ position: 'absolute', bottom: 70, [side]: 120, opacity: 0.28, pointerEvents: 'none' }}>
    {[10, 30, 50, 70].map((cy) =>
      [10, 30, 50, 70, 90, 110].map((cx) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="white" />
      )),
    )}
  </svg>
);

// ─── Footer / BG / Content area ──────────────────────────────────────────────
const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{
      position: 'absolute', bottom: 20, left: 0, right: 0, height: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 120px', borderTop: '1px solid rgba(255,255,255,0.22)',
    }}>
      <span style={{ fontSize: 30, color: white, fontWeight: 600, letterSpacing: '0.06em', opacity: 0.85 }}>
        RPAI 數位優化器
      </span>
      <span style={{ fontSize: 30, color: white, opacity: 0.85 }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const BG = ({ children }: { children: ReactNode }) => (
  <div style={{ ...fill, background: GRAD }}>
    <CircuitDeco /><RingDeco /><DotGrid side="left" /><DotGrid side="right" />
    {children}
    <Footer />
  </div>
);

const CA = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{
    position: 'absolute', top: 80, left: 120, right: 120, bottom: 92,
    display: 'flex', flexDirection: 'column', ...style,
  }}>
    {children}
  </div>
);

// ─── Primitives ──────────────────────────────────────────────────────────────
const Eyebrow = ({ text }: { text: string }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    background: 'rgba(0,229,192,0.18)', border: '1px solid rgba(0,229,192,0.5)',
    borderRadius: 6, padding: '6px 20px', marginBottom: 18, alignSelf: 'flex-start',
  }}>
    <span style={{ fontSize: 30, color: teal, fontWeight: 700, letterSpacing: '0.06em' }}>{text}</span>
  </div>
);

const H2 = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <h2 style={{ fontSize: 108, fontWeight: 800, color: white, margin: 0, lineHeight: 1.1, ...style }}>
    {children}
  </h2>
);

const TealBar = () => (
  <div style={{ height: 4, width: 90, background: teal, borderRadius: 2, margin: '18px 0 22px' }} />
);

const Bullet = ({ n, title, body }: { n?: string; title: string; body?: string }) => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 16 }}>
    {n && (
      <div style={{
        width: 54, height: 54, borderRadius: '50%', flexShrink: 0,
        background: pill, color: white,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 28, fontWeight: 800,
      }}>{n}</div>
    )}
    <div style={{ paddingTop: n ? 4 : 0 }}>
      <span style={{ fontSize: 54, fontWeight: 700, color: white, lineHeight: 1.25 }}>{title}</span>
      {body && <div style={{ fontSize: 42, color: white, lineHeight: 1.45, marginTop: 4 }}>{body}</div>}
    </div>
  </div>
);

const DotBullet = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginBottom: 18 }}>
    <div style={{ width: 13, height: 13, borderRadius: '50%', background: teal, flexShrink: 0 }}/>
    <span style={{ fontSize: 54, fontWeight: 500, color: white, lineHeight: 1.35 }}>{text}</span>
  </div>
);

const KeyInsight = ({ text }: { text: string }) => (
  <div style={{ marginTop: 'auto', paddingTop: 22, alignSelf: 'flex-start' }}>
    <span style={{ fontSize: 42, fontWeight: 700, color: teal }}>{text}</span>
  </div>
);

// ─── Code block (monospace glass card; muted `//` comments) ───────────────────
const Code = ({ code, size = 24, note }: { code: string; size?: number; note?: string }) => {
  const lines = code.replace(/^\n+/, '').replace(/\s+$/, '').split('\n');
  return (
    <div style={{
      background: 'rgba(0,10,40,0.82)', border: '1px solid rgba(0,229,192,0.35)',
      borderRadius: 12, padding: '22px 30px',
      fontFamily: mono, fontSize: size, lineHeight: 1.4, color: white,
      whiteSpace: 'pre-wrap', overflow: 'hidden',
    }}>
      {lines.map((line, i) => {
        const idx = line.indexOf('//');
        const codePart = idx >= 0 ? line.slice(0, idx) : line;
        const comment = idx >= 0 ? line.slice(idx) : '';
        return (
          <div key={i} style={{ minHeight: size * 0.6 }}>
            <span>{codePart === '' && comment === '' ? ' ' : codePart}</span>
            {comment && <span style={{ color: 'rgba(255,255,255,0.45)' }}>{comment}</span>}
          </div>
        );
      })}
      {note && (
        <div style={{ color: teal, marginTop: 14, fontSize: size - 2, fontFamily: F, fontWeight: 600 }}>
          {note}
        </div>
      )}
    </div>
  );
};

// ─── Task strip (動手 task description above a code block) ────────────────────
const TaskStrip = ({ tag, text }: { tag: string; text: string }) => (
  <div style={{
    display: 'flex', gap: 18, alignItems: 'center', marginBottom: 18,
    background: cardBgTeal, border: '1px solid rgba(0,229,192,0.4)',
    borderRadius: 10, padding: '14px 24px',
  }}>
    <span style={{
      fontSize: 26, fontWeight: 800, color: '#0a1c46', background: teal,
      borderRadius: 6, padding: '4px 16px', flexShrink: 0, letterSpacing: '0.04em',
    }}>{tag}</span>
    <span style={{ fontSize: 32, color: white, fontWeight: 600, lineHeight: 1.35 }}>{text}</span>
  </div>
);

// ─── Section divider (環節 variant) ──────────────────────────────────────────
const SecDiv = ({ ghost, kicker, title, sub }: { ghost: string; kicker: string; title: string; sub: string }) => (
  <BG>
    <div style={{
      position: 'absolute', right: 80, top: '50%', transform: 'translateY(-55%)',
      fontSize: 300, fontWeight: 900, color: 'rgba(255,255,255,0.05)',
      lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      fontFamily: F, letterSpacing: '-0.04em',
    }}>{ghost}</div>
    <div style={{
      position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 160px',
    }}>
      <div style={{ fontSize: 39, color: teal, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 24 }}>
        {kicker}
      </div>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08 }}>{title}</h1>
      <div style={{ height: 5, width: 110, background: teal, borderRadius: 2, margin: '26px 0' }}/>
      <p style={{ fontSize: 60, color: white, margin: 0, fontWeight: 500 }}>{sub}</p>
    </div>
  </BG>
);

// ─── Break page ──────────────────────────────────────────────────────────────
const Break = ({ title, sub, back }: { title: string; sub: string; back: string }) => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <div style={{ fontSize: 36, color: teal, fontWeight: 700, letterSpacing: '0.24em' }}>BREAK</div>
        <div style={{ fontSize: 150, fontWeight: 900, color: white, lineHeight: 1.05 }}>{title}</div>
        <div style={{ height: 5, width: 120, background: teal, borderRadius: 2, margin: '14px 0 24px' }} />
        <div style={{ fontSize: 48, color: white, fontWeight: 600, lineHeight: 1.4, maxWidth: 1300 }}>{sub}</div>
        <div style={{
          marginTop: 28, fontSize: 40, fontWeight: 800, color: teal,
          background: cardBgTeal, border: '1px solid rgba(0,229,192,0.5)',
          borderRadius: 999, padding: '12px 44px',
        }}>{back}</div>
      </div>
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// COVER + 品牌開場
// ════════════════════════════════════════════════════════════════════════════

// ── 01 封面 ───────────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
      <div style={{ fontSize: 33, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 28 }}>
        RPAI 數位優化器
      </div>
      <h1 style={{ fontSize: 130, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
        Google 工具行政力維新
      </h1>
      <p style={{ fontSize: 60, fontWeight: 500, color: white, margin: '24px 0 40px', lineHeight: 1.25 }}>
        Session2：報名<span style={{ color: teal, fontWeight: 700 }}>通知流程自動化</span>
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 30 }}>
        {['Google Apps Script', 'Gmail', '試算表', '表單'].map((t) => (
          <span key={t} style={{
            fontSize: 30, color: white, fontWeight: 600,
            background: pill, border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: 999, padding: '8px 26px',
          }}>{t}</span>
        ))}
      </div>
      <div style={{ fontSize: 32, color: white, opacity: 0.85, fontWeight: 500 }}>
        講師：Yin　·　RPAI 數位優化器
      </div>
    </div>
  </BG>
);

// ── 02 主辦單位 ──────────────────────────────────────────────────────────────
const Organizer: Page = () => (
  <BG>
    <CA>
      <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 60, flex: 1, alignItems: 'center' }}>
        <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.05, letterSpacing: '0.02em' }}>
          主辦<br/>單位
        </div>
        <div>
          <div style={{ fontSize: 60, fontWeight: 800, color: teal, marginBottom: 8 }}>RPAI 數位優化器</div>
          <div style={{ fontSize: 40, fontWeight: 600, color: teal, marginBottom: 26, letterSpacing: '0.02em' }}>Digital Transformer</div>
          <TealBar />
          <p style={{ fontSize: 38, color: white, lineHeight: 1.55, margin: '0 0 22px' }}>
            以機器人流程自動化（RPA）結合人工智慧（AI）為主題的中文社群，
            分享自動化工具、低程式碼開發（low-code）的學習資源、應用實例和最新發展趨勢。
          </p>
          <p style={{ fontSize: 38, color: white, lineHeight: 1.55, margin: 0 }}>
            團隊成員來自各行各業，具備不同的流程優化技能，立志讓不會寫程式的工作者，
            也能透過自動化工具<span style={{ color: teal, fontWeight: 700 }}>提升工作效率與價值</span>。
          </p>
          <div style={{ display: 'flex', gap: 60, marginTop: 42, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, lineHeight: '0.8', letterSpacing: '1.1px' }}>
              <img src={qrWebsite} alt="官方網站 QR code" style={{ width: 320, height: 320, objectFit: 'contain' }}/>
              <span style={{ fontSize: 32, color: white, fontWeight: 700 }}>官方網站</span>
              <span style={{ fontSize: 24, color: white, opacity: 0.75, lineHeight: '0.8' }}>portaly.cc/RPAITW</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, lineHeight: '0.8', letterSpacing: '3.1px', fontSize: '24px' }}>
              <img src={qrInstagram} alt="Instagram QR code" style={{ width: 320, height: 320, objectFit: 'contain' }}/>
              <span style={{ fontSize: 32, color: white, fontWeight: 700 }}>Instagram</span>
              <span style={{ fontSize: 24, color: white, opacity: 0.75, lineHeight: '1.15' }}>@rpai_digitaltransformer</span>
            </div>
          </div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 03 執行專案 ──────────────────────────────────────────────────────────────
const Projects: Page = () => {
  const Callout = ({
    pos, title, lines, lineDir,
  }: {
    pos: CSSProperties;
    title: string;
    lines: string[];
    lineDir: 'tl' | 'tr' | 'bl' | 'br';
  }) => {
    const dashColor = 'rgba(255,255,255,0.55)';
    const isTop = lineDir.startsWith('t');
    const isLeft = lineDir.endsWith('l');
    return (
      <div style={{ position: 'absolute', width: 540, ...pos }}>
        <div style={{
          position: 'absolute', left: 0, right: 0,
          top: isTop ? 'auto' : -2, bottom: isTop ? -2 : 'auto',
          height: 2, borderTop: `2px dashed ${dashColor}`,
        }}/>
        <div style={{
          position: 'absolute',
          [isLeft ? 'right' : 'left']: 0,
          [isTop ? 'bottom' : 'top']: -34,
          width: 2, height: 34, borderLeft: `2px dashed ${dashColor}`,
        } as CSSProperties}/>
        <div style={{
          fontSize: 38, fontWeight: 800, color: teal,
          marginTop: isTop ? 0 : 14, marginBottom: isTop ? 14 : 0, letterSpacing: '0.02em',
        }}>{title}</div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {lines.map((t) => (
            <li key={t} style={{ fontSize: '40px', color: white, lineHeight: 1.25, display: 'flex', gap: 10 }}>
              <span style={{ color: teal }}>·</span><span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const RING_SIZE = 580;
  const cx = RING_SIZE / 2, cy = RING_SIZE / 2;
  const rOuter = 270, rInner = 105;
  const arc = (startDeg: number, endDeg: number) => {
    const toXY = (deg: number, r: number) => {
      const rad = (deg - 90) * Math.PI / 180;
      return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
    };
    const [x1, y1] = toXY(startDeg, rOuter);
    const [x2, y2] = toXY(endDeg, rOuter);
    const [x3, y3] = toXY(endDeg, rInner);
    const [x4, y4] = toXY(startDeg, rInner);
    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
  };
  const labelXY = (deg: number) => {
    const r = (rOuter + rInner) / 2;
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };

  const quads = [
    { start: -45, end:  45, label: '自媒體內容', fill: '#7eb8e6' },
    { start:  45, end: 135, label: '講座課程',   fill: '#5e9bd1' },
    { start: 135, end: 225, label: '導入開發',   fill: '#4583bd' },
    { start: 225, end: 315, label: '諮詢陪跑',   fill: '#6ba9dc' },
  ];

  return (
    <BG>
      <CA>
        <H2>執行專案</H2>
        <TealBar />
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: RING_SIZE, height: RING_SIZE }}>
            <svg width={RING_SIZE} height={RING_SIZE} viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
              {quads.map((q) => (
                <path key={q.label} d={arc(q.start, q.end)} fill={q.fill} stroke="rgba(255,255,255,0.15)" strokeWidth={2}/>
              ))}
              <circle cx={cx} cy={cy} r={rInner - 8} fill="rgba(10,30,80,0.85)" stroke="rgba(255,255,255,0.2)" strokeWidth={2}/>
              {quads.map((q) => {
                const mid = (q.start + q.end) / 2;
                const [lx, ly] = labelXY(mid);
                return (
                  <text key={q.label} x={lx} y={ly}
                    textAnchor="middle" dominantBaseline="central"
                    fill="#0a1c46" fontSize={42} fontWeight={800}
                    style={{ fontFamily: F, letterSpacing: '0.04em' }}>
                    {q.label}
                  </text>
                );
              })}
            </svg>
          </div>
          <Callout pos={{ top: 10, left: 0 }} title="自媒體內容" lineDir="tl"
            lines={['官方網站超過 100+ 自動化相關議題文章', 'IG、FB 定期分享聚會、訪談內容']} />
          <Callout pos={{ top: 10, right: 0 }} title="講座課程" lineDir="tr"
            lines={['每月定期線上線下分享活動', '企業、大專院校講座']} />
          <Callout pos={{ bottom: 10, left: 0 }} title="諮詢陪跑" lineDir="bl"
            lines={['手把手教學功能 & 帶專案', '小型店家、專業工作者']} />
          <Callout pos={{ bottom: 10, right: 0 }} title="導入開發" lineDir="br"
            lines={['協助金融、科技、長照產業開發流程', '自動化工具：Power Automate、UiPath etc.']} />
        </div>
      </CA>
    </BG>
  );
};

// ── 04 講師介紹 (Yin) ────────────────────────────────────────────────────────
const Instructor: Page = () => {
  const projects = [
    '2026_科技業_企業雲端運算資源管理與平台化建置案',
    '2025_科技業_企業開發者平台資安檢核與流程自動化（AI 導入基礎）建置案',
    '2024_餐飲服務業_門市訂單與營運流程優化數位轉型案',
    '2023_金融業_結算交割系統數位轉型專案',
    '2023_政府業_藥政管理電子化與流程數位化平台建置案',
    '2022_金融業_個人金融服務平台優化與數位轉型',
    '2022_金融業_開戶流程無紙化與自動化轉型案',
    '2021_金融業_保經管理流程數位轉型專案',
    '2020_醫藥業_影音簽署與無紙化流程轉型',
  ];
  return (
    <BG>
      <CA>
        <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: 60, flex: 1, alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 800, color: teal, letterSpacing: '0.04em', marginBottom: 24 }}>RPAI 數位優化器</div>
            <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.02, letterSpacing: '0.02em' }}>講師<br/>介紹</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignSelf: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 50, alignItems: 'center' }}>
              <div style={{ width: 360, height: 360, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', overflow: 'hidden' }}>
                <img src={yinAvatar} alt="Yin" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontSize: 100, fontWeight: 900, color: teal, lineHeight: 1, marginBottom: 18 }}>Yin</div>
                <DotBullet text="科技業軟體工程師" />
                <DotBullet text="自動化工具講師" />
                <DotBullet text="自動化導入技術顧問" />
              </div>
            </div>
            <div style={{ borderRadius: 12, padding: '20px 28px' }}>
              {projects.map((p) => (
                <div key={p} style={{ fontSize: 26, color: white, lineHeight: 1.6, letterSpacing: '0.01em' }}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </CA>
    </BG>
  );
};

// ── 05 我們相信 ──────────────────────────────────────────────────────────────
const Believe: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="我們相信" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 30 }}>
          <span style={{ fontSize: 110, color: teal, fontWeight: 900, lineHeight: 1, fontFamily: 'Georgia, serif' }}>“</span>
          <div style={{ flex: 1, height: 2, background: teal, opacity: 0.7 }}/>
        </div>
        <p style={{ fontSize: 100, fontWeight: 700, color: white, margin: 0, lineHeight: 1.35, letterSpacing: '0.02em' }}>
          在 AI 時代，<br/>
          人人都可以是<br/>
          自己流程的<span style={{ color: teal }}>優化師</span>。
        </p>
      </div>
    </CA>
  </BG>
);

// ── 06 今日課程地圖 ──────────────────────────────────────────────────────────
const TodayMap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="今日地圖" />
      <H2>今天，我們會做到這三件事</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        <Bullet n="1" title="學會用 Google App Script 撰寫程式"
          body="理解基礎：寫幾行字，讓它印出訊息、把文字寫進試算表" />
        <Bullet n="2" title="只要有人報名成功，系統自動寄出信件"
          body="運行自動化：從資料抓內容，表單一送出就自動回信" />
        <Bullet n="3" title="指定時間一到，信件自動分類寄出"
          body="設定排程：讓系統在你設定的時間，自動寄出信件通知。" />
      </div>
      <KeyInsight text="原來撰寫程式沒有想像中困難" />
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 環節一｜認識 Apps Script，第一次寫進試算表
// ════════════════════════════════════════════════════════════════════════════

// ── 07 段落分頁 ───────────────────────────────────────────────────────────────
const Sec1: Page = () => (
  <SecDiv ghost="01" kicker="環節 一" title="認識 Google Apps Script" sub="第一次，讓程式聽你的話" />
);

// ── 08 上節回顧 ──────────────────────────────────────────────────────────────
const Recap1: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="上節回顧" />
      <H2>上節回顧</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        <Bullet n="1" title="使用 Google Form 製作活動報名表" />
        <Bullet n="2" title="使用 Google Sheet 搭配公式分析並快速整理資料" />
        <Bullet n="3" title="使用 Google Sheet 製作儀表板" />
      </div>
    </CA>
  </BG>
);

// ── 09 Apps Script 是什麼 ─────────────────────────────────────────────────────
const WhatIsAS: Page = () => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        background: white, borderRadius: 20, padding: '48px 56px',
        boxShadow: '0 28px 70px rgba(0,0,0,0.4)', display: 'flex',
      }}>
        <img src={appsScriptIntro} alt="Google Apps Script：使用簡單的程式碼即可自動化及擴充 Google Workspace 的功能"
          style={{ display: 'block', width: 1480, height: 'auto', objectFit: 'contain' }} />
      </div>
    </CA>
  </BG>
);

// ── 09b 實際使用範例 ──────────────────────────────────────────────────────────
const UsageExamples: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="實際應用" />
      <H2>實際上，它能幫你做這些事</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
        <DotBullet text="報名表一送出，自動寄出錄取／候補通知" />
        <DotBullet text="每天定時把試算表整理成摘要信，自動寄出" />
        <DotBullet text="收到表單回覆，自動分類、標記並寫回試算表" />
      </div>
      <KeyInsight text="共同點：重複、有規則的事 → 交給 Apps Script 自動完成" />
    </CA>
  </BG>
);

// ── 10 打開 Apps Script 介面 ─────────────────────────────────────────────────
const OpenAS: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="操作示範 · 約 3 分鐘" />
      <H2>第一次打開 Apps Script</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <Bullet n="1" title="打開一份新的試算表" />
        <Bullet n="2" title="上方選單 →「擴充功能」" />
        <Bullet n="3" title="點「Apps Script」→ 程式編輯器在新分頁打開" />
      </div>
      <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '22px 30px', marginBottom: 8 }}>
        <div style={{ fontSize: 32, color: white, lineHeight: 1.5 }}>
          介面只看三塊：<span style={{ color: teal, fontWeight: 700 }}>左側選單</span>、
          <span style={{ color: teal, fontWeight: 700 }}>中間程式碼區</span>、
          <span style={{ color: teal, fontWeight: 700 }}>下方執行紀錄</span>。記住上方「執行」按鈕的位置。
        </div>
      </div>
      <KeyInsight text="路徑：擴充功能 → Apps Script" />
    </CA>
  </BG>
);

// ── 11 變數與 Logger ──────────────────────────────────────────────────────────
const VarLogger: Page = () => (
  <BG>
    <CA>
      <H2>兩個今天會一直用到的詞</H2>
      <TealBar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56, flex: 1, marginTop: 10, justifyContent: 'center' }}>
        <div>
          <div style={{ fontSize: 76, fontWeight: 900, color: teal, marginBottom: 16, fontFamily: F }}>變數</div>
          <div style={{ paddingLeft: 28, fontSize: 44, color: white, lineHeight: 1.5 }}>
            像「便利貼」或「盒子」：先把一個值貼上名字，後面要用就喊它的名字。
          </div>
          <div style={{ paddingLeft: 28, marginTop: 16, fontFamily: mono, fontSize: 36, color: teal }}>姓名 = '王小明'</div>
        </div>
        <div>
          <div style={{ fontSize: 76, fontWeight: 900, color: teal, marginBottom: 16, fontFamily: F }}>log</div>
          <div style={{ paddingLeft: 28, fontSize: 44, color: white, lineHeight: 1.5 }}>
            就是「執行紀錄」：讓程式把某個值顯示在下方執行紀錄，方便確認對不對。
          </div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 12 【動手1】第一次執行＋授權 ──────────────────────────────────────────────
const Hands1: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 84 }}>【動手 1】讓程式碼跟你打招呼</H2>
      <TealBar />
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
        <div style={{
          background: white, borderRadius: 16, padding: 20, overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)', maxHeight: '100%', display: 'flex',
        }}>
          <img src={hands1EditorLog} alt="Apps Script 編輯器執行 myFunction，執行記錄印出 helo: Yin"
            style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: 1360, height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
      <TaskStrip tag="動手" text="按上方「執行」→ 看下方執行紀錄跳出訊息" />
    </CA>
  </BG>
);

// ── 13 剛剛那段做了兩件事 ─────────────────────────────────────────────────────
const TwoThings: Page = () => (
  <BG>
    <CA>
      <H2>剛剛那段，其實做了兩件事</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        <Bullet n="1" title="印出來給你看"
          body="Logger.log(...)：訊息只出現在「執行紀錄」，是給你檢查用的，不會改到東西。" />
        <Bullet n="2" title="真的寫進表格"
          body="getRange('A1').setValue(...)：回到試算表看 A1，文字真的進去了。" />
      </div>
      <KeyInsight text="差別：一個是「講給你聽」，一個是「真的動手改你的試算表」" />
    </CA>
  </BG>
);

// ── 14 【動手2】透過程式把資料寫進 Google Sheet ──────────────────────────────
const Hands2: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 84 }}>【動手 2】讓程式把資料寫進 Sheet</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
        <div style={{
          background: white, borderRadius: 16, padding: 18, overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)', maxHeight: '100%', display: 'flex',
        }}>
          <img src={hands2WriteSheet} alt="Apps Script 執行寫入程式，試算表 A1 出現「我成功把文字寫進來了！」"
            style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: 1520, height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
      <TaskStrip tag="動手" text="① 撰寫程式碼 → ② 按「執行」→ ③ 切回試算表，看 A1 真的多了文字" />
    </CA>
  </BG>
);

// ── 15 常見狀況排除 ──────────────────────────────────────────────────────────
const Troubleshoot: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="保命頁 · 機動緩衝" />
      <H2>卡住了？通常是這三種</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        <Bullet n="A" title="紅字錯誤"
          body="多半是引號、括號漏掉或貼到一半 —— 重貼一次範本最快。" />
        <Bullet n="B" title="跑了沒反應"
          body="確認上方選的是對的函式名稱，再按執行。" />
        <Bullet n="C" title="貼錯地方"
          body="程式碼要貼在 function { } 的範圍裡，別貼到外面。" />
      </div>
      <KeyInsight text="出錯不是你的問題，是程式很「龜毛」—— 少一個引號就抱怨" />
    </CA>
  </BG>
);

// ── 16 環節一小結 ─────────────────────────────────────────────────────────────
const Sec1Recap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節一 · 小結" />
      <H2>這一段，你已經會了</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
        <Bullet n="1" title="會打開 Apps Script" body="認得「執行」按鈕和執行紀錄。" />
        <Bullet n="2" title="會用變數" body="把值放進盒子，改盒子就改結果。" />
        <Bullet n="3" title="會讓程式動手" body="把文字寫進指定的格子。" />
      </div>
      <KeyInsight text="下一段，我們讓它做更有感的事 —— 真的寄一封信出去" />
    </CA>
  </BG>
);

// ── 17 休息① ─────────────────────────────────────────────────────────────────
const Break1: Page = () => (
  <Break title="休息 10 分鐘" sub="等等：讓程式幫你寄信 —— 真的會寄到信箱喔" back="10:00 回來" />
);

// ════════════════════════════════════════════════════════════════════════════
// 環節二｜Gmail 自動寄信 ＋ 表單觸發
// ════════════════════════════════════════════════════════════════════════════

// ── 18 段落分頁 ───────────────────────────────────────────────────────────────
const Sec2: Page = () => (
  <SecDiv ghost="02" kicker="環節 二" title="解鎖Google工具自動化" sub="從「取得表單資料」到「自動寄信」" />
);

// ── 解鎖一：開場 ──────────────────────────────────────────────────────────────
const Unlock1: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center' }}>
      <Eyebrow text="解鎖 一" />
      <H2>從表單取得資料，<br />寄信給特定對象</H2>
      <TealBar />
    </CA>
  </BG>
);

// ── 解鎖二：開場 ──────────────────────────────────────────────────────────────
const Unlock2: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center' }}>
      <Eyebrow text="解鎖 二" />
      <H2 style={{ fontSize: 88 }}>報名表一送出，<br />就自動寄一封確認信給填寫的人</H2>
      <TealBar />
    </CA>
  </BG>
);

// ── 19 抓 → 組 → 寄 ───────────────────────────────────────────────────────────
const MailThree: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="描述任務" />
      <H2>動手前，先拆解任務</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, flex: 1, marginTop: 14 }}>
        {[
          { n: '抓', t: '抓資料', d: '從試算表上面，把姓名、內容讀出來。' },
          { n: '組', t: '組信件', d: '把讀到的值，組成我們信件要的主旨和內容。' },
          { n: '寄', t: '寄出', d: '把這封信寄給收件人。' },
        ].map((c) => (
          <div key={c.n} style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 14, padding: '30px 30px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 72, fontWeight: 900, color: teal, lineHeight: 1 }}>{c.n}</div>
            <div style={{ fontSize: 38, fontWeight: 700, color: white, opacity: 0.9, margin: '14px 0 18px' }}>{c.t}</div>
            <div style={{ fontSize: 34, color: white, lineHeight: 1.45 }}>{c.d}</div>
          </div>
        ))}
      </div>
      <KeyInsight text="從試算表抓資料 → 組成信件主旨與內容 → 寄出" />
    </CA>
  </BG>
);

// ── 20 【動手3】寄出自我介紹信 ────────────────────────────────────────────────
const Hands3: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 84 }}>【動手 3】寄一封自我介紹給講師</H2>
      <TealBar />
      <Code size={30} code={`
function 寄出自我介紹() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const 姓名 = 試算表.getRange('A2').getValue();      // 你的名字（填在 A2）
  const 自我介紹 = 試算表.getRange('B2').getValue();  // 你寫的一句話（填在 B2）

  const 講師信箱 = 'rpaidevolper@gmail.com';   // ← 講師收件信箱
  const 主旨 = \`自我介紹 - 來自 \${姓名}\`;
  const 內容 = \`老師好，我是 \${姓名}。\\n\\n\${自我介紹}\`;

  GmailApp.sendEmail(講師信箱, 主旨, 內容);
}`} note="" />

    <KeyInsight text="試算表 A2 填姓名、B2 填一句自我介紹 → 貼上程式碼 → 執行 → 送出信件" />

    </CA>

  </BG>
);

// ── 20b 第一次寄信的授權流程 ──────────────────────────────────────────────────
const AuthFlow: Page = () => {
  const Step = ({ n, label, src, alt }: { n: string; label: string; src: string; alt: string }) => (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 46, height: 46, borderRadius: '50%', background: pill, color: white, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800,
        }}>{n}</div>
        <span style={{ fontSize: 30, fontWeight: 700, color: teal, lineHeight: 1.2 }}>{label}</span>
      </div>
      <div style={{
        flex: 1, background: white, borderRadius: 12, padding: 14, overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
      }}>
        <img src={src} alt={alt} style={{ display: 'block', maxWidth: '100%', maxHeight: 470, width: 'auto', height: 'auto', objectFit: 'contain' }} />
      </div>
    </div>
  );
  return (
    <BG>
      <CA>
        <Eyebrow text="第一次執行" />
        <H2>跳出「授權」怎麼辦？</H2>
        <TealBar />
        <div style={{ display: 'flex', gap: 24, flex: 1, marginTop: 8, alignItems: 'stretch' }}>
          <Step n="1" label="需要授權 → 審查權限" src={authNeed} alt="需要授權對話框，點審查權限" />
          <Step n="2" label="未經驗證 → 進階 → 前往" src={authUnverified} alt="這個應用程式未經 Google 驗證，點進階後前往專案" />
          <Step n="3" label="確認信任 → 繼續" src={authConfirm} alt="確認信任應用程式並點繼續" />
        </div>
        <KeyInsight text="只需要授權一次，後續就不會再出現" />
      </CA>
    </BG>
  );
};

// ── 21 複習：表單和試算表 ─────────────────────────────────────────────────────
const FormReview: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="複習" />
      <H2>表單和試算表的關係</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1, marginTop: 8 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, padding: '32px 36px' }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: teal, marginBottom: 18 }}>Google 表單</div>
          <div style={{ fontSize: 38, color: white, lineHeight: 1.5 }}>
            你設計的問題：姓名、信箱、性別（表單標題＝活動名稱）。
          </div>
        </div>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, padding: '32px 36px' }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: teal, marginBottom: 18 }}>自動連到試算表</div>
          <div style={{ fontSize: 38, color: white, lineHeight: 1.5 }}>
            每送出一份，就自動多一列：時間戳記、姓名、信箱、性別。
          </div>
        </div>
      </div>
      <KeyInsight text="欄位順序是固定的 —— 等下程式就靠「第幾欄」抓資料" />
    </CA>
  </BG>
);

// ── 22 【動手4】建立報名小表單 ────────────────────────────────────────────────
const Hands4: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 92 }}>【動手 4-1】建一份報名小表單</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <Bullet n="1" title="新建 Google 表單，標題打 「練習4: 報名通知自動化」" />
        <Bullet n="2" title="加兩題：姓名（簡答）、性別（選擇題）" />
        <Bullet n="3" title="「設定」→ 回覆 → 收集電子郵件地址 → 由作答者手動輸入" />
        <Bullet n="4" title="「回覆」→ 連結到試算表" />
      </div>
      <KeyInsight text="題目順序照「姓名／性別」；填寫完畢記得發佈" />
    </CA>
  </BG>
);

// ── 24b 表單完成預覽 ─────────────────────────────────────────────────────────
const Hands4Preview: Page = () => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        background: white, borderRadius: 20, padding: '32px 40px',
        boxShadow: '0 28px 70px rgba(0,0,0,0.4)', display: 'flex',
        maxHeight: '100%', overflow: 'hidden',
      }}>
        <img src={hands4FormPreview} alt="練習4：報名通知自動化表單預覽，含電子郵件、姓名、性別三題"
          style={{ display: 'block', width: 1360, height: 'auto', objectFit: 'contain' }} />
      </div>
    </CA>
  </BG>
);

// ── 23 程式碼講解：多了一個 e ─────────────────────────────────────────────────
const EParam: Page = () => (
  <BG>
    <CA>
      <H2>這次的程式，多了一個「e」</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
        <Bullet n="1" title="e 是什麼"
          body="表單送出時，系統自動把「剛剛那一筆」打包送進來，名字叫 e。" />
        <Bullet n="2" title="e.values"
          body="就是那一筆的內容：[時間戳記, 姓名, 信箱, 性別]。" />
        <Bullet n="3" title="用順序取值"
          body="回覆[1] 是姓名、回覆[2] 是信箱（從 0 開始數）。" />
      </div>
      <KeyInsight text="差別：資料不再是你手填 A2，而是「填表的人自己送進來的」" />
    </CA>
  </BG>
);

// ── 24 【動手5】分段寫出自動寄信程式 ──────────────────────────────────────────
const Hands5: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 80 }}>【動手 4-2】完成自動寄信程式碼</H2>
      <TealBar />
      <Code size={30} code={`
function 報名後自動寄信(e) {
  // e 是表單送出時，系統自動帶進來的那一筆資料
  const 回覆 = e.values;     // 順序：[時間戳記, 信箱, 姓名, 性別]
  const 信箱 = 回覆[1];
  const 姓名 = 回覆[2];

  const 主旨 = '報名成功通知';
  const 內容 = \`\${姓名} 您好，\\n\\n我們已經收到您的報名，感謝您的參與！\`;

  GmailApp.sendEmail(信箱, 主旨, 內容);
}`} />
<br />
  <H2 style={{ fontSize: 40 }}>先別自己按執行 —— 沒有人送表單就沒有 e，會報錯，這很正常（下一頁設觸發器）</H2>
    </CA>
  </BG>
);

// ── 25 設定觸發條件：提交表單時 ───────────────────────────────────────────────
const SetTrigger: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 80 }}>【動手 4-3】設定觸發條件</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
        <Bullet n="1" title="左側時鐘圖示「觸發條件」→ 右下「新增觸發條件」" />
        <Bullet n="2" title="要執行的函式選：報名後自動寄信" />
        <Bullet n="3" title="事件來源「來自試算表」→ 事件類型「提交表單時」" />
        <Bullet n="4" title="儲存 → 回表單重新填一份，確認真的收到信" />
      </div>
      <KeyInsight text="設完務必當場填一份驗證 —— 看到信進來才算成功" />
    </CA>
  </BG>
);

// ── 26 觸發器是什麼：幫你站崗的人 ─────────────────────────────────────────────
const WhatTrigger: Page = () => (
  <BG>
    <CA>
      <H2>觸發器就是「幫你站崗的人」</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, flex: 1, marginTop: 6, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
          <Bullet n="?" title="事件型觸發"
            body="「有人提交表單」就動 —— 像門口的感應燈：有人來，燈就亮。" />
          <Bullet n="∞" title="它幫你 24 小時待命"
            body="半夜、假日、你在開會，它都照常執行。" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
          <div style={{
            background: white, borderRadius: 14, padding: 14, overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)', maxHeight: '100%', display: 'flex',
          }}>
            <img src={triggerNewDialog} alt="新增觸發條件對話框：選擇 myFunction、事件來源試算表、事件類型提交表單時"
              style={{ display: 'block', maxWidth: '100%', maxHeight: 540, width: 'auto', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
      <KeyInsight text="那「到某個時間點才做」呢？比如活動前一天自動發通知 —— 下一頁" />
    </CA>
  </BG>
);

// ── 27 ★【示範】時間驅動觸發器 ────────────────────────────────────────────────
const TimeTrigger: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 96 }}>另一種觸發器：到「指定時間」才動</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 36, flex: 1, marginTop: 6 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Bullet n="1" title="一樣點時鐘「觸發條件」→「新增觸發條件」" />
          <Bullet n="2" title="函式選 發送行前通知" />
          <Bullet n="3" title="事件來源改選「時間驅動」" />
          <Bullet n="4" title="類型「特定日期時間」→ 填 2026-11-14 09:00" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
          <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '22px 26px' }}>
            <div style={{ fontSize: 30, color: white, opacity: 0.8, marginBottom: 8 }}>剛剛是</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: white }}>事件型　表單送出就動</div>
          </div>
          <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 12, padding: '22px 26px' }}>
            <div style={{ fontSize: 30, color: teal, opacity: 0.9, marginBottom: 8 }}>這次是</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: teal }}>時間型　到你設的那刻才動</div>
          </div>
        </div>
      </div>
      <KeyInsight text="到 11/14 早上 9 點，就算我在睡覺，它自動把行前通知寄給每位錄取者" />
    </CA>
  </BG>
);

// ── 28 環節二小結 ─────────────────────────────────────────────────────────────
const Sec2Recap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節二 · 小結" />
      <H2>這一段，你已經會了</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
        <Bullet n="1" title="會用程式寄信" body="抓資料 → 組內容 → sendEmail。" />
        <Bullet n="2" title="會讓表單自己回信" body="靠「提交表單時」觸發器。" />
        <Bullet n="3" title="知道有兩種觸發器" body="事件型（某事發生）／時間型（某刻到了）。" />
      </div>
      <KeyInsight text="下一段，拿回上次做的報名檔，自己當報名者跑一次自動化" />
    </CA>
  </BG>
);

// ── 29 休息② ─────────────────────────────────────────────────────────────────
const Break2: Page = () => (
  <Break title="休息 10 分鐘" sub="等等：拿回上次做的報名檔，自己跑一次自動化" back="11:20 回來" />
);

// ════════════════════════════════════════════════════════════════════════════
// 環節三｜自己的報名檔自動化
// ════════════════════════════════════════════════════════════════════════════

// ── 30 段落分頁 ───────────────────────────────────────────────────────────────
const Sec3: Page = () => (
  <SecDiv ghost="03" kicker="環節 三" title="實戰：嘉義縣教師專業成長研習報名通知自動化" sub="把學到的招，套到真的會用的場景" />
);

// ── 31 情境溫習：拿回上次做的報名檔 ──────────────────────────────────────────
const RealList: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="情境溫習" />
      <H2>拿回上次做的報名檔</H2>
      <TealBar />
      <div style={{ fontSize: 36, color: white, lineHeight: 1.45, marginBottom: 24, opacity: 0.92 }}>
        上次你做好的「研習報名表單 ＋ 連動試算表」，這次原檔發回給你 —— 欄位都在，但報名資料已經清空，等你自己當一次報名者。
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, padding: '30px 34px' }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: white, opacity: 0.85, marginBottom: 18 }}>現在它是</div>
          <DotBullet text="一份空的報名試算表（只剩欄位標題）" />
          <DotBullet text="表單還在，但還沒有任何自動化" />
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 14, padding: '30px 34px' }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: teal, marginBottom: 18 }}>我們要讓它變成</div>
          <DotBullet text="有人報名 → 自動判斷 → 自動寄通知" />
          <DotBullet text="正式錄取自動收信、寄過的自動標記" />
        </div>
      </div>
      <KeyInsight text="前兩段學的寄信和排程，這一段套到你自己做的報名檔上" />
    </CA>
  </BG>
);

// ── 32 操作前置：準備測試環境（報名一筆、連 GAS、加記號欄）─────────────────────
const PrepCopy: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="動手前 · 準備測試環境" />
      <H2>三步驟，把檔案準備好</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
        <Bullet n="1" title="先用表單自己報名一筆"
          body="信箱填你自己的 —— 這是等下要拿來測試的測試資料。" />
        <Bullet n="2" title="回試算表 →「擴充功能」→「Apps Script」"
          body="幫這份試算表連結一個新的 GAS 檔案，待會把程式碼貼進去。" />
        <Bullet n="3" title="在最右邊空白欄（O 欄）打標題「第一場已寄信」"
          body="這是我們新增的「已寄信」記號欄，等下寄完要在這裡打勾。" />
      </div>
      <KeyInsight text="先有一筆測試資料、連好 GAS、加好記號欄 → 接著就能貼程式碼" />
    </CA>
  </BG>
);

// ── 33 測試守則：自己的測試資料，怎麼測、怎麼收尾 ─────────────────────────────
const DataSafety: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="測試資料 · 安心練習" />
      <H2>這是你的測試資料，放心跑</H2>
      <TealBar />
      <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 14, padding: '28px 36px', marginBottom: 22 }}>
        <div style={{ fontSize: 46, fontWeight: 800, color: white, lineHeight: 1.4 }}>
          名單已清空，你填的是<span style={{ color: teal }}>自己的測試報名</span> —— 信箱是你自己的，程式一跑也只寄給你。
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <DotBullet text="要讓程式寄信：先在你那一列的「第一場狀態」(L 欄) 填「正式錄取」" />
        <DotBullet text="執行後到自己信箱確認 —— 看到信進來才算成功" />
        <DotBullet text="測試完畢：把這一筆測試資料整列刪掉，檔案就回到乾淨狀態" />
      </div>
      <KeyInsight text="自己的測試資料，怎麼測都沒關係 —— 測完刪掉就好" />
    </CA>
  </BG>
);

// ── 33b 自動化情境流程圖 ──────────────────────────────────────────────────────
const Sec3Scenario: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="自動化情境" />
      <H2 style={{ fontSize: 88 }}>填完就收信：系統自動判斷並通知</H2>
      <TealBar />

      {/* 流程圖容器 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0 }}>

        {/* 頂部節點：報名者填寫表單送出 */}
        <div style={{
          border: '1px solid rgba(255,255,255,0.4)', borderRadius: 12,
          padding: '18px 48px', color: white, fontSize: 36, fontWeight: 600,
          background: 'rgba(255,255,255,0.08)', letterSpacing: '0.02em',
        }}>
          報名者填寫表單送出
        </div>

        {/* 箭頭 */}
        <div style={{ fontSize: 36, color: teal, lineHeight: 1, padding: '8px 0' }}>▼</div>

        {/* 判斷節點 */}
        <div style={{
          border: `2px solid ${teal}`, borderRadius: 12,
          padding: '18px 48px', color: teal, fontSize: 36, fontWeight: 700,
          background: 'rgba(0,229,192,0.08)', letterSpacing: '0.02em',
        }}>
          系統自動判斷名額
        </div>

        {/* 分叉箭頭 + 兩欄 */}
        <div style={{ display: 'flex', gap: 80, marginTop: 16, alignItems: 'flex-start' }}>

          {/* 左側：正式錄取 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            <div style={{ fontSize: 36, color: teal, lineHeight: 1, padding: '6px 0' }}>▼</div>
            <div style={{
              background: 'rgba(0,229,192,0.22)', border: `1px solid ${teal}`,
              borderRadius: 12, padding: '18px 48px',
              color: teal, fontSize: 42, fontWeight: 800, letterSpacing: '0.02em',
            }}>
              報名成功
            </div>
            <div style={{ fontSize: 36, color: teal, lineHeight: 1, padding: '6px 0' }}>▼</div>
            <div style={{
              background: 'rgba(0,229,192,0.22)', border: `1px solid ${teal}`,
              borderRadius: 12, padding: '14px 40px',
              color: teal, fontSize: 32, fontWeight: 600, letterSpacing: '0.02em',
            }}>
              寄出通知信（標示：報名成功）
            </div>
          </div>

          {/* 右側：候補 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            <div style={{ fontSize: 36, color: '#ffb400', lineHeight: 1, padding: '6px 0' }}>▼</div>
            <div style={{
              background: 'rgba(255,180,0,0.18)', border: '1px solid rgba(255,180,0,0.5)',
              borderRadius: 12, padding: '18px 48px',
              color: '#ffb400', fontSize: 42, fontWeight: 800, letterSpacing: '0.02em',
            }}>
              列入候補
            </div>
            <div style={{ fontSize: 36, color: '#ffb400', lineHeight: 1, padding: '6px 0' }}>▼</div>
            <div style={{
              background: 'rgba(255,180,0,0.18)', border: '1px solid rgba(255,180,0,0.5)',
              borderRadius: 12, padding: '14px 40px',
              color: '#ffb400', fontSize: 32, fontWeight: 600, letterSpacing: '0.02em',
            }}>
              寄出通知信（標示：列入候補）
            </div>
          </div>

        </div>
      </div>
    </CA>
  </BG>
);

// ── 33b 本次使用的報名表 ───────────────────────────────────────────────────────
const Sec3FormPreview: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="前置準備" />
      <H2>本次使用的報名表</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
        <div style={{ background: white, borderRadius: 20, padding: '24px 32px', boxShadow: '0 28px 70px rgba(0,0,0,0.4)', display: 'flex', maxHeight: '100%', overflow: 'hidden' }}>
          <img
            src={sec3FormPreview}
            alt="2026 嘉義縣教師專業成長研習報名表截圖"
            style={{ display: 'block', width: 'auto', maxWidth: 1100, maxHeight: 620, objectFit: 'contain' }}
          />
        </div>
      </div>
    </CA>
  </BG>
);

// ── 33c 今天的 AI 助教：Gemini ────────────────────────────────────────────────
const Sec3GeminiIntro: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Eyebrow text="今天的 AI 助教" />
      <div style={{ fontSize: 130, fontWeight: 900, color: teal, lineHeight: 1.1, marginTop: 8 }}>Google Gemini AI</div>
      <TealBar />
      <div style={{ fontSize: 48, color: white, textAlign: 'center', lineHeight: 1.5 }}>
        把你的需求說給它聽，它幫你生出程式碼
      </div>
      <div style={{
        background: white, borderRadius: 20, padding: '32px 40px',
        boxShadow: '0 28px 70px rgba(0,0,0,0.4)', display: 'flex',
        marginTop: 32,
      }}>
        <img
          src={sec3GeminiIntro}
          alt="Gemini 介面截圖"
          style={{ display: 'block', width: 900, height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <div style={{ fontSize: 32, color: teal, opacity: 0.85, marginTop: 16 }}>
        gemini.google.com/app
      </div>
    </CA>
  </BG>
);

// ── 33e 如何請 Gemini 寫程式：步驟 ────────────────────────────────────────────
const Sec3GeminiSteps: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="如何請 AI 幫你寫程式" />
      <H2>兩步驟，讓 Gemini 幫你生出程式碼</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
        <Bullet n="1" title="上傳表單檔案，讓 AI 讀懂結構"
          body="在 Gemini 對話框點「+」→ 加入雲端硬碟檔案 → 選取你的 Google 表單回覆試算表（CSV）" />
        <Bullet n="2" title="貼上需求，叫它生出程式碼"
          body="把提示詞貼進對話框 → 送出 → Gemini 會根據你的實際欄位名稱，直接寫好 GAS 程式碼" />
      </div>
      <KeyInsight text="不用自己查語法——把需求說清楚，讓 AI 幫你做第一版" />
    </CA>
  </BG>
);

// ── 33f 提示詞範本 ─────────────────────────────────────────────────────────────
const Sec3GeminiPrompt: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="提示詞範本" />
      <H2 style={{ fontSize: 72 }}>複製這段提示詞，貼給 Gemini</H2>
      <TealBar />
      <Code size={20} code={`我提供了一份 Google 表單回覆的 CSV 資料（如附檔），請幫我撰寫綁定於試算表的 Google Apps Script (GAS) 自動化腳本。

【任務目標】
當有人提交表單時，自動計算該報名場次的人數。若未滿額則寄出「報名成功」信件，若已滿額則寄出「候補狀態」信件。

【核心邏輯】
- 每場報名人數上限先設為 2 位（測試用）。
- 必須針對使用者勾選的「每一個場次」獨立計算歷史報名人數，並在同一封信件中分別列出各場次的結果。

【開發與除錯要求】
1. 建立 Mock 測試：請撰寫一個獨立的 testOnFormSubmit()，提供假 e.namedValues 資料，讓我在 GAS 編輯器內直接執行測試，無需實際填寫表單。
2. 全面 Log 追蹤：請在抓取資料、計算人數、判斷邏輯等每個關鍵斷點加上 console.log()。
3. 防呆與錯誤處理：若 e 參數不存在或抓不到信箱/場次資料，請提早 return 並印出 console.error 提示。
   寄發 Email 的段落請使用 try...catch 包覆，以便捕捉並記錄寄送失敗的原因。
4. 欄位對應確認：請根據附上的試算表 CSV，確認程式碼中使用的欄位名稱與實際標題列完全一致，避免因欄位名稱不符導致抓不到資料。`} />
    </CA>
  </BG>
);

// ── 34 新觀念：if 判斷 ＋ 標記回寫 ─────────────────────────────────────────────
const IfMark: Page = () => (
  <BG>
    <CA>
      <H2>這段只多兩個新觀念</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1, marginTop: 10 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, padding: '32px 36px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: teal, marginBottom: 18 }}>if：學會「判斷」</div>
          <div style={{ fontSize: 38, color: white, lineHeight: 1.5 }}>
            只對符合條件的人做事 —— 這裡只挑「正式錄取」，候補和未報的都不寄。
          </div>
        </div>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 14, padding: '32px 36px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: teal, marginBottom: 18 }}>標記回寫：寄完打勾</div>
          <div style={{ fontSize: 38, color: white, lineHeight: 1.5 }}>
            寄完在 O 欄打勾，下次再跑時就跳過 —— 不重複騷擾同一個人。
          </div>
        </div>
      </div>
      <KeyInsight text="其他都和環節二一樣（一樣是 sendEmail 寄信）" />
    </CA>
  </BG>
);

// ── 35 【動手6】條件判斷寄信 ＋ 標記 ──────────────────────────────────────────
const Hands6: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 72 }}>【動手 6】只寄給正式錄取，寄完打勾</H2>
      <div style={{ height: 4, width: 90, background: teal, borderRadius: 2, margin: '14px 0 16px' }} />
      <TaskStrip tag="動手" text="你那列 L 欄填「正式錄取」→ 貼上範本 → 只改主旨、內容兩處 → 執行 → 看自己信箱 ＋ O 欄打勾（迴圈不要動）" />
      <Code size={20} code={`
function 寄信給第一場錄取者() {
  const 試算表 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('表單回覆 1');
  const 資料 = 試算表.getDataRange().getValues();
  // 欄位（從 0 起算）：B姓名=[1] | C信箱=[2] | L第一場狀態=[11] | O已寄信=[14]

  for (let i = 1; i < 資料.length; i++) {   // 從第 2 列開始（跳過標題列）
    const 姓名 = 資料[i][1];
    const 信箱 = 資料[i][2];
    const 第一場狀態 = 資料[i][11];
    const 已寄信 = 資料[i][14];

    if (!姓名) continue;   // 空白列就跳過

    // 只有「正式錄取」而且「還沒寄過」的人，才寄信
    if (第一場狀態 === '正式錄取' && 已寄信 !== '✔') {
      GmailApp.sendEmail(信箱, '第一場錄取通知',
        \`\${姓名} 您好，恭喜您正式錄取「11/15 研習」，請準時參加！\`);
      試算表.getRange(i + 1, 15).setValue('✔');   // 在 O 欄打勾，避免重複寄
    }
  }
}`} note="想練第二場：[11] 換 [12]、O 欄換 P 欄 —— 三場邏輯一模一樣" />
    </CA>
  </BG>
);

// ── 36 【示範】HTML 錄取面板 ──────────────────────────────────────────────────
const HtmlPanel: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="示範 · 不要求學員操作" />
      <H2 style={{ fontSize: 76 }}>把幾招組起來，做一個「點得動」的小工具</H2>
      <div style={{ height: 4, width: 90, background: teal, borderRadius: 2, margin: '14px 0 16px' }} />
      <Code size={30} code={`
// 試算表開啟時，自動長出「候補管理」選單
function onOpen() {
  SpreadsheetApp.getUi().createMenu('候補管理')
    .addItem('開啟錄取面板', '顯示面板').addToUi();
}

// 按鈕按下去 → 把指定列改成正式錄取，並寄出遞補通知
function 錄取候補(列號) {
  const 表 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('表單回覆 1');
  const 姓名 = 表.getRange(列號, 2).getValue();
  const 信箱 = 表.getRange(列號, 3).getValue();
  表.getRange(列號, 12).setValue('正式錄取');   // L 第一場狀態
  GmailApp.sendEmail(信箱, '遞補錄取通知',
    \`\${姓名} 您好，您已從候補遞補為正式錄取，恭喜！\`);
}`} note="搭配面板.html 的按鈕：google.script.run.錄取候補(11) · 完整含部署見課後教材" />
    </CA>
  </BG>
);

// ── 37 本堂收尾 ──────────────────────────────────────────────────────────────
const ClassRecap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="本堂收尾" />
      <H2>從早上到現在，你做到了</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
        <Bullet n="1" title="不再怕程式" body="會寫變數、會讓程式動手改試算表。" />
        <Bullet n="2" title="會自動寄信" body="表單送出自動回信、指定時間自動發通知。" />
        <Bullet n="3" title="會讓電腦判斷" body="只對該收信的人寄，還做出點一下就遞補的小工具。" />
      </div>
      <KeyInsight text="自動化＝把重複的事交給程式，把時間留給真正需要老師的人" />
    </CA>
  </BG>
);

// ── 38 結語 / Q&A ─────────────────────────────────────────────────────────────
const QnA: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center' }}>
      <div style={{ fontSize: 36, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 24 }}>
        RPAI 數位優化器
      </div>
      <h1 style={{ fontSize: 150, fontWeight: 900, color: white, margin: 0, lineHeight: 1.05 }}>
        謝謝大家，<span style={{ color: teal }}>Q&amp;A</span>
      </h1>
      <div style={{ height: 5, width: 120, background: teal, borderRadius: 2, margin: '30px 0 34px' }} />
      <p style={{ fontSize: 46, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
        課後會給：<span style={{ color: teal, fontWeight: 700 }}>今日全部範本程式碼</span> ＋ 操作步驟圖。
      </p>
      <p style={{ fontSize: 38, color: white, margin: '18px 0 0', opacity: 0.85, lineHeight: 1.5 }}>
      </p>
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 附錄｜PDF 時數證明（備用加映）
// ════════════════════════════════════════════════════════════════════════════

// ── 39 段落分頁 ───────────────────────────────────────────────────────────────
const SecApp: Page = () => (
  <SecDiv ghost="＋" kicker="加映單元" title="自動產出時數證明" sub="活動結束後，每個人的證明自己寄出去" />
);

// ── 40 用 Slides 當底稿 ───────────────────────────────────────────────────────
const SlidesBase: Page = () => (
  <BG>
    <CA>
      <H2>工作流程</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <DotBullet text="改用 Google 簡報當底稿（橫式，可放邊框／logo／簽名）" />
        <DotBullet text="底稿先打好佔位符：{{姓名}}、{{時數}}、{{日期}}" />
        <DotBullet text="複製一份 → 換掉佔位符 → 另存 PDF → 當附件寄出" />
      </div>
      <KeyInsight text="使用 Google Slide 製作底稿，再轉成 PDF" />
    </CA>
  </BG>
);

// ── 41 流程與程式 ─────────────────────────────────────────────────────────────
const PdfFlow: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 92 }}>複製 → 換字 → 轉 PDF → 寄出</H2>
      <div style={{ height: 4, width: 90, background: teal, borderRadius: 2, margin: '14px 0 16px' }} />
      <Code size={30} code={`
function 寄送時數證明() {
  const 名單 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('表單回覆 1');
  const 資料 = 名單.getDataRange().getValues();
  const 時數對照 = { '正式教師': 6, '代理教師': 6, '行政人員': 3 };
  const 場次日期 = { 12: '2026/11/15', 13: '2026/11/22', 14: '2026/11/29' };

  for (let i = 1; i < 資料.length; i++) {
    const 姓名 = 資料[i][1], 信箱 = 資料[i][2], 身份 = 資料[i][5];
    if (!姓名 || 資料[i][7] !== '是') continue;   // 沒勾要證明就跳過
    const 時數 = 時數對照[身份] || 0;

    for (const 欄 of [12, 13, 14]) {              // L / M / N 三場
      if (資料[i][欄 - 1] === '正式錄取')
        產出並寄送(姓名, 信箱, 時數, 場次日期[欄]);
    }
  }
}
// 產出並寄送：複製 Slides 底稿 → replaceAllText 換字 → getAs('application/pdf') → 附件寄出`}
        note="現場示範跑簡化版：只發第一場、日期寫死。完整程式見課後教材" />
    </CA>
  </BG>
);

// ── 42 加映收尾 ──────────────────────────────────────────────────────────────
const AppRecap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="加映 · 收尾" />
      <H2>如果你想再往前一步</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        <Bullet n="1" title="這招的價值"
          body="把「最後一哩」的證明製作，也完全自動化 —— 一樣是讀資料、判斷、寄信。" />
        <Bullet n="2" title="回家挑戰"
          body="做一張 Slides 底稿、放三個佔位符，跑跑看第一場簡化版。" />
      </div>
      <KeyInsight text="你已經有全部基本功，剩下的只是「組起來」" />
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 結尾 CTA
// ════════════════════════════════════════════════════════════════════════════

// ── 43 課後問卷 ──────────────────────────────────────────────────────────────
const Survey: Page = () => (
  <BG>
    <div style={{ position: 'absolute', inset: 0, padding: '100px 140px 110px', display: 'grid', gridTemplateColumns: '1fr 460px', gap: 80, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Eyebrow text="課後回饋 · 領取教材" />
        <H2 style={{ fontSize: 96, lineHeight: 1.12 }}>
          填寫問卷<br/>
          <span style={{ color: teal }}>領取今日簡報 &amp; 教材</span>
        </H2>
        <TealBar />
        <p style={{ fontSize: 46, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>完成後取得：</p>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <DotBullet text="今日全部範本程式碼（六支動手 ＋ 兩段示範）" />
          <DotBullet text="各環節操作步驟圖" />
          <DotBullet text="報名表單與名單範本連結" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <ImagePlaceholder hint="課後問卷 QR code（每場更換 · 放 slides/gas-staff-l2/assets/）" width={380} height={380} style={{ borderRadius: 16 }} />
        <div style={{ fontSize: 32, color: white, fontWeight: 800, letterSpacing: '0.08em' }}>掃描填寫問卷</div>
        <div style={{ fontSize: 22, color: white, opacity: 0.75, letterSpacing: '0.02em' }}>forms.gle / Google 表單</div>
      </div>
    </div>
  </BG>
);

// ── 44 結尾 CTA ───────────────────────────────────────────────────────────────
const JourneyEnd: Page = () => (
  <BG>
    <div style={{ position: 'absolute', inset: 0, padding: '120px 160px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: white, letterSpacing: '0.04em', marginBottom: 80, opacity: 0.92 }}>RPAI 數位優化器</div>
        <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.18, letterSpacing: '-0.01em' }}>
          決定好踏上自動化<br/>旅程了嗎？
        </h1>
        <div style={{ height: 4, width: 110, background: teal, borderRadius: 2, margin: '48px 0 36px' }} />
        <p style={{ fontSize: 48, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
          讓我們一起由簡單開始，<span style={{ color: teal, fontWeight: 700 }}>成就不簡單！</span>
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ padding: 16, borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.35)', backgroundColor: '#009bc7' }}>
            <img src={qrWebsite} alt="官方網站 QR code" style={{ width: 340, height: 340, display: 'block' }}/>
          </div>
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>WEBSITE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ background: white, padding: 16, borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.35)' }}>
            <img src={qrInstagram} alt="Instagram QR code" style={{ width: 340, height: 340, display: 'block' }}/>
          </div>
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>@RPAI_DIGITALTRANSFORMER</span>
        </div>
      </div>
    </div>
  </BG>
);

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: 'Google Apps Script 基礎（第二堂）：讓報名表自己會寄信、會通知',
  theme: 'rpai-tech-blue',
};

const EO = 'cubic-bezier(0,0,0.2,1)';
const EI = 'cubic-bezier(0.4,0,1,1)';

export const transition: SlideTransition = {
  duration: 220,
  exit:  { duration: 150, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-5px)' }] },
  enter: { duration: 220, delay: 80, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

const coverTransition: SlideTransition = {
  duration: 280,
  exit:  { duration: 160, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }] },
  enter: { duration: 280, delay: 100, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
                       { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }] },
};
Cover.transition = coverTransition;

export default [
  // 開場 + 品牌
  Cover,
  Organizer, Projects, Instructor, Believe,
  Recap1,
  // 環節一
  TodayMap, Sec1, WhatIsAS, UsageExamples, OpenAS, VarLogger, Hands1, Hands2, AuthFlow, Troubleshoot, Sec1Recap,
  // 環節二
  Break1, Sec2, Unlock1, MailThree, Hands3, Unlock2, Hands4, Hands4Preview, Hands5, EParam, SetTrigger, WhatTrigger, TimeTrigger, Sec2Recap, Break2,
  // 環節三
  Sec3, RealList, PrepCopy, DataSafety, Sec3Scenario, Sec3FormPreview, Sec3GeminiIntro, Sec3GeminiSteps, Sec3GeminiPrompt, IfMark, Hands6, HtmlPanel, ClassRecap, QnA,
  // 附錄（備用加映）— 暫時隱藏 p41-44
  // SecApp, SlidesBase, PdfFlow, AppRecap,
  // 結尾 CTA
  Survey, JourneyEnd,
] satisfies Page[];
