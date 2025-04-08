import Hero from '@/components/Hero'
import FeaturedCourses from '@/components/FeaturedCourses'
import NewsAndEvents from '@/components/NewsAndEvents'
import Stats from '@/components/Stats'
import Lectures from '@/components/Lectures'

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Lectures />
      <NewsAndEvents />
    </div>
  )
}