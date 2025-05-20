'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const hash = typeof window !== "undefined" && localStorage.getItem("user_hash")
    if (hash) {
      router.replace("/dashboard")
    } else {
      router.replace("/auth")
    }
  }, [router])

  return null // or a loading spinner while redirecting
}
