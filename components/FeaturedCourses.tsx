"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    title: "Computer Science",
    description: "Learn programming, algorithms, and software development",
    duration: "4 years",
    students: "500+",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    title: "Business Administration",
    description: "Study management, finance, and entrepreneurship",
    duration: "3 years",
    students: "450+",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Environmental Science",
    description: "Explore ecology, sustainability, and conservation",
    duration: "4 years",
    students: "300+",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  }
]

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600">Discover our most popular programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/courses">Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses