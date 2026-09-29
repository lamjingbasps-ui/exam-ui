import React, { useState, useMemo } from 'react';
import spsLogo from '../assets/images/sps_logo.png';

// ============================================
// SVG ICONS
// ============================================
const Icon = ({ name, className = 'w-5 h-5', ...props }) => {
  const icons = {
    search: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    plus: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    eye: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    edit: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    history: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    trash: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    sendBack: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    download: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    book: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    grid: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    list: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    dashboard: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    academic: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
    clipboard: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    logout: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    chevronRight: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    tag: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    refresh: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// ============================================
// SIDEBAR NAV ITEMS
// ============================================
const NAV_ITEMS = [
  { id: 'questionBank',         label: 'Question Bank',             icon: 'book' },
  { id: 'teacherManagement',    label: 'Teacher Management',        icon: 'users' },
  { id: 'examBlueprint',        label: 'Exam Question Blueprint',   icon: 'clipboard' },
  { id: 'questionCreation',     label: 'Question Creation',         icon: 'plus' },
  { id: 'generatePaper',        label: 'Generate Question Paper',   icon: 'refresh' },
  { id: 'paperManagement',      label: 'Question Paper Management', icon: 'grid' },
];

// ============================================
// MOCK QUESTION DATA
// ============================================
const INITIAL_QUESTIONS = [
  {
    id: 'QB-PHY-2041',
    version: 'v2.1',
    type: 'Multiple Choice (MCQ)',
    typeCategory: 'mcq',
    subject: 'Physics',
    grade: 'Grade 10',
    chapter: 'Optics & Light Reflection',
    bookReference: 'NCERT Science Class 10 (Ch 10)',
    marks: 1,
    negativeMarks: 0.25,
    difficulty: 'Medium',
    cognitiveLevel: 'Application',
    estimatedTimeMin: 2,
    status: 'Active',
    questionText:
      'An object is placed at a distance of 12 cm in front of a concave mirror. It forms a real image four times larger than the object. Calculate the distance of the image from the mirror.',
    options: [
      { id: 'optA', text: '-48 cm', isCorrect: true },
      { id: 'optB', text: '-36 cm', isCorrect: false },
      { id: 'optC', text: '+48 cm', isCorrect: false },
      { id: 'optD', text: '+12 cm', isCorrect: false },
    ],
    correctAnswer: 'Option A (-48 cm)',
    explanation:
      'Magnification m = -v/u. Since image is real and magnified 4 times, m = -4. Given u = -12 cm. Therefore v = -48 cm.',
    rubric: '1 Mark for correct magnification formula and sign convention.',
    author: 'Dr. Evelyn Vance',
    history: [
      { action: 'Created', date: '2026-01-15 09:30 AM', user: 'Dr. Evelyn Vance', note: 'Created for NCERT-based question set.' },
      { action: 'Edited', date: '2026-02-04 03:15 PM', user: 'Prof. Marcus Thorne', note: 'Clarified sign convention wording.' },
      { action: 'Versioned', date: '2026-02-04 03:16 PM', user: 'System', note: 'Bumped from v1.0 to v2.1.' },
      { action: 'Downloaded', date: '2026-03-10 11:20 AM', user: 'Exam Cell', note: 'Included in Mid-Term Exam 2026 Set B.' },
    ],
  },
  {
    id: 'QB-MTH-1082',
    version: 'v1.4',
    type: 'Long Essay / Problem',
    typeCategory: 'long',
    subject: 'Mathematics',
    grade: 'Grade 10',
    chapter: 'Quadratic Equations & Roots',
    bookReference: 'Oxford Mathematics v2 (Ch 4)',
    marks: 5,
    negativeMarks: 0,
    difficulty: 'Hard',
    cognitiveLevel: 'Analytical',
    estimatedTimeMin: 8,
    status: 'Active',
    questionText:
      'A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream. Find the speed of the stream.',
    options: [],
    correctAnswer: 'Speed of stream = 6 km/h',
    explanation:
      'Let stream speed be x. 24/(18-x) - 24/(18+x) = 1 → x² + 48x - 324 = 0 → x = 6 km/h.',
    rubric: '1M variables; 2M equation; 2M factorization.',
    author: 'Prof. Marcus Thorne',
    history: [
      { action: 'Created', date: '2025-11-20 10:15 AM', user: 'Prof. Marcus Thorne', note: 'Authored for Term Exam QB.' },
      { action: 'Versioned', date: '2026-01-08 02:40 PM', user: 'Prof. Marcus Thorne', note: 'Added marking rubric.' },
      { action: 'Downloaded', date: '2026-02-12 04:00 PM', user: 'Teacher Staff', note: 'Grade 10 Practice Worksheet.' },
    ],
  },
  {
    id: 'QB-CHE-3105',
    version: 'v1.0',
    type: 'Assertion & Reasoning',
    typeCategory: 'assertion',
    subject: 'Chemistry',
    grade: 'Grade 11',
    chapter: 'Chemical Bonding & Molecular Structure',
    bookReference: 'NCERT Chemistry Vol 1 (Ch 4)',
    marks: 2,
    negativeMarks: 0.5,
    difficulty: 'Medium',
    cognitiveLevel: 'Comprehension',
    estimatedTimeMin: 3,
    status: 'Active',
    questionText:
      'Assertion (A): The bond angle in NH₃ is larger than in PH₃.\nReason (R): Nitrogen is more electronegative than phosphorus, causing stronger bond pair repulsion in NH₃.',
    options: [
      { id: 'optA', text: 'Both (A) and (R) are true and (R) correctly explains (A)', isCorrect: true },
      { id: 'optB', text: 'Both (A) and (R) are true but (R) is not the correct explanation', isCorrect: false },
      { id: 'optC', text: '(A) is true but (R) is false', isCorrect: false },
      { id: 'optD', text: '(A) is false but (R) is true', isCorrect: false },
    ],
    correctAnswer: 'Option A',
    explanation: 'N is more electronegative → electron density closer to N → greater bp-bp repulsion → larger bond angle (107° vs 93.5°).',
    rubric: '2 Marks for correct option.',
    author: 'Dr. Alistair Finch',
    history: [
      { action: 'Created', date: '2026-02-10 11:00 AM', user: 'Dr. Alistair Finch', note: 'Extracted from 2025 Board Paper.' },
      { action: 'Downloaded', date: '2026-02-28 09:30 AM', user: 'Dr. Alistair Finch', note: 'Exported to Weekly Quiz.' },
    ],
  },
  {
    id: 'QB-BIO-4099',
    version: 'v3.0',
    type: 'Short Answer',
    typeCategory: 'short',
    subject: 'Biology',
    grade: 'Grade 10',
    chapter: 'Life Processes & Photosynthesis',
    bookReference: 'Oxford Living Science (Ch 6)',
    marks: 3,
    negativeMarks: 0,
    difficulty: 'Easy',
    cognitiveLevel: 'Knowledge',
    estimatedTimeMin: 4,
    status: 'Active',
    questionText:
      'State the three events that occur during photosynthesis. Write the balanced chemical equation.',
    options: [],
    correctAnswer: '1. Light absorption by chlorophyll. 2. Light → chemical energy + water splitting. 3. CO₂ → carbohydrates. Equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O',
    explanation: 'Equation must be balanced with 12H₂O for full marks.',
    rubric: '1M equation; 2M for 3 events.',
    author: 'Ms. Sarah Jenkins',
    history: [
      { action: 'Created', date: '2025-09-12 08:45 AM', user: 'Ms. Sarah Jenkins', note: 'Unit Test 1.' },
      { action: 'Edited', date: '2025-10-18 01:20 PM', user: 'Ms. Sarah Jenkins', note: 'Updated to balanced equation.' },
      { action: 'Versioned', date: '2025-10-18 01:22 PM', user: 'System', note: 'Promoted to v3.0.' },
      { action: 'Edited', date: '2026-03-01 10:10 AM', user: 'Academic Reviewer', note: 'Sent back: needs 2026 curriculum code.' },
    ],
  },
  {
    id: 'QB-CSC-5120',
    version: 'v1.2',
    type: 'Multiple Choice (MCQ)',
    typeCategory: 'mcq',
    subject: 'Computer Science',
    grade: 'Grade 12',
    chapter: 'Data Structures & Python Stacks',
    bookReference: 'Sumita Arora Python CS (Ch 7)',
    marks: 1,
    negativeMarks: 0.25,
    difficulty: 'Easy',
    cognitiveLevel: 'Comprehension',
    estimatedTimeMin: 1.5,
    status: 'Active',
    questionText:
      'Which operation in a Python Stack peeks the topmost element without removing it?',
    options: [
      { id: 'optA', text: 'stack.pop()', isCorrect: false },
      { id: 'optB', text: 'stack[-1] — Peek operation', isCorrect: true },
      { id: 'optC', text: 'stack.append()', isCorrect: false },
      { id: 'optD', text: 'stack.shift()', isCorrect: false },
    ],
    correctAnswer: 'Option B (stack[-1])',
    explanation: 'list[-1] accesses the last element without mutating the stack.',
    rubric: '1 Mark.',
    author: 'Dr. Evelyn Vance',
    history: [
      { action: 'Created', date: '2026-01-20 04:10 PM', user: 'Dr. Evelyn Vance', note: 'Grade 12 CS repository.' },
    ],
  },
  {
    id: 'QB-ENG-6021',
    version: 'v1.0',
    type: 'Short Answer',
    typeCategory: 'short',
    subject: 'English Literature',
    grade: 'Grade 9',
    chapter: 'The Road Not Taken — Robert Frost',
    bookReference: 'Beehive English Reader (Poem 1)',
    marks: 2,
    negativeMarks: 0,
    difficulty: 'Easy',
    cognitiveLevel: 'Comprehension',
    estimatedTimeMin: 3,
    status: 'Active',
    questionText:
      "What do the 'two roads diverged in a yellow wood' symbolize? How does the speaker make his choice?",
    options: [],
    correctAnswer: "The roads symbolize life's choices. The speaker chooses the road 'less traveled by', showing individuality.",
    explanation: 'Metaphor of paths representing life decisions.',
    rubric: '1M symbolism; 1M choice rationale.',
    author: 'Prof. Jonathan Blake',
    history: [
      { action: 'Created', date: '2026-02-14 10:00 AM', user: 'Prof. Jonathan Blake', note: 'Poetry Assessment.' },
    ],
  },
];

// ============================================
// STYLE CONSTANTS
// ============================================
const TYPE_BADGES = {
  'Multiple Choice (MCQ)': { cls: 'bg-emerald-100 text-emerald-700 border-emerald-200', label: 'MCQ' },
  'Short Answer': { cls: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Short Answer' },
  'Long Essay / Problem': { cls: 'bg-purple-100 text-purple-700 border-purple-200', label: 'Long Essay' },
  'Assertion & Reasoning': { cls: 'bg-amber-100 text-amber-700 border-amber-200', label: 'A & R' },
  'True / False': { cls: 'bg-teal-100 text-teal-700 border-teal-200', label: 'True/False' },
};

const DIFFICULTY_CLS = {
  Easy: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Hard: 'bg-red-100 text-red-700 border-red-200',
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function QuestionBank() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('All');
  const [filterGrade, setFilterGrade] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewMode, setViewMode] = useState('card');
  const [activeNav, setActiveNav] = useState('questionBank');

  const [modal, setModal] = useState(null); // 'details' | 'edit' | 'history' | 'delete' | 'export'
  const [current, setCurrent] = useState(null);
  const [toast, setToast] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const openModal = (type, q) => { setCurrent(q); setModal(type); };
  const closeModal = () => { setModal(null); setCurrent(null); };

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
        (filterDifficulty === 'All' || q.difficulty === filterDifficulty) &&
        (filterStatus === 'All' || q.status === filterStatus)
      );
    });
  }, [questions, searchTerm, filterSubject, filterGrade, filterType, filterDifficulty, filterStatus]);

  // ---- Edit / Save ----
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

  // ---- Delete ----
  const handleConfirmDelete = () => {
    if (!current) return;
    setQuestions((prev) => prev.filter((q) => q.id !== current.id));
    closeModal();
    showToast(`✓ Question ${current.id} deleted.`);
  };

  // ---- Stats ----
  const stats = useMemo(() => ({
    total: questions.length,
    active: questions.filter((q) => q.status === 'Active').length,
    mcq:       questions.filter((q) => q.typeCategory === 'mcq').length,
    short:     questions.filter((q) => q.typeCategory === 'short').length,
    long:      questions.filter((q) => q.typeCategory === 'long').length,
    assertion: questions.filter((q) => q.typeCategory === 'assertion').length,
    trueFalse: questions.filter((q) => q.typeCategory === 'truefalse').length,
    easy:      questions.filter((q) => q.difficulty === 'Easy').length,
    medium:    questions.filter((q) => q.difficulty === 'Medium').length,
    hard:      questions.filter((q) => q.difficulty === 'Hard').length,
    totalMarks: questions.reduce((sum, q) => sum + (q.marks || 0), 0),
  }), [questions]);

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="flex flex-col min-h-screen font-sans" style={{ backgroundColor: '#f1f5f9' }}>

      {/* =================== TOP BAR (Recruitment Model Style) =================== */}
      <header
        className="w-full flex items-center justify-between px-5 sticky top-0 z-40 shadow-sm"
        style={{
          backgroundColor: '#6B1124',
          height: '56px',
          borderBottom: '2.5px solid #D4AF37',
        }}
      >
        {/* Left: School Crest + Name & Location */}
        <div className="flex items-center gap-3">
          <img
            src={spsLogo}
            alt="South Point School Crest"
            className="h-10 w-auto object-contain flex-shrink-0 drop-shadow"
          />
          <div className="flex flex-col">
            <span
              className="font-bold text-[15px] leading-tight tracking-wide"
              style={{ color: '#EAB308' }}
            >
              South Point School
            </span>
            <span className="text-[10px] uppercase font-semibold text-white/90 tracking-widest leading-none mt-0.5">
              GUWAHATI, ASSAM
            </span>
          </div>
        </div>

        {/* Right: Back Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-1.5 rounded text-xs font-medium text-white transition-all shadow-sm"
            style={{
              backgroundColor: '#520D1B',
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#520D1B';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
            }}
            title="Back"
          >
            Back
          </button>
        </div>
      </header>

      {/* =================== BODY: SIDEBAR + CONTENT =================== */}
      <div className="flex flex-1 min-h-[calc(100vh-56px)]">

        {/* =================== SIDEBAR =================== */}
        <aside
          className="w-60 flex-shrink-0 flex flex-col sticky top-14 h-[calc(100vh-56px)] z-20"
          style={{ backgroundColor: '#6B1124', borderRight: '1px solid rgba(0,0,0,0.06)' }}
        >
          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: '#520D1B',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                        }
                      : {}
                  }
                >
                  <Icon name={item.icon} className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Footer */}
          <div className="px-3 py-3 border-t border-white/10 mt-auto">
            <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
                LM
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold truncate">lam rin</div>
                <div className="text-white/60 text-[10px] truncate">lam@sps@gmail...</div>
              </div>
              <button className="text-white/60 hover:text-white transition-colors" title="Log Out">
                <Icon name="logout" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* =================== MAIN CONTENT =================== */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Toast */}
          {toast && (
            <div className="fixed top-16 right-4 z-50 flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg shadow-xl text-sm font-medium">
              <Icon name="check" className="w-4 h-4" />
              {toast}
            </div>
          )}

          {/* Sub-Header: Page Title & Actions (White Bar matching Recruitment Model) */}
          <div className="bg-white border-b border-gray-200 px-6 py-3.5 flex items-center justify-between flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {NAV_ITEMS.find((n) => n.id === activeNav)?.label || 'Question Bank'}
              </h1>
              <p className="text-[11px] text-gray-500 mt-0.5">
                South Point School · Exam Management System
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  handleOpenEdit({
                    id: `QB-NEW-${Math.floor(1000 + Math.random() * 9000)}`,
                    version: 'v1.0',
                    type: 'Multiple Choice (MCQ)',
                    typeCategory: 'mcq',
                    subject: 'General',
                    grade: 'Grade 10',
                    chapter: '',
                    bookReference: '',
                    marks: 1,
                    negativeMarks: 0,
                    difficulty: 'Medium',
                    cognitiveLevel: 'Application',
                    estimatedTimeMin: 2,
                    status: 'Active',
                    questionText: '',
                    options: [
                      { id: 'optA', text: '', isCorrect: true },
                      { id: 'optB', text: '', isCorrect: false },
                      { id: 'optC', text: '', isCorrect: false },
                      { id: 'optD', text: '', isCorrect: false },
                    ],
                    correctAnswer: '',
                    explanation: '',
                    rubric: '',
                    author: 'Current Teacher',
                    history: [
                      {
                        action: 'Created',
                        date: new Date().toLocaleString(),
                        user: 'Teacher',
                        note: 'Manually added.',
                      },
                    ],
                  });
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white transition-all shadow-sm hover:shadow"
                style={{ backgroundColor: '#7B1A2B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#651423';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7B1A2B';
                }}
              >
                <Icon name="plus" className="w-4 h-4" />
                New Question
              </button>
              <button
                onClick={() => openModal('export', null)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all border"
                style={{
                  borderColor: '#7B1A2B',
                  color: '#7B1A2B',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(123, 26, 43, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Icon name="download" className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

        {/* ── QUESTION BANK VIEW ── */}
        {activeNav === 'questionBank' && (
          <>
        {/* ══ DASHBOARD ══ */}
        <div className="px-6 pt-5 pb-4 space-y-4">


          {/* ── Row 2: Question Type Cards ── */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">By Question Type</p>
            <div className="grid grid-cols-5 gap-3">
              {[
                { label: 'MCQ',          value: stats.mcq,       accent: '#059669', bg: '#ecfdf5', border: '#6ee7b7', dot: '#10b981' },
                { label: 'Short Answer', value: stats.short,     accent: '#2563eb', bg: '#eff6ff', border: '#93c5fd', dot: '#3b82f6' },
                { label: 'Long Essay',   value: stats.long,      accent: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd', dot: '#8b5cf6' },
                { label: 'A & R',        value: stats.assertion, accent: '#d97706', bg: '#fffbeb', border: '#fcd34d', dot: '#f59e0b' },
                { label: 'True / False', value: stats.trueFalse, accent: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', dot: '#14b8a6' },
              ].map((t) => (
                <div
                  key={t.label}
                  className="bg-white rounded-xl px-4 py-4 border flex flex-col items-center text-center cursor-default hover:scale-[1.02] transition-transform"
                  style={{ borderColor: t.border, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: t.dot }} />
                  <div className="text-3xl font-extrabold" style={{ color: t.accent }}>{t.value}</div>
                  <div className="text-xs font-semibold mt-1" style={{ color: t.accent }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 3: Difficulty Breakdown ── */}
          <div className="bg-white rounded-xl border border-gray-200 px-5 py-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Difficulty Breakdown</p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Easy',   value: stats.easy,   color: '#16a34a' },
                { label: 'Medium', value: stats.medium, color: '#d97706' },
                { label: 'Hard',   value: stats.hard,   color: '#dc2626' },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-xs text-gray-500 font-medium">{d.label}</span>
                  <span className="text-base font-extrabold" style={{ color: d.color }}>{d.value}</span>
                </div>
              ))}
              <div className="flex-1 ml-2">
                {stats.total > 0 && (
                  <div className="flex rounded-full overflow-hidden h-3 gap-px">
                    {stats.easy   > 0 && <div style={{ width: `${(stats.easy   / stats.total) * 100}%`, backgroundColor: '#16a34a' }} />}
                    {stats.medium > 0 && <div style={{ width: `${(stats.medium / stats.total) * 100}%`, backgroundColor: '#d97706' }} />}
                    {stats.hard   > 0 && <div style={{ width: `${(stats.hard   / stats.total) * 100}%`, backgroundColor: '#dc2626' }} />}
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-400 font-semibold">{stats.total} total</div>
            </div>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="px-6 py-3">
          <div className="flex flex-col gap-3">
            {/* Search */}
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by question text, ID, chapter, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all"
                onFocus={(e) => { e.target.style.boxShadow = '0 0 0 3px rgba(123,26,43,0.12)'; e.target.style.borderColor = '#7B1A2B'; }}
                onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = '#e5e7eb'; }}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Icon name="close" className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'Subject', value: filterSubject, set: setFilterSubject, opts: ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English Literature'] },
                { label: 'Grade', value: filterGrade, set: setFilterGrade, opts: ['All', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'] },
                { label: 'Type', value: filterType, set: setFilterType, opts: ['All', 'Multiple Choice (MCQ)', 'Short Answer', 'Long Essay / Problem', 'Assertion & Reasoning', 'True / False'] },
                { label: 'Difficulty', value: filterDifficulty, set: setFilterDifficulty, opts: ['All', 'Easy', 'Medium', 'Hard'] },
              ].map((f) => (
                <select
                  key={f.label}
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none hover:border-gray-300 transition-colors"
                  style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
                >
                  {f.opts.map((o) => (
                    <option key={o} value={o}>{o === 'All' ? `All ${f.label}s` : o}</option>
                  ))}
                </select>
              ))}

              <div className="ml-auto flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-200" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <button
                  onClick={() => setViewMode('card')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'card' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
                  style={viewMode === 'card' ? { backgroundColor: '#7B1A2B' } : {}}
                  title="Card View"
                >
                  <Icon name="grid" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'table' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
                  style={viewMode === 'table' ? { backgroundColor: '#7B1A2B' } : {}}
                  title="Table View"
                >
                  <Icon name="list" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="px-6 pt-3 pb-1 flex-shrink-0">
          <p className="text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of {questions.length} questions
          </p>
        </div>

        {/* Questions List / Grid */}
        <div className="px-6 pb-6 pt-2">

          {/* CARD VIEW */}
          {viewMode === 'card' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filtered.map((q) => {
                const typeBadge = TYPE_BADGES[q.type] || { cls: 'bg-gray-100 text-gray-600 border-gray-200', label: q.type };
                return (
                  <div key={q.id} className="bg-white rounded-xl border border-gray-200 flex flex-col" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    {/* Card Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs font-bold text-gray-500">{q.id}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold border" style={{ backgroundColor: '#FEF2F2', color: '#7B1A2B', borderColor: '#FECACA' }}>
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
                        <div className="mt-2 grid grid-cols-2 gap-1.5">
                          {q.options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`text-[11px] px-2 py-1 rounded border flex items-center gap-1 ${opt.isCorrect ? 'bg-green-50 text-green-700 border-green-200 font-medium' : 'bg-gray-50 text-gray-500 border-gray-200'
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
                    <div className="px-3 py-2.5 bg-gray-50 border-t border-gray-100 rounded-b-xl flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        <ActionBtn icon="eye" label="View" color="#3B82F6" onClick={() => openModal('details', q)} />
                        <ActionBtn icon="edit" label="Edit" color="#D97706" onClick={() => handleOpenEdit(q)} />
                        <ActionBtn icon="history" label="History" color="#0D9488" onClick={() => openModal('history', q)} />
                      </div>
                      <div className="flex items-center gap-0.5">
                        <ActionBtn icon="trash" label="Delete" color="#DC2626" onClick={() => openModal('delete', q)} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TABLE VIEW */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wide text-[11px]">
                      <th className="px-4 py-3">ID & Type</th>
                      <th className="px-4 py-3">Subject / Chapter</th>
                      <th className="px-4 py-3 max-w-xs">Question</th>
                      <th className="px-4 py-3">Marks</th>
                      <th className="px-4 py-3">Difficulty</th>
                      <th className="px-4 py-3">Version</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-50 transition-colors">
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
                          <span className={`px-2 py-0.5 rounded border text-[11px] font-medium ${DIFFICULTY_CLS[q.difficulty]}`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded border" style={{ backgroundColor: '#FEF2F2', color: '#7B1A2B', borderColor: '#FECACA' }}>
                            {q.version}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-[11px] px-2 py-0.5 rounded border font-medium ${q.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}>
                            {q.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            {[
                              { icon: 'eye', color: '#3B82F6', action: () => openModal('details', q) },
                              { icon: 'edit', color: '#D97706', action: () => handleOpenEdit(q) },
                              { icon: 'history', color: '#0D9488', action: () => openModal('history', q) },
                              { icon: 'trash', color: '#DC2626', action: () => openModal('delete', q) },
                            ].map((btn, i) => (
                              <button
                                key={i}
                                onClick={btn.action}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                                style={{ color: btn.color }}
                              >
                                <Icon name={btn.icon} className="w-3.5 h-3.5" />
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-14 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <Icon name="search" className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1">No questions found</h3>
              <p className="text-xs text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => { setSearchTerm(''); setFilterSubject('All'); setFilterGrade('All'); setFilterType('All'); setFilterDifficulty('All'); setFilterStatus('All'); }}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
                style={{ backgroundColor: '#7B1A2B' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
          </>
        )}

        {/* ── COMING SOON PLACEHOLDER ── */}
        {activeNav !== 'questionBank' && (() => {
          const pages = {
            teacherManagement: { icon: 'users',     label: 'Teacher Management',        desc: 'Manage teacher profiles, subject assignments, and workload tracking.' },
            examBlueprint:     { icon: 'clipboard', label: 'Exam Question Blueprint',   desc: 'Design and manage structured blueprints for exam papers by subject and grade.' },
            questionCreation:  { icon: 'plus',      label: 'Question Creation',         desc: 'Author new exam questions with rich formatting, options, and rubrics.' },
            generatePaper:     { icon: 'refresh',   label: 'Generate Question Paper',   desc: 'Auto-generate balanced question papers based on syllabus and difficulty criteria.' },
            paperManagement:   { icon: 'grid',      label: 'Question Paper Management', desc: 'Review, approve, version-control, and archive finalised exam papers.' },
          };
          const meta = pages[activeNav];
          if (!meta) return null;
          return (
            <div className="flex flex-col items-center justify-center px-8 py-28">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#4D0E1A', boxShadow: '0 8px 24px rgba(77,14,26,0.25)' }}
              >
                <Icon name={meta.icon} className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">{meta.label}</h2>
              <p className="text-sm text-gray-500 max-w-sm text-center mb-8 leading-relaxed">{meta.desc}</p>
              <div
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#FEF2F2', color: '#4D0E1A', border: '1.5px solid #FECACA' }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" style={{ animation: 'pulse 1.5s infinite' }} />
                Coming Soon
              </div>
            </div>
          );
        })()}
      </div>
      </div>

      {/* ============================================ */}
      {/* MODAL: VIEW DETAILS                         */}
      {/* ============================================ */}
      {modal === 'details' && current && (
        <ModalWrapper title="Question Details" subtitle={`${current.id} • ${current.version}`} onClose={closeModal}>
          <div className="space-y-4">
            {/* Meta grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ['Subject', current.subject],
                ['Grade', current.grade],
                ['Marks', `${current.marks}M (Neg: ${current.negativeMarks})`],
                ['Difficulty', current.difficulty],
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
                    <div key={opt.id} className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${opt.isCorrect ? 'bg-green-50 border-green-200 text-green-800 font-medium' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white border flex items-center justify-center font-bold text-[11px]">{opt.id.slice(-1)}</span>
                        {opt.text}
                      </div>
                      {opt.isCorrect && <span className="flex items-center gap-1 text-green-700 font-semibold"><Icon name="check" className="w-3.5 h-3.5" /> Correct</span>}
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
            <button onClick={() => openModal('history', current)} className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <Icon name="history" className="w-4 h-4" /> View Activity History
            </button>
            <div className="flex gap-2">
              <button onClick={() => handleOpenEdit(current)} className="px-4 py-2 rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: '#7B1A2B' }}>Edit Question</button>
              <button onClick={closeModal} className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200">Close</button>
            </div>
          </div>
        </ModalWrapper>
      )}

      {/* ============================================ */}
      {/* MODAL: EDIT → SAVE → NEW VERSION            */}
      {/* ============================================ */}
      {modal === 'edit' && editForm && (
        <ModalWrapper title="Edit Question" subtitle={`Current: ${editForm.version} → New version on save`} onClose={closeModal} wide>
          <form onSubmit={handleSaveEdit} className="space-y-4">
            <div>
              <Label>Question Text *</Label>
              <textarea rows={4} required value={editForm.questionText} onChange={(e) => setEditForm({ ...editForm, questionText: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-800 focus:outline-none leading-relaxed resize-none"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Subject', val: editForm.subject, key: 'subject', type: 'text' },
                { label: 'Grade', val: editForm.grade, key: 'grade', type: 'text' },
                { label: 'Marks', val: editForm.marks, key: 'marks', type: 'number' },
                { label: 'Neg. Marks', val: editForm.negativeMarks, key: 'negativeMarks', type: 'number' },
              ].map((f) => (
                <div key={f.key}>
                  <Label>{f.label}</Label>
                  <input type={f.type} value={f.val} min={f.type === 'number' ? 0 : undefined} step={f.type === 'number' ? 0.25 : undefined}
                    onChange={(e) => setEditForm({ ...editForm, [f.key]: f.type === 'number' ? Number(e.target.value) : e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none"
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Difficulty</Label>
                <select value={editForm.difficulty} onChange={(e) => setEditForm({ ...editForm, difficulty: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none">
                  {['Easy', 'Medium', 'Hard'].map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <Label>Chapter</Label>
                <input type="text" value={editForm.chapter} onChange={(e) => setEditForm({ ...editForm, chapter: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none"
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
              </div>
            </div>

            {editForm.options && editForm.options.length > 0 && (
              <div>
                <Label>Options & Correct Answer</Label>
                <div className="space-y-2">
                  {editForm.options.map((opt, idx) => (
                    <div key={opt.id} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                      <input type="radio" name="correctOpt" checked={opt.isCorrect}
                        onChange={() => { const newOpts = editForm.options.map((o, i) => ({ ...o, isCorrect: i === idx })); setEditForm({ ...editForm, options: newOpts }); }}
                        className="cursor-pointer accent-red-800" />
                      <span className="font-bold text-gray-400 w-5 text-xs">{opt.id.slice(-1)}.</span>
                      <input type="text" value={opt.text} placeholder={`Option ${opt.id.slice(-1)}`}
                        onChange={(e) => { const newOpts = [...editForm.options]; newOpts[idx].text = e.target.value; setEditForm({ ...editForm, options: newOpts }); }}
                        className="flex-1 bg-transparent border-none text-xs text-gray-800 focus:outline-none" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <Label>Model Answer / Explanation</Label>
              <textarea rows={2} value={editForm.explanation} onChange={(e) => setEditForm({ ...editForm, explanation: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none resize-none"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <Label>Changelog / Version Note</Label>
              <input type="text" placeholder="e.g. Corrected option B phrasing and updated rubric."
                value={editForm.changelogNote} onChange={(e) => setEditForm({ ...editForm, changelogNote: e.target.value })}
                className="w-full bg-white border border-red-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none mt-1"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
              <p className="text-[11px] text-red-500 mt-1">This note will be logged in the activity history ledger.</p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200">Cancel</button>
              <button type="submit" className="px-5 py-2 rounded-lg text-xs font-bold text-white shadow-sm" style={{ backgroundColor: '#7B1A2B' }}>
                Save & Publish New Version
              </button>
            </div>
          </form>
        </ModalWrapper>
      )}

      {/* ============================================ */}
      {/* MODAL: ACTIVITY HISTORY                     */}
      {/* ============================================ */}
      {modal === 'history' && current && (
        <ModalWrapper title="Activity History" subtitle={`${current.id} • ${current.version} — Full audit trail`} onClose={closeModal}>
          <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {current.history.map((log, i) => {
              const colors = {
                Created: { dot: '#16a34a', badge: 'bg-green-100 text-green-700 border-green-200' },
                Edited: { dot: '#2563EB', badge: 'bg-blue-100 text-blue-700 border-blue-200' },
                Versioned: { dot: '#7C3AED', badge: 'bg-purple-100 text-purple-700 border-purple-200' },
                Downloaded: { dot: '#D97706', badge: 'bg-amber-100 text-amber-700 border-amber-200' },
                'Sent Back': { dot: '#DC2626', badge: 'bg-red-100 text-red-700 border-red-200' },
              };
              const style = colors[log.action] || { dot: '#6B7280', badge: 'bg-gray-100 text-gray-600 border-gray-200' };
              return (
                <div key={i} className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow" style={{ backgroundColor: style.dot }} />
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${style.badge}`}>{log.action}</span>
                      <span className="text-[11px] text-gray-400">{log.date}</span>
                    </div>
                    <p className="text-xs text-gray-700">{log.note}</p>
                    <p className="text-[11px] text-gray-400 mt-1">By: <span className="font-medium text-gray-500">{log.user}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-4 mt-4 border-t border-gray-100">
            <button onClick={closeModal} className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200">Close</button>
          </div>
        </ModalWrapper>
      )}

      {/* ============================================ */}
      {/* MODAL: DELETE CONFIRM                       */}
      {/* ============================================ */}
      {modal === 'delete' && current && (
        <ModalWrapper title="Delete Question" onClose={closeModal} narrow>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEF2F2' }}>
              <Icon name="trash" className="w-5 h-5" style={{ color: '#DC2626' }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Are you sure?</p>
              <p className="text-xs text-gray-500">This will permanently remove <span className="font-mono font-bold text-gray-700">{current.id}</span> from the Question Bank.</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-600 italic">
            "{current.questionText.slice(0, 100)}..."
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={closeModal} className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200">Cancel</button>
            <button onClick={handleConfirmDelete} className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700">Confirm Delete</button>
          </div>
        </ModalWrapper>
      )}



      {/* ============================================ */}
      {/* MODAL: EXPORT PAPER                         */}
      {/* ============================================ */}
      {modal === 'export' && (
        <ModalWrapper title="Export Examination Paper" subtitle="Generate formatted exam paper" onClose={closeModal} narrow>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-xs">
              <div className="flex justify-between text-gray-600"><span>Questions:</span><span className="font-bold text-gray-800">{filtered.length}</span></div>
              <div className="flex justify-between text-gray-600"><span>Total Marks:</span><span className="font-bold text-amber-700">{filtered.reduce((a, c) => a + (c.marks || 1), 0)} Marks</span></div>
              <div className="flex justify-between text-gray-600"><span>School:</span><span className="font-semibold text-gray-700">South Point School, Guwahati</span></div>
            </div>
            <div>
              <Label>Paper Title</Label>
              <input type="text" defaultValue="Annual Term Examination 2026 — Standard Assessment"
                className="w-full border border-gray-300 rounded-lg px-2.5 py-2 text-xs text-gray-800 focus:outline-none"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #7B1A2B40'} onBlur={(e) => e.target.style.boxShadow = 'none'} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <button onClick={() => { showToast('✓ PDF downloaded!'); closeModal(); }}
              className="py-2.5 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-2 shadow-sm" style={{ backgroundColor: '#7B1A2B' }}>
              <Icon name="download" className="w-4 h-4" /> Download PDF
            </button>
            <button onClick={() => { showToast('✓ Exported to Word.'); closeModal(); }}
              className="py-2.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center gap-2">
              <Icon name="download" className="w-4 h-4" /> Export Word
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================
function ActionBtn({ icon, label, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all"
      style={{ color }}
      title={label}
    >
      <Icon name={icon} className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function ModalWrapper({ title, subtitle, onClose, children, wide, narrow }) {
  const w = wide ? 'max-w-2xl' : narrow ? 'max-w-md' : 'max-w-xl';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className={`bg-white rounded-2xl shadow-2xl w-full ${w} max-h-[90vh] overflow-y-auto flex flex-col`}>
        <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-base font-bold text-gray-800">{title}</h3>
            {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0">
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

function Label({ children }) {
  return <label className="block text-xs font-semibold text-gray-600 mb-1">{children}</label>;
}

function InfoBox({ title, content }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">{title}</div>
      <p className="text-xs text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
