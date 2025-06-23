import React from 'react';
import {
  Code,
  Microscope,
  HeartPulse,
  Briefcase,
  Palette,
  Building,
  Scale,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const careers = [
  {
    title: "Technology",
    icon: Code,
    opportunities: "High",
    growth: "14% by 2030",
    salary: "$97,000+",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    opportunities: "Very High",
    growth: "16% by 2030",
    salary: "$75,000+",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    title: "Business",
    icon: Briefcase,
    opportunities: "High",
    growth: "8% by 2030",
    salary: "$70,000+",
    color: "text-amber-600",
    bgColor: "bg-amber-100"
  },
  {
    title: "Science",
    icon: Microscope,
    opportunities: "Medium",
    growth: "7% by 2030",
    salary: "$80,000+",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
  {
    title: "Arts & Design",
    icon: Palette,
    opportunities: "Medium",
    growth: "4% by 2030",
    salary: "$50,000+",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Law",
    icon: Scale,
    opportunities: "Medium",
    growth: "9% by 2030",
    salary: "$126,000+",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  },
  {
    title: "Education",
    icon: BookOpen,
    opportunities: "High",
    growth: "10% by 2030",
    salary: "$60,000+",
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  },
  {
    title: "Architecture",
    icon: Building,
    opportunities: "Medium",
    growth: "3% by 2030",
    salary: "$82,000+",
    color: "text-gray-600",
    bgColor: "bg-gray-100"
  },
];

const CareerPaths = () => {
  return (
    <section className="py-20 bg-amber-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
            <Briefcase className="h-4 w-4 mr-2" />
            Career Paths
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Potential Career Pathways
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Discover various career fields and their outlook for the future.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <div
              key={index}
              className="p-6   rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 bg-white"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${career.bgColor}`}>
                <career.icon className={`w-6 h-6 ${career.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{career.title}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Opportunities:</span>
                  <span className="font-medium">{career.opportunities}</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-medium">{career.growth}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Salary:</span>
                  <span className="font-medium">{career.salary}</span>
                </div>
              </div>
              <Link
                to="/explore"
                className="flex items-center justify-between mt-4 text-blue-600 text-sm hover:underline"
              >
                Explore Path
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;
