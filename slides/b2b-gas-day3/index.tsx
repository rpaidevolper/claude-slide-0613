import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import yinAvatar from '@assets/rpai/yin-avatar.webp';
import qrWebsite from '@assets/rpai/qr-website.png';
import qrInstagram from '@assets/rpai/qr-instagram.png';
import bgGradient from '@assets/rpai/bg-gradient.png';
import appsScriptIntro from './assets/apps-script-intro.png';
import hands1EditorLog from './assets/hands1-editor-log.png';
import authNeed from './assets/auth-1-need.png';
import authUnverified from './assets/auth-2-unverified.png';
import authConfirm from './assets/auth-3-confirm.png';
import hands2WriteSheet from './assets/hands2-write-sheet.png';
import triggerNewDialog from './assets/trigger-new-dialog.png';
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
const cardBg     = 'rgba(8,25,70,0.50)';        // 唯一卡底
const border     = '1px solid rgba(255,255,255,0.18)';
const accentEdge = '4px solid #00e5c0';          // 強調卡左邊條
const warnEdge   = '4px solid #ffb74d';          // 警告卡左邊條
const warnText   = '#ffb74d';
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
      padding: '0 120px', borderTop: '1px solid rgba(255,255,255,0.18)',
    }}>
      <span style={{ fontSize: 30, color: white, fontWeight: 600, letterSpacing: '0.06em', opacity: 0.85 }}>
        RPAI 數位優化器 · B2B 訂單分析 Day 3
      </span>
      <span style={{ fontSize: 30, color: white, opacity: 0.85 }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const BG = ({ children }: { children: ReactNode }) => (
  <div style={{
    ...fill,
    backgroundColor: '#1565c0',
    backgroundImage: `url(${bgGradient})`,
    backgroundSize: '1920px 1080px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontSize: '46px',
  }}>
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
            <span>{codePart === '' && comment === '' ? ' ' : codePart}</span>
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
    background: cardBg, border, borderLeft: accentEdge,
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
const BreakPage = ({ title, sub, back }: { title: string; sub?: string; back: string }) => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <div style={{ fontSize: 36, color: teal, fontWeight: 700, letterSpacing: '0.24em' }}>BREAK</div>
        <div style={{ fontSize: 150, fontWeight: 900, color: white, lineHeight: 1.05 }}>{title}</div>
        <div style={{ height: 5, width: 120, background: teal, borderRadius: 2, margin: '14px 0 24px' }} />
        {sub && <div style={{ fontSize: 48, color: white, fontWeight: 600, lineHeight: 1.4, maxWidth: 1300 }}>{sub}</div>}
        <div style={{
          marginTop: 28, fontSize: 40, fontWeight: 800, color: teal,
          background: cardBg, border, borderLeft: accentEdge,
          borderRadius: 999, padding: '12px 44px',
        }}>{back}</div>
      </div>
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 開場
// ════════════════════════════════════════════════════════════════════════════

// ── 封面 ───────────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <BG>
    <div style={{ position: 'absolute', top: 0, bottom: 60, left: 0, right: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
      <div style={{ fontSize: 33, color: teal, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 28 }}>
        RPAI 數位優化器 · B2B 訂單分析與推薦 Day 3
      </div>
      <h1 style={{ fontSize: 130, fontWeight: 900, color: white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
        掌握 Google Apps Script
      </h1>
      <p style={{ fontSize: 60, fontWeight: 500, color: white, margin: '24px 0 40px', lineHeight: 1.25 }}>
        <span style={{ color: teal, fontWeight: 700 }}>用 自動化 + AI 放大你的能力</span>
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 30 }}>
        {['Google Apps Script', 'Gmail', 'Google Sheet', 'Gemini API'].map((t) => (
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

// ── 主辦單位 ──────────────────────────────────────────────────────────────
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

// ── 講師介紹 (Yin) ────────────────────────────────────────────────────────
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

// ── 開場複習章節頁 ────────────────────────────────────────────────────────
const SecRecap: Page = () => (
  <SecDiv ghost="00" kicker="開場複習 · RECAP"
    title="課程回顧" sub="" />
);

// 痛點頁的對比列（過去人工 vs PAD 加速後）
const RecapRow = ({ tag, tone, text }: { tag: string; tone: 'red' | 'teal'; text: string }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
    <span style={{
      fontSize: 28, fontWeight: 800, flexShrink: 0, borderRadius: 6, padding: '5px 18px',
      color: tone === 'teal' ? '#0a1c46' : white,
      background: tone === 'teal' ? teal : 'rgba(255,183,77,0.35)',
      border: tone === 'teal' ? 'none' : '1px solid rgba(255,183,77,0.6)',
    }}>{tag}</span>
    <span style={{ fontSize: 34, color: white, lineHeight: 1.45 }}>{text}</span>
  </div>
);

// ── 前情提要：小林的痛點 ──────────────────────────────────────────────────
const Recap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="前情提要 · 痛點" />
      <H2 style={{ fontSize: 80 }}>新創金屬的採購，每天早上都在做什麼</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
        <div style={{
          background: cardBg, border,
          borderRadius: 16, padding: '36px 44px',
        }}>
          <div style={{ fontSize: 38, color: white, lineHeight: 1.55 }}>
            採購小林每天早上：開報價網站抄銅、鋁價貼進 Excel、再手算材料成本；接著打開 ERP 逐筆匯出昨天訂單、對格式。
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: teal, lineHeight: 1.5, marginTop: 20 }}>
            這一套做完 40 分鐘沒了。抄錯一個數字，整份分析就歪掉。
          </div>
        </div>
        <div style={{
          background: cardBg, border,
          borderRadius: 16, padding: '32px 44px',
          display: 'flex', flexDirection: 'column', gap: 22,
        }}>
          <RecapRow tag="過去（人工）" tone="red"
            text="開網站逐一抄價、手算成本、ERP 逐筆匯出——每天 40 分鐘、易抄錯" />
          <RecapRow tag="PAD 加速後" tone="teal"
            text="自動抓價寫檔、一鍵換算追加走勢、整批匯入訂單——2 分鐘跑完、零手誤" />
        </div>
      </div>
    </CA>
  </BG>
);

// ─── S3 helpers ──────────────────────────────────────────────────────────────

// 對比卡（WhatCanGAS / ApiVsWeb / Story3a 共用）
const S3Card = ({ tone, kicker, title, children }: {
  tone: 'plain' | 'teal' | 'red'; kicker: string; title: string; children: ReactNode;
}) => (
  <div style={{
    background: cardBg, border,
    borderLeft: tone === 'teal' ? accentEdge : tone === 'red' ? warnEdge : undefined,
    borderRadius: 16, padding: '34px 40px', display: 'flex', flexDirection: 'column', minWidth: 0,
  }}>
    <div style={{
      fontSize: 28, fontWeight: 800, letterSpacing: '0.08em',
      color: tone === 'teal' ? teal : 'rgba(255,255,255,0.75)', marginBottom: 12,
    }}>{kicker}</div>
    <div style={{ fontSize: 48, fontWeight: 800, color: white, lineHeight: 1.2, marginBottom: 20 }}>{title}</div>
    <div style={{ fontSize: 34, color: white, lineHeight: 1.5 }}>{children}</div>
  </div>
);

// 截圖佔位白卡（參考骨架 Survey 頁 QR 佔位寫法）
const S3Shot = ({ text }: { text: string }) => (
  <div style={{
    flex: 1, background: white, borderRadius: 16, padding: 24,
    boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0,
  }}>
    <span style={{ fontSize: 38, fontWeight: 800, color: '#0a1c46', textAlign: 'center', lineHeight: 1.5, maxWidth: 560 }}>
      {text}
    </span>
  </div>
);

// 今日地圖用的主軸卡
const S3MapRow = ({ n, title, body }: { n: string; title: string; body: string }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
    <span style={{ fontSize: 60, fontWeight: 900, color: teal, lineHeight: 1.1, width: 56, flexShrink: 0 }}>{n}</span>
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: 50, fontWeight: 800, color: white, lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 32, color: white, opacity: 0.88, lineHeight: 1.4, marginTop: 6 }}>{body}</div>
    </div>
  </div>
);

// 流程箭頭小元件（Turning / Story3b 用）
const S3Arrow = () => (
  <span style={{ fontSize: 52, fontWeight: 900, color: teal, flexShrink: 0, alignSelf: 'center' }}>→</span>
);

// ── 轉折：資料自己回來了，然後呢？ ────────────────────────────────────────
const Turning: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="轉折" />
      <H2>資料自己回來了，然後呢？</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: '34px 36px' }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: white, marginBottom: 14 }}>看資料</div>
          <div style={{ fontSize: 32, color: white, lineHeight: 1.5 }}>查看每日行情數據</div>
        </div>
        <S3Arrow />
        <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: '34px 36px' }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: white, marginBottom: 14 }}>做判斷</div>
          <div style={{ fontSize: 32, color: white, lineHeight: 1.5 }}>判斷該不該詢價或提醒客戶</div>
        </div>
        <S3Arrow />
        <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: '34px 36px' }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: white, marginBottom: 14 }}>做出行動</div>
          <div style={{ fontSize: 32, color: white, lineHeight: 1.5 }}>寄出提醒信、預警信、週報</div>
        </div>
      </div>
      <KeyInsight text="今天：把「看資料 → 判斷 → 行動」也自動化——讓雲端自己醒來做事" />
    </CA>
  </BG>
);

// ── GAS 定位 ──────────────────────────────────────────────────────────────
const WhatCanGAS: Page = () => (
  <BG>
    <CA>
      <H2>換一個幫手：從 PAD 到 GAS</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignContent: 'center' }}>
        <S3Card tone="plain" kicker="DAY 2 · PAD" title="你的電腦幫你做事">
          它操作你螢幕上的軟體，幫你抓資料——<br />
          但<span style={{ color: teal, fontWeight: 700 }}>電腦要開著</span>，它才動得了。
        </S3Card>
        <S3Card tone="teal" kicker="今天 · GAS（Google Apps Script）" title="住在雲端，會自己醒來">
          會定時自己醒來：<span style={{ color: teal, fontWeight: 700 }}>讀 Sheet、寄 Gmail、呼叫 AI、做網頁</span>——
          你關機睡覺，它照常上班。
        </S3Card>
      </div>
      <KeyInsight text="PAD 是你電腦裡的助理；GAS 是住在雲端、24 小時待命的助理" />
    </CA>
  </BG>
);

// ── 今天的 AI 助教：Gemini ────────────────────────────────────────────────
const GeminiIntro: Page = () => (
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

// ── 今日地圖 ──────────────────────────────────────────────────────────────
const TodayMap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="今天你會帶走的" />
      <H2 style={{ fontSize: 84 }}>下課時，這四樣東西是你的——</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36 }}>
        <S3MapRow n="1" title="親手跑起來的第一支程式"
          body="看懂 Apps Script 介面，程式碼從此聽得懂、改得動" />
        <S3MapRow n="2" title="一套自己會動的工作流"
          body="把需求說清楚，AI 寫程式幫你搞定 Sheet 與 Gmail" />
        <S3MapRow n="3" title="接上 Gemini AI 的自動週報系統"
          body="時間一到，AI 讀資料、寫摘要、寄進信箱" />
        <S3MapRow n="4" title="一個真正上線的專屬網站"
          body="不用買主機，一條網址隨時打得開、拿得出手" />
      </div>
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 環節一｜GAS 第一次上手
// ════════════════════════════════════════════════════════════════════════════

// ── 段落分頁 ───────────────────────────────────────────────────────────────
const Sec1: Page = () => (
  <SecDiv ghost="01" kicker="環節 一" title="掌握 Google Apps Script" sub="學會用程式碼說話" />
);

// ── Apps Script 是什麼 ─────────────────────────────────────────────────────
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

// ── 打開 Apps Script 介面 ─────────────────────────────────────────────────
const OpenAS: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="操作示範 · 約 3 分鐘" />
      <H2>第一次打開 Apps Script</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <Bullet n="1" title="打開自己副本的試算表" />
        <Bullet n="2" title="上方選單 →「擴充功能」" />
        <Bullet n="3" title="點「Apps Script」→ 程式編輯器在新分頁打開" />
      </div>
      <div style={{ background: cardBg, border, borderRadius: 12, padding: '22px 30px', marginBottom: 8 }}>
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

// ── 變數與 Logger ──────────────────────────────────────────────────────────
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

// ── 【動手1】讓程式碼跟你打招呼 ────────────────────────────────────────────
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

// ── 【動手2】讓程式把資料寫進 Sheet ────────────────────────────────────────
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

// ── 現在的情境：名單在表上、信卻手寄 ──────────────────────────────────────
const ScenarioCard = ({ title, body }: { title: string; body: string }) => (
  <div style={{
    flex: 1, minWidth: 0, background: cardBg, border,
    borderRadius: 14, padding: '28px 32px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 40, fontWeight: 800, color: white, marginBottom: 14 }}>{title}</div>
    <div style={{ fontSize: 32, color: white, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const MailScenario: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="現在的情境" />
      <H2 style={{ fontSize: 80 }}>這些工作情境，你一定遇過</H2>
      <TealBar />
      <div style={{ display: 'flex', gap: 24, flex: 1, marginTop: 10, minHeight: 0 }}>
        <ScenarioCard title="月底對帳"
          body="財務把每家客戶的對帳金額，從表上抄進信裡，一封一封寄給窗口。" />
        <ScenarioCard title="逾期貨款提醒"
          body="逾期名單就在表上，催款信還是要逐封改稱呼、改金額、改天數。" />
        <ScenarioCard title="報價異動通知"
          body="原物料一調價，業務就要通知整張往來客戶名單的每一家。" />
      </div>
      <div style={{
        background: cardBg, border, borderLeft: accentEdge, borderRadius: 16,
        padding: '30px 44px', marginTop: 28,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: teal }}>把它抽象化，其實就是——</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{ fontSize: 64, fontWeight: 900, color: white, lineHeight: 1.15 }}>試算表</span>
          <span style={{ fontSize: 56, fontWeight: 900, color: teal }}>→</span>
          <span style={{ fontSize: 64, fontWeight: 900, color: white, lineHeight: 1.15 }}>寄信</span>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 小試身手：試算表 → 寄信給講師 ──────────────────────────────────────────
const TryIt: Page = () => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 40 }}>
        <div style={{ fontSize: 44, fontWeight: 800, color: teal, letterSpacing: '0.12em' }}>小試身手</div>
        <div style={{ height: 5, width: 120, background: teal, borderRadius: 2 }} />
        <div style={{ fontSize: 100, fontWeight: 900, color: white, lineHeight: 1.35, maxWidth: 1500 }}>
          從試算表找到填好的姓名與自我介紹，寄一封信給講師
        </div>
      </div>
    </CA>
  </BG>
);

// ── 用 Day 2 的 IAO 拆解：從試算表到寄信 ──────────────────────────────────
const IAOCard = ({ letter, en, zh, q, body }: { letter: string; en: string; zh: string; q: string; body: string }) => (
  <div style={{
    flex: 1, minWidth: 0, background: cardBg, border, borderLeft: accentEdge,
    borderRadius: 14, padding: '30px 32px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
      <span style={{ fontSize: 72, fontWeight: 900, color: teal, lineHeight: 1 }}>{letter}</span>
      <span style={{ fontSize: 36, fontWeight: 800, color: white }}>{en}</span>
      <span style={{ fontSize: 30, fontWeight: 700, color: teal }}>{zh}</span>
    </div>
    <div style={{ fontSize: 38, fontWeight: 700, color: white, opacity: 0.85, margin: '18px 0 20px' }}>{q}</div>
    <div style={{
      marginTop: 'auto', background: 'rgba(0,229,192,0.08)',
      border: '1px dashed rgba(0,229,192,0.45)', borderRadius: 10, padding: '18px 22px',
    }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: teal, letterSpacing: '0.12em', marginBottom: 8 }}>範例</div>
      <div style={{ fontSize: 40, color: white, lineHeight: 1.5 }}>{body}</div>
    </div>
  </div>
);

const MailThree: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="Day 2 複習 · 任何自動化，都拆成三層" />
      <H2 style={{ fontSize: 84 }}>用 I → A → O 想一次</H2>
      <TealBar />
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 20, flex: 1, marginTop: 14, minHeight: 0 }}>
        <IAOCard letter="I" en="INPUT" zh="輸入層"
          q="什麼情況讓它啟動？資料從哪來？"
          body="試算表 A2 的姓名、B2 的自我介紹" />
        <S3Arrow />
        <IAOCard letter="A" en="ACTION" zh="行動層"
          q="程式碼要做什麼？"
          body="讀出這兩格資料，組成一封信" />
        <S3Arrow />
        <IAOCard letter="O" en="OUTPUT" zh="輸出層"
          q="結果要產出什麼？"
          body="把自我介紹寄進講師的信箱" />
      </div>
      <KeyInsight text="心法：動手前先問三個問題——I / A / O 各是什麼？" />
    </CA>
  </BG>
);

// ── 【動手3】寄一封自我介紹給講師 ─────────────────────────────────────────
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
}`} />

    <KeyInsight text="從手冊上找到範例程式碼 → 貼上 → 修改 → 執行" />

    </CA>

  </BG>
);

// ── 第一次寄信的授權流程 ──────────────────────────────────────────────────
const AuthFlow: Page = () => {
  const AuthStep = ({ n, label, src, alt }: { n: string; label: string; src: string; alt: string }) => (
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
          <AuthStep n="1" label="需要授權 → 審查權限" src={authNeed} alt="需要授權對話框，點審查權限" />
          <AuthStep n="2" label="未經驗證 → 進階 → 前往" src={authUnverified} alt="這個應用程式未經 Google 驗證，點進階後前往專案" />
          <AuthStep n="3" label="確認信任 → 繼續" src={authConfirm} alt="確認信任應用程式並點繼續" />
        </div>
        <KeyInsight text="只需要授權一次，後續就不會再出現" />
      </CA>
    </BG>
  );
};

// ── 常見狀況排除 ──────────────────────────────────────────────────────────
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

// ── 休息① ─────────────────────────────────────────────────────────────────
const Break1: Page = () => (
  <BreakPage title="休息 10 分鐘" back="回來後：學會使用 AI 撰寫程式碼的核心觀念" />
);

// ════════════════════════════════════════════════════════════════════════════
// 環節二｜把需求說清楚，讓 AI 幫你寫
// ════════════════════════════════════════════════════════════════════════════

// ── 段落分頁 ───────────────────────────────────────────────────────────────
const Sec2: Page = () => (
  <SecDiv ghost="02" kicker="環節 二" title="用 AI 撰寫程式碼的核心觀念" sub="你不用會寫程式，但要會把需求說清楚" />
);

// ─── S2 helpers（環節二專用）─────────────────────────────────────────────────
const S2FlowStep = ({ n, title, sub }: { n: string; title: string; sub: string }) => (
  <div style={{
    flex: 1, background: cardBg, border, borderLeft: accentEdge,
    borderRadius: 14, padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 12,
  }}>
    <div style={{ fontSize: 26, fontWeight: 800, color: teal, letterSpacing: '0.08em' }}>{n}</div>
    <div style={{ fontSize: 40, fontWeight: 800, color: white, lineHeight: 1.2 }}>{title}</div>
    <div style={{ fontSize: 25, color: white, opacity: 0.85, lineHeight: 1.4 }}>{sub}</div>
  </div>
);

const S2Arrow = () => (
  <div style={{ fontSize: 44, fontWeight: 900, color: teal, alignSelf: 'center', flexShrink: 0 }}>→</div>
);

const S2Stat = ({ label, value, delta, sub, warn }: {
  label: string; value: string; delta?: string; sub?: string; warn?: boolean;
}) => (
  <div style={{
    flex: 1, background: cardBg, border,
    borderLeft: warn ? warnEdge : accentEdge,
    borderRadius: 14, padding: '28px 34px', display: 'flex', flexDirection: 'column', gap: 12,
  }}>
    <div style={{ fontSize: 30, fontWeight: 700, color: white, opacity: 0.85 }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 68, fontWeight: 900, color: white, lineHeight: 1.05 }}>{value}</span>
      {delta && (
        <span style={{ fontSize: 40, fontWeight: 800, color: warn ? warnText : teal }}>{delta}</span>
      )}
    </div>
    {sub && <div style={{ fontSize: 28, color: white, lineHeight: 1.4, opacity: 0.9 }}>{sub}</div>}
  </div>
);

// 截圖佔位白卡（截圖後補；仿 Survey 頁佔位寫法）
const S2Shot = ({ text, width, height }: { text: string; width: number; height: number }) => (
  <div style={{
    background: white, borderRadius: 16, width, height, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
  }}>
    <span style={{
      fontSize: 38, fontWeight: 800, color: '#0a1c46', textAlign: 'center',
      lineHeight: 1.5, padding: '0 50px',
    }}>{text}</span>
  </div>
);

const S2Sleeper = ({ code, days, note }: { code: string; days: string; note: string }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 30,
    background: cardBg, border, borderLeft: warnEdge,
    borderRadius: 14, padding: '24px 36px',
  }}>
    <span style={{ fontSize: 60, fontWeight: 900, color: warnText, fontFamily: mono, flexShrink: 0 }}>{code}</span>
    <span style={{ fontSize: 42, fontWeight: 700, color: white }}>{days}</span>
    <span style={{ fontSize: 34, color: teal, fontWeight: 700, marginLeft: 'auto' }}>{note}</span>
  </div>
);

// ── 方法論迴路 ────────────────────────────────────────────────────────────
const Method: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="今日方法論 · 全天都走這條路" />
      <H2>核心流程</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'stretch' }}>
          <S2FlowStep n="01" title="劇情" sub="公司發生了什麼事" />
          <S2Arrow />
          <S2FlowStep n="02" title="說清楚" sub="資料在哪・條件是什麼・要做什麼" />
          <S2Arrow />
          <S2FlowStep n="03" title="貼給 Gemini" sub="連同你的 Sheet 內容一起貼" />
          <S2Arrow />
          <S2FlowStep n="04" title="產出 GAS" sub="每個人生成的都不一樣，正常" />
          <S2Arrow />
          <S2FlowStep n="05" title="貼回執行" sub="看執行紀錄與信箱驗收" />
        </div>
        <span style={{ color: white, fontWeight: 900 }}>！ 產出程式碼時多要一句：要求 AI 加上清楚的執行紀錄</span>
        <span style={{ color: white, fontWeight: 900 }}>！ 出錯時把Log資訊貼回去請 Gemini 修，這個迴路，今天會走很多次</span>

       
    
      </div>
      <KeyInsight text="說得清楚，AI 就寫得出來——這就是今天要練的事" />
    </CA>
  </BG>
);

// ── 劇情一：供給緊張 ──────────────────────────────────────────────────────
const Story2a: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="劇情一 · 新創金屬" />
      <H2 style={{ fontSize: 88 }}>供給緊張：晚一天詢價，多一分成本</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <div style={{ display: 'flex', gap: 26 }}>
          <S2Stat warn label="LME 銅現貨收盤價（銅分頁 E3）" value="13,487.86" delta="＋69.31 ↑"
            sub="美元／噸，價格一直在漲" />
          <S2Stat warn label="LME 銅庫存（銅分頁 E4）" value="305,200" delta="−1,300 ↓"
            sub="噸，庫存連日下降" />
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26,
          background: cardBg, border, borderLeft: accentEdge,
          borderRadius: 14, padding: '22px 30px',
        }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: white }}>庫存下降</span>
          <span style={{ fontSize: 44, fontWeight: 900, color: teal }}>＋</span>
          <span style={{ fontSize: 44, fontWeight: 800, color: white }}>價格上漲</span>
          <span style={{ fontSize: 44, fontWeight: 900, color: teal }}>＝</span>
          <span style={{ fontSize: 44, fontWeight: 900, color: warnText }}>供給緊張訊號</span>
        </div>
      </div>
      <KeyInsight text="讓系統盯著這兩格——一符合條件，就寄信提醒小林" />
    </CA>
  </BG>
);

// ── 我會這樣跟 AI 說 ──────────────────────────────────────────────────────
const PromptRow = ({ tag, text }: { tag: string; text: ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
    <span style={{
      fontSize: 30, fontWeight: 800, color: '#0a1c46', background: teal,
      borderRadius: 8, padding: '10px 24px', flexShrink: 0, width: 320,
      textAlign: 'center', boxSizing: 'border-box',
    }}>{tag}</span>
    <div style={{
      flex: 1, background: cardBg, border,
      borderRadius: 14, padding: '26px 34px',
      fontSize: 38, color: white, lineHeight: 1.5,
    }}>{text}</div>
  </div>
);

const Prompt2a: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="教學重點 · 跟 AI 開口的結構" />
      <H2 style={{ fontSize: 84 }}>我會這樣跟 AI 說……</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <PromptRow tag="現況說明"
          text="「我現在有一份 Google Sheet，『銅』分頁上有現貨價、漲跌、庫存、增減四個欄位……」" />
        <PromptRow tag="想要達成的目標"
          text="「我遇到的問題是：庫存下降又漲價時沒人提醒我。我希望條件成立就自動寄信給我。」" />
        <PromptRow tag="輸出格式"
          text="「我希望你給我一段完整、可以直接貼上執行的 GAS 程式碼，並在重要步驟加上清楚的執行紀錄，方便我確認執行狀態、也好除錯。」" />
      </div>
      <KeyInsight text="結構：現況說明 ＋ 想要達成的目標 ＋ 輸出格式——完整全文在手冊「環節二｜動手 4」" />
    </CA>
  </BG>
);

// ── 動手 4 ────────────────────────────────────────────────────────────────
const Hands4: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 84 }}>【動手 4】供給緊張詢價提醒</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
        <Bullet n="1" title="把需求和 Google Sheet 提供給 Gemini，請它產出 GAS 程式碼" />
        <Bullet n="2" title="把 GAS 貼回編輯器" />
        <Bullet n="3" title="收件信箱改成自己的 → 按「執行」" />
        <Bullet n="4" title="打開自己的信箱：收「趁早詢價鎖價」提醒信" />
      </div>
      <TaskStrip tag="環節二 — 動手 4" text="從這封信開始，自動信一律寄進你自己的信箱（動手 3 那封已寄講師打卡）" />
    </CA>
  </BG>
);


// ── 休息② ─────────────────────────────────────────────────────────────────────
const Break2: Page = () => (
  <BreakPage title="休息 10 分鐘" back="回來後：換你自己說給 AI 聽" />
);

// ── 劇情二：讓沉睡的訂單開口 ──────────────────────────────────────────────
const Story2b: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="劇情二 · Day 1 的口號，今天實作" />
      <H2 style={{ fontSize: 96 }}>「讓沉睡的訂單開口」</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <div style={{ display: 'flex', gap: 26 }}>
          <S2Stat label="歷史訂單" value="41 筆" sub="全部躺在「歷史訂單」分頁裡" />
          <S2Stat label="客戶" value="C001–C008" sub="八位客戶，下單頻率不一" />
          <S2Stat warn label="悄悄消失的客戶" value="？位" sub="很久沒出現了——是誰？" />
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, color: white, lineHeight: 1.45, textAlign: 'center' }}>
          <span style={{ color: teal, fontWeight: 900 }}>換你自己把劇情說給 Gemini 聽</span>
        </div>
      </div>
      <KeyInsight text="找出沉睡客戶，讓系統寄一份預警名單給你" />
    </CA>
  </BG>
);

// ── 換你這樣跟 AI 說（留空版）─────────────────────────────────────────────
const Blank = ({ w = 6 }: { w?: number }) => (
  <span style={{ color: teal, fontWeight: 800 }}>{'＿'.repeat(w)}</span>
);

const Prompt2b: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="換你說 · 同一個開口結構" />
      <H2 style={{ fontSize: 84 }}>換你這樣跟 AI 說……</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <PromptRow tag="現況說明"
          text="「我現在有一份 Google Sheet，『歷史訂單』分頁有訂單日期、客戶代號、品項、數量、金額……」" />
        <PromptRow tag="想要達成的目標"
          text={<>「我遇到的問題是：<Blank />。我希望超過 <Blank w={2} /> 天沒下單的客戶，<Blank />。」</>} />
        <PromptRow tag="輸出格式"
          text="「我希望你給我 GAS 程式碼，一段完整、可以直接貼上執行的，並在重要步驟加上清楚的執行紀錄，方便我確認執行狀態、也好除錯。」" />
      </div>
      <KeyInsight text="同一個結構：現況說明 ＋ 想要達成的目標 ＋ 輸出格式——填空提示在手冊「環節二｜動手 5」" />
    </CA>
  </BG>
);

// ── 動手 5 ────────────────────────────────────────────────────────────────
const Hands5: Page = () => (
  <BG>
    <CA>
      <H2 style={{ fontSize: 84 }}>【動手 5】沉睡客戶預警</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        <Bullet n="1" title="照結構把空格填滿：現況說明／目標／輸出格式" />
        <Bullet n="2" title="貼給 Gemini → 產出的 GAS 貼回編輯器" />
        <Bullet n="3" title="信箱改成自己的 → 執行 → 收預警清單信" />
        <div style={{
          marginTop: 14, background: cardBg, border, borderLeft: warnEdge,
          borderRadius: 12, padding: '20px 28px', fontSize: 36, fontWeight: 700,
          color: white, lineHeight: 1.45,
        }}>
          驗收：名單裡一定要有 <span style={{ color: warnText, fontFamily: mono, fontWeight: 800 }}>C002</span>（沉睡約 137 天）和
          <span style={{ color: warnText, fontFamily: mono, fontWeight: 800 }}> C007</span>（約 100 天）
        </div>
      </div>
      <TaskStrip tag="環節二 — 動手 5" text="卡住了？手冊同段落有「參考解答提示詞」——先看提示，再看解答" />
    </CA>
  </BG>
);

// ── 成果：環節小結 ────────────────────────────────────────────
const Result2b: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節小結" />
      <H2 style={{ fontSize: 84 }}>環節二小結：你已經會的三件事</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        <Bullet n="1" title="跟 AI 開口有結構"
          body="現況說明 ＋ 想要達成的目標 ＋ 輸出格式——說得清楚，AI 就寫得出來。" />
        <Bullet n="2" title="兩個自動化上線了"
          body="供給緊張詢價提醒、沉睡客戶預警——條件成立，信就自己寄。" />
        <Bullet n="3" title="跑不動不用怕"
          body="把錯誤訊息貼回去請 Gemini 修——這個迴路你已經走過。" />
      </div>
      <KeyInsight text="你沒有寫任何一行程式——你只是把需求說清楚" />
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 環節三｜把 Gemini 裝進系統
// ════════════════════════════════════════════════════════════════════════════

// ── 段落分頁 ───────────────────────────────────────────────────────────────
const Sec3: Page = () => (
  <SecDiv ghost="03" kicker="環節 三" title="Google Apps Script × AI" sub="把 Gemini 放進程式碼裡" />
);

// ── 網頁版 vs API ─────────────────────────────────────────────────────────
const ApiVsWeb: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節三 · 概念" />
      <H2>兩種跟 AI 互動的模式</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignContent: 'center' }}>
        <S3Card tone="plain" kicker="剛剛 · 網頁版" title="你去找 Gemini">
          你打開網頁、貼上 prompt、複製程式碼回來——<br />
          每一步都要<span style={{ color: teal, fontWeight: 700 }}>你親自動手</span>。
        </S3Card>
        <S3Card tone="teal" kicker="現在 · API" title="程式自己去找 Gemini">
          GAS 把資料送過去、AI 的回覆直接進信件——<br />
          <span style={{ color: teal, fontWeight: 700 }}>全程不用你出現</span>。
        </S3Card>
      </div>
      <KeyInsight text="把 AI 請進你的程式裡——它自己問、自己收答案；門票就是一把 API key" />
    </CA>
  </BG>
);

// ── 動手 6：申請 API key ──────────────────────────────────────────────────
const Hands6: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節三 — 動手 6" />
      <H2 style={{ fontSize: 84 }}>【動手 6】申請 Gemini API key</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 620px', gap: 40, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
          <Bullet n="1" title="打開 Google AI Studio 並登入"
            body="aistudio.google.com" />
          <Bullet n="2" title="Get API key → 建立 API 金鑰" />
          <Bullet n="3" title="複製金鑰（AIza... 開頭的一串文字）" />
          <Bullet n="4" title="存進「指令碼屬性」"
            body="專案設定（齒輪）→ 指令碼屬性 → 名稱 GEMINI_API_KEY" />
        </div>
      </div>
      <div style={{
        marginTop: 18, background: cardBg, border, borderLeft: warnEdge,
        borderRadius: 10, padding: '12px 24px', fontSize: 30, color: white, lineHeight: 1.4,
      }}>
        🔒 API key 就像你家鑰匙——不貼進程式碼、不傳給別人、不貼到公開的地方。
      </div>
    </CA>
  </BG>
);

// ── 保命頁：看到 429 別慌 ──────────────────────────────────────────────────
// 本頁專用：與 Bullet 同構，但圓圈字縮小並鎖單行，避免 2 個中文字在 54px 圓內換行。
const SafetyBullet = ({ n, title, body }: { n: string; title: string; body: string }) => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 16 }}>
    <div style={{
      width: 54, height: 54, borderRadius: '50%', flexShrink: 0,
      background: pill, color: white,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 24, fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '-0.02em',
    }}>{n}</div>
    <div style={{ paddingTop: 4 }}>
      <span style={{ fontSize: 54, fontWeight: 700, color: white, lineHeight: 1.25 }}>{title}</span>
      <div style={{ fontSize: 42, color: white, lineHeight: 1.45, marginTop: 4 }}>{body}</div>
    </div>
  </div>
);

const ApiSafety: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節三 · 保命頁" />
      <H2 style={{ fontSize: 72 }}>看到「429」別慌，那不是你弄壞的</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
        <SafetyBullet n="429" title="手速太快而已"
          body="免費額度每分鐘有上限，除錯時連按太多次會跳 429——不是程式壞掉，等一分鐘再按「執行」就好。" />
        <SafetyBullet n="獨立" title="別人用不到你的"
          body="每個人用自己的 key、自己的額度，互不影響，也不會被別人拖累。" />
        <SafetyBullet n="資料" title="免費 API 的資料會被拿去訓練"
          body="課堂用假資料沒差；但免費版 Gemini 的內容，Google 可能拿去訓練模型。掌管公司機敏資料要自己評估——正式上線請改用公司核可的付費／企業金鑰。" />
      </div>
      <KeyInsight text="跑不動先看「執行紀錄 log」——分清楚：紅字是程式錯、429 是額度滿，救法不一樣。" />
    </CA>
  </BG>
);

// ── 劇情：預警信升級 AI 客製話術 ──────────────────────────────────────────
const Story3a: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="劇情 · 客製話術" />
      <H2 style={{ fontSize: 84 }}>動手 5 的預警信，每個客戶收到都一樣</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignContent: 'center' }}>
        <S3Card tone="red" kicker="現在 · 死板模板" title="一句話打發所有人">
          「您已 N 天未下單，請盡快回購。」——<br />
          C002 和 C007 收到的<span style={{ fontWeight: 700 }}>一字不差</span>。
        </S3Card>
        <S3Card tone="teal" kicker="升級 · AI 客製" title="一人一款的關心話術">
          讓 Gemini 讀每位客戶的沉睡天數、常買品項，<br />
          各寫一段<span style={{ color: teal, fontWeight: 700 }}>專屬的補貨關心話術</span>。
        </S3Card>
      </div>
      <KeyInsight text="你今天做完週報，手上的引擎跟這個一模一樣——回去換一批資料，這件事你自己就能做。" />
    </CA>
  </BG>
);

// ── 分隔：進入 AI 應用 ──────────────────────────────────────────────────────
const Sec3b: Page = () => (
  <SecDiv ghost="03" kicker="環節 三 · 進入應用"
    title="鑰匙拿到了，讓 AI 上工"
    sub="動手 7–8：AI 寫業績週報、每週自動寄出——都由系統自己來" />
);

// ── 劇情：每週業績週報 ────────────────────────────────────────────────────
const Story3b: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="劇情 · 業績週報" />
      <H2 style={{ fontSize: 84 }}>老闆每週一都要一份業績摘要</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: '30px 32px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: white, marginBottom: 12 }}>GAS 彙總</div>
          <div style={{ fontSize: 30, color: white, lineHeight: 1.5 }}>掃歷史訂單：總金額、各品類佔比、最近四週金額。</div>
        </div>
        <S3Arrow />
        <div style={{ flex: 1, background: cardBg, border, borderLeft: accentEdge, borderRadius: 16, padding: '30px 32px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: teal, marginBottom: 12 }}>Gemini 寫白話</div>
          <div style={{ fontSize: 30, color: white, lineHeight: 1.5 }}>套 Day 2 四要素：推什麼／推多少／為什麼是現在／怎麼開口。</div>
        </div>
        <S3Arrow />
        <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: '30px 32px' }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: white, marginBottom: 12 }}>Gmail 寄出</div>
          <div style={{ fontSize: 30, color: white, lineHeight: 1.5 }}>週報直接進老闆信箱（課堂上先寄自己）。</div>
        </div>
      </div>
      <KeyInsight text="API 概念跟剛剛一模一樣——換的只是丟給 AI 的資料" />
    </CA>
  </BG>
);

// ── 動手 7 ────────────────────────────────────────────────────────────────
const Hands7: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節三 — 動手 7" />
      <H2 style={{ fontSize: 84 }}>【動手 7】收到第一份 AI 業績週報</H2>
      <TealBar />
      <TaskStrip tag="動手 7" text="手冊提示詞貼給 Gemini → 程式貼回編輯器 → 改成自己的信箱 → 執行" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        <Bullet n="1" title="Gemini 會生出「呼叫Gemini_」共用小幫手"
          body="它負責拿金鑰、去找 Gemini；跑不動就貼手冊保底版。" />
        <Bullet n="2" title="GAS 先彙總數字，再請 Gemini 寫 250 字白話週報"
          body="限制它只根據提供的數字，不要杜撰。" />
        <Bullet n="3" title="驗證：收到主旨「[新創金屬] AI 業績週報」的信" />
        <Bullet n="4" title="記得請 AI 在程式碼加上執行紀錄，跑完看 log 就知道成不成功" />
      </div>
      <KeyInsight text="到這裡還差一步——現在還是你手動按「執行」" />
    </CA>
  </BG>
);

// ── 觸發器：讓它自己醒來 ──────────────────────────────────────────────────
const WhatTrigger: Page = () => (
  <BG>
    <CA>
      <H2>認識 GAS 的觸發器</H2>
      <TealBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, flex: 1, marginTop: 6, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
          <Bullet n="?" title="時間型觸發"
            body="到了你設定的時刻就動 —— 像鬧鐘" />
          <Bullet n="∞" title="事件型觸發"
            body="檔案新增、更新，自動執行 —— 像門鈴" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
          <div style={{
            background: white, borderRadius: 14, padding: 14, overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)', maxHeight: '100%', display: 'flex',
          }}>
            <img src={triggerNewDialog} alt="新增觸發條件對話框：選擇函式、事件來源、事件類型"
              style={{ display: 'block', maxWidth: '100%', maxHeight: 540, width: 'auto', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
      <KeyInsight text="設好每週一早上的鬧鐘 —— 你睡覺它也在跑" />
    </CA>
  </BG>
);

// ── 動手 8 ────────────────────────────────────────────────────────────────
const Hands8: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節三 — 動手 8" />
      <H2 style={{ fontSize: 84 }}>【動手 8】設定每週自動觸發器</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 620px', gap: 40, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
          <Bullet n="1" title="左側「觸發條件」（鬧鐘圖示）→ 新增觸發條件" />
          <Bullet n="2" title="函式選「AI業績週報」，活動來源選「時間驅動」" />
          <Bullet n="3" title="設定指定時間/頻率" />
          <Bullet n="4" title="儲存" />
        </div>
        <S3Shot text="步驟可以查看課程手冊" />
      </div>
      <KeyInsight text="原則：先手動跑一次確認會動（動手 7 已驗證），再交給排程" />
    </CA>
  </BG>
);

// ── 成果：「你睡覺它也在跑」──────────────────────────────────────────────
const Result3: Page = () => (
  <BG>
    <CA style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <div style={{ fontSize: 36, color: teal, fontWeight: 700, letterSpacing: '0.24em' }}>環節三 · 成果</div>
        <div style={{ fontSize: 150, fontWeight: 900, color: white, lineHeight: 1.05 }}>你睡覺，它也在跑</div>
        <div style={{ height: 5, width: 120, background: teal, borderRadius: 2, margin: '14px 0 20px' }} />
        <div style={{ fontSize: 46, color: white, fontWeight: 600, lineHeight: 1.5, maxWidth: 1400 }}>
          指定時間一到，AI 寫好的業績週報自己寄進信箱<br />
          <span style={{ color: teal, fontWeight: 800 }}>Gemini 已經裝進你的系統裡</span>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 26 }}>
          <span style={{ fontSize: 28, color: white, fontWeight: 600, background: pill, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '8px 24px' }}>動手 6 · API key</span>
          <span style={{ fontSize: 28, color: white, fontWeight: 600, background: pill, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '8px 24px' }}>動手 7 · AI 週報</span>
          <span style={{ fontSize: 28, color: white, fontWeight: 600, background: pill, border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '8px 24px' }}>動手 8 · 自動排程</span>
        </div>
      </div>
    </CA>
  </BG>
);

// ── 休息③ ─────────────────────────────────────────────────────────────────
const Break3: Page = () => (
  <BreakPage title="休息 10 分鐘" back="回來後：GAS 做出網頁" />
);

// ════════════════════════════════════════════════════════════════════════════
// 環節四｜GAS 做出網頁：部署訂單後台
// ════════════════════════════════════════════════════════════════════════════

// ── 段落分頁 ───────────────────────────────────────────────────────────────
const Sec4: Page = () => (
  <SecDiv ghost="04" kicker="環節 四" title="打造自己的專屬網站" sub="很多GAS玩家也不知道，原來可以用它來寫網頁" />
);

// ─── S4 helpers ──────────────────────────────────────────────────────────────

// 概念流程卡（WebAppConcept 用）
const S4FlowCard = ({ n, title, body }: { n: string; title: string; body: string }) => (
  <div style={{
    flex: 1, background: cardBg, border, borderLeft: accentEdge,
    borderRadius: 14, padding: '30px 30px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 30, fontWeight: 800, color: teal, letterSpacing: '0.08em', marginBottom: 12 }}>{n}</div>
    <div style={{ fontSize: 42, fontWeight: 800, color: white, marginBottom: 14, lineHeight: 1.2 }}>{title}</div>
    <div style={{ fontSize: 32, color: white, lineHeight: 1.45 }}>{body}</div>
  </div>
);

// 流程箭頭（水平）
const S4Arrow = () => (
  <div style={{ fontSize: 56, fontWeight: 900, color: teal, alignSelf: 'center', flexShrink: 0 }}>→</div>
);

// 部署步驟列（DeploySteps 用）
const S4DeployStep = ({ n, title, sub }: { n: string; title: string; sub?: string }) => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
    <div style={{
      width: 50, height: 50, borderRadius: '50%', flexShrink: 0,
      background: pill, color: white,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 26, fontWeight: 800,
    }}>{n}</div>
    <div style={{ paddingTop: 3 }}>
      <div style={{ fontSize: 38, fontWeight: 700, color: white, lineHeight: 1.25 }}>{title}</div>
      {sub && <div style={{ fontSize: 29, color: white, opacity: 0.85, lineHeight: 1.4, marginTop: 4 }}>{sub}</div>}
    </div>
  </div>
);

// 四天閉環卡（E2E 用）
const S4DayCard = ({ day, title, body, hi }: { day: string; title: string; body: string; hi?: boolean }) => (
  <div style={{
    flex: 1, background: cardBg, border,
    borderLeft: hi ? accentEdge : undefined,
    borderRadius: 14, padding: '28px 26px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 28, fontWeight: 800, color: teal, letterSpacing: '0.1em', marginBottom: 12 }}>{day}</div>
    <div style={{ fontSize: 40, fontWeight: 800, color: white, lineHeight: 1.2, marginBottom: 14 }}>{title}</div>
    <div style={{ fontSize: 30, color: white, lineHeight: 1.45 }}>{body}</div>
  </div>
);

// 動手 9 檔案卡
const S4FileCard = ({ name, role, note }: { name: string; role: string; note: string }) => (
  <div style={{
    flex: 1, background: cardBg, border, borderLeft: accentEdge,
    borderRadius: 14, padding: '26px 30px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontFamily: mono, fontSize: 40, fontWeight: 700, color: teal, marginBottom: 12 }}>{name}</div>
    <div style={{ fontSize: 34, fontWeight: 700, color: white, marginBottom: 10, lineHeight: 1.3 }}>{role}</div>
    <div style={{ fontSize: 30, color: white, opacity: 0.9, lineHeight: 1.45 }}>{note}</div>
  </div>
);

// ── Web App 概念：GAS 也能做出網站 ────────────────────────────────────────
const WebAppConcept: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="Web App 概念" />
      <H2 style={{ fontSize: 84 }}>GAS 也能做出「網站」</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, minHeight: 0 }}>
        <Bullet n="1" title="有人打開網址，doGet() 就被叫醒"
          body="它回傳一個網頁畫面給瀏覽器。" />
        <Bullet n="2" title="按「部署」，Google 給你專屬網址"
          body="不用主機、不用架站，Google 幫你扛。" />
        <Bullet n="3" title="瀏覽器、手機都打得開"
          body="這就是你的訂單後台。" />
      </div>
      <KeyInsight text="GAS 不只會寄信，還能給你一個「真的網址」" />
    </CA>
  </BG>
);

// ── 拆解：寫程式 → 部署 ──────────────────────────────────────────────────
const BuildSteps: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="拆解" />
      <H2 style={{ fontSize: 84 }}>程式碼 + 部署 = 網站</H2>
      <TealBar />
      <div style={{ display: 'flex', gap: 24, marginTop: 6, alignItems: 'stretch' }}>
        <S4FileCard name="① 後台.gs" role="程式（後端邏輯）"
          note="doGet 回傳畫面；取得訂單、新增訂單兩支函式讀寫「歷史訂單」分頁。" />
        <S4FileCard name="① index.html" role="網頁畫面（前端）"
          note="訂單表格＋新增訂單表單——編輯器「＋」→ HTML → 命名 index。" />
        <S4Arrow />
        <S4FileCard name="② 部署" role="變成真的網址"
          note="部署成「網頁應用程式」，Google 發給你一個專屬網址。" />
      </div>
      <KeyInsight text="程式碼不用自己寫——範本在手冊，你的工作是把它放對地方" />
    </CA>
  </BG>
);

// ── 劇情：B2B 訂單後台管理頁 ──────────────────────────────────────────────
const Story4: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="劇情 · 今天最後一件事" />
      <H2>小林想要一個「訂單後台」</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
        <Bullet n="1" title="到目前為止，都是系統「寄信給你」"
          body="但有時候小林想主動看：現在的 B2B 訂單長怎樣？" />
        <Bullet n="2" title="打開網頁就能看訂單、直接改資料"
          body="不用打開試算表、不用找分頁——一個網址搞定。" />
        <Bullet n="3" title="每個人都要部署出自己的後台"
          body="拿到一個真的網址，手機也打得開。" />
      </div>
      <KeyInsight text="每個人下課前，都會有一個自己的 B2B 訂單後台網址" />
    </CA>
  </BG>
);

// ── 動手 9：章節練習——搭建出你的訂單後台 ────────────────────────────────
const Hands9: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節四 — 動手 9 · 章節練習" />
      <H2 style={{ fontSize: 84 }}>【動手 9】搭建出你的訂單後台</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
        <Bullet n="1" title="編輯器「＋」→ 指令碼 → 命名「後台」→ 貼上手冊範本"
          body="不要動原本的程式碼檔——動手 8 的排程還要用它" />
        <Bullet n="2" title="編輯器「＋」→ HTML → 命名 index → 貼上範本 index.html"
          body="先清空檔案預設內容再貼，存檔確認沒有紅字" />
        <Bullet n="3" title="照上一頁的五步完成部署，複製網址打開" />
        <Bullet n="4" title="驗證：新增一筆訂單 → 回 Sheet 看「歷史訂單」多了一列"
          body="畫面上的動作，改到了真資料——手機也開開看！（手機要登入跟電腦同一個 Google 帳號，不然會顯示沒有權限）" />
      </div>
      <KeyInsight text="下課前，每個人都有一個自己的 B2B 訂單後台網址" />
    </CA>
  </BG>
);


// ── 部署逐步教學 ──────────────────────────────────────────────────────────
const DeploySteps: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="跟著點 · 一步都不跳" />
      <H2 style={{ fontSize: 84 }}>部署你的網頁應用程式</H2>
      <TealBar />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22, flex: 1, marginTop: 6 }}>
        <S4DeployStep n="1" title="右上角「部署」→「新增部署作業」" />
        <S4DeployStep n="2" title="齒輪選擇類型：「網頁應用程式」" />
        <S4DeployStep n="3" title="執行身分：我　·　誰可以存取：只有我自己" />
        <S4DeployStep n="4" title="按「部署」→ 跳授權就「進階 → 允許」" />
        <S4DeployStep n="5" title="複製「網頁應用程式」的網址 → 開新分頁打開" />
      </div>
    </CA>
  </BG>
);

// ── 分隔：組合拳 ──────────────────────────────────────────────────────────
const Sec4b: Page = () => (
  <SecDiv ghost="04" kicker="環節 四 · 最終章"
    title="把今天學的全部串起來"
    sub="Google Sheet ＋ Google Apps Script ＋ Gemini AI" />
);

// ── 四張牌組合 ───────────────────────────────────────────────────────────
const ComboMap: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="組合拳 · 你手上的四張牌" />
      <H2 style={{ fontSize: 84 }}>四張牌，已經都在你手上</H2>
      <TealBar />
      <div style={{ display: 'flex', gap: 16, flex: 1, marginTop: 10, alignItems: 'stretch' }}>
        <S4FlowCard n="資料" title="Google Sheet"
          body="訂單、行情、客戶——資料都住在這裡。" />
        <S4Arrow />
        <S4FlowCard n="邏輯＋網頁" title="GAS"
          body="判斷條件、自動寄信，doGet 還能給你畫面。" />
        <S4Arrow />
        <S4FlowCard n="提問＋需求討論" title="Gemini"
          body="現況說明＋目標＋輸出格式——程式它來寫。" />
        <S4Arrow />
        <S4FlowCard n="上線" title="部署"
          body="變成一個真的網址，手機也打得開。" />
      </div>
      <KeyInsight text="以後每個自動化需求，都是這四張牌的排列組合" />
    </CA>
  </BG>
);

// ── 動手 10：組合拳實戰 ──────────────────────────────────────────────────
const Hands10: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="環節四 — 動手 10 · 組合拳" />
      <H2 style={{ fontSize: 84 }}>【動手 10】幫後台加一個新功能</H2>
      <TealBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
        <Bullet n="1" title="想一個你想要的小功能"
          body="例：訂單表格多一欄「小計金額」（數量 × 單價）" />
        <Bullet n="2" title="照結構跟 Gemini 討論"
          body="現況說明＋想要達成的目標＋輸出格式——把現有 後台.gs 和 index.html 貼給它" />
        <Bullet n="3" title="貼回改好的程式碼 → 部署「新版本」"
          body="部署 → 管理部署作業 → 編輯 → 版本選「新版本」——改版才會生效" />
        <Bullet n="4" title="重新整理你的網址，驗證新功能出現" />
      </div>
      <KeyInsight text="這一套，就是你以後面對每個需求的標準打法" />
    </CA>
  </BG>
);

// ════════════════════════════════════════════════════════════════════════════
// 收尾
// ════════════════════════════════════════════════════════════════════════════

// ── 四天閉環回顧 ──────────────────────────────────────────────────────────
const E2E: Page = () => (
  <BG>
    <CA>
      <Eyebrow text="收尾 · 回頭看這四天" />
      <H2>從看懂資料，到系統自己行動</H2>
      <TealBar />
      <div style={{ display: 'flex', gap: 16, flex: 1, marginTop: 10, alignItems: 'stretch' }}>
        <S4DayCard day="DAY 1" title="看懂資料"
          body="認識 B2B 訂單與行情，知道數字在說什麼。" />
        <S4Arrow />
        <S4DayCard day="DAY 2" title="PAD 抓行情"
          body="行情資料自己回到 Excel，40 分鐘抄價消失。" />
        <S4Arrow />
        <S4DayCard day="DAY 3" title="GAS × Gemini" hi
          body="系統自己判斷、自己寄信、自己寫週報，還給了你一個後台。" />
        <S4Arrow />
        <S4DayCard day="DAY 4" title="Vibe Coding"
          body="下週：把這一切做成人人能用的工具。" />
      </div>
      <KeyInsight text="沉睡的訂單，今天真的開口了" />
    </CA>
  </BG>
);

// ── 課後問卷（QR 後補）────────────────────────────────────────────────────
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <div style={{
          background: white, borderRadius: 16, padding: 24, boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
          width: 428, height: 428, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#0a1c46', textAlign: 'center', lineHeight: 1.4 }}>
            問卷 QR 後補
          </span>
        </div>
        <div style={{ fontSize: 32, color: white, fontWeight: 800, letterSpacing: '0.08em' }}>掃描填寫問卷</div>
        <div style={{
          fontSize: 24, color: white, opacity: 0.85, lineHeight: 1.4,
          maxWidth: 380, textAlign: 'center',
          userSelect: 'text',
        }}>
          問卷網址後補
        </div>
      </div>
    </div>
  </BG>
);

// ── 結尾 CTA ＋ Day 4 預告 ────────────────────────────────────────────────
const JourneyEnd: Page = () => (
  <BG>
    <div style={{ position: 'absolute', inset: 0, padding: '120px 160px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: white, letterSpacing: '0.04em', marginBottom: 80, opacity: 0.92 }}>RPAI 數位優化器</div>
        <h1 style={{ fontSize: 120, fontWeight: 900, color: white, margin: 0, lineHeight: 1.18, letterSpacing: '-0.01em' }}>
         謝謝大家！
        </h1>
        <div style={{ height: 4, width: 110, background: teal, borderRadius: 2, margin: '48px 0 36px' }} />
        <p style={{ fontSize: 60, color: white, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>
          下週 Day 4：<span style={{ color: teal, fontWeight: 700 }}>Vibe Coding</span>
        </p>
      </div>
    </div>
  </BG>
);

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: 'B2B 訂單分析與推薦 Day 3——自動追蹤：讓系統自己看資料、自己寄信',
  theme: 'rpai-tech-blue',
  createdAt: '2026-07-17T17:12:23.226Z',
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
  // 開場 9
  Cover, Organizer, Instructor, SecRecap, Recap, Turning, WhatCanGAS, GeminiIntro, TodayMap,
  // 環節一 13
  Sec1, WhatIsAS, OpenAS, VarLogger, Hands1, Hands2, MailScenario, TryIt, MailThree, Hands3, AuthFlow, Troubleshoot, Break1,
  // 環節二 10
  Sec2, Method, Story2a, Prompt2a, Hands4, Break2, Story2b, Prompt2b, Hands5, Result2b,
  // 環節三 12
  Sec3, ApiVsWeb, Hands6, ApiSafety, Story3a, Sec3b, Story3b, Hands7, WhatTrigger, Hands8, Result3, Break3,
  // 環節四 9
  Sec4, Story4, WebAppConcept, BuildSteps, DeploySteps, Hands9, Sec4b, ComboMap, Hands10,
  // 收尾 3
  E2E, Survey, JourneyEnd,
] satisfies Page[];
