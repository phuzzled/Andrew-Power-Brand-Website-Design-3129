import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiFileText, FiVideo, FiMic, FiBookOpen, FiTool, FiTrendingUp, FiUsers, FiTarget, FiZap } = FiIcons;

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'all', name: 'All Resources', icon: FiTarget },
    { id: 'frameworks', name: 'Frameworks', icon: FiTool },
    { id: 'guides', name: 'Guides', icon: FiBookOpen },
    { id: 'templates', name: 'Templates', icon: FiFileText },
    { id: 'videos', name: 'Videos', icon: FiVideo },
    { id: 'tools', name: 'Tools', icon: FiZap }
  ];

  const resources = [
    {
      id: 1,
      title: "The Systematic Innovation Framework",
      category: "frameworks",
      type: "PDF Guide",
      description: "A comprehensive 50-page framework for implementing systematic innovation in any organization, complete with worksheets and case studies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      downloads: "15,420",
      rating: 4.9,
      isPremium: false,
      size: "2.3 MB",
      pages: 50,
      features: [
        "Step-by-step implementation guide",
        "25+ practical worksheets",
        "Real-world case studies",
        "Success metrics templates"
      ]
    },
    {
      id: 2,
      title: "Psychometric Assessment Toolkit",
      category: "tools",
      type: "Interactive Tool",
      description: "Professional-grade assessment tools for evaluating team dynamics, leadership potential, and organizational culture.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      downloads: "8,932",
      rating: 4.8,
      isPremium: true,
      features: [
        "12 validated assessment modules",
        "Automated reporting system",
        "Team compatibility analysis",
        "Leadership development tracking"
      ]
    },
    {
      id: 3,
      title: "Impact Measurement Playbook",
      category: "guides",
      type: "Digital Playbook",
      description: "Complete guide to measuring and optimizing social impact, from setting KPIs to advanced analytics implementation.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      downloads: "12,156",
      rating: 4.9,
      isPremium: false,
      size: "4.1 MB",
      pages: 75,
      features: [
        "Impact measurement frameworks",
        "KPI selection guidelines",
        "Data collection strategies",
        "ROI calculation methods"
      ]
    },
    {
      id: 4,
      title: "Strategic Planning Templates",
      category: "templates",
      type: "Template Pack",
      description: "Professional templates for strategic planning, including vision frameworks, goal-setting worksheets, and execution plans.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      downloads: "22,847",
      rating: 4.7,
      isPremium: false,
      size: "1.8 MB",
      features: [
        "15 strategic planning templates",
        "Vision and mission frameworks",
        "Goal-setting worksheets",
        "Execution tracking tools"
      ]
    },
    {
      id: 5,
      title: "Leadership Masterclass Series",
      category: "videos",
      type: "Video Course",
      description: "6-part video series covering advanced leadership concepts, including systems thinking, change management, and team optimization.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      downloads: "5,673",
      rating: 4.9,
      isPremium: true,
      duration: "4.5 hours",
      features: [
        "6 comprehensive modules",
        "Interactive exercises",
        "Downloadable resources",
        "Certificate of completion"
      ]
    },
    {
      id: 6,
      title: "Innovation Canvas Toolkit",
      category: "frameworks",
      type: "Canvas Set",
      description: "Visual frameworks for mapping innovation opportunities, including business model canvas, value proposition design, and stakeholder mapping.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      downloads: "18,293",
      rating: 4.8,
      isPremium: false,
      size: "3.2 MB",
      features: [
        "8 visual canvas templates",
        "Step-by-step instructions",
        "Example implementations",
        "Collaborative worksheets"
      ]
    },
    {
      id: 7,
      title: "Team Dynamics Assessment",
      category: "tools",
      type: "Assessment Tool",
      description: "Comprehensive assessment for understanding team dynamics, communication patterns, and collaboration effectiveness.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      downloads: "11,456",
      rating: 4.8,
      isPremium: true,
      features: [
        "360-degree team assessment",
        "Communication style analysis",
        "Conflict resolution insights",
        "Improvement recommendations"
      ]
    },
    {
      id: 8,
      title: "Change Management Handbook",
      category: "guides",
      type: "Handbook",
      description: "Essential guide to leading successful organizational change, with proven methodologies and practical implementation strategies.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      downloads: "9,821",
      rating: 4.9,
      isPremium: false,
      size: "3.8 MB",
      pages: 65,
      features: [
        "Change management models",
        "Stakeholder engagement strategies",
        "Communication planning",
        "Resistance management techniques"
      ]
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

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
            Resource Library
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Practical tools, frameworks, and insights to accelerate your innovation journey. Download proven resources that drive real results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {[
            { icon: FiDownload, value: "100K+", label: "Downloads" },
            { icon: FiUsers, value: "25K+", label: "Active Users" },
            { icon: FiFileText, value: "50+", label: "Resources" },
            { icon: FiTrendingUp, value: "4.8", label: "Avg Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform -translate-y-1'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <SafeIcon icon={category.icon} className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 group"
            >
              {/* Resource Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Premium Badge */}
                {resource.isPremium && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">
                      Premium
                    </span>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {resource.type}
                  </span>
                </div>

                {/* Downloads */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 text-white text-sm">
                    <SafeIcon icon={FiDownload} className="w-4 h-4" />
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-1 text-white text-sm">
                    <span>⭐ {resource.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {resource.size && (
                    <span>{resource.size}</span>
                  )}
                  {resource.pages && (
                    <span>{resource.pages} pages</span>
                  )}
                  {resource.duration && (
                    <span>{resource.duration}</span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {resource.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {resource.features.length > 3 && (
                      <li className="text-sm text-slate-500 dark:text-slate-400">
                        +{resource.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Download Button */}
                <button className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                  resource.isPremium
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } shadow-lg hover:shadow-xl`}>
                  <SafeIcon icon={FiDownload} className="w-5 h-5" />
                  <span>{resource.isPremium ? 'Get Premium Access' : 'Download Free'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter and be the first to access new frameworks, tools, and insights.
          </p>
          <button className="bg-white text-primary-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;