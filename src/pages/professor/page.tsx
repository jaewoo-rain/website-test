import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import { professorData } from '../../mocks/professor';

export default function Professor() {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Principal Investigator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leading research in artificial intelligence and machine learning
            </p>
          </div>

          {/* Professor Profile Card */}
          <Card className="mb-8" padding="lg">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="relative group w-80 h-96 rounded-xl shadow-lg bg-gray-100 flex items-center justify-center">
                    <img
                      src={professorData.photo}
                      alt={professorData.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm font-medium">Research Focus</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {professorData.researchAreas.slice(0, 3).map((area) => (
                          <span key={area} className="px-2 py-1 bg-white/20 rounded text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Information */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {professorData.name}
                  </h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-1">
                    {professorData.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {professorData.department}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {professorData.university}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-mail-line text-gray-400 mr-3 text-lg"></i>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">{professorData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-gray-400 mr-3 text-lg"></i>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">{professorData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-gray-400 mr-3 text-lg"></i>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Office</p>
                      <p className="text-gray-900 dark:text-white">{professorData.office}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line text-gray-400 mr-3 text-lg"></i>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Office Hours</p>
                      <p className="text-gray-900 dark:text-white">{professorData.officeHours}</p>
                    </div>
                  </div>
                </div>

                {/* Research Areas */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Research Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {professorData.researchAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Biography
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {showFullBio ? professorData.bio : `${professorData.bio.substring(0, 200)}...`}
                  </p>
                  <button
                    onClick={() => setShowFullBio(!showFullBio)}
                    className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium cursor-pointer"
                  >
                    {showFullBio ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Education & Career Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Education */}
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i className="ri-graduation-cap-line mr-2 text-blue-600 dark:text-blue-400"></i>
                Education
              </h3>
              <div className="space-y-4">
                {professorData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                    {edu.thesis && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Career */}
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i className="ri-briefcase-line mr-2 text-purple-600 dark:text-purple-400"></i>
                Career
              </h3>
              <div className="space-y-4">
                {professorData.career.map((job, index) => (
                  <div key={index} className="border-l-2 border-purple-200 dark:border-purple-800 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {job.position}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">{job.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Awards */}
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <i className="ri-trophy-line mr-2 text-yellow-600 dark:text-yellow-400"></i>
              Awards & Honors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professorData.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                >
                  <i className="ri-medal-line text-yellow-600 dark:text-yellow-400 mr-3 text-lg"></i>
                  <span className="text-gray-900 dark:text-white font-medium">{award}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}