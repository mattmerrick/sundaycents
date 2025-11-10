'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';
import issuesData from '../latest/email.json';

interface EmailIssue {
  day: number | string;
  title: string;
  content: string;
  date?: string;
}

export default function LatestEmail() {
  const typedIssuesData: EmailIssue[] = issuesData as EmailIssue[];

  const mainArticle = useMemo(
    () => typedIssuesData.find((issue) => issue.day === 'Main-Article'),
    [typedIssuesData]
  );

  const dailyIssues = useMemo(
    () =>
      typedIssuesData
        .filter((issue) => issue.day !== 'Main-Article')
        .sort((a, b) => Number(b.day) - Number(a.day)),
    [typedIssuesData]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = dailyIssues.length;
  const activeIssue = dailyIssues[currentIndex];

  const goPrevious = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));

  if (totalPages === 0) {
    return (
      <div className="min-h-screen w-full bg-[#f0ece2]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900">No daily log entries yet</h1>
          <p className="text-gray-600">
            Check back soon—new entries land here as soon as they are published.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-900/20 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f0ece2]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 lg:px-8">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-blue-200/60 transition hover:bg-white"
            >
              <span aria-hidden="true">←</span> Back Home
            </Link>
            <div className="hidden text-sm font-medium text-gray-600 lg:block">
              Turn the page to read yesterday&apos;s win—or tomorrow&apos;s plan.
            </div>
          </div>
          <EmailSignup variant="cta" />
        </header>

        {mainArticle && (
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 p-8 text-white shadow-2xl shadow-blue-900/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">Feature Story</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  The Latest Dispatch
                </h1>
                <p className="mt-4 text-blue-100/90">
                  Your long-form download on the state of building in public: raw numbers, hard lessons, and what to
                  execute next.
                </p>
              </div>
              <article className="relative flex-1 overflow-hidden rounded-2xl bg-white/10 backdrop-blur px-6 py-5 text-base leading-relaxed text-blue-50 shadow-lg">
                <div dangerouslySetInnerHTML={{ __html: mainArticle.content }} />
              </article>
            </div>
          </section>
        )}

        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Daily Log</p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                Day {activeIssue?.day}: {activeIssue?.title}
              </h2>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow ring-1 ring-gray-200">
              Page {currentIndex + 1} of {totalPages}
            </div>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="pointer-events-none absolute inset-0 translate-x-[22px] translate-y-[18px] rounded-3xl bg-[#f6f1e7] shadow-[12px_18px_30px_rgba(136,112,91,0.18)]" />
            <div className="pointer-events-none absolute inset-0 translate-x-[12px] translate-y-[10px] rounded-3xl bg-[#fbf7ef] shadow-[8px_12px_20px_rgba(0,0,0,0.08)]" />
            <article className="relative rounded-3xl border border-[#eadcc7] bg-[#fffbf2] px-6 py-8 text-[17px] leading-relaxed text-[#3c3124] shadow-[0_18px_40px_rgba(60,49,36,0.12)] sm:px-10 sm:py-12">
              <div className="mb-6 flex items-center justify-between text-sm font-medium text-[#8c7b65]">
                <span>“Swipe” through the log</span>
                <span>
                  Day {activeIssue?.day}
                  {activeIssue?.date ? ` • ${activeIssue.date}` : ''}
                </span>
              </div>
              <div
                className="prose prose-neutral max-w-none prose-p:my-4 prose-p:text-[17px] prose-p:leading-loose prose-strong:font-semibold prose-ul:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: activeIssue?.content ?? '' }}
              />
            </article>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrevious}
                disabled={currentIndex === 0}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:-translate-x-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span aria-hidden="true">←</span> Previous Day
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={currentIndex === totalPages - 1}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-900/20 transition hover:translate-x-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-500 disabled:ring-gray-400"
              >
                Next Day <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-gray-200">
              <div
                className="absolute inset-y-0 left-0 h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-300 transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              {dailyIssues.slice(0, 12).map((issue) => {
                const issueIndex = dailyIssues.findIndex((candidate) => candidate.day === issue.day);
                const isActive = currentIndex === issueIndex;
                return (
                  <button
                    key={issue.day}
                    type="button"
                    onClick={() => setCurrentIndex(issueIndex)}
                    className={`min-w-[84px] rounded-full px-4 py-1 transition ${
                      isActive
                        ? 'bg-gray-900 text-gray-100 shadow-sm'
                        : 'bg-white/70 text-gray-600 shadow-sm hover:bg-white'
                    }`}
                  >
                    Day {issue.day}
                  </button>
                );
              })}
              {totalPages > 12 && (
                <span className="rounded-full bg-white/60 px-3 py-1 text-gray-500 shadow-sm">More…</span>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}