import Navigation from '../../components/layout/Navigation';
import Card from '../../components/base/Card';

const publications = {
  sci: [
    {
      title: "Cooperative Distributed GPU Power Capping for Deep Learning Clusters",
      authors: "Dong-Ki Kang+, Yun-Gi Ha, Limei Peng, and Chan-Hyun Youn*",
      venue: "IEEE Transactions on Industrial Electronics, vol.69 no.7 pp.7244-7254, Jul 2022",
      link: "https://ieeexplore.ieee.org/document/9484692",
      issn: "Print ISSN: 0278-0046, Electronic ISSN: 1557-9948"
    },
    {
      title: "Cost Efficient GPU Cluster Management for Training and Inference of Deep Learning",
      authors: "Dong-Ki Kang+, Ki-Beom Lee, and Young-Chon Kim*",
      venue: "MDPI Energies, 15(2) pp.474, Jan 2022",
      link: "https://www.mdpi.com/1996-1073/15/2/474",
      issn: "ISSN: 1996-1073"
    },
    {
      title: "Deep Reinforcement Learning Based Optimal Route and Charging Station Selection",
      authors: "Ki-Beom Lee+, Mohamed A.Ahmed, Dong-Ki Kang, and Young-Chon Kim*",
      venue: "MDPI Energies, 13(23) pp.6255, Nov 2020",
      link: "https://www.mdpi.com/1996-1073/13/23/6255",
      issn: "ISSN: 1996-1073"
    },
    {
      title: "BOA: batch orchestration algorithm for straggler mitigation of distributed DL training in heterogeneous GPU cluster",
      authors: "Eun-Ju Yang+, Dong-Ki Kang, and Chan-Hyun Youn*",
      venue: "Elsevier Journal of Supercomputing, vol.76, no.1, pp.47-67, Jan 2020",
    },
    {
      title: "Real-Time Control for Power Cost Efficient Deep Learning Processing With Renewable Generation",
      authors: "Dong-Ki Kang+, and Chan-Hyun Youn*",
      venue: "IEEE Access, vol.7, pp.114909-114922, Aug 2019",
    },
    {
      title: "Deep Learning-Based Sustainable Data Center Energy Cost Minimization With Temporal MACRO/MICRO Scale Management",
      authors: "Dong-Ki Kang+, Eun-Ju Yang, and Chan-Hyun Youn*",
      venue: "IEEE Access, vol.7, pp.5477-5491, Dec 2018",
    },
    {
      title: "A science gateway cloud with cost-adaptive VM management for computational science and applications",
      authors: "Seong-Hwan Kim+, Dong-Ki Kang, Woo-Joong Kim, Chen Min, and Chan-Hyun Youn*",
      venue: "IEEE Systems Journal, vol.11, no.1, pp173-185, Mar 2017",
    },
    {
      title: "Energy and QoS aware resource allocation for heterogeneous sustainable cloud datacenters",
      authors: "Peng Yuyang+, Dong-Ki Kang, Al-Hazemi Fawaz, and Chan-Hyun Youn*",
      venue: "Elsevier Optical Switching and Networking, vol.23, pp.225-240, Jan 2017",
    },
    {
      title: "Adaptive VM Management with Two Phase Power Consumption Cost Models in Cloud Datacenter",
      authors: "Dong-Ki Kang+, Al-Hazemi Fawaz, Seong-Hwan Kim, Chen Min, Peng Limei, and Chan-Hyun Youn*",
      venue: "Springer Mobile Networks and Applications, vol.21, no.5, pp.793-805, Oct 2016",
    },
    {
      title: "LPC: A local power controller using the frequency scheduling approach for virtualized servers",
      authors: "Fawaz Al-Hazemi+, Dong-Ki Kang, Seong-Hwan Kim, Peng Yuyang, Newaz SH Shah and Chan-Hyun Youn*",
      venue: "Springer Cluster Computing, vol.19, no.2 pp.663-678, Jun 2016",
    },
    {
      title: "Cost adaptive VM management for scientific workflow application in mobile cloud",
      authors: "Woo-Joong Kim+, Dong-Ki Kang, Seong-Hwan Kim and Chan-Hyun Youn*",
      venue: "Springer Mobile Networks and Applications, vol.20, no.3 pp.328-336, Jun 2015",
    },
  ],
  international: [
    {
      title: "Simulated Annealing for Timeliness and Energy aware Deep Learning Job Assignment",
      authors: "Dong-Ki Kang+ and Chan-Hyun Youn*",
      venue: "KIPS ICTC, Sep 2019",
    },
    {
      title: "Workload-aware resource management for energy efficient heterogeneous docker containers",
      authors: "Dong-Ki Kang+, Gyu-Beom Choi, Seong-Hwan Kim, Il-Sun Hwang, and Chan-Hyun Youn*",
      venue: "IEEE Region 10 Conference (TENCON), pp.2428-2431, Nov 2016",
    },
    {
      title: "Dynamic virtual machine consolidation for energy efficient cloud data centers",
      authors: "Dong-Ki Kang+, Al-hazemi Fawaz, Seong-Hwan Kim, and Chan-Hyun Youn*",
      venue: "EAI CloudComp 2015, pp.50-80, Oct 2015",
    },
    {
      title: "Cost adaptive workflow scheduling in cloud computing",
      authors: "Dong-Ki Kang+, Seong-Hwan Kim, Chen Min, and Chan-Hyun Youn*",
      venue: "ACM Proceedings of the 8th International conference on ubiquitous information management and communication (ICUIMC), Jan 2014",
    },
    {
      title: "Enhancing a strategy of virtualized resource assignment in adaptive resource cloud framework",
      authors: "Dong-Ki Kang+, Seong-Hwan Kim, Ren Ye, Byung-Sang Kim, Woo-Joong Kim, Yu-Sik Kim, Chang-Sung Jeong, and Chan-Hyun Youn*",
      venue: "ACM Proceedings of the 7th International conference on ubiquitous information management and communication (ICUIMC), Jan 2013",
    },
    {
      title: "Adaptive management framework for scientific workflow applications",
      authors: "Young-Joo Han+, Dong-Ki Kang and Chan-Hyun Youn*",
      venue: "ACM Proceedings of the 6th International conference on ubiquitous information management and communication (ICUIMC), Feb 2012",
    },
    {
      title: "Wake transition decision algorithm for energy saving in OBS network with LPI",
      authors: "Dong-Ki Kang+, Yang Won-Hyuk, Jung Jin-Hyo and Young-chon Kim*",
      venue: "IEEE International Conference on Computing, Networking and Communications (ICNC), pp.527-531, Jan 2012",
    },
    {
      title: "An Adaptive Resource Provisioning Scheme for Distributed Bio-workflow Broker with Stream-Based NGS in Cloud",
      authors: "Byung-sang Kim+ , Chan-Hyun Youn, Eun-bo Shim and Ho-young Kang, Dong-Ki Kang and Jin-mi Kim",
      venue: "KIPS 6th International Conference on Ubiquitous Information Technologies and Applications (CUTE), Dec 2011",
    },
    {
      title: "Dynamic Time based Burst Assemble scheme to reduce energy consumption in OBS network with Low-Power Idle",
      authors: "Dong-Ki Kang+, Yang Won-Hyuk, Jae-Young Lee and Young-chon Kim*",
      venue: "IEEE 16th Asia-Pacific Conference on Communications (APCC), pp.183-187, Oct 2010",
    },
    {
      title: "A simulation study of neighborhood discovery algorithm in free space optical sensor networks",
      authors: "Rong Xie+, Li-Mei Peng, Wan Tang, Fei Tong, Dong-Ki Kang, Won-Hyuk Yang and Young-Chon Kim*",
      venue: "KICS 2010 Second International Conference on Ubiquitous and Future Networks (ICUFN), pp87-91, Jun 2010",
    },
    {
      title: "Impact on burst size in OBS network with adaptive link rate",
      authors: "Jae-Young Lee+, Won-Hyuk Yang, Dong-Ki Kang, Fei Tong, Rong Xie and Young-Chon Kim*",
      venue: "KIISE Digest of the 9th International Conference on Optical Internet (COIN), Jul 2010",
    },
    {
      title: "Impact of traffic patterns and burst assembly on energy consumption in OBS networks",
      authors: "Dong-Ki Kang+, Yang Won-Hyuk, Xie Rong and Young-chon Kim*",
      venue: "12th International Conference on Computer Modelling and Simulation (UKSIM), pp.609-614, Mar 2010",
    },
    {
      title: "Performance analysis of energy savings according to traffic patterns in ethernet with rate adaptation",
      authors: "Won-Hyuk Yang+, Dong-ki Kang, Fei Tong and Young-Chon Kim*",
      venue: "12th International Conference on Computer Modelling and Simulation (UKSIM), pp.619-624, Mar 2010",
    },
  ],
  domesticJournals: [
    {
      title: "가격 효율적인 클라우드 가상 자원 중개 기법에 대한 연구",
      authors: "Dong-Ki Kang+, Seong-Hwan Kim, and Chan-Hyun Youn*",
      venue: "정보처리학회논문지, 컴퓨터 및 통신 시스템, vol.3, no.7, pp219-230, Jul 2014",
    },
    {
      title: "클라우드 자원 브로커에서 확장성 있는 가상 머신 할당 기법을 이용한 비용 적응형 작업 스케쥴링 알고리즘",
      authors: "Ren Ye+, Seong-Hwan Kim, Dong-Ki Kang, Byung-Sang Kim, and Chan-Hyun Youn*",
      venue: "정보처리학회논문지, 소프트웨어 및 데이터공학, vol.1, no.3, pp137-148, Nov 2012",
    },
    {
      title: "저전력 대기를 사용하는 OBS 망의 에너지 절감을 위한 상태 천이 결정 알고리즘",
      authors: "Dong-Ki Kang+, Won-Hyuk Yang, Gi-Beom Lee, and Young-Chon Kim*",
      venue: "한국통신학회논문지, vol.37B, no.5, pp317-326, May 2012",
    },
    {
      title: "수면 모드를 사용하는 OBS 망에서 트래픽 패턴 및 버스트 어셈블이 에너지 절감과 지연시간에 미치는 영향 분석",
      authors: "Dong-Ki Kang+, Won-Hyuk Yang, Jae-Young Lee, and Young-Chon Kim*",
      venue: "한국통신학회논문지, vol.36, no.2, pp111-119, Feb 2011",
    },
  ],
  domesticConference: [
    {
      title: "클라우드 환경에서의 적응적 예약형 가상 자원 관리 기법",
      authors: "강동기, 김성환, 하윤기, 윤찬현",
      venue: "제40회 한국정보처리학회 추계학술대회, 2013.11.",
    },
    {
      title: "클라우드 환경에서의 비용 절감을 위한 휴리스틱 기반의 워크플로우 스케쥴링 기법",
      authors: "강동기, 김성환, 김대순, 윤찬현",
      venue: "제40회 한국정보처리학회 추계학술대회, 2013.11.",
    },
    {
      title: "지리적 특성을 고려한 클라우드 컴퓨팅 서비스 관리 기법 연구",
      authors: "강동기, 김성환, 김우중, 하윤기, 윤찬현",
      venue: "제40회 한국정보처리학회 추계학술대회, 2013.11.",
    },
    {
      title: "클라우드 컴퓨팅을 위한 적응적 가상 자원 인스턴스 할당 기법",
      authors: "강동기, 김성환, 허재원, 윤찬현",
      venue: "제39회 한국정보처리학회 춘계학술대회, 2013.05.",
    },
    {
      title: "클라우드 컴퓨팅을 위한 예약 기반 가상 자원 관리 기법",
      authors: "강동기, 김성환, 윤찬현",
      venue: "제39회 한국정보처리학회 춘계학술대회, 2013.05.",
    },
    {
      title: "이종 클라우드 플랫폼 연동을 위한 클라우드 브로커 구조",
      authors: "강동기, 이용규, 김대순, 윤찬현",
      venue: "제38회 한국정보처리학회 추계학술대회, 2012.11.",
    },
    {
      title: "이종의 클라우드 자원과 연동하는 스마트 홈 환경에서의 효율적인 콘텐츠 관리 기법",
      authors: "강동기, 이용규, 김대순, 윤찬현",
      venue: "제38회 한국정보처리학회 추계학술대회, 2012.11.",
    },
    {
      title: "멀티 클라우드 환경에서 효율적인 자원 관리를 위한 모니터링 기법",
      authors: "강동기, 김병상, 김성환, 윤찬현",
      venue: "제25회 한국인터넷정보학회 하계학술대회, 2012.06.",
    },
    {
      title: "워크플로우 기반 스마트 홈 서비스 개발 시스템",
      authors: "강동기, 김성환, 윤찬현",
      venue: "제25회 한국인터넷정보학회 하계학술대회, 2012.06.",
    },
    {
      title: "광 버스트 스위칭 네트워크에서의 에너지 절감을 위한 상태천이결정 분석 모델",
      authors: "강동기, 윤찬현, 김영천",
      venue: "제37회 한국정보처리학회 춘계학술대회, 2012.04.",
    },
    {
      title: "협업 클라우드 환경에서의 요청 패턴 기반 자원 공급 기법",
      authors: "강동기, 김병상, 윤찬현",
      venue: "제37회 한국정보처리학회 춘계학술대회, 2012.04.",
    },
    {
      title: "OBS 망의 에너지 소비 감소를 위한 통제 기반 동적 버스트 어셈블 알고리즘",
      authors: "강동기, 김영천, 윤찬현",
      venue: "제36회 한국정보처리학회 추계학술대회, 2011.11.",
    },
  ],
  patents: [
    {
      title: "클라우드 게이트웨이의 콘텐츠 관리 장치 및 방법 APPARATUS AND METHOD FOR MANAGING CONTENTS IN A CLOUD GATEWAY",
      venue: "2018/12/12, Patent no.10-1930263-0000",
    },
    {
      title: "컨텐츠 공유 시스템에서 소스 기기를 결정하기 위한 장치 및 방법 APPARATUS AND METHOD FOR DETERMINING SOURCE DEVICE IN CONTENTS SHARING SYSTEM",
      venue: "2018/10/29, Patent no.10-1914635-0000",
    },
    {
      title: "Apparatus and method for determining source device in contents sharing system",
      venue: "US, 2017/4/4, Patent no.9614783, Application no.13838549",
    },
    {
      title: "컴퓨팅 워크플로우에서 작업 분할 방식을 이용한 가상머신 스케줄링 방법 METHOD FOR SCHEDULING WORKFLOW TO VIRTUAL MACHINES BASED ON WORKFLOW TASK FRAGMENTATION SCHEME",
      venue: "2016/07/21, Patent no.10-1643251-0000",
    },
    {
      title: "Apparatus and method for managing content for cloud computing",
      venue: "US, 2016/2/23, Patent no.9270753, Application no.13797105",
    },
  ],
  awards: [
    {
      title: "Dynamic virtual machine consolidation for energy efficient cloud data centers",
      authors: "Dong-Ki Kang+, Al-hazemi Fawaz, Seong-Hwan Kim and Chan-Hyun Youn*",
      venue: "Best Student Paper Award, EAI CloudComp 2015, pp.50-80, Oct 2015",
    },
    {
      title: "An Adaptive Resource Provisioning Scheme for Distributed Bio-workflow Broker with Stream-Based NGS in Cloud",
      authors: "Byung-Sang Kim+, Chan-Hyun Youn, Eun-Bo Shim and Ho-Young Kang, Dong-Ki Kang and Jin-Mi Kim",
      venue: "Best Paper Award, 6th International Conference on Ubiquitous Information Technologies and Applications (CUTE), Dec 2011",
    },
    {
      title: "Request Pattern based Resource Provisioning Method in Cloud Collaboration Environment",
      authors: "Dong-Ki Kang+, Byung-Sang Kim and Chan-Hyun Youn*",
      venue: "Excellent Paper Award, Korea Informations Processing Society (KIPS) Conference, Spring, Apr 2012",
    },
    {
      title: "KAIST 전기및전자공학과 박사과정 연차 우등상 (2014)",
    },
    {
      title: "KAIST 전기및전자공학과 박사과정 연차 우등상 (2013)",
    },
    {
      title: "KAIST 전기및전자공학과 박사과정 연차 우등상 (2012)",
    },
  ]
};

type PublicationCardProps = {
  title: string;
  authors?: string;
  venue?: string;
  link?: string;
  issn?: string;
  index: number;
  total: number;
};

const PublicationCard = ({ title, authors, venue, link, issn, index, total }: PublicationCardProps) => (
  <Card
    hover
    className="group transition-all duration-300 opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {total - index}. {title}
      </h3>
      {authors && <p className="text-gray-700 dark:text-gray-300">{authors}</p>}
      {venue && <p className="text-gray-600 dark:text-gray-400 italic">{venue}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          (link)
        </a>
      )}
      {issn && <p className="text-sm text-gray-500 dark:text-gray-500">{issn}</p>}
    </div>
  </Card>
);

export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      <div className="w-full px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Publications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recent research contributions and academic publications
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SCI Journals</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">(+: first author, *: corresponding author)</p>
              <div className="space-y-6">
                {publications.sci.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.sci.length} key={index} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">International Conference</h2>
              <div className="space-y-6">
                {publications.international.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.international.length} key={index} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Domestic Journals</h2>
              <div className="space-y-6">
                {publications.domesticJournals.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.domesticJournals.length} key={index} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Domestic Conference</h2>
              <div className="space-y-6">
                {publications.domesticConference.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.domesticConference.length} key={index} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Patents</h2>
              <div className="space-y-6">
                {publications.patents.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.patents.length} key={index} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Awards</h2>
              <div className="space-y-6">
                {publications.awards.map((pub, index) => (
                  <PublicationCard {...pub} index={index} total={publications.awards.length} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}