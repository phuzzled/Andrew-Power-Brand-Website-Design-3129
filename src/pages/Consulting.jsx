import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiBrain, FiZap, FiTrendingUp, FiUsers, FiCheckCircle, FiArrowRight, FiCalendar, FiDollarSign, FiGlobe, FiAward } = FiIcons;

const Consulting = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 'strategy',
      icon: FiTarget,
      title: "Strategic Innovation",
      subtitle: "Transform your organization's innovation capabilities",
      description: "Comprehensive strategy development to build systematic innovation capabilities that drive sustainable growth and competitive advantage.",
      features: [
        "Innovation Strategy Development",
        "Market Analysis & Opportunity Mapping",
        "Innovation Pipeline Design",
        "Performance Measurement Systems",
        "Change Management Planning",
        "Leadership Development"
      ],
      outcomes: [
        "40-60% improvement in innovation pipeline",
        "25-35% reduction in time-to-market",
        "Increased revenue from new products/services",
        "Enhanced organizational agility"
      ],
      duration: "3-6 months",
      investment: "Starting at $50K",
      ideal: "Organizations ready to transform their innovation approach"
    },
    {
      id: 'assessment',
      icon: FiBrain,
      title: "Psychometric Assessment",
      subtitle: "Unlock human potential through data-driven insights",
      description: "Advanced psychometric systems to optimize team dynamics, leadership development, and organizational performance through scientific assessment.",
      features: [
        "Comprehensive Team Assessment",
        "Leadership Potential Evaluation",
        "Cultural Alignment Analysis",
        "Behavioral Pattern Mapping",
        "Custom Assessment Development",
        "Ongoing Performance Tracking"
      ],
      outcomes: [
        "30-45% improvement in team effectiveness",
        "50% reduction in leadership development time",
        "Increased employee satisfaction & retention",
        "Better hiring and placement decisions"
      ],
      duration: "2-4 months",
      investment: "Starting at $25K",
      ideal: "Organizations focused on human capital optimization"
    },
    {
      id: 'transformation',
      icon: FiZap,
      title: "Digital Transformation",
      subtitle: "Leverage technology for social and business impact",
      description: "End-to-end digital transformation with focus on AI implementation, automation, and creating technology solutions that drive meaningful impact.",
      features: [
        "AI Strategy & Implementation",
        "Process Automation Design",
        "Digital Platform Development",
        "Data Analytics Infrastructure",
        "Technology Integration",
        "Training & Change Management"
      ],
      outcomes: [
        "50-70% improvement in operational efficiency",
        "Significant cost reduction through automation",
        "Enhanced data-driven decision making",
        "Improved customer/beneficiary experience"
      ],
      duration: "6-12 months",
      investment: "Starting at $100K",
      ideal: "Organizations ready for technology-driven transformation"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your organization's current state, challenges, and aspirations through comprehensive analysis."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Co-create a customized strategy that aligns with your vision and leverages your unique strengths."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed roadmaps with clear milestones, resource requirements, and success metrics."
    },
    {
      step: "04",
      title: "Execution Support",
      description: "Hands-on support during implementation with regular check-ins and adaptive adjustments."
    },
    {
      step: "05",
      title: "Measurement & Optimization",
      description: "Continuous monitoring and optimization to ensure sustainable impact and ongoing improvement."
    }
  ];

  const testimonials = [
    {
      quote: "Andrew's systematic approach transformed our entire innovation process. We've seen a 60% improvement in our innovation pipeline and launched three breakthrough products in the first year.",
      author: "Sarah Chen",
      role: "Chief Innovation Officer",
      company: "TechGlobal Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The psychometric assessment system Andrew developed helped us build our strongest leadership team ever. Our leadership development time was cut in half while effectiveness doubled.",
      author: "Marcus Rodriguez",
      role: "Global Head of Talent",
      company: "Innovation Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Working with Andrew on our digital transformation was a game-changer. We achieved 70% operational efficiency gains and completely reimagined how we serve our beneficiaries.",
      author: "Dr. Elena Vasquez",
      role: "Executive Director",
      company: "Global Impact Foundation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: FiUsers, value: "200+", label: "Organizations Transformed" },
    { icon: FiGlobe, value: "50+", label: "Countries Reached" },
    { icon: FiTrendingUp, value: "300%", label: "Average ROI" },
    { icon: FiAward, value: "98%", label: "Client Satisfaction" }
  ];

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
            Strategic Consulting
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Partner with us to unlock your organization's potential through systematic innovation, advanced psychometrics, and strategic transformation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Consulting Services
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      +{service.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Pricing & Duration */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
                    <span>{service.investment}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <span>Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Our Consulting Process
          </h2>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Client Success Stories
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
              >
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can unlock your organization's potential and drive systematic change together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Download Capabilities Overview
            </button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-electric-500 rounded-xl flex items-center justify-center">
                    <SafeIcon icon={selectedService.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedService.title}
                    </h2>
                    <p className="text-primary-600 dark:text-primary-400">
                      {selectedService.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                {selectedService.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Expected Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{selectedService.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Investment</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{selectedService.investment}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Ideal For</div>
                  <div className="text-slate-700 dark:text-slate-300">{selectedService.ideal}</div>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Schedule Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consulting;