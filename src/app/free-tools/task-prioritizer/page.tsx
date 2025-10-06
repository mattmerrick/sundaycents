'use client'

import { useState } from 'react'

interface Task {
  id: string
  text: string
  importance: number
  urgency: number
  priority: number
}

export default function TaskPrioritizer() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [usageCount, setUsageCount] = useState(0)

  const addTask = () => {
    if (!newTask.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    const importance = Math.floor(Math.random() * 10) + 1
    const urgency = Math.floor(Math.random() * 10) + 1
    const priority = (importance + urgency) / 2

    const task: Task = {
      id: Date.now().toString(),
      text: newTask,
      importance,
      urgency,
      priority
    }

    setTasks(prev => [...prev, task].sort((a, b) => b.priority - a.priority))
    setNewTask('')
    setUsageCount(prev => prev + 1)
  }

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const getPriorityColor = (priority: number) => {
    if (priority >= 8) return 'text-red-500'
    if (priority >= 6) return 'text-orange-500'
    if (priority >= 4) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getPriorityLabel = (priority: number) => {
    if (priority >= 8) return 'High'
    if (priority >= 6) return 'Medium-High'
    if (priority >= 4) return 'Medium'
    return 'Low'
  }

  const clearAllTasks = () => {
    setTasks([])
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Task Prioritizer
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Automatically prioritize your tasks based on importance and urgency. Focus on what matters most.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Add Your Tasks</h2>
              
              <div className="flex items-center justify-between mb-4">
                <div className="style={{color: '#FFFFFF'}}/80 text-sm">
                  Free tasks remaining: {3 - usageCount}/3
                </div>
                {tasks.length > 0 && (
                  <button
                    onClick={clearAllTasks}
                    className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  placeholder="Enter a task..."
                  disabled={usageCount >= 3}
                  className="flex-1 px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                />
                <button
                  onClick={addTask}
                  disabled={!newTask.trim() || usageCount >= 3}
                  className="style={{backgroundColor: '#FFFFFF'}} text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add
                </button>
              </div>

              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-3">How It Works</h3>
                <ul className="style={{color: '#FFFFFF'}}/80 text-sm space-y-2">
                  <li>• Tasks are scored on importance (1-10)</li>
                  <li>• Tasks are scored on urgency (1-10)</li>
                  <li>• Priority = (Importance + Urgency) ÷ 2</li>
                  <li>• Higher scores appear first</li>
                </ul>
              </div>

              {usageCount >= 3 && (
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-2">Upgrade for Unlimited Tasks</h3>
                  <p className="style={{color: '#FFFFFF'}}/90 text-sm mb-3">
                    You've added all your free tasks. Upgrade to continue using this tool unlimited times.
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 style={{color: '#FFFFFF'}} font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm">
                    Upgrade Now
                  </button>
                </div>
              )}
            </div>

            <div>
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold style={{color: '#FFFFFF'}}">Prioritized Tasks</h3>
                  <span className="style={{color: '#FFFFFF'}}/80 text-sm">
                    {tasks.length} task{tasks.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                      <div
                        key={task.id}
                        className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4 hover:style={{backgroundColor: '#FFFFFF'}}/20 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="style={{color: '#FFFFFF'}}/60 text-sm font-mono">
                                #{index + 1}
                              </span>
                              <span className={`text-sm font-semibold ${getPriorityColor(task.priority)}`}>
                                {getPriorityLabel(task.priority)}
                              </span>
                            </div>
                            <p className="style={{color: '#FFFFFF'}}/90 text-sm leading-relaxed">
                              {task.text}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-xs style={{color: '#FFFFFF'}}/60">
                              <span>Importance: {task.importance}/10</span>
                              <span>Urgency: {task.urgency}/10</span>
                              <span>Priority: {task.priority.toFixed(1)}/10</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeTask(task.id)}
                            className="text-red-400 hover:text-red-300 ml-2 transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="style={{color: '#FFFFFF'}}/60">
                        Add tasks to see them prioritized here
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {tasks.length > 0 && (
            <div className="mt-8 style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">💡 Focus Strategy</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">High Priority (8-10)</h4>
                  <p className="style={{color: '#FFFFFF'}}/80 text-sm">
                    Do these first! They're both important and urgent.
                  </p>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">Medium-High (6-7.9)</h4>
                  <p className="style={{color: '#FFFFFF'}}/80 text-sm">
                    Schedule these for today or tomorrow.
                  </p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">Lower Priority (1-5.9)</h4>
                  <p className="style={{color: '#FFFFFF'}}/80 text-sm">
                    Can wait or delegate to others.
                  </p>
                </div>
              </div>
            </div>
          )}
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
