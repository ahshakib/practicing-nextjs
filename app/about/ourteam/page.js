import michael from '@/public/michael.jpg'
import sarah from '@/public/sarah.jpg'
import emily from '@/public/emily.jpg'
import james from '@/public/james.jpg'
import Image from 'next/image'

function OurTeamPage() {
  return (
    <main className="bg-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-gray-900 text-center">Meet Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-blue-400 w-40 h-40">
                <Image src={sarah} alt='Sarah Johnson' placeholder='blur'/>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-800">Sarah Johnson</h2>
            <p className="text-blue-600 font-medium text-center mb-4">Founder & CEO</p>
            <p className="text-gray-600 text-center leading-relaxed">Leading our vision with over 15 years of industry experience in digital transformation.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-blue-400 w-40 h-40">
              <Image src={michael} alt='Michael Chen' placeholder='blur'/>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-800">Michael Chen</h2>
            <p className="text-blue-600 font-medium text-center mb-4">Technical Director</p>
            <p className="text-gray-600 text-center leading-relaxed">Bringing technical excellence and innovation to every project we undertake.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-blue-400 w-40 h-40">
              <Image src={emily} alt='Emily Rodriguez' placeholder='blur'/>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-800">Emily Rodriguez</h2>
            <p className="text-blue-600 font-medium text-center mb-4">Design Lead</p>
            <p className="text-gray-600 text-center leading-relaxed">Creating beautiful and intuitive user experiences that delight our clients.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-blue-400 w-40 h-40">
              <Image src={james} alt='James Wilson' placeholder='blur'/>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-800">James Wilson</h2>
            <p className="text-blue-600 font-medium text-center mb-4">Development Lead</p>
            <p className="text-gray-600 text-center leading-relaxed">Ensuring robust and scalable solutions through modern development practices.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OurTeamPage