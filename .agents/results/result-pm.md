# PM 작업 분해 — 앤리에 의원 (Atelier Dermatology)

> 2026-06-12 / 피부과 해커톤 / Editorial Science 컨셉
> Plan JSON: `.agents/results/plan-anlie-20260612.json`
> Design Brief: `docs/plans/designs/20260612-anlie-derma.md`

---

## 0. TL;DR

- **총 22개 작업**, 추정 **17.5시간**. P0만 **12시간** (실제 마감 기준).
- **임계 경로**: T01 → T02 → T05(Sticky Scroll) → T15(SEO) → T21(배포) → T22(QA). 약 **9.5시간**.
- **병렬화 시 P0 8–9시간 압축 가능** (랜딩 8섹션과 어드민 3페이지를 wave_3·4에서 동시 진행).
- **High Risk 2건**: Sticky Scroll 학습 곡선(R01), 이미지 21장 생성 지연(R02). 둘 다 폴백 게이트 명시.

---

## 1. 작업 구조

```
Wave 1 (셋업)         T01 디자인 토큰·폰트
                       │
Wave 2 (병렬 기반)    T02 공통 컴포넌트     T03 비주얼 자산 21장
                       │   ┌────────────────┴─────────────────┐
Wave 3 (랜딩+어드민)  T04 Hero    T05 Atelier 스크롤    T06 Doctors
                      T07 Space   T08 Science          T09 FAQ Preview
                      T10 Location T11 CTA             T12 /admin Dashboard
                       │
Wave 4 (어드민 후속) T13 FAQ Editor   T14 Studio   T15 JSON-LD/sitemap
                       │
Wave 5 (P1)         T16 /treatments  T17 /about   T18 /faq
                       │
Wave 6 (P2)         T19 /location    T20 /reservation
                       │
Wave 7 (배포/QA)     T21 Vercel Deploy   T22 QA & 의료광고법
```

---

## 2. 우선순위별 작업 표

### P0 (해커톤 필수 — 16개, 12.0h)

| ID | 작업 | 의존 | 시간 |
|---|---|---|---|
| T01 | 디자인 토큰·폰트·Tailwind 셋업 | — | 0.5h |
| T02 | 공통 컴포넌트 (Nav/Footer/Button/Card/SectionHeader) | T01 | 0.75h |
| T03 | 비주얼 자산 21장 (Higgsfield) | T01 | 1.0h |
| T04 | 랜딩 Hero 섹션 + 진입 모션 | T01, T02 | 1.0h |
| T05 | Atelier 프로토콜 Sticky Scroll Storytelling | T01, T02 | 2.0h |
| T06 | Doctors Preview 3카드 | T02, T03 | 0.75h |
| T07 | Space & Tech | T02, T03 | 0.75h |
| T08 | The Science | T02, T03 | 0.75h |
| T09 | FAQ Preview Accordion 5개 + Schema | T02 | 0.5h |
| T10 | Location & Hours | T02 | 0.75h |
| T11 | Reservation CTA Footer | T02 | 0.5h |
| T12 | /admin Dashboard 목업 | T02 | 1.5h |
| T13 | /admin/faq FAQ Editor 목업 | T12 | 1.0h |
| T14 | /admin/studio Content Studio 목업 | T12 | 1.0h |
| T15 | JSON-LD + sitemap + robots | T04, T06, T09 | 0.5h |
| T21 | Vercel Production 배포 + Lighthouse | T15 | 0.5h |
| T22 | 최종 QA + 의료광고법 grep | T21 | 0.5h |

### P1 (시간 남으면 — 3개, 3.25h)

| ID | 작업 | 의존 | 시간 |
|---|---|---|---|
| T16 | /treatments 상세 | T05 | 1.5h |
| T17 | /about 의료진·공간 | T06, T07 | 1.0h |
| T18 | /faq 전체 + 카테고리 필터 | T09 | 0.75h |

### P2 (여유 시 — 2개, 1.5h)

| ID | 작업 | 의존 | 시간 |
|---|---|---|---|
| T19 | /location 상세 | T10 | 0.5h |
| T20 | /reservation 폼 목업 | T02 | 1.0h |

---

## 3. 에이전트 배분

| 에이전트 | 담당 작업 | 합계 |
|---|---|---|
| **frontend-engineer** | T01, T02, T04–T14, T16–T20 | 17개 |
| **general-purpose (image)** | T03 (비주얼 자산) | 1개 |
| **backend-engineer** | T15 (SEO/스키마) | 1개 |
| **tf-infra-engineer** | T21 (Vercel) | 1개 |
| **qa-reviewer** | T22 (최종 QA) | 1개 |

→ 오케스트레이터로 돌리면 **wave 3에서 frontend 8개 병렬 + image 1개** 동시 가능.

---

## 4. 데이터/이미지 컨트랙트 (요약)

```ts
type Doctor = {
  id: string; name_ko: string; name_en: string;
  title: string; credentials: string[]; image_url: string;
};

type Treatment = {
  id: string; step: "01"|"02"|"03"|"04";
  name_en: string; name_ko: string;
  headline_ko: string; copy: string;
  mechanism_svg: string; tags: string[];
};

type FAQ = {
  id: string; question: string; answer: string;
  category: string; schema_org: "FAQPage";
};
```

이미지 자산 디렉터리 약속:
```
public/images/
  doctors/      (3장, B&W 모노)
  space/        (5장, 자연광)
  equipment/    (4장, 매크로)
  product/      (4장, 매크로)
  abstract/     (3장, 텍스처)
  still/        (2장, 정물)
public/videos/
  hero.mp4      (시네그래프 30s 루프)
```

---

## 5. 위험 관리 (ISO 31000 사고 기반)

| ID | Severity | 위험 | 대응 |
|---|---|---|---|
| R01 | HIGH | Sticky Scroll(T05) 2h 초과 위험 | **1.5h 타임박스 + 1차 폴백 = 정적 4카드 그리드**. T05 시작 30분 후 진척률 체크포인트. |
| R02 | HIGH | 이미지 21장 생성 지연/품질 편차 | **필수 8장만 우선** (의료진 3 + 히어로 1 + 장비 4). 나머지는 Pexels/Unsplash 스톡 폴백 즉시 대체. |
| R03 | MEDIUM | Next.js 16 breaking changes (proxy.ts, motion/react) | `node_modules/next/dist/docs/` 사전 확인. middleware.ts 금지. framer-motion → motion/react. |
| R04 | MEDIUM | 의료광고법 위반 카피 혼입 | T22에서 grep 자동화. 금지어 체크리스트: `1위·최고·유일·보장·완치·100%·특허·신비·기적`. AI 디스클레이머 1회 명시. |
| R05 | LOW | Vercel 첫 배포 환경변수/도메인 | handoff.md 기준 이미 링크됨. 첫 푸시로 검증. |

---

## 6. Out of Scope

- 실제 백엔드 API (예약·문의 모두 mock)
- 실제 결제·인증
- 다국어 (한국어 only)
- Three.js/R3F (브레인스토밍에서 제외)

---

## 7. 다음 액션 (사용자 결정)

1. **/work 워크플로우**로 step-by-step 진행 (안전, 게이트 게이트 진행)
2. **/orchestrate**로 wave 3·4 병렬 자동 실행 (속도 ↑, 정합성 게이트 자동)
3. **직접 구현 시작** — T01부터 순차 (제가 frontend-engineer로 바로 진입)

해커톤 시간 제약상 **3번(직접 T01부터)** 또는 **2번(orchestrate)** 권장. 어느 쪽으로 갈지 알려주세요.
