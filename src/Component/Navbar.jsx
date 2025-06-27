// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Home, Briefcase, GraduationCap, ClipboardCheck,
  ChevronDown, BookOpenCheck, LogIn, UserPlus
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4 text-blue-600" /> },
  { name: 'Careers', href: '/explore-career', icon: <Briefcase className="w-4 h-4 text-blue-600" /> },
  { name: 'Education', href: '/education', icon: <GraduationCap className="w-4 h-4 text-blue-600" /> },
  { name: 'Test', href: '/career-test', icon: <ClipboardCheck className="w-4 h-4 text-blue-600" /> },
];


const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white backdrop-blur  border-b font-mono border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex bold items-center gap-2 text-xl  text-black" onClick={() => setMenuOpen(false)}>
          <BookOpenCheck className="h-5 w-5 text-blue-600" />
          <span>CareerGuide</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex  gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center font-sans font-bold gap-1 text-1xl  transition-colors ${
                location.pathname === item.href
                  ? "text-blue-600"
                  : "text-black hover:text-blue-500"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden  md:flex gap-2">
          <Link to="/login" className="text-sm text-black hover:text-blue-500 flex items-center gap-1">
            <LogIn className="w-4 h-4 text-blue-600" /> Log in
          </Link>
          <Link to="/register" className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 flex items-center gap-1">
            <UserPlus className="w-4 h-4" /> Sign up
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 text-sm font-medium ${
                location.pathname === item.href
                  ? "text-blue-600"
                  : "text-black hover:text-blue-500"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

      

          {/* Mobile Auth */}
          <div className="pt-3 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center border border-gray-300 text-sm px-4 py-2 rounded-md text-black"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
