import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-4 top-4 z-50 p-3 bg-neutral-900/80 backdrop-blur-md rounded-full lg:hidden"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <nav className={`
        fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-full
                  transition-all duration-300 text-lg
                  ${isActive 
                    ? 'bg-white text-black' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4 p-4 bg-neutral-900/80 backdrop-blur-md rounded-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group relative w-10 h-10 flex items-center justify-center rounded-full
                  transition-all duration-300
                  ${isActive ? 'bg-white text-black' : 'text-white/80 hover:bg-white/10 hover:text-white'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="
                  absolute left-14 px-3 py-1.5 bg-neutral-900 text-white rounded-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 whitespace-nowrap text-sm
                ">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}