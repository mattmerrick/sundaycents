'use client'

import { useState } from 'react'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let result = ''
    for (let i = 0; i < 12; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Generated Password:
          </label>
          <div className="bg-gray-50 border rounded-md p-3 mb-4">
            <code className="text-sm">{password || 'Click generate to create a password'}</code>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Password
        </button>

        <div className="mt-4 text-center">
          <a href="/free-tools" className="text-blue-600 hover:text-blue-800">
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </div>
  )
}