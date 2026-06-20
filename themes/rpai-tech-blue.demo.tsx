import type { CSSProperties, ReactNode } from 'react';
import { type Page, type SlideTransition, useSlidePageNumber } from '@open-slide/core';

// ─── Tokens ──────────────────────────────────────────────────────────────────
const GRAD  = 'linear-gradient(135deg,#1565c0 0%,#0288d1 45%,#00acc1 100%)';
const teal  = '#00e5c0';
const white = '#ffffff';
const cardBg     = 'rgba(0,15,55,0.70)';
const pill       = 'rgba(255,255,255,0.18)';
const F = '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif';

const fill: CSSProperties = {
  width: '100%', height: '100%',
  fontFamily: F, position: 'relative', overflow: 'hidden',
};

// ─── Decorative SVGs ──────────────────────────────────────────────────────────
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

// ─── Shared layout ────────────────────────────────────────────────────────────
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

const KeyInsight = ({ text }: { text: string }) => (
  <div style={{ marginTop: 'auto', paddingTop: 22, alignSelf: 'flex-start' }}>
    <span style={{ fontSize: 42, fontWeight: 700, color: teal }}>{text}</span>
  </div>
);

const DotBullet = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginBottom: 18 }}>
    <div style={{ width: 13, height: 13, borderRadius: '50%', background: teal, flexShrink: 0 }}/>
    <span style={{ fontSize: 54, fontWeight: 500, color: white, lineHeight: 1.35 }}>{text}</span>
  </div>
);

// Preview-only placeholder for avatars / QR codes. Real decks import images from ./assets.
const AssetBox = ({ size, label, round }: { size: number; label: string; round?: boolean }) => (
  <div style={{
    width: size, height: size, flexShrink: 0,
    borderRadius: round ? '50%' : 16,
    border: '2px dashed rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
    fontSize: 24, color: 'rgba(255,255,255,0.7)', fontWeight: 600, padding: 12,
  }}>{label}</div>
);

// ─── Transitions ──────────────────────────────────────────────────────────────
const EO = 'cubic-bezier(0,0,0.2,1)';
const EI = 'cubic-bezier(0.4,0,1,1)';

export const transition: SlideTransition = {
  duration: 220,
  exit:  { duration: 150, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-5px)' }] },
  enter: { duration: 220, delay: 80, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─────────────────────────────────────────────────────────────────────────────
// DEMO PAGES
// ─────────────────────────────────────────────────────────────────────────────

const Cover: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
      <div style={{ fontSize: 33, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 28 }}>
        RPAI 數位優化器 · 工作坊
      </div>
      <h1 style={{ fontSize: 130, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
        RPAI Tech Blue
      </h1>
      <p style={{ fontSize: 60, fontWeight: 500, color: white, margin: '20px 0 40px', lineHeight: 1.25 }}>
        企業數位轉型培訓的主視覺風格
      </p>
      <div style={{ display: 'flex', gap: 20 }}>
        {['深藍漸層', '青綠點綴', '玻璃卡片'].map((t) => (
          <div key={t} style={{ background: 'rgba(0,229,192,0.14)', border: `1px solid ${teal}`, borderRadius: 999, padding: '12px 36px' }}>
            <span style={{ fontSize: 42, color: teal, fontWeight: 700 }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  </BG>
);

Cover.transition = {
  duration: 280,
  exit:  { duration: 160, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }] },
  enter: { duration: 280, delay: 100, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
                       { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }] },
};

const Content: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="版面元件" />
      <H2>內容頁的節奏</H2>
      <TealBar />
      <div style={{ display: 'flex', gap: 40, marginTop: 12 }}>
        <div style={{ flex: 1.1 }}>
          <Bullet n="1" title="編號清單" body="深色玻璃卡片上，白字搭配青綠編號圈，重點一目了然。" />
          <Bullet n="2" title="一致的留白" body="左右各 120px、上方 80px，每頁節奏相同。" />
          <Bullet n="3" title="單一強調色" body="青綠 #00e5c0 只用於眉標、分隔線與關鍵數字。" />
        </div>
        <div style={{ flex: 0.9, background: cardBg, borderRadius: 16, padding: 40,
          border: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 36, color: white, opacity: 0.8, marginBottom: 12 }}>導入後平均節省</div>
          <div style={{ fontSize: 130, fontWeight: 900, color: teal, lineHeight: 1 }}>68%</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.8, marginTop: 12 }}>重複性作業工時</div>
        </div>
      </div>
      <KeyInsight text="重點：留白與單一強調色，是這套風格看起來「工程感」的關鍵。" />
    </CA>
  </BG>
);

const Section: Page = () => (
  <BG>
    <div style={{
      position: 'absolute', right: 80, top: '50%', transform: 'translateY(-55%)',
      fontSize: 300, fontWeight: 900, color: 'rgba(255,255,255,0.05)',
      lineHeight: 1, userSelect: 'none', pointerEvents: 'none', fontFamily: F, letterSpacing: '-0.04em',
    }}>02</div>
    <div style={{
      position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px',
    }}>
      <div style={{ fontSize: 39, color: teal, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 24 }}>單元 02</div>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08 }}>章節分隔頁</h1>
      <div style={{ height: 5, width: 110, background: teal, borderRadius: 2, margin: '26px 0' }}/>
      <p style={{ fontSize: 60, color: white, margin: 0, fontWeight: 500 }}>巨大的半透明編號，帶出新的單元</p>
    </div>
  </BG>
);

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE PAGES — these recur in every RPAI lecture (org intro / instructor / CTA)
// In a real deck the AssetBox placeholders become <img> from ./assets.
// ─────────────────────────────────────────────────────────────────────────────

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
            團隊成員來自各行各業，立志讓不會寫程式的工作者，
            也能透過自動化工具<span style={{ color: teal, fontWeight: 700 }}>提升工作效率與價值</span>。
          </p>
          <div style={{ display: 'flex', gap: 60, marginTop: 42, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <AssetBox size={200} label="官網 QR" />
              <span style={{ fontSize: 32, color: white, fontWeight: 700 }}>官方網站</span>
              <span style={{ fontSize: 24, color: white, opacity: 0.75 }}>portaly.cc/RPAITW</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <AssetBox size={200} label="IG QR" />
              <span style={{ fontSize: 32, color: white, fontWeight: 700 }}>Instagram</span>
              <span style={{ fontSize: 24, color: white, opacity: 0.75 }}>@rpai_digitaltransformer</span>
            </div>
          </div>
        </div>
      </div>
    </CA>
  </BG>
);

const Instructor: Page = () => {
  const projects = [
    '2026_科技業_企業雲端運算資源管理與平台化建置案',
    '2025_科技業_企業開發者平台資安檢核與流程自動化建置案',
    '2024_餐飲服務業_門市訂單與營運流程優化數位轉型案',
    '2023_金融業_結算交割系統數位轉型專案',
    '2023_政府業_藥政管理電子化與流程數位化平台建置案',
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
              <AssetBox size={360} round label="講師照片" />
              <div>
                <div style={{ fontSize: 100, fontWeight: 900, color: teal, lineHeight: 1, marginBottom: 18 }}>Yin</div>
                <DotBullet text="科技業軟體工程師" />
                <DotBullet text="自動化工具講師" />
                <DotBullet text="自動化導入技術顧問" />
              </div>
            </div>
            <div style={{ padding: '20px 28px' }}>
              {projects.map((p) => (
                <div key={p} style={{ fontSize: 26, color: white, lineHeight: 1.6 }}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </CA>
    </BG>
  );
};

const Projects: Page = () => {
  const Callout = ({
    pos, title, lines, lineDir,
  }: { pos: CSSProperties; title: string; lines: string[]; lineDir: 'tl' | 'tr' | 'bl' | 'br' }) => {
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
          <AssetBox size={300} label="官網 QR" />
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>WEBSITE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <AssetBox size={300} label="IG QR" />
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>@RPAI_DIGITALTRANSFORMER</span>
        </div>
      </div>
    </div>
  </BG>
);

export default [Cover, Content, Section, Organizer, Projects, Instructor, Believe, JourneyEnd];
