import React from 'react';
import universities from '../data/universities.json';
import { useState } from 'react';
import { motion } from 'framer-motion';




const courses = [
  {
    name: "Computer Science",
    provider: "Indo German",
    duration: "3 years",
    level: "Beginner",
    rating: "3.8/5",
    category: "Engineering",
  },
  {
    name: "Civil",
    provider: "Indo German",
    duration: "3 years",
    level: "Beginner",
    rating: "3/5",
    category: "Engineering",
  },
  {
    name: "Mechanical",
    provider: "Indo German",
    duration: "3 years",
    level: "Beginner",
    rating: "3/5",
    category: "Engineering",
  },
];

const scholarships = [
  {
    name: "Medhavi Chatra Yojana",
    amount: "Based on grade achieve",
    eligibility: "From 75%",
    category: "Merit-based",
  },
  {
    name: "Private Scholarship",
    amount: "Based on grade",
    eligibility: "From 80%",
    category: "Merit-based",
  },
  {
    name: "Central Government Scholarship",
    amount: "Based on grade",
    eligibility: "From 85%",
    category: "Merit-Based",
  },
];

const Education = () => {
  const [visibleUniversities, setVisibleUniversities] = useState(9);
  return (
    <div className="min-h-screen font-bold bg-gray-50 py-10 px-4 md:px-10">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Unlock Your Future with Education
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover top universities, explore diverse career-building courses, and find scholarships that support your dreams — all in one place.
        </p>
      </header>


      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">🎓 Top Universities</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.slice(0, visibleUniversities).map((uni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{uni.name}</h3>
              <p className="text-sm text-gray-500 mb-2 italic">{uni.location}</p>
              <p className="text-sm mb-1"><strong>Programs:</strong> {uni.programs.join(', ')}</p>
              <p className="text-sm mb-1"><strong>Ranking:</strong> {uni.ranking}</p>
              <p className="text-sm mb-3"><strong>Acceptance:</strong> {uni.acceptance}</p>
              {uni.infoLink && (
                <a
                  href={uni.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-2 border-blue-600 p-2 rounded-3xl bg-blue-500 text-sm text-white  font-medium"
                >
                  🌐 View More Info
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {visibleUniversities < universities.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleUniversities(prev => prev + 9)}
              className=" bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              View More Universities
            </button>
          </div>
        )}
      </section>

      {/* Courses */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">📘 Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-1">{course.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{course.provider}</p>
              <p className="text-sm mb-1"><strong>Duration:</strong> {course.duration}</p>
              <p className="text-sm mb-1"><strong>Level:</strong> {course.level}</p>
              <p className="text-sm"><strong>Rating:</strong> {course.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarships */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">🏅 Scholarships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((sch, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{sch.name}</h3>
              <p className="text-sm mb-1"><strong>Amount:</strong> {sch.amount}</p>
              <p className="text-sm mb-1"><strong>Eligibility:</strong> {sch.eligibility}</p>
              <p className="text-sm"><strong>Category:</strong> {sch.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
