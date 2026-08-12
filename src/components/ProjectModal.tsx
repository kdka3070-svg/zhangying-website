import React from 'react';
import { Project } from '../types';
import { X, Sparkles, CheckCircle2, Wrench, Calendar, User, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFBF2] border-3 border-[#2D3436] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-sticker-lg relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-red-100 rounded-full border-2 border-black text-[#2D3436] shadow-sticker-sm cursor-pointer transition-transform hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <span
              className="text-white text-xs font-black px-3.5 py-1 rounded-full border border-black shadow-sticker-sm"
              style={{ backgroundColor: project.badgeColor }}
            >
              {project.category}
            </span>
            <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-0.5 rounded border border-gray-300">
              {project.period}
            </span>
          </div>

          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
            {project.title}
          </h2>

          <div className="flex items-center gap-2 text-xs font-bold text-[#6C5CE7] bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200">
            <User className="w-4 h-4" />
            <span>项目角色: {project.role}</span>
          </div>
        </div>

        {/* Highlight Metric */}
        {project.metrics && (
          <div className="bg-gradient-to-r from-amber-100 to-amber-200 border-2 border-amber-400 p-4 rounded-2xl flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-600 shrink-0 animate-pulse" />
            <div>
              <p className="text-[10px] font-bold text-amber-800 uppercase">核心成果指标</p>
              <p className="font-black text-base md:text-lg text-[#2D3436]">{project.metrics}</p>
            </div>
          </div>
        )}

        {/* Summary & Breakdown */}
        <div className="space-y-4">
          <h4 className="font-heading font-black text-base text-[#2D3436]">
            项目概述
          </h4>
          <p className="text-xs md:text-sm text-[#2D3436]/90 leading-relaxed bg-white p-4 rounded-xl border border-gray-300">
            {project.summary}
          </p>

          <h4 className="font-heading font-black text-base text-[#2D3436]">
            具体职责与工作复盘
          </h4>
          <div className="space-y-2.5">
            {project.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D3436] leading-relaxed bg-white p-3 rounded-xl border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#00B894] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Used */}
        <div className="pt-4 border-t-2 border-dashed border-[#2D3436]">
          <h4 className="font-heading font-bold text-xs text-gray-500 uppercase mb-2">
            应用工具与技能方法
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="bg-white text-xs font-bold text-[#2D3436] px-3 py-1 rounded-lg border-2 border-black shadow-sticker-sm">
                #{tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
