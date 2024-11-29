import { Navigation } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">LEUL SOLOMON/</h1>
            <span className="text-xl text-purple-600">SOFTWARE ENGINEER</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-purple-100 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-purple-200 rounded-3xl ">
              <Image
                src="/images/leul-profile.jpg"
                alt="Designer Avatar"
                width={450}
                height={300}
                className="rounded-t-2xl"
              />
              <div className="mt-6 text-center pl-8 pr-8 ">
                <h2 className="text-xl font-bold">Leul Solomon</h2>

                <p className="text-purple-600 mt-2">
                  Mobile App Developer | UI/UXDesigner | Project Manager
                </p>
              </div>
              <div className="mt-6 flex justify-center space-x-4 pl-8 pr-8 pb-8">
                {/* <Link
                  href="https://dribbble.com"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                  </svg>
                </Link> */}
                <Link
                  href="https://www.linkedin.com/in/leul-solomon-link/"
                  target="_blank"
                  className="text-gray-600 hover:text-purple-600"
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
                  className="text-gray-600 hover:text-purple-500"
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
          </div>

          <div>
            <h1 className="text-6xl font-bold mb-6">
              HELLO
              <br />
              EVERYONE
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Heres Who I am & What I do.
            </p>
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
