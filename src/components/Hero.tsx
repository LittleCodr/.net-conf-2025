'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Enhanced background animations with 3D effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Floating orbs with complex animations */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-3d"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) rotate(${mousePosition.x * 10}deg) scale(${isHovered ? 1.1 : 1})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-wave"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) rotate(${mousePosition.x * -8}deg) scale(${isHovered ? 1.05 : 1})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-rotate-3d"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px) rotate(${mousePosition.x * 15}deg) scale(${isHovered ? 1.15 : 1})`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan/10 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-morph" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-shimmer" />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-indigo/15 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-glow" />

        {/* Particle effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan/60 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent mb-6 transform-gpu hover:scale-105 transition-transform duration-300"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) scale(${isHovered ? 1.05 : 1})`,
              transformOrigin: 'center center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent animate-pulse"></span>
            </span>
            Microsoft Student Ambassadors | January 11, 2026
          </motion.div>

          {/* Main heading with enhanced effects */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span
              className="bg-gradient-to-r from-cyan via-accent to-cyan bg-clip-text text-transparent animate-gradient-x cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 3}deg)`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              .NET Conf 2025
            </span>
            <br />
            <span
              className="text-white hover:text-cyan transition-colors duration-500 cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * -1}deg) rotateY(${mousePosition.x * -2}deg)`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out, color 0.3s ease'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              GLA Chapter
            </span>
          </motion.h1>

          {/* Enhanced subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Watch official .NET 10 sessions, see local demos, and join a live community Q&A with{' '}
            <span className="text-accent font-semibold animate-pulse">Microsoft Student Ambassadors</span>.
          </motion.p>

          {/* CTA Buttons with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <a
              href="https://www.commudle.com/communities/mlsa-gla/events/net-conf-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg transform-gpu hover:scale-110 hover:rotate-1 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 4}deg) scale(${isHovered ? 1.1 : 1}) translateZ(50px)`,
                transformOrigin: 'center center',
                boxShadow: `0 20px 40px rgba(30, 120, 255, 0.3), 0 0 0 1px rgba(30, 120, 255, 0.1)`
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Register Now
            </a>
            <a
              href="https://chat.whatsapp.com/IakQkQJGtBDFyHYjhGSAdT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg transform-gpu hover:scale-105 hover:-rotate-1 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * -3}deg) scale(${isHovered ? 1.05 : 1}) translateZ(30px)`,
                transformOrigin: 'center center'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Join WhatsApp Community
            </a>
            <a
              href="#agenda"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg transform-gpu hover:scale-105 hover:rotate-1 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) scale(${isHovered ? 1.05 : 1}) translateZ(20px)`,
                transformOrigin: 'center center'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              See Agenda
            </a>
          </motion.div>

          {/* Enhanced microcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-sm md:text-base mb-8"
          >
            Free · All levels welcome · Speakers announced soon
          </motion.p>

          {/* Countdown timer with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-gray-400 mb-4 text-lg font-medium">Event starts in:</p>
            <div className="flex justify-center gap-4">
              {[
                { id: 'days', label: 'Days' },
                { id: 'hours', label: 'Hours' },
                { id: 'minutes', label: 'Minutes' },
                { id: 'seconds', label: 'Seconds' }
              ].map((item, index) => (
                <div key={item.id} className="text-center">
                  <div
                    className="glass-card w-20 h-20 flex items-center justify-center transform-gpu hover:scale-110 transition-all duration-300 cursor-pointer animate-glow"
                    style={{
                      transform: `perspective(1000px) rotateX(${mousePosition.y * (2 + index)}deg) rotateY(${mousePosition.x * (3 + index)}deg) scale(${isHovered ? 1.1 : 1}) translateZ(${(index + 1) * 10}px)`,
                      transformOrigin: 'center center',
                      boxShadow: `0 15px 30px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
                      {item.id === 'days' ? '00' :
                       item.id === 'hours' ? '00' :
                       item.id === 'minutes' ? '00' : '00'}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 mt-2 block uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Enhanced Countdown Timer with 3D effects
          const targetDate = new Date('2026-01-11T18:00:00+05:30').getTime();

          function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              document.getElementById('days').textContent = days.toString().padStart(2, '0');
              document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
              document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
              document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
              document.getElementById('days').textContent = '00';
              document.getElementById('hours').textContent = '00';
              document.getElementById('minutes').textContent = '00';
              document.getElementById('seconds').textContent = '00';
            }
          }

          updateCountdown();
          setInterval(updateCountdown, 1000);

          // Add floating particle effect
          function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-cyan/40 rounded-full pointer-events-none animate-particle-float';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(particle);

            setTimeout(() => {
              particle.remove();
            }, 8000);
          }

          setInterval(createParticle, 500);
        `
      }} />
    </section>
  );
}
