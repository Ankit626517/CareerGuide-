import React from 'react';
import {
  GraduationCap, BookOpen, BarChart4, Globe,
  Users, BookMarked, Award, School
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BarChart4,
    title: 'Aptitude Assessment',
    description: 'Take comprehensive aptitude tests to identify your strengths, interests, and natural abilities.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: GraduationCap,
    title: 'Career Matching',
    description: 'Get matched with potential career paths that align with your personality and aptitude results.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: BookOpen,
    title: 'Course Guidance',
    description: 'Discover educational requirements and recommended courses for your desired career path.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Globe,
    title: 'University Database',
    description: 'Explore comprehensive information about universities, admissions, and programs worldwide.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100'
  },
  {
    icon: Award,
    title: 'Scholarship Finder',
    description: 'Find scholarship opportunities that match your academic profile and career interests.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: School,
    title: 'Career Exploration',
    description: 'Deep dive into various industries and professions with detailed career profiles.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: BookMarked,
    title: 'Skill Development',
    description: 'Access resources and recommendations for developing critical skills for your future career.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: Users,
    title: 'Expert Advisor Chat',
    description: 'Chat with our AI career advisor for personalized guidance and answers to your questions.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100'
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-blue-100 
     to-white  ">
      <div className="max-w-6xl border-amber-50 mx-auto px-3">
        {/* Title */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Comprehensive Career Guidance
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to make informed decisions about your future education and career path.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border-amber-500 hover:shadow-md transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${feature.bgColor}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
