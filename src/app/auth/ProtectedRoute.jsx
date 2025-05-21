'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const userHash = localStorage.getItem("user_hash")
    if (!userHash) {
      router.replace("/auth")
    }
  }, [router])

  if (!isClient) return null 

  return children
}
