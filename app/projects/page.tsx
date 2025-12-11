"use client";

import { Navigation } from "@/components/nav";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Delta Labs",
    category: "UI & UX",
    image: "/images/delta.png",
  },
  {
    id: 2,
    title: "JEDAN Code Academy",
    category: "UI & UX",
    image: "/images/jedancode.png",
    link: "https://www.figma.com/community/file/1463957556488462019/jedan-code-academy",
  },
  {
    id: 3,
    title: "Swift Delivery",
    category: "Mobile Application",
    image: "/images/p2p.png",
    link: "https://play.google.com/store/apps/details?id=com.ecleul.swiftdelivery&hl=en_US",
  },
  {
    id: 4,
    title: "Multi Solution",
    category: "UI & UX",
    image: "/images/multi.png",
    link: "https://www.figma.com/community/file/1507015719739761904",
  },
  {
    id: 5,
    title: "Jirra Events",
    category: "UI & UX",
    image: "/images/jirra-event.png",
    link: "https://www.figma.com/community/file/1463195724989765808/jirra-events",
  },
  {
    id: 6,
    title: "Association Member",
    category: "Mobile Application",
    image: "/images/assocatoinmember.webp",
    link: "https://play.google.com/store/apps/details?id=com.ethioclicks.association_member_mobile&pcampaignid=web_share",
  },
  {
    id: 7,
    title: "Vent Ethiopia",
    category: "Mobile Application",
    image: "/images/ventEthiopia.webp",
    link: "https://play.google.com/store/apps/details?id=com.devssinia.metsnagna&pcampaignid=web_share",
  },
  {
    id: 8,
    title: "Bubu Gebeya",
    category: "Website",
    image: "/images/bubugebeya.png",
    link: "https://www.bubugebeya.com/home",
  },
];

const categories = ["All", "UI & UX", "Mobile Application", "Website"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

      <main className="container mx-auto px-4 py-12">
        {/* Filter section */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
          <span className="text-xs font-medium text-gray-500 tracking-wider">FILTER:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "border border-gray-900 text-gray-900 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={project.link || "#"}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 tracking-wider uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
