import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiBrain, FiZap, FiTrendingUp, FiUsers, FiGlobe } = FiIcons;

const WhatIDoSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: FiTarget,
      title: "Brand Strategy",
      description: "Crafting purpose-driven brand narratives that resonate with human values and drive meaningful connections.",
      features: ["Strategic Positioning", "Brand Architecture", "Value Proposition Design"]
    },
    {
      icon: FiBrain,
      title: "Psychometric Systems",
      description: "Developing data-driven assessment tools that unlock human potential and optimize organizational performance.",
      features: ["Assessment Design", "Behavioral Analytics", "Performance Optimization"]
    },
    {
      icon: FiZap,
      title: "AI for Social Impact",
      description: "Leveraging artificial intelligence to solve complex humanitarian challenges and create scalable solutions.",
      features: ["AI Strategy", "Social Innovation", "Impact Measurement"]
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
            What I Do
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I bridge the gap between human potential and systemic innovation, creating solutions that drive meaningful change at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-electric-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: FiUsers, value: "50K+", label: "Lives Impacted" },
            { icon: FiGlobe, value: "25+", label: "Countries Reached" },
            { icon: FiTrendingUp, value: "200%", label: "Avg ROI Increase" },
            { icon: FiZap, value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;