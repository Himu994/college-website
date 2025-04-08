"use client"

import Lectures from '@/components/Lectures'

export default function Faculty() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
          <p className="text-lg text-gray-600">Meet our distinguished professors and lecturers</p>
        </div>
        <Lectures />
      </div>
    </div>
  )
}