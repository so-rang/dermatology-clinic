"use client";

import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { Button } from "@/components/ui/button";
import { protocol } from "@/lib/data/protocol";
import { clinic } from "@/lib/data/clinic";

const schema = z.object({
  name: z.string().min(1, "이름을 입력해주세요").max(40),
  phone: z
    .string()
    .regex(/^[0-9-]{9,14}$/u, "전화번호 형식이 올바르지 않습니다"),
  date: z.string().min(1, "희망 일자를 선택해주세요"),
  category: z.string().min(1, "관심 라인을 선택해주세요"),
  memo: z.string().max(500).optional(),
});

type Form = z.infer<typeof schema>;

const today = new Date().toISOString().split("T")[0];

export default function ReservationPage() {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    date: "",
    category: "",
    memo: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function onChange<K extends keyof Form>(k: K, v: Form[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Partial<Record<keyof Form, string>> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof Form;
        next[path] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12 md:px-10 md:py-16 lg:px-20">
          <header className="md:col-span-5">
            <span className="font-display tracking-brand text-xs text-terra">
              RESERVATION
            </span>
            <h1 className="font-serif-ko mt-3 text-4xl leading-tight text-balance md:text-5xl">
              30분 무료 상담
            </h1>
            <p className="mt-6 max-w-md text-base text-ink-soft md:text-lg">
              전문의가 직접 상담합니다. 시술을 권하기 전에 피부를 먼저 읽습니다.
            </p>
            <ul className="mt-10 space-y-4 border-t border-line pt-6 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-ink-soft">전화</span>
                <a href={`tel:${clinic.phone}`} className="text-ink">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ink-soft">카카오톡</span>
                <a href={clinic.kakaoChannel} className="text-ink">
                  채널 추가
                </a>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ink-soft">위치</span>
                <span className="text-ink">{clinic.subway}</span>
              </li>
            </ul>
          </header>

          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border border-line bg-bg-soft p-10"
                >
                  <p className="font-display tracking-brand text-xs text-terra">
                    RECEIVED
                  </p>
                  <h2 className="font-serif-ko mt-3 text-3xl md:text-4xl text-balance">
                    예약 요청이 접수되었습니다.
                  </h2>
                  <p className="mt-4 text-sm text-ink-soft">
                    {form.name} 님, 24시간 이내에 카카오톡으로 일정 확정
                    안내드립니다.
                  </p>
                  <p className="mt-2 text-[11px] text-ink-mute">
                    ※ 본 페이지는 데모입니다. 실제 예약은 카카오톡 채널 또는
                    전화로 부탁드립니다.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    새 예약 만들기
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="border border-line bg-bg-soft p-8 md:p-10"
                  noValidate
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field
                      label="이름"
                      error={errors.name}
                    >
                      <input
                        value={form.name}
                        onChange={(e) => onChange("name", e.target.value)}
                        className="input"
                      />
                    </Field>
                    <Field
                      label="전화번호"
                      error={errors.phone}
                    >
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        placeholder="010-1234-5678"
                        className="input"
                      />
                    </Field>
                    <Field
                      label="희망 일자"
                      error={errors.date}
                    >
                      <input
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => onChange("date", e.target.value)}
                        className="input"
                      />
                    </Field>
                    <Field
                      label="관심 라인"
                      error={errors.category}
                    >
                      <select
                        value={form.category}
                        onChange={(e) => onChange("category", e.target.value)}
                        className="input"
                      >
                        <option value="">선택해주세요</option>
                        {protocol.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.step} · {p.nameKo} ({p.nameEn})
                          </option>
                        ))}
                        <option value="not-sure">잘 모르겠어요, 상담 원함</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="메모 (선택)" error={errors.memo} className="mt-6">
                    <textarea
                      value={form.memo}
                      onChange={(e) => onChange("memo", e.target.value)}
                      rows={5}
                      className="input"
                      placeholder="피부 고민, 알러지 이력, 복용 약물 등을 적어주시면 상담에 도움이 됩니다."
                    />
                  </Field>
                  <div className="mt-8 flex items-center gap-3">
                    <Button type="submit" variant="terra">
                      예약 요청 보내기
                    </Button>
                    <p className="text-[11px] text-ink-mute">
                      개인정보는 상담 목적으로만 사용되며, 24시간 내 회신
                      드립니다.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12" />
      </main>
      <SiteFooter />
      <style>{`
        .input {
          width: 100%;
          background: var(--bg-base);
          border: 1px solid var(--line);
          color: var(--ink-deep);
          padding: 0.75rem 0.9rem;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus {
          border-color: var(--accent-terra);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className ? `block ${className}` : "block"}>
      <span className="font-display tracking-brand text-[10px] text-ink-mute">
        {label.toUpperCase()}
      </span>
      <div className="mt-2">{children}</div>
      {error ? (
        <span className="mt-1 block text-[11px] text-terra">{error}</span>
      ) : null}
    </label>
  );
}
