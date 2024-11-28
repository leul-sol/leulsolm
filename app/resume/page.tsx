import { Navigation } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resume() {
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
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Resume</h1>
            <Button className="bg-purple-900 hover:bg-purple-800">
              Download CV
            </Button>
          </div>

          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    Senior Product Designer
                  </h3>
                  <p className="text-gray-600">Company Name • 2022 - Present</p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Led the redesign of core product features</li>
                    <li>Managed a team of 3 designers</li>
                    <li>Improved user engagement by 40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                  <p className="text-gray-600">
                    Previous Company • 2020 - 2022
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Designed mobile-first web applications</li>
                    <li>Conducted user research and usability testing</li>
                    <li>Created design system documentation</li>
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
                  <h3 className="text-xl font-semibold">Master in Design</h3>
                  <p className="text-gray-600">University Name • 2018 - 2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelor in Digital Arts
                  </h3>
                  <p className="text-gray-600">University Name • 2014 - 2018</p>
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
                    "UI Design",
                    "UX Research",
                    "Prototyping",
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "User Testing",
                    "Design Systems",
                    "HTML/CSS",
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
