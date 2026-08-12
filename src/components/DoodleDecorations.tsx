import React from 'react';

// Star Doodle
export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#FDCB6E"
}) => (
  <svg viewBox="0 0 100 100" className={className} fill={color} stroke="#2D3436" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 5 L63 35 L95 38 L70 60 L78 92 L50 75 L22 92 L30 60 L5 38 L37 35 Z" />
  </svg>
);

// Sparkle Star Outline
export const DoodleSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#6C5CE7"
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 10 Q50 50 90 50 Q50 50 50 90 Q50 50 10 50 Q50 50 50 10 Z" />
  </svg>
);

// Lightbulb Doodle
export const DoodleLightbulb: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="#FDCB6E" stroke="#2D3436" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 75 H65 V85 C65 88 60 92 50 92 C40 92 35 88 35 85 Z" fill="#2D3436" />
    <path d="M30 50 C20 40 25 15 50 15 C75 15 80 40 70 50 C62 58 65 75 65 75 H35 C35 75 38 58 30 50 Z" />
    <path d="M45 30 L55 30 M50 25 L50 35" stroke="#FFFFFF" strokeWidth="4" />
    {/* Rays */}
    <path d="M20 15 L10 5 M80 15 L90 5 M50 5 L50 0 M10 40 L0 40 M90 40 L100 40" stroke="#2D3436" strokeWidth="5" />
  </svg>
);

// Pencil Doodle
export const DoodlePencil: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg viewBox="0 0 120 40" className={className} fill="none" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="30" y="10" width="70" height="20" rx="3" fill="#FF7675" />
    <polygon points="30,10 5,20 30,30" fill="#FDCB6E" />
    <polygon points="12,17 5,20 12,23" fill="#2D3436" />
    <rect x="100" y="10" width="15" height="20" rx="2" fill="#E17055" />
    <line x1="30" y1="20" x2="100" y2="20" stroke="#2D3436" strokeWidth="3" strokeDasharray="3 3" />
  </svg>
);

// Paperclip Doodle
export const DoodlePaperclip: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-12",
  color = "#6C5CE7"
}) => (
  <svg viewBox="0 0 50 100" className={className} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 30 V75 C15 85 35 85 35 75 V20 C35 8 10 8 10 20 V70" />
  </svg>
);

// Wavy Line Doodle
export const DoodleWavy: React.FC<{ className?: string; color?: string }> = ({
  className = "w-20 h-4",
  color = "#FF7675"
}) => (
  <svg viewBox="0 0 100 20" className={className} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 10 Q 20 0, 35 10 T 65 10 T 95 10" />
  </svg>
);

// Tape Strip Doodle
export const DoodleTape: React.FC<{ className?: string }> = ({ className = "w-24 h-8" }) => (
  <div className={`bg-amber-100/80 border-y-2 border-dashed border-amber-300/80 backdrop-blur-sm transform -rotate-3 shadow-xs ${className}`}>
    <div className="w-full h-full opacity-30 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:6px_6px]" />
  </div>
);

// Envelope Doodle Card Icon
export const EnvelopeGraphic: React.FC<{
  className?: string;
  onTabSelect: (tab: any) => void;
  activeTab: string;
}> = ({ className = "w-full", onTabSelect, activeTab }) => {
  const stickers = [
    { id: 'about', num: '01', title: 'ABOUT ME / 关于我', color: '#FF7675', rotate: '-rotate-3', label: '01. 关于我' },
    { id: 'skills', num: '02', title: 'SKILLS / 专业技能', color: '#00B894', rotate: 'rotate-2', label: '02. 专业技能' },
    { id: 'articles', num: '03', title: 'ARTICLES / 核心文章', color: '#FDCB6E', rotate: '-rotate-2', label: '03. 我的文章' },
    { id: 'projects', num: '04', title: 'PROJECTS / 我的作品', color: '#6C5CE7', rotate: 'rotate-3', label: '04. 我的作品' },
    { id: 'contact', num: '05', title: 'CONTACT / 联系我', color: '#E17055', rotate: '-rotate-1', label: '05. 联系方式' },
  ];

  return (
    <div className={`relative bg-[#FFFBF0] border-3 border-[#2D3436] rounded-2xl p-6 shadow-sticker ${className}`}>
      {/* Decorative Wavy Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-dashed border-[#2D3436]">
        <div className="flex items-center gap-2">
          <span className="bg-[#6C5CE7] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-[#2D3436] shadow-sticker-sm">
            INDEX
          </span>
          <h3 className="font-heading font-bold text-lg md:text-xl text-[#2D3436]">
            TABLE OF CONTENTS / 目录索引
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#2D3436]">
          <span className="w-3 h-3 rounded-full bg-[#FF7675] border border-black" />
          <span className="w-3 h-3 rounded-full bg-[#FDCB6E] border border-black" />
          <span className="w-3 h-3 rounded-full bg-[#00B894] border border-black" />
        </div>
      </div>

      {/* Envelope Pocket Graphic with Angled Sticker Cards inside */}
      <div className="relative mt-4 pt-4 pb-8 px-2 md:px-6 bg-gradient-to-b from-[#FFF5E4] to-[#FFEAD2] border-2 border-[#2D3436] rounded-xl overflow-hidden">
        {/* Decorative Top Flap shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#FDE2BC] border-b-2 border-x-2 border-[#2D3436] rounded-b-2xl shadow-xs flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#FF7675] border border-[#2D3436] shadow-xs" />
        </div>

        {/* Floating Sticker Tags Container */}
        <div className="mt-8 flex flex-wrap gap-3 md:gap-4 justify-center items-center">
          {stickers.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onTabSelect(s.id === 'skills' || s.id === 'contact' ? 'about' : s.id)}
                style={{ backgroundColor: s.color }}
                className={`group relative px-4 py-2.5 md:px-5 md:py-3 rounded-full border-2.5 border-[#2D3436] text-white font-bold text-xs md:text-sm tracking-wide shadow-sticker-sm hover:shadow-sticker transition-all duration-200 transform ${s.rotate} hover:scale-105 hover:-translate-y-1 active:translate-y-0 cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] md:text-xs">
                    {s.num}
                  </span>
                  <span>{s.label}</span>
                </div>
                {isActive && (
                  <span className="absolute -top-2 -right-2 bg-yellow-300 text-[#2D3436] text-[10px] px-1.5 py-0.5 rounded-full border border-black font-extrabold animate-bounce">
                    HERE!
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#2D3436]/70 mt-6 font-medium">
          💡 点击上方任意贴纸卡片，快速跳转至对应内容板块
        </p>
      </div>
    </div>
  );
};
