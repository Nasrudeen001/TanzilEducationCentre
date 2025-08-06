// Basic types for website functionality
export interface User {
  id: string
  username: string
  email: string
  role: "admin" | "user"
  createdAt: string
}

// Keep any other basic types that might be needed for the website
// Remove all school management specific types
