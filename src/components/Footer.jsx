import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img className="h-10" src="/Tracklify logo.png" alt="Tracklify Logo" />
              <span className="text-xl font-bold tracking-tight text-gray-800">
                Track<span className="text-[#7367F0]">lify</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering teams to track progress, manage projects, and achieve excellence with precision and ease.
            </p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  
                  href={`#${<i class="ri-instagram-line"></i>}`} 
                  className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#7367F0] hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Analytics', 'Team Dashboard', 'Mobile App'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-500 text-sm hover:text-[#7367F0] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-500 text-sm hover:text-[#7367F0] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to our newsletter for the latest updates and tips.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7367F0]/20 focus:border-[#7367F0] transition-all"
                />
              </div>
              <button className="w-full py-3 bg-[#7367F0] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#7367F0]/20 hover:bg-[#5e50ee] transition-all">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tracklify Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/" className="text-gray-400 text-sm hover:text-gray-600">Privacy Policy</Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-gray-600">Terms of Service</Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-gray-600">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

