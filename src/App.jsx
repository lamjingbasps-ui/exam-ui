import React, { useState } from 'react';
import QuestionBank from './Components/QuestionBank.jsx';
import TeacherManagement from '../TeacherManagement.jsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState('teachers');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col font-sans">
      {/* Top Portal Navigation Bar (Maroon #72102A header) */}
      <nav className="bg-[#72102A] border-b border-[#5C0C21] px-4 sm:px-6 py-3 flex items-center justify-between text-xs sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#C9A84C] text-[#5C0C21] font-extrabold flex items-center justify-center shadow-md text-sm border border-[#FDF8E8]">
            SP
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide text-white">
              South Point School, Guwahati
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-[#5C0C21]/70 p-1 rounded-xl border border-[#8B1F3A]/70 shadow-inner">
          <button
            onClick={() => setCurrentTab('questionBank')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all text-xs flex items-center gap-1.5 ${
              currentTab === 'questionBank'
                ? 'bg-[#C9A84C] text-[#1A1A1A] shadow-md border border-[#FDF8E8]/40'
                : 'text-[#F5E6EA] hover:text-white hover:bg-[#8B1F3A]/80'
            }`}
          >
            <span>📚</span> Question Bank
          </button>
          <button
            onClick={() => setCurrentTab('teachers')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all text-xs flex items-center gap-1.5 ${
              currentTab === 'teachers'
                ? 'bg-[#C9A84C] text-[#1A1A1A] shadow-md border border-[#FDF8E8]/40'
                : 'text-[#F5E6EA] hover:text-white hover:bg-[#8B1F3A]/80'
            }`}
          >
            <span>👥</span> Teacher Management
          </button>
        </div>
      </nav>

      {/* Main View */}
      <div className="flex-1 bg-[#FAF8F5]">
        {currentTab === 'questionBank' ? (
          <QuestionBank />
        ) : (
          <TeacherManagement />
        )}
      </div>
    </div>
  );
}
