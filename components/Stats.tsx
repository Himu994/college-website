import { Users, GraduationCap, Trophy, BookOpen } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '15,000+',
    label: 'Students'
  },
  {
    icon: GraduationCap,
    value: '50+',
    label: 'Programs'
  },
  {
    icon: Trophy,
    value: '95%',
    label: 'Placement Rate'
  },
  {
    icon: BookOpen,
    value: '200+',
    label: 'Faculty Members'
  }
]

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats