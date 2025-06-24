import React from 'react';
import { BrainCircuit, Target, Puzzle, AwardIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const AptitudeTest = () => {
  const testFeatures = [
    {
      icon: <BrainCircuit className="text-purple-600 w-5 h-5" />,
      title: 'Assess Your Skills',
      description: 'Discover your natural abilities, strengths, and areas for growth.',
      bg: 'bg-purple-100',
    },
    {
      icon: <Target className="text-blue-600 w-5 h-5" />,
      title: 'Career Matching',
      description: 'Get matched with careers that align with your unique profile.',
      bg: 'bg-blue-100',
    },
    {
      icon: <Puzzle className="text-amber-600 w-5 h-5" />,
      title: 'Identify Patterns',
      description: 'Uncover patterns in your thinking and problem-solving approach.',
      bg: 'bg-amber-100',
    },
    {
      icon: <AwardIcon className="text-emerald-600 w-5 h-5" />,
      title: 'Personalized Report',
      description: 'Receive a detailed report with actionable insights and recommendations.',
      bg: 'bg-emerald-100',
    },
  ];

  return (
    <section className="py-16 px-4  bg-blue-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-blue-600 text-sm font-semibold">
            <Target className="w-4 h-4" />
            <span>Find the Path</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Discover Your Potential with Our Aptitude Test
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Our comprehensive aptitude assessment helps you understand your strengths, 
            interests, and natural inclinations to guide you toward careers where you'll truly excel.
          </p>

          <div className="space-y-4">
            {testFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${feature.bg}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive Button */}
          <Link to="/test">
            <button className="mt-4 px-5 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Start Your Assessment
            </button>
          </Link>
        </div>

    
      </div>
    </section>
  );
};

export default AptitudeTest;
