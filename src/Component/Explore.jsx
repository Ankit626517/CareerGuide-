import React from 'react';
import { Search, Filter, Briefcase } from 'lucide-react';

const Explore = () => {
  const categories = [
    "PCM", "PCB", "Commerce", "Arts & Design",
    "PCMB", "Polytechnic", "Sports", "Defence"
  ];

  const careers = [
    {
      title: "PCM",
      category: "Maths",
      description: "Can become Engineer and much more...",
      education: "Maths",
      salary: "Very high",
      growth: "22% growth by 2030",
    },
    {
      title: "PCB",
      category: "Biology",
      description: "Can become Doctor and much more...",
      education: "Biology",
      salary: "Very High",
      growth: "40% growth after corona",
    },
    {
      title: "Commerce",
      category: "Business",
      description: "Can become Accountant and much more...",
      education: "Commerce",
      salary: "High",
      growth: "20% growth by 2026",
    },
    {
      title: "Arts and Design",
      category: "Arts",
      description: "Can become lawyer and much more...",
      education: "Bachelor's in Education",
      salary: "$62,000",
      growth: "8% growth by 2030",
    },
    {
      title: "Polytechnic",
      category: "Science+Maths",
      description: "Can achieve diploma and become engineer, doctor and more...",
      education: "Science",
      salary: "Very High",
      growth: "60% growth by 2027",
    },
    {
      title: "Defence",
      category: "Civil Services",
      description: "Can give government exams",
      education: "Civil",
      salary: "Average to High",
      growth: "Average growth",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar Placeholder */}


      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Briefcase className="h-4 w-4" />
              <span>Career Explorer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Explore Career Paths</h1>
            <p className="text-lg text-gray-600">
              Discover and compare different careers to find your perfect fit.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="search"
                  placeholder="Search for careers..."
                  className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Search
              </button>
            </div>

            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-1.5 text-sm font-bold border border-blue-200 rounded-full text-blue-600 bg-white hover:bg-blue-50 transition"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Career Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
              >
                <div className="mb-2 text-xs font-medium text-blue-500 uppercase tracking-wide">
                  {career.category}
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{career.title}</h2>
                <p className="text-gray-600 mb-4">{career.description}</p>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Education:</span>
                    <span className="font-medium text-gray-800">{career.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Avg. Salary:</span>
                    <span className="font-medium text-gray-800">{career.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Job Outlook:</span>
                    <span className="font-medium text-gray-800">{career.growth}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-white mt-16 py-5 text-center text-sm text-gray-500 border-t">
        © 2025 Career Guidance. All rights reserved.
      </footer>
    </div>
  );
};

export default Explore;
