'use client'

import { useState } from 'react'

interface Goal {
  id: string
  title: string
  description: string
  targetValue: number
  currentValue: number
  unit: string
  deadline: string
  priority: 'low' | 'medium' | 'high'
  status: 'not-started' | 'in-progress' | 'completed'
  createdAt: Date
}

export default function GoalTracker() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    targetValue: '',
    currentValue: '0',
    unit: '',
    deadline: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  })

  const addGoal = () => {
    if (!newGoal.title.trim() || !newGoal.targetValue || !newGoal.deadline) return

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      targetValue: parseFloat(newGoal.targetValue),
      currentValue: parseFloat(newGoal.currentValue),
      unit: newGoal.unit,
      deadline: newGoal.deadline,
      priority: newGoal.priority,
      status: parseFloat(newGoal.currentValue) >= parseFloat(newGoal.targetValue) ? 'completed' : 'in-progress',
      createdAt: new Date()
    }

    setGoals(prev => [...prev, goal])
    setNewGoal({
      title: '',
      description: '',
      targetValue: '',
      currentValue: '0',
      unit: '',
      deadline: '',
      priority: 'medium'
    })
    setShowAddForm(false)
  }

  const updateProgress = (id: string, newValue: number) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === id) {
        const updatedGoal = { ...goal, currentValue: newValue }
        if (newValue >= goal.targetValue) {
          updatedGoal.status = 'completed'
        } else if (newValue > 0) {
          updatedGoal.status = 'in-progress'
        } else {
          updatedGoal.status = 'not-started'
        }
        return updatedGoal
      }
      return goal
    }))
  }

  const deleteGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
      default: return 'text-white/60'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400'
      case 'in-progress': return 'text-blue-400'
      case 'not-started': return 'text-gray-400'
      default: return 'text-white/60'
    }
  }

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min(100, (current / target) * 100)
  }

  const completedGoals = goals.filter(goal => goal.status === 'completed').length
  const totalGoals = goals.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Goal Tracker
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Set, track, and achieve your goals. Stay motivated and monitor your progress.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          {/* Stats */}
          {totalGoals > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{totalGoals}</div>
                <div className="text-white/60 text-sm">Total Goals</div>
              </div>
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{completedGoals}</div>
                <div className="style={{color: '#FFFFFF'}}/60 text-sm">Completed</div>
              </div>
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold style={{color: '#0070F3'}}">
                  {totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0}%
                </div>
                <div className="style={{color: '#FFFFFF'}}/60 text-sm">Success Rate</div>
              </div>
            </div>
          )}

          {/* Add Goal Button */}
          <div className="mb-8">
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="style={{backgroundColor: '#FFFFFF'}} text-teal-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200"
              >
                + Add New Goal
              </button>
            ) : (
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">Add New Goal</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Goal Title</label>
                    <input
                      type="text"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., Read 12 books this year"
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Priority</label>
                    <select
                      value={newGoal.priority}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, priority: e.target.value as 'low' | 'medium' | 'high' }))}
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Target Value</label>
                    <input
                      type="number"
                      value={newGoal.targetValue}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, targetValue: e.target.value }))}
                      placeholder="12"
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Unit</label>
                    <input
                      type="text"
                      value={newGoal.unit}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, unit: e.target.value }))}
                      placeholder="books"
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Current Progress</label>
                    <input
                      type="number"
                      value={newGoal.currentValue}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, currentValue: e.target.value }))}
                      placeholder="0"
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Deadline</label>
                    <input
                      type="date"
                      value={newGoal.deadline}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">Description (Optional)</label>
                  <textarea
                    value={newGoal.description}
                    onChange={(e) => setNewGoal(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your goal..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addGoal}
                    disabled={!newGoal.title.trim() || !newGoal.targetValue || !newGoal.deadline}
                    className="style={{backgroundColor: '#FFFFFF'}} text-teal-600 font-semibold px-6 py-2 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add Goal
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="style={{backgroundColor: '#FFFFFF'}}/20 style={{color: '#FFFFFF'}} font-semibold px-6 py-2 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/30 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Goals List */}
          <div>
            <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Your Goals</h2>
            {goals.length > 0 ? (
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}}">{goal.title}</h3>
                          <span className={`text-sm ${getPriorityColor(goal.priority)}`}>
                            {goal.priority.toUpperCase()}
                          </span>
                          <span className={`text-sm ${getStatusColor(goal.status)}`}>
                            {goal.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        {goal.description && (
                          <p className="style={{color: '#FFFFFF'}}/80 text-sm mb-2">{goal.description}</p>
                        )}
                        <div className="style={{color: '#FFFFFF'}}/60 text-sm">
                          Deadline: {new Date(goal.deadline).toLocaleDateString()}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteGoal(goal.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="style={{color: '#FFFFFF'}}/80 text-sm">
                          Progress: {goal.currentValue} / {goal.targetValue} {goal.unit}
                        </span>
                        <span className="style={{color: '#FFFFFF'}}/80 text-sm">
                          {getProgressPercentage(goal.currentValue, goal.targetValue).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full style={{backgroundColor: '#FFFFFF'}}/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getProgressPercentage(goal.currentValue, goal.targetValue)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <input
                        type="number"
                        value={goal.currentValue}
                        onChange={(e) => updateProgress(goal.id, parseFloat(e.target.value) || 0)}
                        placeholder="Update progress"
                        className="flex-1 px-3 py-2 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button
                        onClick={() => updateProgress(goal.id, goal.currentValue + 1)}
                        className="style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        +1
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-8 text-center">
                <p className="style={{color: '#FFFFFF'}}/60">
                  No goals yet. Add your first goal to get started!
                </p>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="mt-8 bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">🎯 Goal Setting Tips</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)</li>
                <li>• Break large goals into smaller milestones</li>
                <li>• Review and update goals regularly</li>
                <li>• Celebrate small wins along the way</li>
              </ul>
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Focus on progress, not perfection</li>
                <li>• Set realistic deadlines</li>
                <li>• Track your progress consistently</li>
                <li>• Adjust goals if circumstances change</li>
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
