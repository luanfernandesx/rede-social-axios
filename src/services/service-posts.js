import api from './config'

export async function getPosts(params) {
  const { data, status } = await api.get(`/posts?${params}`)
  if (status === 200) {
    return data
  }
  return []
}