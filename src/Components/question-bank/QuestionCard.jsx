import React from 'react';
import Icon from '../common/Icon.jsx';
import { ActionBtn } from '../common/ModalWrapper.jsx';
import { TYPE_BADGES, DIFFICULTY_CLS } from '../../data/mockQuestions.js';

export default function QuestionCard({ question, onOpenModal, onOpenEdit }) {
  const q = question;
  const typeBadge = TYPE_BADGES[q.type] || { cls: 'bg-gray-100 text-gray-600 border-gray-200', label: q.type };

  return (
    <div
      className="bg-white rounded-xl border flex flex-col transition-all hover:shadow-md"
      style={{ borderColor: '#E8E2D9', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
    >
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs font-bold text-gray-600">{q.id}</span>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-semibold border"
              style={{
                backgroundColor: 'rgba(114, 16, 42, 0.08)',
                color: '#72102a',
                borderColor: 'rgba(114, 16, 42, 0.2)',
              }}
            >
              {q.version}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            <span className="font-medium text-gray-700">{q.subject}</span> • {q.grade} • {q.chapter}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className={`text-[11px] px-2 py-0.5 rounded-full border font-semibold ${typeBadge.cls}`}>
            {typeBadge.label}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded border bg-amber-50 text-amber-700 border-amber-200">
              {q.marks}M
            </span>
            <span className={`text-[11px] px-2 py-0.5 rounded border font-medium ${DIFFICULTY_CLS[q.difficulty]}`}>
              {q.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Question Stem */}
      <div className="px-4 py-3 flex-1">
        <p className="text-sm text-gray-800 leading-relaxed line-clamp-3">{q.questionText}</p>

        {/* MCQ mini-options */}
        {q.options && q.options.length > 0 && (
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            {q.options.map((opt) => (
              <div
                key={opt.id}
                className={`text-[11px] px-2 py-1 rounded border flex items-center gap-1 ${
                  opt.isCorrect
                    ? 'bg-green-50 text-green-700 border-green-200 font-medium'
                    : 'bg-gray-50 text-gray-500 border-gray-200'
                }`}
              >
                <span className="font-semibold">{opt.id.slice(-1)}.</span>
                <span className="truncate">{opt.text}</span>
                {opt.isCorrect && <Icon name="check" className="w-3 h-3 ml-auto flex-shrink-0 text-green-600" />}
              </div>
            ))}
          </div>
        )}

        <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
          <span className="truncate max-w-[180px]" title={q.bookReference}>{q.bookReference}</span>
          <span>Est: {q.estimatedTimeMin}m • {q.cognitiveLevel}</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-3 py-2 bg-[#FBF9F6] border-t border-[#E8E2D9] rounded-b-xl flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ActionBtn icon="eye" label="View" color="#0369A1" onClick={() => onOpenModal('details', q)} />
          <ActionBtn icon="edit" label="Edit" color="#A68A3D" onClick={() => onOpenEdit(q)} />
          <ActionBtn icon="history" label="History" color="#008B8B" onClick={() => onOpenModal('history', q)} />
        </div>
        <div className="flex items-center gap-1">
          <ActionBtn icon="trash" label="Delete" color="#DC2626" onClick={() => onOpenModal('delete', q)} />
        </div>
      </div>
    </div>
  );
}
