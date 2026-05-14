import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Admin', path: '/admin'},
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
             <img className=" h-12" src="../public/Tracklify logo.png" alt="" />
            <span className="text-xl font-bold tracking-tight text-gray-800">
              Track<span className="text-[#7367F0]">lify</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#7367F0]/10 text-[#7367F0]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#7367F0]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 text-gray-500 hover:text-[#7367F0] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link 
              to="/admin"
              className="px-5 py-2.5 bg-[#7367F0] text-white text-sm font-semibold rounded-lg shadow-md shadow-[#7367F0]/20 hover:bg-[#5e50ee] hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}