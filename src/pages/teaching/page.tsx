import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import { coursesData } from '../../mocks/courses';

export default function Teaching() {
  console.log(new Date().getMonth());
  const currentCourses = coursesData.filter(course => 
    course.semester.includes( new Date().getFullYear().toString() +  (new Date().getMonth() >= 6 ? " 2학기" : " 1학기") )
  );
  const pastCourses = coursesData.filter(course => 
    !course.semester.includes( new Date().getFullYear().toString() +  (new Date().getMonth() >= 6 ? " 2학기" : " 1학기") )
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Teaching
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Academic courses and educational contributions
            </p>
          </div>

          {/* Current Courses */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Current Courses ({new Date().getFullYear().toString() + (new Date().getMonth() >= 6 ? " 2학기" : " 1학기")})
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentCourses.map((course) => (
                <Card key={course.id} hover className="group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <i className={`${course.icon} text-white text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {course.code}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {course.title}
                          </h3>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          course.level === 'Graduate' 
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                            : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {course.semester}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-group-line mr-1"></i>
                          {course.students} students
                        </span>
                        <span className="flex items-center">
                          <i className="ri-book-line mr-1"></i>
                          {course.credits} credits
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Courses */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Previously Taught
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {pastCourses.map((course) => (
                <Card key={course.id} hover className="group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <i className={`${course.icon} text-gray-600 dark:text-gray-400`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                        <div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {course.code}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {course.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <span>{course.semester}</span>
                          <span>•</span>
                          <span>{course.students} students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <Card className="mb-12" padding="lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Teaching Philosophy
              </h2>
            </div>
            
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I believe that effective teaching in computer science requires a balance between theoretical foundations 
                and practical applications. My courses emphasize hands-on learning through projects that mirror 
                real-world challenges in artificial intelligence and machine learning.
              </p>
              <p>
                I strive to create an inclusive learning environment where students feel comfortable exploring 
                complex concepts, asking questions, and learning from mistakes. Each course is designed to build 
                critical thinking skills while providing students with the tools they need to become independent researchers.
              </p>
              <p>
                My goal is not just to teach algorithms and techniques, but to inspire the next generation of 
                researchers who will push the boundaries of what's possible in AI and contribute meaningfully to society.
              </p>
            </div>
          </Card>

          {/* Teaching Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {coursesData.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Courses Taught</div>
            </Card>
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {coursesData.reduce((sum, course) => sum + course.students, 0)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Students Taught</div>
            </Card>
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {coursesData.filter(c => c.code === '전공').length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Major Courses</div>
            </Card>
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {coursesData.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Total Credits</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}