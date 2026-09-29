import React from 'react';
import Icon from './Icon.jsx';

export function ActionBtn({ icon, label, color, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
        disabled
          ? 'cursor-not-allowed opacity-40 pointer-events-none'
          : 'hover:bg-gray-100 active:scale-95'
      }`}
      style={{ color }}
      title={label}
    >
      <Icon name={icon} className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export function ModalWrapper({ title, subtitle, onClose, children, wide, narrow }) {
  const w = wide ? 'max-w-2xl' : narrow ? 'max-w-md' : 'max-w-xl';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className={`bg-white rounded-2xl shadow-2xl w-full ${w} max-h-[90vh] overflow-y-auto flex flex-col`}>
        <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-base font-bold text-gray-800" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {title}
            </h3>
            {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

export function Label({ children }) {
  return <label className="block text-xs font-semibold text-gray-600 mb-1">{children}</label>;
}

export function InfoBox({ title, content }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">{title}</div>
      <p className="text-xs text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
