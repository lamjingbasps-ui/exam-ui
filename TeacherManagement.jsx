import React, { useState, useMemo } from 'react';

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
    filter: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    user: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    mail: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    book: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    star: (
      <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    edit: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    trash: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    eye: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
    chart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    download: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    award: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    building: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V11m0 4h.01M12 7h.01M12 15h.01M16 11h.01M16 15h.01M8 11h.01M8 15h.01" />
      </svg>
    )
  };

  return icons[name] || null;
};

// ==========================================
// MOCK INITIAL DATASET
// ==========================================
const INITIAL_TEACHERS = [
  {
    id: "TCH-1001",
    name: "Dr. Evelyn Vance",
    designation: "Professor & HOD",
    department: "Computer Science",
    email: "evelyn.vance@university.edu",
    phone: "+1 (555) 234-5678",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    subjects: ["Artificial Intelligence", "Machine Learning", "Data Structures"],
    experienceYears: 14,
    rating: 4.9,
    status: "Active",
    payroll: "$92,000 / yr",
    qualification: "Ph.D. in Computer Science (MIT)",
    office: "Tech Wing - Rm 402",
    joinDate: "2015-08-15"
  },
  {
    id: "TCH-1002",
    name: "Prof. Marcus Thorne",
    designation: "Associate Professor",
    department: "Mathematics",
    email: "marcus.thorne@university.edu",
    phone: "+1 (555) 876-5432",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    subjects: ["Linear Algebra", "Calculus III", "Discrete Math"],
    experienceYears: 10,
    rating: 4.7,
    status: "Active",
    payroll: "$78,500 / yr",
    qualification: "Ph.D. in Applied Mathematics (Stanford)",
    office: "Science Bldg - Rm 214",
    joinDate: "2018-01-10"
  },
  {
    id: "TCH-1003",
    name: "Dr. Sarah Lin",
    designation: "Assistant Professor",
    department: "Physics",
    email: "sarah.lin@university.edu",
    phone: "+1 (555) 345-6789",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    subjects: ["Quantum Mechanics", "Electromagnetism", "Optics Lab"],
    experienceYears: 6,
    rating: 4.8,
    status: "Active",
    payroll: "$71,000 / yr",
    qualification: "Ph.D. in Theoretical Physics (Caltech)",
    office: "Physics Lab - Rm 108",
    joinDate: "2020-09-01"
  },
  {
    id: "TCH-1004",
    name: "Robert Sterling",
    designation: "Senior Lecturer",
    department: "English Literature",
    email: "robert.sterling@university.edu",
    phone: "+1 (555) 456-7890",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    subjects: ["Modern Poetry", "Shakespearean Studies", "Creative Writing"],
    experienceYears: 12,
    rating: 4.6,
    status: "On Leave",
    payroll: "$68,000 / yr",
    qualification: "M.A. in English Literature (Oxford)",
    office: "Humanities - Rm 305",
    joinDate: "2016-03-20"
  },
  {
    id: "TCH-1005",
    name: "Dr. Aris Thorne",
    designation: "Professor",
    department: "Chemistry",
    email: "aris.thorne@university.edu",
    phone: "+1 (555) 987-6543",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    subjects: ["Organic Chemistry", "Biochemistry", "Thermodynamics"],
    experienceYears: 16,
    rating: 4.9,
    status: "Active",
    payroll: "$89,500 / yr",
    qualification: "Ph.D. in Chemistry (Harvard)",
    office: "Chemistry Hall - Rm 112",
    joinDate: "2013-11-05"
  },
  {
    id: "TCH-1006",
    name: "Elena Rostova",
    designation: "Assistant Lecturer",
    department: "Art & Design",
    email: "elena.rostova@university.edu",
    phone: "+1 (555) 678-9012",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    subjects: ["UI/UX Design", "Digital Illustration", "Art History"],
    experienceYears: 4,
    rating: 4.8,
    status: "Active",
    payroll: "$62,000 / yr",
    qualification: "M.F.A. in Visual Arts (RISD)",
    office: "Design Studio - Rm 004",
    joinDate: "2022-07-15"
  },
  {
    id: "TCH-1007",
    name: "Dr. James O'Connor",
    designation: "Associate Professor",
    department: "History",
    email: "james.oconnor@university.edu",
    phone: "+1 (555) 789-0123",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    subjects: ["World History II", "European Civilizations", "Historiography"],
    experienceYears: 11,
    rating: 4.5,
    status: "Sabbatical",
    payroll: "$75,000 / yr",
    qualification: "Ph.D. in Modern History (Columbia)",
    office: "Humanities - Rm 210",
    joinDate: "2017-09-01"
  },
  {
    id: "TCH-1008",
    name: "Dr. Maya Patel",
    designation: "Assistant Professor",
    department: "Biology",
    email: "maya.patel@university.edu",
    phone: "+1 (555) 890-1234",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
    subjects: ["Genetics & Genomics", "Cell Biology", "Ecology"],
    experienceYears: 5,
    rating: 4.9,
    status: "Active",
    payroll: "$70,500 / yr",
    qualification: "Ph.D. in Molecular Biology (Johns Hopkins)",
    office: "Bio Complex - Rm 318",
    joinDate: "2021-02-14"
  }
];

const DEPARTMENTS = ["All", "Computer Science", "Mathematics", "Physics", "Chemistry", "English Literature", "Art & Design", "History", "Biology"];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function TeacherManagement() {
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table' | 'analytics'
  
  // Modals & Active Selections
  const [activeTeacher, setActiveTeacher] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Filter & Sort Logic
  const filteredTeachers = useMemo(() => {
    return teachers
      .filter(teacher => {
        const matchesSearch = 
          teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesDept = selectedDept === 'All' || teacher.department === selectedDept;
        const matchesStatus = selectedStatus === 'All' || teacher.status === selectedStatus;

        return matchesSearch && matchesDept && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
        if (sortBy === 'department') return a.department.localeCompare(b.department);
        return 0;
      });
  }, [teachers, searchTerm, selectedDept, selectedStatus, sortBy]);

  // Analytics Aggregates
  const stats = useMemo(() => {
    const total = teachers.length;
    const active = teachers.filter(t => t.status === 'Active').length;
    const leave = teachers.filter(t => t.status === 'On Leave').length;
    const avgRating = (teachers.reduce((acc, t) => acc + t.rating, 0) / (total || 1)).toFixed(2);
    return { total, active, leave, avgRating };
  }, [teachers]);

  // Handle Form Submission (Add / Edit)
  const handleSaveTeacher = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subjectsArray = formData.get('subjects').split(',').map(s => s.trim()).filter(Boolean);

    const teacherData = {
      id: editingTeacher ? editingTeacher.id : `TCH-${1000 + teachers.length + 1}`,
      name: formData.get('name'),
      designation: formData.get('designation'),
      department: formData.get('department'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      avatar: formData.get('avatar') || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
      subjects: subjectsArray.length > 0 ? subjectsArray : ['General Studies'],
      experienceYears: Number(formData.get('experienceYears')) || 1,
      rating: editingTeacher ? editingTeacher.rating : 4.8,
      status: formData.get('status'),
      payroll: formData.get('payroll') || '$70,000 / yr',
      qualification: formData.get('qualification'),
      office: formData.get('office'),
      joinDate: editingTeacher ? editingTeacher.joinDate : new Date().toISOString().split('T')[0]
    };

    if (editingTeacher) {
      setTeachers(prev => prev.map(t => t.id === editingTeacher.id ? teacherData : t));
      showToast(`Updated details for ${teacherData.name}`, 'info');
    } else {
      setTeachers(prev => [teacherData, ...prev]);
      showToast(`Successfully added ${teacherData.name} to faculty list!`, 'success');
    }

    setIsFormOpen(false);
    setEditingTeacher(null);
  };

  // Delete Teacher
  const handleDelete = (id) => {
    const teacherToDelete = teachers.find(t => t.id === id);
    setTeachers(prev => prev.filter(t => t.id !== id));
    setDeleteConfirmId(null);
    if (activeTeacher?.id === id) {
      setIsDetailOpen(false);
      setActiveTeacher(null);
    }
    showToast(`Removed ${teacherToDelete?.name || 'Teacher'} from system`, 'warning');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 selection:bg-indigo-500 selection:text-white">
      {/* ========================================== */}
      {/* TOAST NOTIFICATION CONTAINER */}
      {/* ========================================== */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl shadow-2xl backdrop-blur-md border flex items-center justify-between transition-all duration-300 transform translate-y-0 ${
              toast.type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' :
              toast.type === 'warning' ? 'bg-amber-950/90 border-amber-500/50 text-amber-200' :
              'bg-indigo-950/90 border-indigo-500/50 text-indigo-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`p-1.5 rounded-lg ${
                toast.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                toast.type === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                'bg-indigo-500/20 text-indigo-400'
              }`}>
                <Icon name={toast.type === 'warning' ? 'trash' : 'check'} className="w-4 h-4" />
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

      {/* ========================================== */}
      {/* HEADER SECTION */}
      {/* ========================================== */}
      <header className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 shadow-inner">
              <Icon name="building" className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                Teacher Management System
              </h1>
              <p className="text-sm text-slate-400">
                Manage academic staff roster, departments, workloads, and staff profiles.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const csvContent = "data:text/csv;charset=utf-8," 
                + ["ID,Name,Department,Email,Phone,Rating,Status"].join(",") + "\n"
                + teachers.map(t => `"${t.id}","${t.name}","${t.department}","${t.email}","${t.phone}",${t.rating},"${t.status}"`).join("\n");
              const encodedUri = encodeURI(csvContent);
              const link = document.createElement("a");
              link.setAttribute("href", encodedUri);
              link.setAttribute("download", "faculty_directory_export.csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              showToast("Faculty roster exported to CSV file", "info");
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium shadow-sm hover:shadow"
          >
            <Icon name="download" className="w-4 h-4" />
            Export Directory
          </button>

          <button
            onClick={() => {
              setEditingTeacher(null);
              setIsFormOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 transition-all text-sm font-semibold hover:scale-[1.02] active:scale-[0.98]"
          >
            <Icon name="plus" className="w-5 h-5" />
            Add New Teacher
          </button>
        </div>
      </header>

      {/* ========================================== */}
      {/* STATS OVERVIEW CARDS */}
      {/* ========================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Teachers</p>
            <h3 className="text-3xl font-extrabold mt-1 text-white">{stats.total}</h3>
            <span className="inline-block mt-2 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
              Across {DEPARTMENTS.length - 1} Depts
            </span>
          </div>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
            <Icon name="user" className="w-7 h-7" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Duty</p>
            <h3 className="text-3xl font-extrabold mt-1 text-emerald-400">{stats.active}</h3>
            <span className="inline-block mt-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              {((stats.active / (stats.total || 1)) * 100).toFixed(0)}% Faculty Present
            </span>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
            <Icon name="check" className="w-7 h-7" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Avg Performance</p>
            <div className="flex items-center gap-2 mt-1">
              <h3 className="text-3xl font-extrabold text-amber-400">{stats.avgRating}</h3>
              <span className="text-slate-400 text-sm">/ 5.0</span>
            </div>
            <span className="inline-block mt-2 text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
              ★ Student Reviews
            </span>
          </div>
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
            <Icon name="star" className="w-7 h-7" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">On Leave / Other</p>
            <h3 className="text-3xl font-extrabold mt-1 text-slate-300">{stats.leave}</h3>
            <span className="inline-block mt-2 text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
              Sabbatical / Leave
            </span>
          </div>
          <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400">
            <Icon name="calendar" className="w-7 h-7" />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FILTER & VIEW TOGGLE CONTROLS */}
      {/* ========================================== */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6 backdrop-blur-md shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search & Selectors */}
        <div className="flex flex-wrap items-center gap-3 flex-1">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by teacher name, subject, ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <Icon name="close" className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2">
            <Icon name="filter" className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
            >
              {DEPARTMENTS.map(dept => (
                <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active Only</option>
            <option value="On Leave">On Leave</option>
            <option value="Sabbatical">Sabbatical</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="experience">Sort by Experience</option>
            <option value="department">Sort by Dept</option>
          </select>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            title="Grid View"
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="grid" className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            title="Table View"
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'table'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="list" className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('analytics')}
            title="Analytics View"
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'analytics'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon name="chart" className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================== */}
      {/* MAIN VIEW CONTENT */}
      {/* ========================================== */}

      {/* NO RESULTS FALLBACK */}
      {filteredTeachers.length === 0 && viewMode !== 'analytics' && (
        <div className="py-16 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
          <div className="w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Icon name="search" className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-slate-200">No teachers found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-1">
            We couldn't find any staff matching your current search term or filter criteria.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedDept('All'); setSelectedStatus('All'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 1. GRID VIEW */}
      {viewMode === 'grid' && filteredTeachers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map(teacher => (
            <div
              key={teacher.id}
              className="group bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-5 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Top Bar / Status Badge */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                    teacher.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                    teacher.status === 'On Leave' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {teacher.status}
                  </span>

                  <div className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20 text-xs font-bold">
                    <Icon name="star" className="w-3.5 h-3.5" />
                    <span>{teacher.rating}</span>
                  </div>
                </div>

                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/70 transition-all"
                    />
                    <span className="absolute -bottom-1 -right-1 text-[10px] font-mono bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                      {teacher.id.split('-')[1]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-base text-slate-100 group-hover:text-indigo-300 transition-colors truncate">
                      {teacher.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-400 truncate">{teacher.designation}</p>
                    <p className="text-xs text-indigo-400 font-medium truncate mt-0.5">{teacher.department}</p>
                  </div>
                </div>

                {/* Subjects Tags */}
                <div className="space-y-2 mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Subjects</p>
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.subjects.map((sub, idx) => (
                      <span key={idx} className="bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-800/80">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-2">
                <span className="text-xs text-slate-400 font-medium">
                  <strong className="text-slate-200">{teacher.experienceYears} yrs</strong> Exp.
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => { setActiveTeacher(teacher); setIsDetailOpen(true); }}
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-300 hover:bg-slate-800 transition-all"
                    title="View Profile Details"
                  >
                    <Icon name="eye" className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setEditingTeacher(teacher); setIsFormOpen(true); }}
                    className="p-2 rounded-xl text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-all"
                    title="Edit Information"
                  >
                    <Icon name="edit" className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteConfirmId(teacher.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-all"
                    title="Delete Teacher"
                  >
                    <Icon name="trash" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. TABLE VIEW */}
      {viewMode === 'table' && filteredTeachers.length > 0 && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="p-4">Faculty Member</th>
                  <th className="p-4">Department & Designation</th>
                  <th className="p-4">Contact & Office</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {filteredTeachers.map(teacher => (
                  <tr key={teacher.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={teacher.avatar} alt="" className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-700" />
                        <div>
                          <p className="font-bold text-slate-100">{teacher.name}</p>
                          <p className="text-xs text-slate-400 font-mono">{teacher.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <p className="text-indigo-300 font-medium">{teacher.department}</p>
                      <p className="text-xs text-slate-400">{teacher.designation}</p>
                    </td>

                    <td className="p-4">
                      <p className="text-slate-300 text-xs">{teacher.email}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{teacher.office}</p>
                    </td>

                    <td className="p-4 font-medium text-slate-300">
                      {teacher.experienceYears} Years
                    </td>

                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-500/20">
                        <Icon name="star" className="w-3 h-3" />
                        {teacher.rating}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                        teacher.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                        teacher.status === 'On Leave' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                        'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {teacher.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => { setActiveTeacher(teacher); setIsDetailOpen(true); }}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600/30 hover:text-indigo-300 text-slate-400 transition-all"
                        >
                          <Icon name="eye" className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => { setEditingTeacher(teacher); setIsFormOpen(true); }}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-600/30 hover:text-amber-300 text-slate-400 transition-all"
                        >
                          <Icon name="edit" className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(teacher.id)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/30 hover:text-rose-400 text-slate-400 transition-all"
                        >
                          <Icon name="trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. ANALYTICS DASHBOARD VIEW */}
      {viewMode === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Department Roster Breakdown */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 mb-1">Department Staff Count</h3>
              <p className="text-xs text-slate-400 mb-6">Distribution of faculty members across departments</p>
              
              <div className="space-y-4">
                {DEPARTMENTS.filter(d => d !== 'All').map(dept => {
                  const count = teachers.filter(t => t.department === dept).length;
                  const percentage = ((count / (teachers.length || 1)) * 100).toFixed(0);
                  return (
                    <div key={dept}>
                      <div className="flex justify-between text-sm mb-1 font-medium">
                        <span className="text-slate-300">{dept}</span>
                        <span className="text-indigo-400">{count} staff ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience & Seniority Distribution */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-1">Seniority & Experience</h3>
                <p className="text-xs text-slate-400 mb-6">Faculty experience distribution tiers</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Senior Faculty (&gt;10 yrs)</p>
                    <p className="text-2xl font-bold text-indigo-400 mt-1">
                      {teachers.filter(t => t.experienceYears >= 10).length} Members
                    </p>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Junior Faculty (&lt;5 yrs)</p>
                    <p className="text-2xl font-bold text-emerald-400 mt-1">
                      {teachers.filter(t => t.experienceYears < 5).length} Members
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Summary Cards */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-indigo-200">
                  <Icon name="award" className="w-4 h-4 text-indigo-400" />
                  Academic Excellence Summary
                </div>
                <p>
                  Over 85% of staff members hold Ph.D. qualifications in their respective domains. Student evaluation satisfaction rate remains above 4.7/5.0.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 1: TEACHER PROFILE / DETAILS DRAWER */}
      {/* ========================================== */}
      {isDetailOpen && activeTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Background Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={activeTeacher.avatar}
                alt={activeTeacher.name}
                className="w-24 h-24 rounded-3xl object-cover ring-4 ring-indigo-500/30 shadow-xl"
              />
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-slate-100">{activeTeacher.name}</h2>
                  <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeTeacher.id}
                  </span>
                </div>
                <p className="text-sm font-semibold text-indigo-400">{activeTeacher.designation}</p>
                <p className="text-xs text-slate-400 mt-1">{activeTeacher.department} Department</p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 text-xs">
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800 px-3 py-1 rounded-lg">
                    <Icon name="mail" className="w-3.5 h-3.5 text-indigo-400" />
                    {activeTeacher.email}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 bg-slate-800 px-3 py-1 rounded-lg">
                    <Icon name="phone" className="w-3.5 h-3.5 text-emerald-400" />
                    {activeTeacher.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-500 uppercase font-semibold">Qualification</p>
                <p className="text-sm font-medium text-slate-200 mt-1">{activeTeacher.qualification}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-500 uppercase font-semibold">Office Location</p>
                <p className="text-sm font-medium text-slate-200 mt-1">{activeTeacher.office}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-500 uppercase font-semibold">Experience & Joining</p>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  {activeTeacher.experienceYears} Years (Joined {activeTeacher.joinDate})
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-500 uppercase font-semibold">Salary Tier</p>
                <p className="text-sm font-medium text-emerald-400 mt-1">{activeTeacher.payroll}</p>
              </div>
            </div>

            {/* Subjects Taught */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">
                Assigned Subjects & Courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeTeacher.subjects.map((sub, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-sm border border-slate-700 font-medium flex items-center gap-2">
                    <Icon name="book" className="w-3.5 h-3.5 text-indigo-400" />
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsDetailOpen(false);
                  setEditingTeacher(activeTeacher);
                  setIsFormOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center gap-2"
              >
                <Icon name="edit" className="w-4 h-4" />
                Edit Profile
              </button>
              <button
                onClick={() => setIsDetailOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 2: ADD / EDIT TEACHER FORM */}
      {/* ========================================== */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { setIsFormOpen(false); setEditingTeacher(null); }}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-slate-100 mb-1">
              {editingTeacher ? 'Edit Teacher Record' : 'Add New Teacher'}
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              {editingTeacher ? 'Update faculty credentials and details' : 'Fill in the information to add a new faculty member'}
            </p>

            <form onSubmit={handleSaveTeacher} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={editingTeacher?.name || ''}
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    required
                    defaultValue={editingTeacher?.designation || ''}
                    placeholder="e.g. Associate Professor"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Department */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Department</label>
                  <select
                    name="department"
                    defaultValue={editingTeacher?.department || 'Computer Science'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    {DEPARTMENTS.filter(d => d !== 'All').map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Status</label>
                  <select
                    name="status"
                    defaultValue={editingTeacher?.status || 'Active'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Sabbatical">Sabbatical</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    defaultValue={editingTeacher?.email || ''}
                    placeholder="e.g. jane.doe@university.edu"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={editingTeacher?.phone || ''}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Subjects (Comma separated) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Subjects Taught (comma separated)
                </label>
                <input
                  type="text"
                  name="subjects"
                  defaultValue={editingTeacher ? editingTeacher.subjects.join(', ') : ''}
                  placeholder="e.g. Calculus, Differential Equations"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Experience Years */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Experience (Yrs)</label>
                  <input
                    type="number"
                    name="experienceYears"
                    min="0"
                    max="50"
                    defaultValue={editingTeacher?.experienceYears || 5}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Qualification */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    defaultValue={editingTeacher?.qualification || ''}
                    placeholder="e.g. Ph.D. in Computer Science"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Office */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Office Room</label>
                  <input
                    type="text"
                    name="office"
                    defaultValue={editingTeacher?.office || ''}
                    placeholder="e.g. Tech Wing - Rm 302"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Payroll */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Payroll / Salary</label>
                  <input
                    type="text"
                    name="payroll"
                    defaultValue={editingTeacher?.payroll || ''}
                    placeholder="e.g. $75,000 / yr"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Avatar Image URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Avatar Image URL (Optional)</label>
                <input
                  type="url"
                  name="avatar"
                  defaultValue={editingTeacher?.avatar || ''}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800 mt-6">
                <button
                  type="button"
                  onClick={() => { setIsFormOpen(false); setEditingTeacher(null); }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25"
                >
                  {editingTeacher ? 'Save Changes' : 'Add Teacher'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 3: DELETE CONFIRMATION */}
      {/* ========================================== */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl text-center">
            <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="trash" className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Remove Teacher?</h3>
            <p className="text-sm text-slate-400 mt-2 mb-6">
              Are you sure you want to remove this faculty record? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-all shadow-lg shadow-rose-600/25"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
