import React from 'react';
import Icon from '../common/Icon.jsx';

export default function QuestionFilters({
  searchTerm,
  setSearchTerm,
  filterSubject,
  setFilterSubject,
  filterGrade,
  setFilterGrade,
  filterType,
  setFilterType,
  filterDifficulty,
  setFilterDifficulty,
  viewMode,
  setViewMode,
}) {
  const filterConfigs = [
    {
      label: 'Subject',
      value: filterSubject,
      set: setFilterSubject,
      opts: ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English Literature'],
    },
    {
      label: 'Grade',
      value: filterGrade,
      set: setFilterGrade,
      opts: ['All', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    },
    {
      label: 'Type',
      value: filterType,
      set: setFilterType,
      opts: ['All', 'Multiple Choice (MCQ)', 'Short Answer', 'Long Essay / Problem', 'Assertion & Reasoning', 'True / False'],
    },
    {
      label: 'Difficulty',
      value: filterDifficulty,
      set: setFilterDifficulty,
      opts: ['All', 'Easy', 'Medium', 'Hard'],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <div className="relative">
        <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by question text, ID, chapter, or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all"
          style={{ borderColor: '#E8E2D9' }}
          onFocus={(e) => {
            e.target.style.boxShadow = '0 0 0 3px rgba(114,16,42,0.12)';
            e.target.style.borderColor = '#72102a';
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.borderColor = '#E8E2D9';
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-2">
        {filterConfigs.map((f) => (
          <select
            key={f.label}
            value={f.value}
            onChange={(e) => f.set(e.target.value)}
            className="bg-white border rounded-lg px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none hover:border-gray-300 transition-colors cursor-pointer"
            style={{ borderColor: '#E8E2D9', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}
          >
            {f.opts.map((o) => (
              <option key={o} value={o}>
                {o === 'All' ? `All ${f.label}s` : o}
              </option>
            ))}
          </select>
        ))}

        {/* View Mode Toggle */}
        <div
          className="ml-auto flex items-center gap-1 bg-white p-1 rounded-lg border"
          style={{ borderColor: '#E8E2D9', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}
        >
          <button
            onClick={() => setViewMode('card')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'card' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
            style={viewMode === 'card' ? { backgroundColor: '#72102a' } : {}}
            title="Card View"
            aria-label="Card View"
          >
            <Icon name="grid" className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'table' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
            style={viewMode === 'table' ? { backgroundColor: '#72102a' } : {}}
            title="Table View"
            aria-label="Table View"
          >
            <Icon name="list" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
