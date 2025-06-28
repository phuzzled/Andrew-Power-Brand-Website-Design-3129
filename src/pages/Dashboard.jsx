import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiTrendingUp, 
  FiUsers, 
  FiMail, 
  FiGlobe, 
  FiTarget, 
  FiBarChart3,
  FiDownload,
  FiShare2,
  FiEye,
  FiHeart,
  FiMessageSquare,
  FiPlay
} = FiIcons;

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  // Simulated real-time data
  const [realTimeData, setRealTimeData] = useState({
    websiteVisitors: 1247,
    newsletterSubscribers: 10543,
    projectViews: 2891,
    socialEngagement: 5672
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        websiteVisitors: prev.websiteVisitors + Math.floor(Math.random() * 5),
        newsletterSubscribers: prev.newsletterSubscribers + Math.floor(Math.random() * 3),
        projectViews: prev.projectViews + Math.floor(Math.random() * 8),
        socialEngagement: prev.socialEngagement + Math.floor(Math.random() * 12)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Chart configurations
  const visitorChartOption = {
    title: {
      text: 'Website Traffic',
      textStyle: { color: '#64748b', fontSize: 16 }
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: { type: 'value' },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      lineStyle: { color: '#8b5cf6' },
      areaStyle: { color: 'rgba(139, 92, 246, 0.1)' }
    }]
  };

  const engagementChartOption = {
    title: {
      text: 'Content Engagement',
      textStyle: { color: '#64748b', fontSize: 16 }
    },
    tooltip: { trigger: 'item' },
    series: [{
      type: 'pie',
      radius: '60%',
      data: [
        { value: 1048, name: 'Blog Posts' },
        { value: 735, name: 'Videos' },
        { value: 580, name: 'Projects' },
        { value: 484, name: 'Newsletter' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  const kpiCards = [
    {
      title: "Website Visitors",
      value: realTimeData.websiteVisitors.toLocaleString(),
      change: "+12.5%",
      icon: FiEye,
      color: "primary"
    },
    {
      title: "Newsletter Subscribers",
      value: realTimeData.newsletterSubscribers.toLocaleString(),
      change: "+8.3%",
      icon: FiMail,
      color: "electric"
    },
    {
      title: "Project Views",
      value: realTimeData.projectViews.toLocaleString(),
      change: "+15.7%",
      icon: FiTarget,
      color: "green"
    },
    {
      title: "Social Engagement",
      value: realTimeData.socialEngagement.toLocaleString(),
      change: "+23.1%",
      icon: FiHeart,
      color: "rose"
    }
  ];

  const recentActivity = [
    { type: 'newsletter', message: 'New subscriber from LinkedIn post', time: '2 min ago' },
    { type: 'project', message: 'Project NOVI featured on TechCrunch', time: '15 min ago' },
    { type: 'contact', message: 'Speaking inquiry from Innovation Summit', time: '1 hour ago' },
    { type: 'social', message: 'LinkedIn post reached 10K views', time: '2 hours ago' },
    { type: 'newsletter', message: 'The Power Source #47 sent to 10,543 subscribers', time: '1 day ago' }
  ];

  const leadSources = [
    { source: 'Organic Search', leads: 156, percentage: 35 },
    { source: 'LinkedIn', leads: 89, percentage: 20 },
    { source: 'Direct Traffic', leads: 78, percentage: 18 },
    { source: 'Speaking Events', leads: 67, percentage: 15 },
    { source: 'Referrals', leads: 53, percentage: 12 }
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Real-time insights into your digital presence and impact
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              
              <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {kpiCards.map((kpi, index) => (
            <div
              key={kpi.title}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  kpi.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' :
                  kpi.color === 'electric' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  kpi.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-rose-100 dark:bg-rose-900/30'
                }`}>
                  <SafeIcon 
                    icon={kpi.icon} 
                    className={`w-6 h-6 ${
                      kpi.color === 'primary' ? 'text-primary-600 dark:text-primary-400' :
                      kpi.color === 'electric' ? 'text-blue-600 dark:text-blue-400' :
                      kpi.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      'text-rose-600 dark:text-rose-400'
                    }`} 
                  />
                </div>
                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                  {kpi.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {kpi.value}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {kpi.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <ReactECharts option={visitorChartOption} style={{ height: '300px' }} />
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <ReactECharts option={engagementChartOption} style={{ height: '300px' }} />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'newsletter' ? 'bg-primary-100 dark:bg-primary-900/30' :
                    activity.type === 'project' ? 'bg-green-100 dark:bg-green-900/30' :
                    activity.type === 'contact' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    'bg-rose-100 dark:bg-rose-900/30'
                  }`}>
                    <SafeIcon 
                      icon={
                        activity.type === 'newsletter' ? FiMail :
                        activity.type === 'project' ? FiTarget :
                        activity.type === 'contact' ? FiUsers :
                        FiShare2
                      } 
                      className={`w-4 h-4 ${
                        activity.type === 'newsletter' ? 'text-primary-600 dark:text-primary-400' :
                        activity.type === 'project' ? 'text-green-600 dark:text-green-400' :
                        activity.type === 'contact' ? 'text-blue-600 dark:text-blue-400' :
                        'text-rose-600 dark:text-rose-400'
                      }`} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white text-sm">
                      {activity.message}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Sources */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Lead Sources
            </h3>
            
            <div className="space-y-4">
              {leadSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-900 dark:text-white font-medium">
                        {source.source}
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {source.leads} leads
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;