'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Speaker = {
  id: number;
  name: string;
  title: string;
  company?: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

const placeholderSpeakers: Speaker[] = [
  {
    id: 1,
    name: 'To Be Announced',
    title: 'Speaker',
    company: 'Microsoft',
    image: '/images/speakers/speaker-1.jpg',
  },
  {
    id: 2,
    name: 'To Be Announced',
    title: 'Speaker',
    company: 'Community Leader',
    image: '/images/speakers/speaker-2.jpg',
  },
  {
    id: 3,
    name: 'To Be Announced',
    title: 'Speaker',
    company: 'Industry Expert',
    image: '/images/speakers/speaker-3.jpg',
  },
  {
    id: 4,
    name: 'To Be Announced',
    title: 'Speaker',
    company: 'Open Source Contributor',
    image: '/images/speakers/speaker-4.jpg',
  },
];

export default function Speakers() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section id="speakers" className="py-20 bg-gradient-to-b from-navy/50 to-indigo/30 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-16 right-16 w-48 h-48 bg-cyan/5 rounded-full mix-blend-multiply filter blur-3xl animate-float-wave" />
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-float-wave-reverse" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-wave" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2
            className="section-title mb-4"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 3}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-out'
            }}
          >
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              Featured Speakers
            </span>
          </h2>

          <motion.p
            className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1.5}deg)`,
              transformOrigin: 'center center'
            }}
          >
            Learn from Microsoft Student Ambassadors and industry experts. More speakers to be announced soon!
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placeholderSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * (1 + index * 0.2)}deg) rotateY(${mousePosition.x * (2 + index * 0.3)}deg) translateZ(${(index + 1) * 5}px)`,
                  transformOrigin: 'center center'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="glass-card p-6 text-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                  {/* Floating accent elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-accent/30 rounded-full animate-bounce-slow" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan/40 rounded-full animate-bounce-reverse" />

                  {/* Profile image with 3D effect */}
                  <div className="relative mb-4">
                    <motion.div
                      className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan/20 to-accent/20 flex items-center justify-center text-2xl font-bold text-white border-2 border-cyan/30"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 15,
                        transition: { duration: 0.3 }
                      }}
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 6}deg)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Speaker info */}
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan transition-colors duration-200">
                    {speaker.name}
                  </h3>
                  <p className="text-accent font-medium mb-1 group-hover:scale-105 transition-transform duration-200">
                    {speaker.title}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                    {speaker.company}
                  </p>

                  {/* Social links */}
                  <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={speaker.social?.linkedin}
                      className="w-8 h-8 bg-cyan/10 hover:bg-cyan/20 rounded-full flex items-center justify-center text-cyan hover:scale-110 transition-all duration-200"
                      whileHover={{ y: -2 }}
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 4}deg)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={speaker.social?.twitter}
                      className="w-8 h-8 bg-cyan/10 hover:bg-cyan/20 rounded-full flex items-center justify-center text-cyan hover:scale-110 transition-all duration-200"
                      whileHover={{ y: -2 }}
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * -3}deg)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>

                {/* Card hover shadow effect */}
                <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl -z-10" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * -3}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Speaking?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              We're looking for passionate Microsoft Student Ambassadors and developers to share their knowledge and experience with the .NET community.
            </p>
            <motion.a
              href="mailto:hello@mlsa.io?subject=Speaker%20Proposal%20for%20.NET%20Conf%202025"
              className="btn-primary inline-flex items-center transform-gpu hover:scale-110 hover:rotate-1 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 4}deg) rotateY(${mousePosition.x * 5}deg) translateZ(30px)`,
                transformOrigin: 'center center',
                boxShadow: `0 15px 35px rgba(30, 120, 255, 0.4), 0 0 0 1px rgba(30, 120, 255, 0.2)`
              }}
            >
              Submit a Talk Proposal
              <motion.svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float-wave {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(30px, -40px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate(-20px, -80px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate(-40px, -30px) rotate(270deg) scale(1.15);
          }
        }

        @keyframes float-wave-reverse {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-35px, 45px) rotate(-120deg) scale(1.2);
          }
          66% {
            transform: translate(25px, -25px) rotate(-240deg) scale(0.8);
          }
        }

        @keyframes pulse-wave {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) rotateX(0deg) rotateY(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2) rotateX(8deg) rotateY(8deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }

        @keyframes bounce-reverse {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(8px) scale(1.1);
          }
        }

        .animate-float-wave {
          animation: float-wave 14s ease-in-out infinite;
        }

        .animate-float-wave-reverse {
          animation: float-wave-reverse 11s ease-in-out infinite;
        }

        .animate-pulse-wave {
          animation: pulse-wave 9s ease-in-out infinite;
        }

        /* Enhanced card hover effects */
        .glass-card:hover {
          backdrop-filter: blur(25px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        /* Interactive group effects */
        .group:hover {
          z-index: 10;
        }

        .group:hover svg {
          filter: drop-shadow(0 0 12px rgba(56, 227, 255, 0.8));
        }

        /* Smooth transitions for all elements */
        * {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced button effects */
        .btn-primary:hover {
          box-shadow: 0 25px 50px rgba(30, 120, 255, 0.5), 0 0 0 1px rgba(30, 120, 255, 0.3);
        }

        /* Social icon hover effects */
        .group:hover a {
          transform: translateY(-3px) scale(1.1);
        }
      `}</style>
    </section>
  );
}
