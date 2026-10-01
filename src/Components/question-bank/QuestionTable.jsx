import React, { useState } from 'react';
import Icon from '../common/Icon.jsx';
import { TYPE_BADGES } from '../../data/mockQuestions.js';

function VersionInfo() {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex items-center ml-1.5">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-label="Version info"
        className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
      >
        <Icon name="info" className="w-3 h-3" />
      </button>
      {show && (
        <span
          role="tooltip"
          className="pointer-events-none absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 w-60 text-left"
        >
          <span
            className="block rounded-xl shadow-xl border text-[11px] leading-relaxed"
            style={{
              backgroundColor: '#ffffff',
              color: '#1A1A1A',
              borderColor: '#E8E2D9',
              padding: '10px 12px',
            }}
          >
            <span className="block font-bold mb-1" style={{ color: '#72102a' }}>📋 Version System</span>
            Every question starts at <strong>v1.0</strong>. Each time you edit &amp; save, the minor version increments automatically — e.g. <strong>v1.0 → v1.1 → v1.2</strong>.
            <span className="block mt-1.5 text-gray-500">Full history is tracked in the Activity Ledger.</span>
          </span>
        </span>
      )}
    </span>
  );
}

export default function QuestionTable({ questions, onOpenModal, onOpenEdit }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-x-auto" style={{ borderColor: '#E8E2D9' }}>
      <div>
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[#FBF9F6] border-b border-[#E8E2D9] text-gray-500 uppercase tracking-wide text-[11px]">
              <th className="px-4 py-3">ID & Type</th>
              <th className="px-4 py-3">Subject / Chapter</th>
              <th className="px-4 py-3 max-w-xs">Question</th>
              <th className="px-4 py-3">Marks</th>
              <th className="px-4 py-3">
                <span className="inline-flex items-center gap-1">Version <VersionInfo /></span>
              </th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {questions.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50/70 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-mono font-bold text-gray-700">{q.id}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{TYPE_BADGES[q.type]?.label || q.type}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-700">{q.subject}</div>
                  <div className="text-[11px] text-gray-400 truncate max-w-[140px]">{q.chapter}</div>
                </td>
                <td className="px-4 py-3 max-w-xs">
                  <p className="text-gray-700 line-clamp-2">{q.questionText}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    {q.marks}M
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[11px] font-semibold px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: 'rgba(114, 16, 42, 0.08)',
                        color: '#72102a',
                        borderColor: 'rgba(114, 16, 42, 0.2)',
                      }}
                    >
                      {q.version}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => onOpenModal('details', q)}
                      className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                      title="View Details"
                    >
                      <Icon name="eye" className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenEdit(q)}
                      className="p-1.5 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors"
                      title="Edit Question"
                    >
                      <Icon name="edit" className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenModal('history', q)}
                      className="p-1.5 rounded-lg text-teal-600 hover:bg-teal-50 transition-colors"
                      title="Activity History"
                    >
                      <Icon name="history" className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenModal('delete', q)}
                      className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete Question"
                    >
                      <Icon name="trash" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
