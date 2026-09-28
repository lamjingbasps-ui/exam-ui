import React, { useState } from 'react';
import QuestionBank from './Components/QuestionBank.jsx';
import TeacherManagement from '../TeacherManagement.jsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState('questionBank');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Portal Navigation Bar */}
      <nav className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow">
            SP
          </div>
          <div className="font-semibold text-slate-200">
            School Exam & Staff Portal
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setCurrentTab('questionBank')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              currentTab === 'questionBank'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📚 Question Bank
          </button>
          <button
            onClick={() => setCurrentTab('teachers')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              currentTab === 'teachers'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            👥 Teacher Management
          </button>
        </div>
      </nav>

      {/* Main View */}
      <div className="flex-1">
        {currentTab === 'questionBank' ? (
          <QuestionBank />
        ) : (
          <TeacherManagement />
        )}
      </div>
    </div>
  );
}
