import React from 'react';
import Icon from '../common/Icon.jsx';

function getOptionLabel(label, option) {
  if (option === 'All') {
    return label === 'Marks' ? 'All Marks' : `All ${label}s`;
  }
  if (label === 'Marks') {
    return `${option} Mark${option === '1' ? '' : 's'}`;
  }
  return option;
}

export default function QuestionFilters({
  searchTerm,
  setSearchTerm,
  filterSubject,
  setFilterSubject,
  filterGrade,
  setFilterGrade,
  filterType,
  setFilterType,
  filterMarks,
  setFilterMarks,
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
      label: 'Marks',
      value: filterMarks,
      set: setFilterMarks,
      opts: ['All', '1', '2', '3', '5'],
    },
  ];

  const activeFiltersCount = [filterSubject, filterGrade, filterType, filterMarks].filter(v => v !== 'All').length;

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #E8E2D9',
        borderRadius: '14px',
        padding: '16px 18px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {/* Search */}
      <div style={{ position: 'relative' }}>
        <Icon
          name="search"
          className="w-4 h-4"
          style={{
            position: 'absolute', left: '14px', top: '50%',
            transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          placeholder="Search by question text, ID, chapter, or author…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '42px',
            paddingRight: searchTerm ? '40px' : '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '13px',
            color: '#1A1A1A',
            background: '#FAFAF9',
            border: '1.5px solid #E8E2D9',
            borderRadius: '10px',
            outline: 'none',
            transition: 'border-color 0.18s, box-shadow 0.18s',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#72102a';
            e.target.style.boxShadow = '0 0 0 3px rgba(114,16,42,0.10)';
            e.target.style.background = '#ffffff';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E8E2D9';
            e.target.style.boxShadow = 'none';
            e.target.style.background = '#FAFAF9';
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
            style={{
              position: 'absolute', right: '12px', top: '50%',
              transform: 'translateY(-50%)',
              color: '#9CA3AF', background: 'none', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              padding: '2px',
            }}
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '2px' }}>
          Filters
        </span>

        {filterConfigs.map((f) => {
          const isActive = f.value !== 'All';
          return (
            <select
              key={f.label}
              value={f.value}
              onChange={(e) => f.set(e.target.value)}
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '5px 12px',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#72102a' : '#4B5563',
                background: isActive ? 'rgba(114,16,42,0.07)' : '#F9F9F8',
                border: `1.5px solid ${isActive ? 'rgba(114,16,42,0.3)' : '#E8E2D9'}`,
                borderRadius: '999px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s',
                boxShadow: isActive ? '0 0 0 3px rgba(114,16,42,0.08)' : 'none',
              }}
            >
              {f.opts.map((o) => (
                <option key={o} value={o}>
                  {getOptionLabel(f.label, o)}
                </option>
              ))}
            </select>
          );
        })}

        {/* Clear Filters */}
        {activeFiltersCount > 0 && (
          <button
            onClick={() => {
              setFilterSubject('All');
              setFilterGrade('All');
              setFilterType('All');
              setFilterMarks('All');
            }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '5px 12px',
              fontSize: '12px', fontWeight: 600,
              color: '#72102a',
              background: 'rgba(114,16,42,0.06)',
              border: '1.5px solid rgba(114,16,42,0.2)',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(114,16,42,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(114,16,42,0.06)'; }}
          >
            <Icon name="close" className="w-3 h-3" />
            Clear ({activeFiltersCount})
          </button>
        )}

      </div>
    </div>
  );
}
