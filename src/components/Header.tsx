'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-navy/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a
              href="https://mlsa.io"
              className="flex items-center transform-gpu transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 3}deg) scale(${isScrolled ? 1 : 1.05}) translateZ(20px)`,
                transformOrigin: 'center center'
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQHGXb-5r-iJGg/company-logo_200_200/B4EZZlioYBHYAU-/0/1745460299776?e=2147483647&v=beta&t=CfX3Ji4CmCIG9DxaK9BDJdpjfZtYrJaQF_Nkcz3GuLQ"
                alt="Microsoft Student Ambassadors"
                className="w-10 h-10 rounded-lg transition-all duration-300 hover:rotate-12"
              />
              <span
                className="text-2xl font-bold bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent ml-2 transition-all duration-300"
                style={{
                  backgroundPosition: `${mousePosition.x * 10}% ${mousePosition.y * 10}%`,
                  backgroundSize: '200% 200%'
                }}
              >
                .NET Conf 2025
              </span>
              <span
                className="ml-2 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-3"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * -1}deg) rotateY(${mousePosition.x * -2}deg) translateZ(10px)`,
                  transformOrigin: 'center center'
                }}
              >
                GLA Chapter
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '#about', label: 'About' },
              { href: '#agenda', label: 'Agenda' },
              { href: '#speakers', label: 'Speakers' },
              { href: '#faq', label: 'FAQ' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 transform-gpu hover:scale-105 relative group"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * (1 + index * 0.5)}deg) rotateY(${mousePosition.x * (2 + index)}deg) translateZ(${(index + 1) * 5}px)`,
                  transformOrigin: 'center center'
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex space-x-4">
              <button
                className="btn-secondary transform-gpu hover:scale-105 transition-all duration-300"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 4}deg) translateZ(15px)`,
                  transformOrigin: 'center center'
                }}
              >
                Add to Calendar
              </button>
              <a
                href="https://www.commudle.com/communities/mlsa-gla/events/net-conf-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary transform-gpu hover:scale-110 hover:rotate-1 transition-all duration-300"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 4}deg) rotateY(${mousePosition.x * 5}deg) translateZ(25px)`,
                  transformOrigin: 'center center',
                  boxShadow: `0 10px 25px rgba(30, 120, 255, 0.3), 0 0 0 1px rgba(30, 120, 255, 0.1)`
                }}
              >
                Register Now
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none transform-gpu hover:scale-110 transition-all duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 6}deg) translateZ(20px)`,
                transformOrigin: 'center center'
              }}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-navy/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-accent/10 hover:text-white transition-colors transform-gpu hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#agenda"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-accent/10 hover:text-white transition-colors transform-gpu hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </a>
            <a
              href="#speakers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-accent/10 hover:text-white transition-colors transform-gpu hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-accent/10 hover:text-white transition-colors transform-gpu hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4 space-y-2">
              <button className="w-full btn-secondary transform-gpu hover:scale-105 transition-all duration-300">Add to Calendar</button>
              <a
                href="https://www.commudle.com/communities/mlsa-gla/events/net-conf-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary transform-gpu hover:scale-105 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Enhanced gradient animation for header */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom hover effects */
        .group:hover {
          text-shadow: 0 0 10px rgba(56, 227, 255, 0.5);
        }

        /* Enhanced button shadows */
        .btn-primary:hover {
          box-shadow: 0 20px 40px rgba(30, 120, 255, 0.4), 0 0 0 1px rgba(30, 120, 255, 0.2);
        }

        .btn-secondary:hover {
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Mobile menu animations */
        @keyframes slideDown {
          0% {
            max-height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            max-height: 400px;
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            max-height: 400px;
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            max-height: 0;
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        /* Apply animations to mobile menu */
        .md\\:hidden.transition-all {
          animation: ${isMenuOpen ? 'slideDown' : 'slideUp'} 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}
