import React, { useState, useMemo, useRef, useEffect } from 'react';
import TopBar from './layout/TopBar.jsx';
import Sidebar from './layout/Sidebar.jsx';
import ComingSoonPlaceholder from './layout/ComingSoonPlaceholder.jsx';
import QuestionFilters from './question-bank/QuestionFilters.jsx';
import Pagination from './question-bank/Pagination.jsx';
import QuestionTable from './question-bank/QuestionTable.jsx';
import QuestionDetailsModal from './modals/QuestionDetailsModal.jsx';
import QuestionEditModal from './modals/QuestionEditModal.jsx';
import QuestionHistoryModal from './modals/QuestionHistoryModal.jsx';
import QuestionDeleteModal from './modals/QuestionDeleteModal.jsx';
import Icon from './common/Icon.jsx';
import { INITIAL_QUESTIONS } from '../data/mockQuestions.js';
import { NAV_ITEMS } from '../data/navigation.js';

export default function QuestionBank() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('All');
  const [filterGrade, setFilterGrade] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterMarks, setFilterMarks] = useState('All');
  const [activeNav, setActiveNav] = useState('questionBank');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [modal, setModal] = useState(null); // 'details' | 'edit' | 'history' | 'delete'
  const [current, setCurrent] = useState(null);
  const [toast, setToast] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const navButtonRefs = useRef([]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const openModal = (type, q) => {
    setCurrent(q);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    setCurrent(null);
  };

  // Keyboard navigation for sidebar (ArrowUp, ArrowDown, Home, End)
  const handleNavKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % NAV_ITEMS.length;
      navButtonRefs.current[nextIndex]?.focus();
      setActiveNav(NAV_ITEMS[nextIndex].id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + NAV_ITEMS.length) % NAV_ITEMS.length;
      navButtonRefs.current[prevIndex]?.focus();
      setActiveNav(NAV_ITEMS[prevIndex].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      navButtonRefs.current[0]?.focus();
      setActiveNav(NAV_ITEMS[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      navButtonRefs.current[NAV_ITEMS.length - 1]?.focus();
      setActiveNav(NAV_ITEMS[NAV_ITEMS.length - 1].id);
    }
  };

  // Global hotkeys: Alt + 1..6 jumps directly to sidebar sections
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.altKey && e.key >= '1' && e.key <= String(NAV_ITEMS.length)) {
        e.preventDefault();
        const targetIndex = Number(e.key) - 1;
        if (NAV_ITEMS[targetIndex]) {
          setActiveNav(NAV_ITEMS[targetIndex].id);
          navButtonRefs.current[targetIndex]?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const s = searchTerm.toLowerCase();
      const matchSearch =
        q.questionText.toLowerCase().includes(s) ||
        q.id.toLowerCase().includes(s) ||
        q.chapter.toLowerCase().includes(s) ||
        q.author.toLowerCase().includes(s);
      return (
        matchSearch &&
        (filterSubject === 'All' || q.subject === filterSubject) &&
        (filterGrade === 'All' || q.grade === filterGrade) &&
        (filterType === 'All' || q.type === filterType) &&
        (filterStatus === 'All' || q.status === filterStatus) &&
        (filterMarks === 'All' || String(q.marks) === filterMarks)
      );
    });
  }, [questions, searchTerm, filterSubject, filterGrade, filterType, filterStatus, filterMarks]);

  // Reset to first page when any search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterSubject, filterGrade, filterType, filterStatus, filterMarks]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const paginatedQuestions = filtered.slice(startIndex, startIndex + pageSize);

  // Edit Handlers
  const handleOpenEdit = (q) => {
    setEditForm({ ...q, options: q.options ? JSON.parse(JSON.stringify(q.options)) : [], changelogNote: '' });
    openModal('edit', q);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const parts = editForm.version.replace('v', '').split('.').map(Number);
    const newVer = `v${parts[0]}.${(parts[1] || 0) + 1}`;
    const updated = {
      ...editForm,
      version: newVer,
      history: [
        { action: 'Versioned', date: new Date().toLocaleString(), user: 'System', note: `Promoted to ${newVer}` },
        { action: 'Edited', date: new Date().toLocaleString(), user: 'Teacher', note: editForm.changelogNote || 'Updated content.' },
        ...(editForm.history || []),
      ],
    };
    setQuestions((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    closeModal();
    showToast(`✓ Question ${updated.id} saved as ${newVer}`);
  };

  // Delete Handler
  const handleConfirmDelete = () => {
    if (!current) return;
    setQuestions((prev) => prev.filter((q) => q.id !== current.id));
    closeModal();
    showToast(`✓ Question ${current.id} deleted.`);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setFilterSubject('All');
    setFilterGrade('All');
    setFilterType('All');
    setFilterStatus('All');
    setFilterMarks('All');
    setCurrentPage(1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: '#faf8f5',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Top Bar Header */}
      <TopBar />

      {/* Main Body */}
      <div style={{ display: 'flex', flex: '1 1 0%', minHeight: '0px' }}>
        {/* Sidebar */}
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navButtonRefs={navButtonRefs}
          handleNavKeyDown={handleNavKeyDown}
        />

        {/* Content Area */}
        <main
          id="main-content"
          tabIndex={-1}
          className="animate-fade-in-up"
          style={{
            flex: '1 1 0%',
            overflowY: 'auto',
            padding: '28px 32px',
            outline: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Toast Notification */}
            {toast && (
              <div className="fixed top-16 right-4 z-50 flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg shadow-xl text-sm font-medium">
                <Icon name="check" className="w-4 h-4" />
                {toast}
              </div>
            )}

            {/* ── Professional Page Header Banner ── */}
            <div
              style={{
                background: 'linear-gradient(135deg, #72102a 0%, #9b1d3d 50%, #5a0c1f 100%)',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: '0 8px 32px rgba(114,16,42,0.22), 0 2px 8px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative blobs */}
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '140px', height: '140px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.10)', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '-20px', left: '200px',
                width: '90px', height: '90px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
              }} />

              {/* Title */}
              <div>
                <h1
                  style={{
                    fontFamily: "'Outfit', 'Inter', system-ui, sans-serif",
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {NAV_ITEMS.find((n) => n.id === activeNav)?.label || 'Question Bank'}
                </h1>
                <p style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '4px',
                }}>
                  Manage your exam question library · South Point School
                </p>
              </div>

              {/* Stat pills row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px' }}>
                {[
                  { label: `${questions.length} Questions`, icon: '📄' },
                  { label: `${[...new Set(questions.map(q => q.subject))].length} Subjects`, icon: '📚' },
                  { label: `${[...new Set(questions.map(q => q.type))].length} Types`, icon: '🏷️' },
                  { label: 'Last updated Today', icon: '🕐' },
                ].map((stat) => (
                  <span
                    key={stat.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '5px 13px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      fontSize: '12px', fontWeight: 600,
                      color: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <span style={{ fontSize: '13px' }}>{stat.icon}</span>
                    {stat.label}
                  </span>
                ))}
              </div>
            </div>

            {/* View Switcher */}
            {activeNav === 'questionBank' ? (
              <>
                {/* Search & Filter Controls */}
                <QuestionFilters
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filterSubject={filterSubject}
                  setFilterSubject={setFilterSubject}
                  filterGrade={filterGrade}
                  setFilterGrade={setFilterGrade}
                  filterType={filterType}
                  setFilterType={setFilterType}
                  filterMarks={filterMarks}
                  setFilterMarks={setFilterMarks}
                />

                {/* Questions Display — Table only with paginated subset */}
                <QuestionTable
                  questions={paginatedQuestions}
                  onOpenModal={openModal}
                  onOpenEdit={handleOpenEdit}
                />

                {/* Bottom Full-Featured Pagination Bar */}
                {filtered.length > 0 && (
                  <Pagination
                    totalItems={filtered.length}
                    pageSize={pageSize}
                    onPageSizeChange={(newSize) => {
                      setPageSize(newSize);
                      setCurrentPage(1);
                    }}
                    currentPage={safeCurrentPage}
                    onPageChange={setCurrentPage}
                    pageSizeOptions={[5, 10, 20, 50]}
                    totalUnfiltered={questions.length}
                    isFiltered={filtered.length !== questions.length}
                  />
                )}

                {/* Empty State */}
                {filtered.length === 0 && (
                  <div className="bg-white rounded-xl border p-14 text-center shadow-sm" style={{ borderColor: '#E8E2D9' }}>
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                      <Icon name="search" className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">No questions found</h3>
                    <p className="text-xs text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
                      style={{ backgroundColor: '#72102a' }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </>
            ) : (
              <ComingSoonPlaceholder activeNav={activeNav} />
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      {modal === 'details' && (
        <QuestionDetailsModal
          current={current}
          onClose={closeModal}
          onOpenEdit={handleOpenEdit}
          onOpenHistory={(q) => openModal('history', q)}
        />
      )}

      {modal === 'edit' && (
        <QuestionEditModal
          editForm={editForm}
          setEditForm={setEditForm}
          onSave={handleSaveEdit}
          onClose={closeModal}
        />
      )}

      {modal === 'history' && (
        <QuestionHistoryModal
          current={current}
          onClose={closeModal}
        />
      )}

      {modal === 'delete' && (
        <QuestionDeleteModal
          current={current}
          onConfirm={handleConfirmDelete}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
