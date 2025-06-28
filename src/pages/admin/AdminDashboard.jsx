import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { contentService } from '../../services/contentService'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiFolderPlus, FiFileText, FiMic, FiDownload, FiUsers, FiTrendingUp, FiEye, FiPlus } = FiIcons

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    caseStudies: 0,
    blogPosts: 0,
    podcastEpisodes: 0,
    resources: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [projects, caseStudies, blogPosts, podcastEpisodes, resources] = await Promise.all([
        contentService.getProjects(),
        contentService.getCaseStudies(),
        contentService.getBlogPosts(false),
        contentService.getPodcastEpisodes(false),
        contentService.getResources()
      ])

      setStats({
        projects: projects.data?.length || 0,
        caseStudies: caseStudies.data?.length || 0,
        blogPosts: blogPosts.data?.length || 0,
        podcastEpisodes: podcastEpisodes.data?.length || 0,
        resources: resources.data?.length || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Projects',
      count: stats.projects,
      icon: FiFolderPlus,
      color: 'primary',
      link: '/admin/projects'
    },
    {
      title: 'Case Studies',
      count: stats.caseStudies,
      icon: FiUsers,
      color: 'blue',
      link: '/admin/case-studies'
    },
    {
      title: 'Blog Posts',
      count: stats.blogPosts,
      icon: FiFileText,
      color: 'green',
      link: '/admin/blog'
    },
    {
      title: 'Podcast Episodes',
      count: stats.podcastEpisodes,
      icon: FiMic,
      color: 'purple',
      link: '/admin/podcast'
    },
    {
      title: 'Resources',
      count: stats.resources,
      icon: FiDownload,
      color: 'orange',
      link: '/admin/resources'
    }
  ]

  const quickActions = [
    {
      title: 'New Project',
      description: 'Add a new project to your portfolio',
      icon: FiFolderPlus,
      link: '/admin/projects/new',
      color: 'primary'
    },
    {
      title: 'New Blog Post',
      description: 'Write and publish a new blog article',
      icon: FiFileText,
      link: '/admin/blog/new',
      color: 'green'
    },
    {
      title: 'New Podcast Episode',
      description: 'Add a new podcast episode',
      icon: FiMic,
      link: '/admin/podcast/new',
      color: 'purple'
    },
    {
      title: 'New Resource',
      description: 'Upload a new resource for download',
      icon: FiDownload,
      link: '/admin/resources/new',
      color: 'orange'
    }
  ]

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Manage your content and track your website's performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {statCards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {card.count}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  card.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' :
                  card.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  card.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  card.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                } group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={card.icon} className={`w-6 h-6 ${
                    card.color === 'primary' ? 'text-primary-600 dark:text-primary-400' :
                    card.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    card.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    card.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.link}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  action.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' :
                  action.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  action.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                } group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={action.icon} className={`w-6 h-6 ${
                    action.color === 'primary' ? 'text-primary-600 dark:text-primary-400' :
                    action.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    action.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400">
                Activity tracking will be available soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard