# Handoff — 피부과 홈페이지 (dermatology-clinic)

> 이 문서는 새 Claude 세션에서 작업 재개할 때 컨텍스트 전달용입니다.
> 다른 두 레포(치과/한의원)에도 동일 구조의 handoff가 있고, 분야 정보만 다릅니다.

---

## 0. 이 레포의 분야

**피부과** (Dermatology Clinic)

해커톤 공지의 "병원" 카테고리를 피부과로 구체화한 트랙입니다.
브랜드명/콘셉트는 아직 미확정 — 브레인스토밍에서 같이 정합니다.

---

## 1. 해커톤 미션 (원본 공지 요약)

### 주제
> 최고로 멋진 병원/치과/한의원 홈페이지 바이브코딩 대회

**목표**: 실제 병의원 원장님께 보여드렸을 때 "와, 우리 병원도 이렇게 만들고 싶다"라는 반응이 나오는 샘플 사이트를 만드는 것. 완벽한 실서비스가 아니라 **영업 미팅에서 보여줄 멋진 샘플**.

### 가장 중요한 기준 (1순위)
원장님이 딱 봤을 때 **예쁘고, 고급스럽고, 와우**해야 함.
AEO/GEO도 중요하지만 **1차 목표는 보는 순간 사고 싶어지는 홈페이지**.

### 6가지 핵심 체크포인트
1. **첫 화면이 압도적으로 예쁠 것** — 히어로, 이미지, 색감, 폰트, 여백, 카피
2. **신뢰감 + 프리미엄 이미지** — 가볍거나 장난스러우면 안 됨
3. **병원/치과/한의원이 서로 다르게 느껴질 것** — 같은 템플릿 색만 바꾼 느낌 금지
4. **예약/문의 동선이 쉬울 것** — 진료과목, 의료진, 위치, 운영시간, 예약/문의 버튼
5. **AEO/GEO 기본 반영** — AI가 이해하기 쉬운 구조, FAQ, 질문형 콘텐츠, 진료 분야/지역/대상 환자/강점 명확
6. **AEO/GEO 콘텐츠 관리 화면(목업)** — 병원이 직접 관리할 수 있을 것처럼 보이는 어드민 UI (실제 DB X, 정적 목업 OK)

### 평가 항목 (각 1~5점)
1. **첫인상 / 와우 포인트** ← 가장 중요
2. 병의원 신뢰감 / 프리미엄 이미지
3. 사용자 경험 / 예약 문의 동선
4. AEO/GEO 기능성
5. 홈페이지 완성도

평가 핵심 질문:
> "내가 병원 원장님이라면, 이 홈페이지를 보고 우리 병원도 이렇게 만들고 싶을까?"

---

## 2. 절대 지양 (의료광고법)

- "1위", "최고", "유일" 등 과장 표현
- 치료 결과 보장 표현
- 검증되지 않은 의료 효과 주장
- 실제 환자 후기처럼 보이는 허위 콘텐츠
- 사용권 불분명한 실제 인물 사진
- 의료광고 관점에서 문제될 과장 표현

→ **추천 톤**: 절제된 카피, 데이터·프로세스 중심, 실제 인물 대신 일러스트/그래픽/스톡 가능 범위, 의료진은 가상 인물

---

## 3. 마감 / 제출

- **마감**: 오후 3시 50분
- **제출 형식**: `____.vercel.app` 링크 + 한 줄 콘셉트
- **시연**: 오후 4시부터
- **로컬/캡처/미배포는 인정 X** — 반드시 Vercel 배포된 URL이어야 함

---

## 4. 현재 셋업 상태 (이미 끝난 것)

### 기술 스택
- **Next.js 16.2.9** + **React 19.2.4** + **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Turbopack** (dev/build)
- `src/app` App Router, `eslint` 포함
- `pnpm` (lockfile 있음, node_modules 설치 완료)

### 주의 (Next.js 16 breaking changes)
- `middleware.ts` 금지 — `proxy.ts` 사용 (사용자 글로벌 규칙)
- 새 API/관례가 있을 수 있으니 `node_modules/next/dist/docs/` 참조 권장
- 애니메이션은 `motion/react` (framer-motion 금지)
- shadcn/ui 우선, cva 변형, 절대 import `@/*`

### Git / GitHub
- 로컬 git init + initial commit 완료 (`chore: scaffold next.js project`)
- **GitHub repo**: https://github.com/so-rang/dermatology-clinic (public)
- remote `origin` 연결됨, `main` 브랜치 push 완료
- 활성 gh 계정: `so-rang` (백업 계정 `5oran9`도 등록되어 있음)
- 커밋 이메일은 `sorang@across.center`로 설정함

### Vercel
- **Vercel 프로젝트**: `so-rangs-projects/dermatology-clinic`
- `.vercel/` 폴더 로컬에 있음 (gitignore됨)
- **GitHub ↔ Vercel 자동 배포 연결 완료** → `main`에 push하면 자동 배포
- Production URL은 첫 배포 후 생성됨 (예상: `dermatology-clinic-*.vercel.app`)

### 파일 상태
- 페이지/스타일은 **create-next-app 기본 그대로** (아직 깡통)
- `src/app/page.tsx`, `layout.tsx`, `globals.css` — 모두 default
- 메타데이터도 `"Create Next App"` 그대로

---

## 5. 남은 작업 (브레인스토밍 후 진행)

사용자(원장)와 **같이** 결정할 항목:
- [ ] 가상 브랜드명 / 한 줄 콘셉트 (제출용)
- [ ] 핵심 진료 영역 (예: 트러블, 색소, 탄력, 안티에이징 중 어디 강조)
- [ ] 타겟 환자 페르소나 (직장인/주부/2030 등)
- [ ] 지역 콘셉트 (강남/홍대/판교 등)
- [ ] 디자인 톤 (로즈/누드/모노톤/네이비 등 — 피부과는 보통 부드러운 톤)
- [ ] 폰트 (CJK 대응 — Pretendard / Noto Sans KR 권장)
- [ ] 의료진 가상 프로필 (이름·전공·약력)
- [ ] 운영시간 / 위치 / 가상 연락처
- [ ] FAQ 후보 질문 5~10개 (AEO용 질문형)

**필수 페이지/섹션**:
1. `/` 랜딩 (히어로 + 시그니처 진료 + 의료진 프리뷰 + 위치/시간 + FAQ 프리뷰 + 예약 CTA)
2. `/about` 병원 소개 + 의료진
3. `/treatments` (또는 `/services`) 진료 안내
4. `/location` 오시는 길 + 운영시간
5. `/reservation` 예약/문의 폼 (목업)
6. `/faq` 질문형 콘텐츠
7. `/admin` AEO/GEO 콘텐츠 관리 대시보드 목업
   - FAQ 작성/수정
   - 진료 콘텐츠 관리
   - 의료진 소개 수정
   - AEO 최적화 점수 대시보드
   - "AI 답변 최적화 콘텐츠 작성" 에디터 느낌

**AEO/GEO 기술 항목**:
- JSON-LD Schema: `MedicalBusiness` / `MedicalClinic` + `Person` (의료진) + `FAQPage` + `BreadcrumbList`
- `<html lang="ko">`, 한글 메타데이터, OG/Twitter 카드
- `sitemap.xml`, `robots.txt`
- 시맨틱 HTML (`<article>`, `<section>`, `<nav>`, heading 위계)
- 질문형 H2/H3 (예: "여드름 흉터, 시간이 지나면 사라지나요?")

---

## 6. 새 세션 시작 시 첫 액션

1. 이 파일 읽기
2. 사용자에게 "피부과 브랜드 콘셉트부터 같이 정할까요?" 물어보기
3. 위 **5번 체크리스트**의 미확정 항목을 순서대로 같이 채워나가기
4. 확정되면 디자인 시스템 → 컴포넌트 → 페이지 순으로 구현
5. 푸시할 때마다 Vercel 자동 배포 → 마감 전 최소 1번은 Production URL 확인

---

## 7. 다른 두 트랙 (참고)

같은 해커톤의 다른 두 레포는 디자인이 **서로 확연히 달라야** 합니다.

| 분야 | 폴더 | GitHub | Vercel 프로젝트 |
|---|---|---|---|
| 피부과 | `dermatology-clinic` (this) | so-rang/dermatology-clinic | so-rangs-projects/dermatology-clinic |
| 치과 | `dental-clinic` | so-rang/dental-clinic | so-rangs-projects/dental-clinic |
| 한의원 | `oriental-medicine-clinic` | so-rang/oriental-medicine-clinic | so-rangs-projects/oriental-medicine-clinic |

→ "같은 템플릿 색만 바꾼 느낌"이 되면 평가 항목 3번에서 감점. 헤더/타이포/레이아웃/모션까지 톤이 달라야 함.
