import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { X, Mail, MessageSquare, MapPin, Send, Check, Copy, Phone, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copiedWechat, setCopiedWechat] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    message: '',
    purpose: '招聘邀约 / 岗位沟通'
  });

  const handleCopy = (text: string, type: 'wechat' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'wechat') {
      setCopiedWechat(true);
      setTimeout(() => setCopiedWechat(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFBF2] border-3 border-[#2D3436] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-sticker-lg relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-red-100 rounded-full border-2 border-black text-[#2D3436] shadow-sticker-sm cursor-pointer transition-transform hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pt-2">
          <span className="bg-[#FF7675] text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-sticker-sm inline-block">
            SAY HELLO!
          </span>
          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#2D3436]">
            联系张莹 · 发送合作/招聘意向
          </h2>
          <p className="text-xs text-gray-600 font-medium">
            期待与您的进一步沟通！您可以随时通过微信号、邮箱直接联系我，或填写下方表单。
          </p>
        </div>

        {/* Direct Quick Copy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border-2 border-black shadow-sticker-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400">微信号</p>
              <p className="font-black text-sm text-[#2D3436]">{PERSONAL_INFO.wechat}</p>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.wechat, 'wechat')}
              className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-3 py-1 rounded-xl border border-emerald-400 text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              {copiedWechat ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedWechat ? '已复制' : '复制微信'}
            </button>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border-2 border-black shadow-sticker-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400">电子邮箱</p>
              <p className="font-black text-sm text-[#2D3436] truncate max-w-[150px]">{PERSONAL_INFO.email}</p>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-xl border border-purple-400 text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-purple-700" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? '已复制' : '复制邮箱'}
            </button>
          </div>
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t-2 border-dashed border-[#2D3436]">
            <div>
              <label className="block text-xs font-extrabold text-[#2D3436] mb-1">
                合作类型 / 沟通目的
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full bg-white border-2 border-black rounded-xl p-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              >
                <option value="招聘邀约 / 岗位沟通">招聘邀约 / 岗位沟通 (采购/行政内勤/文员/设计辅助)</option>
                <option value="采购比价与流程咨询">采购比价与 AI 流程咨询</option>
                <option value="视觉排版与宣传物料设计">视觉排版与宣传物料设计</option>
                <option value="其他合作与交流">其他合作与交流</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold text-[#2D3436] mb-1">
                  您的姓名 / 称呼 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="例如：李经理"
                  className="w-full bg-white border-2 border-black rounded-xl p-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#2D3436] mb-1">
                  联系方式 (手机/微信/邮箱)
                </label>
                <input
                  type="text"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  placeholder="方便与您联系的方式"
                  className="w-full bg-white border-2 border-black rounded-xl p-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#2D3436] mb-1">
                留言内容 *
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="请简要说明岗位需求、公司名称或沟通意向..."
                className="w-full bg-white border-2 border-black rounded-xl p-2.5 text-xs font-bold text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6C5CE7] hover:bg-[#5849C4] text-white font-black py-3 rounded-2xl border-3 border-black text-sm shadow-sticker hover:shadow-sticker-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              发送留言给张莹 <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border-2 border-emerald-400 p-6 rounded-2xl text-center space-y-3">
            <Sparkles className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="font-heading font-black text-xl text-emerald-900">
              留言发送成功！
            </h3>
            <p className="text-xs text-emerald-800 font-medium">
              非常感谢您的留言！张莹会第一时间查看并与您取得联系。
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-xl text-xs border border-emerald-900 cursor-pointer"
            >
              关闭窗口
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
