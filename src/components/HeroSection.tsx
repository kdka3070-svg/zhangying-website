import React from 'react';
import { TabType } from '../types';
import { PERSONAL_INFO } from '../data/resumeData';
import { EnvelopeGraphic, DoodleLightbulb, DoodlePaperclip, DoodlePencil, DoodleSparkle, DoodleStar, DoodleWavy } from './DoodleDecorations';
import { Sparkles, MapPin, Briefcase, Award, ArrowRight, Heart } from 'lucide-react';

interface HeroSectionProps {
  onSelectTab: (tab: TabType) => void;
  activeTab: TabType;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTab, activeTab }) => {
  return (
    <section className="relative py-6 md:py-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Decorative Top Doodle Line */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <DoodlePencil className="w-8 h-5" />
          <span className="font-doodle text-[#2D3436] text-sm md:text-base font-bold tracking-widest uppercase">
            CREATIVE · ADMINISTRATIVE · AI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <DoodleStar className="w-5 h-5 text-[#FF7675]" />
          <DoodleSparkle className="w-5 h-5 text-[#6C5CE7]" />
        </div>
      </div>

      {/* Hero Header Banner Card */}
      <div className="relative bg-[#FFFBF2] border-3 border-[#2D3436] rounded-3xl p-6 md:p-10 shadow-sticker mb-10 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d3436_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

        {/* Top Floating Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-dashed border-[#2D3436]">
          <div className="flex items-center gap-3">
            <span className="bg-[#6C5CE7] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform -rotate-1">
              WELCOME TO MY
            </span>
            <span className="bg-[#FF7675] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform rotate-2">
              RESUME & PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-white px-3 py-1.5 rounded-xl border-2 border-black shadow-sticker-sm">
            <MapPin className="w-4 h-4 text-[#FF7675]" />
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#6C5CE7]">{PERSONAL_INFO.experienceYears}</span>
          </div>
        </div>

        {/* Main Skewed Title & Bio Banner */}
        <div className="relative z-10 text-center my-3 py-2 flex flex-col items-center">
          {/* Big PORTFOLIO Title with Doodle Accents */}
          <div className="inline-block relative mb-3">
            <h2 className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#2D3436] select-none">
              <span className="inline-block transform -rotate-2 text-[#6C5CE7] drop-shadow-[3px_3px_0px_#2D3436]">P</span>
              <span className="inline-block transform rotate-1 text-[#FF7675] drop-shadow-[3px_3px_0px_#2D3436]">O</span>
              <span className="inline-block transform -rotate-3 text-[#00B894] drop-shadow-[3px_3px_0px_#2D3436]">R</span>
              <span className="inline-block transform rotate-2 text-[#FDCB6E] drop-shadow-[3px_3px_0px_#2D3436]">T</span>
              <span className="inline-block transform -rotate-1 text-[#E17055] drop-shadow-[3px_3px_0px_#2D3436]">F</span>
              <span className="inline-block transform rotate-3 text-[#6C5CE7] drop-shadow-[3px_3px_0px_#2D3436]">O</span>
              <span className="inline-block transform -rotate-2 text-[#FF7675] drop-shadow-[3px_3px_0px_#2D3436]">L</span>
              <span className="inline-block transform rotate-1 text-[#00B894] drop-shadow-[3px_3px_0px_#2D3436]">I</span>
              <span className="inline-block transform -rotate-3 text-[#FDCB6E] drop-shadow-[3px_3px_0px_#2D3436]">O</span>
            </h2>

            {/* Decorative doodles around title */}
            <DoodleSparkle className="absolute -top-6 -left-6 w-8 h-8 md:w-10 md:h-10 text-[#FF7675] animate-pulse" />
            <DoodleStar className="absolute -bottom-4 -right-6 w-8 h-8 md:w-10 md:h-10 text-[#FDCB6E]" />
            <DoodleLightbulb className="absolute -top-8 right-12 w-8 h-8 md:w-10 md:h-10 hidden sm:block" />
          </div>

          {/* Unified Name, Role & Contact Badge Card */}
          <div className="bg-white border-2.5 border-[#2D3436] rounded-2xl px-5 py-3 md:px-7 md:py-4 shadow-sticker max-w-2xl w-full transform -rotate-0.5 hover:rotate-0 transition-transform duration-300">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-base md:text-xl font-heading font-extrabold text-[#2D3436]">
              <span className="text-[#6C5CE7] font-black text-xl md:text-2xl">张莹</span>
              <span className="text-gray-300">|</span>
              <span className="highlight-yellow px-2 py-0.5 rounded-md">9年综合行政</span>
              <span className="text-gray-300">·</span>
              <span className="highlight-mint px-2 py-0.5 rounded-md">采购内勤</span>
              <span className="text-gray-300">·</span>
              <span className="highlight-pink px-2 py-0.5 rounded-md">AI办公</span>
            </div>

            {/* Integrated Contact Quick Info Chips */}
            <div className="mt-2.5 pt-2.5 border-t border-dashed border-gray-300 flex flex-wrap justify-center items-center gap-2.5 md:gap-4 text-xs md:text-sm font-bold text-[#2D3436]">
              <span className="flex items-center gap-1.5 bg-[#F8F9FA] px-2.5 py-1 rounded-lg border border-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                微信: {PERSONAL_INFO.wechat}
              </span>
              <span className="flex items-center gap-1.5 bg-[#F8F9FA] px-2.5 py-1 rounded-lg border border-gray-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                邮箱: {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5 bg-[#F8F9FA] px-2.5 py-1 rounded-lg border border-gray-300">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                {PERSONAL_INFO.educationSummary}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section: Envelope Index & Cartoon Photo Frame Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Interactive Envelope Table of Contents (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <EnvelopeGraphic onTabSelect={onSelectTab} activeTab={activeTab} />
          
          <div className="mt-6 bg-[#6C5CE7] text-white p-5 rounded-2xl border-3 border-[#2D3436] shadow-sticker">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <h4 className="font-heading font-extrabold text-base">一句话亮点</h4>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-medium text-purple-100">
              “9年综合岗履历，兼具<span className="text-yellow-300 font-bold underline">采购成本控制敏锐度</span>与<span className="text-emerald-300 font-bold underline">艺术设计美感</span>，精通各类 AI 办公高效工具！”
            </p>
          </div>
        </div>

        {/* Right: Cartoon Profile Photo Card with Paperclips & Tape (7 Cols) */}
        <div className="lg:col-span-7 bg-[#FFFBF0] border-3 border-[#2D3436] rounded-3xl p-6 md:p-8 shadow-sticker flex flex-col justify-between relative overflow-hidden">
          {/* Paperclip Doodle on top right */}
          <div className="absolute top-2 right-4 z-20">
            <DoodlePaperclip className="w-8 h-12 text-[#FF7675]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Avatar Photo Frame Card */}
            <div className="md:col-span-5 relative flex flex-col items-center">
              <div className="relative bg-white border-3 border-[#2D3436] p-3 rounded-2xl shadow-sticker-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Simulated Photo Avatar */}
                <div className="w-44 h-48 md:w-48 md:h-52 bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 rounded-xl border-2 border-[#2D3436] overflow-hidden relative flex flex-col items-center justify-center">
                  {/* Cartoon Character Graphic */}
                  <div className="relative w-32 h-32 rounded-full bg-[#FF7675] border-3 border-black flex items-center justify-center text-white text-4xl font-extrabold shadow-inner">
                    ZY
                    <span className="absolute -bottom-1 right-0 text-xl">✨</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="bg-[#6C5CE7] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-black">
                      ART & ADMIN
                    </span>
                  </div>
                </div>

                <div className="text-center mt-3 pt-2 border-t border-dashed border-gray-300">
                  <h3 className="font-black text-xl text-[#2D3436] tracking-wide">
                    张莹 ZHANG YING
                  </h3>
                  <p className="text-xs font-bold text-[#FF7675] uppercase">
                    Graphic & Admin Specialist
                  </p>
                </div>

                {/* Photo Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-200/90 border border-amber-400 transform -rotate-1 shadow-xs" />
              </div>

              {/* Age & Location Stickers pinned around photo */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="bg-[#FDCB6E] text-[#2D3436] text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform -rotate-3">
                  Age: 32岁
                </span>
                <span className="bg-[#00B894] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform rotate-2">
                  常州 · 江苏
                </span>
                <span className="bg-[#FF7675] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform -rotate-1">
                  艺术设计本科
                </span>
              </div>
            </div>

            {/* Bio Speech Bubble & Highlights */}
            <div className="md:col-span-7 flex flex-col justify-between gap-4">
              {/* Speech Bubble */}
              <div className="relative bg-white border-2.5 border-[#2D3436] p-4 md:p-5 rounded-2xl shadow-sticker-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-heading font-black text-base md:text-lg text-[#FF7675]">
                    Hi!!! 我是张莹 👋
                  </span>
                  <span className="bg-purple-100 text-[#6C5CE7] text-[10px] font-bold px-2 py-0.5 rounded border border-purple-300">
                    Meeeee!
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#2D3436] leading-relaxed">
                  拥有 <span className="highlight-yellow font-bold">9年跨行业综合工作经验</span>，熟悉行政采购、门店统筹与多方资源对接。具备长期自主学习习惯，现阶段系统掌握各类 <span className="highlight-mint font-bold">AI 办公工具</span>（文案撰写、数据整理与素材美化）。本科为 <span className="highlight-pink font-bold">艺术设计专业</span>，适配办公室内勤与 AI 辅助类岗位！
                </p>
              </div>

              {/* Key Competency Bullet Chips */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3436]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6C5CE7]" />
                  <span>常州三汇数字新媒体 办公室文员/采购内勤</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3436]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF7675]" />
                  <span>马来西亚自营民宿 0-1 门店店长与运营</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3436]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00B894]" />
                  <span>北京知然美术 课程视觉设计与美术教师</span>
                </div>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectTab('about')}
                  className="bg-[#6C5CE7] hover:bg-[#5849C4] text-white px-4 py-2 rounded-xl border-2 border-black font-bold text-xs shadow-sticker-sm hover:shadow-sticker transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  查看完整简历 <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="bg-white hover:bg-amber-100 text-[#2D3436] px-4 py-2 rounded-xl border-2 border-black font-bold text-xs shadow-sticker-sm hover:shadow-sticker transition-all cursor-pointer"
                >
                  浏览作品集
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
