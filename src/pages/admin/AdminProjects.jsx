import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { contentService } from '../../services/contentService'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiPlus, FiEdit, FiTrash2, FiExternalLink, FiStar } = FiIcons

const AdminProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await contentService.getProjects()
      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const { error } = await contentService.deleteProject(id)
      if (error) throw error
      
      setProjects(projects.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Error deleting project')
    }
  }

  const toggleFeatured = async (project) => {
    try {
      const { error } = await contentService.updateProject(project.id, {
        featured: !project.featured
      })
      if (error) throw error
      
      setProjects(projects.map(p => 
        p.id === project.id ? { ...p, featured: !p.featured } : p
      ))
    } catch (error) {
      console.error('Error updating project:', error)
    }
  }

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Manage your portfolio projects
            </p>
          </div>
          <Link
            to="/admin/projects/new"
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>New Project</span>
          </Link>
        </div>

        {/* Projects List */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <SafeIcon icon={FiPlus} className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                No projects yet
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                Get started by creating your first project
              </p>
              <Link
                to="/admin/projects/new"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Create Project</span>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {projects.map((project) => (
                <div key={project.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          project.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="capitalize">{project.category}</span>
                        <span>•</span>
                        <span>Created {new Date(project.created_at).toLocaleDateString()}</span>
                        {project.tags && project.tags.length > 0 && (
                          <>
                            <span>•</span>
                            <div className="flex space-x-1">
                              {project.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-600 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleFeatured(project)}
                        className={`p-2 rounded-lg transition-colors ${
                          project.featured
                            ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'text-slate-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                        }`}
                        title={project.featured ? 'Remove from featured' : 'Add to featured'}
                      >
                        <SafeIcon icon={FiStar} className="w-4 h-4" />
                      </button>
                      <Link
                        to={`/admin/projects/edit/${project.id}`}
                        className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                      {project.external_link && (
                        <a
                          href={project.external_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                        >
                          <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminProjects