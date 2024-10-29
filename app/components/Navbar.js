'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed md:relative md:w-64 w-full bottom-0 md:bottom-auto bg-white shadow-lg md:border-r border-t md:border-t-0 border-gray-200 md:h-full z-50">
        <div className="md:h-full px-4 md:px-6 py-4 md:py-8">
          <ul className="flex md:flex-col flex-row justify-around md:justify-start md:space-y-4 md:space-x-0 space-x-2">
            <li className="flex-1 md:flex-none">
              <Link 
                href="/about" 
                className={`block px-3 md:px-4 py-2 md:py-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 ease-in-out text-center md:text-left text-sm md:text-base ${
                  pathname === '/about' ? 'bg-blue-500 text-zinc-200' : ''
                }`}
              >
                Overview
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link 
                href="/about/ourteam"
                className={`block px-3 md:px-4 py-2 md:py-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 ease-in-out text-center md:text-left text-sm md:text-base ${
                  pathname === '/about/ourteam' ? 'bg-blue-500 text-zinc-200' : ''
                }`}
              >
                Our Team
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link 
                href="/about/mission"
                className={`block px-3 md:px-4 py-2 md:py-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 ease-in-out text-center md:text-left text-sm md:text-base ${
                  pathname === '/about/mission' ? 'bg-blue-500 text-zinc-200' : ''
                }`}
              >
                Mission
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
