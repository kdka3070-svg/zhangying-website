import React, { useState } from 'react';
import { TabType } from '../types';
import { PERSONAL_INFO } from '../data/resumeData';
import { DoodleSparkle, DoodleStar } from './DoodleDecorations';
import { Sparkles, MapPin, Mail, MessageSquare, Menu, X, BookOpen, Briefcase, User, Home, Palette } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenContact: () => void;
  colorScheme: 'violet-mint' | 'peach-gold';
  setColorScheme: (scheme: 'violet-mint' | 'peach-gold') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
  colorScheme,
  setColorScheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: TabType; label: string; enLabel: string; icon: any; color: string }[] = [
    { id: 'home', label: '首页', enLabel: 'HOME', icon: Home, color: '#6C5CE7' },
    { id: 'about', label: '关于我', enLabel: 'ABOUT', icon: User, color: '#FF7675' },
    { id: 'articles', label: '我的文章', enLabel: 'ARTICLES', icon: BookOpen, color: '#00B894' },
    { id: 'projects', label: '我的作品', enLabel: 'WORKS', icon: Briefcase, color: '#FDCB6E' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F2]/95 backdrop-blur-md border-b-3 border-[#2D3436] pt-2 pb-3 px-4 md:px-8">
      {/* Top Thin Announcement & Contact Strip */}
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-bold text-[#2D3436] pb-2 border-b border-dashed border-[#2D3436]/20 mb-2">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          <span className="bg-[#FF7675] text-white px-2.5 py-0.5 rounded-full border border-black shadow-sticker-sm text-[11px]">
            WELCOME TO MY WORLD
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#6C5CE7]" />
            {PERSONAL_INFO.location}
          </span>
          <span className="hidden md:inline-flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-[#00B894]" />
            {PERSONAL_INFO.email}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Palette Switcher */}
          <button
            onClick={() => setColorScheme(colorScheme === 'violet-mint' ? 'peach-gold' : 'violet-mint')}
            className="flex items-center gap-1 bg-white hover:bg-amber-100 px-2.5 py-1 rounded-full border-2 border-[#2D3436] shadow-sticker-sm transition-all text-[11px] font-bold cursor-pointer"
            title="切换高亮主题色"
          >
            <Palette className="w-3.5 h-3.5 text-[#6C5CE7]" />
            <span className="hidden sm:inline">配色:</span>
            <span>{colorScheme === 'violet-mint' ? '💜 柔紫微绿' : '🍑 暖桃金黄'}</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1 bg-[#FDCB6E] hover:bg-[#ffeaa7] text-[#2D3436] px-3 py-1 rounded-full border-2 border-[#2D3436] shadow-sticker-sm transition-all text-[11px] font-extrabold cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            联系我
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-11 h-11 bg-[#6C5CE7] rounded-xl border-2.5 border-[#2D3436] flex items-center justify-center text-white font-extrabold text-xl shadow-sticker group-hover:scale-105 group-hover:-rotate-3 transition-transform">
            ZY
            <span className="absolute -top-1.5 -right-1.5">
              <DoodleStar className="w-4 h-4 text-yellow-300" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading font-black text-xl md:text-2xl text-[#2D3436] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="bg-[#00B894] text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-black transform rotate-2">
                9年综管
              </span>
            </div>
            <p className="text-xs text-[#2D3436]/70 font-medium hidden sm:block">
              行政采购 · 门店统筹 · 美术设计 · AI办公
            </p>
          </div>
        </button>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-2 md:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl border-2.5 border-[#2D3436] font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-sticker scale-105 -rotate-1'
                    : 'bg-white hover:bg-amber-50 text-[#2D3436] hover:shadow-sticker-sm hover:-translate-y-0.5'
                }`}
                style={{
                  backgroundColor: isActive ? tab.color : undefined
                }}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2D3436]'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.2 rounded border ${
                  isActive ? 'bg-black/20 border-white/40 text-white' : 'bg-gray-100 border-gray-300 text-gray-600'
                }`}>
                  {tab.enLabel}
                </span>

                {isActive && (
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2D3436]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-white rounded-xl border-2 border-[#2D3436] shadow-sticker-sm text-[#2D3436] cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t-2 border-dashed border-[#2D3436] flex flex-col gap-2 animate-fadeIn">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 border-[#2D3436] font-bold text-sm cursor-pointer ${
                  isActive ? 'text-white shadow-sticker' : 'bg-white text-[#2D3436]'
                }`}
                style={{ backgroundColor: isActive ? tab.color : undefined }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </div>
                <span className="text-xs uppercase opacity-80">{tab.enLabel}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
