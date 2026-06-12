export type FAQ = {
  id: string;
  category: "diagnosis" | "regeneration" | "restoration" | "maintenance" | "general";
  question: string;
  answer: string;
};

export const faqsAll: readonly FAQ[] = [
  {
    id: "rejuran-hb-vs-healer",
    category: "regeneration",
    question: "리쥬란 HB와 리쥬란 힐러는 어떻게 다른가요?",
    answer:
      "리쥬란 힐러는 PN(폴리뉴클레오타이드) 단일 성분으로 피부 재생과 장벽 회복에 집중합니다. 리쥬란 HB는 PN에 히알루론산을 결합해 보습과 볼륨감을 동시에 부여합니다. 어떤 제품이 적합한지는 피부 상태와 목표에 따라 다르며, 전문의 상담 후 결정하시는 것을 권장드립니다. 개인차가 있을 수 있습니다.",
  },
  {
    id: "ulthera-vs-thermage",
    category: "restoration",
    question: "울쎄라와 써마지, 어떤 시술이 저에게 맞나요?",
    answer:
      "울쎄라는 고강도 집속 초음파(HIFU)로 SMAS층까지 도달해 깊은 리프팅 효과를 줍니다. 써마지 FLX는 고주파(RF)로 진피 전반의 콜라겐을 자극해 탄력을 회복합니다. 처짐이 주된 고민이면 울쎄라, 결과 탄력이 주된 고민이면 써마지가 우선 고려됩니다. 두 시술을 함께 설계하는 경우도 있으며 의료진과의 상담이 필요합니다.",
  },
  {
    id: "no-downtime",
    category: "maintenance",
    question: "다운타임이 짧은 시술만 받고 싶은데 추천이 있나요?",
    answer:
      "스킨보톡스, 레이저토닝, 물광주사, 가벼운 스킨부스터는 일반적으로 시술 직후 일상생활이 가능합니다. 개인 피부 반응에 따라 미세한 홍조가 수 시간 남을 수 있습니다. 처음 방문 시 의료진이 다운타임을 우선 고려한 단계별 플랜을 제안드립니다.",
  },
  {
    id: "pricing",
    category: "general",
    question: "가격은 어떻게 책정되나요?",
    answer:
      "모든 시술 가격은 진료 카테고리별 라인아이템으로 공개됩니다. 패키지 할인은 운영하지 않으며, 초진 상담은 무료입니다. 자세한 비용은 진단 결과에 따라 의료진이 1:1로 안내드립니다.",
  },
  {
    id: "doctor-direct",
    category: "general",
    question: "의료진이 직접 시술하나요?",
    answer:
      "정단아 의원의 모든 의료 시술은 전문의 3인이 직접 진행합니다. 상담실장이 단독으로 시술 결정을 내리지 않으며, 모든 처방은 의료진의 진단을 거칩니다.",
  },
  {
    id: "first-visit",
    category: "diagnosis",
    question: "처음 방문 시 어떤 절차로 진행되나요?",
    answer:
      "초진은 약 30분 동안 진행됩니다. VISIA 7-mode 피부 분석, 의료진과의 1:1 상담, 4단계 Atelier 프로토콜 기반 처방 제안 순으로 안내됩니다. 첫 방문일 당일 시술을 강요하지 않습니다.",
  },
  {
    id: "30s-anti-aging",
    category: "regeneration",
    question: "30대 안티에이징은 무엇부터 시작해야 하나요?",
    answer:
      "30대는 진피층의 콜라겐 감소가 시작되는 시기로, 재생 라인의 리쥬란이나 스킨부스터를 통한 결 관리가 권장됩니다. 표재성 주름이 보이기 시작했다면 스킨보톡스가 도움이 될 수 있습니다. 정확한 처방은 진단 후 결정됩니다.",
  },
  {
    id: "ulthera-duration",
    category: "restoration",
    question: "울쎄라 효과는 얼마나 지속되나요?",
    answer:
      "울쎄라는 시술 직후부터 약 3–6개월에 걸쳐 콜라겐이 재구축되어, 일반적으로 6–12개월의 효과가 보고됩니다. 개인의 피부 상태, 노화 속도, 생활 습관에 따라 차이가 있을 수 있습니다.",
  },
  {
    id: "thermage-side-effects",
    category: "restoration",
    question: "써마지 시술 후 부작용이 있나요?",
    answer:
      "시술 직후 미세한 홍조나 부기가 1–2일간 나타날 수 있으며 대부분 자연 회복됩니다. 드물게 일시적인 감각 변화가 보고된 사례가 있으며, 시술 전 의료진이 자세히 안내드립니다.",
  },
  {
    id: "skin-botox",
    category: "maintenance",
    question: "스킨보톡스는 일반 보톡스와 무엇이 다른가요?",
    answer:
      "스킨보톡스는 보툴리눔 톡신을 매우 묽게 희석하여 피지선·땀샘이 분포한 얕은 진피층에 다수의 미세 주입을 합니다. 일반 보톡스가 근육을 이완하는 것과 달리, 스킨보톡스는 피지·모공·결의 균형을 조절하는 데 초점이 있습니다.",
  },
  {
    id: "collagen-booster",
    category: "restoration",
    question: "콜라겐 부스터(엘란세·쥬베룩)는 효과가 얼마나 지속되나요?",
    answer:
      "엘란세는 약 18–24개월, 쥬베룩은 약 12개월 지속이 보고됩니다. 두 제품 모두 시술 직후 효과보다 시간을 두고 콜라겐이 재생되며 자연스럽게 채워지는 방식이라 단계적인 변화를 보입니다.",
  },
  {
    id: "exosome",
    category: "regeneration",
    question: "엑소좀은 어떤 원리인가요?",
    answer:
      "엑소좀은 세포가 분비하는 나노 크기의 신호 전달 입자로, 진피층에 도달해 섬유아세포의 활성과 콜라겐 합성을 자극합니다. 피부 본연의 회복 메커니즘을 깨우는 방식이며 다운타임이 짧은 편입니다.",
  },
  {
    id: "parking",
    category: "general",
    question: "주차는 가능한가요?",
    answer:
      "건물 내 발렛 주차가 가능하며, 진료 시 1시간 무료 등록을 도와드립니다. 청담역 8번 출구에서 도보 3분 거리로 대중교통 이용도 편리합니다.",
  },
  {
    id: "night-hours",
    category: "general",
    question: "야간진료가 가능한가요?",
    answer:
      "화요일과 목요일은 오후 9시까지 야간진료를 운영합니다. 직장인 분들을 위해 사전 예약 우선제로 운영되며, 카카오톡 채널 또는 전화로 예약 가능합니다.",
  },
] as const;

export const faqsPreview = faqsAll.slice(0, 5);

export const faqCategories = [
  { id: "general", label: "공통" },
  { id: "diagnosis", label: "진단" },
  { id: "regeneration", label: "재생" },
  { id: "restoration", label: "회복" },
  { id: "maintenance", label: "유지" },
] as const;
