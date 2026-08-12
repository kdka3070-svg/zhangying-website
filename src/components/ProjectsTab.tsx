import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/resumeData';
import { Search, Filter, Sparkles, Award, ArrowUpRight, CheckCircle2, Wrench, ExternalLink } from 'lucide-react';

interface ProjectsTabProps {
  onOpenProject: (project: Project) => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({ onOpenProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['全部', '流程优化', '设计视觉', '民宿筹建', 'AI应用'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCat = selectedCategory === '全部' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Title Header */}
      <div className="bg-[#FFFBF0] border-3 border-[#2D3436] rounded-3xl p-6 md:p-8 shadow-sticker flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FDCB6E] text-[#2D3436] text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
              MY PORTFOLIO
            </span>
            <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-0.5 rounded border border-black">
              共 {PROJECTS_DATA.length} 核心代表作
            </span>
          </div>
          <h2 className="font-heading font-black text-2xl md:text-4xl text-[#2D3436]">
            我的作品集与实操成果
          </h2>
          <p className="text-xs md:text-sm text-[#2D3436]/80 mt-1 font-medium">
            展示采购流程优化、企业宣传物料设计、海外民宿筹建以及 AI 办公自动化等项目复盘。
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索作品名称、工具..."
            className="w-full bg-white border-2 border-black rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] shadow-sticker-sm"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        <span className="text-xs font-bold text-gray-500 shrink-0 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> 分类:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full border-2 border-black text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#6C5CE7] text-white shadow-sticker-sm scale-105'
                  : 'bg-white hover:bg-amber-100 text-[#2D3436]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onOpenProject(proj)}
            className="group bg-[#FFFBF0] border-3 border-[#2D3436] rounded-2xl p-6 shadow-sticker hover:shadow-sticker-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-white text-xs font-black px-3.5 py-1 rounded-full border-1.5 border-black shadow-sticker-sm"
                  style={{ backgroundColor: proj.badgeColor }}
                >
                  {proj.category}
                </span>
                <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-1 rounded border border-gray-300">
                  {proj.period}
                </span>
              </div>

              <h3 className="font-heading font-black text-xl text-[#2D3436] group-hover:text-[#6C5CE7] transition-colors mb-2">
                {proj.title}
              </h3>

              <p className="text-xs font-bold text-[#FF7675] mb-3">
                角色: {proj.role}
              </p>

              <p className="text-xs md:text-sm text-[#2D3436]/80 leading-relaxed mb-4">
                {proj.summary}
              </p>
            </div>

            <div>
              {proj.metrics && (
                <div className="mb-4 bg-purple-100/80 border-2 border-purple-300 p-2.5 rounded-xl text-xs font-black text-[#6C5CE7] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>核心成效: {proj.metrics}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-gray-300">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tools.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-[#2D3436] bg-white px-2 py-0.5 rounded border border-black">
                      #{tool}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-black text-[#6C5CE7] group-hover:underline flex items-center gap-1 shrink-0">
                  查看详情 <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white border-2 border-dashed border-gray-400 rounded-2xl p-12 text-center text-gray-500 font-bold">
          没有找到符合“{searchQuery}”的作品，尝试其他筛选条件吧！
        </div>
      )}
    </div>
  );
};
