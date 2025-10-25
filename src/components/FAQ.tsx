'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Is the event free to attend?',
      answer: 'Yes, .NET Conf 2025 - GLA University is completely free to attend. Registration is required to receive the event link and updates.'
    },
    {
      question: 'Do I need prior .NET experience to attend?',
      answer: 'Not at all! The event is designed for all skill levels, from beginners to experienced .NET developers. We\'ll have content suitable for everyone.'
    },
    {
      question: 'Will the sessions be recorded?',
      answer: 'Yes, all sessions will be recorded and made available to registered attendees after the event.'
    },
    {
      question: 'How do I join the event?',
      answer: 'After registering, you\'ll receive an email with a link to join the event. The event will be hosted on Microsoft Teams, which works in most web browsers without requiring any downloads.'
    },
    {
      question: 'What time zone is the event scheduled in?',
      answer: 'All event times are in Indian Standard Time (IST, UTC+5:30).'
    },
    {
      question: 'Will there be any hands-on sessions or workshops?',
      answer: 'Yes, we\'ll have live coding demos and interactive sessions where you can follow along. While not required, having Visual Studio Code or Visual Studio installed will enhance your experience.'
    },
    {
      question: 'How can I get a certificate of attendance?',
      answer: 'Certificates of attendance will be provided to all registered attendees who join the live event. Details on how to claim your certificate will be shared during the event.'
    },
    {
      question: 'Will there be any networking opportunities?',
      answer: 'Yes, we\'ll have dedicated networking breaks and interactive sessions where you can connect with other attendees, speakers, and organizers.'
    },
    {
      question: 'What if I can\'t attend the live event?',
      answer: 'While we encourage live participation for the full interactive experience, all sessions will be recorded and made available to registered attendees after the event.'
    },
    {
      question: 'How can I get help during the event?',
      answer: 'We\'ll have a dedicated support team available in the event chat to assist with any technical issues. You can also reach out to us at events@mlsa-gla.example for any pre-event questions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-indigo/10 to-navy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title mb-4">
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                <motion.button
                  initial={false}
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    openIndex === index ? 'bg-white/5' : 'bg-white/3 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 flex-shrink-0"
                    >
                      <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-300">
                        {typeof faq.answer === 'string' ? (
                          <p>{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-4">
              If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a member of the event staff as soon as possible. You can also email us at:
            </p>
            <p className="mb-6">
              <a
                href="mailto:hello@mlsa.io?subject=Code%20of%20Conduct%20Violation"
                className="text-cyan hover:underline"
              >
                hello@mlsa.io
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@mlsa.io"
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="https://www.linkedin.com/company/mlsa-gla"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
