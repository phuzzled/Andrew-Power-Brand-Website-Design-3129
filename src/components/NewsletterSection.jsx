import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiCheck, FiArrowRight, FiZap, FiTrendingUp, FiUsers } = FiIcons;

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const benefits = [
    {
      icon: FiZap,
      title: "Weekly Insights",
      description: "Fresh perspectives on innovation, leadership, and social impact"
    },
    {
      icon: FiTrendingUp,
      title: "Exclusive Content",
      description: "Behind-the-scenes looks at projects and strategic thinking"
    },
    {
      icon: FiUsers,
      title: "Community Access",
      description: "Connect with like-minded change-makers and innovators"
    }
  ];

  return (
    <section id="newsletter" ref={ref} className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50 dark:from-primary-950 dark:via-slate-900 dark:to-electric-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-electric-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMail} className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              The Power Source
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Join 10,000+ change-makers who receive weekly insights on innovation, leadership, and creating meaningful impact in the world.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={benefit.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Welcome to The Power Source!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Check your email for a confirmation message and your first insight.
                </p>
              </motion.div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                No spam, ever. Unsubscribe at any time. Read our{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                  privacy policy
                </a>.
              </p>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>10,000+ subscribers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>98% open rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Weekly delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;