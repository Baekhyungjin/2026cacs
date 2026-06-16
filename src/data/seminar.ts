export type Resource = {
  id: string;
  label: string;
  title: string;
  speaker: string;
  range: string;
  file: string;
  summary: string;
  keywords: string[];
};

export const seminar = {
  title: "제19회 CSCA 세미나",
  theme: "적대적 환경속의 선교",
  datePlace: "2026년 6월 15일(월)-18일(목) · 태국 방콕",
  fullPdf: "pdfs/2026-CSCA-handbook-full.pdf",
  intro:
    "아시아 기독교 연구원(CSCA)은 아시아권의 종교, 문화, 정치, 사회 연구를 통해 선교 전략 수립에 기여하기 위해 2002년 태국 방콕에서 창립된 복음주의 선교연구 기관입니다.",
};

export const cscaCards = [
  {
    title: "CSCA 소개",
    body:
      "불교, 힌두교 등 동양 종교와 아시아인의 심성, 의식구조, 사회 변화를 연구하며 한인 선교의 Think Tank 역할을 감당합니다.",
  },
  {
    title: "CSCA 조직",
    body:
      "원장, 고문, 운영위원, 세미나 준비 담당자가 함께 연구와 현장 사역을 연결합니다. 제19회 세미나는 김영진 원장, 음광민 상임총무, 양덕훈 운영위원이 준비를 맡았습니다.",
  },
  {
    title: "세미나 역사",
    body:
      "2002년 태국 방콕 제1회 세미나를 시작으로 네팔, 호주, 싱가포르, 인도네시아, 라오스, 말레이시아, 한국 등을 거쳐 2026년 제19회 세미나로 이어졌습니다.",
  },
];

export const organization = {
  directors: [
    "초대 강대흥 선교사(KWMA 사무총장)",
    "2대 양덕훈 선교사(태국)",
    "3·4대 김영진 선교사(라오스)",
  ],
  advisors: [
    "문상철 교수(카리스교차문화학연구원 원장)",
    "이문장 목사(새음교회 담임)",
    "장훈태 교수(백석대학교 선교학과 은퇴교수)",
    "이상국 교수(연세대학교 문화인류학과)",
    "최형근 교수(서울신대 선교학)",
    "조흥국 교수(부산대 은퇴교수)",
  ],
  committee: [
    "김경중 선교사(말레이시아)",
    "김영진 선교사(라오스)",
    "맹갑균 선교사(미얀마)",
    "양덕훈 선교사(태국)",
    "오영철 선교사(태국)",
    "장완익 선교사(캄보디아)",
    "최재영 선교사(스리랑카)",
  ],
  preparation: [
    "김영진 선교사(원장)",
    "음광민 선교사(상임총무)",
    "양덕훈 선교사(운영위원)",
  ],
};

export const seminarHistory = [
  {
    edition: "제1회",
    year: "2002",
    date: "2002.06.10-06.12",
    place: "태국 방콕",
    theme: "종교 연구",
  },
  {
    edition: "제2회",
    year: "2002",
    date: "2002.12.02-12.07",
    place: "네팔 카투만두",
    theme: "종교 연구",
  },
  {
    edition: "제3회",
    year: "2003",
    date: "2003.11.24-11.28",
    place: "호주 시드니",
    theme: "WKMF와 협력, 다양한 주제",
  },
  {
    edition: "제4회",
    year: "2004",
    date: "2004.10.07-10.09",
    place: "태국 방콕",
    theme: "복음 전도",
  },
  {
    edition: "제5회",
    year: "2006",
    date: "2006.05.29-06.02",
    place: "싱가포르",
    theme: "각 선교지의 상황화",
  },
  {
    edition: "제6회",
    year: "2008",
    date: "2008.05.20-05.25",
    place: "인도네시아 스마랑",
    theme: "선교와 지도력",
  },
  {
    edition: "KGAM 학술모임",
    year: "2009",
    date: "2009.10",
    place: "태국 방콕",
    theme: "교회개척 세미나",
  },
  {
    edition: "제7회",
    year: "2010",
    date: "2010.11.07-11.11",
    place: "베트남 호치민",
    theme: "선교지 지도력 탐구",
  },
  {
    edition: "제8회",
    year: "2013",
    date: "2013.12.09-12.10",
    place: "태국 방콕",
    theme: "선교사 연구능력 향상을 위한 방안",
  },
  {
    edition: "제9회",
    year: "2014",
    date: "2014.06.23-06.26",
    place: "태국 치앙마이",
    theme: "아세안 통합과 아시아 선교 1",
  },
  {
    edition: "제10회",
    year: "2015",
    date: "2015.06.28-07.03",
    place: "라오스 위앙짠",
    theme: "아세안 통합과 아시아 선교 2",
  },
  {
    edition: "제11회",
    year: "2016",
    date: "2016.05.02-05.04",
    place: "태국 방콕",
    theme: "아세안 통합과 아시아 선교 3",
  },
  {
    edition: "제12회",
    year: "2017",
    date: "2017.05.01-05.04",
    place: "말레이시아 페낭",
    theme: "전환(Shift)",
  },
  {
    edition: "제13회",
    year: "2019",
    date: "2019.05.20-05.21",
    place: "태국 방콕",
    theme: "아시아 신질서와 선교적 대응",
  },
  {
    edition: "제14회",
    year: "2020",
    date: "2020.10.02",
    place: "온라인",
    theme: "아시아 신질서에 따른 선교적 책무",
  },
  {
    edition: "제15회",
    year: "2022",
    date: "2022.09.28-09.30",
    place: "태국 방콕",
    theme: "위기 시대의 선교",
  },
  {
    edition: "제16회",
    year: "2023",
    date: "2023.05.16-05.18",
    place: "라오스 비엔티엔",
    theme: "선교운동을 포함한 선교적 교회",
  },
  {
    edition: "제17회",
    year: "2024",
    date: "2024.05.20-05.23",
    place: "태국 치앙마이",
    theme: "다민족, 다문화가 주는 도전과 선교적 대응",
  },
  {
    edition: "제18회",
    year: "2025",
    date: "2025.05.19-05.21",
    place: "한국 수원",
    theme: "다문화 시대의 선교적 도전과 기회",
  },
  {
    edition: "제19회",
    year: "2026",
    date: "2026.06.15-06.18",
    place: "태국 방콕",
    theme: "적대적 환경속의 선교",
  },
];

export const resources: Resource[] = [
  {
    id: "paper-1",
    label: "발제 1",
    title: "적대적 환경 속의 선교, 민족간 갈등속에 있던 미얀마 교회의 변화",
    speaker: "정해란 선교사",
    range: "p.5-15",
    file: "pdfs/01-myanmar-church-change.pdf",
    summary:
      "2021년 쿠데타 이후 미얀마 교회가 내전과 청년 이탈의 위기 속에서도 연합과 지역교회 성장의 방향으로 변화하는 과정을 살핍니다.",
    keywords: ["미얀마", "쿠데타", "교회 연합"],
  },
  {
    id: "paper-2",
    label: "발제 2",
    title: "적대적 환경속에 처해 있는 국내 이주민선교의 갈등 극복을 위한 제안",
    speaker: "장인식 선교사",
    range: "p.16-26",
    file: "pdfs/02-migrant-mission-korea.pdf",
    summary:
      "한국 내 이주민선교가 마주한 문화 충돌, 사회적 편견, 디아스포라 내부 갈등을 분석하고 실천적 극복 방향을 제시합니다.",
    keywords: ["이주민", "디아스포라", "갈등 극복"],
  },
  {
    id: "paper-3",
    label: "발제 3",
    title: "소수 카렌족 교회의 선교적 자기이해의 회복에 관한 탈식민주의 관점의 고찰",
    speaker: "오영철 선교사",
    range: "p.27-43",
    file: "pdfs/03-karen-missional-identity.pdf",
    summary:
      "카렌 교회가 수혜 공동체를 넘어 선교 주체로 자신을 재정의하는 과정을 탈식민주의 관점에서 분석합니다.",
    keywords: ["카렌족", "탈식민주의", "선교 주체"],
  },
  {
    id: "paper-4",
    label: "발제 4",
    title: "제국의 유산에서 성령의 환대로: 탈식민주의 이론을 통한 현대 선교학의 패러다임 전환 연구",
    speaker: "서경란 교수",
    range: "p.44-53",
    file: "pdfs/04-postcolonial-missiology.pdf",
    summary:
      "탈식민주의를 선교의 부정이 아니라 복음에서 제국주의적 포장을 벗겨내는 신학적 갱신의 도구로 해석합니다.",
    keywords: ["탈식민주의", "환대", "패러다임"],
  },
  {
    id: "paper-5",
    label: "발제 5",
    title: "적대적 선교 환경에서의 사역",
    speaker: "김필립 선교사",
    range: "p.54-69",
    file: "pdfs/05-hostile-field-ministry.pdf",
    summary:
      "라오스의 역사적 기억, 정치적 제약, 종교 규제 속에서 장기 거주와 관계 신뢰, 신실한 삶의 증거를 강조합니다.",
    keywords: ["라오스", "관계", "신실함"],
  },
  {
    id: "paper-6",
    label: "발제 6",
    title: "창의적 접근 지역 내 전문직(교사) 정체성을 통한 자생적 선교 모델 연구",
    speaker: "이은영 선교사",
    range: "p.70-79",
    file: "pdfs/06-professional-teacher-model.pdf",
    summary:
      "국제학교 교사 등 전문직 정체성을 통해 합법적 체류, 부분 자립, 일터 신학을 결합하는 차세대 선교 모델을 제안합니다.",
    keywords: ["전문직", "교사", "부분 자립"],
  },
  {
    id: "paper-7",
    label: "발제 7",
    title: "선택하지 않은 약함 (When Weakness Is Not Chosen)",
    speaker: "최재영 선교사",
    range: "p.80-94",
    file: "pdfs/07-weakness-kenotic-missiology.pdf",
    summary:
      "남아시아 교회의 강요된 주변성을 낭만화하지 않으면서 케노시스와 십자가의 관점으로 선교학적 의미를 재해석합니다.",
    keywords: ["남아시아", "약함", "케노시스"],
  },
  {
    id: "paper-8",
    label: "발제 8",
    title: "적대적 환경에서의 캄보디아 선교와 비우호적 환경에서의 GMS 선교",
    speaker: "장완익 선교사",
    range: "p.95-101",
    file: "pdfs/08-cambodia-gms-mission.pdf",
    summary:
      "캄보디아의 불교 문화와 GMS 선교 구조를 배경으로 비우호적 환경에서 동역과 위기 인식의 필요성을 다룹니다.",
    keywords: ["캄보디아", "GMS", "동역"],
  },
  {
    id: "paper-9",
    label: "발제 9",
    title: "필리핀 민다나오 모슬렘과 기독교의 종교적 갈등 구조 상황에서 선교적 접근에 관한 연구",
    speaker: "신기대 선교사",
    range: "p.102-114",
    file: "pdfs/09-mindanao-reconciliation.pdf",
    summary:
      "민다나오 갈등을 식민 역사, 이주 정책, 정치 정체성의 구조 속에서 분석하고 화해 중심 선교 접근을 모색합니다.",
    keywords: ["민다나오", "모슬렘", "화해"],
  },
  {
    id: "paper-10",
    label: "발제 10",
    title: "위협적 환경을 극복하는 평안 선교",
    speaker: "양덕훈 선교사",
    range: "p.115-128",
    file: "pdfs/10-missio-pacis.pdf",
    summary:
      "선과 악, 벗과 적을 가르는 이분법적 심리를 성찰하며 선교를 평안과 화해의 사명으로 재정렬합니다.",
    keywords: ["평안 선교", "심리", "화해"],
  },
  {
    id: "appendix",
    label: "부록",
    title: "적대적 선교 환경 속에서 예수의 광야 시험 다시 읽기",
    speaker: "이승혁 목사",
    range: "p.129-144",
    file: "pdfs/11-wilderness-temptation.pdf",
    summary:
      "광야 시험을 통해 적대적 환경이 촉발하는 정체성, 예배, 충성의 내적 유혹을 영성신학적으로 재고합니다.",
    keywords: ["광야 시험", "영성신학", "분별"],
  },
  {
    id: "schedule",
    label: "특강·예배",
    title: "특강, 예배, 발제 및 예배 순서 담당자와 시간표",
    speaker: "CSCA",
    range: "p.145-154",
    file: "pdfs/12-worship-schedule.pdf",
    summary:
      "특강, 개회예배, 경건회, 폐회예배, 발제 사회·기도·발제자 정보를 한 번에 확인할 수 있습니다.",
    keywords: ["특강", "예배", "시간표"],
  },
];

export const schedule = [
  { type: "특강", title: "바울의 아웃포커싱 미션", person: "정용비 목사", text: "로마서 12:1-2" },
  { type: "개회예배", title: "에바브로디도와 그때 그 도마뱀", person: "정용비 목사", text: "빌립보서 2:25-30" },
  { type: "경건회 1", title: "판단에서 덮음으로", person: "이격호 목사", text: "베드로전서 5:7-11" },
  { type: "경건회 2", title: "거꾸로 뒤집어진 나라", person: "서경란 교수", text: "누가복음 1:46-55" },
  { type: "폐회예배", title: "역사속에 죽어가는 아담", person: "김용섭 선교사", text: "사사기 12:1-7" },
];

export const usage = [
  {
    title: "참석자",
    body: "관심 발제를 미리 내려받고 핵심 요약과 페이지 범위를 확인해 세미나 전 예습 자료로 활용합니다.",
  },
  {
    title: "운영진",
    body: "발제별 PDF 링크, 발표 순서, 예배 담당자 정보를 공유 링크 하나로 안내합니다.",
  },
  {
    title: "외부 홍보",
    body: "CSCA 소개와 세미나 주제를 상단에서 바로 확인할 수 있어 초청·홍보용 링크로 사용할 수 있습니다.",
  },
  {
    title: "이미지 자료",
    body: "대표 이미지는 웹·공지 첫 화면에, 문서형 미리보기는 PDF 자료집과 발제 구분을 설명할 때 사용합니다.",
  },
];
