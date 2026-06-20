---
name: RPAI Tech Blue
description: Corporate-tech workshop deck — deep-blue diagonal gradient, teal accent, circuit/ring/dot line decorations, dark navy glass cards, full-white Chinese type.
---

# RPAI Tech Blue

The house style of the RPAI 數位優化器 workshop decks. A confident, slightly futuristic corporate-training look: every page sits on the same blue→cyan diagonal gradient, dressed with faint white circuit/ring/dot line art, and content lives in dark navy "glass" cards so white text always has contrast. Teal (`#00e5c0`) is the single accent — eyebrows, dividers, key numbers, key insights.

## Palette

| Role        | Value                          | Notes                                            |
| ----------- | ------------------------------ | ------------------------------------------------ |
| bg          | `#1565c0`                      | base blue (the gradient's start)                 |
| bgGradient  | `linear-gradient(135deg,#1565c0 0%,#0288d1 45%,#00acc1 100%)` | every page background |
| text        | `#ffffff`                      | ALL copy is full white for readability           |
| accent      | `#00e5c0`                      | teal — eyebrow, dividers, key numbers, insights  |
| cardBg      | `rgba(0,15,55,0.70)`           | general dark navy glass card                     |
| cardBgTeal  | `rgba(0,45,65,0.75)`           | teal-tinted card (positive / highlight)          |
| cardBgRed   | `rgba(70,0,0,0.70)`            | warning / "bad example" card                     |
| pill        | `rgba(255,255,255,0.18)`       | bullet number circles, small chips               |
| hairline    | `rgba(255,255,255,0.22)`       | footer top border, dividers                      |

Decorative line art is always `white` at low opacity (0.05–0.28). Never introduce a second hue — the whole identity is blue-field + teal-accent. No other accent colors.

## Typography

- Display & body font (same stack for both): `"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif`. This is a CJK-first deck — the stack leads with Traditional-Chinese faces.
- Weights: headings 800–900, sub-headings / bullet titles 700, body 500.
- Type-scale overrides (vs `slide-authoring` defaults):
  - Cover H1: 130 px (weight 900, letter-spacing −0.02em)
  - Section-divider H1: 120 px (weight 900)
  - Page heading `H2`: 108 px (weight 800)
  - Section/divider subtitle: 60 px
  - Bullet title / DotBullet: 54 px (the `body` scale token is 54)
  - Bullet body text: 42 px
  - Eyebrow / key insight: 42 px (eyebrow 30 px when used as a chip)
  - Footer: 30 px
  - Giant ghost section number: 300 px at `rgba(255,255,255,0.05)`

## Layout

- Canvas 1920 × 1080. Content padding: **120 px** sides for standard content (`CA`), **160 px** sides for centered cover / section pages.
- Standard content area `CA`: `top:80, left:120, right:120, bottom:92` (clears the footer).
- Footer is fixed on every page (via the `BG` wrapper): a hairline-topped bar at `bottom:20`, left brand label + right `NN / NN` page count.
- Every page is composed as `<BG>…children…</BG>` — `BG` paints the gradient, drops the four decorative SVGs (circuit top-left, rings top-right, dots bottom-left & bottom-right) and the footer. Author only the content inside.
- Alignment: left-aligned content pages; centered cover & section dividers.

## Fixed components

Paste these verbatim. They depend only on `react` + `@open-slide/core`. Define the tokens block first.

### Tokens

```tsx
import type { CSSProperties, ReactNode } from 'react';

const GRAD  = 'linear-gradient(135deg,#1565c0 0%,#0288d1 45%,#00acc1 100%)';
const teal  = '#00e5c0';
const white = '#ffffff';
const cardBg     = 'rgba(0,15,55,0.70)';
const cardBgTeal = 'rgba(0,45,65,0.75)';
const cardBgRed  = 'rgba(70,0,0,0.70)';
const pill       = 'rgba(255,255,255,0.18)';
const F = '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif';

const fill: CSSProperties = {
  width: '100%', height: '100%',
  fontFamily: F, position: 'relative', overflow: 'hidden',
};
```

### Decorative SVGs

```tsx
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

// A 6×4 dot grid. Render two: bottom-left and bottom-right.
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
```

### BG (page wrapper — wrap every page in this)

```tsx
import { useSlidePageNumber } from '@open-slide/core';

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

// Standard left-aligned content area (clears the footer).
const CA = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{
    position: 'absolute', top: 80, left: 120, right: 120, bottom: 92,
    display: 'flex', flexDirection: 'column', ...style,
  }}>
    {children}
  </div>
);
```

### Eyebrow / heading / divider primitives

```tsx
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
```

### Section divider (full page)

```tsx
const SecDiv = ({ n, title, sub }: { n: string; title: string; sub: string }) => (
  <BG>
    <div style={{
      position: 'absolute', right: 80, top: '50%', transform: 'translateY(-55%)',
      fontSize: 300, fontWeight: 900, color: 'rgba(255,255,255,0.05)',
      lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      fontFamily: F, letterSpacing: '-0.04em',
    }}>{n}</div>
    <div style={{
      position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 160px',
    }}>
      <div style={{ fontSize: 39, color: teal, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 24 }}>
        單元 {n}
      </div>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08 }}>{title}</h1>
      <div style={{ height: 5, width: 110, background: teal, borderRadius: 2, margin: '26px 0' }}/>
      <p style={{ fontSize: 60, color: white, margin: 0, fontWeight: 500 }}>{sub}</p>
    </div>
  </BG>
);
```

## Fixed pages (reuse every lecture)

These four pages are part of the RPAI house identity and recur in **every** deck — keep them, only swap copy/assets. Paste them after the cover (組織 + 講師 near the front; CTA pages at the very end). They depend on the Tokens / `BG` / `CA` / `Eyebrow` / `H2` / `TealBar` / `DotBullet` primitives above.

### Required assets

Copy these into the new slide's `assets/` folder and import at the top of `index.tsx` (filenames are stable across decks):

```tsx
import qrWebsite   from './assets/qr-website.png';        // 主辦單位 + 結尾 CTA — portaly.cc/RPAITW
import qrInstagram from './assets/qr-instagram.png';       // 主辦單位 + 結尾 CTA — @rpai_digitaltransformer
import yinAvatar   from './assets/yin-avatar.webp';        // 講師介紹 (Yin)
import hugoAvatar  from './assets/hugo-avatar.png';        // 助教介紹 (Hugo)
import surveyQr    from './assets/survey-qr.png';          // 課後問卷 CTA (swap per lecture)
```

The fastest way to get these: copy them from `slides/jianu-claude/assets/`. The Yin/Hugo avatars and the two RPAI QR codes are fixed; `survey-qr.png` (and any event QR) changes per lecture.

### 主辦單位 — RPAI organization intro

```tsx
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
```

### 講師介紹 — instructor (Yin)

`projects` is the rolling case-study list; trim or update per lecture (keep it to ~9 lines so it doesn't overflow).

```tsx
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
```

### 助教介紹 — co-host (Hugo)

Optional second presenter page; same layout, larger avatar. Drop it if the lecture has no co-host.

```tsx
const InstructorHugo: Page = () => (
  <BG>
    <CA>
      <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: 60, flex: 1, alignItems: 'flex-start' }}>
        <div style={{ lineHeight: '1.55' }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: teal, letterSpacing: '0.04em', marginBottom: 24 }}>RPAI 數位優化器</div>
          <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.02, letterSpacing: '0.02em' }}>助教<br/>介紹</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 60, alignItems: 'center', alignSelf: 'center' }}>
          <div style={{ width: 420, height: 420, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', overflow: 'hidden' }}>
            <img src={hugoAvatar} alt="Hugo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: 110, fontWeight: 900, color: teal, lineHeight: 1, marginBottom: 30 }}>Hugo</div>
            {['RPAI 數位優化器行銷長','科技業 HR','人才招募 / 雇主品牌 / 教育訓練','企業內部豐富教育訓練經驗'].map((t) => (
              <div key={t} style={{ display: 'flex', gap: 22, alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: teal, flexShrink: 0 }}/>
                <span style={{ fontSize: 42, fontWeight: 500, color: white, lineHeight: 1.35, whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CA>
  </BG>
);
```

### 結尾 CTA — automation-journey close (the main closing page)

The signature sign-off: "決定好踏上自動化旅程了嗎？" + website & Instagram QR. Always the last (or near-last) page.

```tsx
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
```

### 課後問卷 CTA — survey / hand-out materials (optional)

Drives the post-class survey that unlocks the slides & materials. Swap `surveyQr` per lecture.

```tsx
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
          <DotBullet text="今日完整上課簡報" />
          <DotBullet text="實戰範例與教材連結" />
          <DotBullet text="後續學習資源推薦" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <div style={{ background: white, padding: 20, borderRadius: 16, boxShadow: '0 16px 44px rgba(0,0,0,0.4)' }}>
          <img src={surveyQr} alt="課後問卷 QR code" style={{ width: 380, height: 380, display: 'block' }}/>
        </div>
        <div style={{ fontSize: 32, color: white, fontWeight: 800, letterSpacing: '0.08em' }}>掃描填寫問卷</div>
        <div style={{ fontSize: 22, color: white, opacity: 0.75, letterSpacing: '0.02em' }}>forms.gle / Google 表單</div>
      </div>
    </div>
  </BG>
);
```

Place them in the deck like: `Cover, Organizer, Instructor, InstructorHugo, …content…, Survey, JourneyEnd`.

## Motion

- Philosophy: **subtle.** A short fade + small vertical drift between pages; the cover gets one extra touch (a 4 px blur-in). Nothing slides far or bounces.

```tsx
import type { SlideTransition } from '@open-slide/core';

const EO = 'cubic-bezier(0,0,0.2,1)';
const EI = 'cubic-bezier(0.4,0,1,1)';

export const transition: SlideTransition = {
  duration: 220,
  exit:  { duration: 150, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-5px)' }] },
  enter: { duration: 220, delay: 80, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// Optional per-page override for the cover — adds a blur-in.
const coverTransition: SlideTransition = {
  duration: 280,
  exit:  { duration: 160, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }] },
  enter: { duration: 280, delay: 100, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
                       { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }] },
};
// Cover.transition = coverTransition;
```

## Aesthetic

Corporate-tech workshop, confident and a touch futuristic — think enterprise digital-transformation training, not a startup pitch. The whole deck is one continuous blue→cyan field; faint white circuit traces, concentric rings, and dot grids sit in the corners like blueprint annotations. Content rides in dark navy glass cards so white CJK type stays crisp. Teal is the only accent and it's used sparingly — an eyebrow chip, a 90 px divider bar, a key number, a one-line insight in teal at the bottom of a page. Headings are heavy (800–900) and large; body is comfortable 500-weight white. Avoid: a second accent hue, gradients other than the house one, rounded "bubbly" UI, drop-shadow stacks, decorative emoji, and stock photography. Restraint on the line art (opacity ≤ 0.28) is what keeps it looking engineered rather than busy.

## Example usage

```tsx
const Cover: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
      <div style={{ fontSize: 33, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 28 }}>
        RPAI 數位優化器 · 工作坊
      </div>
      <h1 style={{ fontSize: 130, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
        簡報大標題
      </h1>
      <p style={{ fontSize: 60, fontWeight: 500, color: white, margin: '20px 0 40px', lineHeight: 1.25 }}>
        一句話副標說明這場講座在做什麼
      </p>
    </div>
  </BG>
);
```
