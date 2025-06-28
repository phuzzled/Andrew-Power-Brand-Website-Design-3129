import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiDollarSign, FiGlobe, FiClock, FiTarget, FiBarChart, FiAward } = FiIcons;

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const caseStudies = [
    {
      id: 1,
      title: "Transforming Global Aid Distribution",
      client: "International Humanitarian Organization",
      industry: "Humanitarian",
      duration: "18 months",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
      challenge: "A major international NGO was struggling with inefficient aid distribution, lack of real-time impact tracking, and limited community engagement across 25 countries.",
      solution: "Implemented a comprehensive digital platform combining AI-driven logistics optimization, real-time impact measurement, and community feedback systems.",
      results: {
        efficiency: "+65%",
        costs: "-40%",
        reach: "2.5M+",
        satisfaction: "94%"
      },
      impact: [
        "Reduced aid delivery time from 6 weeks to 2 weeks average",
        "Increased beneficiary satisfaction scores by 40%",
        "Enabled real-time tracking of impact across all programs",
        "Reduced operational costs by $12M annually"
      ],
      technologies: ["AI/ML", "Real-time Analytics", "Mobile Apps", "Blockchain"],
      testimonial: {
        quote: "Andrew's systematic approach transformed how we operate globally. The platform has become the backbone of our humanitarian efforts.",
        author: "Sarah Chen",
        role: "Director of Operations"
      }
    },
    {
      id: 2,
      title: "Revolutionizing Corporate Team Dynamics",
      client: "Fortune 500 Technology Company",
      industry: "Technology",
      duration: "12 months",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      challenge: "A tech giant with 50,000+ employees was experiencing declining productivity, high turnover rates, and poor team collaboration across distributed teams.",
      solution: "Deployed advanced psychometric assessment system with AI-powered team matching, personalized development plans, and continuous performance optimization.",
      results: {
        productivity: "+45%",
        retention: "+30%",
        satisfaction: "89%",
        collaboration: "+60%"
      },
      impact: [
        "Reduced employee turnover by 30% within first year",
        "Increased cross-team collaboration scores by 60%",
        "Improved project delivery times by 25%",
        "Enhanced employee satisfaction to 89% (from 67%)"
      ],
      technologies: ["Psychometrics", "AI/ML", "Data Analytics", "Mobile Platform"],
      testimonial: {
        quote: "The insights we gained about our teams were game-changing. We now build better teams and develop our people more effectively.",
        author: "Marcus Johnson",
        role: "Chief People Officer"
      }
    },
    {
      id: 3,
      title: "Scaling Social Impact Measurement",
      client: "Global Foundation Network",
      industry: "Philanthropy",
      duration: "24 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      challenge: "A network of 200+ foundations lacked standardized impact measurement, making it impossible to compare effectiveness or optimize funding allocation.",
      solution: "Created unified impact measurement framework with advanced analytics, predictive modeling, and automated reporting systems across all member organizations.",
      results: {
        standardization: "100%",
        efficiency: "+55%",
        funding: "$500M+",
        accuracy: "96%"
      },
      impact: [
        "Standardized impact measurement across 200+ organizations",
        "Improved funding allocation efficiency by 55%",
        "Enabled data-driven decisions for $500M+ in annual funding",
        "Reduced reporting time by 70% through automation"
      ],
      technologies: ["Data Analytics", "Automation", "API Integration", "Reporting"],
      testimonial: {
        quote: "Andrew created the infrastructure that allows us to truly understand and optimize our collective impact. It's revolutionary.",
        author: "Dr. Elena Rodriguez",
        role: "Executive Director"
      }
    },
    {
      id: 4,
      title: "Building Leadership Pipeline at Scale",
      client: "Global Consulting Firm",
      industry: "Professional Services",
      duration: "15 months",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
      challenge: "A consulting firm needed to identify and develop future leaders from a pool of 15,000+ employees across 40 countries, with no systematic approach.",
      solution: "Implemented comprehensive leadership assessment and development ecosystem with AI-powered potential identification and personalized growth pathways.",
      results: {
        identification: "95%",
        development: "+70%",
        promotion: "+85%",
        retention: "+40%"
      },
      impact: [
        "Identified high-potential leaders with 95% accuracy",
        "Accelerated leadership development by 70%",
        "Increased internal promotions to leadership by 85%",
        "Improved leadership retention by 40%"
      ],
      technologies: ["Leadership Analytics", "AI Assessment", "Learning Platform", "Mentorship"],
      testimonial: {
        quote: "The leadership pipeline we built with Andrew's framework has transformed our organization's future. We now develop leaders systematically.",
        author: "James Mitchell",
        role: "Global Managing Partner"
      }
    }
  ];

  const openStudy = (study) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const closeStudy = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'auto';
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
            Case Studies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real-world transformations that demonstrate the power of systematic innovation. These stories showcase measurable impact and sustainable change.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 cursor-pointer"
              onClick={() => openStudy(study)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <SafeIcon icon={FiClock} className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{study.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {study.client}
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                  {study.challenge}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm">
                  Read Full Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, value: "500K+", label: "Lives Impacted" },
              { icon: FiDollarSign, value: "$100M+", label: "Value Created" },
              { icon: FiGlobe, value: "50+", label: "Countries Reached" },
              { icon: FiAward, value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <SafeIcon icon={stat.icon} className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for detailed case study */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedStudy.image}
                alt={selectedStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={closeStudy}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="px-3 py-1 bg-primary-500 rounded-full text-sm font-medium mb-4 inline-block">
                  {selectedStudy.industry}
                </span>
                <h2 className="text-3xl font-bold mb-2">{selectedStudy.title}</h2>
                <p className="text-lg opacity-90">{selectedStudy.client}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 mr-2 text-red-500" />
                    Challenge
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 mr-2 text-green-500" />
                    Solution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <SafeIcon icon={FiBarChart} className="w-5 h-5 mr-2 text-primary-500" />
                  Key Results
                </h3>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(selectedStudy.results).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {selectedStudy.impact.map((impact, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Technologies & Approaches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{selectedStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {selectedStudy.testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {selectedStudy.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;