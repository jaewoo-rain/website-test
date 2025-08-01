
import { useState, useMemo } from 'react';
import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import { publicationsData } from '../../mocks/publications';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'year' | 'title' | 'citations'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories = ['All', 'SCI Journals', 'International Conference', 'Domestic Journals', 'Domestic Conference', 'Patents', 'Awards'];

  const filteredAndSortedPublications = useMemo(() => {
    let filtered = publicationsData.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || pub.type === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'year':
          comparison = a.year - b.year;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'citations':
          comparison = a.citations - b.citations;
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [searchQuery, selectedCategory, sortBy, sortOrder]);

  const handleSort = (field: 'year' | 'title' | 'citations') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'SCI Journals':
        return 'ri-book-line';
      case 'International Conference':
        return 'ri-global-line';
      case 'Domestic Journals':
        return 'ri-book-2-line';
      case 'Domestic Conference':
        return 'ri-presentation-line';
      case 'Patents':
        return 'ri-lightbulb-line';
      case 'Awards':
        return 'ri-award-line';
      default:
        return 'ri-file-line';
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'SCI Journals':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'International Conference':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'Domestic Journals':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      case 'Domestic Conference':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
      case 'Patents':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'Awards':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Publications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recent research contributions and academic publications
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Search and Sort Controls */}
          <Card className="mb-8" padding="md">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <Input
                  placeholder="Search publications, authors, or venues..."
                  icon="ri-search-line"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Sort by:</span>
                <Button
                  variant={sortBy === 'year' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSort('year')}
                  icon={sortBy === 'year' ? (sortOrder === 'desc' ? 'ri-arrow-down-line' : 'ri-arrow-up-line') : undefined}
                >
                  Year
                </Button>
                <Button
                  variant={sortBy === 'title' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSort('title')}
                  icon={sortBy === 'title' ? (sortOrder === 'desc' ? 'ri-arrow-down-line' : 'ri-arrow-up-line') : undefined}
                >
                  Title
                </Button>
                <Button
                  variant={sortBy === 'citations' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSort('citations')}
                  icon={sortBy === 'citations' ? (sortOrder === 'desc' ? 'ri-arrow-down-line' : 'ri-arrow-up-line') : undefined}
                >
                  Citations
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Showing {filteredAndSortedPublications.length} of {publicationsData.length} publications
            </div>
          </Card>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredAndSortedPublications.map((publication, index) => (
              <Card
                key={publication.id}
                hover
                className="group transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col gap-4">
                  {/* Publication Number and Type Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                        {index + 1}.
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(publication.type)}`}>
                        <i className={`${getCategoryIcon(publication.type)} mr-1`}></i>
                        {publication.type}
                      </span>
                    </div>
                  </div>

                  {/* Publication Content */}
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {publication.title}
                    </h3>

                    <div className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                      <span className="font-medium">{publication.authors.join(', ')}</span>
                      {publication.authors.includes('Sarah Chen') && (
                        <span className="text-blue-600 dark:text-blue-400">*</span>
                      )}
                      , <em>{publication.venue}</em>
                      {(publication as any).volume && (
                        <> vol.{(publication as any).volume}</>
                      )}
                      {(publication as any).issue && (
                        <> no.{(publication as any).issue}</>
                      )}
                      {(publication as any).pages && (
                        <> pp.{(publication as any).pages}</>
                      )}
                      , {publication.year}
                      {(publication as any).link && (
                        <>
                          {' '}(<a href={(publication as any).link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">link</a>)
                        </>
                      )}
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      {(publication as any).print_issn && (
                        <span>Print ISSN: {(publication as any).print_issn}</span>
                      )}
                      {(publication as any).electronic_issn && (
                        <span>Electronic ISSN: {(publication as any).electronic_issn}</span>
                      )}
                      {(publication as any).impact_factor && (
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          IF: {(publication as any).impact_factor}
                        </span>
                      )}
                      {(publication as any).ranking && (
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {(publication as any).ranking} Rank
                        </span>
                      )}
                      {(publication as any).kci_grade && (
                        <span className="text-purple-600 dark:text-purple-400 font-medium">
                          {(publication as any).kci_grade}
                        </span>
                      )}
                      {(publication as any).patent_number && (
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                          {(publication as any).patent_number}
                        </span>
                      )}
                      {(publication as any).award_name && (
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          {(publication as any).award_name}
                        </span>
                      )}
                      {publication.citations > 0 && (
                        <span className="flex items-center">
                          <i className="ri-quote-line mr-1"></i>
                          {publication.citations} citations
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredAndSortedPublications.length === 0 && (
            <Card className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <i className="ri-file-search-line text-4xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No publications found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search query or filters
              </p>
            </Card>
          )}

          {/* Publication Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => {
              const count = publicationsData.filter(pub => pub.type === category).length;
              return (
                <Card key={category} className="text-center" padding="md">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${getCategoryColor(category)}`}>
                    <i className={`${getCategoryIcon(category)} text-xl`}></i>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {count}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                    {category}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Total Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {publicationsData.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Total Publications</div>
            </Card>
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {publicationsData.reduce((sum, pub) => sum + pub.citations, 0)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Total Citations</div>
            </Card>
            <Card className="text-center" padding="lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {new Set(publicationsData.flatMap(pub => pub.authors)).size}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Collaborators</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
