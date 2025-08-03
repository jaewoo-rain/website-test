
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Modal from '../../components/base/Modal';
import Input from '../../components/base/Input';


// TODO: .env 파일 또는 다른 보안 방법을 사용하여 실제 키로 교체하세요.
const API_KEY = 'AIzaSyB9bRvxAA-UCwOviX5DqKxihFOR1Ravsr8';
const CLIENT_ID = '408825722492-u9lcsgdln403o58mmn4ts0k9plhqtbsn.apps.googleusercontent.com';
const FOLDER_ID = '1XvTCStFfaljeucRj0y0CFwICs3qIc_7K'; // 세미나 파일이 있는 폴더의 ID

export default function Seminar() {
  const [seminars, setSeminars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
  const totalPages = Math.ceil(seminars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSeminars = seminars.slice(startIndex, endIndex);

  useEffect(() => {
    const initClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      });
      await syncWithGoogleDrive();
    };
    gapi.load('client', initClient);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
    
    // 비밀번호 검증
    if (password === import.meta.env.VITE_SEMINAR_PASSWORD) {
      // 구글 드라이브 파일 다운로드
      window.open(passwordModal.seminar.downloadUrl, '_blank');
      closePasswordModal();
    } else {
      setPasswordError('비밀번호가 올바르지 않습니다.');
    }
  };

  // 구글 드라이브 동기화 함수
  async function syncWithGoogleDrive() {
    try {
      const response = await gapi.client.drive.files.list({
        q: `'${FOLDER_ID}' in parents`,
        fields: 'files(id, name, webViewLink, webContentLink, createdTime, size, description)',
        orderBy: 'createdTime desc',
      });

      const files = response.result.files;
      if (files && files.length > 0) {
        const formattedSeminars = files.map((file: any) => {
          let fileType = 'File';
          let fileIcon = 'ri-file-line';
          const fileNameLower = file.name.toLowerCase();

          if (fileNameLower.endsWith('.pdf')) {
            fileType = 'PDF';
            fileIcon = 'ri-file-pdf-line';
          } else if (fileNameLower.endsWith('.pptx')) {
            fileType = 'PPTX';
            fileIcon = 'ri-presentation-line';
          }

          return {
            id: file.id,
            title: file.name.replace(/\.(pdf|pptx)$/i, ''), // 파일 확장자 제거
            date: file.createdTime,
            speaker: "Google Drive", // TODO: 스피커 정보 파싱 로직 추가
            type: fileType,
            icon: fileIcon,
            fileSize: file.size ? `${(parseInt(file.size) / 1024 / 1024).toFixed(2)} MB` : 'N/A',
            downloadUrl: file.webContentLink,
            webViewLink: file.webViewLink,
            description: file.description || "No description available.",
            upcoming: new Date(file.createdTime) > new Date(),
          };
        });
        setSeminars(formattedSeminars);
        console.log('Google Drive와 동기화가 완료되었습니다!');
      } else {
        console.warn('Google Drive 폴더를 찾을 수 없거나, 폴더가 공유되지 않았을 수 있습니다.');
      }
    } catch (error) {
      console.error('Error syncing with Google Drive:', error);
    } finally {
      setIsLoading(false);
    }
  }

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
                {startIndex + 1}-{Math.min(endIndex, seminars.length)} of {seminars.length} seminars
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <i className="ri-loader-4-line animate-spin text-4xl text-blue-500"></i>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Loading seminars...</p>
              </div>
            ) : currentSeminars.length > 0 ? (
              <div className="space-y-4">
                {currentSeminars.map((seminar) => (
                  <Card key={seminar.id} hover className="group">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <i className={`${seminar.icon} text-blue-600 dark:text-blue-400 text-lg`}></i>
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
                                <i className={`${seminar.icon} mr-1`}></i>
                                {seminar.type} ({seminar.fileSize})
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
                          variant="primary"
                          size="sm"
                          onClick={() => openPasswordModal(seminar)}
                          icon="ri-download-line"
                        >
                          Download
                        </Button>
                      </div></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <i className="ri-folder-open-line text-4xl text-gray-400"></i>
                <p className="mt-4 text-gray-600 dark:text-gray-300">No seminars found.</p>
              </div>
            )}

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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handlePasswordSubmit(e as any);
                    }
                  }}
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

          
        </div>
      </div>
    </div>
  );
}
