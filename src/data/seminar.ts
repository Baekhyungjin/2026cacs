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

export const seminarHistory = [
  {
    period: "2002-2008",
    title: "창립과 기초 연구",
    body:
      "태국 방콕에서 제1회 세미나가 시작되었고 네팔, 호주, 싱가포르, 인도네시아로 이어지며 종교 연구, 복음 전도, 상황화, 지도력 탐구가 주요 흐름을 이루었습니다.",
    items: [
      "제1회 태국 방콕: 종교 연구",
      "제2회 네팔 카투만두: 종교 연구",
      "제5회 싱가포르: 각 선교지의 상황화",
      "제6회 인도네시아 스마랑: 선교와 지도력",
    ],
  },
  {
    period: "2010-2017",
    title: "아세안과 선교 전환",
    body:
      "베트남, 태국, 라오스, 말레이시아 세미나를 거치며 아세안 통합과 아시아 선교, 선교지 지도력, 전환의 문제가 본격적으로 다루어졌습니다.",
    items: [
      "제7회 베트남 호치민: 선교지 지도력 탐구",
      "제9-11회: 아세안 통합과 아시아 선교",
      "제12회 말레이시아 페낭: 전환(Shift)",
    ],
  },
  {
    period: "2019-2025",
    title: "위기와 다문화 시대의 응답",
    body:
      "아시아 신질서, 위기 시대, 선교적 교회, 다민족·다문화 과제가 집중적으로 논의되며 현장 변화에 대한 선교적 대응이 강화되었습니다.",
    items: [
      "제13-14회: 아시아 신질서와 선교적 책무",
      "제15회 태국 방콕: 위기 시대의 선교",
      "제17-18회: 다민족·다문화 시대의 선교적 대응",
    ],
  },
  {
    period: "2026",
    title: "적대적 환경속의 선교",
    body:
      "제19회 세미나는 식민주의의 유산, 종교 민족주의, 정치적 폭력, 디아스포라, 전문직 정체성, 약함의 신학, 평안 선교를 하나의 주제로 묶어 성찰합니다.",
    items: [
      "장소: 태국 방콕",
      "일정: 2026년 6월 15일-18일",
      "주제: 적대적 환경속의 선교",
    ],
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
