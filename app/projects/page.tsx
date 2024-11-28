"use client";

import { Navigation } from "@/components/nav";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Desktop App Design",
    category: "UI & UX",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "UI & UX",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "3D Character Design",
    category: "3D models",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "User Research Case Study",
    category: "Case Studies",
    image: "/placeholder.svg?height=600&width=800",
  },
];

const categories = ["All", "Case Studies", "UI & UX", "3D models"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
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
        <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4">
          <span className="text-sm font-medium">Filter by industry:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-purple-900 text-white"
                  : "bg-white text-gray-600 hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-2">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
              <a href="tel:+1911000000" className="text-sm text-purple-600">
                +1911000000
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">E-MAIL</span>
              <a
                href="mailto:thismail@gmail.com"
                className="text-sm text-purple-600"
              >
                thismail@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
