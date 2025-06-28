import { supabase } from '../lib/supabase'

export const contentService = {
  // Projects
  async getProjects() {
    const { data, error } = await supabase
      .from('projects_ap2024')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  async getFeaturedProjects() {
    const { data, error } = await supabase
      .from('projects_ap2024')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(4)
    
    return { data, error }
  },

  async createProject(project) {
    const { data, error } = await supabase
      .from('projects_ap2024')
      .insert([project])
      .select()
      .single()
    
    return { data, error }
  },

  async updateProject(id, updates) {
    const { data, error } = await supabase
      .from('projects_ap2024')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteProject(id) {
    const { error } = await supabase
      .from('projects_ap2024')
      .delete()
      .eq('id', id)
    
    return { error }
  },

  // Case Studies
  async getCaseStudies() {
    const { data, error } = await supabase
      .from('case_studies_ap2024')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  async createCaseStudy(caseStudy) {
    const { data, error } = await supabase
      .from('case_studies_ap2024')
      .insert([caseStudy])
      .select()
      .single()
    
    return { data, error }
  },

  async updateCaseStudy(id, updates) {
    const { data, error } = await supabase
      .from('case_studies_ap2024')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteCaseStudy(id) {
    const { error } = await supabase
      .from('case_studies_ap2024')
      .delete()
      .eq('id', id)
    
    return { error }
  },

  // Blog Posts
  async getBlogPosts(publishedOnly = true) {
    let query = supabase
      .from('blog_posts_ap2024')
      .select('*')
      .order('created_at', { ascending: false })

    if (publishedOnly) {
      query = query.eq('published', true)
    }
    
    const { data, error } = await query
    return { data, error }
  },

  async getFeaturedBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts_ap2024')
      .select('*')
      .eq('featured', true)
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(1)
    
    return { data, error }
  },

  async createBlogPost(post) {
    const { data, error } = await supabase
      .from('blog_posts_ap2024')
      .insert([post])
      .select()
      .single()
    
    return { data, error }
  },

  async updateBlogPost(id, updates) {
    const { data, error } = await supabase
      .from('blog_posts_ap2024')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteBlogPost(id) {
    const { error } = await supabase
      .from('blog_posts_ap2024')
      .delete()
      .eq('id', id)
    
    return { error }
  },

  // Podcast Episodes
  async getPodcastEpisodes(publishedOnly = true) {
    let query = supabase
      .from('podcast_episodes_ap2024')
      .select('*')
      .order('episode_number', { ascending: false })

    if (publishedOnly) {
      query = query.eq('published', true)
    }
    
    const { data, error } = await query
    return { data, error }
  },

  async createPodcastEpisode(episode) {
    const { data, error } = await supabase
      .from('podcast_episodes_ap2024')
      .insert([episode])
      .select()
      .single()
    
    return { data, error }
  },

  async updatePodcastEpisode(id, updates) {
    const { data, error } = await supabase
      .from('podcast_episodes_ap2024')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deletePodcastEpisode(id) {
    const { error } = await supabase
      .from('podcast_episodes_ap2024')
      .delete()
      .eq('id', id)
    
    return { error }
  },

  // Resources
  async getResources() {
    const { data, error } = await supabase
      .from('resources_ap2024')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  async createResource(resource) {
    const { data, error } = await supabase
      .from('resources_ap2024')
      .insert([resource])
      .select()
      .single()
    
    return { data, error }
  },

  async updateResource(id, updates) {
    const { data, error } = await supabase
      .from('resources_ap2024')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  async deleteResource(id) {
    const { error } = await supabase
      .from('resources_ap2024')
      .delete()
      .eq('id', id)
    
    return { error }
  },

  // Analytics
  async incrementViews(table, id) {
    const { error } = await supabase.rpc('increment_views', {
      table_name: table,
      record_id: id
    })
    
    return { error }
  }
}