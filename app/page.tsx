import { Navigation } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">NAME HERE /</h1>
            <span className="text-xl text-purple-600">PRODUCT DESIGNER</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-purple-100 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-purple-200 rounded-3xl p-8">
              <Image
                src="/avatar-placeholder.png"
                alt="Designer Avatar"
                width={400}
                height={400}
                className="rounded-2xl"
              />
              <div className="mt-6 text-center">
                <h2 className="text-xl font-bold">NAME WILL BE HERE</h2>
                <p className="text-purple-600 mt-2">PROJECT MANAGER</p>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <Link
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
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
              The About Me or Profile section of your portfolio is a short
              summary about yourself in relation to the type of role you are
              applying for. In the sample portfolio, the student has highlighted
              their program, the projects theyve worked on and their specific
              area of interest in their field.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-12 border-t">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 by Your Name. Created with Next.js
          </p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">CALL</span>
              <Link href="tel:+1911000000" className="text-sm text-purple-600">
                +1911000000
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">E-MAIL</span>
              <Link
                href="mailto:thismail@gmail.com"
                className="text-sm text-purple-600"
              >
                thismail@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
