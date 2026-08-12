import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { DoodleStar, DoodleSparkle } from './DoodleDecorations';
import { Heart, ArrowUp, Sparkles, Check } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [collectedBadges, setCollectedBadges] = useState<string[]>([]);

  const badges = [
    { id: 'b1', name: '📦 采购控本', color: '#6C5CE7' },
    { id: 'b2', name: '🤖 AI办公达人', color: '#00B894' },
    { id: 'b3', name: '🎨 艺术设计背景', color: '#FF7675' },
    { id: 'b4', name: '🏠 跨国店长履历', color: '#FDCB6E' }
  ];

  const handleCollectBadge = (id: string) => {
    if (collectedBadges.includes(id)) {
      setCollectedBadges(collectedBadges.filter(b => b !== id));
    } else {
      setCollectedBadges([...collectedBadges, id]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#2D3436] text-white pt-12 pb-8 px-4 md:px-8 border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Sticker Collection Interactivity */}
        <div className="bg-[#1E272E] p-6 rounded-2xl border-2 border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h4 className="font-heading font-black text-base text-amber-200">
                收集张莹的职业标签贴纸 (已收集: {collectedBadges.length} / {badges.length})
              </h4>
            </div>
            <p className="text-xs text-gray-400">
              点击下方贴纸徽章进行收藏，开启独属技能标识！
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => {
              const isCollected = collectedBadges.includes(badge.id);
              return (
                <button
                  key={badge.id}
                  onClick={() => handleCollectBadge(badge.id)}
                  style={{ backgroundColor: isCollected ? badge.color : '#2d3436' }}
                  className={`px-3 py-1.5 rounded-full border-2 border-white/40 text-xs font-black transition-all cursor-pointer flex items-center gap-1 ${
                    isCollected ? 'text-white scale-105 shadow-sticker-sm' : 'text-gray-300 hover:border-white'
                  }`}
                >
                  {isCollected && <Check className="w-3.5 h-3.5 text-white" />}
                  <span>{badge.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-700">
          <div>
            <h3 className="font-heading font-black text-2xl text-white tracking-wide">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {PERSONAL_INFO.location} | {PERSONAL_INFO.educationSummary} | {PERSONAL_INFO.email}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="bg-[#FF7675] hover:bg-red-400 text-white font-bold px-5 py-2 rounded-xl border-2 border-white text-xs shadow-sticker-sm cursor-pointer"
            >
              📮 立即联系我
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl border-2 border-white shadow-sticker-sm cursor-pointer"
              title="回到顶部"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 张莹的个人网站 · 保留所有权利</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" /> Doodle Sticker Style
          </p>
        </div>
      </div>
    </footer>
  );
};
