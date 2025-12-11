"use client";

import { Navigation } from "@/components/nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">LEUL SOLOMON /</h1>
            <span className="text-xl text-purple-600">SOFTWARE ENGINEER</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Creative Motion Design */}
          <div className="relative aspect-square max-w-md mx-auto">
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
              }
              @keyframes floatReverse {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(20px) rotate(-5deg); }
              }
              @keyframes pulseGlow {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.05); }
              }
              @keyframes orbit {
                0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
                100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
              }
              @keyframes codeFloat {
                0%, 100% { transform: translateY(0px); opacity: 0.7; }
                50% { transform: translateY(-15px); opacity: 1; }
              }
              .floatAnimation { animation: float 6s ease-in-out infinite; }
              .floatReverse { animation: floatReverse 5s ease-in-out infinite; }
              .pulseGlow { animation: pulseGlow 3s ease-in-out infinite; }
              .orbit { animation: orbit 20s linear infinite; }
              .codeFloat { animation: codeFloat 4s ease-in-out infinite; }
            `}</style>
            
            {/* Main container with gradient background */}
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 p-1 overflow-hidden">
              {/* Inner content area */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-purple-50 to-white overflow-hidden">
                
                {/* Floating gradient orbs */}
                <div className="floatAnimation absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-60"></div>
                <div className="floatReverse absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-60"></div>
                <div className="pulseGlow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full blur-3xl opacity-40"></div>
                
                {/* Central content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                  {/* Animated code symbols */}
                  <div className="codeFloat absolute top-12 left-12 text-6xl font-bold text-purple-300 opacity-20">
                    &lt;/&gt;
                  </div>
                  <div className="codeFloat absolute bottom-16 right-16 text-5xl font-bold text-pink-300 opacity-20" style={{animationDelay: '1s'}}>
                    &#123; &#125;
                  </div>
                  <div className="codeFloat absolute top-1/3 right-12 text-4xl font-bold text-blue-300 opacity-20" style={{animationDelay: '2s'}}>
                    fn()
                  </div>
                  
                  {/* Profile info card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-100 hover:scale-105 transition-transform duration-300">
                    {/* Avatar placeholder with gradient */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      LS
                    </div>
                    
                    <h2 className="text-2xl font-bold text-center text-gray-800">Leul Solomon</h2>
                    <p className="text-purple-600 text-center mt-3 text-sm leading-relaxed">
                      Flutter Mobile App Developer
                      <br />
                      UI/UX Designer | Project Manager
                    </p>
                    
                    {/* Social links */}
                    <div className="mt-6 flex justify-center space-x-4">
                      <Link
                        href="https://www.linkedin.com/in/leul-solomon-link"
                        target="_blank"
                        className="text-gray-600 hover:text-purple-600 transition-colors hover:scale-110 transform duration-200"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.125 20.452H3.556V9h3.57v11.452zM5.342 7.615a2.067 2.067 0 01-2.063-2.063 2.066 2.066 0 112.063 2.063zm15.11 12.837h-3.572v-5.605c0-1.338-.027-3.062-1.865-3.062-1.868 0-2.154 1.46-2.154 2.965v5.702h-3.572V9h3.43v1.561h.05c.478-.9 1.645-1.845 3.384-1.845 3.616 0 4.287 2.382 4.287 5.475v6.261z" />
                        </svg>
                      </Link>
                      <Link
                        href="https://www.behance.net/leulsolomonm"
                        target="_blank"
                        className="text-gray-600 hover:text-purple-500 transition-colors hover:scale-110 transform duration-200"
                      >
                        <span className="sr-only">Behance</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.5 3h21A1.5 1.5 0 0124 4.5v15A1.5 1.5 0 0122.5 21h-21A1.5 1.5 0 010 19.5v-15A1.5 1.5 0 011.5 3zM4.637 10.143h3.8a2.467 2.467 0 100-4.933H3.283v8.68h4.378c3.114 0 3.586-2.366 3.586-2.983 0-1.917-1.366-3.01-3.535-3.01h-3.6v-1.754zm0-2.147h2.77a1.22 1.22 0 11-.007 2.439h-2.764v-2.44zM20.455 10.143c-2.56 0-3.586 2.518-3.586 2.983 0 1.918 1.366 3.01 3.535 3.01 3.114 0 3.586-2.366 3.586-2.983 0-1.917-1.366-3.01-3.535-3.01zm0 2.043c.953 0 1.22.823 1.22.95 0 .048-.113.98-1.22.98-.953 0-1.22-.823-1.22-.95 0-.048.113-.98 1.22-.98zM14.136 7.57h5.597v1.389h-5.597V7.57zm-8.499 9.516h-3.6v-1.754h2.764a1.22 1.22 0 11.006 2.44h-.006z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Orbiting dots */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="orbit w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="orbit w-2 h-2 bg-pink-500 rounded-full" style={{animationDelay: '-10s', animationDuration: '15s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-6xl font-bold mb-6">
              HEY!
              <br />
              EVERYONE
            </h1>
            <p className="text-lg text-gray-600 mb-8"></p>
            <div className="flex space-x-4">
              <Link
                href="/resume"
                className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors"
              >
                RESUME
              </Link>
              <Link
                href="/projects"
                className="bg-white text-purple-900 px-6 py-2 rounded-full border border-purple-900 hover:bg-purple-50 transition-colors"
              >
                PROJECTS
              </Link>
            </div>
            <p className="mt-8 text-gray-600">
              Experienced mobile application developer, UI/UX designer, and web
              developer with a strong foundation in project management. Skilled
              in system design and development, I apply modern, market-ready
              technologies to deliver reliable, user-centric solutions.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-12 border-t">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 by Leul Solomon.</p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">CALL</span>
              <Link href="tel:+1911000000" className="text-sm text-purple-600">
                +251932599064
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">E-MAIL</span>
              <Link
                href="mailto:leulsolm7@gmail.com"
                className="text-sm text-purple-600"
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
