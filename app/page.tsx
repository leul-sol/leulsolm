"use client";

import { Navigation } from "@/components/nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">LEUL SOLOMON /</h1>
            <span className="text-xl text-purple-600">SOFTWARE ENGINEER</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Sophisticated Visual Element */}
          <div className="relative h-[600px]">
            <style jsx>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              .fade-in-up { animation: fadeInUp 1s ease-out forwards; }
              .gradient-shift {
                background-size: 200% 200%;
                animation: gradientShift 8s ease infinite;
              }
              .float { animation: float 6s ease-in-out infinite; }
            `}</style>
            
            {/* Minimalist geometric composition */}
            <div className="relative w-full h-full">
              {/* Large circle - main element */}
              <div className="float absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                <div className="gradient-shift w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 opacity-10"></div>
              </div>
              
              {/* Accent lines */}
              <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
              <div className="absolute bottom-32 right-0 w-40 h-0.5 bg-gradient-to-l from-pink-600 to-transparent"></div>
              
              {/* Vertical accent */}
              <div className="absolute top-0 right-1/3 w-0.5 h-24 bg-gradient-to-b from-purple-600 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Initials with sophisticated typography */}
                  <div className="relative">
                    <h2 className="text-9xl font-light tracking-tighter text-gray-900">
                      LS
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
                  </div>
                  
                  {/* Name and title with clean typography */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light tracking-wide text-gray-900">
                      Leul Solomon
                    </h3>
                    <p className="text-sm font-medium tracking-widest text-purple-600 uppercase">
                      Designer • Developer
                    </p>
                  </div>
                  
                  {/* Minimalist social links */}
                  <div className="flex gap-6 justify-center pt-4">
                    <Link
                      href="https://www.linkedin.com/in/leul-solomon-link"
                      target="_blank"
                      className="group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-purple-600 hover:bg-purple-50 transition-all duration-300">
                        <svg className="h-4 w-4 text-gray-700 group-hover:text-purple-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.125 20.452H3.556V9h3.57v11.452zM5.342 7.615a2.067 2.067 0 01-2.063-2.063 2.066 2.066 0 112.063 2.063zm15.11 12.837h-3.572v-5.605c0-1.338-.027-3.062-1.865-3.062-1.868 0-2.154 1.46-2.154 2.965v5.702h-3.572V9h3.43v1.561h.05c.478-.9 1.645-1.845 3.384-1.845 3.616 0 4.287 2.382 4.287 5.475v6.261z" />
                        </svg>
                      </div>
                    </Link>
                    
                    <Link
                      href="https://www.behance.net/leulsolomonm"
                      target="_blank"
                      className="group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-pink-600 hover:bg-pink-50 transition-all duration-300">
                        <svg className="h-4 w-4 text-gray-700 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.5 3h21A1.5 1.5 0 0124 4.5v15A1.5 1.5 0 0122.5 21h-21A1.5 1.5 0 010 19.5v-15A1.5 1.5 0 011.5 3zM4.637 10.143h3.8a2.467 2.467 0 100-4.933H3.283v8.68h4.378c3.114 0 3.586-2.366 3.586-2.983 0-1.917-1.366-3.01-3.535-3.01h-3.6v-1.754zm0-2.147h2.77a1.22 1.22 0 11-.007 2.439h-2.764v-2.44zM20.455 10.143c-2.56 0-3.586 2.518-3.586 2.983 0 1.918 1.366 3.01 3.535 3.01 3.114 0 3.586-2.366 3.586-2.983 0-1.917-1.366-3.01-3.535-3.01zm0 2.043c.953 0 1.22.823 1.22.95 0 .048-.113.98-1.22.98-.953 0-1.22-.823-1.22-.95 0-.048.113-.98 1.22-.98zM14.136 7.57h5.597v1.389h-5.597V7.57zm-8.499 9.516h-3.6v-1.754h2.764a1.22 1.22 0 11.006 2.44h-.006z" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-purple-600 opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-pink-600 opacity-30"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl font-light tracking-tight text-gray-900 mb-4">
                HEY!
                <br />
                <span className="font-normal">EVERYONE</span>
              </h1>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/resume"
                className="px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
              >
                RESUME
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors duration-300"
              >
                PROJECTS
              </Link>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Experienced mobile application developer, UI/UX designer, and web
              developer with a strong foundation in project management. Skilled
              in system design and development, I apply modern, market-ready
              technologies to deliver reliable, user-centric solutions.
            </p>
            
            {/* Skills list */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Flutter Mobile Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-pink-600 rounded-full"></div>
                <span className="text-sm text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-20 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 by Leul Solomon.</p>
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-500 tracking-wider">CALL</span>
              <Link href="tel:+251932599064" className="text-sm text-gray-900 hover:text-purple-600 transition-colors">
                +251932599064
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-500 tracking-wider">E-MAIL</span>
              <Link
                href="mailto:leulsolm7@gmail.com"
                className="text-sm text-gray-900 hover:text-purple-600 transition-colors"
              >
                leulsolm7@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
