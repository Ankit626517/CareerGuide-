import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lightbulb, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 to-transparent animate-fade" />

      <div className="max-w-5xl mx-auto px-4 text-center animate-fade-up">
        {/* Tagline */}
        <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium bg-green-100 text-green-800 rounded-full">
          <Compass className="h-4 w-4 mr-1 animate-spin-slow" />
          Guiding Students Towards Bright Futures
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 animate-slide-up">
          Discover Your Perfect <br />
          <span className="text-blue-600">Career Path</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
          Get guidance to help you choose the right career and education path confidently.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-300">
          <Link
            to="/test"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Take Aptitude Test
          </Link>
          <Link
            to="/explore"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            Explore Careers
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up delay-500">
          <div className="bg-blue-50 p-15 rounded-md text-center shadow hover:shadow-md transition hover:-translate-y-1">
            <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <h3 className="text-xl font-bold">1000+</h3>
            <p className="text-gray-600">Career Paths</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-md text-center shadow hover:shadow-md transition hover:-translate-y-1">
            <Lightbulb className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold">Personalized</h3>
            <p className="text-gray-600">Recommendations</p>
          </div>
          <div className="bg-green-50 p-6 rounded-md text-center shadow hover:shadow-md transition hover:-translate-y-1">
            <Compass className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-bold">Expert</h3>
            <p className="text-gray-600">Guidance 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
