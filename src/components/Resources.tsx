'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Resource = {
  title: string;
  description: string;
  category: 'docs' | 'samples' | 'videos' | 'tools';
  url: string;
  icon: React.ReactNode;
};

export default function Resources() {
  const resources: Resource[] = [
    {
      title: '.NET 10 Documentation',
      description: 'Official documentation for .NET 10 features and APIs',
      category: 'docs',
      url: 'https://docs.microsoft.com/dotnet/core/whats-new/dotnet-10',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Getting Started with .NET',
      description: 'Tutorials and guides for beginners',
      category: 'docs',
      url: 'https://dotnet.microsoft.com/learn',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '.NET Samples on GitHub',
      description: 'Collection of sample projects and code snippets',
      category: 'samples',
      url: 'https://github.com/dotnet/samples',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: '.NET Conf 2025 Sessions',
      description: 'Watch recordings of all .NET Conf 2025 sessions',
      category: 'videos',
      url: 'https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVlquTS8ewRa1p5sHZk6iNC',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Visual Studio Code',
      description: 'Lightweight, powerful source code editor',
      category: 'tools',
      url: 'https://code.visualstudio.com/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: '.NET CLI Reference',
      description: 'Command-line interface for .NET',
      category: 'docs',
      url: 'https://docs.microsoft.com/dotnet/core/tools/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'docs', name: 'Documentation' },
    { id: 'samples', name: 'Samples' },
    { id: 'videos', name: 'Videos' },
    { id: 'tools', name: 'Tools' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-navy/50 to-indigo/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title mb-4">
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Explore these resources to get the most out of .NET 10 and prepare for the event with Microsoft Student Ambassadors.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Resources grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-6 flex flex-col h-full hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    {resource.icon}
                  </div>
                  <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/50 text-indigo-300">
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {resource.description}
                </p>
                <div className="flex items-center text-accent text-sm font-medium mt-auto">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Check out the official .NET documentation or reach out to our community for more resources and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.microsoft.com/dotnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                .NET Documentation
              </a>
              <a
                href="https://dotnet.microsoft.com/platform/community"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Join .NET Community
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
