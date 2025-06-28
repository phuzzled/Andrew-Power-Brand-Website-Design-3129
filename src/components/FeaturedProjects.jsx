import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiGithub, FiArrowRight } = FiIcons;

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Foundation Nova Diem",
      category: "Humanitarian Innovation",
      description: "A revolutionary platform connecting global communities through sustainable development initiatives and impact measurement.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: ["Social Impact", "Platform", "Global Reach"],
      status: "Live",
      link: "/projects"
    },
    {
      title: "Project NOVI",
      category: "AI & Psychometrics",
      description: "Next-generation assessment platform leveraging AI to provide unprecedented insights into human potential and organizational dynamics.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Psychometrics", "Analytics"],
      status: "In Development",
      link: "/projects"
    },
    {
      title: "Impact Measurement Suite",
      category: "Data & Analytics",
      description: "Comprehensive analytics platform for measuring and optimizing social impact across diverse humanitarian initiatives.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Analytics", "Impact", "Dashboard"],
      status: "Beta",
      link: "/projects"
    },
    {
      title: "Global Leadership Network",
      category: "Community Building",
      description: "Connecting purpose-driven leaders worldwide through mentorship, collaboration, and shared learning experiences.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Network", "Leadership", "Mentorship"],
      status: "Live",
      link: "/projects"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transformative initiatives that showcase the power of systematic innovation in creating lasting social impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
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

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    to={project.link}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group"
                  >
                    <span>Learn More</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <Link
                      to={project.link}
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                    </Link>
                    <Link
                      to={project.link}
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      <SafeIcon icon={FiGithub} className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
          >
            <span>View All Projects</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;