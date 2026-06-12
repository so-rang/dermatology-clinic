export type VisualAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroVisual = {
  src: "/images/hero/hero-bg.png",
  alt: "엔리에 의원 로비 — 따뜻한 골든아워 라이트와 세럼톤 인테리어",
  width: 1536,
  height: 864,
} as const satisfies VisualAsset;

export const spaceVisuals = {
  lounge: {
    src: "/images/space/lounge.png",
    alt: "엔리에 의원 라운지 — 따뜻한 자연광 아래 세이지 톤 좌석과 오크 테이블",
    width: 1536,
    height: 1024,
  },
  consult: {
    src: "/images/space/consult.png",
    alt: "엔리에 의원 1:1 상담실 — 월넛 데스크와 사이드 윈도우 라이트",
    width: 1536,
    height: 1024,
  },
  treatment: {
    src: "/images/space/treatment.png",
    alt: "엔리에 의원 시술실 — 리넨 베드와 세이지 커튼의 자연광",
    width: 1152,
    height: 1536,
  },
  vip: {
    src: "/images/space/vip.png",
    alt: "엔리에 의원 VIP 프라이빗 스위트 — 베이지 트라버틴과 화이트 오키드",
    width: 1152,
    height: 1536,
  },
  corridor: {
    src: "/images/space/corridor.png",
    alt: "엔리에 의원 복도 — 아치 윈도우와 세라믹 조형물",
    width: 1536,
    height: 864,
  },
} as const satisfies Record<string, VisualAsset>;

export const equipmentVisuals = {
  visia: {
    src: "/images/equipment/visia.png",
    alt: "VISIA 7-mode 피부 진단 이미징 디바이스 매크로",
    width: 1024,
    height: 1024,
  },
  ulthera: {
    src: "/images/equipment/ulthera.png",
    alt: "울쎄라 HIFU 핸드피스 매크로",
    width: 1024,
    height: 1024,
  },
  thermage: {
    src: "/images/equipment/thermage.png",
    alt: "써마지 FLX 팁 카트리지 매크로",
    width: 1024,
    height: 1024,
  },
  rejuran: {
    src: "/images/equipment/rejuran.png",
    alt: "스킨부스터 시술 핸드피스 매크로 — 니들 끝의 한 방울",
    width: 1024,
    height: 1024,
  },
} as const satisfies Record<string, VisualAsset>;

export const abstractVisuals = {
  serum: {
    src: "/images/abstract/serum.png",
    alt: "세럼 매크로 — 테라코타 골든아워 라이트와 사파이어 그린 틴트",
    width: 1536,
    height: 864,
  },
  serumGlass: {
    src: "/images/abstract/serum-glass.png",
    alt: "유리 세럼 보틀 매크로 — 사이드 라이트와 부드러운 보케",
    width: 1024,
    height: 1024,
  },
  lightPattern: {
    src: "/images/abstract/light-pattern.png",
    alt: "프로스티드 글래스를 통과하는 골든아워 라이트 패턴",
    width: 1536,
    height: 864,
  },
} as const satisfies Record<string, VisualAsset>;

export const productVisuals = {
  ampoule: {
    src: "/images/product/ampoule.png",
    alt: "유리 앰플 매크로 — 골든 크림 톤의 세럼 한 방울",
    width: 1024,
    height: 1024,
  },
  syringe: {
    src: "/images/product/syringe.png",
    alt: "스킨부스터 시린지 매크로 — 크림 마블 위 한 방울",
    width: 1024,
    height: 1024,
  },
  dispenser: {
    src: "/images/product/dispenser.png",
    alt: "프로스티드 글래스 디스펜서와 올리브 잎 정물",
    width: 1024,
    height: 1024,
  },
  tools: {
    src: "/images/product/tools.png",
    alt: "정렬된 의료 미용 도구 플랫레이",
    width: 1024,
    height: 1024,
  },
} as const satisfies Record<string, VisualAsset>;

export const stillVisuals = {
  stones: {
    src: "/images/still/stones.png",
    alt: "트라버틴 위에 정렬된 매끄러운 강돌과 리넨",
    width: 1152,
    height: 864,
  },
  leaves: {
    src: "/images/still/leaves.png",
    alt: "도자기 화병의 올리브와 유칼립투스 가지",
    width: 1152,
    height: 864,
  },
} as const satisfies Record<string, VisualAsset>;

export const aiDisclaimer =
  "본 페이지의 일부 이미지는 AI(Higgsfield Soul Cinematic)로 제작되었습니다.";
