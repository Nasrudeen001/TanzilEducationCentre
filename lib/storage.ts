// Basic storage utility for website functionality
export const storage = {
  // Basic user management
  users: {
    getAll: () => {
      if (typeof window === 'undefined') return []
      const stored = localStorage.getItem('users')
      return stored ? JSON.parse(stored) : []
    },
    getById: (id: string) => {
      const users = storage.users.getAll()
      return users.find((user: any) => user.id === id)
    },
    create: (user: any) => {
      const users = storage.users.getAll()
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
      return user
    },
    update: (id: string, updates: any) => {
      const users = storage.users.getAll()
      const index = users.findIndex((user: any) => user.id === id)
      if (index !== -1) {
        users[index] = { ...users[index], ...updates }
        localStorage.setItem('users', JSON.stringify(users))
        return users[index]
      }
      return null
    },
    delete: (id: string) => {
      const users = storage.users.getAll()
      const filtered = users.filter((user: any) => user.id !== id)
      localStorage.setItem('users', JSON.stringify(filtered))
    }
  },

  // Basic settings
  settings: {
    get: (key: string) => {
      if (typeof window === 'undefined') return null
      return localStorage.getItem(key)
    },
    set: (key: string, value: string) => {
      if (typeof window === 'undefined') return
      localStorage.setItem(key, value)
    },
    remove: (key: string) => {
      if (typeof window === 'undefined') return
      localStorage.removeItem(key)
    }
  }
} 