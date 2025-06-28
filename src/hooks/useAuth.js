import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      
      if (session?.user) {
        await checkAdminStatus(session.user.email)
      }
      
      setLoading(false)
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await checkAdminStatus(session.user.email)
        } else {
          setIsAdmin(false)
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const checkAdminStatus = async (email) => {
    if (!email) return

    const { data, error } = await supabase
      .from('admin_users_ap2024')
      .select('*')
      .eq('email', email)
      .eq('is_active', true)
      .single()

    if (data && !error) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/admin`
      }
    })
    return { error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    setIsAdmin(false)
    return { error }
  }

  return {
    user,
    loading,
    isAdmin,
    signInWithGoogle,
    signOut
  }
}