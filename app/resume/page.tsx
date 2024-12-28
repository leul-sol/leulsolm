import GeometricFlow from "@/components/geometric-flow";
import { Navigation } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0" />
      <div className="relative z-10">
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
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-bold">Resume</h1>
              <a
                href="/Leul_Solomon.pdf" // Path to your PDF in the public folder
                download="Leul_Solomon_Resume.pdf" // Set the file name for download
              >
                <Button className="bg-purple-900 hover:bg-purple-800">
                  Download CV
                </Button>
              </a>
            </div>

            <div className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Full Stack web developer
                    </h3>
                    <p className="text-gray-600">
                      {" "}
                      Ethiopian Artificial Intelligence Institute
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Web Developer with Laravel</li>
                      <li>
                        Developed and maintained web applications using the
                        Laravel framework
                      </li>
                      <li>
                        Worked on frontand backend tasks,including database
                        management and server-side logic
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      UI/UX Designer & Flutter mobile application developer
                    </h3>
                    <p className="text-gray-600">JEDAN Software Solution</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>
                        Designed and delivered user-friendly and visually
                        appealing UI/UX solutions for various clients
                      </li>
                      <li>
                        Collaborated with clients in person to understand their
                        needs and preferences, ensuring their vision was
                        accurately reflected in the final designs.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Mobile Application Developer
                    </h3>
                    <p className="text-gray-600">Ethio Clicks</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Flutter Mobile App Developer</li>
                      <li>
                        Developed, maintained, and Deployed cross-platform
                        mobile applications using Flutter. Collaborated with the
                        team to implement new features and improve
                        appperformance.
                      </li>
                      <li>Spring Boot Backend Developer</li>
                      <li>
                        Designed and developed RESTful APIs using SpringBoot.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      UI/UX Designer & Project Manager
                    </h3>
                    <p className="text-gray-600">Delta Rabbit</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>UI/UXDesigner</li>
                      <li>
                        Conducting user research, and creating wireframes in the
                        design of B2B webapplications. Collaborated with the
                        design team to create intuitive anduser-friendly
                        interfaces, applying the best UI/UX design practices.
                      </li>
                      <li>ProjectManager</li>
                      <li>
                        Worked as a project manager,while working and managing
                        deliverable tasks, collaboration works, leading the
                        team, planning the project, and ensuring the project is
                        going according to plan.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      B.Sc. Degree in Software Engineering
                    </h3>
                    <p className="text-gray-600">
                      Haramaya University • 2019 - 2024
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Flutter Mobile Application",
                      "UI Design",
                      "UX Research",
                      "Figma",
                      "Prototyping",
                      "User Testing",
                      "Design Systems",
                      "Project Management",
                      "Git & Github",
                      "Rest Api",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-purple-50 px-4 py-2 rounded-full text-center text-purple-900"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <footer className="container mx-auto px-4 py-6 mt-12 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 by Leul Solomon.</p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">CALL</span>
                <Link
                  href="tel:+1911000000"
                  className="text-sm text-purple-600"
                >
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
      <div className="absolute inset-0 z-0">
        <GeometricFlow />
      </div>
    </div>
  );
}
