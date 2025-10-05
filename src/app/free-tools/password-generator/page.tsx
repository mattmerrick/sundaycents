'use client'

import { useState } from 'react'

export default function PasswordGenerator() {
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [excludeSimilar, setExcludeSimilar] = useState(true)
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')

  const generatePassword = () => {
    let charset = ''
    
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if (excludeSimilar) {
      charset = charset.replace(/[0O1lI]/g, '')
    }
    
    if (excludeAmbiguous) {
      charset = charset.replace(/[{}[\]()\/\\'"~,;.<>]/g, '')
    }
    
    if (charset === '') {
      alert('Please select at least one character type')
      return
    }
    
    let password = ''
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    
    setGeneratedPassword(password)
    calculateStrength(password)
  }

  const calculateStrength = (password: string) => {
    let score = 0
    let feedback = []
    
    if (password.length >= 8) score += 1
    if (password.length >= 12) score += 1
    if (password.length >= 16) score += 1
    
    if (/[a-z]/.test(password)) score += 1
    if (/[A-Z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    
    // Check for patterns
    if (!/(.)\1{2,}/.test(password)) score += 1 // No repeated characters
    if (!/123|abc|qwe|asd|zxc/i.test(password)) score += 1 // No common sequences
    
    if (score <= 3) {
      setPasswordStrength('Weak')
    } else if (score <= 5) {
      setPasswordStrength('Fair')
    } else if (score <= 7) {
      setPasswordStrength('Good')
    } else {
      setPasswordStrength('Strong')
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword)
    alert('Password copied to clipboard!')
  }

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Weak': return 'text-red-500'
      case 'Fair': return 'text-orange-500'
      case 'Good': return 'text-yellow-500'
      case 'Strong': return 'text-green-500'
      default: return 'text-white/60'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-600 to-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Password Generator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Generate strong, secure passwords instantly. Customize options for maximum security.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Password Options</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password Length: {length} characters
                </label>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white/60 mt-1">
                  <span>4</span>
                  <span>50</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Include Uppercase Letters (A-Z)</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Include Lowercase Letters (a-z)</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Include Numbers (0-9)</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Include Symbols (!@#$%^&*)</span>
                </label>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={excludeSimilar}
                    onChange={(e) => setExcludeSimilar(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Exclude Similar Characters (0, O, 1, l, I)</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={excludeAmbiguous}
                    onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Exclude Ambiguous Characters ({ } [ ] ( ) / \ ' " ~ , ; . < >)</span>
                </label>
              </div>

              <button
                onClick={generatePassword}
                className="w-full bg-white text-slate-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                Generate Password
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Generated Password</h2>
              
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                {generatedPassword ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 text-sm">Password Strength:</span>
                      <span className={`font-semibold ${getStrengthColor(passwordStrength)}`}>
                        {passwordStrength}
                      </span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 mb-4">
                      <code className="text-white text-lg break-all">
                        {generatedPassword}
                      </code>
                    </div>
                    <button
                      onClick={copyPassword}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy Password
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-white/60">
                      Configure your options and click "Generate Password" to create a secure password
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white mb-2">🔒 Password Security Tips</h3>
                <ul className="text-white/90 text-xs space-y-1">
                  <li>• Use at least 12 characters</li>
                  <li>• Include uppercase, lowercase, numbers, and symbols</li>
                  <li>• Avoid dictionary words and personal information</li>
                  <li>• Use a unique password for each account</li>
                  <li>• Consider using a password manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="text-white/80 hover:text-white transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}