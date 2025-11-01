import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';
import React from 'react';

// NOTE: Ensure this path is correct.
import issuesData from '../latest-email/email.json'; 

// --- TypeScript Interface (Data Structure) ---
interface EmailIssue {
    day: number | string;
    title: string;
    content: string;
    date?: string; 
}

// --- Helper Component for Rendering Each Content Block ---
function ContentBlock({ issue }: { issue: EmailIssue }) {
  const key = String(issue.day); 

  // If the content is the main article layout block
  if (issue.day === 'Main-Article') {
    return (
      <article key={key} className="prose prose-lg max-w-none">
        {/* Render the complex main article content using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: issue.content }} />
      </article>
    );
  }

  // If the content is a Daily Log Entry
  return (
    <div key={key} className="border-t-4 border-gray-200 pt-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Day {issue.day} - {issue.title}
      </h2>
      
      {/* Render the daily content (assuming it's HTML/text strings) */}
      <div 
        className="text-gray-700 whitespace-pre-wrap leading-relaxed" 
        dangerouslySetInnerHTML={{ __html: issue.content }}
      />
    </div>
  );
}


// --- Main Page Component ---
export default function LatestEmail() {
  
  const typedIssuesData: EmailIssue[] = issuesData as EmailIssue[];

  // 1. Separate the Main-Article and Daily Logs
  const mainArticle = typedIssuesData.find(issue => issue.day === 'Main-Article');
  
  const dailyIssues = typedIssuesData
    .filter(issue => issue.day !== 'Main-Article')
    // 2. Sort all daily issues by day in DESCENDING order (Current date last = highest number first)
    .sort((a, b) => Number(b.day) - Number(a.day)); 
    
  // Combine the main article (if it exists) with the sorted daily issues for the final render order
  const allContentToRender = [
    ...(mainArticle ? [mainArticle] : []), // Place the main article first
    ...dailyIssues // Then append all the sorted daily logs for the endless scroll
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/" 
            className="style={{color: '#0070F3'}} hover:text-blue-800 underline"
          >
            ← Back Home
          </Link>
          <EmailSignup />
        </div>

        {/* --- RENDER ALL CONTENT BLOCKS --- */}
        {allContentToRender.map(issue => (
          <ContentBlock 
            key={issue.day} 
            issue={issue}
          />
        ))}
        {/* --- END SCROLL --- */}

        <div className="text-center text-gray-500 py-10 border-t border-gray-200 mt-10">
            End of the Daily Log.
        </div>
        
      </div>
    </div>
  );
}