'use client'

import { useForm } from 'react-hook-form'
import md5 from 'md5'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()

  // Prevent access to /auth if already logged in
  useEffect(() => {
    const hash = localStorage.getItem("user_hash")
    if (hash) {
      router.replace('/dashboard')
    }
  }, [router])

  const onSubmit = ({ email }) => {
    const hashedEmail = md5(email.trim().toLowerCase())
    localStorage.setItem("user_hash", hashedEmail)
    router.replace("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#161B22] p-6 rounded-lg shadow w-full max-w-sm space-y-4 text-white">
        <h2 className="text-xl font-semibold text-center">Login with Email</h2>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 rounded bg-[#0D1117] border border-gray-600 text-sm text-white"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <button type="submit" className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </div>
  )
}
