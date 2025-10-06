'use client'

import { useState, useEffect } from 'react'

interface TimeEntry {
  id: string
  task: string
  startTime: Date
  endTime: Date | null
  duration: number
  isRunning: boolean
}

export default function TimeTracker() {
  const [currentTask, setCurrentTask] = useState('')
  const [entries, setEntries] = useState<TimeEntry[]>([])
  const [currentTimer, setCurrentTimer] = useState<TimeEntry | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (currentTimer?.isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - currentTimer.startTime.getTime())
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [currentTimer])

  const startTimer = () => {
    if (!currentTask.trim()) return

    const newEntry: TimeEntry = {
      id: Date.now().toString(),
      task: currentTask,
      startTime: new Date(),
      endTime: null,
      duration: 0,
      isRunning: true
    }

    setCurrentTimer(newEntry)
    setCurrentTask('')
  }

  const stopTimer = () => {
    if (!currentTimer) return

    const updatedEntry = {
      ...currentTimer,
      endTime: new Date(),
      duration: elapsedTime,
      isRunning: false
    }

    setEntries(prev => [...prev, updatedEntry])
    setCurrentTimer(null)
    setElapsedTime(0)
  }

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id))
  }

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const totalTime = entries.reduce((sum, entry) => sum + entry.duration, 0) + elapsedTime

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Time Tracker
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Track your time and boost productivity. Monitor how you spend your time on different tasks.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          {/* Current Timer */}
          <div className="text-center mb-8">
            <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-2xl p-8 mb-6">
              <div className="text-6xl font-bold style={{color: '#FFFFFF'}} mb-4">
                {formatTime(elapsedTime)}
              </div>
              <div className="style={{color: '#FFFFFF'}}/80 text-lg">
                {currentTimer ? currentTimer.task : 'No active timer'}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <input
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !currentTimer && startTimer()}
                placeholder="Enter task name..."
                disabled={!!currentTimer}
                className="px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
              />
              
              {!currentTimer ? (
                <button
                  onClick={startTimer}
                  disabled={!currentTask.trim()}
                  className="bg-green-500 hover:bg-green-600 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start
                </button>
              ) : (
                <button
                  onClick={stopTimer}
                  className="bg-red-500 hover:bg-red-600 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Stop
                </button>
              )}
            </div>
          </div>

          {/* Time Entries */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}}">Time Entries</h2>
              <div className="style={{color: '#FFFFFF'}}/80">
                Total: {formatTime(totalTime)}
              </div>
            </div>

            {entries.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4 hover:style={{backgroundColor: '#FFFFFF'}}/20 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="style={{color: '#FFFFFF'}} font-semibold mb-1">{entry.task}</h3>
                        <div className="flex items-center gap-4 text-sm style={{color: '#FFFFFF'}}/60">
                          <span>
                            {entry.startTime.toLocaleTimeString()} - {entry.endTime?.toLocaleTimeString()}
                          </span>
                          <span>•</span>
                          <span>{entry.endTime?.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-green-400">
                          {formatTime(entry.duration)}
                        </span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-8 text-center">
                <p className="style={{color: '#FFFFFF'}}/60">
                  No time entries yet. Start tracking your first task!
                </p>
              </div>
            )}
          </div>

          {/* Productivity Tips */}
          <div className="bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">⏰ Time Tracking Tips</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Track time in real-time for accuracy</li>
                <li>• Use specific task names</li>
                <li>• Review your time data weekly</li>
                <li>• Identify time-wasting activities</li>
              </ul>
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Set time goals for tasks</li>
                <li>• Take breaks between tasks</li>
                <li>• Batch similar activities together</li>
                <li>• Use the Pomodoro technique</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="style={{color: '#FFFFFF'}}/80 hover:style={{color: '#FFFFFF'}} transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
