'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-400">
          My Portfolio
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            ☰
          </button>
        </div>

        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="#home" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-orange-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
