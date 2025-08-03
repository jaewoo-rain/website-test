
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';

export default function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const researchCards = [
    {
      title: 'Professor',
      description: 'Meet our distinguished faculty members and their research expertise',
      icon: 'ri-user-star-line',
      href: '/professor',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Members',
      description: 'Connect with our talented research team and graduate students',
      icon: 'ri-team-line',
      href: '/members',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Publications',
      description: 'Explore our latest research papers and academic contributions',
      icon: 'ri-file-text-line',
      href: '/publications',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Seminar',
      description: 'Join our regular seminars and research presentations',
      icon: 'ri-presentation-line',
      href: '/seminar',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Teaching',
      description: 'Discover our innovative courses and educational programs',
      icon: 'ri-book-open-line',
      href: '/teaching',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (researchCards.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (researchCards.length - 2)) % (researchCards.length - 2));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative w-full px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4">
                    <i className="ri-server-line mr-2"></i>
                    Distributed Computing Excellence
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Distributed Computing
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Research Lab
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Advancing distributed systems through innovative research in cloud computing, GPU acceleration, 
                  sustainable data centers, and distributed optimization. Building the foundation for next-generation computing infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button to="/publications" variant="primary" size="lg" icon="ri-arrow-right-line">
                    Explore Research
                  </Button>
                  <Button to="/members" variant="outline" size="lg" icon="ri-team-line">
                    Meet the Team
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl rotate-3 opacity-20"></div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=modern%20distributed%20computing%20data%20center%20with%20server%20racks%2C%20cloud%20infrastructure%20visualization%2C%20network%20connections%20glowing%20in%20blue%20and%20purple%2C%20high-performance%20computing%20clusters%2C%20GPU%20arrays%2C%20sustainable%20energy%20systems%2C%20futuristic%20distributed%20systems%20architecture%2C%20clean%20minimalist%20tech%20environment&width=500&height=400&seq=hero002&orientation=landscape"
                    alt="Distributed Computing Lab"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Research</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our cutting-edge research across various domains
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-gray-700 dark:text-gray-300 text-xl"></i>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-gray-700 dark:text-gray-300 text-xl"></i>
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (320 + 32)}px)`, // 320px (w-80) + 32px (gap-8)
                  width: `${researchCards.length * (320 + 32)}px`
                }}
              >
                {researchCards.map((item, index) => (
                  <div
                    key={item.title}
                    onClick={() => navigate(item.href)}
                    className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group overflow-hidden"
                  >
                    <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${item.icon} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                        <span className="mr-2">Learn More</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: researchCards.length - 2 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="w-full px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Highlights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our core research areas driving innovation in distributed computing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-cloud-line text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cloud Computing</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
               컴퓨팅 서버를 구성하는 CPU, GPU, Memory, Storage 등을 가상화된 인스턴스 (Virtual Machine Instance) 로 분할하여 다중 사용자 (Multi Tenants) 가 접근할 수 있도록 하는 기술입니다. 
               <p> 서비스 제공자 (Serivce Provider) 는 값비싼 서버 구축 및 확장 비용을 부담하지 않으면서 자신들의 응용 처리 요구 성능에 적합한 클러스터 환경을 구성할 수 있습니다. </p>
              </p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-cpu-line text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">GPU Acceleration for AI</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                고수준의 병렬성 (high parallelism) 을 제공하는 그래픽 프로세싱 유닛 (GPU) 을 이용하여 머신러닝과 같은 인공지능 응용 및 빅데이터 처리 속도를 가속화하는 기술입니다. 
                <p>GPU 의 스트리밍 프로세서 (streaming processors) 할당 및 주파수 조정 (frequency scaling) 을 통해 전력 소비를 줄이면서도 응용 처리 성능을 최대화하는 기법을 고안할 수 있습니다.</p>
              </p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-leaf-line text-emerald-600 dark:text-emerald-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sustainable Data Center</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                기존의 화석 (coal) 에너지가 아닌 태양열 (photovoltaic) 과 풍력 (wind power) 과 같은 신재생 에너지 (renewable energy) 를 이용하여 데이터 센터와 같은 대규모 클러스터의 전력을 공급하는 기술입니다. 
                <p>주파수 조정 (frequency scaling), 동적 사이징 (dynamic right sizing) 및 에너지 스토리지 (energy storage) 기반 기술을 통하여 전력 공급의 안정성과 사용자 서비스 품질 보장을 동시에 달성할 수 있습니다.</p>
              </p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-share-line text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Distributed Optimization</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                높은 차원수 (high dimensionality) 를 가지는 최적화 문제 (optimization problem) 의 해를 찾는데 걸리는 긴 풀이 시간을 줄이기 위한 분할 계산 이론입니다. 이중성 (duality) 을 기반으로 원 문제를 분할 가능한 형태로 변형할 수 있습니다. 본 이론을 통해 수백대 이상의 서버를 포함하는 클러스터 환경에서 확장가능한 (scalable) 자원 관리 및 작업 할당 기법을 설계할 수 있습니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Current Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ongoing research projects that are shaping the future of distributed computing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* WebIDE Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="relative overflow-hidden rounded-t-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20web-based%20integrated%20development%20environment%20interface%2C%20code%20editor%20with%20syntax%20highlighting%2C%20multiple%20programming%20language%20support%2C%20collaborative%20coding%20platform%2C%20cloud-based%20IDE%20dashboard%2C%20clean%20modern%20UI%20design%2C%20developer%20workspace%2C%20coding%20environment%20with%20dark%20and%20light%20themes%2C%20terminal%20integration%2C%20file%20explorer%20sidebar&width=400&height=240&seq=webide001&orientation=landscape"
                  alt="WebIDE Project"
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-code-line text-white text-lg"></i>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                    Active Development
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Cloud-based WebIDE
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  Developing a distributed web-based integrated development environment with real-time collaboration, 
                  containerized execution environments, and seamless integration with cloud computing resources.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-team-line mr-1"></i>
                    <span>2 Contributors</span>
                  </div>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span onClick={() => navigate("/seminar")} className="mr-2 text-sm cursor-pointer">View Progress</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </Card>

            {/* JETSON Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div  className="relative overflow-hidden rounded-t-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=NVIDIA%20Jetson%20edge%20computing%20device%2C%20embedded%20AI%20computing%20board%2C%20GPU%20accelerated%20edge%20inference%2C%20autonomous%20systems%20hardware%2C%20robotics%20computing%20platform%2C%20edge%20AI%20development%20kit%2C%20neural%20network%20processing%20unit%2C%20compact%20high-performance%20computing%20module%2C%20green%20circuit%20board%20with%20cooling%20system&width=400&height=240&seq=jetson001&orientation=landscape"
                  alt="JETSON Project"
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-cpu-line text-white text-lg"></i>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Hardware Integration
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300">
                  JETSON Edge Computing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  Implementing distributed edge computing solutions using NVIDIA Jetson platforms for real-time AI inference, 
                  autonomous systems, and IoT applications with optimized GPU utilization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-team-line mr-1"></i>
                    <span>2 Contributors</span>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                    <span onClick={() => navigate("/seminar")} className="mr-2 text-sm cursor-pointer">View Progress</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Agent Project */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="relative overflow-hidden rounded-t-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=intelligent%20AI%20agent%20system%2C%20autonomous%20artificial%20intelligence%2C%20machine%20learning%20agent%20network%2C%20distributed%20AI%20processing%2C%20neural%20network%20visualization%2C%20intelligent%20automation%2C%20AI%20decision%20making%20system%2C%20multi-agent%20coordination%2C%20cognitive%20computing%20architecture%2C%20futuristic%20AI%20interface%20with%20glowing%20connections&width=400&height=240&seq=aiagent001&orientation=landscape"
                  alt="AI Agent Project"
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-robot-line text-white text-lg"></i>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                    AI Research
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Distributed AI Agents
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  Creating intelligent multi-agent systems with distributed decision-making capabilities, 
                  autonomous coordination protocols, and adaptive learning mechanisms for complex problem solving.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-team-line mr-1"></i>
                    <span>1 Contributors</span>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                    <span onClick={() => navigate("/seminar")} className="mr-2 text-sm cursor-pointer">View Progress</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress Overview */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <i className="ri-time-line text-blue-600 mr-2"></i>
              <span className="text-gray-700 font-medium">Projects updated regularly - Last update: August 2025</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
