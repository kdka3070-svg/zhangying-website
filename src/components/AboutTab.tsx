import React from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_INFO, SKILL_ITEMS } from '../data/resumeData';
import { DoodlePaperclip, DoodleSparkle, DoodleStar, DoodleTape } from './DoodleDecorations';
import { MapPin, Mail, Phone, Calendar, Briefcase, GraduationCap, Award, Sparkles, CheckCircle2, FileSpreadsheet, ShoppingBag, Users, Palette } from 'lucide-react';

interface AboutTabProps {
  onOpenContact: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onOpenContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12 animate-fadeIn">
      {/* 1. Header & Quick Intro */}
      <div className="relative bg-[#FFFBF0] border-3 border-[#2D3436] rounded-3xl p-6 md:p-10 shadow-sticker">
        {/* Paperclip top right */}
        <div className="absolute -top-3 right-8 z-10">
          <DoodlePaperclip className="w-8 h-12 text-[#6C5CE7]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Avatar & Photo Frame Card */}
          <div className="shrink-0 relative">
            <div className="bg-white border-3 border-[#2D3436] p-4 rounded-2xl shadow-sticker-lg transform -rotate-2">
              <div className="w-48 h-52 bg-gradient-to-br from-pink-100 via-purple-100 to-amber-100 rounded-xl border-2 border-[#2D3436] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-[#6C5CE7] border-3 border-black flex items-center justify-center text-white text-3xl font-black shadow-inner">
                  ZY
                </div>
                <span className="mt-3 bg-[#FF7675] text-white text-xs font-black px-3 py-0.5 rounded-full border border-black">
                  常州 · 张莹
                </span>
              </div>
              <div className="text-center mt-3 pt-2 border-t border-dashed border-gray-300">
                <h3 className="font-black text-xl text-[#2D3436]">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            {/* Tape Overlay */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/90 border border-amber-400 transform rotate-1 shadow-xs" />
          </div>

          {/* Right Bio & Quick Fact Badges */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#FF7675] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
                ABOUT ME
              </span>
              <h2 className="font-heading font-black text-2xl md:text-4xl text-[#2D3436]">
                关于我 · 个人简介
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#2D3436] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border-2 border-black shadow-sticker-sm text-center">
                <p className="text-[10px] font-bold text-gray-500">年龄</p>
                <p className="font-black text-base text-[#6C5CE7]">{PERSONAL_INFO.age}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-black shadow-sticker-sm text-center">
                <p className="text-[10px] font-bold text-gray-500">综合工作年限</p>
                <p className="font-black text-base text-[#FF7675]">{PERSONAL_INFO.experienceYears}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-black shadow-sticker-sm text-center">
                <p className="text-[10px] font-bold text-gray-500">现居城市</p>
                <p className="font-black text-base text-[#00B894]">{PERSONAL_INFO.location}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-black shadow-sticker-sm text-center">
                <p className="text-[10px] font-bold text-gray-500">专业背景</p>
                <p className="font-black text-base text-[#FDCB6E]">艺术设计本科</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="bg-[#6C5CE7] hover:bg-[#5849C4] text-white px-6 py-2.5 rounded-xl border-2 border-black font-bold text-sm shadow-sticker hover:shadow-sticker-lg transition-all cursor-pointer"
              >
                📬 联系我洽谈合作 / 招聘
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Work Experience (工作经历 - Folder Style) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <span className="bg-[#6C5CE7] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
            WORK EXPERIENCE
          </span>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
            工作经历
          </h3>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-[#FFFBF0] border-3 border-[#2D3436] rounded-2xl p-6 shadow-sticker hover:shadow-sticker-lg transition-all relative overflow-hidden"
            >
              {/* Folder Tab Effect */}
              <div
                className="absolute top-0 right-0 px-6 py-1.5 text-white font-black text-xs border-b-2 border-l-2 border-black rounded-bl-xl shadow-xs"
                style={{ backgroundColor: exp.color }}
              >
                {exp.period}
              </div>

              <div className="mb-4 pr-32">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading font-black text-xl text-[#2D3436]">
                    {exp.company}
                  </h4>
                  {exp.location && (
                    <span className="bg-amber-100 text-[#2D3436] text-[11px] font-bold px-2 py-0.5 rounded border border-amber-300">
                      📍 {exp.location}
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-[#6C5CE7]">
                  {exp.role}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-dashed border-gray-300">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D3436] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00B894] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <span className="bg-[#00B894] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
            EDUCATION
          </span>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
            教育经历
          </h3>
        </div>

        <div className="bg-[#FFFBF0] border-3 border-[#2D3436] rounded-2xl p-6 shadow-sticker flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00B894] border-2.5 border-black flex items-center justify-center text-white shadow-sticker-sm shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-heading font-black text-xl text-[#2D3436]">
                  {EDUCATION_INFO.school}
                </h4>
                <span className="bg-emerald-100 text-[#00B894] text-xs font-black px-2.5 py-0.5 rounded border border-emerald-300">
                  {EDUCATION_INFO.degree}
                </span>
              </div>
              <p className="text-sm font-bold text-[#6C5CE7]">
                {EDUCATION_INFO.major} ({EDUCATION_INFO.period})
              </p>
              <p className="text-xs text-[#2D3436]/80 mt-1">
                {EDUCATION_INFO.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Skill Radar & AI Competency */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <span className="bg-[#FDCB6E] text-[#2D3436] text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
            PROFESSIONAL SKILLS
          </span>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
            专业技能与 AI 工具拆解
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_ITEMS.map((skill, idx) => (
            <div key={idx} className="bg-white border-2.5 border-[#2D3436] rounded-2xl p-5 shadow-sticker space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-extrabold text-base text-[#2D3436]">
                  {skill.name}
                </h4>
                <span
                  className="text-white text-xs font-black px-2.5 py-0.5 rounded-full border border-black shadow-sticker-sm"
                  style={{ backgroundColor: skill.color }}
                >
                  掌握度 {skill.level}%
                </span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {skill.desc}
              </p>

              <div className="w-full bg-gray-100 h-2.5 rounded-full border border-black overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
