import React from 'react';
import Icon from '../common/Icon.jsx';
import { TYPE_BADGES } from '../../data/mockQuestions.js';

export default function QuestionTable({ questions, onOpenModal, onOpenEdit }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden" style={{ borderColor: '#E8E2D9' }}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[#FBF9F6] border-b border-[#E8E2D9] text-gray-500 uppercase tracking-wide text-[11px]">
              <th className="px-4 py-3">ID & Type</th>
              <th className="px-4 py-3">Subject / Chapter</th>
              <th className="px-4 py-3 max-w-xs">Question</th>
              <th className="px-4 py-3">Marks</th>
              <th className="px-4 py-3">Version</th>
              <th className="px-4 py-3">Status</th>
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
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                      q.status === 'Active'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {q.status}
                  </span>
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
