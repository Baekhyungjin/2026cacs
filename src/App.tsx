import {
  ArrowDownToLine,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Globe2,
  History,
  Landmark,
  Library,
  MapPin,
  UsersRound,
} from "lucide-react";
import {
  cscaCards,
  organization,
  resources,
  schedule,
  seminar,
  seminarHistory,
  usage,
} from "./data/seminar";

const cardIcons = [Library, UsersRound, History];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="CSCA 세미나 홈">
          <img className="brand-logo" src="images/csca-logo.png" alt="CSCA 로고" />
          <span>CSCA 2026</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#organization">조직</a>
          <a href="#history">역사</a>
          <a href="#resources">발제자료</a>
          <a href="#usage">활용방법</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-logo-card">
              <img src="images/csca-logo.png" alt="CSCA 공식 로고" />
              <span>Centre for the Study of Christianity in Asia</span>
            </div>
            <p className="meta">
              <CalendarDays size={18} aria-hidden="true" />
              {seminar.datePlace}
            </p>
            <h1>{seminar.title}</h1>
            <p className="theme">{seminar.theme}</p>
            <p className="hero-text">
              아시아 선교 현장을 학술적으로 진단하고, 적대적 환경 속에서
              복음의 증언과 평화의 실천을 모색하는 세미나 자료 허브입니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#resources">
                발제자료 보기
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a className="secondary-button" href={seminar.fullPdf} download>
                전체 PDF 다운로드
                <ArrowDownToLine size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-media" aria-label="세미나 대표 이미지">
            <img src="images/csca-hero.png" alt="" />
            <div className="document-stack" aria-hidden="true">
              <div className="doc-preview doc-preview-front">
                <span>2026 CSCA</span>
                <strong>핸드북</strong>
                <small>154 pages</small>
              </div>
              <div className="doc-preview doc-preview-back">
                <span>Mission</span>
                <strong>Research</strong>
                <small>Asia</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <span className="section-index">01</span>
            <div>
              <h2 id="about-title">CSCA 소개, 조직, 세미나 역사</h2>
              <p>{seminar.intro}</p>
            </div>
          </div>
          <div className="about-grid">
            {cscaCards.map((card, index) => {
              const Icon = cardIcons[index];
              return (
                <article className="about-card" key={card.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section organization" id="organization" aria-labelledby="organization-title">
          <div className="section-heading">
            <span className="section-index">02</span>
            <div>
              <h2 id="organization-title">CSCA 조직도</h2>
              <p>
                연구 방향을 맡는 원장단, 자문을 제공하는 고문단, 현장별 운영위원,
                제19회 세미나 준비 담당자를 계층형 조직도로 정리했습니다.
              </p>
            </div>
          </div>
          <div className="org-chart" aria-label="CSCA 조직도">
            <div className="org-level org-level-root">
              <article className="org-node org-node-primary">
                <span>원장단</span>
                <h3>CSCA 연구·운영 리더십</h3>
                <ul>
                  {organization.directors.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="org-branches" aria-hidden="true" />
            <div className="org-level org-level-groups">
              <article className="org-node">
                <span>고문</span>
                <h3>학문·목회 자문</h3>
                <ul>
                  {organization.advisors.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </article>
              <article className="org-node">
                <span>운영위원</span>
                <h3>아시아 현장 운영</h3>
                <ul>
                  {organization.committee.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </article>
              <article className="org-node">
                <span>제19회 준비</span>
                <h3>세미나 실행 담당</h3>
                <ul>
                  {organization.preparation.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section history" id="history" aria-labelledby="history-title">
          <div className="section-heading">
            <span className="section-index">03</span>
            <div>
              <h2 id="history-title">CSCA 세미나 역사 타임라인</h2>
              <p>
                2002년 방콕에서 시작된 CSCA 세미나는 아시아 여러 도시와 온라인을
                거치며 종교 연구, 상황화, 아세안 통합, 위기, 다문화, 적대적 환경의
                주제로 확장되어 왔습니다.
              </p>
            </div>
          </div>
          <div className="history-timeline">
            {seminarHistory.map((entry) => (
              <article className="history-item" key={`${entry.edition}-${entry.date}`}>
                <div className="history-period">
                  <span>{entry.year}</span>
                  <strong>{entry.edition}</strong>
                </div>
                <div className="history-body">
                  <h3>{entry.theme}</h3>
                  <p>{entry.place}</p>
                  <small>{entry.date}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section resources" id="resources" aria-labelledby="resources-title">
          <div className="section-heading compact">
            <span className="section-index">04</span>
            <div>
              <h2 id="resources-title">발제별 PDF 자료</h2>
              <p>원본 핸드북을 발제·부록·예배/시간표 단위로 나누었습니다.</p>
            </div>
            <a className="text-link" href={seminar.fullPdf} download>
              원본 전체 다운로드
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="resource-list">
            {resources.map((item) => (
              <article className="resource-row" key={item.id}>
                <div className="resource-icon" aria-hidden="true">
                  <FileText size={22} />
                </div>
                <div className="resource-main">
                  <div className="resource-meta">
                    <span>{item.label}</span>
                    <span>{item.range}</span>
                    <span>{item.speaker}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="keyword-row">
                    {item.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
                <div className="resource-actions">
                  <a className="view-button" href={item.file} target="_blank" rel="noreferrer">
                    보기
                    <Eye size={17} aria-hidden="true" />
                  </a>
                  <a className="download-button" href={item.file} download>
                    다운로드
                    <Download size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section usage" id="usage" aria-labelledby="usage-title">
          <div className="section-heading">
            <span className="section-index">05</span>
            <div>
              <h2 id="usage-title">활용방법</h2>
              <p>세미나 참석, 운영, 홍보, 이미지 활용을 한 페이지에서 정리합니다.</p>
            </div>
          </div>
          <div className="usage-grid">
            {usage.map((item) => (
              <article className="usage-card" key={item.title}>
                <BookOpen size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section schedule" id="schedule" aria-labelledby="schedule-title">
          <div className="section-heading compact">
            <span className="section-index">06</span>
            <div>
              <h2 id="schedule-title">참석자용 진행 정보</h2>
              <p>특강과 예배 순서는 공개 홍보보다 현장 참석자 안내 성격이 강해 하단 보조 정보로 배치했습니다.</p>
            </div>
          </div>
          <details className="schedule-disclosure">
            <summary>특강 및 예배 순서 보기</summary>
            <div className="schedule-panel">
              {schedule.map((item) => (
                <div className="schedule-row" key={`${item.type}-${item.title}`}>
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <p>{item.person}</p>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </details>
        </section>

        <section className="closing">
          <div>
            <Globe2 size={28} aria-hidden="true" />
            <h2>적대적 환경을 학문적으로 반추하고 현장에서 실천합니다.</h2>
          </div>
          <p>
            본 페이지는 CSCA 세미나의 소개, 발제자료, 예배 순서, 활용 안내를
            한곳에 모아 참석자와 외부 방문자가 같은 자료를 쉽게 찾도록 돕습니다.
          </p>
          <div className="closing-meta">
            <span>
              <Landmark size={17} aria-hidden="true" />
              Centre for the Study of Christianity in Asia
            </span>
            <span>
              <MapPin size={17} aria-hidden="true" />
              Bangkok, Thailand
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
