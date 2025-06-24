import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Mail, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    careers: [
      { name: 'Browse Careers', href: '/explore' },
      { name: 'Industry Insights', href: '/explore' },
      { name: 'Career Trends', href: '/explore' },
      { name: 'Success Stories', href: '/explore' },
    ],
    education: [
      { name: 'Universities', href: '/education' },
      { name: 'Courses', href: '/education' },
      { name: 'Scholarships', href: '/education' },
      { name: 'Online Learning', href: '/education' },
    ],
    resources: [
      { name: 'Aptitude Test', href: '/test' },
      { name: 'Career Advisor', href: '/' },
      { name: 'Resume Builder', href: '/' },
      { name: 'Interview Prep', href: '/' },
    ],
    company: [
      { name: 'About Us', href: '/' },
      { name: 'Contact', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms and Conditions', href: '/' },
    ],
  };

  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold">Edufy</span>
            </Link>
            <p className="text-gray-600">
              Guiding high school students towards successful futures through personalized 
              career advice, aptitude assessment, and educational insights.
            </p>

            {/* Social Icons with Framer Motion Animation */}
            <motion.div 
              className="flex space-x-4 mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="mailto:skpandey6415@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Careers</h3>
            <ul className="space-y-2 text-sm">
              {links.careers.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Education</h3>
            <ul className="space-y-2 text-sm">
              {links.education.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {currentYear} Edufy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-blue-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
