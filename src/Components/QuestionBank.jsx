import React, { useState, useMemo } from 'react';

// ==========================================
// SVG ICONS (Self-contained, high quality)
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
        filter: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        ),
        sparkles: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
            </svg>
        ),
        book: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        alertTriangle: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
        tag: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
            </svg>
        ),
        layers: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        refresh: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
        copy: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        arrowUpRight: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        ),
        cloudUpload: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
        ),
        academic: (
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
        )
    };
    return icons[name] || null;
};

// ==========================================
// INITIAL QUESTION BANK MOCK DATA
// ==========================================
const INITIAL_QUESTIONS = [
    {
        id: "QB-PHY-2041",
        version: "v2.1",
        type: "Multiple Choice (MCQ)",
        typeCategory: "mcq",
        subject: "Physics",
        grade: "Grade 10",
        chapter: "Optics & Light Reflection",
        bookReference: "NCERT Science Class 10 (Ch 10)",
        isLmsAffected: false,
        marks: 1,
        negativeMarks: 0.25,
        difficulty: "Medium",
        cognitiveLevel: "Application",
        estimatedTimeMin: 2,
        status: "Active", // Active, Under Review, Needs Revision, Deprecated
        questionText: "An object is placed at a distance of 12 cm in front of a concave mirror. It forms a real image four times larger than the object. Calculate the distance of the image from the mirror.",
        options: [
            { id: "optA", text: "-48 cm", isCorrect: true },
            { id: "optB", text: "-36 cm", isCorrect: false },
            { id: "optC", text: "+48 cm", isCorrect: false },
            { id: "optD", text: "+12 cm", isCorrect: false }
        ],
        correctAnswer: "Option A (-48 cm)",
        explanation: "Magnification m = -v/u. Since image is real and magnified 4 times, m = -4. Given u = -12 cm. Therefore, -4 = -v / (-12) => v = -48 cm.",
        rubric: "1 Mark for correct magnification formula substitution and negative sign convention.",
        author: "Dr. Evelyn Vance (Physics HOD)",
        history: [
            { action: "Created", date: "2026-01-15 09:30 AM", user: "Dr. Evelyn Vance", note: "Created initially via AI Batch Uploader (Source: NCERT)" },
            { action: "Edited", date: "2026-02-04 03:15 PM", user: "Prof. Marcus Thorne", note: "Clarified sign convention wording for concave mirror" },
            { action: "Versioned", date: "2026-02-04 03:16 PM", user: "System", note: "Bumped version from v1.0 to v2.1" },
            { action: "Downloaded", date: "2026-03-10 11:20 AM", user: "Exam Cell Controller", note: "Included in Mid-Term Pre-Board Exam 2026 Set B" }
        ]
    },
    {
        id: "QB-MTH-1082",
        version: "v1.4",
        type: "Long Essay / Problem",
        typeCategory: "long",
        subject: "Mathematics",
        grade: "Grade 10",
        chapter: "Quadratic Equations & Roots",
        bookReference: "Oxford Mathematics v2 (Ch 4)",
        isLmsAffected: true, // Tagged by LMS sync alert!
        marks: 5,
        negativeMarks: 0,
        difficulty: "Hard",
        cognitiveLevel: "Analytical",
        estimatedTimeMin: 8,
        status: "Active",
        questionText: "A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.",
        options: [],
        correctAnswer: "Speed of stream = 6 km/h",
        explanation: "Let stream speed be x km/h. Speed upstream = 18 - x, speed downstream = 18 + x. Time equation: 24/(18-x) - 24/(18+x) = 1. Simplifying yields x^2 + 48x - 324 = 0 => (x+54)(x-6)=0. Since speed cannot be negative, x = 6 km/h.",
        rubric: "1 Mark for setting up speed variables; 2 Marks for quadratic equation formulation; 2 Marks for correct factorization and rejecting negative root.",
        author: "Prof. Marcus Thorne",
        history: [
            { action: "Created", date: "2025-11-20 10:15 AM", user: "Prof. Marcus Thorne", note: "Authored for Term Exam Question Bank" },
            { action: "Versioned", date: "2026-01-08 02:40 PM", user: "Prof. Marcus Thorne", note: "Added step-by-step marking rubric" },
            { action: "Downloaded", date: "2026-02-12 04:00 PM", user: "Teacher Staff", note: "Downloaded for Grade 10 Practice Worksheet" }
        ]
    },
    {
        id: "QB-CHE-3105",
        version: "v1.0",
        type: "Assertion & Reasoning",
        typeCategory: "assertion",
        subject: "Chemistry",
        grade: "Grade 11",
        chapter: "Chemical Bonding & Molecular Structure",
        bookReference: "NCERT Chemistry Vol 1 (Ch 4)",
        isLmsAffected: false,
        marks: 2,
        negativeMarks: 0.5,
        difficulty: "Medium",
        cognitiveLevel: "Comprehension",
        estimatedTimeMin: 3,
        status: "Active",
        questionText: "Assertion (A): The bond angle in NH3 is larger than that in PH3.\nReason (R): Nitrogen is more electronegative than phosphorus, causing stronger bond pair-bond pair repulsion in NH3.",
        options: [
            { id: "optA", text: "Both (A) and (R) are true and (R) is the correct explanation of (A)", isCorrect: true },
            { id: "optB", text: "Both (A) and (R) are true but (R) is not the correct explanation of (A)", isCorrect: false },
            { id: "optC", text: "(A) is true but (R) is false", isCorrect: false },
            { id: "optD", text: "(A) is false but (R) is true", isCorrect: false }
        ],
        correctAnswer: "Option A",
        explanation: "Because N is more electronegative than P, the electron density is concentrated closer to N, resulting in greater bp-bp repulsion and a larger bond angle (107° vs 93.5°).",
        rubric: "2 Marks for selecting Option A.",
        author: "Dr. Alistair Finch",
        history: [
            { action: "Created", date: "2026-02-10 11:00 AM", user: "Dr. Alistair Finch via AI Ingestion", note: "Extracted from 2025 Chemistry Board Paper" },
            { action: "Downloaded", date: "2026-02-28 09:30 AM", user: "Dr. Alistair Finch", note: "Exported to Weekly Quiz Paper" }
        ]
    },
    {
        id: "QB-BIO-4099",
        version: "v3.0",
        type: "Short Answer",
        typeCategory: "short",
        subject: "Biology",
        grade: "Grade 10",
        chapter: "Life Processes & Photosynthesis",
        bookReference: "Oxford Living Science (Ch 6)",
        isLmsAffected: true, // Tagged by LMS sync alert!
        marks: 3,
        negativeMarks: 0,
        difficulty: "Easy",
        cognitiveLevel: "Knowledge",
        estimatedTimeMin: 4,
        status: "Needs Revision",
        questionText: "State the three events that occur during the process of photosynthesis. Write the balanced chemical equation for the overall reaction.",
        options: [],
        correctAnswer: "1. Absorption of light energy by chlorophyll. 2. Conversion of light energy to chemical energy & splitting of water into hydrogen and oxygen. 3. Reduction of carbon dioxide to carbohydrates.",
        explanation: "Equation: 6CO2 + 12H2O --(Light/Chlorophyll)--> C6H12O6 + 6O2 + 6H2O. Key marks allocated for accurate steps and balancing.",
        rubric: "1 Mark for equation; 2 Marks for the 3 distinct events.",
        author: "Ms. Sarah Jenkins",
        history: [
            { action: "Created", date: "2025-09-12 08:45 AM", user: "Ms. Sarah Jenkins", note: "Created for Unit Test 1" },
            { action: "Edited", date: "2025-10-18 01:20 PM", user: "Ms. Sarah Jenkins", note: "Updated equation to balanced form with 12H2O" },
            { action: "Versioned", date: "2025-10-18 01:22 PM", user: "System", note: "Promoted to v3.0" },
            { action: "Edited", date: "2026-03-01 10:10 AM", user: "Academic Reviewer", note: "Sent back for review: Needs updated chapter code for 2026 curriculum" }
        ]
    },
    {
        id: "QB-CSC-5120",
        version: "v1.2",
        type: "Multiple Choice (MCQ)",
        typeCategory: "mcq",
        subject: "Computer Science",
        grade: "Grade 12",
        chapter: "Data Structures & Python Stacks",
        bookReference: "Sumita Arora Python CS (Ch 7)",
        isLmsAffected: false,
        marks: 1,
        negativeMarks: 0.25,
        difficulty: "Easy",
        cognitiveLevel: "Comprehension",
        estimatedTimeMin: 1.5,
        status: "Active",
        questionText: "Which of the following operations in a Stack implemented using a Python list is used to inspect the topmost element without removing it?",
        options: [
            { id: "optA", text: "stack.pop()", isCorrect: false },
            { id: "optB", text: "stack[-1] or Peek operation", isCorrect: true },
            { id: "optC", text: "stack.append()", isCorrect: false },
            { id: "optD", text: "stack.shift()", isCorrect: false }
        ],
        correctAnswer: "Option B (stack[-1] or Peek)",
        explanation: "In Python stacks, accessing the last index with list[-1] allows peeking without mutating the stack.",
        rubric: "1 Mark for correct answer.",
        author: "Dr. Evelyn Vance",
        history: [
            { action: "Created", date: "2026-01-20 04:10 PM", user: "Dr. Evelyn Vance", note: "Added to Grade 12 CS repository" }
        ]
    },
    {
        id: "QB-ENG-6021",
        version: "v1.0",
        type: "Short Answer",
        typeCategory: "short",
        subject: "English Literature",
        grade: "Grade 9",
        chapter: "The Road Not Taken - Robert Frost",
        bookReference: "Beehive English Reader (Poem 1)",
        isLmsAffected: false,
        marks: 2,
        negativeMarks: 0,
        difficulty: "Easy",
        cognitiveLevel: "Comprehension",
        estimatedTimeMin: 3,
        status: "Active",
        questionText: "What do the 'two roads diverged in a yellow wood' symbolize in Robert Frost's poem? How does the speaker make his choice?",
        options: [],
        correctAnswer: "The two roads symbolize the choices and dilemmas of life. The speaker chooses the one that is 'less traveled by', demonstrating individuality.",
        explanation: "Metaphor of paths in life; choices determine the future course.",
        rubric: "1 Mark for symbolism; 1 Mark for poet's choice rationale.",
        author: "Prof. Jonathan Blake",
        history: [
            { action: "Created", date: "2026-02-14 10:00 AM", user: "Prof. Jonathan Blake", note: "Uploaded for Poetry Assessment" }
        ]
    }
];

// Helper colors for question types
const QUESTION_TYPE_BADGES = {
    "Multiple Choice (MCQ)": { bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: "•", label: "MCQ" },
    "Short Answer": { bg: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: "¶", label: "Short Answer" },
    "Long Essay / Problem": { bg: "bg-purple-500/10 text-purple-400 border-purple-500/20", icon: "§", label: "Long Essay" },
    "Assertion & Reasoning": { bg: "bg-amber-500/10 text-amber-400 border-amber-500/20", icon: "⇄", label: "Assertion & Reason" },
    "True / False": { bg: "bg-teal-500/10 text-teal-400 border-teal-500/20", icon: "✓", label: "True / False" }
};

const DIFFICULTY_BADGES = {
    "Easy": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Medium": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Hard": "bg-rose-500/10 text-rose-400 border-rose-500/20"
};

export default function QuestionBank() {
    // Main Data States
    const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [selectedGrade, setSelectedGrade] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [viewMode, setViewMode] = useState("card"); // "card" | "table"

    // Selected questions for bulk actions
    const [selectedIds, setSelectedIds] = useState([]);

    // Modals & Panels States
    const [activeModal, setActiveModal] = useState(null);
    // 'details' | 'edit' | 'history' | 'delete' | 'sendBack' | 'aiGenerator' | 'lmsAlert' | 'exportPaper'

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [toastMessage, setToastMessage] = useState(null);

    // LMS Alert Dismiss state
    const [lmsDismissed, setLmsDismissed] = useState(false);

    // AI Generator Form State
    const [aiForm, setAiForm] = useState({
        subject: "Physics",
        grade: "Grade 10",
        chapter: "Electricity & Circuits",
        questionType: "Multiple Choice (MCQ)",
        count: 3,
        difficulty: "Medium",
        customPrompt: "Generate conceptual questions testing Ohm's law and circuit resistivity with realistic values."
    });
    const [isAiGenerating, setIsAiGenerating] = useState(false);
    const [aiGeneratedPreview, setAiGeneratedPreview] = useState(null);

    // Send Back Note state
    const [sendBackReason, setSendBackReason] = useState("Needs revised options & distractors");
    const [sendBackNotes, setSendBackNotes] = useState("");

    // Edit Question Form State
    const [editFormData, setEditFormData] = useState(null);

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3500);
    };

    // Filtered Questions
    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            const matchSearch =
                q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.chapter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.bookReference.toLowerCase().includes(searchTerm.toLowerCase());

            const matchSubject = selectedSubject === "All" || q.subject === selectedSubject;
            const matchGrade = selectedGrade === "All" || q.grade === selectedGrade;
            const matchType = selectedType === "All" || q.type === selectedType;
            const matchDifficulty = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
            const matchStatus = selectedStatus === "All" || q.status === selectedStatus;

            return matchSearch && matchSubject && matchGrade && matchType && matchDifficulty && matchStatus;
        });
    }, [questions, searchTerm, selectedSubject, selectedGrade, selectedType, selectedDifficulty, selectedStatus]);

    // LMS Affected count
    const lmsAffectedCount = useMemo(() => {
        return questions.filter((q) => q.isLmsAffected).length;
    }, [questions]);

    // Bulk Selection Handlers
    const toggleSelectAll = () => {
        if (selectedIds.length === filteredQuestions.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredQuestions.map((q) => q.id));
        }
    };

    const toggleSelectOne = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // ACTION: View Details
    const handleOpenDetails = (q) => {
        setCurrentQuestion(q);
        setActiveModal("details");
    };

    // ACTION: Edit Question
    const handleOpenEdit = (q) => {
        setCurrentQuestion(q);
        setEditFormData({
            ...q,
            options: q.options ? JSON.parse(JSON.stringify(q.options)) : [],
            changelogNote: ""
        });
        setActiveModal("edit");
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        if (!editFormData) return;

        // Calculate new version
        const parts = editFormData.version.replace('v', '').split('.').map(Number);
        const newVersion = `v${parts[0]}.${(parts[1] || 0) + 1}`;

        const newHistoryEntry = {
            action: "Edited",
            date: new Date().toLocaleString(),
            user: "Teacher (You)",
            note: editFormData.changelogNote || `Updated question content & marks scheme (Created ${newVersion})`
        };

        const versionHistoryEntry = {
            action: "Versioned",
            date: new Date().toLocaleString(),
            user: "System",
            note: `Promoted from ${editFormData.version} to ${newVersion}`
        };

        const updatedQuestion = {
            ...editFormData,
            version: newVersion,
            history: [versionHistoryEntry, newHistoryEntry, ...(editFormData.history || [])]
        };

        setQuestions((prev) =>
            prev.map((item) => (item.id === updatedQuestion.id ? updatedQuestion : item))
        );

        setActiveModal(null);
        showToast(`✓ Question ${updatedQuestion.id} successfully updated to ${newVersion}!`);
    };

    // ACTION: Activity History
    const handleOpenHistory = (q) => {
        setCurrentQuestion(q);
        setActiveModal("history");
    };

    // ACTION: Delete (Confirm modal)
    const handleOpenDelete = (q) => {
        setCurrentQuestion(q);
        setActiveModal("delete");
    };

    const handleConfirmDelete = () => {
        if (!currentQuestion) return;
        setQuestions((prev) => prev.filter((q) => q.id !== currentQuestion.id));
        setSelectedIds((prev) => prev.filter((id) => id !== currentQuestion.id));
        setActiveModal(null);
        showToast(`✓ Question ${currentQuestion.id} deleted from Question Bank.`);
    };

    // ACTION: Send Back for Revision
    const handleOpenSendBack = (q) => {
        setCurrentQuestion(q);
        setSendBackReason("Needs revised options & distractors");
        setSendBackNotes("");
        setActiveModal("sendBack");
    };

    const handleConfirmSendBack = () => {
        if (!currentQuestion) return;
        const sendBackHistory = {
            action: "Sent Back",
            date: new Date().toLocaleString(),
            user: "HOD / Academic Reviewer",
            note: `Reason: ${sendBackReason}. Notes: ${sendBackNotes || "Please review syllabus alignment."}`
        };

        const updated = {
            ...currentQuestion,
            status: "Needs Revision",
            history: [sendBackHistory, ...(currentQuestion.history || [])]
        };

        setQuestions((prev) =>
            prev.map((item) => (item.id === updated.id ? updated : item))
        );

        setActiveModal(null);
        showToast(`✓ Question ${currentQuestion.id} sent back to ${currentQuestion.author} for revision.`);
    };

    // ACTION: AI Question Generation / Ingestion
    const handleGenerateAiQuestions = () => {
        setIsAiGenerating(true);
        setTimeout(() => {
            setIsAiGenerating(false);
            const generated = [
                {
                    id: `QB-AI-${Math.floor(1000 + Math.random() * 9000)}`,
                    version: "v1.0",
                    type: aiForm.questionType,
                    typeCategory: aiForm.questionType.toLowerCase().includes("mcq") ? "mcq" : "short",
                    subject: aiForm.subject,
                    grade: aiForm.grade,
                    chapter: aiForm.chapter,
                    bookReference: `${aiForm.subject} Modern Textbook 2026`,
                    isLmsAffected: false,
                    marks: aiForm.questionType.includes("MCQ") ? 1 : 3,
                    negativeMarks: aiForm.questionType.includes("MCQ") ? 0.25 : 0,
                    difficulty: aiForm.difficulty,
                    cognitiveLevel: "Application",
                    estimatedTimeMin: 2,
                    status: "Active",
                    questionText: `A cylindrical conductor of length 'l' and uniform area of cross-section 'A' has resistance 'R'. Another conductor of length 2.5l and resistance 0.5R of the same material has area of cross-section:`,
                    options: [
                        { id: "optA", text: "5 A", isCorrect: true },
                        { id: "optB", text: "2.5 A", isCorrect: false },
                        { id: "optC", text: "0.5 A", isCorrect: false },
                        { id: "optD", text: "1.25 A", isCorrect: false }
                    ],
                    correctAnswer: "Option A (5 A)",
                    explanation: "R = rho * (l / A). For second wire: 0.5R = rho * (2.5l / A'). Dividing equations: 0.5 = 2.5 * (A / A') => A' = 5 A.",
                    rubric: "1 Mark for proportional resistivity derivation.",
                    author: "AI Curriculum Assistant (Gemini Ingestion Engine)",
                    history: [
                        { action: "Created", date: new Date().toLocaleString(), user: "AI Engine", note: "Generated from Teacher Prompt & Syllabus Matrix" }
                    ]
                },
                {
                    id: `QB-AI-${Math.floor(1000 + Math.random() * 9000)}`,
                    version: "v1.0",
                    type: "Short Answer",
                    typeCategory: "short",
                    subject: aiForm.subject,
                    grade: aiForm.grade,
                    chapter: aiForm.chapter,
                    bookReference: `${aiForm.subject} Modern Textbook 2026`,
                    isLmsAffected: false,
                    marks: 2,
                    negativeMarks: 0,
                    difficulty: aiForm.difficulty,
                    cognitiveLevel: "Comprehension",
                    estimatedTimeMin: 3,
                    status: "Active",
                    questionText: "Define electric potential difference between two points in an electric circuit carrying current. State its SI unit.",
                    options: [],
                    correctAnswer: "Work done in moving a unit positive charge from one point to the other (V = W / Q). SI unit is Volt (V).",
                    explanation: "Clear statement of definition with formula representation and Volt unit.",
                    rubric: "1 Mark for definition; 1 Mark for SI unit.",
                    author: "AI Curriculum Assistant",
                    history: [
                        { action: "Created", date: new Date().toLocaleString(), user: "AI Engine", note: "Generated via AI Batch Upload" }
                    ]
                }
            ];
            setAiGeneratedPreview(generated);
        }, 1400);
    };

    const handleApproveAiQuestions = () => {
        if (!aiGeneratedPreview) return;
        setQuestions((prev) => [...aiGeneratedPreview, ...prev]);
        showToast(`✓ ${aiGeneratedPreview.length} AI generated questions imported into Question Bank!`);
        setAiGeneratedPreview(null);
        setActiveModal(null);
    };

    // LMS Batch Action: Keep or Delete
    const handleLmsAction = (actionType) => {
        if (actionType === "keep") {
            setQuestions((prev) =>
                prev.map((q) =>
                    q.isLmsAffected
                        ? {
                            ...q,
                            isLmsAffected: false,
                            history: [
                                {
                                    action: "Edited",
                                    date: new Date().toLocaleString(),
                                    user: "Academic HOD",
                                    note: "Retained during LMS New Textbook Sync (Migrated to Archive syllabus)"
                                },
                                ...q.history
                            ]
                        }
                        : q
                )
            );
            showToast("✓ All affected questions retained and mapped to Reference Archive.");
        } else if (actionType === "delete") {
            setQuestions((prev) => prev.filter((q) => !q.isLmsAffected));
            showToast("✓ Deprecated textbook questions removed from Question Bank.");
        }
        setActiveModal(null);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-emerald-500/90 text-white px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-emerald-400/40 animate-bounce">
                    <Icon name="check" className="w-5 h-5 text-white" />
                    <span className="font-medium text-sm">{toastMessage}</span>
                </div>
            )}

            {/* ======================================================== */}
            {/* TOP SCHOOL HEADER & QUESTION BANK ARCHITECTURE BAR      */}
            {/* ======================================================== */}
            <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Icon name="book" className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                                    Question Bank System
                                </h1>
                                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    v2.4 Production
                                </span>
                            </div>
                            <p className="text-xs text-slate-400">
                                St. Peter's School • Exam Repository, AI Ingestion & Version Controller
                            </p>
                        </div>
                    </div>

                    {/* Quick Metrics & Top CTA */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-4 bg-slate-950/60 px-4 py-1.5 rounded-xl border border-slate-800 text-xs">
                            <div>
                                <span className="text-slate-400">Total Items: </span>
                                <span className="font-bold text-white">{questions.length}</span>
                            </div>
                            <div className="h-3 w-px bg-slate-700" />
                            <div>
                                <span className="text-slate-400">Under Review: </span>
                                <span className="font-bold text-amber-400">
                                    {questions.filter((q) => q.status === "Needs Revision").length}
                                </span>
                            </div>
                            <div className="h-3 w-px bg-slate-700" />
                            <div>
                                <span className="text-slate-400">LMS Sync Alerts: </span>
                                <span className="font-bold text-rose-400">{lmsAffectedCount}</span>
                            </div>
                        </div>

                        {/* AI Generator CTA (Flowchart: AI -> Upload question type + questions) */}
                        <button
                            onClick={() => setActiveModal("aiGenerator")}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-emerald-600 text-white font-medium text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-indigo-600/25 transition-all"
                        >
                            <Icon name="sparkles" className="w-4 h-4 animate-spin-slow" />
                            <span>AI Question Studio</span>
                        </button>

                        {/* Print / Export Paper */}
                        <button
                            onClick={() => setActiveModal("exportPaper")}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
                        >
                            <Icon name="download" className="w-4 h-4 text-slate-400" />
                            <span className="hidden sm:inline">Export Paper</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ======================================================== */}
            {/* LMS INTEGRATION BANNER (Flowchart: Other Module / LMS)     */}
            {/* ======================================================== */}
            {!lmsDismissed && lmsAffectedCount > 0 && (
                <div className="bg-gradient-to-r from-rose-950/70 via-amber-950/40 to-slate-900 border-b border-rose-500/30 px-4 py-3">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
                                <Icon name="alertTriangle" className="w-5 h-5 text-rose-400" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-rose-200 flex items-center gap-2">
                                    <span>LMS Sync Notification: New Books & Syllabus Detected</span>
                                    <span className="px-2 py-0.5 text-[11px] rounded bg-rose-500/20 text-rose-300 font-bold">
                                        {lmsAffectedCount} Questions Affected
                                    </span>
                                </div>
                                <p className="text-xs text-rose-300/80">
                                    New textbooks detected from the Academic Curriculum LMS module. Do you want to keep or delete questions linked to older editions?
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => setActiveModal("lmsAlert")}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm"
                            >
                                Review & Resolve (Keep / Delete)
                            </button>
                            <button
                                onClick={() => setLmsDismissed(true)}
                                className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800"
                                title="Dismiss banner"
                            >
                                <Icon name="close" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MAIN CONTAINER: SEARCH, FILTERS & QUESTION LIST          */}
            {/* ======================================================== */}
            <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6">

                {/* Search, Filter Bar & Controls */}
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-xl backdrop-blur-md flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search questions by keywords, ID, chapter, author, or book..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                >
                                    <Icon name="close" className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Quick Actions & View Switcher */}
                        <div className="flex items-center gap-2 self-end md:self-auto">
                            {/* Card / Table Switcher */}
                            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode("card")}
                                    className={`p-1.5 rounded-lg transition-colors ${viewMode === "card" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
                                        }`}
                                    title="Card Grid View"
                                >
                                    <Icon name="grid" className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("table")}
                                    className={`p-1.5 rounded-lg transition-colors ${viewMode === "table" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"
                                        }`}
                                    title="Table List View"
                                >
                                    <Icon name="list" className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Add Custom Question Button */}
                            <button
                                onClick={() => {
                                    const newQ = {
                                        id: `QB-MAN-${Math.floor(1000 + Math.random() * 9000)}`,
                                        version: "v1.0",
                                        type: "Multiple Choice (MCQ)",
                                        typeCategory: "mcq",
                                        subject: selectedSubject !== "All" ? selectedSubject : "General Science",
                                        grade: selectedGrade !== "All" ? selectedGrade : "Grade 10",
                                        chapter: "General Unit",
                                        bookReference: "Prescribed School Curriculum",
                                        isLmsAffected: false,
                                        marks: 1,
                                        negativeMarks: 0,
                                        difficulty: "Medium",
                                        cognitiveLevel: "Application",
                                        estimatedTimeMin: 2,
                                        status: "Active",
                                        questionText: "",
                                        options: [
                                            { id: "optA", text: "", isCorrect: true },
                                            { id: "optB", text: "", isCorrect: false },
                                            { id: "optC", text: "", isCorrect: false },
                                            { id: "optD", text: "", isCorrect: false }
                                        ],
                                        correctAnswer: "Option A",
                                        explanation: "",
                                        rubric: "",
                                        author: "Current Teacher",
                                        history: [
                                            { action: "Created", date: new Date().toLocaleString(), user: "Teacher", note: "Manually entered into Question Bank" }
                                        ]
                                    };
                                    handleOpenEdit(newQ);
                                }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                            >
                                <Icon name="plus" className="w-4 h-4" />
                                <span>New Question</span>
                            </button>
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-2 border-t border-slate-800/80">
                        {/* Subject */}
                        <div>
                            <label className="block text-[11px] font-medium text-slate-400 mb-1">Subject</label>
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="All">All Subjects</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Biology">Biology</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="English Literature">English Literature</option>
                            </select>
                        </div>

                        {/* Grade / Class */}
                        <div>
                            <label className="block text-[11px] font-medium text-slate-400 mb-1">Grade / Class</label>
                            <select
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="All">All Grades</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 10">Grade 10</option>
                                <option value="Grade 11">Grade 11</option>
                                <option value="Grade 12">Grade 12</option>
                            </select>
                        </div>

                        {/* Question Type (Flowchart: Question Type Data) */}
                        <div>
                            <label className="block text-[11px] font-medium text-slate-400 mb-1">Question Type</label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="All">All Types</option>
                                <option value="Multiple Choice (MCQ)">MCQ</option>
                                <option value="Short Answer">Short Answer</option>
                                <option value="Long Essay / Problem">Long Essay</option>
                                <option value="Assertion & Reasoning">Assertion & Reason</option>
                                <option value="True / False">True / False</option>
                            </select>
                        </div>

                        {/* Difficulty */}
                        <div>
                            <label className="block text-[11px] font-medium text-slate-400 mb-1">Difficulty</label>
                            <select
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="All">All Difficulties</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-[11px] font-medium text-slate-400 mb-1">Status</label>
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Needs Revision">Needs Revision</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Bulk Action Bar (when questions are checked) */}
                {selectedIds.length > 0 && (
                    <div className="bg-indigo-950/60 border border-indigo-500/40 rounded-xl px-4 py-2.5 flex items-center justify-between flex-wrap gap-3 animate-fadeIn">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/30">
                                {selectedIds.length} Selected
                            </span>
                            <span className="text-xs text-slate-300">
                                Apply bulk management operations on selected questions
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveModal("exportPaper")}
                                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                            >
                                <Icon name="download" className="w-3.5 h-3.5" />
                                <span>Export Selected to Exam</span>
                            </button>
                            <button
                                onClick={() => {
                                    setQuestions((prev) => prev.filter((q) => !selectedIds.includes(q.id)));
                                    setSelectedIds([]);
                                    showToast(`✓ Removed ${selectedIds.length} questions.`);
                                }}
                                className="px-3 py-1.5 bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                            >
                                <Icon name="trash" className="w-3.5 h-3.5" />
                                <span>Bulk Delete</span>
                            </button>
                            <button
                                onClick={() => setSelectedIds([])}
                                className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                )}

                {/* Question Counter Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-slate-300">
                            Showing {filteredQuestions.length} of {questions.length} Questions
                        </h2>
                        {selectedSubject !== "All" && (
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                {selectedSubject}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={toggleSelectAll}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        {selectedIds.length === filteredQuestions.length && filteredQuestions.length > 0
                            ? "Deselect All"
                            : "Select All Filtered"}
                    </button>
                </div>

                {/* ======================================================== */}
                {/* VIEW 1: CARD GRID VIEW (Rich UI / UX)                    */}
                {/* ======================================================== */}
                {viewMode === "card" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredQuestions.map((q) => {
                            const typeBadge = QUESTION_TYPE_BADGES[q.type] || {
                                bg: "bg-slate-800 text-slate-300 border-slate-700",
                                icon: "•",
                                label: q.type
                            };
                            const diffBadge = DIFFICULTY_BADGES[q.difficulty] || "bg-slate-800 text-slate-300 border-slate-700";
                            const isSelected = selectedIds.includes(q.id);

                            return (
                                <div
                                    key={q.id}
                                    className={`bg-slate-900/90 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:border-slate-700 ${isSelected ? "border-indigo-500 ring-1 ring-indigo-500/50 bg-slate-900" : "border-slate-800"
                                        } ${q.isLmsAffected ? "border-rose-500/50" : ""}`}
                                >
                                    {/* Card Header */}
                                    <div className="p-4 border-b border-slate-800/80">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-2.5">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => toggleSelectOne(q.id)}
                                                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <span className="font-mono text-xs font-semibold text-slate-400">{q.id}</span>
                                                        {/* Version Pill (Flowchart: New Version) */}
                                                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                                            {q.version}
                                                        </span>
                                                        {/* Status Tag */}
                                                        {q.status === "Needs Revision" && (
                                                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                                                Needs Revision
                                                            </span>
                                                        )}
                                                        {q.isLmsAffected && (
                                                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                                                                LMS Deprecated Book
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-slate-400 mt-1">
                                                        <span className="text-slate-300 font-medium">{q.subject}</span> • {q.grade} • {q.chapter}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Question Type & Marks Data (Flowchart: Question Type Data, Question + Marks Data) */}
                                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${typeBadge.bg}`}>
                                                    {typeBadge.label}
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                                        {q.marks} {q.marks === 1 ? "Mark" : "Marks"}
                                                    </span>
                                                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${diffBadge}`}>
                                                        {q.difficulty}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Question Stem */}
                                    <div className="p-4 flex-1">
                                        <p className="text-sm font-medium text-slate-200 line-clamp-3 leading-relaxed">
                                            {q.questionText}
                                        </p>

                                        {/* MCQ Options Snippet */}
                                        {q.options && q.options.length > 0 && (
                                            <div className="mt-3 grid grid-cols-2 gap-2">
                                                {q.options.slice(0, 4).map((opt) => (
                                                    <div
                                                        key={opt.id}
                                                        className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 truncate ${opt.isCorrect
                                                                ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                                                                : "bg-slate-950/40 text-slate-400 border-slate-800"
                                                            }`}
                                                    >
                                                        <span className="font-semibold text-slate-500">{opt.id.slice(-1)}.</span>
                                                        <span className="truncate">{opt.text}</span>
                                                        {opt.isCorrect && <Icon name="check" className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-auto" />}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Meta info footer */}
                                        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                                            <div className="flex items-center gap-1 truncate max-w-[200px]" title={q.bookReference}>
                                                <Icon name="book" className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                                <span className="truncate">{q.bookReference}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>Est: {q.estimatedTimeMin}m</span>
                                                <span>•</span>
                                                <span>Taxonomy: {q.cognitiveLevel}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ======================================================== */}
                                    {/* MANAGEMENT ACTIONS BAR (Flowchart Specific)              */}
                                    {/* View Details | Edit | Activity History | Delete | Send Back */}
                                    {/* ======================================================== */}
                                    <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 rounded-b-2xl flex items-center justify-between gap-1 flex-wrap">
                                        <div className="flex items-center gap-1">
                                            {/* 1. View Details */}
                                            <button
                                                onClick={() => handleOpenDetails(q)}
                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                                title="View Complete Details"
                                            >
                                                <Icon name="eye" className="w-3.5 h-3.5 text-indigo-400" />
                                                <span>Details</span>
                                            </button>

                                            {/* 2. Edit (leads to Save -> New Version) */}
                                            <button
                                                onClick={() => handleOpenEdit(q)}
                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                                title="Edit Question & Save New Version"
                                            >
                                                <Icon name="edit" className="w-3.5 h-3.5 text-amber-400" />
                                                <span>Edit</span>
                                            </button>

                                            {/* 3. Activity History */}
                                            <button
                                                onClick={() => handleOpenHistory(q)}
                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                                title="View Activity History: Created, Edited, Versioned, Downloaded"
                                            >
                                                <Icon name="history" className="w-3.5 h-3.5 text-teal-400" />
                                                <span>History</span>
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            {/* 5. Send Back */}
                                            <button
                                                onClick={() => handleOpenSendBack(q)}
                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
                                                title="Send back for review & corrections"
                                            >
                                                <Icon name="sendBack" className="w-3.5 h-3.5" />
                                                <span>Send Back</span>
                                            </button>

                                            {/* 4. Delete */}
                                            <button
                                                onClick={() => handleOpenDelete(q)}
                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
                                                title="Delete Question"
                                            >
                                                <Icon name="trash" className="w-3.5 h-3.5" />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ======================================================== */}
                {/* VIEW 2: TABLE LIST VIEW                                  */}
                {/* ======================================================== */}
                {viewMode === "table" && (
                    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                                        <th className="p-3 w-10 text-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.length === filteredQuestions.length && filteredQuestions.length > 0}
                                                onChange={toggleSelectAll}
                                                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
                                            />
                                        </th>
                                        <th className="p-3 font-semibold">Question ID & Type</th>
                                        <th className="p-3 font-semibold">Subject & Chapter</th>
                                        <th className="p-3 font-semibold max-w-xs">Question Stem</th>
                                        <th className="p-3 font-semibold">Marks</th>
                                        <th className="p-3 font-semibold">Difficulty</th>
                                        <th className="p-3 font-semibold">Version</th>
                                        <th className="p-3 font-semibold text-right">Management Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60">
                                    {filteredQuestions.map((q) => {
                                        const isSelected = selectedIds.includes(q.id);
                                        return (
                                            <tr
                                                key={q.id}
                                                className={`hover:bg-slate-800/40 transition-colors ${isSelected ? "bg-indigo-950/20" : ""
                                                    }`}
                                            >
                                                <td className="p-3 text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() => toggleSelectOne(q.id)}
                                                        className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="p-3">
                                                    <div className="font-mono font-bold text-slate-200">{q.id}</div>
                                                    <span className="text-[11px] text-indigo-400">{q.type}</span>
                                                </td>
                                                <td className="p-3">
                                                    <div className="font-medium text-slate-200">{q.subject}</div>
                                                    <div className="text-[11px] text-slate-400">{q.chapter}</div>
                                                </td>
                                                <td className="p-3 max-w-sm truncate text-slate-300">
                                                    {q.questionText}
                                                </td>
                                                <td className="p-3">
                                                    <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                                        {q.marks}M
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <span
                                                        className={`px-2 py-0.5 rounded border text-[11px] ${DIFFICULTY_BADGES[q.difficulty]
                                                            }`}
                                                    >
                                                        {q.difficulty}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <span className="font-semibold text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                        {q.version}
                                                    </span>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button
                                                            onClick={() => handleOpenDetails(q)}
                                                            className="p-1.5 text-indigo-400 hover:text-indigo-300 hover:bg-slate-800 rounded-lg"
                                                            title="View Details"
                                                        >
                                                            <Icon name="eye" className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleOpenEdit(q)}
                                                            className="p-1.5 text-amber-400 hover:text-amber-300 hover:bg-slate-800 rounded-lg"
                                                            title="Edit"
                                                        >
                                                            <Icon name="edit" className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleOpenHistory(q)}
                                                            className="p-1.5 text-teal-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg"
                                                            title="Activity History"
                                                        >
                                                            <Icon name="history" className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleOpenSendBack(q)}
                                                            className="p-1.5 text-amber-400 hover:text-amber-300 hover:bg-slate-800 rounded-lg"
                                                            title="Send Back"
                                                        >
                                                            <Icon name="sendBack" className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleOpenDelete(q)}
                                                            className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-slate-800 rounded-lg"
                                                            title="Delete"
                                                        >
                                                            <Icon name="trash" className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredQuestions.length === 0 && (
                    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-12 text-center flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mb-3">
                            <Icon name="search" className="w-6 h-6" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-200">No questions found</h3>
                        <p className="text-xs text-slate-400 max-w-sm mt-1">
                            Try adjusting your search query or clear selected filters to see other questions.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedSubject("All");
                                setSelectedGrade("All");
                                setSelectedType("All");
                                setSelectedDifficulty("All");
                                setSelectedStatus("All");
                            }}
                            className="mt-4 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </main>

            {/* ======================================================== */}
            {/* MODAL 1: VIEW DETAILS (Flowchart: View Details)          */}
            {/* ======================================================== */}
            {activeModal === "details" && currentQuestion && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
                        {/* Header */}
                        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-sm font-bold text-slate-300">{currentQuestion.id}</span>
                                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                    {currentQuestion.version}
                                </span>
                                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {currentQuestion.type}
                                </span>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Icon name="close" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-5 text-sm">
                            {/* Subject & Reference */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                                <div>
                                    <span className="text-slate-500 block">Subject</span>
                                    <span className="font-semibold text-slate-200">{currentQuestion.subject}</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Grade</span>
                                    <span className="font-semibold text-slate-200">{currentQuestion.grade}</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Marks Allocation</span>
                                    <span className="font-semibold text-amber-400">{currentQuestion.marks} Marks (Neg: {currentQuestion.negativeMarks})</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Difficulty</span>
                                    <span className="font-semibold text-slate-200">{currentQuestion.difficulty}</span>
                                </div>
                            </div>

                            {/* Question Text */}
                            <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                                    Question Content
                                </h4>
                                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl text-slate-100 font-medium leading-relaxed whitespace-pre-line">
                                    {currentQuestion.questionText}
                                </div>
                            </div>

                            {/* Options if MCQ */}
                            {currentQuestion.options && currentQuestion.options.length > 0 && (
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                                        Multiple Choice Options
                                    </h4>
                                    <div className="space-y-2">
                                        {currentQuestion.options.map((opt) => (
                                            <div
                                                key={opt.id}
                                                className={`p-3 rounded-xl border flex items-center justify-between text-xs ${opt.isCorrect
                                                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold"
                                                        : "bg-slate-950 border-slate-800 text-slate-300"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-bold">
                                                        {opt.id.slice(-1)}
                                                    </span>
                                                    <span>{opt.text}</span>
                                                </div>
                                                {opt.isCorrect && (
                                                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                                        <Icon name="check" className="w-3.5 h-3.5" /> Correct Answer
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Explanation & Marking Scheme */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
                                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                                        <span>💡 Model Solution / Answer Key</span>
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {currentQuestion.correctAnswer || currentQuestion.explanation}
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
                                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                                        <span>📋 Marking Rubric & Scheme</span>
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {currentQuestion.rubric || "Standard marks allocation as per curriculum guidelines."}
                                    </p>
                                </div>
                            </div>

                            {/* Source & Curriculum Textbook */}
                            <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-xl flex items-center justify-between text-xs text-slate-400">
                                <div>
                                    <span className="text-slate-500">Curriculum Source: </span>
                                    <span className="text-slate-300 font-medium">{currentQuestion.bookReference}</span>
                                </div>
                                <div>
                                    <span className="text-slate-500">Author: </span>
                                    <span className="text-slate-300 font-medium">{currentQuestion.author}</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
                            <button
                                onClick={() => {
                                    setActiveModal("history");
                                }}
                                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
                            >
                                <Icon name="history" className="w-4 h-4" /> View Version & Activity Log
                            </button>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        handleOpenEdit(currentQuestion);
                                    }}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors"
                                >
                                    Edit Question
                                </button>
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 2: EDIT -> SAVE -> NEW VERSION (Flowchart Specific) */}
            {/* ======================================================== */}
            {activeModal === "edit" && editFormData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <form
                        onSubmit={handleSaveEdit}
                        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md">
                            <div>
                                <h3 className="text-base font-bold text-white flex items-center gap-2">
                                    <span>Edit Question & Version Controller</span>
                                    <span className="font-mono text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                        Current: {editFormData.version}
                                    </span>
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Saving will generate a new incremental version and log audit trail.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveModal(null)}
                                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Icon name="close" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="p-6 space-y-4 text-xs">
                            {/* Question Text */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                    Question Text / Stem *
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    value={editFormData.questionText}
                                    onChange={(e) => setEditFormData({ ...editFormData, questionText: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-indigo-500 text-xs leading-relaxed"
                                />
                            </div>

                            {/* Grid: Subject, Grade, Marks, Difficulty */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div>
                                    <label className="block text-slate-400 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        value={editFormData.subject}
                                        onChange={(e) => setEditFormData({ ...editFormData, subject: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Grade</label>
                                    <input
                                        type="text"
                                        value={editFormData.grade}
                                        onChange={(e) => setEditFormData({ ...editFormData, grade: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Marks</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="20"
                                        value={editFormData.marks}
                                        onChange={(e) => setEditFormData({ ...editFormData, marks: Number(e.target.value) })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Difficulty</label>
                                    <select
                                        value={editFormData.difficulty}
                                        onChange={(e) => setEditFormData({ ...editFormData, difficulty: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100"
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>

                            {/* MCQ Options editor if MCQ */}
                            {editFormData.options && editFormData.options.length > 0 && (
                                <div>
                                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                                        Options & Correct Answer Selection
                                    </label>
                                    <div className="space-y-2">
                                        {editFormData.options.map((opt, idx) => (
                                            <div key={opt.id} className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
                                                <input
                                                    type="radio"
                                                    name="correctOption"
                                                    checked={opt.isCorrect}
                                                    onChange={() => {
                                                        const newOpts = editFormData.options.map((o, i) => ({
                                                            ...o,
                                                            isCorrect: i === idx
                                                        }));
                                                        setEditFormData({
                                                            ...editFormData,
                                                            options: newOpts,
                                                            correctAnswer: `Option ${opt.id.slice(-1)} (${opt.text})`
                                                        });
                                                    }}
                                                    className="w-4 h-4 text-emerald-500 focus:ring-0 cursor-pointer"
                                                />
                                                <span className="font-bold text-slate-400 w-5">{opt.id.slice(-1)}.</span>
                                                <input
                                                    type="text"
                                                    value={opt.text}
                                                    onChange={(e) => {
                                                        const newOpts = [...editFormData.options];
                                                        newOpts[idx].text = e.target.value;
                                                        setEditFormData({ ...editFormData, options: newOpts });
                                                    }}
                                                    className="flex-1 bg-transparent border-none text-slate-200 focus:outline-none"
                                                    placeholder={`Option ${opt.id.slice(-1)} text`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Model Answer & Explanation */}
                            <div>
                                <label className="block text-slate-400 mb-1">Model Solution / Explanation</label>
                                <textarea
                                    rows={2}
                                    value={editFormData.explanation}
                                    onChange={(e) => setEditFormData({ ...editFormData, explanation: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100"
                                />
                            </div>

                            {/* Version Changelog Note (Flowchart requirement: Save -> New Version) */}
                            <div className="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-500/30">
                                <label className="block text-xs font-bold text-indigo-300 mb-1">
                                    Changelog Note for New Version *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Corrected phrasing in Option B and updated diagram formula."
                                    value={editFormData.changelogNote}
                                    onChange={(e) => setEditFormData({ ...editFormData, changelogNote: e.target.value })}
                                    className="w-full bg-slate-950 border border-indigo-500/40 rounded-lg p-2 text-slate-100 text-xs"
                                />
                                <span className="text-[11px] text-indigo-400/80 mt-1 block">
                                    This note will be logged in the immutable Activity History ledger.
                                </span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                                New version created on save.
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setActiveModal(null)}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-emerald-600/20"
                                >
                                    Save & Publish New Version
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 3: ACTIVITY HISTORY (Flowchart: Activity History)   */}
            {/* Created, Edited, Versioned, Downloaded                   */}
            {/* ======================================================== */}
            {activeModal === "history" && currentQuestion && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
                        {/* Header */}
                        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md">
                            <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                    <Icon name="history" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Activity History & Audit Trail</h3>
                                    <p className="text-xs text-slate-400">Question ID: {currentQuestion.id} • {currentQuestion.version}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Icon name="close" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Timeline */}
                        <div className="p-6">
                            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                                {currentQuestion.history && currentQuestion.history.map((log, index) => {
                                    let badgeColor = "bg-blue-500/20 text-blue-400 border-blue-500/40";
                                    if (log.action === "Created") badgeColor = "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
                                    if (log.action === "Versioned") badgeColor = "bg-purple-500/20 text-purple-400 border-purple-500/40";
                                    if (log.action === "Downloaded") badgeColor = "bg-amber-500/20 text-amber-400 border-amber-500/40";
                                    if (log.action === "Sent Back") badgeColor = "bg-rose-500/20 text-rose-400 border-rose-500/40";

                                    return (
                                        <div key={index} className="relative group">
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                                                        {log.action}
                                                    </span>
                                                    <span className="text-[11px] text-slate-400">{log.date}</span>
                                                </div>
                                                <p className="text-xs text-slate-200 mt-1">{log.note}</p>
                                                <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                                                    <span>By:</span>
                                                    <span className="text-slate-400 font-medium">{log.user}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex justify-end">
                            <button
                                onClick={() => setActiveModal(null)}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                            >
                                Close History
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 4: DELETE -> CONFIRM -> DELETED (Flowchart)        */}
            {/* ======================================================== */}
            {activeModal === "delete" && currentQuestion && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                            <Icon name="trash" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white">Delete Question from Bank?</h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                Are you sure you want to delete <span className="font-mono text-slate-200 font-bold">{currentQuestion.id}</span>?
                                This action will remove the question from the active bank. Any past exams referencing this question will maintain their historical archive snapshot.
                            </p>
                        </div>

                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                            "{currentQuestion.questionText.slice(0, 90)}..."
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2">
                            <button
                                onClick={() => setActiveModal(null)}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-rose-600/30"
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 5: SEND BACK (Flowchart: Send Back for review)     */}
            {/* ======================================================== */}
            {activeModal === "sendBack" && currentQuestion && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                                <Icon name="sendBack" className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">Send Back for Revision</h3>
                                <p className="text-xs text-slate-400">Author: {currentQuestion.author}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Primary Reason
                            </label>
                            <select
                                value={sendBackReason}
                                onChange={(e) => setSendBackReason(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100"
                            >
                                <option value="Needs revised options & distractors">Needs revised options & distractors</option>
                                <option value="Marks weightage mismatch">Marks weightage mismatch</option>
                                <option value="Question ambiguity / typo">Question ambiguity / typo</option>
                                <option value="Missing or incomplete rubric">Missing or incomplete rubric</option>
                                <option value="Outdated syllabus alignment">Outdated syllabus alignment</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Specific Reviewer Feedback / Instructions
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Provide clear instructions for the teacher on what needs improvement..."
                                value={sendBackNotes}
                                onChange={(e) => setSendBackNotes(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100"
                            />
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2">
                            <button
                                onClick={() => setActiveModal(null)}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmSendBack}
                                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-amber-600/20"
                            >
                                Send Back to Author
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 6: AI QUESTION GENERATOR / BATCH UPLOAD (Flowchart)*/}
            {/* AI -> Upload question type + questions                   */}
            {/* ======================================================== */}
            {activeModal === "aiGenerator" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
                        {/* Header */}
                        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                                    <Icon name="sparkles" className="w-5 h-5 animate-spin-slow" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                                        AI Question Studio & Ingestion
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                        Auto-generate curriculum questions or ingest textbook scans with marks & rubrics
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Icon name="close" className="w-5 h-5" />
                            </button>
                        </div>

                        {/* AI Generator Body */}
                        <div className="p-6 space-y-4 text-xs">
                            {/* Batch Upload Pill */}
                            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 border-dashed flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Icon name="cloudUpload" className="w-5 h-5 text-indigo-400" />
                                    <div>
                                        <span className="font-semibold text-slate-200 block">Upload Question Document or Syllabus PDF</span>
                                        <span className="text-slate-400 text-[11px]">AI will parse question types, marks & solutions automatically</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => showToast("File uploaded! AI is parsing question formats...")}
                                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700"
                                >
                                    Choose File
                                </button>
                            </div>

                            {/* Form Controls */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div>
                                    <label className="block text-slate-400 mb-1">Target Subject</label>
                                    <select
                                        value={aiForm.subject}
                                        onChange={(e) => setAiForm({ ...aiForm, subject: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                    >
                                        <option value="Physics">Physics</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Computer Science">Computer Science</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Grade / Level</label>
                                    <select
                                        value={aiForm.grade}
                                        onChange={(e) => setAiForm({ ...aiForm, grade: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                    >
                                        <option value="Grade 9">Grade 9</option>
                                        <option value="Grade 10">Grade 10</option>
                                        <option value="Grade 11">Grade 11</option>
                                        <option value="Grade 12">Grade 12</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-slate-400 mb-1">Chapter / Topic</label>
                                    <input
                                        type="text"
                                        value={aiForm.chapter}
                                        onChange={(e) => setAiForm({ ...aiForm, chapter: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Question Type</label>
                                    <select
                                        value={aiForm.questionType}
                                        onChange={(e) => setAiForm({ ...aiForm, questionType: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                    >
                                        <option value="Multiple Choice (MCQ)">MCQ</option>
                                        <option value="Short Answer">Short Answer</option>
                                        <option value="Long Essay / Problem">Long Essay</option>
                                        <option value="Assertion & Reasoning">Assertion & Reason</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-1">Difficulty</label>
                                    <select
                                        value={aiForm.difficulty}
                                        onChange={(e) => setAiForm({ ...aiForm, difficulty: e.target.value })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-400 mb-1">Teacher Instructions / Concept Prompt</label>
                                <textarea
                                    rows={2}
                                    value={aiForm.customPrompt}
                                    onChange={(e) => setAiForm({ ...aiForm, customPrompt: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                />
                            </div>

                            {/* Generate Trigger */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    disabled={isAiGenerating}
                                    onClick={handleGenerateAiQuestions}
                                    className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white font-semibold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
                                >
                                    {isAiGenerating ? (
                                        <>
                                            <Icon name="refresh" className="w-4 h-4 animate-spin" />
                                            <span>Synthesizing Questions & Marking Rubric...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Icon name="sparkles" className="w-4 h-4" />
                                            <span>Generate AI Questions Preview</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* AI Generated Preview List */}
                            {aiGeneratedPreview && (
                                <div className="pt-4 border-t border-slate-800 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                            <span>✓ Ready for Ingestion ({aiGeneratedPreview.length} Questions)</span>
                                        </h4>
                                        <span className="text-[11px] text-slate-400">Review before importing</span>
                                    </div>

                                    <div className="space-y-2">
                                        {aiGeneratedPreview.map((item) => (
                                            <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <span className="font-mono text-slate-400 font-bold">{item.id}</span>
                                                    <span className="text-amber-400 font-bold">{item.marks} Marks</span>
                                                </div>
                                                <p className="text-slate-200">{item.questionText}</p>
                                                <div className="text-[11px] text-slate-500 mt-1">Ans: {item.correctAnswer}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleApproveAiQuestions}
                                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-emerald-600/30"
                                    >
                                        Import All into Question Bank
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 7: LMS SYNC ALERT (Flowchart: Other Module / LMS)   */}
            {/* "New Books Detected -> Do you want to delete/keep?"      */}
            {/* ======================================================== */}
            {activeModal === "lmsAlert" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                                <Icon name="alertTriangle" className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">LMS Curriculum Sync Conflict</h3>
                                <p className="text-xs text-rose-300">New Books Detected from School Academic Portal</p>
                            </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                            The LMS textbook integration detected an updated curriculum syllabus. <span className="text-rose-400 font-semibold">{lmsAffectedCount} questions</span> in your Question Bank belong to older editions or obsolete chapters.
                        </p>

                        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
                            <span className="text-slate-400 font-semibold block">Affected Items Sample:</span>
                            {questions.filter((q) => q.isLmsAffected).slice(0, 3).map((q) => (
                                <div key={q.id} className="text-slate-300 flex items-center justify-between border-b border-slate-800/60 pb-1.5">
                                    <span className="font-mono text-indigo-400">{q.id}</span>
                                    <span className="truncate max-w-[200px] text-slate-400">{q.bookReference}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
                            <strong>Recommendation:</strong> Retain questions if you wish to use them in mock / revision tests, or delete them to strictly enforce the new 2026 textbook edition.
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={() => handleLmsAction("keep")}
                                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                            >
                                Keep & Archive Old Questions
                            </button>
                            <button
                                onClick={() => handleLmsAction("delete")}
                                className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-rose-600/30"
                            >
                                Delete Deprecated Questions
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================================================== */}
            {/* MODAL 8: EXPORT QUESTION PAPER MODAL                     */}
            {/* ======================================================== */}
            {activeModal === "exportPaper" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
                        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                    <Icon name="download" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Generate & Export Examination Paper</h3>
                                    <p className="text-xs text-slate-400">Download formatted PDF / DOCX Question Paper</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Icon name="close" className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 text-xs">
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>Questions Included:</span>
                                    <span className="font-bold text-white">
                                        {selectedIds.length > 0 ? selectedIds.length : filteredQuestions.length} Items
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>Total Marks:</span>
                                    <span className="font-bold text-amber-400">
                                        {(selectedIds.length > 0
                                            ? questions.filter((q) => selectedIds.includes(q.id))
                                            : filteredQuestions
                                        ).reduce((acc, curr) => acc + (curr.marks || 1), 0)}{" "}
                                        Marks
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>School Header:</span>
                                    <span className="font-semibold text-slate-200">St. Peter's School Examination Board</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-slate-400 mb-1">Paper Title</label>
                                <input
                                    type="text"
                                    defaultValue="Annual Term Examination 2026 - Standard Assessment"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => {
                                        showToast("✓ Exam Paper PDF downloaded successfully!");
                                        setActiveModal(null);
                                    }}
                                    className="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                                >
                                    <Icon name="download" className="w-4 h-4" /> Download Printable PDF
                                </button>
                                <button
                                    onClick={() => {
                                        showToast("✓ Exported Question Paper to DOCX format.");
                                        setActiveModal(null);
                                    }}
                                    className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-semibold flex items-center justify-center gap-2"
                                >
                                    <Icon name="download" className="w-4 h-4" /> Export to Word (.docx)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
