import { protocol } from "@/lib/data/protocol";

export default function AdminDashboard() {
  const score = 84;
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const queries = [
    { q: "리쥬란 다운타임 며칠", trend: "+24%", count: 38 },
    { q: "울쎄라 vs 써마지", trend: "+18%", count: 31 },
    { q: "스킨보톡스 효과 지속", trend: "+12%", count: 27 },
    { q: "30대 안티에이징 추천", trend: "+9%", count: 22 },
    { q: "콜라겐 부스터 가격", trend: "+6%", count: 19 },
  ];

  const suggestions = [
    {
      title: "FAQ에 '리쥬란 다운타임' 답변 추가 권장",
      detail: "최근 7일간 38건의 AI 질의에서 다운타임 키워드가 함께 등장했습니다.",
      impact: "+6 score",
    },
    {
      title: "Restoration 페이지에 '울쎄라 vs 써마지' 비교 섹션 추가",
      detail: "AI 답변 채택률을 15% 끌어올릴 것으로 예측됩니다.",
      impact: "+4 score",
    },
    {
      title: "FAQPage Schema에 'KnowsAbout' 필드 보강",
      detail: "Google Rich Results에서 의료기관 권위 시그널이 강화됩니다.",
      impact: "+3 score",
    },
  ];

  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display tracking-brand text-xs text-terra">
            AEO DASHBOARD
          </p>
          <h1 className="font-serif-ko mt-2 text-3xl md:text-4xl">
            지금 AI는 우리 병원을 이렇게 답하고 있습니다.
          </h1>
        </div>
        <p className="text-xs text-ink-mute">
          Last sync · 2 minutes ago · Demo data
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {/* Score gauge */}
        <div className="border border-line bg-bg-soft p-8">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            AEO SCORE
          </p>
          <div className="mt-6 flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="var(--line)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="var(--accent-terra)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 80 80)"
              />
              <text
                x="80"
                y="86"
                textAnchor="middle"
                className="font-serif-ko"
                fontSize="36"
                fill="var(--ink-deep)"
              >
                {score}
              </text>
              <text
                x="80"
                y="106"
                textAnchor="middle"
                fontSize="10"
                fill="var(--ink-soft)"
                letterSpacing="0.2em"
              >
                / 100
              </text>
            </svg>
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            지난주 대비 <span className="text-terra">+7</span>
          </p>
        </div>

        {/* Query trend */}
        <div className="border border-line bg-bg-soft p-8 lg:col-span-2">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            7-DAY QUERY TREND
          </p>
          <svg viewBox="0 0 400 120" className="mt-6 h-32 w-full">
            <defs>
              <linearGradient id="trend" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#C97B5A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C97B5A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 90 Q40 80 60 70 T120 60 T200 45 T280 30 T360 20 L400 18 L400 120 L0 120 Z"
              fill="url(#trend)"
            />
            <path
              d="M0 90 Q40 80 60 70 T120 60 T200 45 T280 30 T360 20 L400 18"
              stroke="#C97B5A"
              strokeWidth="1.5"
              fill="none"
            />
            {[0, 60, 120, 200, 280, 360].map((x, i) => (
              <g key={i}>
                <line
                  x1={x}
                  x2={x}
                  y1="118"
                  y2="121"
                  stroke="var(--line)"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y="135"
                  textAnchor="middle"
                  fontSize="8"
                  fill="var(--ink-mute)"
                >
                  {`D${7 - i}`}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-4 text-sm text-ink-soft">
            총 137건 · <span className="text-terra">+22%</span> vs 지난주
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="border border-line bg-bg-soft p-8">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            SUGGESTED ACTIONS
          </p>
          <ul className="mt-6 space-y-5">
            {suggestions.map((s) => (
              <li key={s.title} className="border-t border-line pt-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif-ko text-base text-ink">
                    {s.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-terra px-2 py-0.5 text-[10px] tracking-wide text-bg-base">
                    {s.impact}
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-soft">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-line bg-bg-soft p-8">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            AI QUERY VOLUME
          </p>
          <table className="mt-6 w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-[11px] tracking-brand text-ink-mute">
                <th className="pb-3 font-normal">Query</th>
                <th className="pb-3 text-right font-normal">7d</th>
                <th className="pb-3 text-right font-normal">Δ</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((q) => (
                <tr key={q.q} className="border-b border-line/60">
                  <td className="py-3 text-ink">{q.q}</td>
                  <td className="py-3 text-right tabular-nums text-ink-soft">
                    {q.count}
                  </td>
                  <td className="py-3 text-right tabular-nums text-terra">
                    {q.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-line bg-bg-soft p-8">
        <p className="font-display tracking-brand text-[10px] text-ink-mute">
          PROCEDURE SCORES
        </p>
        <ul className="mt-6 space-y-4">
          {protocol.map((p, i) => {
            const s = [88, 82, 79, 91][i] ?? 80;
            return (
              <li
                key={p.id}
                className="grid grid-cols-12 items-center gap-3 border-t border-line pt-4 text-sm"
              >
                <span className="col-span-3 font-display italic text-ink">
                  {p.nameEn}
                </span>
                <span className="col-span-3 text-ink-soft">
                  {p.tags.length} 시술
                </span>
                <div className="col-span-4 h-1 rounded-full bg-line">
                  <div
                    className="h-1 rounded-full bg-terra"
                    style={{ width: `${s}%` }}
                  />
                </div>
                <span className="col-span-2 text-right font-display tabular-nums text-ink">
                  {s}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
