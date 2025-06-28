import React from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import SafeIcon from '../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiHome, FiFolderPlus, FiFileText, FiMic, FiDownload, FiUsers, FiLogOut, FiMenu, FiX } = FiIcons

const AdminLayout = ({ children }) => {
  const { user, isAdmin, loading, signOut } = useAuth()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: FiHome },
    { name: 'Projects', path: '/admin/projects', icon: FiFolderPlus },
    { name: 'Case Studies', path: '/admin/case-studies', icon: FiUsers },
    { name: 'Blog Posts', path: '/admin/blog', icon: FiFileText },
    { name: 'Podcast', path: '/admin/podcast', icon: FiMic },
    { name: 'Resources', path: '/admin/resources', icon: FiDownload },
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-700">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-electric-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AP</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <SafeIcon icon={FiX} className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user.email}&background=8b5cf6&color=fff`}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                {user.user_metadata?.full_name || user.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiLogOut} className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top bar */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <SafeIcon icon={FiMenu} className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-slate-900 dark:text-white">Admin Panel</h1>
          <div className="w-9" /> {/* Spacer */}
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default AdminLayout