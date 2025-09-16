'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-footer">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
