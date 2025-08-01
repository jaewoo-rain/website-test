
import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import Modal from '../../components/base/Modal';
import { membersData } from '../../mocks/members';

export default function Members() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMemberDetail = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeMemberDetail = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the brilliant minds driving innovation in distributed computing and AI research
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {membersData.map((member) => (
              <Card
                key={member.id}
                hover
                className="group relative overflow-hidden"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="flex flex-col items-center">
                  {/* Photo */}
                  <div className="relative mb-4 w-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-48 object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium mb-1">
                          {member.year}
                        </p>
                        <p className="text-white/80 text-xs">
                          {member.research}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4 w-full">
                    <h3 
                      className="text-lg font-semibold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={() => openMemberDetail(member)}
                    >
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.research}
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 w-full justify-center">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      title="GitHub"
                    >
                      <i className="ri-github-line text-lg"></i>
                    </a>
                    <a
                      href={member.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      title="Blog"
                    >
                      <i className="ri-global-line text-lg"></i>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      title="Email"
                    >
                      <i className="ri-mail-line text-lg"></i>
                    </a>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredMember === member.id && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10 opacity-0 animate-fade-in">
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                      Specialized in {member.research.split(' ').slice(0, 3).join(' ')}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center" padding="sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {membersData.filter(m => m.position.includes('PhD')).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                PhD Students
              </div>
            </Card>
            <Card className="text-center" padding="sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {membersData.filter(m => m.position.includes('Postdoc')).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Postdocs
              </div>
            </Card>
            <Card className="text-center" padding="sm">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {membersData.filter(m => m.position.includes('Master')).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Master's Students
              </div>
            </Card>
            <Card className="text-center" padding="sm">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {membersData.filter(m => m.position.includes('Scientist')).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Research Scientists
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeMemberDetail}
        title="Member Profile"
        size="lg"
      >
        {selectedMember && (
          <div className="space-y-6">
            {/* Member Header */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-32 h-40 object-cover object-top rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {selectedMember.position}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{selectedMember.year}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <i className="ri-mail-line mr-2"></i>
                    <a href={`mailto:${selectedMember.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {selectedMember.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Area */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <i className="ri-research-line mr-2 text-blue-600 dark:text-blue-400"></i>
                Research Focus
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedMember.research}
              </p>
            </div>

            {/* Publications (Mock data) */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <i className="ri-file-text-line mr-2 text-green-600 dark:text-green-400"></i>
                Recent Publications
              </h4>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Advanced Techniques in {selectedMember.research.split(' ')[0]} Computing
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Conference on Distributed Systems 2024
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    Optimization Methods for Large-Scale {selectedMember.research.split(' ')[1]} Systems
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Journal of Computer Science 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={selectedMember.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
              >
                <i className="ri-github-line mr-2"></i>
                GitHub
              </a>
              <a
                href={selectedMember.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <i className="ri-global-line mr-2"></i>
                Blog
              </a>
              <a
                href={`mailto:${selectedMember.email}`}
                className="flex items-center px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                Email
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
