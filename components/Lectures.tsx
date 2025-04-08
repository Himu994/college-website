"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, LinkedinIcon } from "lucide-react"
import Link from "next/link"

const lectures = [
  {
    name: "Dr. Sarah Anderson",
    designation: "Professor of Computer Science",
    about: "Dr. Anderson specializes in Artificial Intelligence and Machine Learning. With over 15 years of experience in both academia and industry, she leads groundbreaking research in neural networks and deep learning.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    email: "s.anderson@evergreen.edu",
    linkedin: "#"
  },
  {
    name: "Prof. Michael Chen",
    designation: "Associate Professor of Environmental Science",
    about: "An expert in climate change and sustainable development, Prof. Chen has published numerous papers on environmental impact assessment and ecosystem conservation. He actively involves students in field research.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    email: "m.chen@evergreen.edu",
    linkedin: "#"
  },
  {
    name: "Dr. Emily Roberts",
    designation: "Head of Business Studies",
    about: "Dr. Roberts brings real-world experience from her decade in corporate strategy. Her research focuses on sustainable business practices and entrepreneurship in the digital age.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    email: "e.roberts@evergreen.edu",
    linkedin: "#"
  },
  {
    name: "Prof. James Wilson",
    designation: "Professor of Physics",
    about: "A renowned physicist specializing in quantum mechanics, Prof. Wilson has received multiple awards for his contributions to particle physics research and his innovative teaching methods.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    email: "j.wilson@evergreen.edu",
    linkedin: "#"
  }
]

const Lectures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
          <p className="text-lg text-gray-600">Learn from industry experts and renowned academics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lectures.map((lecture, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${lecture.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{lecture.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{lecture.designation}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">{lecture.about}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={`mailto:${lecture.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={lecture.linkedin} target="_blank">
                      <LinkedinIcon className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/faculty">View All Faculty</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Lectures