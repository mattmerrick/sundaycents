// Blog Post Template
// Copy this template to create new blog posts

export const newBlogPostTemplate = {
  id: 'your-post-slug-here', // URL-friendly slug (lowercase, hyphens)
  title: 'Your Blog Post Title Here',
  excerpt: 'A compelling 1-2 sentence summary of your post that will appear in previews and search results.',
  content: `
    <p>Your opening paragraph that hooks the reader and introduces the main topic.</p>
    
    <h2>Your First Main Section</h2>
    <p>Develop your main points with clear, actionable content.</p>
    
    <h3>First Subsection</h3>
    <p>Add more specific details or examples for this subsection.</p>
    
    <h3>Second Subsection</h3>
    <p>Continue building your argument with another subsection.</p>
    
    <h2>Your Second Main Section</h2>
    <p>Continue building your argument or story with another main section.</p>
    
    <h3>Another Subsection</h3>
    <p>Add more specific details or examples.</p>
    
    <ul>
      <li>Use lists to break up content</li>
      <li>Make it scannable</li>
      <li>Keep it actionable</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Your concluding paragraph that ties everything together and gives the reader a clear next step.</p>
  `,
  date: '2024-01-15', // YYYY-MM-DD format
  readTime: '5 min read', // Estimate based on word count
  category: 'Business', // Choose from: Journey, Business, Tech, Personal, Lessons
  tags: ['tag1', 'tag2', 'tag3'], // 3-5 relevant tags for SEO
  seoTitle: 'SEO-Optimized Title - Matt Merrick', // Optional: custom SEO title
  seoDescription: 'SEO-optimized description that will appear in search results and social shares.', // Optional: custom SEO description
  featured: false // Set to true to feature on homepage
}

// Categories to choose from:
export const blogCategories = [
  'Journey',    // Personal journey and experiences
  'Business',   // Business strategy and tactics
  'Tech',       // Technical topics and tools
  'Personal',   // Personal development and mindset
  'Lessons'     // Lessons learned and mistakes
]

// How to add a new blog post:
// 1. Copy the template above
// 2. Fill in all the required fields
// 3. Add it to the blogPosts array in src/lib/blog-posts.ts
// 4. Make sure the ID is unique and URL-friendly
// 5. Test the post by visiting /blog/your-post-slug

// SEO Best Practices:
// - Use your target keyword in the title and first paragraph
// - Keep titles under 60 characters for search results
// - Write descriptions between 150-160 characters
// - Use 3-5 relevant tags
// - Include internal links to other blog posts
// - Use proper heading structure (H2 for main sections, H3 for subsections)
// - Avoid numbered headings (1., 2., 3.) - use clean H3 titles instead
// - Each H3 should be a standalone, scannable section
