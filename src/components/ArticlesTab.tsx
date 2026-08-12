import React, { useState } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/resumeData';
import { Search, Heart, Clock, Calendar, Tag, Sparkles, Filter, BookOpen } from 'lucide-react';

interface ArticlesTabProps {
  onOpenArticle: (article: Article) => void;
}

export const ArticlesTab: React.FC<ArticlesTabProps> = ({ onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['全部', 'AI办公实操', '行政采购指南', '职场跨界感悟', '运营管理'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCat = selectedCategory === '全部' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Title Header */}
      <div className="bg-[#FFFBF0] border-3 border-[#2D3436] rounded-3xl p-6 md:p-8 shadow-sticker flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FF7675] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm">
              MY ARTICLES
            </span>
            <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-0.5 rounded border border-black">
              共 {ARTICLES_DATA.length} 篇经验沉淀
            </span>
          </div>
          <h2 className="font-heading font-black text-2xl md:text-4xl text-[#2D3436]">
            我的文章与职场心得
          </h2>
          <p className="text-xs md:text-sm text-[#2D3436]/80 mt-1 font-medium">
            分享关于 AI 办公提效、行政采购标准化、供应商比价及跨界职场成长的实操经验。
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索文章关键词、标签..."
            className="w-full bg-white border-2 border-black rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] shadow-sticker-sm"
          />
        </div>
      </div>

      {/* Category Pills */}
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

      {/* Articles Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <article
            key={art.id}
            onClick={() => onOpenArticle(art)}
            className="group bg-white border-3 border-[#2D3436] rounded-2xl p-6 shadow-sticker hover:shadow-sticker-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-white text-xs font-black px-3 py-1 rounded-full border border-black shadow-sticker-sm"
                  style={{ backgroundColor: art.coverColor }}
                >
                  {art.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {art.readTime}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-[#2D3436] group-hover:text-[#FF7675] transition-colors mb-3 line-clamp-2 leading-snug">
                {art.title}
              </h3>

              <p className="text-xs text-[#2D3436]/75 leading-relaxed line-clamp-3 mb-4">
                {art.summary}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-dashed border-gray-200">
                {art.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-gray-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer Date & Likes */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {art.date}
                </span>
                <span className="flex items-center gap-1 text-[#FF7675]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  {art.likes} 赞
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="bg-white border-2 border-dashed border-gray-400 rounded-2xl p-12 text-center text-gray-500 font-bold">
          没有找到符合“{searchQuery}”的文章，尝试搜索其他关键词吧！
        </div>
      )}
    </div>
  );
};
