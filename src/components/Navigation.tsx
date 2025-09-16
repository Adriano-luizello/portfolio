import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 p-3 bg-neutral-900/80 backdrop-blur-md rounded-full lg:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <nav className={`
        fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
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
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="flex flex-row gap-3 p-4 bg-neutral-900/80 backdrop-blur-md rounded-full transition-all duration-500 ease-out hover:bg-neutral-900/90 hover:shadow-2xl hover:shadow-black/20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group relative flex items-center gap-3 px-4 py-3 rounded-full
                  transition-all duration-500 ease-out transform
                  ${isActive 
                    ? 'bg-white text-black scale-105 shadow-lg' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white hover:scale-105'
                  }
                `}
              >
                <Icon className={`w-5 h-5 transition-all duration-500 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span className={`
                  text-sm font-medium whitespace-nowrap transition-all duration-500 ease-out
                  ${isActive 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 -translate-x-2 scale-95 absolute'
                  }
                `}>
                  {item.label}
                </span>
                {!isActive && (
                  <span className="
                    absolute bottom-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 text-white rounded-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-300 whitespace-nowrap text-sm
                    group-hover:scale-105 group-hover:-translate-y-1
                  ">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}