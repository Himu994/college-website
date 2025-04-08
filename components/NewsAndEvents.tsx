"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    title: "Annual Science Fair 2024",
    date: "March 15, 2024",
    description: "Join us for an exciting showcase of student projects and innovations",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee"
  },
  {
    title: "New Research Center Opening",
    date: "April 1, 2024",
    description: "State-of-the-art facility for advanced scientific research",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
  },
  {
    title: "International Student Exchange Program",
    date: "May 20, 2024",
    description: "Applications now open for fall semester exchange programs",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  }
]

const NewsAndEvents = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">News & Events</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest happenings</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2" asChild>
            <Link href="/news">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/news" className="flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" asChild>
            <Link href="/news">View All News & Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsAndEvents