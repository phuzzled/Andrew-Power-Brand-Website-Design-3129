import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLinkedin, FiTwitter, FiGithub, FiHeart, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    "Work": [
      { name: "Projects", href: "/projects" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Consulting", href: "/consulting" },
      { name: "Dashboard", href: "/dashboard" }
    ],
    "Insights": [
      { name: "Blog", href: "/blog" },
      { name: "Podcast", href: "/podcast" },
      { name: "Resources", href: "/resources" },
      { name: "Newsletter", href: "/#newsletter" }
    ],
    "Connect": [
      { name: "Contact", href: "/#contact" },
      { name: "About", href: "/#about" },
      { name: "Speaking", href: "/consulting" },
      { name: "Media Kit", href: "/resources" }
    ]
  };

  const socialLinks = [
    { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/andrewpower" },
    { icon: FiTwitter, label: "Twitter", href: "https://twitter.com/andrewqpower" },
    { icon: FiGithub, label: "GitHub", href: "https://github.com/andrewpower" },
    { icon: FiMail, label: "Email", href: "mailto:andrew@andrewpower.co" }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-electric-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">AP</span>
                </div>
                <span className="font-bold text-2xl">Andrew Power</span>
              </Link>
              
              <p className="text-slate-300 text-lg mb-6 max-w-md">
                Unlocking potential through systematic innovation, one breakthrough at a time.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <SafeIcon icon={social.icon} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-primary-900/50 to-electric-900/50 rounded-2xl p-8 mb-12 border border-slate-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-slate-300 mb-6">
                Join The Power Source newsletter for weekly insights on innovation and impact.
              </p>
              <Link 
                to="/#newsletter" 
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>Subscribe Now</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2024 Andrew Q. Power. All rights reserved.</span>
              <Link to="/resources" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/resources" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400 flex items-center space-x-1">
                <span>Made with</span>
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
                <span>for positive impact</span>
              </span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <SafeIcon icon={FiArrowUp} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;