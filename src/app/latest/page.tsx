import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';
import React from 'react';

// NOTE: Ensure this path is correct.
import issuesData from '../latest/email.json'; 

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

  // --- Render the Main Article (Complex Market Data) ---
  if (issue.day === 'Main-Article') {
    return (
      // We explicitly set w-full and padding for mobile view.
      // We omit 'prose' here as the content has specific Tailwind classes baked in.
      <article key={key} className="w-full px-4">
        {/* The content string contains the full JSX/HTML structure for the main article. */}
        <div 
            className="text-base text-gray-900" // Base styling for the wrapper
            dangerouslySetInnerHTML={{ __html: issue.content }} 
        />
      </article>
    );
  }

  // --- Render Daily Log Entry (Formatted Text) ---
  return (
    <div key={key} className="border-t border-gray-200 pt-6 mt-6 px-4"> 
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Day {issue.day} - {issue.title}
      </h2>
      
      {/* Render the daily content with HTML tags for clean paragraph breaks */}
      <div 
        className="text-gray-800 text-base leading-relaxed" 
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
    // 2. Sort all daily issues by day in DESCENDING order (Newest first)
    .sort((a, b) => Number(b.day) - Number(a.day)); 
    
  // Combine the main article (if it exists) with the sorted daily issues for the final render order
  const allContentToRender = [
    ...(mainArticle ? [mainArticle] : []), // Place the main article first
    { // Add a separator heading after the main article and before the daily log begins
        day: 'Daily-Log-Header',
        title: 'The Daily Log',
        content: '',
        isHeader: true 
    } as EmailIssue, // Use the header structure
    ...dailyIssues // Then append all the sorted daily logs for the endless scroll
  ];

  return (
    // Removed max-w and mx-auto for full mobile width
    <div className="w-full min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="w-full"> {/* Removed unnecessary max-w and centered classes */}
        
        {/* Header/Nav Area (Needs minimal padding to prevent hitting screen edges) */}
        <div className="flex justify-between items-center mb-6 px-4 py-4"> 
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline font-medium text-sm"
          >
            ← Back Home
          </Link>
          <EmailSignup />
        </div>

        {/* --- RENDER ALL CONTENT BLOCKS --- */}
        {allContentToRender.map(issue => {
            // Special case to render the main header divider
            if ((issue as any).isHeader) {
                return (
                    <h1 
                        key={issue.day} 
                        className="text-4xl font-extrabold text-center text-gray-900 pt-10 mt-10 border-t-8 border-black px-4"
                    >
                        {issue.title}
                    </h1>
                );
            }
            return <ContentBlock key={issue.day} issue={issue} />;
        })}
        
        <div className="text-center text-gray-500 text-xs py-8 border-t border-gray-200 mt-10">
            End of the Daily Log.
        </div>
        
      </div>
    </div>
  );
}