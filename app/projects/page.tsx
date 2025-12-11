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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
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
        <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4">
          <span className="text-sm font-medium">Filter:</span>
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
            <Link key={project.id} href={project.link || "#"}>
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
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
            </Link>
          ))}
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
