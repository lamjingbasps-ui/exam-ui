import React from 'react';
import Icon from '../common/Icon.jsx';
import { ModalWrapper, Label, InfoBox } from '../common/ModalWrapper.jsx';
import { TYPE_BADGES } from '../../data/mockQuestions.js';

export default function QuestionDetailsModal({ current, onClose, onOpenEdit, onOpenHistory }) {
  if (!current) return null;

  return (
    <ModalWrapper
      title="Question Details"
      subtitle={`${current.id} • ${current.version}`}
      onClose={onClose}
    >
      <div className="space-y-4">
        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['Subject', current.subject],
            ['Grade', current.grade],
            ['Marks', `${current.marks}M (Neg: ${current.negativeMarks})`],
            ['Type', TYPE_BADGES[current.type]?.label || current.type],
            ['Cognitive Level', current.cognitiveLevel],
            ['Est. Time', `${current.estimatedTimeMin} min`],
            ['Status', current.status],
          ].map(([k, v]) => (
            <div key={k} className="bg-gray-50 rounded-lg px-3 py-2">
              <div className="text-[11px] text-gray-400 mb-0.5">{k}</div>
              <div className="text-xs font-semibold text-gray-700">{v}</div>
            </div>
          ))}
        </div>

        <div>
          <Label>Question Content</Label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
            {current.questionText}
          </div>
        </div>

        {current.options && current.options.length > 0 && (
          <div>
            <Label>Answer Options</Label>
            <div className="space-y-1.5">
              {current.options.map((opt) => (
                <div
                  key={opt.id}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${
                    opt.isCorrect
                      ? 'bg-green-50 border-green-200 text-green-800 font-medium'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white border flex items-center justify-center font-bold text-[11px]">
                      {opt.id.slice(-1)}
                    </span>
                    {opt.text}
                  </div>
                  {opt.isCorrect && (
                    <span className="flex items-center gap-1 text-green-700 font-semibold">
                      <Icon name="check" className="w-3.5 h-3.5" /> Correct
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InfoBox title="💡 Model Answer" content={current.correctAnswer || current.explanation} />
          <InfoBox title="📋 Marking Rubric" content={current.rubric || 'Standard marking scheme.'} />
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-gray-100">
          <span>📚 {current.bookReference}</span>
          <span>✍️ {current.author}</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
        <button
          onClick={() => onOpenHistory(current)}
          style={{ padding: '8px 12px', borderRadius: '8px', gap: '8px' }}
          className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 flex items-center transition-colors"
        >
          <Icon name="history" className="w-4 h-4" /> <span>View Activity History</span>
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onOpenEdit(current)}
            style={{ backgroundColor: '#72102a', padding: '10px 14px', borderRadius: '8px' }}
            className="text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Edit Question
          </button>
          <button
            onClick={onClose}
            style={{ padding: '10px 14px', borderRadius: '8px' }}
            className="text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
