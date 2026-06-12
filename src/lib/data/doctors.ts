export type Doctor = {
  id: string;
  nameKo: string;
  nameEn: string;
  title: string;
  image: string;
  credentials: readonly string[];
};

export const doctors: readonly Doctor[] = [
  {
    id: "jung-yeon-woo",
    nameKo: "정연우",
    nameEn: "Jung Yeon-Woo, M.D.",
    title: "대표원장",
    image: "/images/doctors/jung.png",
    credentials: [
      "서울대학교 의과대학 졸업",
      "대한피부과학회 정회원",
      "前 서울대학교병원 피부과 전공의",
      "미국피부과학회(AAD) Active Member",
      "대한피부미용외과학회 학술이사",
    ],
  },
  {
    id: "han-seo-young",
    nameKo: "한서영",
    nameEn: "Han Seo-Young, M.D.",
    title: "부원장",
    image: "/images/doctors/han.png",
    credentials: [
      "연세대학교 의과대학 졸업",
      "대한피부과학회 정회원",
      "前 세브란스병원 피부과 전공의",
      "대한피부재생학회 정회원",
      "유럽피부과학회(EADV) Member",
    ],
  },
  {
    id: "lee-do-hyun",
    nameKo: "이도현",
    nameEn: "Lee Do-Hyun, M.D.",
    title: "부원장",
    image: "/images/doctors/lee.png",
    credentials: [
      "고려대학교 의과대학 졸업",
      "대한피부과학회 정회원",
      "前 고려대학교병원 피부과 전공의",
      "대한레이저의학회 정회원",
      "대한피부항노화학회 학술위원",
    ],
  },
] as const;
