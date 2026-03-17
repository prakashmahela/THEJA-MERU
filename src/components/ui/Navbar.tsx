import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Music, Briefcase, Globe, Info, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Music',           icon: Music,    id: 'music' },
  { name: 'Vision',          icon: Globe,    id: 'vision' },
  { name: 'Initiatives',     icon: Briefcase,id: 'initiatives' },
  { name: 'Entrepreneurship',icon: Info,     id: 'entrepreneurship' },
];

export const Navbar = ({
  onNavigate,
  theme,
  toggleTheme,
}: {
  onNavigate: (id: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dark = theme === 'dark';

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navBg = scrolled
    ? dark
      ? 'bg-black/85 border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]'
      : 'bg-white/90 border-b border-black/8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)]'
    : 'bg-transparent';

  const pillBg = dark
    ? 'bg-white/10 border-white/20'
    : 'bg-black/6 border-black/10';

  const textCol = dark ? 'text-white/90' : 'text-black/80';
  const logoRing = dark ? 'bg-white/10 border-white/20' : 'bg-black/6 border-black/12';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 backdrop-blur-xl ${navBg} ${scrolled ? 'py-4' : 'py-6'}`}
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center" style={{ transformStyle: 'preserve-3d' }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ rotateY: 15, z: 20, scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-anton text-xs border transition-all ${logoRing} ${textCol}`} style={{ transform: 'translateZ(10px)' }}>
            TM
          </div>
          <div className="flex flex-col" style={{ transform: 'translateZ(15px)' }}>
            <span className={`text-[10px] font-bold tracking-tighter uppercase ${textCol}`}>Theja Mero</span>
            <span className={`text-[8px] tracking-widest uppercase ${dark ? 'text-white/40' : 'text-black/35'}`}>Nagaland</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-3" style={{ transformStyle: 'preserve-3d' }}>
          {/* Desktop Nav */}
          <motion.div 
            className={`hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-xl ${pillBg}`}
            whileHover={{ rotateX: 5, rotateY: -2, z: 10 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.1, z: 30 }}
                whileTap={{ scale: 0.95, z: 0 }}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${textCol}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10" style={{ transform: 'translateZ(5px)' }}>{item.name}</span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${dark ? 'bg-white' : 'bg-black'}`} />
                <span className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold uppercase tracking-widest z-20 ${dark ? 'text-black' : 'text-white'}`} style={{ transform: 'translateZ(10px)' }}>{item.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15, rotateZ: 15, z: 25 }}
            whileTap={{ scale: 0.9, z: 0 }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${logoRing} ${textCol}`}
            style={{ transformStyle: 'preserve-3d' }}
            title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }} style={{ transform: 'translateZ(10px)' }}>
                  <Sun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }} style={{ transform: 'translateZ(10px)' }}>
                  <Moon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center ${logoRing} ${textCol}`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, rotateX: -90, transformOrigin: 'top' }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden absolute top-full left-0 w-full backdrop-blur-2xl border-b overflow-hidden ${dark ? 'bg-black/95 border-white/10' : 'bg-white/95 border-black/8'}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-4 text-2xl font-anton uppercase tracking-tight group text-left w-full ${textCol}`}
                >
                  <item.icon className={`w-6 h-6 opacity-30 group-hover:opacity-100 transition-all ${dark ? 'group-hover:text-cyan-400' : 'group-hover:text-blue-600'}`} />
                  <span className="group-hover:translate-x-2 transition-transform">{item.name}</span>
                </motion.button>
              ))}
              <div className="pt-2 border-t border-current/10">
                <button onClick={toggleTheme} className={`flex items-center gap-3 text-sm font-bold uppercase tracking-widest ${textCol}`}>
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {dark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};