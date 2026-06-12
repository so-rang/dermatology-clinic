export type ProtocolStep = {
  id: string;
  step: "01" | "02" | "03" | "04";
  nameEn: string;
  nameKo: string;
  headlineKo: string;
  copy: string;
  tags: readonly string[];
  mechanism: string;
};

export const protocol: readonly ProtocolStep[] = [
  {
    id: "diagnosis",
    step: "01",
    nameEn: "Diagnosis",
    nameKo: "진단",
    headlineKo: "피부의 결을 먼저 읽습니다",
    copy: "표면이 아닌 진피층까지, 데이터로 읽습니다. 처방은 분석에서 시작됩니다.",
    tags: ["VISIA 7-mode", "Antera 3D", "더마스코프", "진피 두께 측정"],
    mechanism: "scan-grid",
  },
  {
    id: "regeneration",
    step: "02",
    nameEn: "Regeneration",
    nameKo: "재생",
    headlineKo: "피부 본연의 힘을 깨웁니다",
    copy: "PN의 신호, 엑소좀의 활성. 섬유아세포가 다시 콜라겐을 만듭니다.",
    tags: ["리쥬란 HB", "리쥬란 힐러", "엑소좀 부스터", "스킨부스터"],
    mechanism: "cell-network",
  },
  {
    id: "restoration",
    step: "03",
    nameEn: "Restoration",
    nameKo: "회복",
    headlineKo: "시간과 중력에 맞섭니다",
    copy: "초음파의 깊이, 고주파의 면적, 필러의 볼륨으로 윤곽선을 다시 그립니다.",
    tags: ["울쎄라", "써마지 FLX", "스컬트라", "엘란세", "실리프팅"],
    mechanism: "skin-section",
  },
  {
    id: "maintenance",
    step: "04",
    nameEn: "Maintenance",
    nameKo: "유지",
    headlineKo: "일상 위에 머무르는 관리",
    copy: "가장 작은 단위의 시술로 결의 균형을 유지합니다. 다운타임 부담을 최소화하는 설계.",
    tags: ["스킨보톡스", "레이저토닝", "물광", "콜라겐 부스터"],
    mechanism: "texture-grid",
  },
] as const;
