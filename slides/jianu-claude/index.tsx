import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import aiCostNews from './assets/ai-cost-news.png';
import skillsmpImg from './assets/skillsmp.png';
import claudeSkillsCustomize from './assets/claude-skills-customize.png';
import qrWebsite from './assets/qr-website.png';
import qrInstagram from './assets/qr-instagram.png';
import yinAvatar from './assets/yin-avatar.webp';
import hugoAvatar from './assets/hugo-avatar.png';
import slidoQr from './assets/slido-qr.png';
import qrWebsiteOrig from './assets/qr-website.orig.png';
import accupassEvent from './assets/accupass-event.png';
import accupassQr from './assets/accupass-qr.png';
import surveyQr from './assets/survey-qr.png';


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
// All body text is full white for readability
// Cards use dark navy overlay for contrast
const cardBg     = 'rgba(0,15,55,0.70)';   // general dark card
const cardBgTeal = 'rgba(0,45,65,0.75)';   // teal-accent card
const cardBgRed  = 'rgba(70,0,0,0.70)';    // warning/bad card
const pill       = 'rgba(255,255,255,0.18)'; // bullet number circles, small chips
const F = '"PingFang TC","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif';

const fill: CSSProperties = {
  width: '100%', height: '100%',
  fontFamily: F, position: 'relative', overflow: 'hidden',
};

// ─── Decorative SVG ──────────────────────────────────────────────────────────
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

const DotsBL = () => (
  <svg width="130" height="90" fill="none"
    style={{ position: 'absolute', bottom: 70, left: 120, opacity: 0.28, pointerEvents: 'none' }}>
    <circle cx="10" cy="10" r="2.5" fill="white"/><circle cx="30" cy="10" r="2.5" fill="white"/>
    <circle cx="50" cy="10" r="2.5" fill="white"/><circle cx="70" cy="10" r="2.5" fill="white"/>
    <circle cx="90" cy="10" r="2.5" fill="white"/><circle cx="110" cy="10" r="2.5" fill="white"/>
    <circle cx="10" cy="30" r="2.5" fill="white"/><circle cx="30" cy="30" r="2.5" fill="white"/>
    <circle cx="50" cy="30" r="2.5" fill="white"/><circle cx="70" cy="30" r="2.5" fill="white"/>
    <circle cx="90" cy="30" r="2.5" fill="white"/><circle cx="110" cy="30" r="2.5" fill="white"/>
    <circle cx="10" cy="50" r="2.5" fill="white"/><circle cx="30" cy="50" r="2.5" fill="white"/>
    <circle cx="50" cy="50" r="2.5" fill="white"/><circle cx="70" cy="50" r="2.5" fill="white"/>
    <circle cx="90" cy="50" r="2.5" fill="white"/><circle cx="110" cy="50" r="2.5" fill="white"/>
    <circle cx="10" cy="70" r="2.5" fill="white"/><circle cx="30" cy="70" r="2.5" fill="white"/>
    <circle cx="50" cy="70" r="2.5" fill="white"/><circle cx="70" cy="70" r="2.5" fill="white"/>
    <circle cx="90" cy="70" r="2.5" fill="white"/><circle cx="110" cy="70" r="2.5" fill="white"/>
  </svg>
);

const DotsBR = () => (
  <svg width="130" height="90" fill="none"
    style={{ position: 'absolute', bottom: 70, right: 120, opacity: 0.28, pointerEvents: 'none' }}>
    <circle cx="10" cy="10" r="2.5" fill="white"/><circle cx="30" cy="10" r="2.5" fill="white"/>
    <circle cx="50" cy="10" r="2.5" fill="white"/><circle cx="70" cy="10" r="2.5" fill="white"/>
    <circle cx="90" cy="10" r="2.5" fill="white"/><circle cx="110" cy="10" r="2.5" fill="white"/>
    <circle cx="10" cy="30" r="2.5" fill="white"/><circle cx="30" cy="30" r="2.5" fill="white"/>
    <circle cx="50" cy="30" r="2.5" fill="white"/><circle cx="70" cy="30" r="2.5" fill="white"/>
    <circle cx="90" cy="30" r="2.5" fill="white"/><circle cx="110" cy="30" r="2.5" fill="white"/>
    <circle cx="10" cy="50" r="2.5" fill="white"/><circle cx="30" cy="50" r="2.5" fill="white"/>
    <circle cx="50" cy="50" r="2.5" fill="white"/><circle cx="70" cy="50" r="2.5" fill="white"/>
    <circle cx="90" cy="50" r="2.5" fill="white"/><circle cx="110" cy="50" r="2.5" fill="white"/>
    <circle cx="10" cy="70" r="2.5" fill="white"/><circle cx="30" cy="70" r="2.5" fill="white"/>
    <circle cx="50" cy="70" r="2.5" fill="white"/><circle cx="70" cy="70" r="2.5" fill="white"/>
    <circle cx="90" cy="70" r="2.5" fill="white"/><circle cx="110" cy="70" r="2.5" fill="white"/>
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
    <CircuitDeco /><RingDeco /><DotsBL /><DotsBR />
    {children}
    <Footer />
  </div>
);

// Standard content area — top:80, bottom:92 (footer+20px offset), sides:120
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

// Page heading — 108px (1.5× of original 72px)
const H2 = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <h2 style={{ fontSize: 108, fontWeight: 800, color: white, margin: 0, lineHeight: 1.1, ...style }}>
    {children}
  </h2>
);

const TealBar = () => (
  <div style={{ height: 4, width: 90, background: teal, borderRadius: 2, margin: '18px 0 22px' }} />
);

// Numbered bullet — title 54px, body 42px
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

// Dot bullet — 54px
const DotBullet = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginBottom: 18 }}>
    <div style={{ width: 13, height: 13, borderRadius: '50%', background: teal, flexShrink: 0 }}/>
    <span style={{ fontSize: 54, fontWeight: 500, color: white, lineHeight: 1.35 }}>{text}</span>
  </div>
);

// Key insight box — 51px teal text
const KeyInsight = ({ text }: { text: string }) => (
  <div style={{ marginTop: 'auto', paddingTop: 22, alignSelf: 'flex-start' }}>
    {/* @slide-comment id="c-cbad6ca2" ts="2026-06-12T16:36:10.103Z" text="eyJub3RlIjoi5pS55oiQXCJBSeS4jeWPquaYr-iBiuWkqeapn-WZqOS6ulwiIn0" */}
    <span style={{ fontSize: 42, fontWeight: 700, color: teal }}>{text}</span>
  </div>
);

// Section divider wrapper
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
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08 }}>
        {title}
      </h1>
      <div style={{ height: 5, width: 110, background: teal, borderRadius: 2, margin: '26px 0' }}/>
      <p style={{ fontSize: 60, color: white, margin: 0, fontWeight: 500 }}>{sub}</p>
    </div>
  </BG>
);

// ─── Transitions ─────────────────────────────────────────────────────────────
const EO = 'cubic-bezier(0,0,0.2,1)';
const EI = 'cubic-bezier(0.4,0,1,1)';

export const transition: SlideTransition = {
  duration: 220,
  exit:  { duration: 150, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' },{ opacity: 0, transform: 'translateY(-5px)' }] },
  enter: { duration: 220, delay: 80, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(7px)' },{ opacity: 1, transform: 'translateY(0)' }] },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGES
// ─────────────────────────────────────────────────────────────────────────────

// ── 01 Cover ─────────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <BG>
    <div style={{
      position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 160px',
    }}>
      <div style={{ fontSize: 33, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 28 }}>
        RPAI 數位優化器 · 嘉義女中工作坊
      </div>
      <h1 style={{ fontSize: 130, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
        Claude AI 實戰班
      </h1>
      <p style={{ fontSize: 60, fontWeight: 500, color: white, margin: '20px 0 40px', lineHeight: 1.25 }}>
        教你養一個會做事的數位小幫手
      </p>
      <div style={{ display: 'flex', gap: 20, marginBottom: 56 }}>
        <div style={{ background: 'rgba(0,229,192,0.14)', border: `1px solid ${teal}`, borderRadius: 999, padding: '12px 36px' }}>
          <span style={{ fontSize: 42, color: teal, fontWeight: 700 }}>Claude Chat</span>
        </div>
        <div style={{ background: 'rgba(0,229,192,0.14)', border: `1px solid ${teal}`, borderRadius: 999, padding: '12px 36px' }}>
          <span style={{ fontSize: 42, color: teal, fontWeight: 700 }}>Cowork</span>
        </div>
        <div style={{ background: 'rgba(0,229,192,0.14)', border: `1px solid ${teal}`, borderRadius: 999, padding: '12px 36px' }}>
          <span style={{ fontSize: 42, color: teal, fontWeight: 700 }}>Code</span>
        </div>
      </div>
      <p style={{ fontSize: 36, color: white, margin: 0, opacity: 0.9 }}>{''}</p>
    </div>
    <div style={{
      position: 'absolute', right: 120, bottom: 120,
      display: 'flex', alignItems: 'center', gap: 24,
      background: 'rgba(0,0,0,0.28)', border: `1px solid ${teal}`,
      borderRadius: 18, padding: '20px 24px',
    }}>
      <div style={{ background: white, padding: 10, borderRadius: 10 }}>
        <img src={slidoQr} alt="Slido QR Code" style={{ width: 180, height: 180, display: 'block' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 22, color: teal, fontWeight: 700, letterSpacing: '0.18em' }}>課程互動</div>
        <div style={{ fontSize: 34, color: white, fontWeight: 800, lineHeight: 1 }}>Slido</div>
        <div style={{ fontSize: 18, color: white, opacity: 0.9, fontWeight: 500 }}>
          app.sli.do/event/9bSAF2yyPW6ScEUyh98ETM
        </div>
      </div>
    </div>
  </BG>
);

Cover.transition = {
  duration: 280,
  exit:  { duration: 160, easing: EI,
           keyframes: [{ opacity: 1, transform: 'translateY(0)' },{ opacity: 0, transform: 'translateY(-6px)' }] },
  enter: { duration: 280, delay: 100, easing: EO,
           keyframes: [{ opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },{ opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }] },
};

// ── 01a 講師介紹 ──────────────────────────────────────────────────────────────
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
            <div style={{ fontSize: 32, fontWeight: 800, color: teal, letterSpacing: '0.04em', marginBottom: 24 }}>
              RPAI 數位優化器
            </div>
            <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.02, letterSpacing: '0.02em' }}>
              講師<br/>介紹
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignSelf: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 50, alignItems: 'center' }}>
              <div style={{
                width: 360, height: 360, borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.35)',
                overflow: 'hidden',
              }}>
                <img src={yinAvatar} alt="Yin" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontSize: 100, fontWeight: 900, color: teal, lineHeight: 1, marginBottom: 18 }}>Yin</div>
                <DotBullet text="科技業軟體工程師" />
                <DotBullet text="自動化工具講師" />
                <DotBullet text="自動化導入技術顧問" />
              </div>
            </div>
            <div style={{ background: 'transparent', borderRadius: 12, padding: '20px 28px' }}>
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

// ── 01a-2 助教介紹 Hugo ──────────────────────────────────────────────────────
const InstructorHugo: Page = () => (
  <BG>
    <CA>
      <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: 60, flex: 1, alignItems: 'flex-start' }}>
        <div style={{ lineHeight: '1.55' }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: teal, letterSpacing: '0.04em', marginBottom: 24 }}>
            RPAI 數位優化器
          </div>
          <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.02, letterSpacing: '0.02em' }}>
            助教<br/>介紹
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 60, alignItems: 'center', alignSelf: 'center' }}>
          <div style={{
            width: 420, height: 420, borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.35)',
            overflow: 'hidden',
          }}>
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

// ── 01b 主辦單位 ──────────────────────────────────────────────────────────────
const Organizer: Page = () => (
  <BG>
    <CA>
      <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 60, flex: 1, alignItems: 'center' }}>
        <div style={{ fontSize: 168, fontWeight: 900, color: white, lineHeight: 1.05, letterSpacing: '0.02em' }}>
          主辦<br/>單位
        </div>
        <div>
          <div style={{ fontSize: 60, fontWeight: 800, color: teal, marginBottom: 8 }}>
            RPAI 數位優化器
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: teal, marginBottom: 26, letterSpacing: '0.02em' }}>
            Digital Transformer
          </div>
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

// ── 01c 執行專案 ──────────────────────────────────────────────────────────────
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
          position: 'absolute',
          left: 0, right: 0,
          top: isTop ? 'auto' : -2,
          bottom: isTop ? -2 : 'auto',
          height: 2,
          borderTop: `2px dashed ${dashColor}`,
        }}/>
        <div style={{
          position: 'absolute',
          [isLeft ? 'right' : 'left']: 0,
          [isTop ? 'bottom' : 'top']: -34,
          width: 2, height: 34,
          borderLeft: `2px dashed ${dashColor}`,
        } as CSSProperties}/>
        <div style={{
          fontSize: 38, fontWeight: 800, color: teal,
          marginTop: isTop ? 0 : 14,
          marginBottom: isTop ? 14 : 0,
          letterSpacing: '0.02em',
        }}>{title}</div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {lines.map((t) => (
            <li key={t} style={{ fontSize: '40px', color: white, lineHeight: 1.25, display: 'flex', gap: 10 }}>
              <span style={{ color: teal }}></span><span>{t}</span>
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

          <Callout
            pos={{ top: 10, left: 0 }}
            title="自媒體內容"
            lines={[
              '官方網站超過 100+ 自動化相關議題文章',
              'IG、FB 定期分享聚會、訪談內容',
            ]}
            lineDir="tl"
          />
          <Callout
            pos={{ top: 10, right: 0 }}
            title="講座課程"
            lines={[
              '每月定期線上線下分享活動',
              '企業、大專院校講座',
            ]}
            lineDir="tr"
          />
          <Callout
            pos={{ bottom: 10, left: 0 }}
            title="諮詢陪跑"
            lines={[
              '手把手教學功能 & 帶專案',
              '小型店家、專業工作者',
            ]}
            lineDir="bl"
          />
          <Callout
            pos={{ bottom: 10, right: 0 }}
            title="導入開發"
            lines={[
              '協助金融、科技、長照產業開發流程',
              '自動化工具：Power Automate、UiPath etc.',
            ]}
            lineDir="br"
          />
        </div>
      </CA>
    </BG>
  );
};

// ── 01d 我們相信 ──────────────────────────────────────────────────────────────
const Believe: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="我們相信" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 30 }}>
          <span style={{ fontSize: 110, color: teal, fontWeight: 900, lineHeight: 1, fontFamily: 'Georgia, serif' }}></span>
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

// ── 02 Unit 1 Divider ─────────────────────────────────────────────────────────
const Sec01: Page = () => <SecDiv n="01" title="學生必知的 AI 工具" sub="建立屬於自己的 AI 工具選擇判斷力" />;

// ── 02b Slido 互動 ────────────────────────────────────────────────────────────
const SlidoQR: Page = () => (
  <BG>
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: '0 160px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '60px', fontWeight: 800, color: teal, letterSpacing: '0.18em', marginBottom: 32 }}>Q&A</div>
      <div style={{ fontSize: 132, fontWeight: 900, color: white, lineHeight: 1.1, marginBottom: 48 }}>
        Slido
      </div>
      <div style={{
        background: white, padding: 28, borderRadius: 18,
        boxShadow: '0 16px 50px rgba(0,0,0,0.35)', marginBottom: 36,
      }}>
        <img src={slidoQr} alt="Slido QR Code"
          style={{ width: 420, height: 420, display: 'block' }} />
      </div>
      <a href="https://app.sli.do/event/9bSAF2yyPW6ScEUyh98ETM" target="_blank" rel="noreferrer"
        style={{ fontSize: 40, color: white, fontWeight: 600, textDecoration: 'none', wordBreak: 'break-all', opacity: 0.95 }}>
        app.sli.do/event/9bSAF2yyPW6ScEUyh98ETM
      </a>
    </div>
  </BG>
);

// ── 03 AI 使用地圖 ────────────────────────────────────────────────────────────
const AiMap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01 · 互動暖場" />
      <H2>先盤點：你已經在用哪些 AI？</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: teal }}>你常用的工具</div>
          <div style={{ flex: 1, background: cardBg, border: '1px dashed rgba(255,255,255,0.4)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 42, color: white, opacity: 0.6, fontStyle: 'italic' }}>便條紙貼上來</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: teal }}>你拿它做的事</div>
          <div style={{ flex: 1, background: cardBg, border: '1px dashed rgba(255,255,255,0.4)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 42, color: white, opacity: 0.6, fontStyle: 'italic' }}>便條紙貼上來</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, padding: '10px 0' }}>
        <span style={{ fontSize: 42, color: white }}>⏱ 10 分鐘 — 大家工具差不多，但「用它做什麼」差很多。</span>
      </div>
    </CA>
  </BG>
);

// ── 03b AI 期待與感受 ─────────────────────────────────────────────────────────
const AiReflect: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01 · 動動腦" />
      <H2>你跟 AI 之間</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: teal }}>Q1 你期待 AI 幫你做到什麼？</div>
          <div style={{
            flex: 1, background: cardBg,
            border: '1px dashed rgba(255,255,255,0.4)', borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 42, color: white, opacity: 0.6, fontStyle: 'italic' }}>寫在便條紙上貼這裡</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: teal }}>Q2 你目前用 AI 的感受？</div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 14, flex: 1 }}>
            <div style={{
              background: cardBgTeal, border: '1px dashed rgba(0,229,192,0.5)', borderRadius: 12,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: '18px 28px', gap: 12,
            }}>
              <span style={{ fontSize: 42, fontWeight: 700, color: teal }}>✅ 超乎我的期待</span>
              <span style={{ fontSize: 36, color: white, opacity: 0.6, fontStyle: 'italic' }}>舉個例子…</span>
            </div>
            <div style={{
              background: cardBgRed, border: '1px dashed rgba(255,100,100,0.5)', borderRadius: 12,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: '18px 28px', gap: 12,
            }}>
              <span style={{ fontSize: 42, fontWeight: 700, color: '#ff8a80' }}>⚠️ 偶爾不受控制</span>
              <span style={{ fontSize: 36, color: white, opacity: 0.6, fontStyle: 'italic' }}>交不出你想要的東西…</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, padding: '10px 0' }}>
        <span style={{ fontSize: 42, color: white }}>⏱ 5 分鐘 — 先想清楚，等一下一起討論。</span>
      </div>
    </CA>
  </BG>
);

// ── 04 四大 AI 工具 ───────────────────────────────────────────────────────────
const ToolCard = ({ emoji, name, desc, useCase, highlight }: {
  emoji: string; name: string; desc: string; useCase: string; highlight?: boolean;
}) => (
  <div style={{
    background: highlight ? cardBgTeal : cardBg,
    border: `1px solid ${highlight ? 'rgba(0,229,192,0.60)' : 'rgba(255,255,255,0.30)'}`,
    borderRadius: 12, padding: '24px 20px',
    display: 'flex', flexDirection: 'column', gap: 10,
  }}>
    <div style={{ fontSize: 56, lineHeight: 1 }}>{emoji}</div>
    <div style={{ fontSize: 48, fontWeight: 800, color: highlight ? teal : white }}>{name}</div>
    <div style={{ fontSize: 36, color: white, lineHeight: 1.45, flex: 1 }}>{desc}</div>
    <div style={{ fontSize: 33, color: highlight ? teal : white, opacity: 0.9, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 10 }}>
      適合：{useCase}
    </div>
  </div>
);

const ToolDiff: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01" />
      <H2>它們不是對手，是分工</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, flex: 1 }}>
        <ToolCard emoji="🏍️" name="ChatGPT" desc="通用全能、生態最大、外掛多。像機車，哪都能去。" useCase="發想、聊天、廣度型任務" />
        <ToolCard emoji="🚇" name="Gemini" desc="與 Google 深整合、搜尋強。像捷運，跟城市連在一起。" useCase="查資料、整合 Google 文件" />
        <ToolCard emoji="📚" name="Claude" desc="長文理解、推理穩、語氣中立客觀。像中肯的學長姊。" useCase="讀長文件、寫作、做專題" highlight />
        <ToolCard emoji="🖥️" name="Copilot" desc="嵌在 Office／程式碼裡。像你書桌旁的工讀生。" useCase="Word / Excel / VSCode" />
      </div>
      <KeyInsight text="沒有最強的 AI，只有最適合這個任務的 AI" />
    </CA>
  </BG>
);

// ── 05 廠商優勢地圖 ───────────────────────────────────────────────────────────
const VendorRow = ({
  accent, name, model, str1, str2, task1, task2,
}: {
  accent: string; name: string; model: string;
  str1: string; str2: string; task1: string; task2: string;
}) => (
  <div style={{
    display: 'flex', alignItems: 'stretch',
    background: 'rgba(0,15,55,0.70)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: 10, overflow: 'hidden',
  }}>
    <div style={{ width: 6, background: accent, flexShrink: 0 }} />
    <div style={{ width: 280, padding: '14px 20px', borderRight: '1px solid rgba(255,255,255,0.10)', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 34, fontWeight: 700, color: white, lineHeight: 1.2 }}>{name}</div>
      <div style={{ fontSize: 26, color: 'rgba(255,255,255,0.55)', marginTop: 5 }}>{model}</div>
    </div>
    <div style={{ flex: 1, padding: '14px 20px', borderRight: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
      <div style={{ fontSize: 29, color: white, lineHeight: 1.35 }}>· {str1}</div>
      <div style={{ fontSize: 29, color: white, lineHeight: 1.35 }}>· {str2}</div>
    </div>
    <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
      <div style={{ fontSize: 29, color: white, lineHeight: 1.35 }}>· {task1}</div>
      <div style={{ fontSize: 29, color: white, lineHeight: 1.35 }}>· {task2}</div>
    </div>
  </div>
);

const VendorMap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01" />
      <H2 style={{ fontSize: 78 }}>沒有最強的 AI，只有最適合的 AI</H2>
      <TealBar />
      <div style={{ display: 'flex', padding: '0 0 8px 8px', borderBottom: '1px solid rgba(0,229,192,0.25)', marginBottom: 10 }}>
        <div style={{ width: 286, fontSize: 24, fontWeight: 700, color: teal, letterSpacing: '0.05em' }}>廠商 / 旗艦模型</div>
        <div style={{ flex: 1, fontSize: 24, fontWeight: 700, color: teal, letterSpacing: '0.05em' }}>核心強項</div>
        <div style={{ flex: 1, fontSize: 24, fontWeight: 700, color: teal, letterSpacing: '0.05em' }}>最適合的任務</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <VendorRow accent="#D88A66" name="Anthropic" model="Claude · Opus 4.8"
          str1="代理式編程、長時間自主任務" str2="高可靠度（主動標記自身錯誤）、知識工作"
          task1="軟體開發、大型程式碼遷移" task2="低出錯率的自動化工作流程" />
        <VendorRow accent="#19C39C" name="OpenAI" model="GPT-5.5"
          str1="通用能力全面、工具與電腦操作" str2="深度研究、資料分析、外掛生態最成熟"
          task1="通用助理、跨工具整合工作流程" task2="廣泛的日常與專業任務" />
        <VendorRow accent="#5B9BFF" name="Google" model="Gemini 3.1 Pro／3.5"
          str1="原生多模態（文字／圖／影音／PDF）" str2="超長脈絡、深整 Google 生態、性價比高"
          task1="多模態分析、與 Workspace／Search 整合" task2="大規模且成本敏感的應用" />
        <VendorRow accent="#AEB6C4" name="xAI" model="Grok 4.x"
          str1="即時資訊（串接 X 與網路即時資料）" str2="回答直接、對爭議話題較少迴避"
          task1="即時新聞與趨勢、社群輿情分析" task2="需要「當下」資訊的查詢" />
        <VendorRow accent="#B79CFF" name="開源權重模型" model="DeepSeek V4／Qwen／Kimi 等"
          str1="權重可下載、可自架與微調" str2="成本約為閉源 1/10、資料可留在本地"
          task1="私有部署、資料敏感與合規場景" task2="大量低成本推論、客製化微調" />
      </div>
      <div style={{ marginTop: 10, fontSize: 24, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{''}</div>
    </CA>
  </BG>
);

// ── 06 為什麼推薦 Claude（雙欄 3+2，避免溢出）────────────────────────────────
const WhyClaude: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01" />
      <H2>為什麼我們今天主推 Claude？</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="1" title="專注使用者體驗" body="介面乾淨，回答結構清楚，不給你雜訊" />
          <Bullet n="2" title="開發能力非常厲害" body="寫程式、做網站、製文件，品質高" />
          <Bullet n="3" title="個性中立客觀" body="不諂媚、不亂下定論，適合學習與思辨" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="4" title="更新速度非常快" body="模型與功能迭代快，常常領先業界" />
          <Bullet n="5" title="推動 AI 時代基礎建設" body="MCP、Skill 等開放標準，讓 AI 真的接上你的工具" />
        </div>
      </div>
    </CA>
  </BG>
);

// ── 06 Claude 三大模式 ────────────────────────────────────────────────────────
const ModeCard = ({ icon, label, subtitle, children, footer }: {
  icon: string; label: string; subtitle: string; children: ReactNode; footer: string;
}) => (
  <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.22)', borderRadius: 12, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div style={{ fontSize: 56, lineHeight: 1 }}>{icon}</div>
    <div>
      <span style={{ fontSize: 52, fontWeight: 800, color: teal, display: 'block', marginBottom: 4 }}>{label}</span>
      <span style={{ fontSize: 34, color: teal, fontWeight: 600 }}>{subtitle}</span>
    </div>
    <div style={{ flex: 1, fontSize: 33, color: white, lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 6 }}>{children}</div>
    <div style={{ fontSize: 34, fontWeight: 700, color: teal, borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 12 }}>{footer}</div>
  </div>
);

// ── Claude 產品架構 ──────────────────────────────────────────────────────────
const ClaudeArch: Page = () => {
  const sLabel: CSSProperties = { fontSize: 33, color: teal, fontWeight: 600, marginBottom: 10 };
  const card: CSSProperties = {
    background: cardBg, border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 10, padding: '18px 24px',
  };
  const cTitle: CSSProperties = { fontSize: 44, fontWeight: 800, color: teal, marginBottom: 8, display: 'block' };
  const cSub: CSSProperties = { fontSize: 34, color: white, lineHeight: 1.5, display: 'block' };
  const modePill: CSSProperties = {
    background: pill, borderRadius: 8, padding: '10px 0',
    textAlign: 'center', fontSize: 34, color: white, fontWeight: 700,
  };
  return (
    <BG>
      <CA>
        <div style={{ fontSize: 80, fontWeight: 800, color: white, lineHeight: 1.1, marginBottom: 10 }}>
          Claude 產品架構
        </div>
        <TealBar />
        <div style={sLabel}>使用者入口</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 14, marginBottom: 14 }}>
          <div style={card}>
            <span style={cTitle}>Claude.ai</span>
            <span style={cSub}>網頁 + 手機 App</span>
            <span style={cSub}>一般使用者聊天介面</span>
          </div>
          <div style={card}>
            <span style={cTitle}>Claude Desktop</span>
            <span style={{ ...cSub, fontSize: 32, marginBottom: 10 }}>macOS / Windows 桌面應用</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <div style={modePill}>Chat</div>
              <div style={modePill}>Cowork</div>
              <div style={modePill}>Code</div>
            </div>
          </div>
        </div>
        <div style={sLabel}>開發者產品</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          <div style={card}>
            <span style={cTitle}>Claude Code</span>
            <span style={cSub}>CLI 命令列工具 · Agentic Coding</span>
            <span style={cSub}>給開發者在終端機中使用</span>
          </div>
          <div style={card}>
            <span style={cTitle}>Claude API / Platform</span>
            <span style={cSub}>程式呼叫介面</span>
            <span style={cSub}>整合到自己的應用或服務</span>
          </div>
        </div>
        <div style={sLabel}>底層模型</div>
        <div style={{ background: 'rgba(140,70,30,0.85)', border: '1px solid rgba(210,110,50,0.6)', borderRadius: 10, padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f98b24' }}>
          <span style={{ fontSize: 48, fontWeight: 800, color: white }}>Claude</span>
          <span style={{ fontSize: 38, color: white, opacity: 0.9 }}>Opus 4.8 · Sonnet 4.6 · Haiku 4.5</span>
        </div>
      </CA>
    </BG>
  );
};

const ClaudeModes: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01" />
      <H2>Claude Desktop 功能模組</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, flex: 1 }}>
        <ModeCard icon="" label="Chat" subtitle="最通用的雲端助理" footer="=> 需求討論、諮商">
          <div>- 介面最單純，就是對話框</div>
          <div>- 完全依賴雲端環境</div>
        </ModeCard>
        <ModeCard icon="" label="Cowork" subtitle="萬能的職場助手" footer="=> 爬網站文章、回覆貼文">
          <div>- 可以操作電腦內檔案</div>
          <div>- 可以用操控 Chrome 瀏覽器畫面</div>
          <div>- 可以一次運作好幾個工作</div>
          <div>- 有 project 功能可以分類管理</div>
        </ModeCard>
        <ModeCard icon="" label="Code" subtitle="專業的開發者" footer="=> 開發網站">
          <div>- 可以操作電腦內檔案</div>
          <div>- 有整合版本控制系統（Git）</div>
          <div>- 支援 plan mode（會先撰寫計劃書，再進行任務）</div>
          <div>- 更高的權限控管需求</div>
          <div>- 之後更好銜接到 Claude Code CLI</div>
        </ModeCard>
      </div>
    </CA>
  </BG>
);

// ── 07 單元 1 帶走 ────────────────────────────────────────────────────────────
const Recap01: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 01 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="沒有最強的 AI，只有最適合這個任務的 AI。" />
      <DotBullet text="四大工具是分工，不是對手 — 先想任務，再選工具。" />
      <DotBullet text="Claude 有多種身分：Chat 雲端助理、Cowork 萬能幫手 、Code 專屬工程師..." />
      <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <span style={{ fontSize: 42, color: white, fontStyle: 'italic' }}>
          下一單元：就算選對工具，為什麼有人問得到好答案，有人問了等於沒問？→ Prompt 的真相
        </span>
      </div>
    </CA>
  </BG>
);

// ── 08 Unit 2 Divider ─────────────────────────────────────────────────────────
const Sec02: Page = () => <SecDiv n="02" title="Prompt 的真相" sub="難的從來不是「怎麼寫」" />;

// ── 09 Prompt 迷思 ────────────────────────────────────────────────────────────
const PromptMyth: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02" />
      <H2>Prompt 不是「咒語」</H2>
      <TealBar />
      <Bullet title="迷思" body="以為有神奇句型、模板，背起來貼上去 AI 就變強" />
      <Bullet title="真相" body="AI 很強，但它不會通靈 — 你模糊，它就模糊" />
      <Bullet title="關鍵" body="把力氣花在「想清楚」，不是「背句型」" />
      <KeyInsight text="Prompt 難的從來不是「怎麼寫」，是「你到底知不知道自己要什麼」" />
    </CA>
  </BG>
);

// ── 10 好壞提問（一） ─────────────────────────────────────────────────────────
const ExCard = ({ type, text }: { type: 'bad' | 'good'; text: string }) => (
  <div style={{
    background: type === 'bad' ? cardBgRed : cardBgTeal,
    border: `1px solid ${type === 'bad' ? 'rgba(255,120,120,0.55)' : 'rgba(0,229,192,0.60)'}`,
    borderRadius: 8, padding: '14px 18px', marginBottom: 14,
  }}>
    <span style={{ fontSize: 36, color: white, lineHeight: 1.5 }}>
      {type === 'bad' ? '✗ ' : '✓ '}{text}
    </span>
  </div>
);

const GoodBad1: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02 · 好問題 vs 壞問題（一）" />
      <H2>同一件事，兩種問法</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
        <div>
          <div style={{ fontSize: 42, fontWeight: 700, color: 'rgba(255,160,160,1)', marginBottom: 16 }}>壞的問法 — 太籠統</div>
          <ExCard type="bad" text="幫我複習英文文法" />
          <ExCard type="bad" text="我讀書都記不住怎麼辦" />
        </div>
        <div>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 16 }}>好的問法 — 說清楚了</div>
          <ExCard type="good" text="我 who/which/that 選擇都會錯，請解釋差別並出三題練習" />
          <ExCard type="good" text="我讀書看得懂但隔天就忘，尤其化學反應式。有沒有比重複閱讀更有效的方法？" />
        </div>
      </div>
      <KeyInsight text="差別不在文筆，在「你說清楚了哪裡不會、用什麼方法、想要什麼」" />
    </CA>
  </BG>
);

// ── 11 好壞提問（二） ─────────────────────────────────────────────────────────
const GoodBad2: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02 · 好問題 vs 壞問題（二）" />
      <H2>起點、目標、形式，講清楚</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
        <div>
          <div style={{ fontSize: 42, fontWeight: 700, color: 'rgba(255,160,160,1)', marginBottom: 16 }}>壞的</div>
          <ExCard type="bad" text="介紹一下再生醫療" />
          <ExCard type="bad" text="歷史怎麼讀？" />
          <ExCard type="bad" text="幫我出數學題" />
        </div>
        <div>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 16 }}>好的</div>
          <ExCard type="good" text="我要做 5 分鐘班級報告，主題再生醫療，聽眾是完全沒基礎的高一同學，請整理成三重點做成簡報。" />
          <ExCard type="good" text="歷史課本都看過了，但考試想不起時間順序，有什麼方法把清朝到民國的事件串起來，而不是死背年份？" />
          <ExCard type="good" text="學測數學目標 12 級現在 10 級，機率統計失分最多，請出五題中等難度並告訴我每題考的概念。" />
        </div>
      </div>
    </CA>
  </BG>
);

// ── 12 四件事 ─────────────────────────────────────────────────────────────────
const FourQ: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02" />
      <H2>問 AI 之前，先問自己四件事</H2>
      <TealBar />
      <Bullet n="1" title="我是誰？" body="我的程度、身分、起點在哪（例：高一、完全沒學過）" />
      <Bullet n="2" title="我要什麼？" body="我真正想解決的問題、想達到的目標" />
      <Bullet n="3" title="有什麼限制？" body="時間、長度、聽眾、能力範圍" />
      <Bullet n="4" title="要什麼形式？" body="我想要的產出長相（簡報／練習題／步驟／比喻）" />
    </CA>
  </BG>
);

// ── 13 互動練習 ───────────────────────────────────────────────────────────────
const Practice: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02 · 互動（5 分鐘）" />
      <H2>換你寫：請 AI 幫你準備考試</H2>
      <TealBar />
      <div style={{ fontSize: 42, color: white, lineHeight: 1.5, marginBottom: 20 }}>
        挑一科你最近要考的，照四欄填出一段話，寫完找旁邊同學互看。
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.30)', borderRadius: 10, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(0,229,192,0.22)' }}>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>我是誰</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>我要什麼</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>有什麼限制</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white }}>要什麼形式</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', minHeight: 110 }}>
            <span style={{ fontSize: 33, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ fontSize: 33, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ fontSize: 33, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
          <div style={{ padding: '20px 16px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ fontSize: 33, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14, fontSize: 39, color: white }}>
        對方能看懂你卡在哪嗎？那就是一個好 Prompt。
      </div>
    </CA>
  </BG>
);

// ── 13b 互動練習 · 填寫範例 ───────────────────────────────────────────────────
const PracticeExample: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02 · 填寫範例" />
      <H2>看看別人怎麼填</H2>
      <TealBar />
      <div style={{ fontSize: 42, color: white, lineHeight: 1.5, marginBottom: 20 }}>
        以「兩週後地理段考」為例，把四欄填出來，就能組成一段好 Prompt。
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.30)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(0,229,192,0.22)' }}>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>我是誰</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>我要什麼</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>有什麼限制</div>
          <div style={{ padding: '14px 16px', fontSize: 36, fontWeight: 700, color: white }}>要什麼形式</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            高一升高二，地理段考目前只能拿 65 分。
          </div>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            把「東南亞氣候與季風」這一章從不懂變成能應用。
          </div>
          <div style={{ padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            兩週後考試、每天最多 30 分鐘、課本看過但記不住。
          </div>
          <div style={{ padding: '20px 16px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            三層筆記：核心概念 → 真實例子 → 3 題練習附解析。
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, padding: '18px 22px', background: 'rgba(0,229,192,0.12)', border: '1px solid rgba(0,229,192,0.40)', borderRadius: 10 }}>
        <div style={{ fontSize: 30, color: teal, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 8 }}>組合成一段 Prompt</div>
        <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>
          「我是高一升高二，地理段考只能拿 65 分。請幫我把『東南亞氣候與季風』這章從不懂變成能應用 — 我兩週後考試、每天只有 30 分鐘。請用三層筆記呈現：核心概念、真實例子、3 題練習附解析。」
        </div>
      </div>
    </CA>
  </BG>
);

// ── 14 單元 2 帶走 ────────────────────────────────────────────────────────────
const Recap02: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 02 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="你要先知道自己要什麼，AI 才幫得了你。" />
      <DotBullet text="不要背模板 — 練習把模糊困擾講成具體問題。" />
      <DotBullet text="口訣：我是誰、我要什麼、有什麼限制、要什麼形式。" />
      <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <span style={{ fontSize: 42, color: white, fontStyle: 'italic' }}>
          下一單元：Token、MCP、Skill、Agent 是什麼意思？幫你建立術語地圖。
        </span>
      </div>
    </CA>
  </BG>
);

// ── 15 Break 1 ────────────────────────────────────────────────────────────────
const Break1: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="110" height="110" viewBox="0 0 100 100" fill="none" style={{ marginBottom: 36, opacity: 0.75 }}>
        <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="3"/>
        <line x1="50" y1="18" x2="50" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="50" x2="70" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="4" fill="white"/>
      </svg>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0 }}>休息 10 分鐘</h1>
      <p style={{ fontSize: 57, color: white, marginTop: 28, opacity: 0.9 }}>待會兒：必須掌握的 AI 基礎知識</p>
    </div>
  </BG>
);

// ── 16 Unit 3 Divider ─────────────────────────────────────────────────────────
const Sec03: Page = () => <SecDiv n="03" title="必須掌握的 AI 基礎知識" sub="看懂這些詞，你就從使用者變成指揮者" />;

// ── 17 五個關鍵名詞（雙欄 3+2）────────────────────────────────────────────────
const Keywords: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2>AI 時代的五個關鍵字</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="1" title="Token（詞元）" body="AI 閱讀和回答的「最小單位」。AI 算錢、算長度，都是用 Token 計。" />
          <Bullet n="2" title="MCP（模型上下文協定）" body="AI 對外的「手腳」。讓 AI 接上外部資料與工具，即時查詢真實數據。" />
          <Bullet n="3" title="Skill（技能）" body="教 AI「怎麼做某件事」的說明書。讓 AI 照規範產出 PPT、Word、Excel。" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="4" title="Agent（代理）" body="會「自己分步驟完成任務」的 AI，不只回答，而是動手做完整件事。" />
          <Bullet n="5" title="Harness（運行框架）" body="包住 AI、給它工具與記憶的「外殼」。今天的 Cowork 就是一種 Harness。" />
        </div>
      </div>
    </CA>
  </BG>
);

// ── 17a-0a Prompt 痛點 · 情境一句話 ─────────────────────────────────────────
const PromptPain: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center' }}>
      <Eyebrow text="單元 03" />
      <H2>AI 可不可以記性好一點？</H2>
      <TealBar />
      <div style={{ fontSize: 56, color: white, lineHeight: 1.55, fontWeight: 600, marginTop: 24 }}>
        你磨好的那份 Prompt，平常其實活在備忘錄、Notion、或某個舊對話裡 — 每次想用，都要先翻出來。
      </div>
    </CA>
  </BG>
);

// ── 17a-0b Prompt 痛點 · 三個實際情境 ───────────────────────────────────────
const PromptPainExamples: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2>只能靠複製貼上了嗎？</H2>
      <TealBar />
      <div style={{ fontSize: 38, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45, marginBottom: 28 }}>
        當你還是「自己保管 Prompt」的時候，這些事每天都在發生：
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '22px 28px', fontSize: 40, color: white }}>
          每開一個新對話，都得翻出來複製貼上
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '22px 28px', fontSize: 40, color: white }}>
          換裝置、換瀏覽器就找不到，或不是最新版
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '22px 28px', fontSize: 40, color: white }}>
          想跟同學或同事分享同一套標準，只能丟檔案、各自貼
        </div>
      </div>
    </CA>
  </BG>
);

// ── 17a Skills 是什麼？ ──────────────────────────────────────────────────────
const SkillIntro: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2>Skills 是什麼？</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.35)', borderRadius: 14, padding: '28px 32px' }}>
          <div style={{ fontSize: 26, color: teal, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 18 }}>定義</div>
          <div style={{ fontSize: 56, color: white, fontWeight: 800, lineHeight: 1.25 }}>
            給 AI 的<br />工作使用說明書
          </div>
        </div>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14, padding: '28px 32px' }}>
          <div style={{ fontSize: 26, color: teal, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 18 }}>類比</div>
          <div style={{ fontSize: 56, color: white, fontWeight: 800, lineHeight: 1.25 }}>
            就像公司新人的<br />SOP 手冊
          </div>
        </div>
      </div>
      <div style={{ fontSize: 28, color: teal, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 14 }}>為什麼需要 Skills？</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '18px 26px', fontSize: 38, color: white }}>
          每次都重新說明規則太累、效率低
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '18px 26px', fontSize: 38, color: white }}>
          Skill 讓 AI 記住你的標準，每次產出都一致
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '18px 26px', fontSize: 38, color: white }}>
          多份 Skill 可以組合，打造屬於你的 AI 工作流
        </div>
      </div>
    </CA>
  </BG>
);

// ── 17a-1.5 Skill 從哪裡找 ──────────────────────────────────────────────────
const SkillMarketplace: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · Skill 從哪裡找" />
      <H2>Skills Marketplace</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
        <div style={{
          background: white, borderRadius: 14, padding: 14,
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={skillsmpImg} alt="Skills Marketplace"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{
            background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)',
            borderRadius: 12, padding: '24px 28px',
          }}>
            <div style={{ fontSize: 28, color: teal, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 10 }}>
              網址
            </div>
            <a href="https://skillsmp.com/" target="_blank" rel="noreferrer"
              style={{ fontSize: 56, color: white, fontWeight: 800, textDecoration: 'none', wordBreak: 'break-all' }}>
              skillsmp.com
            </a>
          </div>
          <DotBullet text="搜尋現成 Skill" />
          <DotBullet text="依職業 / 創作者 / GitHub 來源瀏覽" />
        </div>
      </div>
      <KeyInsight text="善用資源，站在巨人的肩膀上" />
    </CA>
  </BG>
);

// ── 17a-1.5b 小組練習 · 拆解 Skill ──────────────────────────────────────────
const SkillMarketplacePractice: Page = () => (
  <BG>
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: '0 160px', textAlign: 'center',
    }}>
      <div style={{ fontSize: 44, fontWeight: 800, color: teal, letterSpacing: '0.18em', marginBottom: 40 }}>練習時間</div>
      <div style={{ fontSize: 132, fontWeight: 900, color: white, lineHeight: 1.15, marginBottom: 28 }}>
        去 Marketplace
      </div>
      <div style={{ fontSize: 132, fontWeight: 900, color: white, lineHeight: 1.15, marginBottom: 56 }}>
        找一個你有興趣的 Skill
      </div>
      <div style={{ height: 4, width: 120, background: teal, borderRadius: 2, marginBottom: 48 }} />
      <div style={{ fontSize: 56, fontWeight: 600, color: white, lineHeight: 1.55, opacity: 0.95 }}>
        先看懂它在做什麼，<br/>再決定要不要加進 Claude。
      </div>
    </div>
  </BG>
);

// ── 17a-1.6 Skill 怎麼裝 ────────────────────────────────────────────────────
const SkillInstall: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · Skill 怎麼裝" />
      <H2>Claude Desktop - SKills</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
        <div style={{
          background: white, borderRadius: 14, padding: 14,
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={claudeSkillsCustomize} alt="Claude Desktop Customize Skills"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{
            background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)',
            borderRadius: 12, padding: '24px 28px',
          }}>
            <div style={{ fontSize: 28, color: teal, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 10 }}>
              安裝路徑
            </div>
            <div style={{ fontSize: 48, color: white, fontWeight: 800, lineHeight: 1.25 }}>
              Customize → Skills
            </div>
          </div>
          <DotBullet text="SKILL.md : 主要描述檔" />
          <DotBullet text="Description：跟 AI 說明觸發時機" />
        </div>
      </div>
      <KeyInsight text="觸發條件寫清楚 AI 才知道何時使用 Skill" />
    </CA>
  </BG>
);

// ── 17a-1.7 Skill 從哪來：三種方法 ─────────────────────────────────────────
const SkillSources: Page = () => {
  const Card = ({ n, title, desc, examples, foot }: {
    n: string; title: string; desc: string; examples: string; foot: string;
  }) => (
    <div style={{
      background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)',
      borderRadius: 14, padding: '28px 28px 24px',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{
        fontSize: 28, color: teal, fontWeight: 800, letterSpacing: '0.12em',
      }}>{n}</div>
      <div style={{ fontSize: 44, color: white, fontWeight: 800, lineHeight: 1.2 }}>
        {title}
      </div>
      <div style={{ fontSize: '32px', color: white, lineHeight: 1.45, opacity: 0.92 }}>
        {desc}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{
        background: 'rgba(0,15,55,0.55)', border: '1px solid rgba(255,255,255,0.16)',
        borderRadius: 8, padding: '12px 14px',
        fontFamily: '"JetBrains Mono","Menlo","Consolas",monospace',
        fontSize: 22, color: white, lineHeight: 1.45,
      }}>
        {examples}
      </div>
      <div style={{ fontSize: 24, color: teal, fontWeight: 700, marginTop: 4 }}>
        {foot}
      </div>
    </div>
  );
  return (
    <BG>
      <CA>
        <Eyebrow text="單元 03 · Skill 從哪來" />
        <H2>怎麼讓 AI 擁有一個 Skill？</H2>
        <TealBar />
        <div style={{ fontSize: 32, color: white, lineHeight: 1.4, marginBottom: 22, opacity: 0.92 }}>
          三條路 — 從最自己動手、到完全現成，挑一條最適合你的方式。
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, flex: 1 }}>
          <Card
            n="方法 1"
            title="跟 Claude 一起寫"
            desc="把你的標準、SOP 講給 Claude 聽，請它整理成 SKILL.md。最貼自己工作流。"
            examples="例：教學評量標準、班級報名表規格、課堂講義格式"
            foot="✓ 最自由　✓ 變成自己的"
          />
          <Card
            n="方法 2"
            title="安裝 Anthropic 官方"
            desc="Claude 內建一鍵安裝官方 Skills，品質與安全經過驗證，常用任務直接用。"
            examples="例：pptx-builder、excel-formula、pdf-form-filler"
            foot="✓ 最安全　✓ 馬上能用"
          />
          <Card
            n="方法 3"
            title="找別人寫好的"
            desc="到 SkillsMP 等市集找社群分享的 SKILL.md，看不同領域怎麼拆解。"
            examples="例：clinical-trial-protocol、code-reviewer、tissue-engineering"
            foot="⚠ 裝之前先看內容"
          />
        </div>
      </CA>
    </BG>
  );
};

// ── 17a-2 Skill 安全警告 ────────────────────────────────────────────────────
const SkillWarning: Page = () => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56 }}>
        <svg width="320" height="320" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* rays */}
          <g stroke="#ff6b35" strokeWidth="10" strokeLinecap="round">
            <line x1="100" y1="10"  x2="100" y2="42" />
            <line x1="55"  y1="22"  x2="68"  y2="50" />
            <line x1="145" y1="22"  x2="132" y2="50" />
            <line x1="22"  y1="55"  x2="50"  y2="68" />
            <line x1="178" y1="55"  x2="150" y2="68" />
          </g>
          {/* dome */}
          <path d="M 50 130 Q 50 60 100 60 Q 150 60 150 130 Z" fill="#ff6b35" />
          {/* highlight */}
          <path d="M 120 70 Q 134 90 130 128 L 122 128 Q 126 92 114 74 Z" fill="#ffffff" opacity="0.85" />
          {/* base */}
          <rect x="42" y="130" width="116" height="26" rx="6" fill="#7a86c9" />
          <rect x="42" y="130" width="116" height="8" rx="4" fill="#5d6bb5" />
        </svg>
        <div style={{ fontSize: 72, color: white, fontWeight: 800, lineHeight: 1.5, textAlign: 'center', letterSpacing: '0.02em' }}>
          安裝網路上別人提供的 Skill 之前<br />請檢查裡面的內容
        </div>
      </div>
    </CA>
  </BG>
);

// ── 17c 動手練習：建立自己的 Skill ──────────────────────────────────────────
const BuildSkillPractice: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 動手練習" />
      <H2 style={{ fontSize: 84 }}>做你自己的「考試準備」Skill</H2>
      <TealBar />
      <div style={{ fontSize: 36, color: white, lineHeight: 1.5, marginBottom: 20, opacity: 0.92 }}>
        把單元 02 那份「準備考試」prompt，升級成可重複呼叫的 Skill — 以後一句話就能啟動。
      </div>
      <Bullet n="1" title="打開 Claude Desktop" body="Customize → Skills → 點右上「＋」新增" />
      <Bullet n="2" title="把你的 prompt 給 Claude" body="貼上你之前寫好的「準備考試」prompt，請它幫你整理成 SKILL.md" />
      <Bullet n="3" title="幫它命名、寫觸發條件" body="取個好名字（例：exam-prep），description 寫清楚什麼情境會觸發，存檔" />
      <KeyInsight text="一個寫過一次的好 prompt → 變成永遠可叫用的 Skill" />
      <div style={{ marginTop: 10, fontSize: 28, color: 'rgba(255,255,255,0.6)' }}>
        下一頁看範例 →
      </div>
    </CA>
  </BG>
);

// ── 17d 練習範例：地理 prompt → SKILL.md 對話 ───────────────────────────────
const BuildSkillExample: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 練習範例" />
      <H2 style={{ fontSize: 78 }}>從一句 prompt 變成一份 Skill</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: teal, letterSpacing: '0.06em' }}>
            你對 Claude 說
          </div>
          <div style={{
            background: cardBg, border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 10, padding: '20px 24px', flex: 1,
            fontSize: 26, color: white, lineHeight: 1.55,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div>
              「我是高一升高二，地理段考只能拿 65 分。請幫我把『東南亞氣候與季風』這章從不懂變成能應用 — 我兩週後考試、每天只有 30 分鐘。請用三層筆記呈現：核心概念、真實例子、3 題練習附解析。」
            </div>
            <div style={{
              borderTop: '1px solid rgba(0,229,192,0.4)', paddingTop: 12,
              color: teal, fontWeight: 600,
            }}>
              → 加一句：「請依此幫我寫一份 SKILL.md，以後我只要說『幫我準備 XX 段考』就自動套用這個流程。」
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: teal, letterSpacing: '0.06em' }}>
            Claude 回你（SKILL.md 草稿）
          </div>
          <div style={{
            background: 'rgba(0,15,55,0.78)', border: '1px solid rgba(0,229,192,0.40)',
            borderRadius: 10, padding: '20px 24px', flex: 1,
            fontFamily: '"JetBrains Mono","Menlo","Consolas",monospace',
            color: white, fontSize: 22, lineHeight: 1.6,
            display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.45)' }}># exam-prep.md</div>
            <div>
              <div style={{ color: teal, fontWeight: 700 }}>## When to use</div>
              <div style={{ marginLeft: 14 }}>使用者要準備任何科目的段考、想把一章從不懂變成能應用時。</div>
            </div>
            <div>
              <div style={{ color: teal, fontWeight: 700 }}>## Hard rules</div>
              <div style={{ marginLeft: 14 }}>- 先問五件事：科目、章節、剩餘天數、每日可用時間、目標分數</div>
              <div style={{ marginLeft: 14 }}>- 產出格式固定為三層筆記</div>
              <div style={{ marginLeft: 14 }}>- 練習題必附解析與對應概念</div>
            </div>
            <div>
              <div style={{ color: teal, fontWeight: 700 }}>## Procedure</div>
              <div style={{ marginLeft: 14 }}>1. 詢問 5 項基本資料</div>
              <div style={{ marginLeft: 14 }}>2. 拆解章節重點</div>
              <div style={{ marginLeft: 14 }}>3. 生三層筆記：核心概念 → 真實例子 → 3 題練習</div>
              <div style={{ marginLeft: 14 }}>4. 附每題解析與下一步建議</div>
            </div>
          </div>
        </div>
      </div>
      <KeyInsight text="把 prompt 變 Skill — 把一次性的好點子變成可重複的習慣" />
    </CA>
  </BG>
);

// ── 17d-2 個人練習：把自己的 prompt 變 Skill ────────────────────────────────
const BuildSkillPersonal: Page = () => (
  <BG>
    <CA>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 48 }}>
        <H2 style={{ fontSize: 120, margin: 0 }}>動手把 prompt 變成 Skill</H2>
        <div style={{ fontSize: 56, color: white, lineHeight: 1.5, opacity: 0.95 }}>
          拿出剛剛寫好的那份 prompt，請 Claude 幫你寫成 SKILL。
        </div>
      </div>
    </CA>
  </BG>
);

// ── 17e Break 中場休息 ──────────────────────────────────────────────────────
const Break3: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="110" height="110" viewBox="0 0 100 100" fill="none" style={{ marginBottom: 36, opacity: 0.75 }}>
        <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="3"/>
        <line x1="50" y1="18" x2="50" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="50" x2="70" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="4" fill="white"/>
      </svg>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0 }}>休息 10 分鐘</h1>
      <p style={{ fontSize: 57, color: white, marginTop: 28, opacity: 0.9 }}>待會兒：Token 成本、模型差異與 MCP</p>
    </div>
  </BG>
);

// ── 17b 新聞引言：AI 真的省錢嗎？ ────────────────────────────────────────────
const TokenCostIntro: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2 style={{ fontSize: 88 }}>AI 真的有比較便宜嗎？</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '900px 1fr', gap: 48, flex: 1, alignItems: 'center' }}>
        <a
          href="https://www.cmoney.tw/notes/note-detail.aspx?nid=1211507"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'block', borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 48px rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.18)' }}
        >
          <img src={aiCostNews} alt="AI 省不了錢？微軟燒光預算、企業上演「裁員再回聘」的人機成本大逆轉" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 30, color: teal, fontWeight: 700, letterSpacing: '0.08em' }}>CMONEY · 2026.06.09</div>
          <div style={{ fontSize: 42, color: white, fontWeight: 700, lineHeight: 1.35 }}>
            微軟燒光 Claude 預算、企業驚覺「AI 工具比人還貴」，竟上演裁員再回聘。
          </div>
          <Bullet n="?" title="AI 一次回答到底花多少錢？" />
          <Bullet n="$" title="為什麼用越多、帳單越驚人？" />
          <Bullet n="!" title="關鍵就在下一個字 — Token" />
          <div style={{ marginTop: 6, fontSize: 24, color: 'rgba(255,255,255,0.6)', wordBreak: 'break-all' }}>
            來源：cmoney.tw/notes/note-detail.aspx?nid=1211507
          </div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 18 Token 計價 ─────────────────────────────────────────────────────────────
const TokenCost: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2>AI 的計價邏輯：你付的是 Token</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 22 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 12, padding: '24px 22px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 12 }}>輸入（Input）</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.5 }}>你丟給 AI 的字<br/>（問題、課文、貼上的檔案）<br/>→ 算 Token</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '24px 22px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 12 }}>輸出（Output）</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.5 }}>AI 回給你的字<br/>→ 也算 Token<br/>通常比輸入貴</div>
        </div>
      </div>
      <Bullet title="聰明分配" body="簡單任務用小模型（快又省）；難任務、長文才動用大模型（深又準）" />
      <KeyInsight text="越聰明的模型，每個 Token 越貴 — 會分配，才省錢又有效率" />
    </CA>
  </BG>
);

// ── 18b 費用試算：大型電商客服案例 ──────────────────────────────────────────
const CostCard = ({ model, inRate, outRate, cost, label, ntd, note, accent }: {
  model: string; inRate: string; outRate: string;
  cost: string; label: string; ntd: string; note: string; accent?: boolean;
}) => (
  <div style={{
    background: accent ? cardBgTeal : cardBg,
    border: `1px solid ${accent ? 'rgba(0,229,192,0.55)' : 'rgba(255,255,255,0.22)'}`,
    borderRadius: 12, padding: '22px 24px',
    display: 'flex', flexDirection: 'column', gap: 8,
  }}>
    <div style={{ fontSize: 44, fontWeight: 800, color: accent ? teal : white }}>{model}</div>
    <div style={{ fontSize: 30, color: white, opacity: 0.75 }}>輸入 {inRate}・輸出 {outRate}</div>
    <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '4px 0' }} />
    <div style={{ fontSize: 26, color: white, opacity: 0.65 }}>{label}</div>
    <div style={{ fontSize: 52, fontWeight: 900, color: accent ? teal : white, lineHeight: 1 }}>{cost}</div>
    <div style={{ fontSize: 26, color: white, opacity: 0.55 }}>{ntd}</div>
    <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '4px 0' }} />
    <div style={{ fontSize: 28, color: white, lineHeight: 1.4 }}>{note}</div>
  </div>
);

const TokenCostCase: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 費用試算" />
      <H2 style={{ fontSize: 72 }}>大型電商客服全用 Opus，會發生什麼？</H2>
      <TealBar />
      <div style={{
        background: cardBgRed, border: '1px solid rgba(255,100,100,0.4)',
        borderRadius: 10, padding: '12px 22px', marginBottom: 16,
      }}>
        <span style={{ fontSize: 30, color: white }}>
          📋 情境（參考 Shopee 規模）：150 萬次 / 月｜每次輸入 ~2,650 tokens（系統提示＋對話記錄），輸出 ~350 tokens
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, flex: 1 }}>
        <CostCard
          model="Haiku 4.5"
          inRate="$1 / MTok"
          outRate="$5 / MTok"
          cost="$6,600 / 月"
          label="每月費用（150萬次）"
          ntd="≈ NT$21萬　簡單問題綽綽有餘"
          note="⚡ 快速回應，最佳性價比"
          accent
        />
        <CostCard
          model="Sonnet 4.6"
          inRate="$3 / MTok"
          outRate="$15 / MTok"
          cost="$19,800 / 月"
          label="每月費用（150萬次）"
          ntd="≈ NT$63萬　處理退換貨、情緒安撫"
          note="⚖️ 複雜情境才需要這個等級"
        />
        <CostCard
          model="Opus 4.8"
          inRate="$5 / MTok"
          outRate="$25 / MTok"
          cost="$33,000 / 月"
          label="每月費用（150萬次）"
          ntd="≈ NT$105萬　全用這個？"
          note="🔥 一年多燒 NT$1,008萬"
        />
      </div>
      <KeyInsight text="Opus vs Haiku 差 5 倍 — 選錯模型，一年多燒 NT$1,000萬。正確做法：簡單問題 Haiku，複雜推理才升級。" />
    </CA>
  </BG>
);

// ── 19 模型差異 ───────────────────────────────────────────────────────────────
const ModelDiff: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03" />
      <H2>模型差異：快 vs 強的取捨</H2>
      <TealBar />
      <div style={{ position: 'relative', height: 20, background: 'rgba(255,255,255,0.18)', borderRadius: 8, margin: '0 0 32px' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', background: 'linear-gradient(90deg,rgba(0,229,192,0.5) 0%,rgba(255,255,255,0.7) 100%)', borderRadius: 8 }}/>
        <div style={{ position: 'absolute', left: '8%', top: '50%', transform: 'translateY(-50%)', fontSize: 30, color: white, fontWeight: 700 }}>輕快省</div>
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', fontSize: 30, color: white, fontWeight: 700 }}>最聰明</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 12, padding: '22px 18px' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: teal, marginBottom: 10 }}>小模型</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.45 }}>回應快、便宜</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.85, marginTop: 8 }}>適合：簡單問答、快速查詢</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.20)', border: '1px solid rgba(255,255,255,0.38)', borderRadius: 12, padding: '22px 18px' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: white, marginBottom: 10 }}>中模型</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.45 }}>平衡速度與能力</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.85, marginTop: 8 }}>適合：日常多數任務</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '22px 18px' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: teal, marginBottom: 10 }}>大模型</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.45 }}>推理深、長文穩</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.85, marginTop: 8 }}>適合：複雜專題、讀長文件</div>
        </div>
      </div>
      <KeyInsight text="同一題，大模型會幫你想到你沒想到的角度 — 選模型，是一種能力" />
    </CA>
  </BG>
);

// ── 20 MCP + Skill 案例 ───────────────────────────────────────────────────────
const McpSkill: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · Demo" />
      <H2>看它接上世界：MCP 查資料、Skill 做產出</H2>
      <TealBar />
      <Bullet n="1" title="MCP 查招生名額" body="用 MCP 接上招生資訊，直接問「某科系今年招幾人」，AI 即時抓回來 — 不是憑記憶猜" />
      <Bullet n="2" title="Skill 做簡報" body="給 Claude 一個「簡報 Skill」，它照規範產出一份 PPT，格式正確、結構清楚" />
      <Bullet n="3" title="Skill 做 Word / Excel" body="同理，產出格式正確的報告與試算表，連版面都幫你排好" />
      <KeyInsight text="MCP 讓 AI 取得資料，Skill 讓 AI 產出成果" />
    </CA>
  </BG>
);

// ── 21 逆向工程互動 ───────────────────────────────────────────────────────────
const ReverseEng: Page = () => (
  <BG>
    <CA style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
      <Eyebrow text="單元 03 · 互動" />
      <H2 style={{ fontSize: 132 }}>逆向工程：</H2>
      <H2 style={{ fontSize: 132, marginTop: 8 }}>從一個 Skill 看懂一個領域</H2>
      <TealBar />
      <div style={{ fontSize: 54, color: white, lineHeight: 1.45, fontWeight: 500 }}>
        拆解一個 Skill，等於<span style={{ color: teal, fontWeight: 700 }}>偷看那個領域的專家怎麼思考</span>。
      </div>
      <div style={{ fontSize: 40, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginTop: 24 }}>
        專家把「怎麼做」寫成 Skill — 我們反過來，從 Skill 讀回專家的腦袋。
      </div>
    </CA>
  </BG>
);

// ── 21a Code Reviewer Skill 範例（給下一頁拆解用）──────────────────────────
const ReelsSkillExample: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 範例 Skill" />
      <H2 style={{ fontSize: 76 }}>一個真正的 Code Reviewer Skill 長這樣</H2>
      <TealBar />
      <div style={{ fontSize: 30, color: white, lineHeight: 1.4, marginBottom: 12 }}>
        一份 AI 工程師會放進 Claude Code 的真實 Skill — 下一頁我們會把它拆開來看。
      </div>
      <div style={{
        background: 'rgba(0,15,55,0.78)', border: '1px solid rgba(0,229,192,0.40)',
        borderRadius: 10, padding: '20px 26px', flex: 1,
        fontFamily: '"JetBrains Mono","Menlo","Consolas",monospace',
        color: white, fontSize: 22, lineHeight: 1.5, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}># code-reviewer.md</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 32, flex: 1 }}>
          <div style={{ lineHeight: '2', fontSize: '28px' }}>
            <div style={{ color: teal, fontWeight: 700 }}>## When to use this skill</div>
            <div style={{ marginLeft: 14 }}>審查 PR、做 security audit、檢查程式碼品質時。</div>

            <div style={{ color: teal, fontWeight: 700, marginTop: 14 }}>## Hard rules（每條 finding 必備）</div>
            <div style={{ marginLeft: 14 }}>- 標嚴重程度：Critical / High / Medium / Low</div>
            <div style={{ marginLeft: 14 }}>- 指出具體行號或片段</div>
            <div style={{ marginLeft: 14 }}>- 附上建議修法</div>
            <div style={{ marginLeft: 14 }}>- 結尾給整體品質分數 1–10</div>
          </div>
          <div style={{ fontSize: '28px', lineHeight: '2' }}>
            <div style={{ color: teal, fontWeight: 700 }}>## Procedure（三大檢查面向）</div>
            <div style={{ marginLeft: 14 }}>1. <span style={{ color: teal }}>Security</span>：SQL injection、XSS、寫死的密鑰、不安全的資料處理</div>
            <div style={{ marginLeft: 14 }}>2. <span style={{ color: teal }}>Performance</span>：多餘迴圈、記憶體洩漏、可快取卻沒快取</div>
            <div style={{ marginLeft: 14 }}>3. <span style={{ color: teal }}>Best practices</span>：命名、錯誤處理、文件、DRY</div>

            <div style={{ color: teal, fontWeight: 700, marginTop: 14 }}>## Don't</div>
            <div style={{ marginLeft: 14 }}>- 不要只說「這段不好」卻沒給 severity、行號、修法</div>
            <div style={{ marginLeft: 14 }}>- 不要混用主觀偏好與真實 bug</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>
        ↑ Skill 把資深 reviewer 的「checklist」變成可重複的步驟　→ 下一頁示範怎麼拆解它
      </div>
    </CA>
  </BG>
);

// ── 21b 逆向工程 · 填寫範例 ───────────────────────────────────────────────────
const ReverseEngExample: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 填寫範例" />
      <H2>把上一頁的 Skill 拆給你看</H2>
      <TealBar />
      <div style={{ fontSize: 39, color: white, lineHeight: 1.5, marginBottom: 18 }}>
        用同一張四欄表，把剛剛那份 Code Reviewer Skill 解讀回「外行能懂的入門知識」—
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(0,229,192,0.22)' }}>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>我選的領域</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>Skill 規定哪些步驟</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>它假設你先懂什麼</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white }}>我學到的入門知識</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div style={{ padding: '20px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.5 }}>
            程式碼審查（Code Review）— 看別人寫的程式有沒有錯、有沒有更好寫法。
          </div>
          <div style={{ padding: '20px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.5 }}>
            ① 三面向：安全 / 效能 / 風格<br/>② 每個 finding 標 Critical–Low<br/>③ 指出行號＋建議修法<br/>④ 給總分 1–10
          </div>
          <div style={{ padding: '20px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.5 }}>
            常見漏洞名詞（SQL injection、XSS）、看得懂程式結構、知道 DRY 是什麼。
          </div>
          <div style={{ padding: '20px 14px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.5 }}>
            好的審查不是憑感覺，是「分嚴重度＋給修法」；DRY、錯誤處理、命名是工程師的共同語言。
          </div>
        </div>
      </div>
      <div style={{ marginTop: 14, fontSize: 33, color: 'rgba(255,255,255,0.6)' }}>
        ✓ 一張表就把「外行→入門」的距離縮短　✓ 重點不是答案，是「拆解這個動作」本身
      </div>
    </CA>
  </BG>
);

// ── 22 單元 3 帶走 ────────────────────────────────────────────────────────────
const Recap03: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 03 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="看懂這些詞，你就從使用者變成指揮者。" />
      <DotBullet text="Token 決定成本 — 簡單任務用小模型，難任務才用大模型。" />
      <DotBullet text="MCP 讓 AI 取得資料，Skill 讓 AI 產出成果，Agent 讓 AI 自己做完。" />
      <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <span style={{ fontSize: 42, color: white, fontStyle: 'italic' }}>
          下一單元：理論講夠了 — 90 分鐘動手，用 Claude Chat 小組接力，做一個真實作品。
        </span>
      </div>
    </CA>
  </BG>
);

// ── 23 Unit 4 Divider ─────────────────────────────────────────────────────────
const Sec04: Page = () => <SecDiv n="04" title="用 Claude Chat 解決真實困擾" sub="小組接力：策略 → 文件 → 作品" />;

// ── 24 任務說明 ───────────────────────────────────────────────────────────────
const MissionBrief: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 小組實作" />
      <H2>你的任務：讓世界記住嘉女</H2>
      <TealBar />
      <div style={{ fontSize: 42, color: white, lineHeight: 1.55, marginBottom: 28 }}>
        情境：「讓一個從沒聽過嘉義女中的人，記住這所學校。你會講哪三件事？」
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ background: cardBgRed, border: '1px solid rgba(255,120,120,0.45)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: 'rgba(255,180,180,1)', marginBottom: 14 }}>你以為的賣點</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.6 }}>「我們很有名」<br/>「我們很厲害」<br/>「升學率很好」</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.85, marginTop: 14 }}>→ 對外人沒有記憶點</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 14 }}>外人真正記得的事</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.6 }}>具體的、有畫面的<br/>別人記得住的<br/>只有這裡才有的</div>
          <div style={{ fontSize: 36, color: teal, marginTop: 14 }}>→ 這才是策略</div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 25 先規劃再執行 ────────────────────────────────────────────────────────────
const PlanFirst: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04" />
      <H2>先規劃，再執行</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 24 }}>
        <div style={{ background: cardBgRed, border: '1px solid rgba(255,120,120,0.45)', borderRadius: 12, padding: '24px 22px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: 'rgba(255,180,180,1)', marginBottom: 12 }}>❌ 直接做</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>一開始就叫 AI「做一份嘉女簡報」<br/>→ 內容空泛、沒重點、改不完</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '24px 22px' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 12 }}>✓ 先規劃</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>先和 AI 討論「哪三件事最有記憶點、講給誰聽、什麼效果」<br/>→ 有計畫書，執行又快又準</div>
        </div>
      </div>
      <KeyInsight text="學會先做規劃，再做執行 — 這是今天最值錢的習慣" />
    </CA>
  </BG>
);

// ── 26 三棒接力 ───────────────────────────────────────────────────────────────
const RelayStep = ({ n, color, label, title, desc, time }: {
  n: string; color: string; label: string; title: string; desc: string; time: string;
}) => (
  <div style={{ background: cardBg, border: `1px solid ${color}55`, borderRadius: 12, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{ width: 54, height: 54, borderRadius: '50%', background: `${color}30`, border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, color, flexShrink: 0 }}>{n}</div>
      <span style={{ fontSize: 36, fontWeight: 700, color }}>{label}</span>
    </div>
    <div style={{ fontSize: 45, fontWeight: 800, color: white }}>{title}</div>
    <div style={{ fontSize: 36, color: white, lineHeight: 1.45 }}>{desc}</div>
    <div style={{ fontSize: 33, color: white, opacity: 0.85 }}>⏱ {time}</div>
  </div>
);

const Relay: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 90 分鐘接力" />
      <H2>三棒接力：策略 → 計畫書 → 作品</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, flex: 1 }}>
        <RelayStep n="1" color="#fbbf24" label="全組" title="策略（海報）" desc="討論三件讓外人記住嘉女的事，寫上海報，每件補一句「為什麼記得住」" time="5 min" />
        <RelayStep n="2" color={teal} label="A 的電腦" title="計畫書" desc="把三件事丟給 Claude，用口訣交代背景，和它一來一回討論，產出完整計畫書" time="25 min" />
        <RelayStep n="3" color="#a78bfa" label="B 的額度" title="作品" desc="拿著計畫書讓 Claude 產出簡報或可互動網頁，不滿意就具體說哪裡要改" time="30 min" />
      </div>
      <div style={{ marginTop: 16, fontSize: 36, color: white }}>
        最後 20 min：各組分享成果 + 複盤「哪一句修正最有效」
      </div>
    </CA>
  </BG>
);

// ── 27 第一棒 ─────────────────────────────────────────────────────────────────
const Relay1: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 第一棒（計時 5 分鐘）" />
      <H2>寫下你們的三件事</H2>
      <TealBar />
      <div style={{ fontSize: 42, color: white, lineHeight: 1.5, marginBottom: 18 }}>
        全組討論 — 讓沒聽過嘉女的人記住這所學校，會講的三件事。
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', background: 'rgba(0,229,192,0.22)' }}>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>#</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>一句話描述</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white }}>為什麼外人記得住</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>①</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', minHeight: 80 }}/>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>②</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)' }}/>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>③</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)' }}/>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)' }}/>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 36, color: white }}>
        找具體的、有畫面的，不要寫形容詞 — 這三件事就是第二棒給 AI 的原料。
      </div>
    </CA>
  </BG>
);

// ── 27b 第一棒 · 填寫範例 ─────────────────────────────────────────────────────
const Relay1Example: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 第一棒 · 填寫範例" />
      <H2>填出來大概會長這樣</H2>
      <TealBar />
      <div style={{ fontSize: 39, color: white, lineHeight: 1.5, marginBottom: 18 }}>
        以下是示範 — 不是標準答案，重點是「具體 + 有畫面」。
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', background: 'rgba(0,229,192,0.22)' }}>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>#</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white, borderRight: '1px solid rgba(255,255,255,0.2)' }}>一句話描述</div>
          <div style={{ padding: '12px 14px', fontSize: 33, fontWeight: 700, color: white }}>為什麼外人記得住</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>①</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            制服是水手領 + 紅領結，全嘉義只有我們這樣穿。
          </div>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            從遠遠就能一眼分辨出是嘉女學生 — 是「視覺辨識度」。
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>②</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            校園裡那棵百年榕樹，每屆畢業班都在那拍班照。
          </div>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            是橫跨數十屆校友的共同畫面 — 一張照片就把時間串起來。
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr' }}>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 42, fontWeight: 700, color: teal }}>③</div>
          <div style={{ padding: '18px 14px', borderRight: '1px solid rgba(255,255,255,0.15)', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            每年高一全年級上阿里山，學長姐教唱校歌看日出。
          </div>
          <div style={{ padding: '18px 14px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 30, color: white, lineHeight: 1.45 }}>
            「上山唱校歌」這件事外人沒聽過 — 是專屬故事點。
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 33, color: 'rgba(255,255,255,0.6)' }}>
        ✓ 都是具體的場景與物件　✗ 沒有「優秀、團結、認真」這種形容詞
      </div>
    </CA>
  </BG>
);

// ── 28 第二棒 ─────────────────────────────────────────────────────────────────
const Relay2: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 第二棒（A 的電腦，25 分鐘）" />
      <H2>和 Claude 討論出計畫書</H2>
      <TealBar />
      <Bullet n="1" title="交代背景" body="用口訣：我們是誰、要做什麼、給誰看、要什麼形式" />
      <Bullet n="2" title="丟入三件事" body="把海報上的三件事交給 Claude，請它幫忙組織成計畫書" />
      <Bullet n="3" title="來回修正" body="不滿意就說清楚「哪裡不對、想要什麼」，讓它改" />
      <div style={{ marginTop: 16, background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, padding: '16px 20px' }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: teal, marginBottom: 8 }}>計畫書應包含：</div>
        <div style={{ fontSize: 36, color: white, lineHeight: 1.6 }}>主題與目標對象 · 三個記憶點與順序 · 風格語氣 · 預計呈現形式（簡報／網頁）</div>
      </div>
      <KeyInsight text="先把計畫書打磨好，不要急著做成品" />
    </CA>
  </BG>
);

// ── 29 第三棒 ─────────────────────────────────────────────────────────────────
const Relay3: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 第三棒（B 的額度，30 分鐘）" />
      <H2>依計畫書產出作品</H2>
      <TealBar />
      <Bullet n="1" title="換帳號" body="改用組員 B 的帳號額度" />
      <Bullet n="2" title="餵計畫書" body="把第二棒的計畫書整份貼給 Claude，請它產出簡報或可互動網頁" />
      <Bullet n="3" title="驗收微調" body="成品哪裡不對，用具體描述請它調整（顏色？少了哪件事？語氣太硬？）" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 16 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, padding: '14px 18px' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: teal, marginBottom: 6 }}>產出選項</div>
          <div style={{ fontSize: 36, color: white }}>簡報 / 可互動單頁網站</div>
        </div>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 10, padding: '14px 18px' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: teal, marginBottom: 6 }}>備用方案</div>
          <div style={{ fontSize: 36, color: white }}>額度不足 → 繼續使用其他組員的額度來做產出，要記得把計劃書跟簡報都一併附上</div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 30 分享複盤 ───────────────────────────────────────────────────────────────
const ShareRecap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 各組分享（15 分鐘）" />
      <H2>分享：你怎麼「修正」AI？</H2>
      <TealBar />
      <div style={{ fontSize: 45, color: white, lineHeight: 1.55, marginBottom: 22 }}>
        各組推一人，秀出作品連結，回答三件事：
      </div>
      <DotBullet text="你第一次的產出哪裡不滿意？" />
      <DotBullet text="你後來怎麼「重講」，它才改對？" />
      <DotBullet text="哪一句修正最有效？" />
      <KeyInsight text="產出不如預期，不是 AI 的錯 — 是你還沒說清楚" />
    </CA>
  </BG>
);

// ── 31 單元 4 帶走 ────────────────────────────────────────────────────────────
const Recap04: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 04 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="學會先做規劃，再做執行。" />
      <DotBullet text="AI 在協作裡是「執行者」，方向由你定 — 原料好，成品才好。" />
      <DotBullet text="產出不如預期時，用「具體描述哪裡不對」來修正，而不是重來。" />
      <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <span style={{ fontSize: 42, color: white, fontStyle: 'italic' }}>
          下一單元：Chat 會「動嘴」幫你想。但 AI 還能「動手」操作你的電腦嗎？休息後見識 Cowork。
        </span>
      </div>
    </CA>
  </BG>
);

// ── 32 Break 2 ────────────────────────────────────────────────────────────────
const Break2: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="110" height="110" viewBox="0 0 100 100" fill="none" style={{ marginBottom: 36, opacity: 0.75 }}>
        <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="3"/>
        <line x1="50" y1="18" x2="50" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="50" x2="70" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="4" fill="white"/>
      </svg>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0 }}>休息 10 分鐘</h1>
      <p style={{ fontSize: 57, color: white, marginTop: 28, opacity: 0.9 }}>待會兒：讓 Claude 代替你操作電腦</p>
    </div>
  </BG>
);

// ── 33 Unit 5 Divider ─────────────────────────────────────────────────────────
const Sec05: Page = () => <SecDiv n="05" title="讓 Claude 代替你操作電腦" sub="AI 不只會講，還會動手" />;

// ── 34 Cowork vs Chat ─────────────────────────────────────────────────────────
const CoworkVsChat: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 05" />
      <H2>Chat 動嘴，Cowork 動手</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 12, padding: '28px 24px' }}>
          <div style={{ fontSize: 54, fontWeight: 800, color: white, marginBottom: 16 }}>💬 Chat</div>
          <div style={{ fontSize: 42, color: white, lineHeight: 1.55 }}>你問、它答。<br/>產出在對話框裡，<br/>要你自己複製、貼上、整理。</div>
          <div style={{ fontSize: 39, color: white, opacity: 0.85, marginTop: 14 }}>= 顧問，給建議</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '28px 24px' }}>
          <div style={{ fontSize: 54, fontWeight: 800, color: teal, marginBottom: 16 }}>🤝 Cowork</div>
          <div style={{ fontSize: 42, color: white, lineHeight: 1.55 }}>你交辦、它執行。<br/>會操作檔案、瀏覽器，<br/>產出實體檔案，<br/>還能設定期任務。</div>
          <div style={{ fontSize: 39, color: teal, marginTop: 14 }}>= 助理，做實事</div>
        </div>
      </div>
      <KeyInsight text="同一個 Claude，Cowork 多了一雙「手」和一個「工作桌」" />
    </CA>
  </BG>
);

// ── 35 助理情境 ───────────────────────────────────────────────────────────────
const AssistantScene: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 05" />
      <H2>想像你有一個助理</H2>
      <TealBar />
      <div style={{ fontSize: 45, color: white, lineHeight: 1.55, marginBottom: 26 }}>你可以交辦：</div>
      <DotBullet text="「把這 30 份報告改好檔名、分類好」" />
      <DotBullet text="「去這個網站把資料抓下來整理成 Excel」" />
      <DotBullet text="「每天早上幫我整理一次」" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 22 }}>
        <div style={{ background: cardBgRed, border: '1px solid rgba(255,120,120,0.40)', borderRadius: 10, padding: '16px 20px' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: 'rgba(255,180,180,1)', marginBottom: 6 }}>以前</div>
          <div style={{ fontSize: 36, color: white }}>自己一個一個做，花幾個小時</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.50)', borderRadius: 10, padding: '16px 20px' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: teal, marginBottom: 6 }}>Cowork 後</div>
          <div style={{ fontSize: 36, color: white }}>交辦出去，幾分鐘完成</div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 36 三個動手示範 ───────────────────────────────────────────────────────────
const ThreeDemo: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 05 · Demo（約 12 分鐘）" />
      <H2>三個動手示範</H2>
      <TealBar />
      <Bullet n="1" title="整理報告" body="給一批檔名雜亂的學生報告 → Cowork 統一檔名、按班級分類，自己一個一個處理" />
      <Bullet n="2" title="取得學測歷屆考題" body="請 Cowork 打開大考中心網站，下載歷屆考題並解析" />
      <Bullet n="3" title="分析穿戴裝置心率數據" body="丟一份「一日心率紀錄.csv」給 Cowork → 自動讀 Excel、畫趨勢圖、抓出異常心跳時段、輸出一頁分析摘要 " />
      <KeyInsight text="AI 不只是聊天機器人，Claude Cowork 模式讓你輕鬆指揮 AI 動手" />
    </CA>
  </BG>
);

// ── 37 定期任務 ───────────────────────────────────────────────────────────────
const ScheduleTask: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 05 · 定期任務 & 互動" />
      <H2>讓它「定期」幫你做 + 逆向拆解考題</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: teal, marginBottom: 14 }}>⏰ 定期任務</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>設定「每週一早上自動抓 NEJM、Nature Medicine、食藥署 上週新藥核准，整理成一頁摘要」，設定一次，它每週自動做。</div>
          <div style={{ fontSize: 36, color: white, opacity: 0.85, marginTop: 12 }}>一次設定，每週自動執行</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: teal, marginBottom: 14 }}>🔍 逆向拆解考題</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>丟一份大考考題給 Cowork，請它拆解：這題在考哪個觀念、屬於哪幾章、難點在哪。</div>
          <div style={{ fontSize: 36, color: teal, marginTop: 12 }}>從考題反推「該複習什麼」</div>
        </div>
      </div>
      <KeyInsight text="AI 不只幫你解題，還能當你的讀書策略顧問" />
    </CA>
  </BG>
);

// ── 38 單元 5 帶走 ────────────────────────────────────────────────────────────
const Recap05: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 05 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="AI 不只會講，還會動手。" />
      <DotBullet text="Chat 給建議、Cowork 做實事 — 整理檔案、抓資料做 Excel、設定期任務。" />
      <DotBullet text="" />
      <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <span style={{ fontSize: 42, color: white, fontStyle: 'italic' }}>
          最後一單元：AI 這麼強，那我們為什麼還要讀書？
        </span>
      </div>
    </CA>
  </BG>
);

// ── 39 Unit 6 Divider ─────────────────────────────────────────────────────────
const Sec06: Page = () => <SecDiv n="06" title="未來指南：學科知識才是真本錢" sub="AI 放大的是你腦袋裡的東西" />;

// ── 40 誠實的問題 ─────────────────────────────────────────────────────────────
const HonestQ: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 06 · 互動（3 分鐘）" />
      <H2>一個誠實的問題</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.30)', borderRadius: 16, padding: '36px 44px', marginBottom: 32 }}>
          <p style={{ fontSize: 57, fontWeight: 700, color: white, margin: 0, lineHeight: 1.4 }}>
            如果 AI 能寫出比你更好的作文、<br/>解出比你更難的數學題——
          </p>
          <p style={{ fontSize: 63, fontWeight: 900, color: teal, margin: '18px 0 0', lineHeight: 1.3 }}>那我們為什麼還要學習？</p>
        </div>
        <div style={{ fontSize: 42, color: white, lineHeight: 1.55 }}>
          在便條紙上誠實寫下你的真實想法，再找旁邊同學講一分鐘。
        </div>
      </div>
    </CA>
  </BG>
);

// ── 41 AI 放大你的知識 ────────────────────────────────────────────────────────
const Amplify: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 06" />
      <H2>為什麼學科知識更重要了</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 22 }}>
        <div style={{ background: cardBgRed, border: '1px solid rgba(255,120,120,0.45)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 45, fontWeight: 700, color: 'rgba(255,180,180,1)', marginBottom: 14 }}>沒有底子的人</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>看不出 AI 哪裡講錯<br/>問不出好問題<br/>無法判斷答案好壞</div>
          <div style={{ fontSize: 36, color: 'rgba(255,180,180,1)', marginTop: 14, fontWeight: 600 }}>→ 被 AI 牽著走</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 12, padding: '24px 20px' }}>
          <div style={{ fontSize: 45, fontWeight: 700, color: teal, marginBottom: 14 }}>有底子的人</div>
          <div style={{ fontSize: 39, color: white, lineHeight: 1.55 }}>知道要問什麼<br/>看得出對錯<br/>能把 AI 的產出再升級</div>
          <div style={{ fontSize: 36, color: teal, marginTop: 14, fontWeight: 600 }}>→ 駕馭 AI</div>
        </div>
      </div>
      <div style={{ background: cardBg, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 12, padding: '20px 26px', marginBottom: 14 }}>
        <div style={{ fontSize: 36, color: white, lineHeight: 1.5 }}>
          你<span style={{ color: teal, fontWeight: 800 }}>懂得越深、研究得越透徹</span>，就越能<span style={{ color: teal, fontWeight: 800 }}>駕馭 AI</span> — 因為你知道如何判斷是非、如何透過反問逐步逼近真相。
        </div>
      </div>
      <KeyInsight text="不學習的人用 AI，得到平均值；學習的人用 AI，得到槓桿。" />
    </CA>
  </BG>
);

// ── 42 持續學習路徑（雙欄 3+2）────────────────────────────────────────────────
const LearnPath: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 06" />
      <H2>離開這裡之後，怎麼繼續學</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="1" title="動手用" body="把今天的工具用在這週的作業、報告、讀書計畫上" />
          <Bullet n="2" title="追更新" body="AI 變很快，關注官方部落格與可信來源，別只看農場文" />
          <Bullet n="3" title="找同伴" body="和同學組讀書／AI 共學小組，互相分享好用法" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Bullet n="4" title="逆向學習" body="用今天教的「拆解 Skill／拆解考題」持續探索有興趣的領域" />
          <Bullet n="5" title="保持判斷" body="永遠問一句：它這樣講對嗎？我怎麼驗證？" />
        </div>
      </div>
    </CA>
  </BG>
);

// ── 43 共學分享 ───────────────────────────────────────────────────────────────
const CoLearn: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 06 · 共學" />
      <H2>分享你今天的一個發現</H2>
      <TealBar />
      <div style={{ fontSize: 42, color: white, lineHeight: 1.5, marginBottom: 18 }}>
        寫下兩件事，願意分享的舉手 — 你覺得普通的發現，可能正好是別人卡住的地方。
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ border: '1px dashed rgba(255,255,255,0.35)', borderRadius: 12, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 16 }}>今天最有感的發現</div>
          <div style={{ flex: 1, background: cardBg, borderRadius: 8, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 36, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
        </div>
        <div style={{ border: '1px dashed rgba(0,229,192,0.45)', borderRadius: 12, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 42, fontWeight: 700, color: teal, marginBottom: 16 }}>回去最想試的一件事</div>
          <div style={{ flex: 1, background: cardBgTeal, borderRadius: 8, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 36, color: white, opacity: 0.55, fontStyle: 'italic' }}>（填寫）</span>
          </div>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 44 單元 6 帶走 ────────────────────────────────────────────────────────────
const Recap06: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="單元 06 · 帶走清單" />
      <H2>帶走一件事</H2>
      <TealBar />
      <DotBullet text="AI 放大的是你腦袋裡的東西。" />
      <DotBullet text="學科知識給你「判斷 AI 對不對」的能力 — 這比任何時候都重要。" />
      <DotBullet text="持續學習：動手用、追更新、找同伴、保持判斷。" />
      <div style={{ marginTop: 'auto', paddingTop: 14, fontSize: 30, color: 'rgba(255,255,255,0.40)', borderTop: '1px solid rgba(255,255,255,0.10)', textAlign: 'right' }}>
        下一頁是舉例 →
      </div>
    </CA>
  </BG>
);

// ── 45 實戰範例 01：備審資料 × Claude ─────────────────────────────────────────
const Example01: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="實戰範例 01" />
      <H2 style={{ fontSize: 84 }}>備審資料 × Claude</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.20)', borderRadius: 12, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 39, fontWeight: 700, color: white, marginBottom: 4 }}>你帶來的材料</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 參加天文社三年、擔任副社長</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 辦過三次校內觀星活動，吸引百人</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 目標：申請大學天文物理系</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 困惑：不知道怎麼讓自傳「動人」</div>
          <div style={{ marginTop: 'auto', fontSize: 30, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 12 }}>
            →  你帶來故事，Claude 幫你找角度
          </div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 12, padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 39, fontWeight: 700, color: teal, marginBottom: 4 }}>Claude 做什麼</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 把散亂經歷串成一條故事線</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 找出最有力的切入角度</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 把「擔任副社長」改寫成「帶領 30 人完成夜觀計畫」</div>
          <div style={{ fontSize: 33, color: white, lineHeight: 1.5 }}>· 提問反逼你把細節想清楚</div>
          <div style={{ marginTop: 'auto', fontSize: 30, color: teal, fontStyle: 'italic', borderTop: '1px solid rgba(0,229,192,0.2)', paddingTop: 12 }}>
            →  Claude 不能替你創造經歷，只能放大你有的
          </div>
        </div>
      </div>
      <KeyInsight text="你帶來底子，Claude 幫你說清楚" />
    </CA>
  </BG>
);

// ── 46 實戰範例 02：考前衝刺計畫 × Claude ─────────────────────────────────────
const Example02: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="實戰範例 02" />
      <H2 style={{ fontSize: 84 }}>考前衝刺計畫 × Claude</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.20)', borderRadius: 12, padding: '24px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 35, fontWeight: 700, color: white, marginBottom: 14 }}>你輸入的 Prompt</div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '16px 18px', flex: 1 }}>
            <div style={{ fontSize: 31, color: white, lineHeight: 1.6, fontStyle: 'italic' }}>
              「我剩 14 天，學測在即。數學和化學最弱，每天只有 4 小時可以讀書。幫我排一個衝刺計畫，每天要讀什麼、各幾小時。」
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 30, color: 'rgba(255,255,255,0.5)' }}>✓ 說清楚條件 → Claude 才能給出有用的計畫</div>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.45)', borderRadius: 12, padding: '24px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 35, fontWeight: 700, color: teal, marginBottom: 14 }}>Claude 給你什麼</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
            <div style={{ fontSize: 31, color: white, lineHeight: 1.5 }}>· 14 天逐日時間配比（數學 2h + 化學 1.5h + 複習 0.5h）</div>
            <div style={{ fontSize: 31, color: white, lineHeight: 1.5 }}>· 數學：先攻錯題本 → 再練新題型</div>
            <div style={{ fontSize: 31, color: white, lineHeight: 1.5 }}>· 化學：週期表記憶法 + 反應式速查</div>
            <div style={{ fontSize: 31, color: white, lineHeight: 1.5 }}>· 每三天安排一次模擬測驗</div>
          </div>
          <div style={{ marginTop: 14, fontSize: 30, color: teal, borderTop: '1px solid rgba(0,229,192,0.2)', paddingTop: 12 }}>
            ⚠ 你還是要判斷計畫合不合理！
          </div>
        </div>
      </div>
      <KeyInsight text="AI 給方向，你用學科知識判斷對不對" />
    </CA>
  </BG>
);

// ── 47 結語 / Slido QA ────────────────────────────────────────────────────────
const Closing: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
      <div style={{ fontSize: 36, color: teal, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 26 }}>SLIDO Q&A</div>
      <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08 }}>你的問題，現在問</h1>
      <div style={{ height: 5, width: 110, background: teal, borderRadius: 2, margin: '22px 0 18px' }}/>
      <p style={{ fontSize: 51, color: white, margin: '0 0 44px', fontWeight: 400 }}>{''}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.30)', borderRadius: 8, padding: '14px 24px', display: 'inline-block', alignSelf: 'flex-start' }}>
          <span style={{ fontSize: 39, color: white, fontWeight: 600 }}>沒有最強的 AI，只有最適合的</span>
        </div>
        <div style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.30)', borderRadius: 8, padding: '14px 24px', display: 'inline-block', alignSelf: 'flex-start' }}>
          <span style={{ fontSize: 39, color: white, fontWeight: 600 }}>你要先知道自己要什麼，AI 才幫得了你</span>
        </div>
        <div style={{ background: cardBgTeal, border: '1px solid rgba(0,229,192,0.55)', borderRadius: 8, padding: '14px 24px', display: 'inline-block', alignSelf: 'flex-start' }}>
          <span style={{ fontSize: 39, color: teal, fontWeight: 700 }}>AI 放大的是你腦袋裡的東西</span>
        </div>
      </div>
    </div>
  </BG>
);

// ── 結尾 · 自動化旅程 ─────────────────────────────────────────────────────────
const JourneyEnd: Page = () => (
  <BG>
    <div style={{ position: 'absolute', inset: 0, padding: '120px 160px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: white, letterSpacing: '0.04em', marginBottom: 80, opacity: 0.92 }}>
          RPAI 數位優化器
        </div>
        <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.18, letterSpacing: '-0.01em' }}>
          決定好踏上自動化<br/>旅程了嗎？
        </h1>
        <div style={{ height: 4, width: 110, background: teal, borderRadius: 2, margin: '48px 0 36px' }} />
        <p style={{ fontSize: 48, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
          讓我們一起由簡單開始，<span style={{ color: teal, fontWeight: 700 }}>成就不簡單！</span>
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, objectFit: 'cover', lineHeight: '1.2' }}>
          <div style={{ background: white, padding: 16, borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.35)', backgroundColor: '#009bc7' }}>
            <img src={qrWebsiteOrig} alt="官方網站 QR code" style={{ width: 340, height: 340, display: 'block' }}/>
          </div>
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>WEBSITE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ background: white, padding: 16, borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.35)' }}>
            <img src={qrInstagram} alt="Instagram QR code" style={{ width: 340, height: 340, display: 'block', objectFit: 'cover' }}/>
          </div>
          <span style={{ fontSize: 26, color: white, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9 }}>@RPAI_DIGITALTRANSFORMER</span>
        </div>
      </div>
    </div>
  </BG>
);

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
        <p style={{ fontSize: 46, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
          完成後<span style={{ color: teal, fontWeight: 800 }}>{''}</span>{''}
          取得：
        </p>
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
        <div style={{ fontSize: 32, color: white, fontWeight: 800, letterSpacing: '0.08em' }}>
          掃描填寫問卷
        </div>
        <div style={{ fontSize: 22, color: white, opacity: 0.75, letterSpacing: '0.02em' }}>
          forms.gle / Google 表單
        </div>
      </div>
    </div>
  </BG>
);

const EventPromo: Page = () => (
  <BG>
    <div style={{ position: 'absolute', inset: 0, padding: '90px 120px 110px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
        <Eyebrow text="RPAI 實體聚 · 活動報名" />
      </div>
      <H2 style={{ fontSize: 78, lineHeight: 1.15 }}>
        {'從 0 到 1 '}
        <span style={{ color: teal }}>實戰 Claude 三大模式</span>
      </H2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'center', marginTop: 32 }}>
        <div style={{
          borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
          border: '2px solid rgba(255,255,255,0.18)',
        }}>
          <img src={accupassEvent} alt="RPAI 實體聚活動視覺" style={{ width: '100%', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
          <div style={{ background: white, padding: 18, borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.35)' }}>
            <img src={accupassQr} alt="Accupass 活動報名 QR code" style={{ width: 320, height: 320, display: 'block' }}/>
          </div>
          <div style={{ fontSize: 30, color: white, fontWeight: 700, letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1.4 }}>
            掃描關注RPAI講座資訊<br/>
            <span style={{ color: teal, fontSize: 24, letterSpacing: '0.02em' }}>accupass.com</span>
          </div>
        </div>
      </div>
    </div>
  </BG>
);

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: '為什麼是 Claude？高中生必知的 AI 工具',
  createdAt: '2026-06-01T15:12:35.854Z',
};

export default [
  Cover,
  Organizer,
  Projects, Instructor, InstructorHugo, Believe,
  Sec01, AiMap, AiReflect, VendorMap, WhyClaude, ClaudeArch, ClaudeModes, Recap01, Sec02,
  PromptMyth, GoodBad1, GoodBad2, FourQ, Practice, PracticeExample, Recap02, Break1,
  Sec03,
  Keywords, PromptPain, PromptPainExamples, SkillIntro, SkillSources, SkillInstall, BuildSkillExample, BuildSkillPractice, BuildSkillPersonal, SkillMarketplace, ReverseEng, ReelsSkillExample, ReverseEngExample, SkillMarketplacePractice, SkillWarning, Break3, TokenCostIntro, TokenCost, TokenCostCase, ModelDiff, McpSkill, Recap03, Sec04,
  MissionBrief, PlanFirst, Relay, Relay1, Relay1Example, Relay2, Relay3, ShareRecap, Recap04, Break2,
  Sec05,
  CoworkVsChat, AssistantScene, ThreeDemo, Sec06,
  HonestQ, Amplify, LearnPath, CoLearn, Recap06, SlidoQR,
  EventPromo,
  Survey,
  JourneyEnd,
] satisfies Page[];
