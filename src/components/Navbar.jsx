import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAV_ITEMS = [
  { name: 'Home', to: 'hero' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 transition-colors">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-emerald-400">DevPortfolio</div>
        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-200">
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-emerald-300"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <button className="md:hidden text-gray-200" onClick={toggle} aria-label="Toggle menu">
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-navy text-gray-200 px-4 pb-4">
          {NAV_ITEMS.map(item => (
            <li key={item.to} className="py-2 border-b border-gray-700">
              <ScrollLink
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
                className="block cursor-pointer hover:text-emerald-300"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
