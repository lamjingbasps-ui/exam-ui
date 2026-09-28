import React, { useState, useMemo, useEffect } from 'react';

// ==========================================
// SVG ICONS (Self-contained, zero-dependency)
// ==========================================
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
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
    user: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    book: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    clipboard: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    arrowLeft: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    ),
    documentText: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    questionMarkCircle: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    pencil: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    trash: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  };

  return icons[name] || null;
};

// ==========================================
// PROGRAM & SUBJECT MAPPING
// ==========================================
const PROGRAM_SUBJECT_MAP = {
  "B.Tech - Computer Science Engineering": [
    "Artificial Intelligence (CS-401)",
    "Data Structures & Algorithms (CS-201)",
    "Machine Learning Systems (CS-402)",
    "Database Management (CS-301)"
  ],
  "B.Tech - Information Technology": [
    "Web Architecture & Cloud (IT-301)",
    "Database Management Systems (IT-202)",
    "Cybersecurity Fundamentals (IT-405)"
  ],
  "B.Sc - Mathematics & Computing": [
    "Linear Algebra (MA-102)",
    "Calculus III (MA-201)",
    "Discrete Mathematics (MA-303)"
  ],
  "B.Sc - Physics & Applied Sciences": [
    "Quantum Mechanics (PH-301)",
    "Electromagnetism (PH-202)",
    "Optics & Photonic Lab (PH-104)"
  ],
  "B.A. - English Literature": [
    "Modern Poetry & Prose (ENG-201)",
    "Shakespearean Studies (ENG-302)",
    "Creative Writing & Rhetoric (ENG-101)"
  ],
  "M.Sc - Organic Chemistry": [
    "Advanced Organic Synthesis (CH-501)",
    "Thermodynamics & Kinetics (CH-402)",
    "Biochemistry (CH-304)"
  ]
};

// ==========================================
// EXAM QUESTION BLUEPRINTS (Auto-loaded per course)
// ==========================================
const DEFAULT_BLUEPRINT = {
  totalMarks: 100,
  duration: "3 Hours",
  sections: [
    { name: "Section A (Objective)", type: "Multiple Choice (MCQ)", count: 10, marks: 20 },
    { name: "Section B (Short Answer)", type: "Short Answer", count: 4, marks: 30 },
    { name: "Section C (Comprehensive)", type: "Essay", count: 2, marks: 50 }
  ]
};

const SUBJECT_BLUEPRINTS = {
  "Artificial Intelligence (CS-401)": {
    totalMarks: 100,
    duration: "3 Hours",
    sections: [
      { name: "Section A (Objective)", type: "Multiple Choice (MCQ)", count: 10, marks: 20 },
      { name: "Section B (Conceptual)", type: "Short Answer", count: 5, marks: 30 },
      { name: "Section C (Analytical)", type: "Essay", count: 2, marks: 30 },
      { name: "Section D (Practical)", type: "Coding Task", count: 1, marks: 20 }
    ]
  },
  "Data Structures & Algorithms (CS-201)": {
    totalMarks: 100,
    duration: "3 Hours",
    sections: [
      { name: "Section A (Theory)", type: "Multiple Choice (MCQ)", count: 15, marks: 30 },
      { name: "Section B (Algorithms)", type: "Short Answer", count: 4, marks: 20 },
      { name: "Section C (Implementation)", type: "Coding Task", count: 2, marks: 50 }
    ]
  },
  "Machine Learning Systems (CS-402)": {
    totalMarks: 100,
    duration: "3 Hours",
    sections: [
      { name: "Section A (MCQs)", type: "Multiple Choice (MCQ)", count: 10, marks: 20 },
      { name: "Section B (Short Math)", type: "Short Answer", count: 4, marks: 40 },
      { name: "Section C (ML Model Code)", type: "Coding Task", count: 2, marks: 40 }
    ]
  },
  "Linear Algebra (MA-102)": {
    totalMarks: 75,
    duration: "2.5 Hours",
    sections: [
      { name: "Section A (True/False)", type: "True / False", count: 10, marks: 15 },
      { name: "Section B (Matrices)", type: "Short Answer", count: 5, marks: 25 },
      { name: "Section C (Proofs)", type: "Essay", count: 2, marks: 35 }
    ]
  },
  "Quantum Mechanics (PH-301)": {
    totalMarks: 80,
    duration: "3 Hours",
    sections: [
      { name: "Section A (Concepts)", type: "Multiple Choice (MCQ)", count: 10, marks: 20 },
      { name: "Section B (Derivations)", type: "Essay", count: 3, marks: 30 },
      { name: "Section C (Lab Numericals)", type: "Short Answer", count: 3, marks: 30 }
    ]
  }
};

// ==========================================
// MOCK DATA: TEACHERS & SAMPLE QUESTIONS
// ==========================================
const INITIAL_TEACHERS = [
  {
    id: "TCH-1001",
    name: "Dr. Evelyn Vance",
    designation: "Professor & HOD",
    department: "Computer Science",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    subjects: ["Artificial Intelligence", "Machine Learning", "Data Structures"]
  },
  {
    id: "TCH-1007",
    name: "Prof. Alan Turing",
    designation: "Associate Professor",
    department: "Computer Science",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    subjects: ["Artificial Intelligence", "Data Structures", "Web Architecture"]
  },
  {
    id: "TCH-1002",
    name: "Prof. Marcus Thorne",
    designation: "Associate Professor",
    department: "Mathematics",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    subjects: ["Linear Algebra", "Calculus III", "Discrete Math"]
  },
  {
    id: "TCH-1008",
    name: "Dr. Clara Oswald",
    designation: "Assistant Professor",
    department: "Mathematics",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
    subjects: ["Linear Algebra", "Discrete Math", "Calculus III"]
  },
  {
    id: "TCH-1003",
    name: "Dr. Sarah Lin",
    designation: "Assistant Professor",
    department: "Physics",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    subjects: ["Quantum Mechanics", "Electromagnetism", "Optics Lab"]
  },
  {
    id: "TCH-1004",
    name: "Robert Sterling",
    designation: "Senior Lecturer",
    department: "English Literature",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    subjects: ["Modern Poetry", "Shakespearean Studies", "Creative Writing"]
  },
  {
    id: "TCH-1005",
    name: "Dr. Aris Thorne",
    designation: "Professor",
    department: "Chemistry",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    subjects: ["Organic Chemistry", "Biochemistry", "Thermodynamics"]
  },
  {
    id: "TCH-1006",
    name: "Elena Rostova",
    designation: "Assistant Lecturer",
    department: "Art & Design",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    subjects: ["UI/UX Design", "Digital Illustration", "Art History"]
  }
];

const QUESTION_BANK_ITEMS = [
  { id: "Q-101", title: "Explain Time & Space Complexity of MergeSort algorithm", type: "Essay", subject: "Computer Science" },
  { id: "Q-102", title: "Write a Python script to check for Palindromes using 2 pointers", type: "Coding", subject: "Computer Science" },
  { id: "Q-103", title: "Calculate Eigenvalues and Eigenvectors for 3x3 Matrix", type: "Short Answer", subject: "Mathematics" },
  { id: "Q-104", title: "Derive Schrodinger Wave Equation for 1D Quantum Box", type: "Essay", subject: "Physics" },
  { id: "Q-105", title: "Which of the following is true about Reaction Kinetics?", type: "Multiple Choice", subject: "Chemistry" },
  { id: "Q-106", title: "Analyze Shakespeare's usage of iambic pentameter in Hamlet", type: "Essay", subject: "English Literature" }
];

const INITIAL_ASSIGNMENTS = [
  {
    id: "ASN-2001",
    type: "questionType",
    program: "B.Tech - Computer Science Engineering",
    subject: "Artificial Intelligence (CS-401)",
    teacherIds: ["TCH-1001", "TCH-1007"],
    questionTypes: ["Multiple Choice (MCQ)", "Essay"],
    questionCount: "15",
    instructions: "Prepare 10 MCQs and 5 Essay questions for AI midterm exam.",
    createdAt: "10 minutes ago"
  },
  {
    id: "ASN-2002",
    type: "questionType",
    program: "B.Sc - Physics & Applied Sciences",
    subject: "Quantum Mechanics (PH-301)",
    teacherIds: ["TCH-1003"],
    questionTypes: ["Short Answer", "Coding Task"],
    questionCount: "10",
    instructions: "Prepare lab simulation questions & quantum state derivations.",
    createdAt: "1.5 hours ago"
  },
  {
    id: "ASN-2003",
    type: "question",
    program: "B.Tech - Computer Science Engineering",
    subject: "Data Structures & Algorithms (CS-201)",
    teacherId: "TCH-1001",
    teacherIds: ["TCH-1001"],
    selectedQuestionIds: ["Q-101", "Q-102"],
    totalMarks: "50",
    instructions: "Evaluate student submissions for MergeSort and Palindrome algorithms.",
    createdAt: "25 minutes ago"
  }
];

const INITIAL_ACTIVITY_LOGS = [
  {
    id: "LOG-5001",
    teacherName: "Dr. Evelyn Vance & Prof. Alan Turing",
    teacherAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    department: "Computer Science",
    action: "Assigned Question Type Assignment (Artificial Intelligence)",
    details: "Program: B.Tech CSE | Course: Artificial Intelligence (CS-401) | Assigned to 2 mapped teachers (Dr. Evelyn Vance, Prof. Alan Turing).",
    timestamp: "10 minutes ago"
  },
  {
    id: "LOG-5002",
    teacherName: "Prof. Marcus Thorne",
    teacherAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    department: "Mathematics",
    action: "Assigned 2 Questions from Question Bank",
    details: "Assigned specific questions Q-103 (Eigenvalues) to review for Linear Algebra.",
    timestamp: "35 minutes ago"
  },
  {
    id: "LOG-5003",
    teacherName: "Dr. Sarah Lin",
    teacherAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    department: "Physics",
    action: "Assigned Question Type Assignment (Quantum Mechanics)",
    details: "Program: B.Sc Physics | Course: Quantum Mechanics (PH-301) | Quantum Physics Lab evaluation assignment.",
    timestamp: "1.5 hours ago"
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function TeacherManagement() {
  const [teachers] = useState(INITIAL_TEACHERS);
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [activityLogs, setActivityLogs] = useState(INITIAL_ACTIVITY_LOGS);
  
  // Search & Active Tab State
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('assignments'); // 'teachers' | 'assignments' | 'logs'
  
  // Modal Workflow State:
  // step: 'selectOption' | 'questionTypeForm' | 'questionForm'
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [assignmentStep, setAssignmentStep] = useState('selectOption'); 
  const [selectedTeacherForAssignment, setSelectedTeacherForAssignment] = useState(null);
  const [editingAssignment, setEditingAssignment] = useState(null);

  // Form State for Program & Subject Selection (Question Type Assignment)
  const [selectedProgram, setSelectedProgram] = useState("B.Tech - Computer Science Engineering");
  const [selectedSubject, setSelectedSubject] = useState("Artificial Intelligence (CS-401)");

  // Form State for Question Types Assignment (Step 2A)
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState(['Multiple Choice (MCQ)', 'Essay']);

  // Form State for Selected Teachers in Step 2A (Defaulted to ALL mapped teachers)
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);

  // Form State for Specific Questions Assignment (Step 2B)
  const [selectedQuestionIds, setSelectedQuestionIds] = useState(['Q-101', 'Q-102']);

  // Toast Feedback
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Compute Exam Question Blueprint for the selected subject
  const currentBlueprint = useMemo(() => {
    return SUBJECT_BLUEPRINTS[selectedSubject] || DEFAULT_BLUEPRINT;
  }, [selectedSubject]);

  // Auto-populate Question Types from Blueprint when subject changes (unless editing)
  useEffect(() => {
    if (!editingAssignment && currentBlueprint) {
      const blueprintTypes = currentBlueprint.sections.map(s => s.type);
      setSelectedQuestionTypes([...new Set(blueprintTypes)]);
    }
  }, [currentBlueprint, editingAssignment]);

  // Compute Mapped Teachers based on Program & Subject
  const mappedTeachers = useMemo(() => {
    if (!selectedProgram) return teachers;
    const progLower = selectedProgram.toLowerCase();

    return teachers.filter(t => {
      const deptLower = t.department.toLowerCase();
      if (progLower.includes('computer science') || progLower.includes('technology')) {
        return deptLower.includes('computer') || deptLower.includes('technology');
      }
      if (progLower.includes('mathematics')) {
        return deptLower.includes('math');
      }
      if (progLower.includes('physics')) {
        return deptLower.includes('physics');
      }
      if (progLower.includes('english')) {
        return deptLower.includes('english') || deptLower.includes('literature');
      }
      if (progLower.includes('chemistry')) {
        return deptLower.includes('chemistry');
      }
      return true;
    });
  }, [teachers, selectedProgram]);

  // AUTO-SELECT ALL MAPPED TEACHERS BY DEFAULT when Program or Subject changes (unless editing)
  useEffect(() => {
    if (!editingAssignment) {
      if (mappedTeachers.length > 0) {
        setSelectedTeacherIds(mappedTeachers.map(t => t.id));
      } else {
        setSelectedTeacherIds([]);
      }
    }
  }, [mappedTeachers, selectedProgram, selectedSubject, editingAssignment]);

  // Handler when Program dropdown changes
  const handleProgramChange = (e) => {
    const prog = e.target.value;
    setSelectedProgram(prog);
    const subjects = PROGRAM_SUBJECT_MAP[prog] || [];
    setSelectedSubject(subjects[0] || '');
  };

  // Toggle individual teacher selection
  const toggleTeacherSelection = (tId) => {
    setSelectedTeacherIds(prev =>
      prev.includes(tId) ? prev.filter(id => id !== tId) : [...prev, tId]
    );
  };

  // Toggle select all teachers
  const toggleSelectAllTeachers = () => {
    if (selectedTeacherIds.length === mappedTeachers.length) {
      setSelectedTeacherIds([]);
    } else {
      setSelectedTeacherIds(mappedTeachers.map(t => t.id));
    }
  };

  // Filtered Teachers List
  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher => 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [teachers, searchTerm]);

  // Filtered Assignments List
  const filteredAssignments = useMemo(() => {
    return assignments.filter(asn =>
      asn.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asn.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asn.questionTypes.some(qt => qt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (asn.instructions && asn.instructions.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [assignments, searchTerm]);

  // Filtered Activity Logs
  const filteredLogs = useMemo(() => {
    return activityLogs.filter(log =>
      log.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activityLogs, searchTerm]);

  // Open Modal Helper for New Assignment
  const handleOpenModal = (teacher = null) => {
    setEditingAssignment(null);
    setSelectedTeacherForAssignment(teacher);
    setAssignmentStep('selectOption');
    setIsAssignmentModalOpen(false);
    setTimeout(() => setIsAssignmentModalOpen(true), 10);
  };

  // Edit Assignment Helper
  const handleEditAssignment = (asn) => {
    setEditingAssignment(asn);
    setSelectedProgram(asn.program);
    setSelectedSubject(asn.subject);
    if (asn.type === 'questionType') {
      setSelectedTeacherIds(asn.teacherIds || []);
      setSelectedQuestionTypes(asn.questionTypes || []);
      setAssignmentStep('questionTypeForm');
    } else {
      setSelectedTeacherForAssignment(teachers.find(t => t.id === (asn.teacherId || (asn.teacherIds && asn.teacherIds[0]))) || teachers[0]);
      setSelectedQuestionIds(asn.selectedQuestionIds || ['Q-101']);
      setAssignmentStep('questionForm');
    }
    setIsAssignmentModalOpen(true);
  };

  // Delete Assignment Helper
  const handleDeleteAssignment = (id) => {
    const target = assignments.find(a => a.id === id);
    if (!target) return;

    setAssignments(prev => prev.filter(a => a.id !== id));

    const newLog = {
      id: `LOG-${5000 + activityLogs.length + 1}`,
      teacherName: "Administrator",
      teacherAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      department: target.program,
      action: `Deleted Assignment (${target.subject})`,
      details: `Assignment ${target.id} (${target.subject}) was deleted from active assignments.`,
      timestamp: "Just now"
    };

    setActivityLogs(prev => [newLog, ...prev]);
    showToast(`Deleted assignment ${target.id} (${target.subject})!`);
  };

  // Submit Step 2A: Add / Edit Question Type Assignment
  const handleSaveQuestionTypeAssignment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const program = formData.get('program') || selectedProgram;
    const subject = formData.get('subject') || selectedSubject;
    const totalCount = formData.get('questionCount') || '10';
    const instructions = formData.get('instructions');

    const assignedTeachers = teachers.filter(t => selectedTeacherIds.includes(t.id));
    const teacherNames = assignedTeachers.length > 0
      ? assignedTeachers.map(t => t.name).join(', ')
      : 'All Mapped Teachers';
    const primaryTeacher = assignedTeachers[0] || teachers[0];

    if (editingAssignment) {
      // UPDATE EXISTING ASSIGNMENT
      setAssignments(prev => prev.map(asn => {
        if (asn.id === editingAssignment.id) {
          return {
            ...asn,
            program,
            subject,
            teacherIds: selectedTeacherIds,
            questionTypes: selectedQuestionTypes,
            questionCount: totalCount,
            instructions,
            updatedAt: "Just now"
          };
        }
        return asn;
      }));

      const newLog = {
        id: `LOG-${5000 + activityLogs.length + 1}`,
        teacherName: primaryTeacher.name,
        teacherAvatar: primaryTeacher.avatar,
        department: primaryTeacher.department,
        action: `Updated Question Type Assignment (${subject})`,
        details: `Updated assignment ${editingAssignment.id} for ${subject} (${totalCount} questions, types: ${selectedQuestionTypes.join(', ')}).`,
        timestamp: "Just now"
      };

      setActivityLogs(prev => [newLog, ...prev]);
      setIsAssignmentModalOpen(false);
      setEditingAssignment(null);
      showToast(`Updated Question Type assignment ${editingAssignment.id}!`);
    } else {
      // CREATE NEW ASSIGNMENT
      const newAsn = {
        id: `ASN-${2000 + assignments.length + 1}`,
        type: 'questionType',
        program,
        subject,
        teacherIds: selectedTeacherIds,
        questionTypes: selectedQuestionTypes,
        questionCount: totalCount,
        instructions,
        createdAt: "Just now"
      };

      setAssignments(prev => [newAsn, ...prev]);

      const newLog = {
        id: `LOG-${5000 + activityLogs.length + 1}`,
        teacherName: assignedTeachers.length > 1 ? `${assignedTeachers.length} Mapped Teachers` : primaryTeacher.name,
        teacherAvatar: primaryTeacher.avatar,
        department: primaryTeacher.department,
        action: `Created Question Type Assignment (${subject})`,
        details: `Program: ${program} | Course: ${subject} | Assigned to ${assignedTeachers.length} teacher(s): [${teacherNames}] | Target: ${totalCount} questions (${selectedQuestionTypes.join(', ')}). Instructions: ${instructions || 'Prepare question sets.'}`,
        timestamp: "Just now"
      };

      setActivityLogs(prev => [newLog, ...prev]);
      setIsAssignmentModalOpen(false);
      showToast(`Created Question Type assignment for ${subject}!`);
    }
  };

  // Submit Step 2B: Add / Edit Specific Question Assignment
  const handleSaveQuestionAssignment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const program = formData.get('program') || selectedProgram;
    const subject = formData.get('subject') || selectedSubject;
    const tchId = formData.get('teacherId');
    const teacher = teachers.find(t => t.id === tchId) || teachers[0];
    const totalMarks = formData.get('totalMarks') || '50';
    const instructions = formData.get('instructions');

    if (editingAssignment) {
      // UPDATE EXISTING SPECIFIC QUESTION ASSIGNMENT
      setAssignments(prev => prev.map(asn => {
        if (asn.id === editingAssignment.id) {
          return {
            ...asn,
            program,
            subject,
            teacherId: teacher.id,
            teacherIds: [teacher.id],
            selectedQuestionIds,
            totalMarks,
            instructions,
            updatedAt: "Just now"
          };
        }
        return asn;
      }));

      const newLog = {
        id: `LOG-${5000 + activityLogs.length + 1}`,
        teacherName: teacher.name,
        teacherAvatar: teacher.avatar,
        department: teacher.department,
        action: `Updated Question Assignment (${subject})`,
        details: `Updated assignment ${editingAssignment.id} for ${subject} (${selectedQuestionIds.length} questions, ${totalMarks} marks).`,
        timestamp: "Just now"
      };

      setActivityLogs(prev => [newLog, ...prev]);
      setIsAssignmentModalOpen(false);
      setEditingAssignment(null);
      showToast(`Updated Question Assignment ${editingAssignment.id}!`);
    } else {
      // CREATE NEW SPECIFIC QUESTION ASSIGNMENT
      const newAsn = {
        id: `ASN-${2000 + assignments.length + 1}`,
        type: 'question',
        program,
        subject,
        teacherId: teacher.id,
        teacherIds: [teacher.id],
        selectedQuestionIds,
        totalMarks,
        instructions,
        createdAt: "Just now"
      };

      setAssignments(prev => [newAsn, ...prev]);

      const newLog = {
        id: `LOG-${5000 + activityLogs.length + 1}`,
        teacherName: teacher.name,
        teacherAvatar: teacher.avatar,
        department: teacher.department,
        action: `Created Question Assignment (${subject})`,
        details: `Program: ${program} | Course: ${subject} | Assigned ${selectedQuestionIds.length} questions [${selectedQuestionIds.join(', ')}] worth ${totalMarks} marks to ${teacher.name}. ${instructions || ''}`,
        timestamp: "Just now"
      };

      setActivityLogs(prev => [newLog, ...prev]);
      setIsAssignmentModalOpen(false);
      showToast(`Assigned ${selectedQuestionIds.length} questions for ${subject} to ${teacher.name}!`);
    }
  };

  const toggleQuestionType = (type) => {
    setSelectedQuestionTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleQuestionId = (qId) => {
    setSelectedQuestionIds(prev =>
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 selection:bg-indigo-500 selection:text-white">
      {/* TOAST NOTIFICATIONS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="pointer-events-auto p-4 rounded-xl shadow-2xl bg-indigo-950/95 border border-indigo-500/50 text-indigo-100 flex items-center justify-between backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Icon name="check" className="w-4 h-4" />
              </span>
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="text-slate-400 hover:text-white p-1"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* HEADER SECTION */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            Teacher Management
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Assign question-based tasks, view teacher directory, and inspect activity logs.
          </p>
        </div>

        {/* PRIMARY ACTION BUTTON */}
        <button
          onClick={() => handleOpenModal(null)}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 transition-all text-sm font-semibold hover:scale-[1.02] active:scale-[0.98]"
        >
          <Icon name="plus" className="w-5 h-5" />
          Create New Teacher Assignment
        </button>
      </header>

      {/* CONTROLS: SEARCH BAR & VIEW TABS */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* SEARCH INPUT */}
        <div className="relative w-full sm:w-80">
          <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={activeTab === 'teachers' ? "Search teachers by name or subject..." : "Search activity logs..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200 p-1"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* VIEW TABS SWITCHER */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto justify-center flex-wrap">
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'assignments'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="documentText" className="w-4 h-4" />
            Question Type Assignments ({filteredAssignments.length})
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'teachers'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="user" className="w-4 h-4" />
            Teacher List ({filteredTeachers.length})
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'logs'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="clock" className="w-4 h-4" />
            Activity Logs ({filteredLogs.length})
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* TAB 1: QUESTION TYPE ASSIGNMENTS */}
      {/* ========================================== */}
      {activeTab === 'assignments' && (
        <div>
          {filteredAssignments.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
              <Icon name="documentText" className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-300">No question type assignments found</h3>
              <p className="text-xs text-slate-500 mt-1">Click "Create New Teacher Assignment" above to add one.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAssignments.map(asn => {
                const assignedTeachersList = teachers.filter(t => (asn.teacherIds || []).includes(t.id));
                return (
                  <div
                    key={asn.id}
                    className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header Badge & Action Buttons (Edit / Delete) */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                              {asn.id}
                            </span>
                            <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                              asn.type === 'question'
                                ? 'bg-violet-500/20 text-violet-300 border-violet-500/30'
                                : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                            }`}>
                              {asn.type === 'question' ? 'Specific Questions Assignment' : 'Question Type Assignment'}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {asn.program}
                            </span>
                          </div>
                          <h3 className="font-bold text-slate-100 text-lg">{asn.subject}</h3>
                        </div>

                        {/* EDIT & DELETE ACTION BUTTONS */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => handleEditAssignment(asn)}
                            title="Edit Assignment"
                            className="p-2 rounded-xl bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-300 transition-all"
                          >
                            <Icon name="pencil" className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAssignment(asn.id)}
                            title="Delete Assignment"
                            className="p-2 rounded-xl bg-slate-950 hover:bg-rose-600/20 border border-slate-800 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 transition-all"
                          >
                            <Icon name="trash" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Content details depending on assignment type */}
                      {asn.type === 'questionType' ? (
                        <div className="mb-4">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            Configured Question Types ({asn.questionCount} Total Questions)
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {(asn.questionTypes || []).map((qt, idx) => (
                              <span
                                key={idx}
                                className="bg-indigo-950/60 text-indigo-200 text-xs px-2.5 py-1 rounded-lg border border-indigo-800/50 font-medium"
                              >
                                {qt}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                              Selected Questions from Bank ({(asn.selectedQuestionIds || []).length} Items)
                            </p>
                            <span className="font-mono text-xs font-bold text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                              {asn.totalMarks} Marks
                            </span>
                          </div>
                          <div className="space-y-1">
                            {(asn.selectedQuestionIds || []).map((qId) => {
                              const item = QUESTION_BANK_ITEMS.find(q => q.id === qId);
                              return (
                                <div key={qId} className="flex items-center gap-2 text-xs bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                  <span className="font-mono font-bold text-violet-300">{qId}</span>
                                  <span className="text-slate-300 truncate">{item ? item.title : 'Question Item'}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Assigned Mapped Teachers */}
                      <div className="mb-4">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                          Assigned Teachers ({assignedTeachersList.length})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {assignedTeachersList.map(t => (
                            <div
                              key={t.id}
                              className="flex items-center gap-2 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800"
                            >
                              <img src={t.avatar} alt="" className="w-5 h-5 rounded-full object-cover" />
                              <span className="text-xs font-semibold text-slate-200">{t.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Instructions Preview */}
                      {asn.instructions && (
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 italic">
                          "{asn.instructions}"
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Created: {asn.createdAt}</span>
                      {asn.updatedAt && <span className="text-indigo-400 font-semibold">Updated: {asn.updatedAt}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================== */}
      {/* TAB 2: TEACHER LIST */}
      {/* ========================================== */}
      {activeTab === 'teachers' && (
        <div>
          {filteredTeachers.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
              <Icon name="search" className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-300">No teachers found</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map(teacher => (
                <div
                  key={teacher.id}
                  className="bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-5 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Teacher Avatar & Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-500/30"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-slate-100 text-base truncate">{teacher.name}</h3>
                        <p className="text-xs text-slate-400 truncate">{teacher.designation}</p>
                        <span className="inline-block text-xs text-indigo-400 font-semibold mt-0.5">
                          {teacher.department}
                        </span>
                      </div>
                    </div>

                    {/* Subjects Badges */}
                    <div className="mb-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Assigned Subjects
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.subjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-800"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Assign Task Button */}
                  <button
                    onClick={() => handleOpenModal(teacher)}
                    className="w-full mt-2 py-2.5 rounded-xl bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 hover:text-indigo-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Icon name="clipboard" className="w-4 h-4 text-indigo-400" />
                    Assign Task to Teacher
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================== */}
      {/* TAB 2: ACTIVITY LOGS */}
      {/* ========================================== */}
      {activeTab === 'logs' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
            <Icon name="clock" className="w-5 h-5 text-indigo-400" />
            Teacher Activity Logs
          </h2>

          {filteredLogs.length === 0 ? (
            <p className="text-xs text-slate-500 py-8 text-center">No activity logs matching your search.</p>
          ) : (
            <div className="space-y-4">
              {filteredLogs.map(log => (
                <div
                  key={log.id}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-4 hover:border-indigo-500/30 transition-all"
                >
                  <img
                    src={log.teacherAvatar}
                    alt=""
                    className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-700 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-200">{log.teacherName}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-400 font-medium">
                          {log.department}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">{log.timestamp}</span>
                    </div>

                    <h4 className="text-xs font-semibold text-indigo-300 mb-0.5">{log.action}</h4>
                    <p className="text-xs text-slate-400">{log.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL: CREATE NEW TEACHER ASSIGNMENT */}
      {/* ========================================== */}
      {isAssignmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsAssignmentModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            {/* STEP 1: CHOICE SELECTION (ASK 2 QUESTIONS / MODES) */}
            {assignmentStep === 'selectOption' && (
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400">
                    <Icon name="clipboard" className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-100">Create Teacher Assignment</h2>
                    <p className="text-xs text-slate-400">Select how you want to structure this assignment</p>
                  </div>
                </div>

                <div className="my-6 space-y-4">
                  {/* CHOICE 1: ADD QUESTION TYPE ASSIGNMENT */}
                  <button
                    onClick={() => setAssignmentStep('questionTypeForm')}
                    className="w-full text-left p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all group flex items-start gap-4 shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon name="documentText" className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-300 transition-colors">
                          Add Question Type Assignment
                        </h3>
                        <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Option 1
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Assign tasks based on question formats (Multiple Choice, Essay, Short Answer, True/False, or Coding Tasks).
                      </p>
                    </div>
                  </button>

                  {/* CHOICE 2: ADD QUESTION ASSIGNMENT */}
                  <button
                    onClick={() => setAssignmentStep('questionForm')}
                    className="w-full text-left p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/60 hover:bg-slate-900 transition-all group flex items-start gap-4 shadow-lg hover:shadow-violet-500/10"
                  >
                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:scale-110 transition-transform">
                      <Icon name="questionMarkCircle" className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-100 text-base group-hover:text-violet-300 transition-colors">
                          Add Question Assignment
                        </h3>
                        <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          Option 2
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Assign specific questions selected directly from the Question Bank to a teacher for evaluation or grading.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2A: FORM FOR QUESTION TYPE ASSIGNMENT */}
            {assignmentStep === 'questionTypeForm' && (
              <div>
                <button
                  onClick={() => setAssignmentStep('selectOption')}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 mb-4 transition-colors font-medium"
                >
                  <Icon name="arrowLeft" className="w-3.5 h-3.5" />
                  Back to options
                </button>

                <h2 className="text-xl font-bold text-slate-100 mb-1 flex items-center gap-2">
                  <Icon name="documentText" className="w-5 h-5 text-indigo-400" />
                  {editingAssignment ? 'Edit Question Type Assignment' : 'Add Question Type Assignment'}
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  {editingAssignment ? 'Modify configuration for this assignment.' : 'Structure assignment by specifying allowed question formats and counts.'}
                </p>

                <form onSubmit={handleSaveQuestionTypeAssignment} className="space-y-4">
                  {/* Select Class / Program */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      1. Select Class / Program
                    </label>
                    <select
                      name="program"
                      value={selectedProgram}
                      onChange={handleProgramChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 cursor-pointer"
                    >
                      {Object.keys(PROGRAM_SUBJECT_MAP).map(prog => (
                        <option key={prog} value={prog}>{prog}</option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Select Subject / Course */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      2. Select Subject / Course
                    </label>
                    <select
                      name="subject"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 cursor-pointer font-medium"
                    >
                      {(PROGRAM_SUBJECT_MAP[selectedProgram] || []).map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Loaded Exam Question Blueprint */}
                  {currentBlueprint && (
                    <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 backdrop-blur-md shadow-lg">
                      <div className="flex items-center justify-between mb-3 border-b border-indigo-500/20 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <Icon name="documentText" className="w-4 h-4" />
                          </span>
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">Exam Question Blueprint (Auto-Loaded)</span>
                            <h4 className="text-xs font-bold text-slate-100">{selectedSubject}</h4>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-indigo-300 bg-indigo-600/30 px-2.5 py-1 rounded-lg border border-indigo-500/40">
                          {currentBlueprint.totalMarks} Total Marks ({currentBlueprint.duration})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentBlueprint.sections.map((sec, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-slate-200">{sec.name}</p>
                              <p className="text-[11px] text-slate-400">{sec.count} Qs ({sec.type})</p>
                            </div>
                            <span className="font-mono text-xs font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                              {sec.marks} Marks
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4. Loaded Mapped Teachers (Loaded & Selected by Default) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold text-slate-300 uppercase">
                        4. Mapped Teachers ({selectedTeacherIds.length} / {mappedTeachers.length} selected by default)
                      </label>
                      <button
                        type="button"
                        onClick={toggleSelectAllTeachers}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2"
                      >
                        {selectedTeacherIds.length === mappedTeachers.length ? 'Deselect All' : 'Select All'}
                      </button>
                    </div>

                    <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                      {mappedTeachers.map(teacher => (
                        <label
                          key={teacher.id}
                          className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            selectedTeacherIds.includes(teacher.id)
                              ? 'bg-indigo-600/20 text-indigo-200 border-indigo-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedTeacherIds.includes(teacher.id)}
                              onChange={() => toggleTeacherSelection(teacher.id)}
                              className="w-4 h-4 rounded accent-indigo-600 cursor-pointer flex-shrink-0"
                            />
                            <img src={teacher.avatar} alt="" className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                            <div>
                              <p className="font-bold text-slate-200">{teacher.name}</p>
                              <p className="text-[11px] text-slate-400">{teacher.designation} • {teacher.department}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Mapped
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Question Types Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Select Question Types</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['Multiple Choice (MCQ)', 'Essay', 'Short Answer', 'True / False', 'Coding Task'].map(type => (
                        <label
                          key={type}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            selectedQuestionTypes.includes(type)
                              ? 'bg-indigo-600/20 text-indigo-200 border-indigo-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedQuestionTypes.includes(type)}
                            onChange={() => toggleQuestionType(type)}
                            className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Question Count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Total Question Count</label>
                    <input
                      type="number"
                      name="questionCount"
                      defaultValue={editingAssignment ? editingAssignment.questionCount : "15"}
                      min="1"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Instructions & Guidelines</label>
                    <textarea
                      name="instructions"
                      rows="3"
                      defaultValue={editingAssignment ? editingAssignment.instructions || "" : ""}
                      placeholder="e.g. Prepare 10 MCQs and 5 Essay questions for the upcoming midterm exam..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800 mt-6">
                    <button
                      type="button"
                      onClick={() => setAssignmentStep('selectOption')}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25"
                    >
                      {editingAssignment ? 'Save Changes' : 'Create Question Type Assignment'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 2B: FORM FOR SPECIFIC QUESTION ASSIGNMENT */}
            {assignmentStep === 'questionForm' && (
              <div>
                <button
                  onClick={() => setAssignmentStep('selectOption')}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 mb-4 transition-colors font-medium"
                >
                  <Icon name="arrowLeft" className="w-3.5 h-3.5" />
                  Back to options
                </button>

                <h2 className="text-xl font-bold text-slate-100 mb-1 flex items-center gap-2">
                  <Icon name="questionMarkCircle" className="w-5 h-5 text-violet-400" />
                  {editingAssignment ? 'Edit Question Assignment' : 'Add Question Assignment'}
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  {editingAssignment ? 'Modify assigned questions, marks, or target teacher.' : 'Select specific questions from the bank and assign them directly to a teacher.'}
                </p>

                <form onSubmit={handleSaveQuestionAssignment} className="space-y-4">
                  {/* 1. Select Class / Program */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      1. Select Class / Program
                    </label>
                    <select
                      name="program"
                      value={selectedProgram}
                      onChange={handleProgramChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-violet-500 cursor-pointer"
                    >
                      {Object.keys(PROGRAM_SUBJECT_MAP).map(prog => (
                        <option key={prog} value={prog}>{prog}</option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Select Subject / Course */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      2. Select Subject / Course
                    </label>
                    <select
                      name="subject"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-violet-500 cursor-pointer"
                    >
                      {(PROGRAM_SUBJECT_MAP[selectedProgram] || []).map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Select Teacher */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">3. Assign To Teacher</label>
                    <select
                      name="teacherId"
                      defaultValue={selectedTeacherForAssignment ? selectedTeacherForAssignment.id : teachers[0].id}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-violet-500 cursor-pointer"
                    >
                      {teachers.map(t => (
                        <option key={t.id} value={t.id}>{t.name} ({t.department})</option>
                      ))}
                    </select>
                  </div>

                  {/* Select Specific Questions from Question Bank */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                      Select Questions from Question Bank ({selectedQuestionIds.length} selected)
                    </label>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {QUESTION_BANK_ITEMS.map(q => (
                        <label
                          key={q.id}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            selectedQuestionIds.includes(q.id)
                              ? 'bg-violet-600/20 text-violet-200 border-violet-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedQuestionIds.includes(q.id)}
                            onChange={() => toggleQuestionId(q.id)}
                            className="w-4 h-4 rounded accent-violet-600 cursor-pointer mt-0.5 flex-shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-mono font-bold text-violet-300">{q.id}</span>
                              <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                                {q.type}
                              </span>
                            </div>
                            <p className="text-slate-200 font-medium">{q.title}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Total Marks */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Total Assigned Marks</label>
                    <input
                      type="number"
                      name="totalMarks"
                      defaultValue={editingAssignment ? editingAssignment.totalMarks : "50"}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Evaluation Instructions</label>
                    <textarea
                      name="instructions"
                      rows="2"
                      defaultValue={editingAssignment ? editingAssignment.instructions || "" : ""}
                      placeholder="e.g. Please review student solution submissions for these questions..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-violet-500 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800 mt-6">
                    <button
                      type="button"
                      onClick={() => setAssignmentStep('selectOption')}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-violet-600/25"
                    >
                      {editingAssignment ? 'Save Changes' : 'Create Question Assignment'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
