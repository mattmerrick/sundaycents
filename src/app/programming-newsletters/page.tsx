import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '8 Programming Newsletters for Polyglot Developers',
  description:
    'Programming newsletters that cover multiple languages, paradigms, and system design topics for curious developers.',
  keywords: [
    'programming newsletters',
    'polyglot developer email',
    'software newsletter',
    'coding news digest',
    'developer education newsletter',
  ],
}

export default function ProgrammingNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>8 Programming Newsletters for Polyglot Developers</h1>

        <p>
          Programming thrives on curiosity. You jump between languages, paradigms, and tooling. These newsletters feed that
          curiosity with relevant updates across the stack.
        </p>

        <p>
          Editors collect standout articles, conference talks, and repository highlights. You stay informed without tracking
          twenty feeds alone.
        </p>

        <p>
          Choose a couple to start. Bookmark one idea per week. Discuss it with your team during engineering jam sessions.
        </p>

        <h2>1. Better Dev Link</h2>
        <p>
          Better Dev Link curates programming articles that stretch your thinking. Topics range from database internals to
          performance tuning and language design.
        </p>
        <p>
          The author keeps commentary short, letting the original sources shine. Expect handpicked quality every Monday.
        </p>

        <h2>2. Programming Digest</h2>
        <p>
          Programming Digest surfaces trending GitHub repos, tutorials, and engineering stories. It covers multiple languages
          and highlights practical code along with theory.
        </p>
        <p>
          Developers enjoy the balance between learning and doing. Many discoveries become weekend hacking projects.
        </p>

        <h2>3. Golang Weekly</h2>
        <p>
          Go remains a favorite for backend and infrastructure teams. Golang Weekly delivers release notes, blog posts, and
          open-source tools worth exploring.
        </p>
        <p>
          It complements other language-focused newsletters, keeping your Go knowledge current even if you do not write it daily.
        </p>

        <h2>4. Rust Times</h2>
        <p>
          Rust Times tracks the rapidly growing Rust ecosystem. You get crate announcements, compiler updates, and production
          case studies from companies shipping Rust in critical systems.
        </p>
        <p>
          The digest motivates seasoned programmers to experiment with memory-safe performance.
        </p>

        <h2>5. Kotlin Weekly</h2>
        <p>
          Kotlin Weekly earns another mention because many programmers want cross-platform knowledge. It covers multiplatform,
          Android, and backend usage with samples and tools.
        </p>
        <p>
          Polyglot engineers appreciate learning how Kotlin interoperates with Java and JavaScript stacks.
        </p>

        <h2>6. This Week in React</h2>
        <p>
          This Week in React pulls together React core updates, library releases, and performance techniques. It includes videos
          and podcasts for deeper learning.
        </p>
        <p>
          Even backend-heavy programmers follow it to keep front-of-the-front knowledge fresh.
        </p>

        <h2>7. Monday Morning Architect</h2>
        <p>
          Mark Richards sends Monday Morning Architect to explore architecture patterns. Each issue covers a specific concept,
          provides diagrams, and shares trade-offs.
        </p>
        <p>
          It suits programmers climbing toward staff-level responsibilities.
        </p>

        <h2>8. The Morning Paper</h2>
        <p>
          Adrian Colyer revisits academic papers that shaped modern computing. He summarizes one per weekday, focusing on core
          ideas and practical takeaways.
        </p>
        <p>
          It keeps programmers grounded in fundamentals while spotting fresh research worth revisiting.
        </p>

        <h2>Build a Cross-Language Notebook</h2>
        <p>
          Track newsletter highlights in a single notebook sorted by theme. When a project needs a new language or pattern,
          scan your notes for starting points.
        </p>
        <p>
          This habit removes friction and keeps polymath energy strong across your career.
        </p>
      </section>
    </main>
  )
}

