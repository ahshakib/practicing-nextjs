'use client'

import { useState } from 'react'

export default function MissionPage() {
  const [activeTab, setActiveTab] = useState('vision')

  const tabs = {
    vision: {
      title: "Our Vision",
      content: "To be the leading force in digital innovation, creating technology solutions that empower businesses and enrich lives across the globe."
    },
    mission: {
      title: "Our Mission", 
      content: "To deliver exceptional digital experiences through innovative technology solutions, while maintaining the highest standards of quality, creativity, and client satisfaction."
    },
    impact: {
      title: "Our Impact",
      content: "We measure our success not just in projects completed, but in the positive changes we bring to businesses and communities through digital transformation."
    }
  }

  return (
    <main className="bg-blue-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Purpose</h1>
        
        {/* Interactive Tabs */}
        <div className="flex space-x-4 mb-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {tabs[tab].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-500">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            {tabs[activeTab].title}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {tabs[activeTab].content}
          </p>

          {/* Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Innovation</h3>
              <p className="text-gray-700">Pushing boundaries and embracing new technologies to solve complex challenges.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Excellence</h3>
              <p className="text-gray-700">Maintaining the highest standards in every project we undertake.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Impact</h3>
              <p className="text-gray-700">Creating meaningful change through technology solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
