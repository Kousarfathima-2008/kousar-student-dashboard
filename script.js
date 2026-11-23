/**
 * CAMPUS ONE — Dr. RVR NRI COLLEGE x NIAT Smart Student Portal
 * Clean, Neat & Modern Frontend Engine
 * Student: Kousar Fathima (Roll: 26000605)
 * First Year • 1st Semester
 * Academic Calendar: 2026–2027
 */

'use strict';

// ==========================================================================
// 1. DATA STORE
// ==========================================================================

const CampusData = {
  college: {
    name: "Dr. RVR NRI COLLEGE x NIAT",
    shortName: "Dr. RVR NRI COLLEGE x NIAT",
    academicCalendar: "2026–2027",
    department: "Department of Computer Science & Engineering"
  },

  student: {
    name: "Kousar Fathima",
    rollNumber: "26000605",
    id: "26000605",
    department: "Computer Science & Engineering",
    degree: "B.Tech Computer Science & Engineering",
    specialization: "AI & Software Systems",
    academicYear: "AY 2026–2027",
    year: "First Year",
    semester: "1st Semester",
    email: "kousarfathima2008@gmail.com",
    phone: "+91 98765 43210",
    dob: "13/08/2008",
    bloodGroup: "B+",
    hostel: "Dr. RVR NRI Campus Hostel, Wing B, Room 204",
    advisor: "Evelyn Reed",
    advisorEmail: "evelyn.reed@rvrnri.edu.in",
    cgpa: 9.00,
    totalCredits: 22,
    requiredCredits: 160,
    attendanceRate: 92.4,
    totalClassesConducted: 184,
    totalClassesAttended: 170,
    classesMissed: 14,
    dutyLeaves: 4
  },

  subjects: [
    {
      code: "CS-101",
      name: "Problem Solving & Python Programming",
      type: "core",
      credits: 4,
      faculty: "Evelyn Reed",
      facultyTitle: "Professor & Lab Director",
      facultyAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      room: "Lab 201, Ramanujan IT Block",
      syllabusProgress: 88,
      totalLectures: 34,
      attendedLectures: 32,
      attendance: 94.1,
      color: "primary",
      midtermMarks: 29,
      assignmentsMarks: 20,
      quizMarks: 19,
      internalTotal: 68,
      projectedGrade: "O",
      modules: [
        "Module 1: Algorithmic Thinking, Flowcharts & Python Syntax",
        "Module 2: Control Structures, Functions & Modular Programming",
        "Module 3: Compound Data Structures: Lists, Tuples, Sets, Dictionaries",
        "Module 4: Object-Oriented Programming (Classes, Inheritance, Polymorphism)",
        "Module 5: File I/O, Exception Handling & NumPy / Pandas Introduction"
      ]
    },
    {
      code: "MA-101",
      name: "Engineering Mathematics & Calculus",
      type: "core",
      credits: 4,
      faculty: "Marcus Chen",
      facultyTitle: "Associate Professor, Mathematics",
      facultyAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      room: "Hall B, Kalam Academic Wing",
      syllabusProgress: 82,
      totalLectures: 32,
      attendedLectures: 29,
      attendance: 90.6,
      color: "purple",
      midtermMarks: 28,
      assignmentsMarks: 18,
      quizMarks: 19,
      internalTotal: 65,
      projectedGrade: "A+",
      modules: [
        "Module 1: Differential Calculus, Mean Value Theorems & Taylor Series",
        "Module 2: Partial Derivatives, Maxima and Minima for Multi-Variables",
        "Module 3: Multiple Integrals & Surface / Volume Integrals",
        "Module 4: Linear Algebra, Matrices & Eigenvalues / Eigenvectors",
        "Module 5: First Order Differential Equations & Real-world Applications"
      ]
    },
    {
      code: "CS-102",
      name: "Digital Logic & Computer Organization",
      type: "core",
      credits: 4,
      faculty: "Sarah Jenkins",
      facultyTitle: "Associate Professor of Computing Systems",
      facultyAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      room: "Room 304, Cyber Lab",
      syllabusProgress: 90,
      totalLectures: 30,
      attendedLectures: 29,
      attendance: 96.6,
      color: "primary",
      midtermMarks: 27,
      assignmentsMarks: 19,
      quizMarks: 18,
      internalTotal: 64,
      projectedGrade: "A+",
      modules: [
        "Module 1: Number Systems, Boolean Algebra & Logic Gates",
        "Module 2: Combinational Logic Circuits, Karnaugh Maps & Quine-McCluskey",
        "Module 3: Sequential Logic: Flip-Flops, Counters & Shift Registers",
        "Module 4: ALU Design, Registers & Central Processing Unit Architecture",
        "Module 5: Memory Hierarchy, Cache Memory Organization & I/O Subsystems"
      ]
    },
    {
      code: "CS-103",
      name: "Data Structures & Algorithms Lab",
      type: "core",
      credits: 4,
      faculty: "David Kumar",
      facultyTitle: "Lead Faculty & Practicum Mentor",
      facultyAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      room: "Software Lab 3, Visvesvaraya Block",
      syllabusProgress: 85,
      totalLectures: 28,
      attendedLectures: 26,
      attendance: 92.8,
      color: "success",
      midtermMarks: 29,
      assignmentsMarks: 20,
      quizMarks: 19,
      internalTotal: 68,
      projectedGrade: "O",
      modules: [
        "Module 1: Asymptotic Analysis (Big-O, Omega, Theta) & Dynamic Arrays",
        "Module 2: Stacks, Queues & Circular Buffer Implementations",
        "Module 3: Singly, Doubly and Circular Linked Lists in C/C++",
        "Module 4: Trees, Binary Search Trees (BST), AVL Trees & Tree Traversals",
        "Module 5: Sorting, Searching Algorithms & Hash Tables with Collision Handling"
      ]
    },
    {
      code: "EE-101",
      name: "Basic Electrical & Electronics Engineering",
      type: "elective",
      credits: 3,
      faculty: "Elena Rostova",
      facultyTitle: "Senior Lecturer, Electrical Sciences",
      facultyAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      room: "Hall C, Hopper Center",
      syllabusProgress: 75,
      totalLectures: 30,
      attendedLectures: 27,
      attendance: 90.0,
      color: "warning",
      midtermMarks: 25,
      assignmentsMarks: 17,
      quizMarks: 16,
      internalTotal: 58,
      projectedGrade: "A",
      modules: [
        "Module 1: DC Circuit Analysis, Ohm's Law, Kirchhoff's Laws (KCL, KVL)",
        "Module 2: AC Fundamentals, Phasors, Single Phase & Three Phase Circuits",
        "Module 3: Semiconductor Physics, P-N Junction Diodes, Zener Regulators",
        "Module 4: Bipolar Junction Transistors (BJT) & Operational Amplifiers",
        "Module 5: Digital Sensors, Transducers & Basic Power Electronics"
      ]
    },
    {
      code: "EN-101",
      name: "Technical English & Communication",
      type: "elective",
      credits: 3,
      faculty: "Robert Taylor",
      facultyTitle: "Chair of Professional Communication",
      facultyAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      room: "Seminar Room 12, Humanities Wing",
      syllabusProgress: 80,
      totalLectures: 30,
      attendedLectures: 28,
      attendance: 93.3,
      color: "primary",
      midtermMarks: 27,
      assignmentsMarks: 18,
      quizMarks: 18,
      internalTotal: 63,
      projectedGrade: "A+",
      modules: [
        "Module 1: Technical Vocabulary, Grammar Essentials & Sentence Structure",
        "Module 2: Technical Writing: Research Abstracts, Executive Summaries & Reports",
        "Module 3: Professional Email Etiquette & Academic Documentation",
        "Module 4: Oral Communication, Presentation Skills & Group Discussions",
        "Module 5: Critical Reading, Comprehension & Technical Proposal Drafting"
      ]
    }
  ],

  assignments: [
    {
      id: "ASG-101",
      title: "Python Object-Oriented System for Student Registry",
      subjectCode: "CS-101",
      subject: "Problem Solving & Python Programming",
      subjectColor: "primary",
      deadline: "Tomorrow, 11:59 PM",
      deadlineBadge: "Due Tomorrow",
      urgency: "urgent",
      status: "pending",
      progress: 60,
      weightage: "15% of Grade",
      desc: "Develop an object-oriented Python application that manages student academic records with inheritance, file-based persistence, and input validation.",
      specifications: [
        "Implement classes: Person, Student, Course, and Transcript.",
        "Demonstrate encapsulation, method overriding, and custom exceptions.",
        "Include unit tests using pytest or unittest module.",
        "Provide a clean CLI or minimal graphical interface."
      ]
    },
    {
      id: "ASG-102",
      title: "Multivariable Calculus Optimization Models",
      subjectCode: "MA-101",
      subject: "Engineering Mathematics & Calculus",
      subjectColor: "purple",
      deadline: "Nov 28, 2026, 05:00 PM",
      deadlineBadge: "Due in 4 Days",
      urgency: "moderate",
      status: "in_progress",
      progress: 40,
      weightage: "20% of Grade",
      desc: "Solve constrained optimization problems using Lagrange multipliers and evaluate double and triple integrals with polar/spherical coordinate transforms.",
      specifications: [
        "Derive critical points and classify using Hessian matrix determinants.",
        "Solve practical engineering heat diffusion boundary value problems.",
        "Include step-by-step mathematical proofs with LaTeX or neat handwriting.",
        "Verify solutions with Python sympy / numpy scripts."
      ]
    },
    {
      id: "ASG-103",
      title: "Combinational Circuit Design & Karnaugh Maps",
      subjectCode: "CS-102",
      subject: "Digital Logic & Computer Organization",
      subjectColor: "primary",
      deadline: "Dec 02, 2026, 11:59 PM",
      deadlineBadge: "Due in 8 Days",
      urgency: "normal",
      status: "pending",
      progress: 20,
      weightage: "15% of Grade",
      desc: "Design a 4-bit Carry Look-Ahead Adder (CLA) and 7-segment display decoder using Karnaugh map minimization and simulate in Logisim / Proteus.",
      specifications: [
        "Simplify 5-variable Boolean expressions using K-maps.",
        "Construct circuit schematic in Logisim with timing diagrams.",
        "Submit simulation .circ file and formal report."
      ]
    },
    {
      id: "ASG-104",
      title: "Linked Lists & Binary Search Trees in C++",
      subjectCode: "CS-103",
      subject: "Data Structures & Algorithms Lab",
      subjectColor: "success",
      deadline: "Nov 20, 2026",
      deadlineBadge: "Completed",
      urgency: "completed",
      status: "submitted",
      progress: 100,
      weightage: "15% of Grade",
      grade: "Grade: 98/100 (O)",
      desc: "Implemented self-balancing AVL Tree routines in C++ with memory leak checks using Valgrind and benchmarked against standard library sets.",
      specifications: [
        "Recursive and iterative tree traversals (Inorder, Preorder, Postorder).",
        "O(log N) search, insertion, and deletion complexity verification."
      ]
    },
    {
      id: "ASG-105",
      title: "AC Circuit Analysis & Op-Amp Filters",
      subjectCode: "EE-101",
      subject: "Basic Electrical & Electronics",
      subjectColor: "warning",
      deadline: "Nov 15, 2026",
      deadlineBadge: "Completed",
      urgency: "completed",
      status: "submitted",
      progress: 100,
      weightage: "15% of Grade",
      grade: "Grade: 95/100 (A+)",
      desc: "Simulated low-pass and high-pass active RC filter circuits using LM741 operational amplifiers in LTspice and measured cut-off frequencies.",
      specifications: [
        "Bode plot frequency response analysis.",
        "Comparative experimental vs theoretical calculations."
      ]
    },
    {
      id: "ASG-106",
      title: "Technical Research Abstract & Oral Presentation",
      subjectCode: "EN-101",
      subject: "Technical English & Communication",
      subjectColor: "primary",
      deadline: "Nov 10, 2026",
      deadlineBadge: "Completed",
      urgency: "completed",
      status: "submitted",
      progress: 100,
      weightage: "15% of Grade",
      grade: "Grade: 94/100 (A+)",
      desc: "Authored a structured 500-word engineering abstract on AI in Autonomous Navigation and delivered an assessed 5-minute technical presentation.",
      specifications: [
        "Adherence to IEEE abstract writing guidelines.",
        "Slide deck with clear visual hierarchy and technical terminology."
      ]
    }
  ],

  timetable: {
    monday: [
      { code: "CS-101", title: "Problem Solving & Python", time: "09:00 - 10:30 AM", room: "Lab 201, Ramanujan IT Block", type: "Lecture", faculty: "Evelyn Reed", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", status: "completed" },
      { code: "MA-101", title: "Engineering Mathematics", time: "10:45 - 12:15 PM", room: "Hall B, Kalam Academic Wing", type: "Lecture", faculty: "Marcus Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", status: "completed" },
      { code: "LUNCH", title: "Campus Dining & Rest Hour", time: "12:15 - 01:15 PM", room: "College Cafeteria", type: "Break", faculty: "Student Amenities", avatar: "", status: "break" },
      { code: "CS-103", title: "Data Structures Practicum", time: "01:30 - 03:30 PM", room: "Software Lab 3, Visvesvaraya", type: "Lab Practicum", faculty: "David Kumar", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", status: "completed" }
    ],
    tuesday: [
      { code: "CS-102", title: "Digital Logic & Organization", time: "09:00 - 10:15 AM", room: "Room 304, Cyber Lab", type: "Lecture", faculty: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80", status: "completed" },
      { code: "CS-101", title: "Problem Solving & Python Lab", time: "10:30 - 12:00 PM", room: "Lab 201, Ramanujan IT Block", type: "Lecture & Lab", faculty: "Evelyn Reed", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", status: "in-progress" },
      { code: "LUNCH", title: "Campus Lunch & Study Hour", time: "12:00 - 01:00 PM", room: "Dining Hall C", type: "Break", faculty: "", avatar: "", status: "break" },
      { code: "EE-101", title: "Basic Electrical & Electronics", time: "01:15 - 02:45 PM", room: "Hall C, Hopper Center", type: "Lecture", faculty: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "EN-101", title: "Technical English & Comm", time: "03:00 - 04:30 PM", room: "Seminar 12, Humanities Wing", type: "Elective Lecture", faculty: "Robert Taylor", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80", status: "upcoming" }
    ],
    wednesday: [
      { code: "MA-101", title: "Calculus & Linear Algebra", time: "09:00 - 11:30 AM", room: "Hall B, Kalam Wing", type: "Lecture & Tutorial", faculty: "Marcus Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "CS-103", title: "Algorithms & Code Review", time: "11:45 - 01:00 PM", room: "Software Lab 3, Visvesvaraya", type: "Lab Session", faculty: "David Kumar", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "LUNCH", title: "Lunch Break", time: "01:00 - 02:00 PM", room: "College Cafeteria", type: "Break", faculty: "", avatar: "", status: "break" },
      { code: "CS-102", title: "Digital Logic Simulation", time: "02:15 - 03:45 PM", room: "Room 304, Cyber Lab", type: "Tutorial", faculty: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80", status: "upcoming" }
    ],
    thursday: [
      { code: "EE-101", title: "Circuits & Electronics Lab", time: "09:00 - 11:00 AM", room: "Electrical Lab 2, Hopper", type: "Lab", faculty: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "CS-101", title: "Python Advanced Paradigms", time: "11:15 - 12:45 PM", room: "Lab 201, Ramanujan Block", type: "Seminar", faculty: "Evelyn Reed", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "LUNCH", title: "Lunch Hour", time: "12:45 - 01:45 PM", room: "College Plaza", type: "Break", faculty: "", avatar: "", status: "break" },
      { code: "EN-101", title: "Professional Presentation Lab", time: "02:00 - 03:30 PM", room: "Seminar 12, Humanities", type: "Workshop", faculty: "Robert Taylor", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "MENTOR", title: "Faculty Mentorship Sync", time: "03:45 - 04:45 PM", room: "CSE Faculty Suite 210", type: "Advisory", faculty: "Evelyn Reed", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", status: "upcoming" }
    ],
    friday: [
      { code: "CS-101", title: "Data Structures in Python", time: "09:00 - 10:30 AM", room: "Lab 201, Ramanujan Block", type: "Lecture", faculty: "Evelyn Reed", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "MA-101", title: "Differential Equations Review", time: "10:45 - 12:15 PM", room: "Hall B, Kalam Wing", type: "Lecture", faculty: "Marcus Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", status: "upcoming" },
      { code: "LUNCH", title: "Friday Lunch", time: "12:15 - 01:30 PM", room: "College Cafeteria", type: "Break", faculty: "", avatar: "", status: "break" },
      { code: "CS-103", title: "Hands-on Coding Assessment", time: "01:30 - 04:00 PM", room: "Software Lab 3, Visvesvaraya", type: "Hands-on Lab", faculty: "David Kumar", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", status: "upcoming" }
    ],
    saturday: [
      { code: "ACM-WORK", title: "Dr. RVR NRI COLLEGE x NIAT Freshman Hackathon", time: "10:00 - 01:00 PM", room: "Innovation Incubator Hub", type: "Club Activity", faculty: "Student Chapter", avatar: "", status: "upcoming" },
      { code: "LIBRARY", title: "Central Digital Library Self Study", time: "02:00 - 04:00 PM", room: "Central Digital Library", type: "Research", faculty: "Self Study", avatar: "", status: "upcoming" }
    ]
  },

  notifications: [
    {
      id: "NT-1",
      title: "1st Semester Mid-Term Examination Hall Tickets Released",
      message: "Dr. RVR NRI COLLEGE x NIAT examination controller has released admit cards for AY 2026–2027. Verify your Roll No: 26000605 before Friday.",
      category: "exam",
      time: "2 hours ago",
      timestamp: "Today, 08:30 AM",
      unread: true,
      priority: "high",
      icon: "fa-solid fa-file-shield text-danger"
    },
    {
      id: "NT-2",
      title: "Python Assignment 1 Submission Due Tomorrow",
      message: "Problem Solving & Python Programming (CS-101) project submission is due tomorrow at 11:59 PM.",
      category: "academic",
      time: "4 hours ago",
      timestamp: "Today, 06:15 AM",
      unread: true,
      priority: "high",
      icon: "fa-solid fa-clock-rotate-left text-warning"
    },
    {
      id: "NT-3",
      title: "Dean's Honor List Distinction (9.0 Points)",
      message: "Congratulations Kousar! Your 9.0 Points Academic Distinction certificate has been verified and issued by Dr. RVR NRI COLLEGE x NIAT.",
      category: "academic",
      time: "Yesterday",
      timestamp: "Yesterday, 03:45 PM",
      unread: true,
      priority: "normal",
      icon: "fa-solid fa-award text-purple"
    },
    {
      id: "NT-4",
      title: "Attendance Milestone Achieved (92.4%)",
      message: "Your attendance across all 6 courses is well above the Dr. RVR NRI COLLEGE x NIAT 75% requirement. Keep up the great consistency!",
      category: "alert",
      time: "Yesterday",
      timestamp: "Yesterday, 11:20 AM",
      unread: true,
      priority: "normal",
      icon: "fa-solid fa-calendar-check text-success"
    },
    {
      id: "NT-5",
      title: "Annual Freshman Codefest Registration Open",
      message: "Registrations are now open for the Dr. RVR NRI COLLEGE x NIAT Annual Freshman Hackathon. 1st prize includes cash award and incubator mentorship.",
      category: "event",
      time: "2 days ago",
      timestamp: "Nov 22, 2026",
      unread: false,
      priority: "normal",
      icon: "fa-solid fa-laptop-code text-primary"
    },
    {
      id: "NT-6",
      title: "Campus Wi-Fi Infrastructure Upgrade",
      message: "Dr. RVR NRI COLLEGE x NIAT campus Wi-Fi access points will undergo scheduled bandwidth optimization this Saturday midnight.",
      category: "alert",
      time: "3 days ago",
      timestamp: "Nov 21, 2026",
      unread: false,
      priority: "low",
      icon: "fa-solid fa-wifi text-muted"
    }
  ],

  announcements: [
    {
      id: "ANN-1",
      title: "Freshman Academic Mentorship & Career Roadmap (AY 2026–2027)",
      category: "Academic Advisory",
      categoryColor: "primary",
      date: "Nov 23, 2026",
      author: "Dr. RVR NRI COLLEGE x NIAT Student Affairs",
      body: "Orientation talks for 1st-year Computer Science & Engineering students will be held in the College Main Auditorium on Thursday, 4:00 PM. Eligible students must carry their digital student ID card.",
      featured: true
    },
    {
      id: "ANN-2",
      title: "National Conference on Artificial Intelligence & Computing Systems",
      category: "Academic Conference",
      categoryColor: "purple",
      date: "Nov 21, 2026",
      author: "Dept. of Computer Science & Engineering",
      body: "Dr. RVR NRI COLLEGE x NIAT is hosting keynote talks by leading industry pioneers from AI labs. First-year research poster submissions are open until Dec 10, 2026.",
      featured: false
    },
    {
      id: "ANN-3",
      title: "1st Semester Mid-Term Examination Schedule (Official Circular)",
      category: "Registrar Circular",
      categoryColor: "danger",
      date: "Nov 19, 2026",
      author: "Controller of Examinations, Dr. RVR NRI COLLEGE x NIAT",
      body: "Midterm theory examinations for 1st Semester commence from December 12 to December 22, 2026. Hall tickets will be verified at classroom entry points via digital student ID cards.",
      featured: true
    },
    {
      id: "ANN-4",
      title: "Central Digital Library 24/7 Access Hours",
      category: "Campus Facilities",
      categoryColor: "success",
      date: "Nov 18, 2026",
      author: "Chief Librarian, Dr. RVR NRI COLLEGE x NIAT",
      body: "In preparation for midterm revisions, Floors 2 and 3 of the Central Digital Library will remain open 24 hours daily with high-speed internet and research workstations.",
      featured: false
    }
  ]
};

// ==========================================================================
// 2. CHART INSTANCES & THEME
// ==========================================================================

let dashboardAcademicChartInstance = null;
let monthlyAttendanceChartInstance = null;
let semesterProgressionChartInstance = null;
let gradeDistributionChartInstance = null;

function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    text: isDark ? '#94A3B8' : '#475569',
    grid: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    card: isDark ? '#131A2D' : '#FFFFFF'
  };
}

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouting();
  initSidebar();
  initTopBar();
  initCounters();
  initLiveCountdown();
  initAttendanceSimulator();
  renderDashboardWidgets();
  renderSubjectAttendanceList();
  renderAcademicMarksTable();
  renderTimetable('tuesday');
  renderTimetableMatrix();
  renderSubjectsGrid('all');
  renderAssignmentsGrid('all');
  renderNotificationsList('all');
  renderAnnouncementsGrid();
  initModals();
  initSearch();
  initCharts();
  initSettingsListeners();
});

// ==========================================================================
// 4. THEME CONTROLLER
// ==========================================================================

function initTheme() {
  const saved = localStorage.getItem('campusone_theme') || 'dark';
  applyTheme(saved);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      showToast(`Switched to ${next === 'dark' ? 'Clean Dark' : 'Royal Light'} mode`, 'info');
    });
  }

  const btnDark = document.getElementById('btnThemeDark');
  const btnLight = document.getElementById('btnThemeLight');
  if (btnDark && btnLight) {
    btnDark.onclick = () => { applyTheme('dark'); showToast('Theme: Dark', 'info'); };
    btnLight.onclick = () => { applyTheme('light'); showToast('Theme: Light', 'info'); };
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('campusone_theme', theme);

  const btnDark = document.getElementById('btnThemeDark');
  const btnLight = document.getElementById('btnThemeLight');
  if (btnDark && btnLight) {
    btnDark.classList.toggle('active', theme === 'dark');
    btnLight.classList.toggle('active', theme === 'light');
  }

  setTimeout(() => updateChartsTheme(), 100);
}

// ==========================================================================
// 5. VIEW ROUTER
// ==========================================================================

function initRouting() {
  window.addEventListener('hashchange', handleRoute);

  document.querySelectorAll('[data-view]').forEach(elem => {
    elem.addEventListener('click', () => {
      const target = elem.getAttribute('data-view');
      if (target) navigateTo(target);
    });
  });

  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'dashboard';
  navigateTo(hash);
}

function navigateTo(viewId) {
  const targetSection = document.getElementById(`view-${viewId}`) || document.getElementById('view-dashboard');
  const actualId = targetSection ? targetSection.id.replace('view-', '') : 'dashboard';

  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  if (targetSection) targetSection.classList.add('active');

  // Sidebar links active state
  document.querySelectorAll('.menu-link, .nav-link').forEach(link => {
    const v = link.getAttribute('data-view');
    link.classList.toggle('active', v === actualId);
  });

  if (window.location.hash !== `#${actualId}`) {
    history.pushState(null, null, `#${actualId}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileSidebar();

  if (actualId === 'dashboard') {
    initCounters();
    if (dashboardAcademicChartInstance) dashboardAcademicChartInstance.resize();
  } else if (actualId === 'attendance') {
    if (monthlyAttendanceChartInstance) monthlyAttendanceChartInstance.resize();
  } else if (actualId === 'academics') {
    if (semesterProgressionChartInstance) semesterProgressionChartInstance.resize();
    if (gradeDistributionChartInstance) gradeDistributionChartInstance.resize();
  }
}

// ==========================================================================
// 6. SIDEBAR CONTROLLER
// ==========================================================================

function initSidebar() {
  const collapseBtn = document.getElementById('sidebarCollapseBtn');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const backdrop = document.getElementById('sidebarBackdrop');
  const sidebar = document.getElementById('sidebar');

  if (collapseBtn) {
    collapseBtn.onclick = () => document.body.classList.toggle('sidebar-collapsed');
  }
  if (mobileBtn && sidebar) {
    mobileBtn.onclick = () => {
      sidebar.classList.add('mobile-open');
      if (backdrop) backdrop.classList.add('show');
    };
  }
  if (backdrop) backdrop.onclick = closeMobileSidebar;
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('show');
}

// ==========================================================================
// 7. TOPBAR GREETING & DROPDOWNS
// ==========================================================================

function initTopBar() {
  const greetingText = document.getElementById('greetingText');
  const hour = new Date().getHours();
  let greet = 'Good Morning';
  if (hour >= 12 && hour < 17) greet = 'Good Afternoon';
  else if (hour >= 17) greet = 'Good Evening';
  if (greetingText) greetingText.textContent = greet;

  // Notif Popover
  const notifBtn = document.getElementById('notifDropdownBtn');
  const notifPopover = document.getElementById('notifPopover');
  const markReadBtn = document.getElementById('markAllReadBtn');
  const notifWrapper = document.getElementById('notifWrapper');

  if (notifBtn && notifPopover) {
    notifBtn.onclick = (e) => {
      e.stopPropagation();
      notifPopover.classList.toggle('show');
      closeProfileMenu();
    };
  }
  if (markReadBtn) markReadBtn.onclick = markAllNotificationsAsRead;

  // Profile Menu
  const pillBtn = document.getElementById('profilePillBtn');
  const menuContainer = document.getElementById('profileMenuContainer');
  const menuDropdown = document.getElementById('profileDropdownMenu');

  if (pillBtn && menuDropdown) {
    pillBtn.onclick = (e) => {
      e.stopPropagation();
      menuDropdown.classList.toggle('show');
      if (notifPopover) notifPopover.classList.remove('show');
    };
  }

  document.addEventListener('click', (e) => {
    if (notifWrapper && !notifWrapper.contains(e.target)) {
      if (notifPopover) notifPopover.classList.remove('show');
    }
    if (menuContainer && !menuContainer.contains(e.target)) {
      closeProfileMenu();
    }
  });

  renderNotificationPopoverList();
}

function closeProfileMenu() {
  const menu = document.getElementById('profileDropdownMenu');
  if (menu) menu.classList.remove('show');
}

// ==========================================================================
// 8. COUNTERS & COUNTDOWN
// ==========================================================================

function initCounters() {
  document.querySelectorAll('.stat-num').forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target')) || 0;
    const decimals = parseInt(counter.getAttribute('data-decimals')) || 0;
    const duration = 1000;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = ease * target;
      counter.textContent = decimals > 0 ? val.toFixed(decimals) : Math.floor(val);
      if (progress < 1) requestAnimationFrame(step);
      else counter.textContent = decimals > 0 ? target.toFixed(decimals) : target;
    }
    requestAnimationFrame(step);
  });
}

function initLiveCountdown() {
  const el = document.getElementById('heroClassCountdown');
  if (!el) return;
  let sec = 42 * 60 + 15;
  setInterval(() => {
    if (sec > 0) {
      sec--;
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      el.textContent = `${m}m ${s < 10 ? '0' : ''}${s}s`;
    } else {
      el.textContent = "In Session";
    }
  }, 1000);
}

// ==========================================================================
// 9. ATTENDANCE SIMULATOR
// ==========================================================================

function initAttendanceSimulator() {
  const input = document.getElementById('calcAttendedInput');
  const minus = document.getElementById('calcMinusBtn');
  const plus = document.getElementById('calcPlusBtn');

  function update() {
    if (!input) return;
    let extra = parseInt(input.value) || 0;
    if (extra < 0) extra = 0;
    if (extra > 60) extra = 60;
    input.value = extra;

    const cond = CampusData.student.totalClassesConducted;
    const att = CampusData.student.totalClassesAttended;
    const pct = (((att + extra) / (cond + extra)) * 100).toFixed(1);

    const valEl = document.getElementById('projectedAttendanceVal');
    const bunkEl = document.getElementById('projectedBunksAllowed');

    if (valEl) valEl.textContent = `${pct}%`;
    const skips = Math.floor(((att + extra) / 0.75) - (cond + extra));
    if (bunkEl) bunkEl.textContent = `${Math.max(0, skips)} classes`;
  }

  if (minus && input) minus.onclick = () => { if (input.value > 0) input.value = parseInt(input.value) - 1; update(); };
  if (plus && input) plus.onclick = () => { input.value = parseInt(input.value) + 1; update(); };
  if (input) input.oninput = update;
  update();
}

// ==========================================================================
// 10. RENDERING DASHBOARD WIDGETS
// ==========================================================================

function renderDashboardWidgets() {
  // Today's classes
  const classesList = document.getElementById('todayClassesList');
  if (classesList) {
    const list = CampusData.timetable.tuesday;
    classesList.innerHTML = list.map(cls => {
      if (cls.status === 'break') {
        return `
          <div class="today-class-card" style="opacity: 0.65;">
            <div class="class-left-group">
              <span class="class-time-badge" style="color: var(--text-muted);">${cls.time}</span>
              <span class="class-title"><i class="fa-solid fa-mug-saucer text-warning"></i> ${cls.title} (${cls.room})</span>
            </div>
            <span class="pill pill-neutral">Break</span>
          </div>
        `;
      }
      const isActive = cls.status === 'in-progress';
      return `
        <div class="today-class-card ${isActive ? 'current-active' : ''}">
          <div class="class-left-group">
            <span class="class-time-badge">${cls.time}</span>
            <div>
              <div class="class-title">${cls.code}: ${cls.title}</div>
              <div class="class-meta-sub">
                <span><i class="fa-solid fa-location-dot"></i> ${cls.room}</span>
                <span>•</span>
                <span>${cls.faculty}</span>
              </div>
            </div>
          </div>
          <div>
            ${isActive 
              ? `<span class="pill pill-success"><span class="pulse-dot"></span> In Progress</span>`
              : cls.status === 'completed'
                ? `<span class="pill pill-neutral"><i class="fa-solid fa-check"></i> Attended</span>`
                : `<span class="pill pill-primary">Upcoming</span>`
            }
          </div>
        </div>
      `;
    }).join('');
  }

  // Mini assignments
  const assignList = document.getElementById('miniAssignmentsList');
  if (assignList) {
    const pending = CampusData.assignments.filter(a => a.status === 'pending' || a.status === 'in_progress').slice(0, 3);
    assignList.innerHTML = pending.map(a => `
      <div class="mini-assign-item">
        <div class="assign-top">
          <span class="assign-subject-tag text-${a.subjectColor}">${a.subjectCode}</span>
          <span class="assign-due-tag">${a.deadlineBadge}</span>
        </div>
        <div class="assign-title-text">${a.title}</div>
        <div class="assign-bottom-actions">
          <div class="assign-progress-wrap">
            <div class="stat-bar" style="margin-bottom:0;">
              <div class="stat-bar-fill bg-primary" style="width: ${a.progress}%;"></div>
            </div>
          </div>
          <button class="assign-submit-btn-mini" onclick="openSubmitAssignmentModal('${a.id}')">Submit</button>
        </div>
      </div>
    `).join('');
  }

  // Mini bulletins
  const bullList = document.getElementById('miniAnnouncementsList');
  if (bullList) {
    bullList.innerHTML = CampusData.announcements.slice(0, 2).map(b => `
      <div class="mini-bulletin-item">
        <h5>${b.title}</h5>
        <p>${b.body.slice(0, 85)}...</p>
      </div>
    `).join('');
  }

  const heroSubBtn = document.getElementById('heroSubmitBtn');
  if (heroSubBtn) heroSubBtn.onclick = () => openSubmitAssignmentModal('ASG-101');

  const heroSchBtn = document.getElementById('heroViewScheduleBtn');
  if (heroSchBtn) heroSchBtn.onclick = () => navigateTo('timetable');
}

// ==========================================================================
// 11. ATTENDANCE & ACADEMICS
// ==========================================================================

function renderSubjectAttendanceList() {
  const container = document.getElementById('subjectAttendanceList');
  if (!container) return;

  container.innerHTML = CampusData.subjects.map(s => `
    <div class="sub-att-card">
      <div class="sub-att-header">
        <div>
          <span class="sub-att-code">${s.code}</span>
          <span class="sub-att-name">${s.name}</span>
        </div>
        <span class="sub-att-pct text-success">${s.attendance.toFixed(1)}%</span>
      </div>
      <div class="sub-att-progress-track">
        <div class="sub-att-progress-fill bg-success" style="width: ${s.attendance}%;"></div>
      </div>
      <div class="sub-att-footer">
        <span>${s.attendedLectures} / ${s.totalLectures} Lectures Attended</span>
        <span class="pill pill-success">Safe</span>
      </div>
    </div>
  `).join('');
}

function renderAcademicMarksTable(query = '') {
  const tbody = document.getElementById('academicMarksTableBody');
  if (!tbody) return;

  const filtered = CampusData.subjects.filter(s => {
    if (!query) return true;
    const q = query.toLowerCase();
    return s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-4 text-muted">No matching courses found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td class="font-mono text-primary font-bold">${s.code}</td>
      <td class="font-bold">${s.name}</td>
      <td><strong>${s.credits}</strong></td>
      <td>${s.midtermMarks} / 30</td>
      <td>${s.assignmentsMarks} / 20</td>
      <td>${s.quizMarks} / 20</td>
      <td><strong class="text-primary">${s.internalTotal} / 70</strong></td>
      <td><span class="pill ${s.projectedGrade === 'O' ? 'pill-purple' : 'pill-success'}">${s.projectedGrade}</span></td>
      <td><span class="pill pill-success"><i class="fa-solid fa-check"></i> Eligible</span></td>
    </tr>
  `).join('');

  const searchInput = document.getElementById('marksTableSearch');
  if (searchInput && !searchInput.dataset.init) {
    searchInput.dataset.init = 'true';
    searchInput.oninput = (e) => renderAcademicMarksTable(e.target.value);
  }
}

// ==========================================================================
// 12. TIMETABLE
// ==========================================================================

function renderTimetable(day = 'tuesday') {
  const timeline = document.getElementById('timetableTimeline');
  if (!timeline) return;

  const schedule = CampusData.timetable[day] || [];
  if (schedule.length === 0) {
    timeline.innerHTML = `<div class="panel-card text-center py-4 text-muted">No scheduled classes for this day.</div>`;
    return;
  }

  timeline.innerHTML = schedule.map(slot => {
    if (slot.status === 'break') {
      return `
        <div class="timetable-slot-card" style="opacity: 0.65;">
          <div><span class="slot-time-range">${slot.time}</span></div>
          <div>
            <h4 class="slot-subject-title"><i class="fa-solid fa-utensils text-warning"></i> ${slot.title}</h4>
            <span class="slot-details-row">${slot.room}</span>
          </div>
          <div><span class="pill pill-warning">Break Hour</span></div>
        </div>
      `;
    }
    const isInProg = slot.status === 'in-progress';
    const isDone = slot.status === 'completed';
    return `
      <div class="timetable-slot-card ${isInProg ? 'in-progress' : ''}">
        <div>
          <span class="slot-time-range">${slot.time}</span>
          <span class="slot-duration">90 Minutes</span>
        </div>
        <div>
          <h4 class="slot-subject-title">${slot.code}: ${slot.title} <span class="pill pill-neutral">${slot.type}</span></h4>
          <div class="slot-details-row">
            <span><i class="fa-solid fa-location-dot"></i> ${slot.room}</span>
            <span>•</span>
            <span>${slot.faculty}</span>
          </div>
        </div>
        <div>
          ${isInProg
            ? `<button class="btn btn-sm btn-primary" onclick="showToast('Connecting to Smart Classroom...', 'info')">Join Session</button>`
            : isDone 
              ? `<span class="pill pill-neutral"><i class="fa-solid fa-check"></i> Attended</span>`
              : `<button class="btn btn-sm btn-secondary" onclick="openSubjectSyllabusModal('${slot.code}')">Curriculum</button>`
          }
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('#timetableDayTabs .day-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-day') === day);
    btn.onclick = () => renderTimetable(btn.getAttribute('data-day'));
  });

  const dayBtn = document.getElementById('viewModeDayBtn');
  const gridBtn = document.getElementById('viewModeGridBtn');
  const dayView = document.getElementById('timetableDayView');
  const gridView = document.getElementById('timetableGridView');

  if (dayBtn && gridBtn) {
    dayBtn.onclick = () => {
      dayBtn.classList.add('active'); gridBtn.classList.remove('active');
      dayView.classList.remove('hidden'); gridView.classList.add('hidden');
    };
    gridBtn.onclick = () => {
      gridBtn.classList.add('active'); dayBtn.classList.remove('active');
      dayView.classList.add('hidden'); gridView.classList.remove('hidden');
    };
  }
}

function renderTimetableMatrix() {
  const tbody = document.getElementById('timetableMatrixBody');
  if (!tbody) return;

  const slots = [
    { time: "09:00 - 10:30 AM", mon: "CS-101", tue: "CS-102", wed: "MA-101", thu: "EE-101", fri: "CS-101", sat: "ACM" },
    { time: "10:45 - 12:15 PM", mon: "MA-101", tue: "CS-101", wed: "CS-103", thu: "CS-101", fri: "MA-101", sat: "Hackathon" },
    { time: "01:30 - 03:00 PM", mon: "CS-103", tue: "EE-101", wed: "CS-102", thu: "EN-101", fri: "CS-103", sat: "Library" },
    { time: "03:15 - 04:45 PM", mon: "Self Study", tue: "EN-101", wed: "Tutorial", thu: "Mentorship", fri: "Coding Club", sat: "Self Study" }
  ];

  tbody.innerHTML = slots.map((s, idx) => `
    <tr>
      <td class="font-mono text-primary font-bold text-center">${s.time}</td>
      <td><div class="matrix-cell-card"><span class="matrix-code">${s.mon}</span><span class="matrix-title">Ramanujan Block</span><span class="matrix-room">Lab 201</span></div></td>
      <td class="col-active"><div class="matrix-cell-card"><span class="matrix-code">${s.tue}</span><span class="matrix-title">${idx === 1 ? 'Python Lab' : 'Cyber Lab'}</span><span class="matrix-room">Lab 201</span></div></td>
      <td><div class="matrix-cell-card"><span class="matrix-code">${s.wed}</span><span class="matrix-title">Kalam Wing</span><span class="matrix-room">Hall B</span></div></td>
      <td><div class="matrix-cell-card"><span class="matrix-code">${s.thu}</span><span class="matrix-title">Hopper Center</span><span class="matrix-room">Elect. Lab</span></div></td>
      <td><div class="matrix-cell-card"><span class="matrix-code">${s.fri}</span><span class="matrix-title">Visvesvaraya</span><span class="matrix-room">Soft. Lab 3</span></div></td>
      <td><div class="matrix-cell-card" style="border-left-color: var(--warning);"><span class="matrix-code">${s.sat}</span><span class="matrix-title">Incubator Hub</span><span class="matrix-room">Hackathon</span></div></td>
    </tr>
  `).join('');
}

// ==========================================================================
// 13. SUBJECTS & ASSIGNMENTS
// ==========================================================================

function renderSubjectsGrid(filter = 'all') {
  const container = document.getElementById('subjectsGrid');
  if (!container) return;

  const filtered = CampusData.subjects.filter(s => filter === 'all' || s.type === filter);
  container.innerHTML = filtered.map(s => `
    <div class="subject-card">
      <div>
        <div class="subject-card-top">
          <span class="subject-code-tag">${s.code}</span>
          <span class="pill pill-neutral">${s.credits} Credits</span>
        </div>
        <h3 class="subject-name">${s.name}</h3>
        <div class="subject-prof-row">
          <img src="${s.facultyAvatar}" alt="${s.faculty}" class="subject-prof-avatar">
          <span class="subject-prof-name">${s.faculty} (${s.room})</span>
        </div>
      </div>
      <div>
        <div class="subject-progress-section">
          <div class="subject-progress-meta">
            <span>Syllabus Covered</span>
            <strong>${s.syllabusProgress}%</strong>
          </div>
          <div class="stat-bar" style="margin-bottom:0;">
            <div class="stat-bar-fill bg-primary" style="width: ${s.syllabusProgress}%;"></div>
          </div>
        </div>
        <div class="subject-card-footer">
          <span class="pill pill-success">${s.attendance.toFixed(1)}% Attended</span>
          <button class="btn btn-sm btn-secondary" onclick="openSubjectSyllabusModal('${s.code}')">Curriculum &rarr;</button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.subject-filter-pills .filter-pill').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.subject-filter-pills .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSubjectsGrid(btn.getAttribute('data-filter'));
    };
  });
}

function renderAssignmentsGrid(filter = 'all') {
  const container = document.getElementById('assignmentsGrid');
  if (!container) return;

  const filtered = CampusData.assignments.filter(a => filter === 'all' || a.status === filter);
  if (filtered.length === 0) {
    container.innerHTML = `<div class="panel-card text-center py-4 text-muted" style="grid-column: span 2;">No assignments in this filter.</div>`;
    return;
  }

  container.innerHTML = filtered.map(a => {
    const isSub = a.status === 'submitted';
    return `
      <div class="assignment-card">
        <div>
          <div class="assignment-card-header">
            <span class="pill pill-${a.subjectColor}">${a.subjectCode}</span>
            <span class="pill ${isSub ? 'pill-success' : 'pill-warning'}">${a.deadlineBadge}</span>
          </div>
          <h3 class="assignment-title">${a.title}</h3>
          <p class="assignment-desc">${a.desc}</p>
        </div>
        <div>
          <div class="assignment-metrics-row">
            <span>Deadline: <strong>${a.deadline}</strong></span>
            <span>Weight: <strong>${a.weightage}</strong></span>
          </div>
          <div class="assignment-card-actions">
            <button class="btn btn-sm btn-secondary" onclick="openAssignmentDetailsModal('${a.id}')">View Details</button>
            ${isSub 
              ? `<span class="pill pill-success">${a.grade || 'Submitted'}</span>`
              : `<button class="btn btn-sm btn-primary" onclick="openSubmitAssignmentModal('${a.id}')">Submit</button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.assignment-filter-tabs .filter-tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.assignment-filter-tabs .filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAssignmentsGrid(btn.getAttribute('data-filter'));
    };
  });
}

// ==========================================================================
// 14. NOTIFICATIONS & BULLETINS
// ==========================================================================

function renderNotificationPopoverList() {
  const list = document.getElementById('notifPopoverList');
  if (!list) return;

  const unread = CampusData.notifications.filter(n => n.unread);
  if (unread.length === 0) {
    list.innerHTML = `<div class="p-3 text-center text-muted" style="padding:1.5rem;">All caught up! No unread notifications.</div>`;
    return;
  }

  list.innerHTML = unread.slice(0, 4).map(n => `
    <div class="notif-popover-item" onclick="openNotificationDetail('${n.id}')">
      <div>
        <div class="notif-item-title">${n.title}</div>
        <div class="notif-item-snippet">${n.message.slice(0, 65)}...</div>
        <span class="notif-item-time">${n.time}</span>
      </div>
    </div>
  `).join('');

  updateNotifBadges();
}

function renderNotificationsList(cat = 'all') {
  const container = document.getElementById('fullNotificationsList');
  if (!container) return;

  const filtered = CampusData.notifications.filter(n => cat === 'all' || n.category === cat);
  if (filtered.length === 0) {
    container.innerHTML = `<div class="panel-card text-center py-4 text-muted">No notifications in this category.</div>`;
    return;
  }

  container.innerHTML = filtered.map(n => `
    <div class="notif-card-full ${n.unread ? 'unread' : ''}" id="notif-card-${n.id}">
      <div class="notif-full-icon"><i class="${n.icon}"></i></div>
      <div class="notif-full-content">
        <div class="notif-full-top">
          <h4 class="notif-full-title">${n.title}</h4>
          <span class="pill ${n.priority === 'high' ? 'pill-danger' : 'pill-neutral'}">${n.priority.toUpperCase()}</span>
        </div>
        <p class="notif-full-desc">${n.message}</p>
        <div class="notif-full-footer">
          <span><i class="fa-regular fa-clock"></i> ${n.timestamp}</span>
          ${n.unread ? `<button class="text-btn" onclick="markSingleNotifAsRead('${n.id}')">Mark as read</button>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.notif-filter-chips .chip-filter').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('.notif-filter-chips .chip-filter').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderNotificationsList(chip.getAttribute('data-type'));
    };
  });

  const markAllBtn = document.getElementById('markAllNotificationsPageBtn');
  if (markAllBtn) markAllBtn.onclick = markAllNotificationsAsRead;
}

function updateNotifBadges() {
  const count = CampusData.notifications.filter(n => n.unread).length;
  const topBadge = document.getElementById('topbarNotifBadge');
  const sideCount = document.getElementById('sidebarNotifCount');
  if (topBadge) {
    topBadge.textContent = count;
    topBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (sideCount) {
    sideCount.textContent = count;
    sideCount.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

function markAllNotificationsAsRead() {
  CampusData.notifications.forEach(n => n.unread = false);
  renderNotificationPopoverList();
  renderNotificationsList('all');
  updateNotifBadges();
  showToast('All notifications marked as read', 'success');
}

function markSingleNotifAsRead(id) {
  const n = CampusData.notifications.find(item => item.id === id);
  if (n) {
    n.unread = false;
    renderNotificationPopoverList();
    renderNotificationsList('all');
    updateNotifBadges();
  }
}

function openNotificationDetail(id) {
  markSingleNotifAsRead(id);
  navigateTo('notifications');
}

function renderAnnouncementsGrid() {
  const container = document.getElementById('announcementsGrid');
  if (!container) return;

  container.innerHTML = CampusData.announcements.map(a => `
    <div class="announcement-card">
      <div>
        <div class="announcement-top-bar">
          <span class="pill pill-${a.categoryColor}">${a.category}</span>
          <span class="text-muted" style="font-size:0.75rem;">${a.date}</span>
        </div>
        <h3 class="announcement-title">${a.title}</h3>
        <p class="announcement-text">${a.body}</p>
      </div>
      <div class="announcement-meta-footer">
        <span><i class="fa-solid fa-bullhorn text-primary"></i> ${a.author}</span>
        <button class="btn btn-sm btn-secondary" onclick="showToast('Circular downloaded to device', 'success')">Download PDF</button>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 15. MODALS ENGINE
// ==========================================================================

let activeAssignmentId = null;
let stagedFiles = [];

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(b => {
    b.onclick = () => closeModal(b.getAttribute('data-close-modal'));
  });

  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.onclick = (e) => { if (e.target === bd) closeModal(bd.id); };
  });

  const browseBtn = document.getElementById('dropzoneBrowseBtn');
  const fileInput = document.getElementById('modalFileInput');
  if (browseBtn && fileInput) browseBtn.onclick = () => fileInput.click();
  if (fileInput) fileInput.onchange = (e) => handleFilesSelected(e.target.files);

  const dropzone = document.getElementById('modalDropzone');
  if (dropzone) {
    dropzone.ondragover = (e) => { e.preventDefault(); dropzone.style.borderColor = 'var(--primary)'; };
    dropzone.ondragleave = () => { dropzone.style.borderColor = ''; };
    dropzone.ondrop = (e) => {
      e.preventDefault();
      dropzone.style.borderColor = '';
      handleFilesSelected(e.dataTransfer.files);
    };
  }

  const confirmSubBtn = document.getElementById('confirmSubmitAssignmentBtn');
  if (confirmSubBtn) confirmSubBtn.onclick = handleAssignmentSubmission;

  // Digital ID Card
  const openIdBtn = document.getElementById('openDigitalIdModalBtn');
  if (openIdBtn) openIdBtn.onclick = () => openModal('digitalIdModal');
  const printIdBtn = document.getElementById('printIdCardBtn');
  if (printIdBtn) printIdBtn.onclick = () => window.print();

  // Transcript
  const openTransBtn = document.getElementById('openTranscriptModalBtn');
  const profTransBtn = document.getElementById('profileDownloadTranscriptBtn');
  if (openTransBtn) openTransBtn.onclick = () => openModal('transcriptModal');
  if (profTransBtn) profTransBtn.onclick = () => openModal('transcriptModal');
  const printTransBtn = document.getElementById('printTranscriptBtn');
  if (printTransBtn) printTransBtn.onclick = () => window.print();

  // Logout
  const logBtn = document.getElementById('logoutBtn');
  const qLogBtn = document.getElementById('quickLogoutBtn');
  if (logBtn) logBtn.onclick = () => openModal('logoutModal');
  if (qLogBtn) qLogBtn.onclick = () => openModal('logoutModal');
  const confirmLogBtn = document.getElementById('confirmLogoutActionBtn');
  if (confirmLogBtn) {
    confirmLogBtn.onclick = () => {
      closeModal('logoutModal');
      showToast('Signed out successfully', 'info');
      setTimeout(() => location.reload(), 1200);
    };
  }

  const reportBtn = document.getElementById('downloadAttendanceReportBtn');
  if (reportBtn) reportBtn.onclick = () => showToast('Official Attendance Report downloaded', 'success');

  const helpBtn = document.getElementById('footerHelpBtn');
  if (helpBtn) helpBtn.onclick = () => showToast('Help Desk: helpdesk@rvrnri.edu.in', 'info');
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('show'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('show'); document.body.style.overflow = ''; }
}

function openSubmitAssignmentModal(id) {
  activeAssignmentId = id;
  const a = CampusData.assignments.find(item => item.id === id) || CampusData.assignments[0];

  const tag = document.getElementById('submitModalSubjectTag');
  const title = document.getElementById('submitModalTitle');
  const dead = document.getElementById('submitModalDeadline');
  const w = document.getElementById('submitModalWeight');
  const d = document.getElementById('submitModalDesc');

  if (tag) tag.textContent = `${a.subjectCode} • ${a.subject}`;
  if (title) title.textContent = `Submit: ${a.title}`;
  if (dead) dead.textContent = a.deadline;
  if (w) w.textContent = a.weightage;
  if (d) d.textContent = a.desc;

  stagedFiles = [{ name: `kousar_26000605_${a.subjectCode.toLowerCase()}_solution.zip`, size: "12.4 MB" }];
  renderStaged();
  openModal('assignmentSubmitModal');
}

function handleFilesSelected(files) {
  for (let i = 0; i < files.length; i++) {
    stagedFiles.push({ name: files[i].name, size: `${(files[i].size / (1024 * 1024)).toFixed(1)} MB` });
  }
  renderStaged();
  showToast(`Added ${files.length} file(s)`, 'info');
}

function renderStaged() {
  const el = document.getElementById('stagedFilesList');
  if (!el) return;
  el.innerHTML = stagedFiles.map((f, i) => `
    <div class="staged-file-item">
      <span><i class="fa-regular fa-file-zipper text-primary"></i> <strong>${f.name}</strong> (${f.size})</span>
      <button class="text-danger" onclick="removeStaged(${i})"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
}

window.removeStaged = function(idx) {
  stagedFiles.splice(idx, 1);
  renderStaged();
};

function handleAssignmentSubmission() {
  if (stagedFiles.length === 0) {
    showToast('Please attach at least one solution file', 'warning');
    return;
  }
  const a = CampusData.assignments.find(item => item.id === activeAssignmentId);
  if (a) {
    a.status = 'submitted';
    a.progress = 100;
    a.deadlineBadge = 'Submitted';
    a.grade = 'Under Evaluation';
  }

  const stat = document.getElementById('statAssignments');
  if (stat) stat.textContent = CampusData.assignments.filter(x => x.status === 'submitted').length;

  renderAssignmentsGrid('all');
  renderDashboardWidgets();
  closeModal('assignmentSubmitModal');
  showToast('Assignment submitted successfully!', 'success');
}

window.openAssignmentDetailsModal = function(id) {
  const a = CampusData.assignments.find(item => item.id === id);
  if (!a) return;

  const tag = document.getElementById('detailModalSubjectTag');
  const title = document.getElementById('detailModalTitle');
  const body = document.getElementById('detailModalBody');
  const btn = document.getElementById('detailModalActionSubmitBtn');

  if (tag) tag.textContent = `${a.subjectCode} • ${a.subject}`;
  if (title) title.textContent = a.title;
  if (body) {
    body.innerHTML = `
      <div class="modal-info-box mb-3">
        <p>${a.desc}</p>
        <div class="info-flex-row mt-2">
          <span><strong>Deadline:</strong> ${a.deadline}</span>
          <span><strong>Weight:</strong> ${a.weightage}</span>
        </div>
      </div>
      <h4 class="font-bold mb-2 text-primary">Requirements &amp; Rubric:</h4>
      <ul style="padding-left:1.25rem; font-size:0.84rem; line-height:1.7; color:var(--text-secondary);" class="mb-3">
        ${a.specifications.map(s => `<li>${s}</li>`).join('')}
      </ul>
      <button class="btn btn-sm btn-secondary" onclick="showToast('Starter files downloaded', 'success')">
        <i class="fa-solid fa-download"></i> Download StarterKit.zip
      </button>
    `;
  }
  if (btn) {
    btn.style.display = a.status === 'submitted' ? 'none' : 'inline-flex';
    btn.onclick = () => { closeModal('assignmentDetailsModal'); openSubmitAssignmentModal(a.id); };
  }
  openModal('assignmentDetailsModal');
};

window.openSubjectSyllabusModal = function(code) {
  const s = CampusData.subjects.find(sub => sub.code === code) || CampusData.subjects[0];
  const codeEl = document.getElementById('syllabusModalCode');
  const titleEl = document.getElementById('syllabusModalTitle');
  const body = document.getElementById('syllabusModalBody');

  if (codeEl) codeEl.textContent = `${s.code} • ${s.credits} Credits`;
  if (titleEl) titleEl.textContent = s.name;
  if (body) {
    body.innerHTML = `
      <p class="text-secondary mb-3">Faculty: <strong>${s.faculty}</strong> (${s.facultyTitle}) • Classroom: <strong>${s.room}</strong></p>
      <h4 class="font-bold mb-2 text-primary">Course Modules:</h4>
      <div class="d-flex flex-column gap-2">
        ${s.modules.map(m => `
          <div class="p-2 border rounded mb-2" style="padding:0.6rem; border:1px solid var(--border-color); border-radius:var(--radius-xs); font-size:0.82rem;">
            <i class="fa-solid fa-check text-success"></i> ${m}
          </div>
        `).join('')}
      </div>
    `;
  }
  openModal('subjectSyllabusModal');
};

// ==========================================================================
// 16. SEARCH & SETTINGS
// ==========================================================================

function initSearch() {
  const input = document.getElementById('globalSearchInput');
  const dropdown = document.getElementById('searchResultsDropdown');
  const list = document.getElementById('searchResultsList');
  if (!input || !dropdown || !list) return;

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
      dropdown.classList.add('show');
    }
    if (e.key === 'Escape') dropdown.classList.remove('show');
  });

  input.oninput = (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (!val) { dropdown.classList.remove('show'); return; }

    const matches = [];
    CampusData.subjects.forEach(s => {
      if (s.name.toLowerCase().includes(val) || s.code.toLowerCase().includes(val)) {
        matches.push({ title: `${s.code}: ${s.name}`, sub: s.faculty, action: () => { navigateTo('subjects'); openSubjectSyllabusModal(s.code); } });
      }
    });
    CampusData.assignments.forEach(a => {
      if (a.title.toLowerCase().includes(val)) {
        matches.push({ title: a.title, sub: `${a.subjectCode} • ${a.deadlineBadge}`, action: () => { navigateTo('assignments'); openAssignmentDetailsModal(a.id); } });
      }
    });

    if (matches.length === 0) {
      list.innerHTML = `<div class="p-2 text-muted text-center" style="font-size:0.75rem;">No results found.</div>`;
    } else {
      list.innerHTML = matches.slice(0, 5).map((m, i) => `
        <div class="search-result-item" data-idx="${i}">
          <div class="result-icon"><i class="fa-solid fa-magnifying-glass text-primary"></i></div>
          <div>
            <div class="result-title">${m.title}</div>
            <div class="result-sub">${m.sub}</div>
          </div>
        </div>
      `).join('');

      list.querySelectorAll('.search-result-item').forEach((item, i) => {
        item.onclick = () => { dropdown.classList.remove('show'); input.value = ''; matches[i].action(); };
      });
    }
    dropdown.classList.add('show');
  };

  document.addEventListener('click', (e) => {
    const container = document.getElementById('searchContainer');
    if (container && !container.contains(e.target)) dropdown.classList.remove('show');
  });
}

function initSettingsListeners() {
  const saveBtn = document.getElementById('saveAllSettingsBtn');
  if (saveBtn) saveBtn.onclick = () => showToast('Preferences saved successfully!', 'success');
}

// ==========================================================================
// 17. CHARTS
// ==========================================================================

function initCharts() {
  const colors = getChartColors();

  // 1. Dashboard Trajectory (9.0 Points Progression)
  const c1 = document.getElementById('dashboardAcademicChart');
  if (c1) {
    dashboardAcademicChartInstance = new Chart(c1.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Unit Test 1', 'Assignment 1', 'Mid-Term 1', 'Lab Review', 'Mid-Term 2', 'Current (9.0)'],
        datasets: [
          {
            label: 'Kousar Fathima (9.0 Points)',
            data: [8.85, 8.92, 9.00, 9.05, 8.98, 9.00],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            fill: true,
            tension: 0.35,
            borderWidth: 2.5
          },
          {
            label: 'Dr. RVR NRI COLLEGE x NIAT Cohort Avg',
            data: [7.40, 7.50, 7.55, 7.60, 7.65, 7.70],
            borderColor: '#94A3B8',
            borderDash: [5, 5],
            fill: false,
            tension: 0.35,
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: colors.text, font: { family: 'Inter', weight: '500' } } } },
        scales: {
          x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
          y: { min: 6.5, max: 10.0, grid: { color: colors.grid }, ticks: { color: colors.text } }
        }
      }
    });
  }

  // 2. Attendance Monthly Bar
  const c2 = document.getElementById('monthlyAttendanceChart');
  if (c2) {
    monthlyAttendanceChartInstance = new Chart(c2.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          { label: 'Attended', data: [34, 35, 37, 33, 31], backgroundColor: '#3B82F6', borderRadius: 4 },
          { label: 'Missed', data: [2, 3, 3, 3, 3], backgroundColor: '#EF4444', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: colors.text } } },
        scales: {
          x: { grid: { display: false }, ticks: { color: colors.text } },
          y: { beginAtZero: true, grid: { color: colors.grid }, ticks: { color: colors.text } }
        }
      }
    });
  }

  // 3. Sem Progression (Assessment Trajectory)
  const c3 = document.getElementById('semesterProgressionChart');
  if (c3) {
    semesterProgressionChartInstance = new Chart(c3.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Unit Test 1', 'Unit Test 2', 'Mid-Term 1', 'Practicum 1', 'Mid-Term 2', '1st Sem Projected'],
        datasets: [
          { label: 'Kousar Fathima (9.0 Points)', data: [8.80, 8.95, 9.00, 9.10, 8.95, 9.00], borderColor: '#3B82F6', tension: 0.3, borderWidth: 2.5 },
          { label: 'College Topper', data: [9.20, 9.30, 9.25, 9.40, 9.35, 9.40], borderColor: '#F59E0B', borderDash: [4, 4], tension: 0.3, borderWidth: 1.5 },
          { label: 'Cohort Avg', data: [7.20, 7.35, 7.45, 7.50, 7.60, 7.65], borderColor: '#94A3B8', borderDash: [6, 6], tension: 0.3, borderWidth: 1.5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: colors.text } } },
        scales: {
          x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
          y: { min: 6.0, max: 10.0, grid: { color: colors.grid }, ticks: { color: colors.text } }
        }
      }
    });
  }

  // 4. Grade Distribution (6 Subjects in 1st Sem)
  const c4 = document.getElementById('gradeDistributionChart');
  if (c4) {
    gradeDistributionChartInstance = new Chart(c4.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Outstanding (O)', 'Excellent (A+)', 'Very Good (A)'],
        datasets: [{ data: [2, 3, 1], backgroundColor: ['#8B5CF6', '#3B82F6', '#10B981'], borderWidth: 0 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { color: colors.text } } },
        cutout: '70%'
      }
    });
  }
}

function updateChartsTheme() {
  const colors = getChartColors();
  const charts = [dashboardAcademicChartInstance, monthlyAttendanceChartInstance, semesterProgressionChartInstance, gradeDistributionChartInstance];
  charts.forEach(c => {
    if (!c) return;
    if (c.options.plugins?.legend?.labels) c.options.plugins.legend.labels.color = colors.text;
    if (c.options.scales?.x) {
      if (c.options.scales.x.ticks) c.options.scales.x.ticks.color = colors.text;
      if (c.options.scales.x.grid) c.options.scales.x.grid.color = colors.grid;
    }
    if (c.options.scales?.y) {
      if (c.options.scales.y.ticks) c.options.scales.y.ticks.color = colors.text;
      if (c.options.scales.y.grid) c.options.scales.y.grid.color = colors.grid;
    }
    c.update();
  });
}

// ==========================================================================
// 18. TOAST NOTIFICATIONS
// ==========================================================================

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  else if (type === 'warning') icon = 'fa-solid fa-triangle-exclamation';
  else if (type === 'danger') icon = 'fa-solid fa-circle-exclamation';

  t.innerHTML = `<i class="${icon} toast-icon"></i><span>${msg}</span>`;
  container.appendChild(t);

  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 250);
  }, 3200);
}
