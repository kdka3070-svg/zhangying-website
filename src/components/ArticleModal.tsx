import React, { useState } from 'react';
import { Article } from '../types';
import { X, Heart, Calendar, Clock, Share2, ThumbsUp, MessageCircle, Send, Check } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState<string[]>([
    '思路非常清晰，启发很大！特别是关于询价比价SOP的部分。',
    'AI提示词总结得太实用了，已收藏！'
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([newComment, ...comments]);
    setNewComment('');
  };

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

        {/* Article Meta Header */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <span
              className="text-white text-xs font-black px-3 py-1 rounded-full border border-black shadow-sticker-sm"
              style={{ backgroundColor: article.coverColor }}
            >
              {article.category}
            </span>
            <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-0.5 rounded border border-gray-300">
              {article.readTime}
            </span>
          </div>

          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436] leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center justify-between text-xs font-bold text-gray-500 pb-4 border-b-2 border-dashed border-[#2D3436]">
            <span>发布日期: {article.date}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 text-[#6C5CE7] hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? '链接已复制' : '分享文章'}
              </button>
            </div>
          </div>
        </div>

        {/* Article Markdown-styled Content */}
        <div className="prose prose-slate max-w-none text-xs md:text-sm text-[#2D3436] leading-relaxed space-y-4">
          <div className="bg-amber-50 border-l-4 border-[#FDCB6E] p-4 rounded-r-xl font-medium text-amber-900">
            💡 摘要: {article.summary}
          </div>

          <div className="whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Tags & Like Bar */}
        <div className="pt-6 border-t-2 border-dashed border-[#2D3436] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-bold text-gray-700 bg-white px-2.5 py-1 rounded-lg border border-black">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 border-black font-black text-sm shadow-sticker-sm transition-all cursor-pointer ${
              hasLiked ? 'bg-[#FF7675] text-white scale-105' : 'bg-white text-[#2D3436] hover:bg-pink-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
            <span>{hasLiked ? '已点赞' : '点个赞'} ({likes})</span>
          </button>
        </div>

        {/* Interactive Comment Section */}
        <div className="pt-6 border-t border-gray-300 space-y-4">
          <h4 className="font-heading font-black text-lg text-[#2D3436] flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#6C5CE7]" />
            读者留言区 ({comments.length})
          </h4>

          <form onSubmit={handleAddComment} className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="撰写你的读后想法或交流提问..."
              className="flex-1 bg-white border-2 border-black rounded-xl px-4 py-2 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            />
            <button
              type="submit"
              className="bg-[#6C5CE7] hover:bg-[#5849C4] text-white font-bold px-4 py-2 rounded-xl border-2 border-black text-xs shadow-sticker-sm cursor-pointer flex items-center gap-1"
            >
              发送 <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="space-y-2 max-h-40 overflow-y-auto">
            {comments.map((c, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-gray-300 text-xs font-medium text-[#2D3436]">
                💬 {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
