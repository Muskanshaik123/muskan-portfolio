// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const personalInfo = {
    name: "SHAIK MUSKAN",
    title: "AI/ML Engineer",
    email: "shaikmuskan471@gmail.com",
    github: "https://github.com/Muskanshaik123",
    linkedin: "https://www.linkedin.com/in/shaik-muskan-9572232a4/",
    leetcode: "https://leetcode.com/u/muskan_shaik/",
    hackerrank: "https://www.hackerrank.com/profile/shaikmuskan471",
    resume: "https://drive.google.com/file/d/1Rd9KluxOrpe9UC41exbj3UDsMtyy0_Bs/view?usp=sharing"
  };

  const projects = [
    {
      name: "SmartQuizer - Adaptive AI Quiz Generator",
      description: "AI-powered adaptive quiz platform using ML and NLP to generate personalized assessments from unstructured content. Improved efficiency by 40%, accuracy by 25%, and engagement by 30% through intelligent difficulty adaptation.",
      tech: ["Node.js", "Express.js", "SQLite", "ML", "NLP"],
      github: "https://github.com/Muskanshaik123/Smart-Quizzer",
      icon: "🧠",
      metrics: ["40% Efficiency", "25% Accuracy", "30% Engagement"]
    },
    {
      name: "MindEase - AI Mental Wellness Companion",
      description: "AI wellness platform with mood analytics and NLP-driven journal insights, boosting tracking accuracy by 28% and increasing daily engagement by 35% via Gemini-based conversational support.",
      tech: ["Node.js", "ML", "NLP", "Gemini API"],
      github: "https://github.com/Muskanshaik123/MindEase",
      icon: "✨",
      metrics: ["28% Accuracy", "35% Engagement"]
    },
    {
      name: "Smart Crop Disease Prediction",
      description: "Hybrid MobileNetV2 + EfficientNet-B0 CNN achieving 95.8% accuracy for chilli farmers. Applied transfer learning and hyperparameter tuning, deployed real-time inference via web application.",
      tech: ["Python", "CNN", "Deep Learning", "Streamlit"],
      github: "https://github.com/Muskanshaik123/ChilliCare-Smart-Crop-Disease-Prediction-for-Chilli-Farmers",
      icon: "🌾",
      metrics: ["95.8% Accuracy"]
    }
  ];

  const experience = [
    {
      company: "Infosys Springboard",
      role: "Artificial Intelligence Intern",
      period: "2025",
      points: [
        "Developed AI-driven adaptive quiz system transforming unstructured content into personalized assessments with automated difficulty adaptation",
        "Implemented end-to-end evaluation pipelines serving 500+ users"
      ]
    },
     {
      company: "Infosys Springboard",
      role: "Sports Event Management Intern",
      period: "2024",
      points: [
        "Coordinated logistics for events with 200+ participants",
        "Streamlined operational workflows reducing setup time by 30%"
      ]
    },

    {
      company: "Google Virtual Internships (AICTE)",
      role: "Android Development Intern",
      period: "2024",
      points: [
        "Designed modular Android components and optimized REST API integration",
        "Improved application responsiveness and reduced latency through efficient data processing"
      ]
    },
	 {
      company: "Google Virtual Internships (AICTE)",
      role: "AI/ML Intern",
      period: "2023",
      points: [
        "Executed machine learning workflows including data cleaning, feature engineering, and model training on real-world datasets",
        "Optimized model performance achieving 15% improvement in prediction accuracy"
      ]
    },

      ];

  const certifications = [
    { 
      name: "Google Cloud Skills - Gen AI (Beginner, Intermediate & Advanced)", 
      issuer: "Google", 
      icon: "☁️",
      link: "https://drive.google.com/file/d/1yGzJdzPP0p44WtkOgoDZshDstd_q3JGN/view",
      
    },
    { 
      name: "AWS Cloud Practitioner Essentials", 
      issuer: "AWS", 
      icon: "⚡",
      link: "https://drive.google.com/file/d/1fWvkiSDoLWkYlAOyxZNjAq-g7EBz45WC/view",
      
    },
    { 
      name: "AWS Educate Machine Learning Foundations", 
      issuer: "AWS", 
      icon: "🤖",
      link: "https://www.credly.com/badges/69b23a38-010f-4437-b84a-9baec14da390/linked_in_profile",
      credential: "Credly Badge",
     
    },
    { 
      name: "Google Data Analytics", 
      issuer: "Coursera", 
      icon: "📊",
      link: "https://www.coursera.org/account/accomplishments/verify/H64RV376HYP6",
      credential: "H64RV376HYP6",
      
    },
    { 
      name: "Deloitte Cyber Job Simulation", 
      issuer: "Deloitte", 
      icon: "🔒",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68f4c7d6804d25cb7bb4ddc2_1760873995762_completion_certificate.pdf",
     
    },
    { 
      name: "CLA - Programming Essentials in C", 
      issuer: "Cisco", 
      icon: "⚙️",
      link: "https://drive.google.com/file/d/1reISq9HwZLR3Aw3-SLYM4diriLpru432/view",
      
    },
    { 
      name: "PCAP - Programming Essentials in Python", 
      issuer: "Cisco", 
      icon: "🐍",
      link: "https://drive.google.com/file/d/1reISq9HwZLR3Aw3-SLYM4diriLpru432/view",
   
    },
    { 
      name: "Introduction to Cybersecurity", 
      issuer: "Cisco", 
      icon: "🛡️",
      link: "https://www.credly.com/badges/cd6ed2c0-ff4b-4031-a35b-09b8bddf253e/linked_in_profile",
      credential: "Credly Badge",
      
    }
  ];

  const achievements = [
    {
      title: "Quantum Computing Co-Lead",
      description: "MLSC, VRSEC - Led workshops and mentored 200+ students in emerging technologies",
      icon: "⚛️"
    },
    {
      title: "GirlScript Summer of Code",
      description: "Campus Ambassador - Mentored 50+ students through collaborative technical programs",
      icon: "👩‍💻"
    },
    {
      title: "Pragathi Path to Future – Mentee",
      description: "Infosys Springboard - Selected mentee for career guidance and skill development program",
      icon: "🌟"
    },
    {
      title: "HackerRank Python",
      description: "Silver Badge Achievement",
      icon: "🥈",
      link: personalInfo.hackerrank
    },
    {
      title: "HackerRank SQL",
      description: "Bronze Badge Achievement",
      icon: "🥉",
      link: personalInfo.hackerrank
    },
    {
      title: "LeetCode Streak",
      description: "100+ Days of Consistent Coding",
      icon: "🔥",
      link: personalInfo.leetcode
    },
    {
      title: "Literary Club Runner-up",
      description: "Poetry Writing Competition - Recognized for creative excellence",
      icon: "📝"
    },
    {
      title: "National Hackathon Participant",
      description: "Competed in multiple national-level coding competitions",
      icon: "🏆"
    }
  ];

  const navItems = ['Home', 'Projects', 'Experience', 'Certifications', 'Achievements'];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
        
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SM
                </span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item.toLowerCase() 
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>📄</span>
                  <span>Resume</span>
                </a>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                >
                  {mobileMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section - Cards Removed */}
          <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className={`transition-all duration-1000 transform ${
                isVisible['home'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
                    <span>🤖</span>
                    <span className="text-sm font-medium">AI/ML Engineer</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Muskan Shaik
                    </span>
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
                    AI Engineer • Machine Learning • Deep Learning • NLP • Full-Stack Developer
Building intelligent, scalable applications for real-world problems.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="GitHub"
                    >
                      <span className="text-xl">😺</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      title="LinkedIn"
                    >
                      <span className="text-xl">💼</span>
                    </a>
                    <a
                      href={personalInfo.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      title="LeetCode"
                    >
                      <span className="text-xl">⚡</span>
                    </a>
                    <a
                      href={personalInfo.hackerrank}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      title="HackerRank"
                    >
                      <span className="text-xl">🏆</span>
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      title="Email"
                    >
                      <span className="text-xl">✉️ </span>
                    </a>
                    <a
                      href={personalInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                    >
                      <span>📄</span>
                      <span>View Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Production-ready applications built with cutting-edge AI/ML technologies
              </p>
              <div className="grid lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      isVisible['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-4xl p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                          {project.icon}
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                          title="View on GitHub"
                        >
                          <span>🐙</span>
                        </a>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform"
                      >
                        <span>View on GitHub</span>
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Professional Experience
                </span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Industry experience at leading tech companies
              </p>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-blue-600 ${
                      isVisible['experience'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.company}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">{exp.role}</p>
                      </div>
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Professional certifications from industry leaders
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible['certifications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{cert.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{cert.issuer}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">{cert.date}</p>
                      {cert.credential && (
                        <p className="text-xs text-slate-400 dark:text-slate-600">{cert.credential}</p>
                      )}
                      <span className="inline-flex items-center mt-2 text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Verify Credential <span className="ml-1">↗</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Leadership & Achievements
                </span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Recognition and leadership roles in tech communities
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  achievement.link ? (
                    <a
                      key={index}
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start space-x-4 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                        isVisible['achievements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <span className="text-4xl">{achievement.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                        isVisible['achievements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <span className="text-4xl">{achievement.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex space-x-8">
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                    title="GitHub"
                  >
                    <span>🐙</span>
                  </a>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                    title="LinkedIn"
                  >
                    <span>💼</span>
                  </a>
                  <a 
                    href={personalInfo.leetcode} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                    title="LeetCode"
                  >
                    <span>⚡</span>
                  </a>
                  <a 
                    href={personalInfo.hackerrank} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                    title="HackerRank"
                  >
                    <span>🏆</span>
                  </a>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                    title="Email"
                  >
                    <span>📧</span>
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  © 2026 Shaik Muskan. AI/ML Engineer
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}