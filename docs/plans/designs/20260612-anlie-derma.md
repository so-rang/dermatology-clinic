# 앤리에 의원 (Atelier Dermatology) — Design Brief

> 2026-06-12 / 피부과 해커톤 트랙 / Editorial Science 컨셉
> 평가 1순위 = "원장님이 보고 우리 병원도 이렇게 만들고 싶다"는 와우 반응
> Status: 디자인 확정, /oma-pm 작업 분해 단계로 전환

---

## 0. 브랜드 정체성

| 항목 | 값 |
|---|---|
| 가상 브랜드명 | **앤리에 의원** (Atelier Dermatology) |
| 한 줄 콘셉트 | **"당신만을 위한 피부의 공방"** |
| 톤 | Editorial Science · 잡지급 · 사이언스 카피 · 시네마틱 |
| 가상 위치 | 서울 강남구 압구정로 412 (청담동), 청담역 8번 출구 도보 3분 |
| 페르소나 | 30–40대 여성, 안티에이징·탄력·재생 관심 |
| 차별화 한 줄 | 치과=쨍한 흰색, 한의원=한지의 결 → **피부과=세럼의 결** |

---

## 1. 시그니처 진료 라인 — Atelier 프로토콜 4단계

| Step | 라인 | 시술 | 의미 |
|---|---|---|---|
| 01 | **Diagnosis** | VISIA · Antera 3D · 더마스코프 · 진피 두께 측정 | 처방의 시작 |
| 02 | **Regeneration** | 리쥬란 HB·힐러·아이 · 엑소좀 부스터 · 스킨부스터 | 세포 단위의 재생 |
| 03 | **Restoration** | 울쎄라 · 써마지 · 스컬트라 · 엘란세 · 실리프팅 | 탄력과 윤곽의 회복 |
| 04 | **Maintenance** | 스킨보톡스 · 레이저토닝 · 물광 · 콜라겐 부스터 | 결의 유지 |

---

## 2. 의료진 (가상 3인)

- **정연우 / Jung Yeon-Woo, M.D.** — 대표원장
  - 서울대학교 의과대학 졸업 / 대한피부과학회 정회원
  - 前 서울대학교병원 피부과 전공의 / 미국피부과학회(AAD) Active Member
  - 대한피부미용외과학회 학술이사
- **한서영 / Han Seo-Young, M.D.** — 부원장
  - 연세대학교 의과대학 졸업 / 대한피부과학회 정회원
  - 前 세브란스병원 피부과 전공의 / 대한피부재생학회 정회원
  - 유럽피부과학회(EADV) Member
- **이도현 / Lee Do-Hyun, M.D.** — 부원장
  - 고려대학교 의과대학 졸업 / 대한피부과학회 정회원
  - 前 고려대학교병원 피부과 전공의 / 대한레이저의학회 정회원
  - 대한피부항노화학회 학술위원

---

## 3. 디자인 시스템

### 3.1 컬러 토큰

| 토큰 | HEX | 용도 |
|---|---|---|
| `--bg-base` | `#FAF8F4` | Cloud Dancer 베이스 |
| `--bg-soft` | `#F2EFE9` | 카드/섹션 구분 |
| `--accent-sage` | `#D9E4DC` | 라인·테두리·배너 |
| `--accent-terra` | `#C97B5A` | CTA·호버·하이라이트 |
| `--ink-deep` | `#2C3E36` | 본문/헤드라인 |
| `--ink-soft` | `#5C6A63` | 보조 텍스트 |
| `--line` | `#E5DFD3` | 1px 라인 |

### 3.2 타이포그래피

| 슬롯 | 폰트 | 비고 |
|---|---|---|
| H1·H2 한글 | **Noto Serif KR** (OFL) | 명조 헤드라인 |
| H1·H2 영문 라벨 | **EB Garamond** italic | "Atelier" / "Diagnosis" 등 |
| 본문·UI | **Pretendard Variable** | weight 100–900 보간 |
| 캡션 | Pretendard Light 300 + tracking 0.06em | |

### 3.3 그리드·여백

- 8px 그리드, 모바일 first (375px)
- 컨테이너 max-width 1280px, 사이드 padding 24/40/80px (sm/md/lg)
- 섹션 세로 padding 96–160px

### 3.4 모션 스택

| 라이브러리 | 용도 |
|---|---|
| **Lenis** (`lenis/react`) | 스무스 스크롤 베이스 |
| **GSAP + ScrollTrigger** + `useGSAP` | 시네마틱 스크롤 (헤로 un-blur, sticky storytelling) |
| **motion/react** | 호버·페이지 트랜지션·마이크로 인터랙션 |

- `prefers-reduced-motion` 분기 필수

### 3.5 비주얼 자산 톤 가이드

| 카테고리 | 톤 | 후보정 |
|---|---|---|
| 의료진 (3장) | **B&W or 디프 세피아** · 잡지 표지 모노 정면 | side light, gray seamless BG, 흰 가운, neutral pose |
| 공간 (4–6장) | 따뜻한 자연광 + 세이지 액센트 | warm LUT, 창광·골든아워 |
| 장비 (4–6장) | 모노매트 + 테라코타 조명 액센트 | 디테일 매크로, 부드러운 림라이트 |
| 제품·도구 (4–6장) | 워밍 소프트 클로즈업 | 우윳빛 디퓨즈, 작은 그림자 |
| 추상 텍스처 (3–4장) | 세럼 매크로에 테라코타 틴트 | 액체·결·광 |
| 정물 액센트 (2–3장) | 자연 정물, 세럼톤 | 돌·잎·유리·천 |

→ 생성 도구: **Higgsfield MCP** + `/oma-image` 스킬. LUT 일관 적용.
→ 의료광고법: 모든 AI 생성 콘텐츠에 "AI로 제작" 디스클레이머 1회 명시.

---

## 4. 사이트 맵 (페이지 우선순위)

| 우선순위 | 경로 | 설명 |
|---|---|---|
| P0 | `/` | 랜딩 |
| P0 | `/admin` | AEO 대시보드 (목업) |
| P0 | `/admin/faq` | FAQ Editor (목업) |
| P0 | `/admin/studio` | Content Studio (목업) |
| P1 | `/treatments` | Atelier 프로토콜 상세 |
| P1 | `/about` | 의료진·공간 |
| P1 | `/faq` | FAQPage |
| P2 | `/location` | 오시는 길 |
| P2 | `/reservation` | 예약 폼 (목업) |

---

## 5. 랜딩 페이지 (`/`) 섹션 상세

### 5.1 Hero

| 슬롯 | 내용 |
|---|---|
| 배경 | 풀-블리드 스톡 영상 (세럼 결 또는 공간 트래킹) — `grayscale(0.6) contrast(0.95) brightness(0.96)` + 미세 세피아·테라코타 틴트, autoplay/muted/loop/playsInline |
| Eyebrow | `ATELIER · DERMATOLOGY · CHEONGDAM` (EB Garamond italic 14px, terracotta, tracking 0.2em) |
| H1 | **"당신만을 위한 / 피부의 공방."** (Noto Serif KR, 72px → 모바일 44px) |
| Subhead 상단 | `Diagnosis · Regeneration · Restoration · Maintenance` (Garamond italic 16px, 세이지) |
| Subhead 하단 | "청담동 피부과 · 전문의 직접 진료" (Pretendard Light 13px, --ink-soft) |
| CTA 1차 | "Atelier 프로토콜 보기" → `/treatments` (solid terracotta) |
| CTA 2차 | "상담 예약" → `/reservation` (ghost sage) |
| 우측 하단 배지 | "전문의 3인 직접 진료" |
| 진입 모션 | blur(12px)→0 + scale(1.04)→1, 가변폰트 weight 100→500 보간, 0.8s |

### 5.2 Atelier 프로토콜 4카드 (Sticky Scroll Storytelling)

- 레이아웃: GSAP ScrollTrigger pin. 좌측 = 01→02→03→04 레이블 수직 이동. 우측 = SVG 메커니즘 일러스트 + 카피 교체. 하단 프로그레스 바 25→50→75→100%.
- 모바일 폴백: 세로 스태킹 카드 4장 + 스태거 페이드.

| Step | 영문 | 한글 헤드 | 카피 | 메커니즘 일러스트 | 시술 태그 |
|---|---|---|---|---|---|
| 01 | Diagnosis | **피부의 결을 먼저 읽습니다** | "표면이 아닌 진피층까지, 데이터로 읽습니다." | 페이스 스캔 그리드 + 7데이터 점선 | VISIA · Antera 3D · 더마스코프 · 진피 두께 |
| 02 | Regeneration | **피부 본연의 힘을 깨웁니다** | "PN의 신호, 엑소좀의 활성. 피부 본연의 회복력을 깨웁니다." | 세포 분자 다이어그램 (PN→섬유아세포→콜라겐) | 리쥬란 HB · 힐러 · 엑소좀 · 스킨부스터 |
| 03 | Restoration | 시간과 중력에 맞섭니다 | "초음파의 깊이, 고주파의 면적, 필러의 볼륨. 윤곽선을 다시 그립니다." | 피부 단면도 (표피·진피·SMAS) + 초음파 집속 점선 | 울쎄라 · 써마지 · 스컬트라 · 엘란세 · 실리프팅 |
| 04 | Maintenance | **일상 위에 머무르는 관리** | "가장 작은 단위의 시술로 균형을 유지합니다. 다운타임 없이." | 미세 점선 결 패턴 + 멜라닌 안정 그래프 | 스킨보톡스 · 레이저토닝 · 물광 · 콜라겐 부스터 |

### 5.3 Doctors Preview (의료진 3카드 균등 그리드)

- 레이아웃: 3카드 균등 그리드 (모바일 세로 스택)
- 카드: 상단 인물 컷(B&W 모노 정면, 가슴 위 크롭) + 한글/영문 이름 + 직책 + 이력 4줄
- 인용·전문분야 매칭 없음 — 이름과 이력만
- 호버: y -4px, 세이지 라인 강조 0.2s
- 섹션 헤더: H2 "Doctors" / 부제 "전문의 3인 직접 진료"
- 풋: "의료진 더 보기 →" → `/about`

### 5.4 Space & Tech

- 섹션 헤더(간소): H2 "Space & Tech" / 부제 "공간과 장비"
- 레이아웃: 좌 1/3 = 공간 시네그래프 1장(라운지 트래킹), 우 2/3 = 장비 매크로 2x2 그리드 4장
- 장비 카드: VISIA 7-mode · Ulthera · Thermage FLX · 리쥬란 핸드피스. 각 카드 = 매크로 + 영문 장비명 + 한 줄 설명

### 5.5 The Science (임상 사이언스)

- 섹션 헤더: H2 "The Science" / 부제 "보이는 결과는, 보이지 않는 데이터에서 옵니다."
- 레이아웃: 좌 = 데이터 인포그래픽 카드 3장, 우 = 임상 매크로 이미지 1장
- 데이터 카드: `VISIA 7-mode 분석` · `HIFU 1.5·3.0·4.5mm 깊이 제어` · `PN 22kDa 분자량`
- 하단 미세 디스클레이머: "본 페이지의 일부 이미지는 AI로 제작되었습니다."

### 5.6 FAQ Preview

- 섹션 헤더: H2 "자주 묻는 질문"
- Accordion 5개:
  1. 리쥬란 HB와 리쥬란 힐러는 어떻게 다른가요?
  2. 울쎄라와 써마지, 어떤 시술이 저에게 맞나요?
  3. 다운타임이 짧은 시술만 받고 싶은데 추천이 있나요?
  4. 가격은 어떻게 책정되나요?
  5. 의료진이 직접 시술하나요?
- 풋: "전체 FAQ 보기 →" → `/faq`
- JSON-LD `FAQPage` 스키마 자동 출력

### 5.7 Location & Hours

- 섹션 헤더: H2 "오시는 길"
- 좌 60%: 지도 임베드 (네이버맵 또는 정적 이미지 + 마커)
- 우 40%:
  - 주소: 서울 강남구 압구정로 412 (청담동)
  - 전화: 02-540-XXXX (가상)
  - 운영시간: 월–금 10:00–20:00 / 토 10:00–17:00 / 일·공휴일 휴진
  - 야간진료: 화·목 21:00까지
  - 주차: 건물 내 발렛 1시간 무료
  - 지하철: 청담역 8번 출구 도보 3분

### 5.8 Reservation CTA Footer

- 풀-블리드 컬러 블록: `#FAF8F4` 베이스 + 미세 테라코타 그라데이션
- 헤더: H2 "처음 만나는 자리, 가장 신중하게."
- 부카피: "전문의 직접 상담 · 피부 분석 무료 · 30분 충분히"
- CTA 3채널:
  - **30분 무료 상담 예약** (solid terracotta) → `/reservation`
  - **카카오톡 문의** (ghost) → 외부 링크
  - **전화: 02-540-XXXX** (텍스트 링크)

---

## 6. 의료광고법 가이드

- ❌ 직접 시술 장면, "1위/최고/유일", 50% 할인, 비교/비방, 환자 후기형 콘텐츠
- ✅ 비포&애프터 대신 **임상 사이언스 다이어그램** (메커니즘 SVG)
- ✅ AI 생성 콘텐츠는 "AI로 제작" 명시 1회
- ✅ FAQ 답변에 "개인차가 있음", "전문의 상담 권장" 디스클레이머

---

## 7. AEO/GEO

### 7.1 JSON-LD 스키마

- `MedicalClinic` (루트, 주소·전화·운영시간)
- `Physician` × 3
- `MedicalProcedure` × N (Atelier 프로토콜)
- `FAQPage`
- `BreadcrumbList`

### 7.2 메타·시맨틱

- `<html lang="ko">`, OG/Twitter 카드, sitemap.xml, robots.txt
- `<article>`, `<section>`, `<nav>` 시맨틱
- 모든 이미지 alt 한국어

---

## 8. 어드민(`/admin`) 목업 — 평가 6번 항목

### 8.1 `/admin` Dashboard
- AEO 점수 게이지 (84/100 mock, 원자도형 차트)
- 최근 7일 AEO 쿼리 트렌드 라인차트 (mock)
- 제안 액션 카드 3장 (예: "FAQ에 '리쥬란 다운타임' 추가 권장")
- 시술 페이지별 점수 테이블

### 8.2 `/admin/faq` FAQ Editor
- 좌측 FAQ 리스트, 우측 인라인 에디터
- 질문형 H3 입력 → 답변 입력 → Schema.org JSON 프리뷰
- Save = 토스트만 (mock)

### 8.3 `/admin/studio` Content Studio
- "AI 추천 제목" 카드 3장 (mock)
- 콘텐츠 textarea + 우측 "AEO 원자도" 차트 (실시간 mock)
- "AI 답변 최적화 콘텐츠 작성" 카피

---

## 9. 기술 스택

| 영역 | 선택 |
|---|---|
| 프레임워크 | Next.js 16.2 App Router |
| 스타일 | Tailwind CSS v4 + CSS variables |
| 컴포넌트 | shadcn/ui |
| 폰트 | Pretendard Variable + Noto Serif KR + EB Garamond (`next/font/google`) |
| 모션 | Lenis 1.3 + GSAP 3.12 + motion/react |
| 아이콘 | lucide-react |
| 미들웨어 | `proxy.ts` (Next.js 16, `middleware.ts` 금지) |
| 이미지 생성 | Higgsfield MCP + `/oma-image` |
| 배포 | Vercel auto deploy (main push) |

---

## 10. 빌드 우선순위 (해커톤 타임박스)

1. 디자인 토큰 + 폰트 + 글로벌 스타일
2. 공통 컴포넌트 (Nav, Footer, Button, Card, Badge, SectionHeader)
3. 비주얼 자산 생성 (Higgsfield/oma-image) — 의료진 3 + 공간/장비/제품/추상 약 15장
4. `/` 랜딩 헤로 + Atelier 프로토콜
5. `/` 나머지 5개 섹션
6. `/admin` 3페이지 (평가 6번)
7. JSON-LD + sitemap + robots
8. `/treatments`, `/about`, `/faq` (P1)
9. `/location`, `/reservation` (P2)
10. Vercel Production URL 확인 + Lighthouse

---

## 11. 검수 체크리스트

- [ ] Vercel Production URL 정상 (모바일 + 데스크톱)
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 95
- [ ] `prefers-reduced-motion` 동작 확인
- [ ] JSON-LD 검증 (Rich Results Test)
- [ ] 의료광고법 금지 표현 grep (`1위`, `최고`, `유일`, `보장`)
- [ ] CJK 폰트 폴백 확인
- [ ] AI 디스클레이머 1회 명시 확인
- [ ] 다른 두 트랙(치과·한의원)과 톤 차별화 비교

---

## 부록 — 참고 레퍼런스

- [Dr. Barbara Sturm](https://eu.drsturm.com/homepage2-0), [Matsurika Clinic Ginza](https://www.matsurika-clinic.com/en/about/), [BIANCA Clinic Ginza](https://biancaclinic.jp/en/), [청담오라클](http://cd.oracleclinic.com/)
- [Pretendard](https://github.com/orioncactus/pretendard), [Noto Serif KR](https://fonts.google.com/noto/specimen/Noto+Serif+KR), [EB Garamond](https://fonts.google.com/specimen/EB+Garamond)
- [Lenis](https://github.com/darkroomengineering/lenis), [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- 시장조사: `.agents/results/market/dermatology-clinic-homepage-20260612.md`
