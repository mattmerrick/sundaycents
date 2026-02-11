'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { motion } from 'framer-motion'

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#00d4ff', '#7b2cbf', '#ff006e', '#8338ec'] },
            shape: { type: 'circle' },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#00d4ff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(123, 44, 191, 0.1) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite',
          zIndex: 2,
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5),
                        0 0 40px rgba(123, 44, 191, 0.3),
                        0 0 60px rgba(255, 0, 110, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.8),
                        0 0 60px rgba(123, 44, 191, 0.5),
                        0 0 90px rgba(255, 0, 110, 0.3);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-5xl mx-auto w-full text-center relative z-10"
        style={{
          background: 'rgba(15, 12, 41, 0.8)',
          borderRadius: '30px',
          padding: '4rem 2rem',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          animation: 'glow 4s ease-in-out infinite',
        }}
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #7b2cbf 50%, #ff006e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            textShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
          }}
        >
          I&apos;m trying to become a professional prediction market trader.
          <br />
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #ff006e 0%, #8338ec 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Join me!
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-12"
          style={{
            color: '#00d4ff',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          }}
        >
          📈 Navigate the future of markets with precision 🎯
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://polymarket.com?via=matthew-cya3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 text-xl sm:text-2xl md:text-3xl font-bold text-white rounded-full transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #7b2cbf 50%, #ff006e 100%)',
              boxShadow: '0 10px 40px rgba(0, 212, 255, 0.6), 0 0 20px rgba(255, 0, 110, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            🚀 Join me 🚀
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-gray-300 text-base sm:text-lg md:text-xl"
          style={{
            textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
          }}
        >
          ⚡ The future is predictable. Let&apos;s profit from it together. 💎
        </motion.p>
      </motion.div>
    </main>
  )
}
