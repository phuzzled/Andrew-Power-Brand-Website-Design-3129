import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiClock, FiUser, FiArrowRight, FiBookOpen, FiVideo } = FiIcons;

const InsightsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const insights = [
    {
      type: "video",
      title: "The Future of Humanitarian Innovation",
      description: "Exploring how technology and human-centered design are reshaping the landscape of social impact.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      duration: "12 min",
      category: "Innovation",
      date: "2024-01-15",
      link: "/podcast"
    },
    {
      type: "article",
      title: "Psychometric Systems in Modern Organizations",
      description: "How data-driven insights into human behavior are transforming workplace dynamics and performance.",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      readTime: "8 min read",
      category: "Psychometrics",
      date: "2024-01-10",
      link: "/blog"
    },
    {
      type: "video",
      title: "Building Sustainable Impact at Scale",
      description: "Lessons learned from scaling humanitarian initiatives across 25+ countries.",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      duration: "18 min",
      category: "Leadership",
      date: "2024-01-05",
      link: "/podcast"
    },
    {
      type: "article",
      title: "The Power of Systematic Thinking",
      description: "Why approaching complex problems through systems thinking leads to breakthrough solutions.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      readTime: "6 min read",
      category: "Strategy",
      date: "2023-12-28",
      link: "/blog"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Insights & Resources
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Thought leadership, practical insights, and actionable strategies for creating meaningful change in your organization and community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.thumbnail}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Play Button for Videos */}
                {insight.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                    {insight.category}
                  </span>
                </div>

                {/* Type Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <SafeIcon icon={insight.type === 'video' ? FiVideo : FiBookOpen} className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{insight.duration || insight.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>Andrew Power</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(insight.date).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    to={insight.link}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group"
                  >
                    <span>{insight.type === 'video' ? 'Watch Now' : 'Read More'}</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
          >
            <span>View All Insights</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;