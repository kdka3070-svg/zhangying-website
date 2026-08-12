import React from 'react';
import { TabType, Article, Project } from '../types';
import { ARTICLES_DATA, PROJECTS_DATA, SKILL_ITEMS, PERSONAL_INFO } from '../data/resumeData';
import { HeroSection } from './HeroSection';
import { DoodleStar, DoodleSparkle, DoodleWavy } from './DoodleDecorations';
import { ArrowRight, Sparkles, BookOpen, Briefcase, Award, CheckCircle2, ShoppingBag, FileSpreadsheet, Users, Palette, Heart } from 'lucide-react';

interface HomeTabProps {
  onSelectTab: (tab: TabType) => void;
  onOpenArticle: (article: Article) => void;
  onOpenProject: (project: Project) => void;
  onOpenContact: () => void;
  activeTab: TabType;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectTab,
  onOpenArticle,
  onOpenProject,
  onOpenContact,
  activeTab
}) => {
  const featuredArticles = ARTICLES_DATA.slice(0, 3);
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'ShoppingBag': return ShoppingBag;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      case 'Palette': return Palette;
      default: return Award;
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Header Section */}
      <HeroSection onSelectTab={onSelectTab} activeTab={activeTab} />

      {/* 1. Core Skills Preview */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <div className="flex items-center gap-2">
            <span className="bg-[#00B894] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
              SKILLS & EXPERTISE
            </span>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
              核心专业技能
            </h3>
          </div>
          <button
            onClick={() => onSelectTab('about')}
            className="text-xs md:text-sm font-bold text-[#6C5CE7] hover:underline flex items-center gap-1 cursor-pointer"
          >
            查看技能详情 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SKILL_ITEMS.map((skill, idx) => {
            const Icon = getSkillIcon(skill.iconName);
            return (
              <div
                key={idx}
                className="bg-[#FFFBF0] border-2.5 border-[#2D3436] rounded-2xl p-4 shadow-sticker hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center text-white shadow-sticker-sm"
                      style={{ backgroundColor: skill.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-[#2D3436] bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                      {skill.level}%
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-sm text-[#2D3436] mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-[#2D3436]/70 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pt-2 border-t border-dashed border-gray-300">
                  <div className="w-full bg-gray-200 h-2 rounded-full border border-black overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Featured Projects Section (我的作品 缩影) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <div className="flex items-center gap-2">
            <span className="bg-[#FDCB6E] text-[#2D3436] text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
              FEATURED WORKS
            </span>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
              精选项目作品
            </h3>
          </div>
          <button
            onClick={() => onSelectTab('projects')}
            className="bg-[#6C5CE7] hover:bg-[#5849C4] text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-xl border-2 border-black shadow-sticker-sm hover:shadow-sticker transition-all flex items-center gap-1 cursor-pointer"
          >
            浏览全部作品 ({PROJECTS_DATA.length}) <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onOpenProject(proj)}
              className="group bg-[#FFFBF0] border-3 border-[#2D3436] rounded-2xl p-5 shadow-sticker hover:shadow-sticker-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-white text-xs font-black px-3 py-1 rounded-full border-1.5 border-black shadow-sticker-sm"
                    style={{ backgroundColor: proj.badgeColor }}
                  >
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-bold text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-300">
                    {proj.period}
                  </span>
                </div>

                <h4 className="font-heading font-black text-lg text-[#2D3436] group-hover:text-[#6C5CE7] transition-colors mb-2">
                  {proj.title}
                </h4>

                <p className="text-xs text-[#2D3436]/80 line-clamp-3 leading-relaxed mb-4">
                  {proj.summary}
                </p>
              </div>

              <div>
                {proj.metrics && (
                  <div className="mb-4 bg-purple-50 border border-purple-200 p-2 rounded-xl text-xs font-bold text-[#6C5CE7] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                    <span>{proj.metrics}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-gray-300">
                  {proj.tools.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-[#2D3436] bg-white px-2 py-0.5 rounded border border-black">
                      #{tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Articles Section (我的文章 缩影) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-dashed border-[#2D3436]">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF7675] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
              ARTICLES & INSIGHTS
            </span>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
              最新文章与实操分享
            </h3>
          </div>
          <button
            onClick={() => onSelectTab('articles')}
            className="bg-[#00B894] hover:bg-[#00A884] text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-xl border-2 border-black shadow-sticker-sm hover:shadow-sticker transition-all flex items-center gap-1 cursor-pointer"
          >
            阅读更多文章 ({ARTICLES_DATA.length}) <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onOpenArticle(art)}
              className="group bg-white border-3 border-[#2D3436] rounded-2xl p-5 shadow-sticker hover:shadow-sticker-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-white text-xs font-black px-2.5 py-0.5 rounded-md border border-black shadow-sticker-sm"
                    style={{ backgroundColor: art.coverColor }}
                  >
                    {art.category}
                  </span>
                  <span className="text-xs text-gray-500 font-bold">
                    {art.readTime}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base text-[#2D3436] group-hover:text-[#FF7675] transition-colors mb-2 line-clamp-2">
                  {art.title}
                </h4>

                <p className="text-xs text-[#2D3436]/75 leading-relaxed line-clamp-3 mb-4">
                  {art.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-gray-200 text-xs font-bold text-gray-500">
                <span>{art.date}</span>
                <span className="flex items-center gap-1 text-[#FF7675]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  {art.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Contact Invitation Card */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative bg-gradient-to-r from-[#6C5CE7] via-[#8172F8] to-[#FF7675] border-3 border-[#2D3436] rounded-3xl p-8 md:p-12 text-white shadow-sticker overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="bg-yellow-300 text-[#2D3436] text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm transform -rotate-1 inline-block mb-3">
                LET'S WORK TOGETHER
              </span>
              <h3 className="font-heading font-black text-2xl md:text-4xl tracking-wide mb-2">
                寻找靠谱的行政/采购/运营合作伙伴？
              </h3>
              <p className="text-xs md:text-base text-purple-100 max-w-2xl font-medium">
                无论您需要全品类物资采购降本、AI办公流程优化，还是办公排版与宣传物料视觉美化，我都非常乐意为您提供支持！
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="bg-[#FDCB6E] hover:bg-yellow-300 text-[#2D3436] text-base font-black px-8 py-3.5 rounded-2xl border-3 border-black shadow-sticker hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              📮 立即发送合作意向
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
