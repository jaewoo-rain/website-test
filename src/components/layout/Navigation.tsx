import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../hooks/useDarkMode';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/professor', label: 'Professor' },
    { path: '/members', label: 'Members' },
    { path: '/publications', label: 'Publications' },
    { path: '/seminar', label: 'Seminar' },
    { path: '/teaching', label: 'Teaching' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${className}`}>
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <i className="ri-flask-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Research Lab
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap cursor-pointer ${
                  location.pathname === item.path
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <i className="ri-sun-line text-lg"></i>
            ) : (
              <i className="ri-moon-line text-lg"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}