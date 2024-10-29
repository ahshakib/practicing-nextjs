import { Unlock } from 'next/font/google'

const unlock = Unlock({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-unlock'
})


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-100 to-white py-10">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className={`${unlock.className} text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent`}>
            Welcome to DevStudio
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            We are passionate about creating meaningful digital experiences that inspire and engage. Our team combines creativity with technical expertise to build innovative solutions that make a difference.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Web Development</h3>
            <p className="text-gray-600">Custom websites and applications built with cutting-edge technologies.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Mobile Solutions</h3>
            <p className="text-gray-600">Native and cross-platform mobile applications for modern businesses.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Digital Strategy</h3>
            <p className="text-gray-600">Strategic consulting to help your business thrive in the digital age.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lets work together to bring your digital vision to life. Our team is ready to help you create something amazing.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}
