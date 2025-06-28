import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiUser, FiTag, FiTrendingUp, FiEye, FiMessageSquare, FiShare2, FiBookmark } = FiIcons;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'social-impact', name: 'Social Impact' },
    { id: 'psychology', name: 'Psychology' },
    { id: 'technology', name: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Systematic Innovation: Beyond Traditional Frameworks",
      excerpt: "As we enter a new era of complexity and uncertainty, traditional innovation frameworks are showing their limitations. Here's how systematic innovation is evolving to meet tomorrow's challenges.",
      content: "Innovation has always been about creating something new and valuable, but the methods we use to innovate are themselves evolving. In my 15+ years working with organizations across sectors, I've observed a fundamental shift happening in how we approach systematic innovation...",
      category: "innovation",
      author: "Andrew Q. Power",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      tags: ["Innovation", "Systems Thinking", "Future Trends", "Methodology"],
      featured: true,
      views: "12.4K",
      comments: 47,
      likes: 284
    },
    {
      id: 2,
      title: "Building Antifragile Organizations: Lessons from Crisis Leadership",
      excerpt: "In an increasingly volatile world, resilience isn't enough. Organizations need to become antifragile - not just surviving disruption, but thriving because of it.",
      content: "The concept of antifragility, introduced by Nassim Taleb, goes beyond resilience. While resilient systems bounce back from stress, antifragile systems actually grow stronger...",
      category: "leadership",
      author: "Andrew Q. Power",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      tags: ["Leadership", "Resilience", "Crisis Management", "Organizational Development"],
      featured: false,
      views: "8.7K",
      comments: 32,
      likes: 196
    },
    {
      id: 3,
      title: "Measuring What Matters: The Evolution of Impact Analytics",
      excerpt: "Traditional metrics fall short when measuring social impact. Here's how advanced analytics are revolutionizing our understanding of what creates lasting change.",
      content: "For too long, the social sector has relied on outdated metrics that measure activities rather than outcomes. The rise of impact analytics is changing this paradigm...",
      category: "social-impact",
      author: "Andrew Q. Power",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["Impact Measurement", "Analytics", "Social Change", "Data Science"],
      featured: true,
      views: "15.2K",
      comments: 58,
      likes: 342
    },
    {
      id: 4,
      title: "The Psychology of Organizational Transformation",
      excerpt: "Why do some transformation initiatives succeed while others fail? The answer lies in understanding the psychological principles that drive human behavior in organizations.",
      content: "Organizational transformation is fundamentally about changing human behavior at scale. Yet most transformation efforts focus on processes and structures while ignoring the psychological factors...",
      category: "psychology",
      author: "Andrew Q. Power",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["Psychology", "Change Management", "Transformation", "Behavioral Science"],
      featured: false,
      views: "9.8K",
      comments: 41,
      likes: 237
    },
    {
      id: 5,
      title: "AI Ethics in Humanitarian Contexts: A Framework for Responsible Innovation",
      excerpt: "As AI becomes more prevalent in humanitarian work, we need robust ethical frameworks to ensure technology serves humanity's best interests.",
      content: "The integration of artificial intelligence in humanitarian contexts presents unprecedented opportunities and equally significant challenges...",
      category: "technology",
      author: "Andrew Q. Power",
      date: "2023-12-20",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      tags: ["AI Ethics", "Humanitarian Innovation", "Technology", "Responsible AI"],
      featured: false,
      views: "11.3K",
      comments: 72,
      likes: 298
    },
    {
      id: 6,
      title: "The Network Effect: How Connected Leadership Drives Global Change",
      excerpt: "In our interconnected world, the most effective leaders aren't just building great organizations - they're building networks that amplify impact across systems.",
      content: "Traditional leadership models focus on hierarchical influence within single organizations. But the challenges we face today require a different approach...",
      category: "leadership",
      author: "Andrew Q. Power",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      tags: ["Network Leadership", "Global Impact", "Systems Change", "Collaboration"],
      featured: false,
      views: "7.9K",
      comments: 29,
      likes: 168
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

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
            Insights & Perspectives
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Thoughts on innovation, leadership, and creating systematic change. Practical insights from the field and the latest research.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>❤️ {featuredPost.likes}</span>
                    </div>
                  </div>

                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

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
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform -translate-y-1'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 group cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>

                {/* Bookmark */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Engagement & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                      <SafeIcon icon={FiShare2} className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-slate-500 dark:text-slate-400">❤️ {post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Load More Articles
          </button>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Never Miss an Insight</h2>
          <p className="text-xl mb-6 opacity-90">
            Get the latest articles delivered to your inbox. Join 10,000+ readers who stay ahead of the curve.
          </p>
          <button className="bg-white text-primary-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;