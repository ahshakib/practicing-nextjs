export const metadata = {
    title: "About DevStudio - Our Story, Mission and Values",
    description: "Learn about DevStudio's journey, our passionate team, and our commitment to digital excellence. Discover how we combine innovation and expertise to create transformative digital solutions.",
  };

export default function About () {
    return (
        <main className="bg-blue-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 text-gray-900 animate-fade-in">About Us</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Founded with a vision to transform digital experiences, our team brings together diverse talents and perspectives to create exceptional solutions. We believe in the power of technology to solve complex problems and enhance human connections.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                        Our approach combines cutting-edge technical expertise with thoughtful design principles. We are not just building websites and applications - we are crafting digital experiences that leave lasting impressions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To empower businesses and individuals through innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections in an ever-evolving digital landscape.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Vision</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To be the leading force in digital transformation, setting new standards for excellence in web development and user experience design across industries globally.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-10 shadow-lg mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
                            <p className="text-gray-700">Pushing boundaries and embracing new technologies to deliver cutting-edge solutions</p>
                        </div>

                        <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">User-Centered</h3>
                            <p className="text-gray-700">Designing with empathy and understanding for the end users needs</p>
                        </div>

                        <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
                            <p className="text-gray-700">Maintaining the highest standards in every project we undertake</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-10 text-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
                    <p className="text-xl mb-8 opacity-90">Lets create something extraordinary together</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </main>
    )
}