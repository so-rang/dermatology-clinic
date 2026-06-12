export type VisualAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const spaceVisuals = {
  lounge: {
    src: "/images/space/lounge.png",
    alt: "앤리에 의원 라운지 — 따뜻한 자연광 아래 세이지 톤 좌석과 오크 테이블",
    width: 1536,
    height: 1024,
  },
  consult: {
    src: "/images/space/consult.png",
    alt: "앤리에 의원 1:1 상담실 — 월넛 데스크와 사이드 윈도우 라이트",
    width: 1536,
    height: 1024,
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
} as const satisfies Record<string, VisualAsset>;

export const aiDisclaimer =
  "본 페이지의 일부 이미지는 AI(GPT Image)로 제작되었습니다.";
