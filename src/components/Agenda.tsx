'use client';

import { motion } from 'framer-motion';

type Session = {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  isBreak?: boolean;
};

const sessions: Session[] = [
  {
    time: '18:00 - 18:10',
    title: 'Welcome & Introduction',
    description: 'Kickoff and event overview',
    speaker: 'MLSA GLA University',
  },
  {
    time: '18:10 - 19:00',
    title: 'Official .NET Conf Session Replay',
    description: 'Keynote highlights and major announcements from .NET Conf 2025',
    speaker: 'Microsoft',
  },
  {
    time: '19:00 - 19:30',
    title: 'Local Demo: Building with .NET 10',
    description: 'Live coding session showcasing the latest features in .NET 10',
    speaker: 'To be announced',
  },
  {
    time: '19:30 - 19:45',
    title: 'Break & Networking',
    description: 'Networking break with fellow attendees',
    isBreak: true,
  },
  {
    time: '19:45 - 20:30',
    title: 'Live Q&A & Community Discussion',
    description: 'Interactive session with speakers and community members',
    speaker: 'Panel',
  },
  {
    time: '20:30 - 21:00',
    title: 'Closing & Resources',
    description: 'Wrap-up, resources, and next steps',
    speaker: 'MLSA GLA University',
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 bg-gradient-to-b from-navy/50 to-navy/0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title mb-12">
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              Event Agenda
            </span>
          </h2>

          <div className="space-y-1">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 transition-all duration-300 hover:border-accent/30 ${
                  session.isBreak ? 'border-l-4 border-cyan/50' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-accent font-mono text-sm">{session.time}</span>
                      {session.isBreak && (
                        <span className="text-xs px-2 py-0.5 bg-cyan/10 text-cyan rounded-full">
                          Break
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-semibold ${
                      session.isBreak ? 'text-cyan' : 'text-white'
                    }`}>
                      {session.title}
                    </h3>
                    {session.speaker && !session.isBreak && (
                      <p className="text-sm text-gray-400 mt-1">
                        By <span className="text-cyan">{session.speaker}</span>
                      </p>
                    )}
                    <p className="text-gray-300 mt-2">{session.description}</p>
                  </div>
                  {!session.isBreak && (
                    <button className="btn-secondary whitespace-nowrap">
                      Add to Calendar
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-gray-400 text-sm">
            <p>Note: Speakers and precise session titles will be announced soon.</p>
            <p className="mt-2">All times are in Indian Standard Time (IST)</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .glass-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
