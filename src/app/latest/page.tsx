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

const themeTokens = {
  classic: {
    name: 'Classic',
    pageGradient: 'linear-gradient(135deg, #fafafa 0%, #f1f1f1 42%, #e7e7e7 100%)',
    pageText: '#111111',
    meta: '#6b6b6b',
    heroBg: '#ffffff',
    heroBorder: 'rgba(0,0,0,0.08)',
    heroMuted: '#5f5f5f',
    heroShadow: '0 24px 60px rgba(15,15,15,0.08)',
    readerBg: '#ffffff',
    readerBorder: 'rgba(0,0,0,0.07)',
    readerText: '#181818',
    readerMuted: '#696969',
    readerShadow: '0 32px 80px rgba(18,18,18,0.12)',
    controlBg: '#ffffff',
    controlBorder: 'rgba(0,0,0,0.08)',
    controlText: '#262626',
    controlShadow: '0 18px 48px rgba(0,0,0,0.08)',
    chipActiveBg: '#111111',
    chipActiveText: '#ffffff',
    chipActiveBorder: '#111111',
    chipInactiveBg: '#f3f3f3',
    chipInactiveText: '#3a3a3a',
    chipInactiveBorder: 'rgba(0,0,0,0.12)',
    indicatorTrack: '#d4d4d4',
    indicatorFill: '#111111',
    buttonPrimaryBg: '#111111',
    buttonPrimaryText: '#ffffff',
    buttonPrimaryBorder: '#111111',
    buttonSecondaryBg: '#ffffff',
    buttonSecondaryText: '#2c2c2c',
    buttonSecondaryBorder: 'rgba(0,0,0,0.12)',
  },
  midnight: {
    name: 'Midnight',
    pageGradient: 'linear-gradient(135deg, #040404 0%, #0c0c12 48%, #050505 100%)',
    pageText: '#f5f5f5',
    meta: '#a1a1c2',
    heroBg: 'rgba(14,14,22,0.92)',
    heroBorder: 'rgba(255,255,255,0.08)',
    heroMuted: '#a7accf',
    heroShadow: '0 32px 90px rgba(0,0,0,0.6)',
    readerBg: 'rgba(13,13,21,0.94)',
    readerBorder: 'rgba(255,255,255,0.06)',
    readerText: '#f3f4f6',
    readerMuted: '#b5bbde',
    readerShadow: '0 38px 100px rgba(0,0,0,0.75)',
    controlBg: 'rgba(15,15,24,0.94)',
    controlBorder: 'rgba(255,255,255,0.08)',
    controlText: '#e7e9ff',
    controlShadow: '0 26px 70px rgba(0,0,0,0.7)',
    chipActiveBg: '#f9fafb',
    chipActiveText: '#0f0f18',
    chipActiveBorder: '#f9fafb',
    chipInactiveBg: 'rgba(14,14,22,0.94)',
    chipInactiveText: '#d5daf7',
    chipInactiveBorder: 'rgba(255,255,255,0.14)',
    indicatorTrack: 'rgba(255,255,255,0.18)',
    indicatorFill: '#f9fafb',
    buttonPrimaryBg: '#f9fafb',
    buttonPrimaryText: '#0f0f18',
    buttonPrimaryBorder: '#f9fafb',
    buttonSecondaryBg: 'rgba(14,14,22,0.94)',
    buttonSecondaryText: '#d7dbff',
    buttonSecondaryBorder: 'rgba(255,255,255,0.18)',
  },
  sepia: {
    name: 'Sepia',
    pageGradient: 'linear-gradient(135deg, #fef7eb 0%, #f7ead3 45%, #f1dcba 100%)',
    pageText: '#3b2b17',
    meta: '#8b6c48',
    heroBg: '#fff3df',
    heroBorder: 'rgba(139,94,54,0.25)',
    heroMuted: '#8a6840',
    heroShadow: '0 26px 70px rgba(139,94,54,0.22)',
    readerBg: '#fff0d7',
    readerBorder: 'rgba(139,94,54,0.28)',
    readerText: '#3a2918',
    readerMuted: '#856646',
    readerShadow: '0 34px 90px rgba(139,94,54,0.28)',
    controlBg: '#fef1d9',
    controlBorder: 'rgba(139,94,54,0.3)',
    controlText: '#4f371f',
    controlShadow: '0 24px 64px rgba(139,94,54,0.24)',
    chipActiveBg: '#3a2918',
    chipActiveText: '#fef1d9',
    chipActiveBorder: '#3a2918',
    chipInactiveBg: '#fae5c7',
    chipInactiveText: '#6a4b29',
    chipInactiveBorder: 'rgba(139,94,54,0.35)',
    indicatorTrack: 'rgba(139,94,54,0.28)',
    indicatorFill: '#3a2918',
    buttonPrimaryBg: '#3a2918',
    buttonPrimaryText: '#fef1d9',
    buttonPrimaryBorder: '#3a2918',
    buttonSecondaryBg: '#fef1d9',
    buttonSecondaryText: '#4f371f',
    buttonSecondaryBorder: 'rgba(139,94,54,0.35)',
  },
} as const;

type ThemeId = keyof typeof themeTokens;

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
  const [theme, setTheme] = useState<ThemeId>('midnight');
  const [fontScale, setFontScale] = useState(1);

  const totalPages = dailyIssues.length;
  const activeIssue = dailyIssues[currentIndex];
  const tokens = themeTokens[theme];

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => {
      const nextIndex = Math.max(prev - 1, 0);
      if (nextIndex !== prev) scrollToTop();
      return nextIndex;
    });
  };

  const goNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = Math.min(prev + 1, totalPages - 1);
      if (nextIndex !== prev) scrollToTop();
      return nextIndex;
    });
  };

  const increaseFont = () => setFontScale((prev) => Math.min(prev + 0.1, 1.4));
  const decreaseFont = () => setFontScale((prev) => Math.max(prev - 0.1, 0.8));
  const resetFont = () => setFontScale(1);

  const computedFontSize = Number((17 * fontScale).toFixed(1));

  const primaryButtonStyles = {
    background: tokens.buttonPrimaryBg,
    color: tokens.buttonPrimaryText,
    border: `1px solid ${tokens.buttonPrimaryBorder}`,
    boxShadow:
      theme === 'midnight'
        ? '0 26px 64px rgba(0,0,0,0.65)'
        : theme === 'sepia'
        ? '0 22px 60px rgba(139,94,54,0.24)'
        : '0 18px 48px rgba(0,0,0,0.12)',
  };

  const secondaryButtonStyles = {
    background: tokens.buttonSecondaryBg,
    color: tokens.buttonSecondaryText,
    border: `1px solid ${tokens.buttonSecondaryBorder}`,
    boxShadow:
      theme === 'midnight'
        ? '0 20px 54px rgba(0,0,0,0.6)'
        : theme === 'sepia'
        ? '0 16px 44px rgba(139,94,54,0.2)'
        : '0 14px 36px rgba(0,0,0,0.1)',
  };

  if (totalPages === 0) {
    return (
      <div
        className="min-h-screen w-full transition-colors duration-300"
        style={{ background: tokens.pageGradient, color: tokens.pageText }}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">No daily log entries yet</h1>
          <p className="text-base" style={{ color: tokens.meta }}>
            Check back soon—new entries land here as soon as they are published.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition"
            style={primaryButtonStyles}
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500 ease-out"
      style={{ background: tokens.pageGradient, color: tokens.pageText }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition"
              style={{
                background: tokens.controlBg,
                border: `1px solid ${tokens.controlBorder}`,
                color: tokens.controlText,
                boxShadow: tokens.controlShadow,
              }}
            >
              <span aria-hidden="true">←</span> Back Home
            </Link>
          </div>
          <div
            className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              background: tokens.heroBg,
              border: `1px solid ${tokens.heroBorder}`,
              boxShadow: tokens.heroShadow,
              color: tokens.pageText,
            }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get new issues straight to your inbox
              </h1>
              <div className="w-full max-w-lg">
                <EmailSignup
                  variant="cta"
                  placeholder="Enter your email"
                  buttonLabel="Subscribe"
                  buttonBgColor={tokens.buttonPrimaryBg}
                  buttonTextColor={tokens.buttonPrimaryText}
                />
              </div>
            </div>
          </div>
        </header>

        {mainArticle && (
          <section
            className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              background: tokens.heroBg,
              border: `1px solid ${tokens.heroBorder}`,
              boxShadow: tokens.heroShadow,
              color: tokens.pageText,
            }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <p
                  className="text-[11px] uppercase tracking-[0.35em]"
                  style={{ color: tokens.meta }}
                >
                  Feature Story
                </p>
                <span className="text-xs font-medium" style={{ color: tokens.heroMuted }}>
                  Long-form insight
                </span>
              </div>
              <div
                className="prose prose-neutral max-w-none prose-p:my-3 prose-p:leading-relaxed"
                style={{ color: tokens.readerText, fontSize: '16.5px', lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: mainArticle.content }}
              />
            </div>
          </section>
        )}

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] uppercase tracking-[0.35em]"
              style={{ color: tokens.meta }}
            >
              Daily log
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight">
                Day {activeIssue?.day}: {activeIssue?.title}
              </h2>
              <div
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]"
                style={{
                  background: tokens.controlBg,
                  border: `1px solid ${tokens.controlBorder}`,
                  color: tokens.controlText,
                  boxShadow: tokens.controlShadow,
                }}
              >
                Page {currentIndex + 1} of {totalPages}
              </div>
            </div>
          </div>

          <div
            className="flex w-full flex-wrap items-center gap-4 rounded-2xl px-4 py-3 sm:px-5"
            style={{
              background: tokens.controlBg,
              border: `1px solid ${tokens.controlBorder}`,
              boxShadow: tokens.controlShadow,
              color: tokens.controlText,
            }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[11px] uppercase tracking-[0.3em]"
                style={{ color: tokens.controlText }}
              >
                Font
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={decreaseFont}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition"
                  style={secondaryButtonStyles}
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <span className="text-sm font-semibold" style={{ color: tokens.controlText }}>
                  {Math.round(fontScale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={increaseFont}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition"
                  style={secondaryButtonStyles}
                  aria-label="Increase font size"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={resetFont}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] transition"
                  style={secondaryButtonStyles}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[11px] uppercase tracking-[0.3em]"
                style={{ color: tokens.controlText }}
              >
                Theme
              </span>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(themeTokens) as ThemeId[]).map((mode) => {
                  const isActive = theme === mode;
                  const chipStyles = isActive
                    ? {
                        background: tokens.chipActiveBg,
                        color: tokens.chipActiveText,
                        border: `1px solid ${tokens.chipActiveBorder}`,
                        boxShadow: tokens.controlShadow,
                      }
                    : {
                        background: themeTokens[mode].chipInactiveBg,
                        color: themeTokens[mode].chipInactiveText,
                        border: `1px solid ${themeTokens[mode].chipInactiveBorder}`,
                      };
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setTheme(mode)}
                      aria-pressed={isActive}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] transition"
                      style={chipStyles}
                    >
                      {themeTokens[mode].name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-4xl">
            <article
              className="rounded-[28px] px-6 py-8 sm:px-10 sm:py-12 transition-all duration-300"
              style={{
                background: tokens.readerBg,
                border: `1px solid ${tokens.readerBorder}`,
                boxShadow: tokens.readerShadow,
                color: tokens.readerText,
              }}
            >
              <div
                className="mb-6 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between"
                style={{ color: tokens.readerMuted }}
              >
                <span>
                  Day {activeIssue?.day}
                  {activeIssue?.date ? ` • ${activeIssue.date}` : ''}
                </span>
                <span>Adjust the reader, then dive in.</span>
              </div>
              <div
                className="prose prose-neutral max-w-none prose-p:my-4 prose-p:leading-relaxed prose-li:my-1"
                style={{ fontSize: `${computedFontSize}px`, lineHeight: 1.7, color: tokens.readerText }}
                dangerouslySetInnerHTML={{ __html: activeIssue?.content ?? '' }}
              />
            </article>
          </div>

          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={goPrevious}
                disabled={currentIndex === 0}
                className="flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition disabled:cursor-not-allowed disabled:opacity-40"
                style={secondaryButtonStyles}
              >
                <span aria-hidden="true">←</span> Previous Day
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={currentIndex === totalPages - 1}
                className="flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition disabled:cursor-not-allowed disabled:opacity-40"
                style={primaryButtonStyles}
              >
                Next Day <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="relative h-2 w-full overflow-hidden rounded-full">
              <div
                className="absolute inset-0"
                style={{ background: tokens.indicatorTrack }}
              />
              <div
                className="absolute inset-y-0 left-0 transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / totalPages) * 100}%`,
                  background: tokens.indicatorFill,
                }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {dailyIssues.slice(0, 12).map((issue) => {
                const issueIndex = dailyIssues.findIndex((candidate) => candidate.day === issue.day);
                const isActive = currentIndex === issueIndex;
                const chipStyles = isActive
                  ? {
                      background: tokens.chipActiveBg,
                      color: tokens.chipActiveText,
                      border: `1px solid ${tokens.chipActiveBorder}`,
                      boxShadow: tokens.controlShadow,
                    }
                  : {
                      background: tokens.chipInactiveBg,
                      color: tokens.chipInactiveText,
                      border: `1px solid ${tokens.chipInactiveBorder}`,
                    };
                return (
                  <button
                    key={issue.day}
                    type="button"
                    onClick={() => setCurrentIndex(issueIndex)}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] transition"
                    style={chipStyles}
                  >
                    Day {issue.day}
                  </button>
                );
              })}
              {totalPages > 12 && (
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    background: tokens.chipInactiveBg,
                    color: tokens.chipInactiveText,
                    border: `1px solid ${tokens.chipInactiveBorder}`,
                  }}
                >
                  More…
                </span>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}