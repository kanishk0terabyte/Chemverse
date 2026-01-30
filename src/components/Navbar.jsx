import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  FlaskConical,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: <FlaskConical size={18} /> },
    { name: 'Virtual Lab', path: '/lab', icon: <FlaskConical size={18} /> },
    { name: 'AI Tutor', path: '/ai', icon: <Sparkles size={18} /> },
    { name: 'Theory', path: '/theory', icon: <BookOpen size={18} /> },
  ];

  return (
    <>
      
      <nav className="fixed top-0 left-0 right-0 z-[9999] glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition">
                <FlaskConical className="text-neon-blue" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">
                Chem
                <span className="text-neon-blue text-glow">Verse</span>
              </span>
            </Link>


            <div className="hidden md:flex items-center space-x-3">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 relative z-[110]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[99] md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    location.pathname === link.path
                      ? 'bg-neon-blue/10 text-neon-blue'
                      : 'text-gray-300 hover:text-neon-blue hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;