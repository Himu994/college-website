"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages: Record<string, {
  title: string;
  description: string;
  images: string[];
}[]> = {
  "2024": [
    {
      title: "Annual Day Celebration",
      description: "Students performing at the annual cultural event",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df1293ee363",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1511578314322-379afb476865"
      ]
    },
    {
      title: "Science Exhibition",
      description: "Innovative projects by our science department",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585",
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        "https://images.unsplash.com/photo-1576319155264-99536e0be1ee"
      ]
    },
    {
      title: "Sports Meet",
      description: "Inter-college sports competition",
      images: [
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77"
      ]
    }
  ],
  "2023": [
    {
      title: "Graduation Ceremony",
      description: "Class of 2023 graduation ceremony",
      images: [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
        "https://images.unsplash.com/photo-1627556704302-624286467c65",
        "https://images.unsplash.com/photo-1523050854058-8df1293ee363"
      ]
    },
    {
      title: "Research Symposium",
      description: "Annual research presentation day",
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
      ]
    }
  ],
  "2022": [
    {
      title: "International Conference",
      description: "Global academic conference hosted at our campus",
      images: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
      ]
    },
    {
      title: "Cultural Festival",
      description: "Annual cultural festival celebrations",
      images: [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56"
      ]
    }
  ]
}

const years = Object.keys(galleryImages).sort((a, b) => b.localeCompare(a))

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<string>(years[0])
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<number, number>>({})

  const nextImage = (eventIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [eventIndex]: ((prev[eventIndex] || 0) + 1) % galleryImages[selectedYear][eventIndex].images.length
    }))
  }

  const prevImage = (eventIndex: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [eventIndex]: ((prev[eventIndex] || 0) - 1 + galleryImages[selectedYear][eventIndex].images.length) % galleryImages[selectedYear][eventIndex].images.length
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-lg text-gray-600">Capturing moments and memories at Evergreen College</p>
        </div>

        <Tabs defaultValue={selectedYear} className="w-full" onValueChange={(year) => {
          setSelectedYear(year)
          setCurrentImageIndexes({})
        }}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {years.map((year) => (
                <TabsTrigger key={year} value={year} className="px-8">
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages[year].map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <div 
                        className="h-64 bg-cover bg-center transition-all duration-500"
                        style={{ backgroundImage: `url(${item.images[currentImageIndexes[index] || 0]})` }}
                      />
                      <div className="absolute inset-0 flex items-center justify-between p-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.preventDefault()
                            prevImage(index)
                          }}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.preventDefault()
                            nextImage(index)
                          }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {item.images.map((_, imageIndex) => (
                          <div
                            key={imageIndex}
                            className={`w-2 h-2 rounded-full ${
                              (currentImageIndexes[index] || 0) === imageIndex
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
