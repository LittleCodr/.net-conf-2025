'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan/5 rounded-full mix-blend-multiply filter blur-2xl animate-float-3d" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-wave" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo/10 rounded-full mix-blend-multiply filter blur-xl animate-rotate-3d" />
        <div className="absolute bottom-1/3 left-20 w-36 h-36 bg-cyan/8 rounded-full mix-blend-multiply filter blur-2xl animate-morph" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="section-title mb-12 text-center"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 3}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-out'
            }}
          >
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              About the Event
            </span>
          </h2>

          <div className="glass-card p-8 md:p-10 relative">
            {/* Floating accent elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-bounce-gentle" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-cyan/20 rounded-full animate-shimmer" />
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-indigo/30 rounded-full animate-glow" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative">
                <motion.p
                  className="text-lg text-gray-300 mb-6 leading-relaxed"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1.5}deg)`,
                    transformOrigin: 'center center'
                  }}
                >
                  Join us for an exciting virtual watch party of .NET Conf 2025, featuring
                  official .NET 10 session recaps, live local demos, and interactive Q&A
                  sessions with Microsoft Student Ambassadors and industry experts.
                </motion.p>

                <h3 className="text-xl font-semibold text-white mb-4 relative">
                  What to Expect
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan to-accent"></span>
                </h3>
                <ul className="space-y-3">
                  {[
                    'Official .NET 10 session highlights',
                    'Live coding demos with the latest .NET features',
                    'Interactive Q&A with Microsoft Student Ambassadors',
                    'Networking opportunities with local developers',
                    'Giveaways and swag for participants',
                    'Community discussions and knowledge sharing'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group cursor-pointer"
                      whileHover={{
                        x: 10,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * (0.5 + index * 0.1)}deg) rotateY(${mousePosition.x * (1 + index * 0.2)}deg)`,
                        transformOrigin: 'left center'
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <motion.svg
                        className="h-5 w-5 text-cyan mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="glass-card p-6 mb-6 relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * -3}deg)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-3 relative z-10">Event Details</h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                        label: 'Date & Time',
                        value: 'January 11, 2026\n18:00 - 21:00 IST'
                      },
                      {
                        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                        label: 'Location',
                        value: 'Virtual Event\nLink provided after registration'
                      },
                      {
                        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                        label: 'Duration',
                        value: '3 hours'
                      }
                    ].map((detail, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start group"
                        whileHover={{ x: 5 }}
                        style={{
                          transform: `perspective(1000px) rotateX(${mousePosition.y * (1 + index)}deg) rotateY(${mousePosition.x * (1.5 + index)}deg)`,
                          transformOrigin: 'left center'
                        }}
                      >
                        <motion.svg
                          className="h-5 w-5 text-cyan mr-3 mt-0.5 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={detail.icon} />
                        </motion.svg>
                        <div>
                          <p className="font-medium text-white group-hover:text-cyan transition-colors duration-200">
                            {detail.label}
                          </p>
                          <p className="text-gray-300 text-sm whitespace-pre-line group-hover:text-gray-200 transition-colors duration-200">
                            {detail.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="glass-card p-6 relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 4}deg)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-3 relative z-10">Who Should Attend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Students', 'Developers', 'Microsoft Student Ambassadors', 'Backend Engineers', 'Frontend Developers', 'Cloud Engineers', 'Tech Enthusiasts'].map((item, index) => (
                      <motion.span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-200 cursor-pointer"
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        style={{
                          transform: `perspective(1000px) rotateX(${mousePosition.y * (1 + index * 0.1)}deg) rotateY(${mousePosition.x * (1.5 + index * 0.1)}deg)`,
                          transformOrigin: 'center center'
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float-slow-3d {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(20px, -30px) rotate(120deg) scale(1.05);
          }
          66% {
            transform: translate(-15px, -60px) rotate(240deg) scale(0.95);
          }
        }

        @keyframes float-medium-3d {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-25px, 40px) rotate(-90deg) scale(1.1);
          }
          50% {
            transform: translate(35px, -20px) rotate(-180deg) scale(0.9);
          }
          75% {
            transform: translate(-20px, -50px) rotate(-270deg) scale(1.15);
          }
        }

        @keyframes rotate-float {
          0% {
            transform: rotate(0deg) translate(0px, 0px) scale(1);
          }
          25% {
            transform: rotate(90deg) translate(10px, -10px) scale(1.1);
          }
          50% {
            transform: rotate(180deg) translate(-15px, 20px) scale(0.9);
          }
          75% {
            transform: rotate(270deg) translate(20px, -5px) scale(1.05);
          }
          100% {
            transform: rotate(360deg) translate(0px, 0px) scale(1);
          }
        }

        @keyframes pulse-float {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotateX(0deg);
          }
          50% {
            transform: translate(15px, -25px) scale(1.1) rotateX(5deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        @keyframes bounce-reverse {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(10px) scale(1.1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-float-slow-3d {
          animation: float-slow-3d 12s ease-in-out infinite;
        }

        .animate-float-medium-3d {
          animation: float-medium-3d 10s ease-in-out infinite;
        }

        .animate-rotate-float {
          animation: rotate-float 15s ease-in-out infinite;
        }

        .animate-pulse-float {
          animation: pulse-float 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-bounce-reverse {
          animation: bounce-reverse 6s ease-in-out infinite;
        }

        .glass-card:hover {
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .group:hover svg {
          filter: drop-shadow(0 0 8px rgba(56, 227, 255, 0.6));
        }

        * {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
