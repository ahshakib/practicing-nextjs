import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import {Rubik_Wet_Paint} from 'next/font/google'

const rubikWetPaint = Rubik_Wet_Paint({
  subsets: ['latin'],
  weight: '400',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DevStudio - Innovative Digital Solutions",
  description: "DevStudio is your go-to platform for innovative digital solutions, combining creativity and technical expertise to transform your digital presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col`}
      >
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className={`${rubikWetPaint.className} text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent`}>
                    DevStudio
                  </h1>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:space-x-8">
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    Home
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    Blogs
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    About
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                  <Link
                    href="/posts"
                    className="inline-flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    Dummy Posts
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Mobile Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
                  <div className="flex justify-around py-4">
                    <Link
                      href="/"
                      className="flex flex-col items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-xs mt-1">Home</span>
                    </Link>
                    <Link
                      href="/blogs"
                      className="flex flex-col items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                      </svg>
                      <span className="text-xs mt-1">Blogs</span>
                    </Link>
                    <Link
                      href="/about"
                      className="flex flex-col items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs mt-1">About</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16 pb-16 lg:pb-0 flex-grow">
          {children}
        </main>
        <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-xs md:text-sm">
              © 2024 DevStudio. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
