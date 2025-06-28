import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiExternalLink, FiGithub, FiCalendar, FiUsers, FiTrendingUp, FiGlobe, FiAward, FiTarget } = FiIcons;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'humanitarian', name: 'Humanitarian Innovation' },
    { id: 'ai', name: 'AI & Technology' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'research', name: 'Research' }
  ];

  const projects = [
    {
      id: 1,
      title: "Foundation Nova Diem",
      category: "humanitarian",
      description: "A revolutionary platform connecting global communities through sustainable development initiatives and comprehensive impact measurement systems.",
      longDescription: "Foundation Nova Diem represents a paradigm shift in how humanitarian organizations approach sustainable development. By leveraging advanced analytics and community-driven insights, the platform has facilitated over $50M in targeted aid distribution across 25+ countries.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
      tags: ["Social Impact", "Platform Development", "Global Reach", "Sustainability"],
      status: "Live",
      startDate: "2021-03",
      impact: {
        communities: "150+",
        funding: "$50M+",
        countries: "25+"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Project NOVI",
      category: "ai",
      description: "Next-generation assessment platform leveraging AI to provide unprecedented insights into human potential and organizational dynamics.",
      longDescription: "Project NOVI combines cutting-edge psychometric research with artificial intelligence to create the most comprehensive human potential assessment platform available. Used by Fortune 500 companies to optimize team dynamics and individual performance.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
      tags: ["AI/ML", "Psychometrics", "Analytics", "Enterprise"],
      status: "Beta",
      startDate: "2022-06",
      impact: {
        organizations: "200+",
        assessments: "50K+",
        accuracy: "94%"
      },
      technologies: ["Python", "TensorFlow", "React", "GraphQL"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Global Leadership Network",
      category: "humanitarian",
      description: "Connecting purpose-driven leaders worldwide through mentorship, collaboration, and shared learning experiences.",
      longDescription: "A comprehensive platform that has connected over 5,000 leaders from 80+ countries, facilitating knowledge transfer, mentorship relationships, and collaborative projects that drive systemic change.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
      tags: ["Network Building", "Leadership", "Mentorship", "Global"],
      status: "Live",
      startDate: "2020-01",
      impact: {
        leaders: "5K+",
        countries: "80+",
        partnerships: "500+"
      },
      technologies: ["Vue.js", "Firebase", "WebRTC", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Impact Measurement Suite",
      category: "consulting",
      description: "Comprehensive analytics platform for measuring and optimizing social impact across diverse humanitarian initiatives.",
      longDescription: "A sophisticated data analytics platform that enables organizations to track, measure, and optimize their social impact initiatives with unprecedented precision and actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Analytics", "Impact Measurement", "Dashboard", "ROI"],
      status: "Live",
      startDate: "2021-09",
      impact: {
        organizations: "100+",
        dataPoints: "1M+",
        efficiency: "+40%"
      },
      technologies: ["D3.js", "Python", "MongoDB", "Docker"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Psychometric Research Initiative",
      category: "research",
      description: "Groundbreaking research into human behavioral patterns and their applications in organizational development.",
      longDescription: "A multi-year research initiative that has produced 15+ peer-reviewed publications and established new frameworks for understanding human potential in professional environments.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      tags: ["Research", "Psychology", "Behavioral Science", "Publication"],
      status: "Ongoing",
      startDate: "2019-01",
      impact: {
        publications: "15+",
        citations: "500+",
        frameworks: "3"
      },
      technologies: ["R", "SPSS", "Python", "LaTeX"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "AI Ethics Framework",
      category: "ai",
      description: "Comprehensive framework for ethical AI development in humanitarian and social impact contexts.",
      longDescription: "A pioneering framework that has been adopted by 50+ organizations to ensure ethical AI development and deployment in sensitive humanitarian contexts.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
      tags: ["AI Ethics", "Framework", "Policy", "Standards"],
      status: "Live",
      startDate: "2022-01",
      impact: {
        adoptions: "50+",
        guidelines: "25",
        compliance: "98%"
      },
      technologies: ["Documentation", "Policy", "Standards", "Training"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500 text-white';
      case 'Beta': return 'bg-yellow-500 text-white';
      case 'Ongoing': return 'bg-blue-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Projects Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transformative initiatives that showcase the intersection of innovation, technology, and social impact. Each project represents a step toward systemic change.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-2 border border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{new Date(project.startDate).getFullYear()}</span>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold">{value}</div>
                        <div className="capitalize opacity-80">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  {project.longDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold">
                    <span>View Details</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                      <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                      <SafeIcon icon={FiGithub} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's collaborate to create something extraordinary that drives real impact.
            </p>
            <button className="bg-white text-primary-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;