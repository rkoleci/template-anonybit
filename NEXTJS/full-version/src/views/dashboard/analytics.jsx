/*eslint-disable*/
import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';
import Illustration from '../../assets/Illustration.svg';
import Frame from '../../assets/Frame553.svg';
import r20 from '../../assets/image20.svg'
import r21 from '../../assets/image21.svg'
import r22 from '../../assets/image22.svg'
import r23 from '../../assets/image23.svg'
import r24 from '../../assets/image25.svg'
import Image from 'next/image';

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Main Content */}
      <main className="w-full mx-auto px-4 py-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Anonybit</h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Explore our unified demo portal to see decentralized biometrics, secure authentication, and privacy-preserving data handling
                in action.
              </p>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3" />
                </div>
                <span>See in Action</span>
              </button>
            </div>
            <div className="flex justify-center lg:justify-end pr-20">
              <Image
                src={Illustration}
                alt="Illustration"
                className="w-52 h-auto max-w-full"
                priority={true}
                sizes="(max-width: 208px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Who We Are Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
  <div className="flex items-center space-x-2 mb-6">
    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">A</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
  </div>

  {/* Timeline */}
  <div className="relative pl-8">
    {/* Vertical line */}
    <div
      className="absolute top-0 bottom-0 left-4 w-0.5"
      style={{ borderLeft: '2px dashed #fb923c', zIndex: 0 }}
    ></div>

    {/* Timeline items */}
    {[
      "Pioneers in the emerging field of privacy-enhancing biometrics",
      "Subject matter experts in biometrics, cybersecurity, fraud prevention with collective 100+ years of experience",
      "Implementers of industry-leading patented decentralized biometric identity platform at scale to support broad range of use cases across the identity lifecycle - \"Circle of Identity\"",
      "Connectors across the identity ecosystem to ensure robust, future-proof and highly accurate biometric deployments",
      "Uniquely positioned to address Aware's desire to support durable, sustainable growth via strategic partnerships, while leveraging existing assets"
    ].map((text, index) => (
      <div style={{marginLeft: -33}} key={index} className="relative mb-6 flex items-start">
        <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white absolute left-3 top-1.5 z-10"></div>
        <p className="text-gray-700 ml-10 text-lg  font-semibold">{text}</p>
      </div>
    ))}
  </div>
</div>

          {/* IDV Ecosystem Diagram */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-500">
           
            <div>
              <Image src={Frame} />
             </div>
          </div>
        </div>
        {/* Recognitions and Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recognitions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recognitions</h3>
            <div className="flex flex-wrap items-center justify-start gap-8 ">
            
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={r20} width={'100%'}  />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={r21}  />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={r22}  />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={r23}  />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={r24}  />
              </div>
              
            </div>
          </div>
          {/* Awards */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Awards</h3>
            <div className="flex items-center justify-start gap-4 overflow-x-auto py-2">
  <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
    <span className="text-gray-500 text-sm font-semibold"></span>
  </div>
  <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
    <span className="text-gray-500 text-sm font-semibold"></span>
  </div>
  <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
    <span className="text-gray-500 text-sm font-semibold"></span>
  </div>
  <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
    <span className="text-gray-500 text-sm font-semibold"></span>
  </div>
</div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
