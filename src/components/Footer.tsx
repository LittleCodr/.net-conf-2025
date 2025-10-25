import { ReactNode } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Code of Conduct', href: '#code-of-conduct' },
    { name: 'Privacy', href: 'https://privacy.microsoft.com/en-us/privacystatement' },
    { name: 'Terms of Use', href: 'https://www.microsoft.com/en-us/legal/terms-of-use' },
    { name: 'Contact', href: 'mailto:hello@mlsa.io' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/mlsa-gla',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ) as ReactNode,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mlsa.io',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.46-3.334-1.223C4.229 14.878 3.769 13.728 3.769 12.431s.46-2.447 1.346-3.334c.886-.763 2.037-1.223 3.334-1.223s2.448.46 3.334 1.223c.886.887 1.346 2.037 1.346 3.334s-.46 2.447-1.346 3.334c-.886.763-2.037 1.223-3.334 1.223z" clipRule="evenodd" />
        </svg>
      ) as ReactNode,
    },
    {
      name: 'WhatsApp',
      href: 'https://chat.whatsapp.com/IakQkQJGtBDFyHYjhGSAdT',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.085z"/>
        </svg>
      ) as ReactNode,
    },
  ];

  return (
    <footer className="bg-navy/90 backdrop-blur-md border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
                .NET Conf 2025
              </span>
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                GLA Chapter
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Join us for a day of learning, networking, and exploring the latest in .NET technology with Microsoft Student Ambassadors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Organized by</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 3.75c-2.65 0-5.05.99-6.9 2.6L2 3.5v9h9l-2.62-2.62c1.33-1.34 3.17-2.17 5.22-2.17 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 7.48 16.6 3.75 11.5 3.75z" />
                  <path d="M11.5 12.25c-1.05 0-2.05.28-2.9.8l-1.25-1.25C8.5 10.54 9.97 10 11.5 10c1.56 0 3.03.48 4.25 1.3l-1.45 1.45c-.6-.35-1.3-.5-2.05-.5z" />
                  <path d="M11.5 16.5c-1.75 0-3.29-.73-4.19-1.81L5.3 16.35c1.2 1.56 3.09 2.6 5.2 2.6 1.5 0 2.91-.48 4.06-1.3l-1.45-1.45c-.75.5-1.64.8-2.61.8z" />
                  <path d="M11.5 20.75c-1.25 0-2.45-.4-3.4-1.1l-1.45 1.45c1.35 1.1 3.05 1.8 4.95 1.8 1.9 0 3.6-.7 4.95-1.8l-1.45-1.45c-.95.7-2.1 1.1-3.4 1.1z" />
                </svg>
              </div>
              <span className="text-white font-medium">MSA GLA Chapter</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students with technical skills and community building through Microsoft Student Ambassadors.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Microsoft Student Ambassadors GLA Chapter. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-gray-500 text-sm">
              Follow us on social media for updates
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
