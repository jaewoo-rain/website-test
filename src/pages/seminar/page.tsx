
import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Modal from '../../components/base/Modal';
import Input from '../../components/base/Input';
import { seminarsData } from '../../mocks/seminars';

export default function Seminar() {
  const [previewModal, setPreviewModal] = useState<{isOpen: boolean, seminar: any}>({
    isOpen: false,
    seminar: null
  });

  const [passwordModal, setPasswordModal] = useState<{isOpen: boolean, seminar: any}>({
    isOpen: false,
    seminar: null
  });

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 페이징 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 페이징된 세미나 데이터 계산
  const totalPages = Math.ceil(seminarsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSeminars = seminarsData.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openPreview = (seminar: any) => {
    setPreviewModal({ isOpen: true, seminar });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, seminar: null });
  };

  const openPasswordModal = (seminar: any) => {
    setPasswordModal({ isOpen: true, seminar });
    setPassword('');
    setPasswordError('');
  };

  const closePasswordModal = () => {
    setPasswordModal({ isOpen: false, seminar: null });
    setPassword('');
    setPasswordError('');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 비밀번호 검증 (예시로 'lab2024' 사용)
    if (password === 'lab2024') {
      // 구글 드라이브 파일 다운로드
      window.open(passwordModal.seminar.downloadUrl, '_blank');
      closePasswordModal();
    } else {
      setPasswordError('비밀번호가 올바르지 않습니다.');
    }
  };

  // 구글 드라이브 동기화 함수 (시뮬레이션)
  const syncWithGoogleDrive = async () => {
    // 실제로는 Google Drive API를 사용
    console.log('Google Drive에서 세미나 파일 목록을 가져오는 중...');
    
    // 동기화 성공 시뮬레이션
    alert('Google Drive와 동기화가 완료되었습니다!');
  };

  // 页面变化函数
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 페이징 번호 생성 함수
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Seminars
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Latest research presentations and academic talks from our laboratory
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <i className="ri-google-line text-green-600 dark:text-green-400 mr-2"></i>
                <span className="text-green-700 dark:text-green-300 text-sm font-medium">
                  Google Drive 연동됨
                </span>
              </div>
              <Button
                onClick={syncWithGoogleDrive}
                variant="outline"
                icon="ri-refresh-line"
              >
                동기화
              </Button>
            </div>
          </div>

          {/* Seminars */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Seminars
                </h2>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {startIndex + 1}-{Math.min(endIndex, seminarsData.length)} of {seminarsData.length} seminars
              </div>
            </div>

            <div className="space-y-4">
              {currentSeminars.map((seminar) => (
                <Card key={seminar.id} hover className="group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <i className="ri-presentation-line text-blue-600 dark:text-blue-400 text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {seminar.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span className="flex items-center">
                              <i className="ri-calendar-line mr-1"></i>
                              {formatDate(seminar.date)}
                            </span>
                            <span className="flex items-center">
                              <i className="ri-user-line mr-1"></i>
                              {seminar.speaker}
                            </span>
                            <span className="flex items-center">
                              <i className="ri-google-line mr-1"></i>
                              Google Drive ({seminar.fileSize})
                            </span>
                            <span className="flex items-center">
                              <i className="ri-shield-line mr-1 text-amber-500"></i>
                              <span className="text-amber-600 dark:text-amber-400">비밀번호 보호</span>
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {seminar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openPreview(seminar)}
                        icon="ri-eye-line"
                      >
                        Preview
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => openPasswordModal(seminar)}
                        icon="ri-download-line"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-8 space-x-2">
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  icon="ri-arrow-left-line"
                >
                  Previous
                </Button>

                {/* Page Numbers */}
                {getPaginationNumbers().map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    className="min-w-[40px]"
                  >
                    {pageNum}
                  </Button>
                ))}

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  icon="ri-arrow-right-line"
                >
                  Next
                </Button>
              </div>
            )}
          </div>

          {/* Password Modal */}
          <Modal
            isOpen={passwordModal.isOpen}
            onClose={closePasswordModal}
            title="비밀번호 입력"
            size="sm"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-keyhole-line text-amber-600 dark:text-amber-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                보호된 파일
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                이 세미나 파일을 다운로드하려면 비밀번호를 입력하세요.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  required
                  className={passwordError ? 'border-red-500' : ''}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="ghost"
                  onClick={closePasswordModal}
                  type="button"
                >
                  취소
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  icon="ri-download-line"
                >
                  다운로드
                </Button>
              </div>
            </form>
          </Modal>

          {/* Preview Modal */}
          <Modal
            isOpen={previewModal.isOpen}
            onClose={closePreview}
            title="Seminar Preview"
            size="lg"
          >
            {previewModal.seminar && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {previewModal.seminar.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <i className="ri-calendar-line mr-1"></i>
                      {formatDate(previewModal.seminar.date)}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-user-line mr-1"></i>
                      {previewModal.seminar.speaker}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-google-line mr-1"></i>
                      Google Drive
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {previewModal.seminar.description}
                  </p>
                </div>

                {/* Google Drive Preview */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-12 text-center">
                  <div className="text-gray-400 dark:text-gray-500 mb-4">
                    <i className="ri-google-line text-6xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Google Drive Preview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Google Drive 연동을 통해 파일 미리보기를 제공합니다
                  </p>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-4">
                    <div className="text-gray-400 dark:text-gray-500">
                      <i className="ri-file-pdf-line text-4xl mb-2"></i>
                      <p className="text-sm">PDF 미리보기 영역</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => openPasswordModal(previewModal.seminar)}
                    variant="primary"
                    icon="ri-download-line"
                  >
                    비밀번호 입력 후 다운로드
                  </Button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}
