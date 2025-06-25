import React from 'react';
import { Link } from 'react-router-dom';

const careers = [
  {
    title: "Technology",
    opportunities: "High",
    growth: "14% by 2030",
    salary: "$97,000+"
  },
  {
    title: "Healthcare",
    opportunities: "Very High",
    growth: "16% by 2030",
    salary: "$75,000+"
  },
  {
    title: "Business",
    opportunities: "High",
    growth: "8% by 2030",
    salary: "$70,000+"
  },
  {
    title: "Science",
    opportunities: "Medium",
    growth: "7% by 2030",
    salary: "$80,000+"
  }
];

const ExploreCareer = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Career Options</h2>
        <p className="text-gray-600 mb-8">Explore future career opportunities.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {careers.map((career, index) => (
            <div key={index} className="border rounded-lg p-4 shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
              <p>Opportunities: <span className="font-medium">{career.opportunities}</span></p>
              <p>Growth: <span className="font-medium">{career.growth}</span></p>
              <p>Salary: <span className="font-medium">{career.salary}</span></p>
              <Link
                to="/explore"
                className="text-blue-600 text-sm mt-2 inline-block hover:underline"
              >
                Explore More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCareer;
