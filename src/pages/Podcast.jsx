import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiDownload, FiShare2, FiCalendar, FiClock, FiMic, FiHeadphones, FiTrendingUp, FiUsers } = FiIcons;

const Podcast = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const podcastStats = {
    episodes: "150+",
    downloads: "2.5M+",
    countries: "80+",
    rating: "4.9/5"
  };

  const categories = [
    { id: 'all', name: 'All Episodes' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'social-impact', name: 'Social Impact' },
    { id: 'psychology', name: 'Psychology' }
  ];

  const episodes = [
    {
      id: 1,
      number: 150,
      title: "The Future of Humanitarian Technology",
      description: "Exploring how emerging technologies are revolutionizing humanitarian aid delivery and impact measurement in crisis situations.",
      guest: "Dr. Sarah Mitchell",
      guestTitle: "Director of Innovation, UN World Food Programme",
      duration: "45:32",
      date: "2024-01-15",
      category: "innovation",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
      topics: ["AI in Humanitarian Aid", "Crisis Response", "Technology Ethics", "Global Impact"],
      isNew: true
    },
    {
      id: 2,
      number: 149,
      title: "Building Resilient Organizations in Uncertain Times",
      description: "A deep dive into organizational psychology and how leaders can build antifragile systems that thrive under pressure.",
      guest: "Marcus Chen",
      guestTitle: "Chief Resilience Officer, Global Dynamics Corp",
      duration: "52:18",
      date: "2024-01-08",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      topics: ["Organizational Resilience", "Leadership Psychology", "Change Management", "Crisis Leadership"]
    },
    {
      id: 3,
      number: 148,
      title: "The Psychology of Social Change",
      description: "Understanding the psychological principles that drive successful social movements and how to apply them to create lasting change.",
      guest: "Dr. Elena Rodriguez",
      guestTitle: "Professor of Social Psychology, Stanford University",
      duration: "38:45",
      date: "2024-01-01",
      category: "psychology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      topics: ["Social Psychology", "Behavior Change", "Movement Building", "Collective Action"]
    },
    {
      id: 4,
      number: 147,
      title: "Measuring What Matters: Impact Analytics Revolution",
      description: "How data science and advanced analytics are transforming how we measure and optimize social impact across sectors.",
      guest: "James Park",
      guestTitle: "Chief Data Officer, Impact Ventures",
      duration: "41:22",
      date: "2023-12-25",
      category: "social-impact",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      topics: ["Impact Measurement", "Data Analytics", "Social ROI", "Evidence-Based Change"]
    },
    {
      id: 5,
      number: 146,
      title: "Innovation at Scale: Lessons from the Field",
      description: "Real-world stories of scaling innovative solutions from pilot programs to global implementation.",
      guest: "Maria Santos",
      guestTitle: "Innovation Director, Acumen Academy",
      duration: "47:15",
      date: "2023-12-18",
      category: "innovation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      topics: ["Scaling Innovation", "Systems Thinking", "Global Implementation", "Sustainable Growth"]
    },
    {
      id: 6,
      number: 145,
      title: "The Neuroscience of Decision Making",
      description: "Latest research on how our brains make decisions and practical applications for leaders and organizations.",
      guest: "Dr. Robert Kim",
      guestTitle: "Neuroscientist & Decision Research Expert",
      duration: "43:58",
      date: "2023-12-11",
      category: "psychology",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
      topics: ["Neuroscience", "Decision Making", "Cognitive Bias", "Leadership Psychology"]
    }
  ];

  const togglePlay = (episodeId) => {
    if (currentPlaying === episodeId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(episodeId);
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
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-electric-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <SafeIcon icon={FiMic} className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            The Power Source Podcast
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Deep conversations with visionary leaders, innovators, and change-makers who are reshaping our world through systematic innovation and purpose-driven action.
          </p>

          {/* Podcast Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {Object.entries(podcastStats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                  {key === 'rating' ? 'Average Rating' : key}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe & Never Miss an Episode</h2>
          <p className="mb-6 opacity-90">
            Available on all major podcast platforms. Choose your preferred way to listen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Apple Podcasts', 'Spotify', 'Google Podcasts', 'YouTube'].map((platform) => (
              <button
                key={platform}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {platform}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Recent Episodes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Recent Episodes
          </h2>

          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Episode Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-full lg:w-32 h-48 lg:h-32 rounded-xl overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {episode.isNew && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </div>
                    )}
                  </div>

                  {/* Episode Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                            Episode #{episode.number}
                          </span>
                          <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                            <span>{new Date(episode.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                            <SafeIcon icon={FiClock} className="w-4 h-4" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {episode.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {episode.description}
                        </p>

                        {/* Guest Info */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {episode.guest.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">
                              {episode.guest}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              {episode.guestTitle}
                            </div>
                          </div>
                        </div>

                        {/* Topics */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {episode.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Play Controls */}
                      <div className="flex items-center space-x-3 lg:ml-6">
                        <button
                          onClick={() => togglePlay(episode.id)}
                          className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                        >
                          <SafeIcon 
                            icon={currentPlaying === episode.id ? FiPause : FiPlay} 
                            className="w-6 h-6" 
                          />
                        </button>
                        <button className="p-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                          <SafeIcon icon={FiDownload} className="w-5 h-5" />
                        </button>
                        <button className="p-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                          <SafeIcon icon={FiShare2} className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Load More Episodes
          </button>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700"
        >
          <SafeIcon icon={FiHeadphones} className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Want to be a Guest?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Share your insights on innovation, leadership, or social impact with our global audience. We're always looking for visionary leaders with compelling stories.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Apply to be a Guest
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Podcast;