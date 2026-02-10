"use client";

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Code,
  Sparkles,
  TrendingUp,
  Award,
  Coffee,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  Twitter,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PersonalBlog = () => {

  // Use the same type everywhere
  type ArticleId = string | number;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'article' | 'project'>('home');
  const [selectedArticle, setSelectedArticle] = useState<typeof blogPosts[number] | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  const [likedArticles, setLikedArticles] = useState<Set<ArticleId>>(new Set());
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<ArticleId>>(new Set());

  const [showWelcome, setShowWelcome] = useState(true);


  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Minimalist Design in Modern Web",
      excerpt: "Exploring how less truly becomes more when crafting digital experiences that resonate with users on a deeper level.",
      date: "Feb 3, 2026",
      readTime: "8 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80",
      imageType: "url",
      color: "from-violet-600 to-purple-600",
      featured: true,
      tags: ["UI/UX", "Minimalism", "Web Design"],
      content: `
        <h2>Introduction</h2>
        <p>In an era of digital overload, minimalist design has emerged as a powerful antidote to visual chaos. But what does minimalism truly mean in the context of modern web design? It's far more than just white space and simple layouts—it's a philosophy of intentional design.</p>
        <h2>The Core Principles</h2>
        <p>Minimalism in web design is built on several fundamental principles:</p>
        <ul>
          <li><strong>Purposeful Content:</strong> Every element serves a clear function</li>
          <li><strong>Visual Hierarchy:</strong> Clear organization guides user attention</li>
          <li><strong>Generous Whitespace:</strong> Breathing room enhances comprehension</li>
          <li><strong>Limited Color Palette:</strong> Restraint creates impact</li>
          <li><strong>Typography Focus:</strong> Text as a primary design element</li>
        </ul>
        <h2>Why Minimalism Works</h2>
        <p>Our brains process visual information incredibly fast—within 13 milliseconds. When we reduce cognitive load through minimalist design, we allow users to focus on what truly matters. This isn't about removing features; it's about removing distraction.</p>
        <blockquote>
          "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry
        </blockquote>
        <h2>Common Pitfalls to Avoid</h2>
        <p>While minimalism can be powerful, it's easy to take it too far:</p>
        <ul>
          <li>Sacrificing usability for aesthetics</li>
          <li>Removing essential navigation elements</li>
          <li>Using unclear iconography without labels</li>
          <li>Neglecting accessibility considerations</li>
        </ul>
        <h2>Real-World Examples</h2>
        <p>Some of the most successful minimalist designs include Apple's product pages, Stripe's documentation, and Medium's reading experience. Each demonstrates how restraint can create clarity and impact.</p>
        <h2>Implementing Minimalism</h2>
        <p>Start with these practical steps:</p>
        <ol>
          <li>Audit your current design—what can be removed?</li>
          <li>Establish a clear visual hierarchy</li>
          <li>Choose a limited color palette (3-4 colors max)</li>
          <li>Invest in high-quality typography</li>
          <li>Test with real users to ensure usability</li>
        </ol>
        <h2>Conclusion</h2>
        <p>Minimalist design isn't a trend—it's a timeless approach to creating meaningful digital experiences. When done right, it allows content to shine, reduces cognitive load, and creates interfaces that feel effortless to use. The key is finding the balance between simplicity and functionality.</p>
        <p>Remember: minimalism is about being intentional, not minimal. Every element should earn its place on the page.</p>
      `
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "A comprehensive guide to architecting React applications that grow with your team and maintain performance at scale.",
      date: "Jan 28, 2026",
      readTime: "12 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      imageType: "url",
      color: "from-emerald-600 to-teal-600",
      featured: false,
      tags: ["React", "Architecture", "Performance"],
      content: `
        <h2>Introduction</h2>
        <p>Scaling a React application isn't just about handling more users—it's about maintaining code quality, developer experience, and performance as your codebase grows. Let's explore battle-tested patterns for building React apps that scale.</p>
        <h2>Folder Structure That Scales</h2>
        <p>Start with a solid foundation:</p>
     <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">
<code>
src/
  ├── components/ # Reusable UI components
  ├── features/ # Feature-based modules
  ├── hooks/ # Custom React hooks
  ├── lib/ # Utility functions
  ├── services/ # API calls
  └── types/ # TypeScript types
</code>
</pre>

        <h2>Component Architecture</h2>
        <p>Follow these principles for maintainable components:</p>
        <ul>
          <li><strong>Single Responsibility:</strong> Each component does one thing well</li>
          <li><strong>Composition Over Inheritance:</strong> Build complex UIs from simple pieces</li>
          <li><strong>Props Over State:</strong> Keep state as high as necessary, no higher</li>
        </ul>
        <h2>State Management</h2>
        <p>Choose the right tool for the job:</p>
        <ul>
          <li>Local state: useState for component-specific data</li>
          <li>URL state: useSearchParams for shareable state</li>
          <li>Server state: React Query for API data</li>
          <li>Global state: Context API or Zustand for app-wide data</li>
        </ul>
        <h2>Performance Optimization</h2>
        <p>Critical techniques for keeping your app fast:</p>
        <ol>
          <li>Code splitting with React.lazy()</li>
          <li>Memoization with useMemo and useCallback</li>
          <li>Virtual scrolling for long lists</li>
          <li>Debouncing expensive operations</li>
          <li>Image optimization and lazy loading</li>
        </ol>
        <h2>Testing Strategy</h2>
        <p>A robust testing pyramid ensures confidence:</p>
        <ul>
          <li>Unit tests: Test utility functions and hooks</li>
          <li>Component tests: Test UI behavior with React Testing Library</li>
          <li>Integration tests: Test feature workflows</li>
          <li>E2E tests: Test critical user paths</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Building scalable React applications is about making thoughtful architectural decisions early and staying disciplined as you grow. Focus on maintainability, performance, and developer experience—the rest will follow.</p>
      `
    },
    {
      id: 3,
      title: "The Future of AI in Creative Work",
      excerpt: "How artificial intelligence is reshaping the creative landscape and what it means for artists and designers.",
      date: "Jan 20, 2026",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      imageType: "url",
      color: "from-orange-600 to-red-600",
      featured: false,
      tags: ["AI", "Creative Tech", "Future"],
      content: `
        <h2>The Creative Revolution</h2>
        <p>We're witnessing a fundamental shift in how creative work gets done. AI isn't replacing creativity—it's amplifying it, democratizing it, and opening new frontiers we couldn't have imagined just a few years ago.</p>
        <h2>AI as a Creative Partner</h2>
        <p>The most exciting applications treat AI as a collaborator:</p>
        <ul>
          <li><strong>Rapid Prototyping:</strong> Generate dozens of concepts in minutes</li>
          <li><strong>Style Transfer:</strong> Explore visual directions quickly</li>
          <li><strong>Content Variation:</strong> Create multiple versions effortlessly</li>
          <li><strong>Technical Tasks:</strong> Automate repetitive work</li>
        </ul>
        <h2>What Changes, What Stays</h2>
        <p>AI transforms the tools, but the fundamentals remain:</p>
        <ul>
          <li>Creative vision and taste are still human</li>
          <li>Understanding audience and context matters more</li>
          <li>Curation becomes as important as creation</li>
          <li>The ability to prompt and direct AI is a new skill</li>
        </ul>
        <h2>Ethical Considerations</h2>
        <p>As we embrace AI, we must grapple with important questions:</p>
        <ul>
          <li>Attribution and copyright in AI-generated work</li>
          <li>The environmental impact of AI training</li>
          <li>Bias in training data and outputs</li>
          <li>The value and dignity of human creative work</li>
        </ul>
        <h2>Practical Applications Today</h2>
        <p>AI is already transforming creative workflows:</p>
        <ol>
          <li>Image generation for mood boards and concepts</li>
          <li>Writing assistance and content ideation</li>
          <li>Code generation and debugging</li>
          <li>Music and sound design</li>
          <li>Video editing and production</li>
        </ol>
        <h2>Preparing for the Future</h2>
        <p>To thrive in this new landscape:</p>
        <ul>
          <li>Develop strong taste and creative judgment</li>
          <li>Learn to work with AI tools effectively</li>
          <li>Focus on uniquely human skills: empathy, storytelling, strategy</li>
          <li>Stay adaptable and keep learning</li>
        </ul>
        <h2>Conclusion</h2>
        <p>AI in creative work isn't a threat or a silver bullet—it's a powerful new tool that will reshape how we create. The creatives who will thrive are those who embrace these tools while doubling down on what makes them uniquely human.</p>
      `
    },
    {
      id: 4,
      title: "Mastering Typography for the Web",
      excerpt: "Deep dive into type systems, vertical rhythm, and creating harmonious text hierarchies that enhance readability.",
      date: "Jan 15, 2026",
      readTime: "15 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      imageType: "url",
      color: "from-blue-600 to-indigo-600",
      featured: false,
      tags: ["Typography", "Design System", "CSS"],
      content: `
        <h2>Why Typography Matters</h2>
        <p>Typography is the foundation of web design. We read text on screens for hours every day, and good typography makes that experience effortless. Bad typography causes friction, reduces comprehension, and drives users away.</p>
        <h2>Choosing the Right Typefaces</h2>
        <p>Start with these principles:</p>
        <ul>
          <li><strong>Readability First:</strong> Choose fonts designed for screen reading</li>
          <li><strong>Contrast:</strong> Pair a serif with a sans-serif, or two sans-serifs with distinct personalities</li>
          <li><strong>Less is More:</strong> Stick to 2-3 typefaces maximum</li>
          <li><strong>Variable Fonts:</strong> Consider using variable fonts for flexibility</li>
        </ul>
        <h2>Type Scale</h2>
        <p>A modular scale creates harmony:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>Base: 16px
Ratio: 1.250 (Major Third)
h1: 39.06px
h2: 31.25px
h3: 25px
h4: 20px
body: 16px
small: 12.8px</code></pre>
        <h2>Vertical Rhythm</h2>
        <p>Consistent spacing creates visual harmony:</p>
        <ul>
          <li>Use a base line height (e.g., 1.5 or 24px)</li>
          <li>All spacing should be multiples of this unit</li>
          <li>Maintain consistent spacing between elements</li>
        </ul>
        <h2>Responsive Typography</h2>
        <p>Typography must adapt across devices:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>/* Fluid typography */
font-size: clamp(1rem, 2.5vw, 1.5rem);
/* Responsive line length */
max-width: 65ch;</code></pre>
        <h2>Accessibility</h2>
        <p>Make text readable for everyone:</p>
        <ul>
          <li>Minimum 16px body text</li>
          <li>Contrast ratio of at least 4.5:1</li>
          <li>Avoid pure black on white</li>
          <li>Adequate line spacing (1.5 minimum)</li>
        </ul>
        <h2>Advanced Techniques</h2>
        <ul>
          <li>OpenType features for professional polish</li>
          <li>Optical sizing for different text sizes</li>
          <li>Custom font loading strategies</li>
          <li>Variable fonts for performance</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Great typography is invisible—users shouldn't notice it, they should just find reading effortless. Master these fundamentals, and you'll create text that's not just readable, but genuinely pleasurable to consume.</p>
      `
    },
    {
      id: 5,
      title: "Why I Started Blogging Again in 2026",
      excerpt: "After years of quiet building, I decided to write publicly again — what changed, what I learned from stopping, and why sharing feels different now.",
      date: "Feb 5, 2026",
      readTime: "7 min read",
      category: "Personal",
      image: "/start.png",
      imageType: "url",
      color: "from-rose-500 to-pink-600",
      featured: false,
      tags: ["Writing", "Reflection", "Growth"],
      content: `
        <h2>The Silence Years</h2>
        <p>I stopped blogging in 2022. Not because I ran out of things to say, but because I convinced myself that building was more important than talking about building. I was wrong.</p>
        <h2>What I Lost</h2>
        <p>In those quiet years, I lost more than just an audience:</p>
        <ul>
          <li><strong>Clarity:</strong> Writing forces you to organize your thoughts</li>
          <li><strong>Connections:</strong> People can't relate to what you don't share</li>
          <li><strong>Growth:</strong> Public learning accelerates understanding</li>
          <li><strong>Memory:</strong> Unwritten experiences fade faster</li>
        </ul>
        <h2>The Shift</h2>
        <p>Something changed at the end of 2024. I started noticing patterns in my work, lessons from failures, insights from successes. And I realized: these might help someone else.</p>
        <h2>Why Now Feels Different</h2>
        <p>This time, I'm not blogging for:</p>
        <ul>
          <li>SEO or traffic</li>
          <li>Building an audience</li>
          <li>Monetization or sponsorships</li>
          <li>Looking smart or impressive</li>
        </ul>
        <p>I'm writing because:</p>
        <ul>
          <li>It helps me think clearly</li>
          <li>Someone might find it useful</li>
          <li>Future me will appreciate the record</li>
          <li>The act of writing itself is valuable</li>
        </ul>
        <h2>The New Approach</h2>
        <p>My rules for blogging in 2026:</p>
        <ol>
          <li><strong>Write for clarity, not virality</strong></li>
          <li><strong>Share failures as much as wins</strong></li>
          <li><strong>No pressure on frequency</strong></li>
          <li><strong>Publish imperfect work</strong></li>
          <li><strong>Focus on being useful</strong></li>
        </ol>
        <h2>What I've Learned</h2>
        <p>A few weeks in, and I'm already seeing benefits:</p>
        <ul>
          <li>Writing weekly forces me to notice what I'm learning</li>
          <li>Strangers are reaching out with similar experiences</li>
          <li>Organizing my thoughts publicly makes them more actionable</li>
          <li>It's deeply satisfying to help someone solve a problem</li>
        </ul>
        <h2>An Invitation</h2>
        <p>If you've been thinking about writing, just start. Don't wait for the perfect blog setup or the perfect first post. Write one thing. Publish it. See how it feels.</p>
        <p>The world has enough content. But it never has enough honest, thoughtful perspectives from people learning in public.</p>
        <h2>What's Next</h2>
        <p>I'll be writing about design, development, and the messy middle of building things. Some posts will be technical. Some will be personal. All will be honest.</p>
        <p>If that sounds interesting, stick around. And if you're on your own writing journey, I'd love to hear about it.</p>
      `
    },
    {
      id: 6,
      title: "The Burnout I Didn't See Coming",
      excerpt: "Late nights, endless side projects, and the moment I realized I wasn't enjoying code anymore. Honest reflections on recovery.",
      date: "Jan 10, 2026",
      readTime: "9 min read",
      category: "Personal",
      image: "/picforburnout.jpg",
      imageType: "url",
      color: "from-teal-600 to-cyan-600",
      featured: false,
      tags: ["Mental Health", "Work-Life Balance", "Self-Care"],
      content: `
        <h2>The Breaking Point</h2>
        <p>It was 2AM on a Tuesday. I was debugging a personal project that nobody asked for, feeling nothing but dread. That's when I realized: I didn't love coding anymore. I didn't even like it.</p>
        <h2>How It Started</h2>
        <p>The signs were there for months:</p>
        <ul>
          <li>Dreading opening my laptop</li>
          <li>Feeling guilty for not working on side projects</li>
          <li>Comparing myself to everyone on Tiktok or FB</li>
          <li>Exhaustion that sleep didn't fix</li>
          <li>Irritability with code that used to excite me</li>
        </ul>
        <h2>The Hustle Culture Trap</h2>
        <p>I fell for the narrative: real developers code nights and weekends. They have 10 side projects. They're always learning, always building, always shipping.</p>
        <p>I tried to keep up. Full-time job, side projects, learning new frameworks, writing blog posts, building in public. I wore busyness like a badge of honor.</p>
        <h2>What I Lost</h2>
        <p>In chasing productivity, I lost:</p>
        <ul>
          <li><strong>Joy in creation</strong> - Everything became optimization</li>
          <li><strong>Present moments</strong> - Always thinking about the next task</li>
          <li><strong>Deep work</strong> - Context switching destroyed focus</li>
          <li><strong>Relationships</strong> - Too tired for real connection</li>
          <li><strong>Health</strong> - Poor sleep, worse eating, no exercise</li>
        </ul>
        <h2>The Recovery</h2>
        <p>Coming back wasn't about hustling harder or finding new motivation. It was about fundamentally changing my relationship with work:</p>
        <ol>
          <li><strong>I quit all side projects</strong> - Every single one. The relief was immediate.</li>
          <li><strong>I set boundaries</strong> - No work after 6PM. No code on weekends.</li>
          <li><strong>I deleted Twitter</strong> - Stopped comparing my chapter 3 to everyone else's highlight reel.</li>
          <li><strong>I started moving</strong> - Daily walks became non-negotiable.</li>
          <li><strong>I gave myself permission</strong> - To be a person, not a productivity machine.</li>
        </ol>
        <h2>What Actually Helped</h2>
        <p>These made the biggest difference:</p>
        <ul>
          <li>Therapy (seriously, find a good therapist)</li>
          <li>Exercise that felt like play, not punishment</li>
          <li>Hobbies that had nothing to do with tech</li>
          <li>Friends who didn't talk about work</li>
          <li>Accepting that rest is productive</li>
        </ul>
        <h2>What I Do Differently Now</h2>
        <p>My new rules:</p>
        <ul>
          <li>One focus at a time (job OR side project, not both)</li>
          <li>Sleep is sacred (7-8 hours, non-negotiable)</li>
          <li>Weekends are for life, not code</li>
          <li>I can say no to opportunities</li>
          <li>Good enough is often perfect</li>
        </ul>
        <h2>The Paradox</h2>
        <p>Here's the twist: I'm more productive now. Not because I work more hours, but because the hours I work are genuinely focused. I create better work in 6 focused hours than I did in 12 distracted ones.</p>
        <h2>If You're Burned Out</h2>
        <p>Some gentle advice:</p>
        <ul>
          <li>It's okay to stop. Really stop, not just slow down.</li>
          <li>You're not lazy for needing rest</li>
          <li>Your worth isn't measured in commits</li>
          <li>The hustle can wait; your health can't</li>
          <li>Ask for help (therapist, friend, manager)</li>
        </ul>
        <h2>The Ongoing Journey</h2>
        <p>I'm not "fixed." Some weeks are harder than others. But I'm learning to notice the early signs, to course-correct before hitting the wall again.</p>
        <p>Burnout taught me something crucial: sustainable creation beats heroic sprints. Always.</p>
        <p>Take care of yourself. The code will still be there tomorrow.</p>
      `
    },
    {
  id: 7,
  title: "Doing the Work of an IT Department on a Starter Salary",
  excerpt:
    "My first job as an IT staff turned into handling the entire school’s tech infrastructure and building internal systems—while my salary never changed.",
  date: "Dec 20, 2025",
  readTime: "8 min read",
  category: "Career",
  image: "/NAC.png",
  imageType: "url",
  color: "from-slate-600 to-zinc-700",
  featured: false,
  tags: ["IT Support", "Web Development", "Career Lessons", "First Job"],
  content: `
    <h2>How It Started</h2>
    <p>
      This was my first job. I was hired as an IT staff at <strong>NAC</strong>, and the role sounded straightforward:
      assist with technical issues and provide basic support.
    </p>
    <p>
      In practice, I quickly became the person responsible for almost everything related to technology.
    </p>

    <h2>What I Actually Did</h2>
    <p>
      My responsibilities expanded far beyond the original job description. I handled:
    </p>
    <ul>
      <li>Maintenance and troubleshooting of all school hardware (PCs, printers, devices)</li>
      <li>Software installation, updates, and issue resolution across offices and classrooms</li>
      <li>Managing and troubleshooting the school’s internet connection and local network</li>
      <li>Daily technical support for teachers, staff, and students</li>
      <li>Ensuring systems stayed operational during critical school activities</li>
    </ul>

    <h2>Becoming the School Web Developer</h2>
    <p>
      As I spent more time inside the school’s operations, one thing became obvious: they were far behind in terms of technology.
      Most processes—student records, tuition payments, employee data, and reports—were handled manually using paper forms and spreadsheets.
    </p>

    <p>
      These manual workflows were slow, error-prone, and exhausting for staff. Simple tasks took hours or days,
      and tracking accurate information was always a struggle.
    </p>

    <p>
      Instead of just pointing out the problem, I decided to build solutions. I started developing internal web systems
      to centralize data and automate daily operations.
    </p>

    <p>
      I built systems for student information management, tuition and payment status tracking, employee records,
      and basic administrative reporting. The goal was simple: make work faster, reduce errors, and give administrators
      real-time access to reliable data.
    </p>

    <p>
      Tasks that used to take hours could now be completed in minutes. Staff no longer had to dig through folders,
      paper files, or scattered spreadsheets.
    </p>

    <h2>Doing the Work of an IT Department</h2>
    <p>
      Alongside development, I continued handling the entire school’s IT infrastructure.
      Hardware issues, software problems, network outages, printer failures—if something broke, it came to me.
    </p>

    <p>
      In effect, I was functioning as IT support, system administrator, network technician,
      and web developer—all in my first job.
    </p>

    <h2>The Reality Check</h2>
    <p>
      Despite the increased responsibility and impact of my work, my salary remained the same.
      I was even offered absorption as a regular employee, but the compensation did not improve.
    </p>

    <p>
      That experience taught me a hard but important lesson: increased responsibility does not always come with fair recognition or pay.
    </p>

    <p>
      While I’m proud of the systems I built and the problems I solved, it ultimately influenced my decision
      not to extend my contract and to pursue opportunities where my skills and contributions are properly valued.
    </p>

    <h2>What I Learned</h2>
    <ul>
      <li>Being dependable often leads to more responsibility—not automatically better pay</li>
      <li>Job titles don’t always reflect the real scope of the work</li>
      <li>Real-world problems accelerate skill growth faster than tutorials</li>
      <li>Experience is valuable, but fair compensation still matters</li>
      <li>Knowing when to move on is part of professional growth</li>
    </ul>

    <h2>Final Thought</h2>
    <p>
      This role gave me hands-on experience across IT support, networking, and full-stack development.
      It proved that I can handle real production systems under pressure.
    </p>
    <p>
      Hard work matters—but so does knowing your worth.
    </p>
  `
},{
  id: 8,
  title: "IT Support Under Pressure at Gaisano City CDO",
  excerpt:
    "My second IT role pushed me to my limits—handling nonstop hardware and network issues while building internal systems to replace manual workflows.",
  date: "Mar 15, 2026",
  readTime: "9 min read",
  category: "Career",
  image: "gaisano.png",
  imageType: "url",
  color: "from-blue-700 to-indigo-700",
  featured: false,
  tags: ["IT Support", "System Development", "Burnout", "Work Experience"],
  content: `
    <h2>Starting My Second IT Job</h2>
    <p>
      After my first job, I joined <strong>Gaisano City CDO</strong> as an IT Support staff.
      On paper, the role focused on maintaining computers and providing technical assistance
      within my department.
    </p>

    <p>
      In reality, it was a constant stream of problems—hardware failures, software crashes,
      internet issues, and printer breakdowns—all happening at the same time.
    </p>

    <h2>Day-to-Day IT Support Reality</h2>
    <p>
      My daily responsibilities included:
    </p>
    <ul>
      <li>Repairing and troubleshooting desktop and laptop hardware</li>
      <li>Fixing software issues, OS problems, and application errors</li>
      <li>Managing internet and network connectivity within the department</li>
      <li>Setting up, repairing, and maintaining printers and peripherals</li>
      <li>Providing immediate support to employees to avoid work disruption</li>
    </ul>

    <p>
      The pressure was constant. When systems went down, operations slowed—and IT was expected
      to fix everything immediately.
    </p>

    <h2>Seeing the Same Problem Again: Manual Work Everywhere</h2>
    <p>
      While working closely with different departments, especially HR, I noticed a familiar issue:
      many important processes were still manual.
    </p>

    <p>
      Employee records were stored in physical folders or scattered digital files.
      When HR needed a document, they often had to ask around just to find
      who was holding a specific file.
    </p>

    <p>
      This wasted time, caused frustration, and increased the risk of lost or misplaced records.
    </p>

    <h2>Building an Employee File Management System</h2>
    <p>
      Instead of accepting the inefficiency, I decided to build a solution.
      I designed and developed an internal employee file management system
      to centralize HR records.
    </p>

    <p>
      The system allowed HR to:
    </p>
    <ul>
      <li>Store employee files in one centralized location</li>
      <li>Upload, view, and manage employee documents digitally</li>
      <li>Reduce dependency on physical folders and manual searching</li>
      <li>Access records quickly without needing to ask other staff</li>
    </ul>

    <p>
      The goal was simple: make HR work faster, cleaner, and less stressful.
    </p>

    <h2>Building Systems While Fixing Everything Else</h2>
    <p>
      The hardest part wasn’t the development—it was the timing.
      I was building the system while still doing full-time IT support.
    </p>

    <p>
      One moment I’d be writing code and planning features.
      The next moment I’d be repairing a computer, fixing a printer,
      or troubleshooting an internet outage.
    </p>

    <p>
      Even outside work hours, my mind was split—thinking about unfinished systems
      while preparing for the next day’s technical issues.
    </p>

    <h2>Burnout Sets In</h2>
    <p>
      Juggling system development and nonstop IT support took a toll.
      The pressure to deliver working systems while keeping everything operational
      led to mental and physical burnout.
    </p>

    <p>
      There was no clear boundary between support work and development work—
      both demanded full attention, and both were critical.
    </p>

    <h2>What This Job Taught Me</h2>
    <ul>
      <li>IT support is reactive, development requires deep focus—and combining both is exhausting</li>
      <li>Manual systems slow down organizations more than they realize</li>
      <li>Initiative creates value, but also adds invisible workload</li>
      <li>Burnout often comes from sustained pressure, not lack of skill</li>
      <li>Systems should support people—not rely on one person to maintain everything</li>
    </ul>

    <h2>Final Reflection</h2>
    <p>
      Working at Gaisano City CDO strengthened my ability to handle pressure,
      prioritize issues, and build practical systems for real users.
    </p>

    <p>
      It also taught me the importance of balance.
      Building solutions is meaningful—but not at the cost of constant burnout.
    </p>

    <p>
      Experience is valuable, but sustainability matters just as much.
    </p>
  `
},
{
      id: 9,
      title: "Next.js 15 Performance Patterns",
      excerpt: "Practical techniques for optimizing React Server Components, streaming, and achieving sub-second page loads.",
      date: "Jan 5, 2026",
      readTime: "14 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      imageType: "url",
      color: "from-indigo-600 to-blue-600",
      featured: true,
      tags: ["Next.js", "Performance", "React"],
      content: `
        <h2>The Performance Imperative</h2>
        <p>Speed isn't just a feature—it's a fundamental user experience requirement. With Next.js 15, we have powerful tools to build applications that feel instant. Let's explore how to use them effectively.</p>
        <h2>React Server Components: The Game Changer</h2>
        <p>Server Components fundamentally change what's possible:</p>
        <ul>
          <li><strong>Zero bundle impact:</strong> Server-only code doesn't ship to clients</li>
          <li><strong>Direct data access:</strong> Fetch from databases without API layers</li>
          <li><strong>Automatic code splitting:</strong> Only send what's needed</li>
        </ul>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// app/page.tsx - Server Component by default
async function HomePage() {
  const data = await db.posts.findMany(); // Direct DB access!
  return <PostList posts={data} />;
}</code></pre>
        <h2>Streaming for Perceived Performance</h2>
        <p>Don't wait for everything—stream content as it's ready:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>import { Suspense } from 'react';
export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Skeleton />}>
        <SlowComponent />
      </Suspense>
      <Footer />
    </div>
  );
}</code></pre>
        <p>The page renders immediately. Slow components stream in when ready.</p>
        <h2>Parallel Data Fetching</h2>
        <p>Fetch everything at once, not sequentially:</p>
        <pre  style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// ❌ Sequential - slow
async function Page() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
}
// ✅ Parallel - fast
async function Page() {
  const [user, posts, comments] = await Promise.all([
    getUser(),
    getPosts(),
    getComments()
  ]);
}</code></pre>
        <h2>Caching Strategies</h2>
        <p>Next.js 15 offers multiple cache layers:</p>
        <ul>
          <li><strong>Request memoization:</strong> Automatic deduplication within a render</li>
          <li><strong>Data cache:</strong> Persistent across requests</li>
          <li><strong>Full route cache:</strong> Pre-rendered at build time</li>
          <li><strong>Router cache:</strong> Client-side navigation cache</li>
        </ul>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Control caching per fetch
fetch(url, {
  next: {
    revalidate: 3600 // Revalidate after 1 hour
  }
});
// Or per route
export const revalidate = 3600;</code></pre>
        <h2>Image Optimization</h2>
        <p>Images are often the biggest performance bottleneck:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>import Image from 'next/image';
<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  priority // Load immediately for LCP
  placeholder="blur" // Smooth loading
  blurDataURL="..." // Low-quality placeholder
/></code></pre>
        <h2>Font Optimization</h2>
        <p>Next.js 15 makes font loading effortless:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;" ><code>import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent invisible text
  variable: '--font-inter'
});
export default function RootLayout({ children }) {
  return (
    <html className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}</code></pre>
        <h2>Bundle Size Optimization</h2>
        <p>Techniques to keep JavaScript bundles small:</p>
        <ul>
          <li><strong>Dynamic imports:</strong> Load code when needed</li>
          <li><strong>Use 'use client' sparingly:</strong> Keep Server Components when possible</li>
          <li><strong>Tree shaking:</strong> Import only what you use</li>
          <li><strong>Analyze bundles:</strong> Use @next/bundle-analyzer</li>
        </ul>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Lazy load heavy components
const Chart = dynamic(() => import('@/components/Chart'), {
  loading: () => <Skeleton />,
  ssr: false // Don't render on server
});</code></pre>
        <h2>Partial Prerendering (Experimental)</h2>
        <p>The future of Next.js performance:</p>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Static shell renders instantly
// Dynamic content streams in
export default function Page() {
  return (
    <div>
      {/* Static - prerendered */}
      <Header />
    
      {/* Dynamic - streams */}
      <Suspense>
        <DynamicContent />
      </Suspense>
    
      {/* Static - prerendered */}
      <Footer />
    </div>
  );
}</code></pre>
        <h2>Monitoring Performance</h2>
        <p>Measure what matters:</p>
        <ul>
          <li><strong>Core Web Vitals:</strong> LCP, FID, CLS</li>
          <li><strong>Time to First Byte (TTFB)</strong></li>
          <li><strong>First Contentful Paint (FCP)</strong></li>
        </ul>
        <pre style="color: white; background-color: #1e1e1e; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}</code></pre>
        <h2>Performance Checklist</h2>
        <ol>
          <li>Use Server Components by default</li>
          <li>Implement streaming with Suspense</li>
          <li>Optimize images with next/image</li>
          <li>Self-host fonts with next/font</li>
          <li>Configure appropriate cache strategies</li>
          <li>Lazy load heavy components</li>
          <li>Monitor with Speed Insights</li>
          <li>Test on real devices and networks</li>
        </ol>
        <h2>Conclusion</h2>
        <p>Next.js 15 gives us incredible performance tools. The key is using them intentionally. Start with Server Components, add Suspense for loading states, optimize images and fonts, and measure everything.</p>
        <p>Performance isn't a one-time optimization—it's an ongoing commitment to user experience. Make it fast, keep it fast.</p>
      `
    },{
  id: 9,
  title: "Choosing Peace Without Letting Go of Building",
  excerpt:
    "Why I stepped away from full-time tech roles, chose a calmer path as a data analyst, and still make space for coding and building on my own terms.",
  date: "Apr 2, 2026",
  readTime: "8 min read",
  category: "Personal",
  image: "/peace.png",
  imageType: "url",
  color: "from-emerald-500 to-teal-600",
  featured: false,
  tags: ["Career", "Burnout", "Balance", "Reflection"],
  content: `
    <h2>The Question I Keep Hearing</h2>
    <p>
      “Why aren’t you working in the tech industry right now?”
    </p>
    <p>
      I hear it often—from friends, former coworkers, even people who’ve seen my projects.
      They say I already have the skills: web development, IT support, systems building.
      And technically, they’re right.
    </p>

    <h2>The Context They Don’t See</h2>
    <p>
      What most people don’t see is the cost of getting there.
      Years of being the go-to person. Constant pressure.
      Fixing systems while building systems.
      Thinking about work long after the workday ended.
    </p>

    <p>
      Burnout doesn’t always come from working hard once.
      It comes from working hard for too long without recovery.
    </p>

    <h2>Choosing a Different Role</h2>
    <p>
      Today, I work as a <strong>Data Analyst at SixEleven BPO</strong>.
      It’s a different pace, a different type of responsibility,
      and—most importantly—a healthier workload.
    </p>

    <p>
      I chose stability, predictability, and peace.
      I chose a role where I can focus deeply without being pulled in ten directions at once.
    </p>

    <p>
      That choice wasn’t about giving up on tech.
      It was about giving myself room to breathe.
    </p>

    <h2>Why Peace Matters</h2>
    <p>
      For the first time in a long while, I’m not constantly exhausted.
      I can think clearly. I can plan. I can rest without guilt.
    </p>

    <p>
      I’ve learned that sustainability matters more than intensity.
      A career is a long game, not a sprint fueled by burnout.
    </p>

    <h2>But I Never Stopped Building</h2>
    <p>
      Even now, I still miss coding.
      I miss designing systems.
      I miss turning ideas into working products.
    </p>

    <p>
      So I didn’t quit building—I just changed how I do it.
    </p>

    <p>
      I divide my time intentionally:
    </p>
    <ul>
      <li>Working professionally in a role that supports balance</li>
      <li>Building personal web projects without external pressure</li>
      <li>Learning at my own pace, not on someone else’s deadline</li>
      <li>Coding because I enjoy it, not because everything depends on it</li>
    </ul>

    <h2>Building Without Burnout</h2>
    <p>
      Personal projects feel different.
      There’s no emergency.
      No one is waiting on a fix at midnight.
      No system breaks if I take a day off.
    </p>

    <p>
      That freedom brings back the joy of development—the curiosity,
      the experimentation, the satisfaction of shipping something small but meaningful.
    </p>

    <h2>Redefining Progress</h2>
    <p>
      Progress doesn’t always look like climbing the same ladder everyone else is on.
      Sometimes it looks like stepping sideways to regain control.
    </p>

    <p>
      I’m not behind.
      I’m not wasting my skills.
      I’m investing in longevity.
    </p>

    <h2>Looking Forward</h2>
    <p>
      I still see myself building systems.
      I still see myself shipping websites.
      I just want to do it in a way that’s sustainable.
    </p>

    <p>
      Maybe that means returning to full-time development someday.
      Maybe it means combining analysis, systems thinking, and web development in a new way.
    </p>

    <p>
      For now, I’m choosing balance—without letting go of what I love.
    </p>
  `
},
{
  id: 10,
  title: "Missing the Old Days While Building My Future",
  excerpt: "Balancing career growth with distance from home and friends, learning to reconcile nostalgia with responsibility.",
  date: "Apr 10, 2026",
  readTime: "7 min read",
  category: "Personal",
  image: "/freinds.png",
  imageType: "url",
  color: "from-indigo-500 to-purple-600",
  featured: false,
  tags: ["Reflection", "Career", "Life Lessons", "Nostalgia"],
  content: `
    <h2>The Distance Between Then and Now</h2>
    <p>
      When I think back to my student days, I miss them dearly: the laughter, the late nights, the carefree moments with friends.
      Those times felt limitless. Life was simple, and joy came in small but unforgettable doses.
    </p>

    <p>
      Now, my career has taken me far from home. The daily commute—10 to 11 hours of travel—reminds me how practical responsibilities often outweigh nostalgia.
      I work hard not just for myself, but to support my family, and to secure a future that once seemed abstract.
    </p>

    <h2>The Cost of Growth</h2>
    <p>
      With time and distance, friendships have shifted. Most of my peers are now pursuing their own paths. Outside of my coworkers, I have few close friends nearby.
      Reality hits differently when adulthood demands trade-offs: time, energy, and personal connections are all finite resources.
    </p>

    <h2>Balancing Nostalgia with Responsibility</h2>
    <p>
      It’s natural to miss those carefree days, but I’ve learned that nostalgia doesn’t mean stagnation.
      While I remember and cherish the past, I also focus on the present: building skills, managing responsibilities, and helping those I care about.
    </p>

    <h2>Lessons from Distance</h2>
    <ul>
      <li>Appreciate what you had without letting it hold you back.</li>
      <li>Distance teaches independence and resilience.</li>
      <li>Friendships evolve, and that’s part of life.</li>
      <li>Time invested in career now allows more freedom later.</li>
      <li>Family support can outweigh social convenience.</li>
    </ul>

    <h2>Finding Connection in Small Ways</h2>
    <p>
      Though I miss old friends, I nurture the connections I still have.
      I stay in touch virtually, share moments, and make the effort when possible.
      Life doesn’t stop nostalgia from existing, but it rewards proactive relationships.
    </p>

    <h2>Reconciling Reality and Dreams</h2>
    <p>
      Life isn’t just about fun or nostalgia—it’s about making choices that secure a better tomorrow.
      I work far from home, endure long hours, and face loneliness at times, but I do so with purpose.
      The old days were wonderful, but they don’t define the trajectory I’m building.
    </p>

    <h2>Final Thought</h2>
    <p>
      I miss my friends, my family, and the carefree nights—but I also recognize the value of sacrifice, responsibility, and growth.
      Nostalgia fuels motivation; it reminds me why I keep building, why I keep moving forward.
    </p>
  `
},{
  id: 11,
  title: "Reconnecting With Family Amid Career Demands",
  excerpt: "Balancing work away from home with the joy and challenges of seeing family again.",
  date: "Apr 12, 2026",
  readTime: "6 min read",
  category: "Personal",
  image: "/family.jpg",
  imageType: "url",
  color: "from-yellow-400 to-orange-500",
  featured: false,
  tags: ["Family", "Reflection", "Balance", "Life Lessons"],
  content: `
    <h2>The Long Journey Home</h2>
    <p>
      Working away from my family has been a challenge. Every visit home reminds me why the sacrifices are necessary, 
      but also how much I’ve missed being physically present for everyday moments.
    </p>

    <h2>Moments That Matter</h2>
    <p>
      Meeting my family after time apart brings a mixture of relief, joy, and reflection.
      Simple things—sharing meals, helping with small chores, talking late into the night—feel profound after being away.
      Those moments reaffirm why I work hard and why I value family connections so deeply.
    </p>

    <h2>Balancing Career and Connection</h2>
    <p>
      Career responsibilities often take me far from home. I’ve learned to schedule time intentionally for family, even when work is demanding.
      Quality matters more than quantity; every meaningful interaction is an investment in our relationship.
    </p>

    <h2>Lessons From Distance</h2>
    <ul>
      <li>Presence is more than physical—it’s about attention and engagement.</li>
      <li>Planning visits creates anticipation and appreciation.</li>
      <li>Family connections provide perspective and grounding amidst work stress.</li>
      <li>Long-distance challenges teach patience, resilience, and gratitude.</li>
      <li>Even brief reunions can recharge motivation and morale.</li>
    </ul>

    <h2>Reflections</h2>
    <p>
      Meeting family isn’t just about catching up—it’s about reconnecting with the people who shape you.
      It’s a reminder of roots, values, and the support system that enables professional growth.
      Every moment matters, and I cherish it even more knowing the effort it takes to be there.
    </p>

    <h2>Final Thought</h2>
    <p>
      Career success and family life don’t always align perfectly, but with intention, balance is possible.
      I continue to work hard, but I never underestimate the value of home, family, and the people who make all the effort worthwhile.
    </p>
  `
}



  ];

  const stats = [
    { label: "Articles Written", value: "48+", icon: BookOpen },
    { label: "Code Commits", value: "2.4k", icon: Code },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
    { label: "Projects Shipped", value: "23", icon: Sparkles }
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "MERN STACK", level: 90 },
    { name: "DJANGO", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Design Systems", level: 88 }
  ];

  const projects = [
  {
    id: 1,
    title: "TeamSphere",
    description:
      "Manage employees, automate payroll, and track attendance seamlessly. TeamSphere simplifies HR operations through smart automation, real-time analytics, and full transparency.",
    longDescription: `
      <h2>Overview</h2>
      <p>
        TeamSphere is an all-in-one employee management system built to help teams
        manage people, time, and payroll effortlessly. By automating core HR processes,
        it reduces manual work and gives organizations clearer insight into their workforce.
      </p>
      <h2>What TeamSphere Does</h2>
      <p>
        TeamSphere streamlines HR operations through smart automation, powerful analytics,
        and full transparency — enabling teams to focus on growth, innovation, and what truly matters.
      </p>
      <h2>Core Features</h2>
      <ul>
        <li><strong>Employee Records</strong> — Securely centralize employee data, including roles, departments, and performance details.</li>
        <li><strong>Attendance & Leave Tracking</strong> — Automatically monitor attendance, overbreaks, and leave requests with real-time insights.</li>
        <li><strong>Automated Payroll</strong> — Instantly generate accurate payroll based on attendance and leave data.</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>MERN STACK</li>
        <li>MUI</li>
        <li>JWT</li>
      </ul>
      <h2>Results</h2>
      <p>
        TeamSphere reduces HR overhead, improves payroll accuracy,
        and provides teams with a transparent view of employee activity and performance.
      </p>
    `,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    imageType: "url",
    color: "from-blue-500 to-indigo-600",
    tech: ["MERN STACK", "MUI", "JWT"],
    link: "https://teamsphere-lyart.vercel.app/about",
    featured: true,
  },

  {
    id: 2,
    title: "Taskly",
    description:
      "Taskly is a modern platform built to help students and employees manage their tasks efficiently with secure login, file uploads, and activity tracking.",
    longDescription: `
      <h2>Overview</h2>
      <p>
        Taskly is a modern platform that helps students and employees manage their tasks efficiently with secure login, file uploads, activity tracking, and role-based dashboards.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Secure login system with role-based access</li>
        <li>File upload and storage management</li>
        <li>Task and submission tracking</li>
        <li>Role-based dashboards for students, employees, and admins</li>
        <li>Streamlined activity monitoring</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Axios</li>
      </ul>
    `,
    image: "/taskly.png",
    imageType: "url",
    color: "from-indigo-500 to-blue-600",
    tech: ["MERN STACK", "MUI", "JWT"],
    link: "https://taskly-plum.vercel.app/about",
    featured: true,
    
  },

  {
    id: 3,
    title: "Answerly",
    description:
      "A modern platform to create interactive surveys, quizzes, and feedback forms with ease, security, and user-friendly design.",
    longDescription: `
      <h2>Overview</h2>
      <p>
        My Questionnaire App is designed to simplify surveys, quizzes, and feedback collection for individuals and organizations. With a focus on interactivity, accessibility, and security, it allows you to gather insights quickly and efficiently.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Create and customize surveys, quizzes, and feedback forms</li>
        <li>Interactive UI to engage respondents</li>
        <li>Secure and confidential data storage</li>
        <li>Real-time analytics and response tracking</li>
        <li>Role-based access for admins and contributors</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>MERN STACK</li>
        <li>MUI</li>
        <li>JWT</li>
        
      </ul>
    `,
    image: "/answerly.png",
    imageType: "url",
    color: "from-purple-500 to-pink-500",
    tech: ["MERN STACK","MUI","JWT"],
    link: "https://answerlyv1.vercel.app/about",
  },
   {
  id: 4,
  title: "NikNotes",
  description:
    "NikNotes is a modern, secure note-taking platform designed to help professionals, students, and creatives organize their thoughts, tasks, and ideas with ease.",
  longDescription: `
    <h2>Overview</h2>
    <p>
      NikNotes is a modern, secure note-taking platform designed to help professionals, students, and creatives organize their thoughts, tasks, and ideas with ease. With cloud sync, real-time collaboration, and an intuitive interface, you can focus on what matters most without distractions.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li>Cloud sync for seamless access across devices</li>
      <li>Real-time collaboration with teammates</li>
      <li>Intuitive and distraction-free interface</li>
      <li>Organize notes, tasks, and ideas efficiently</li>
      <li>Role-based access for teams and individuals</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li>NEXTJS</li>
      <li>TAILWIND CSS</li>
      <li>JWT</li>
    </ul>
  `,
  image: "/niknotes.png",
  imageType: "url",
  color: "from-purple-500 to-pink-500",
  tech: ["NEXTJS","TAILWIND CSS","JWT"],
  link: "https://niknotes.vercel.app/",
},{
  id: 5,
  title: "Personal Record Keeper",
  description:
    "A secure and intuitive app to manage personal records, files, and documents efficiently with cloud storage support.",
  longDescription: `
    <h2>Overview</h2>
    <p>
      Personal Record Keeper is a secure and intuitive application designed to help users manage their personal records, files, and documents efficiently. It allows users to upload, edit, download, and delete files while securely storing profile pictures and documents in the cloud using Cloudinary.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li>Upload and manage multiple files securely</li>
      <li>Upload and update profile pictures</li>
      <li>Edit and delete records easily</li>
      <li>Responsive and user-friendly interface</li>
      <li>Cloud storage integration with Cloudinary</li>
      <li>Built with scalability and reliability in mind</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li>MongoDB</li>
      <li>Express.js</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>Cloudinary</li>
      <li>Axios</li>
    </ul>
  `,
  image: "/personalrecordskeeper.png",
  imageType: "url",
  color: "from-purple-500 to-pink-500",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "Axios"],
  link: "https://personal-record-keeper.vercel.app/",
},{
  id: 5,
  title: "Niko Nikonik",
  description:
    "A modern web app for secure image and video management with authentication, dashboard access, and smooth media handling.",
  longDescription: `
    <h2>Overview</h2>
    <p>
      Niko Nikonik is a modern web application that allows users to securely log in,
      access a personalized dashboard, and manage their images and videos with ease.
      It focuses on simplicity, security, and smooth media handling for everyday use.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li>User authentication and secure login system</li>
      <li>Dashboard to manage uploaded media</li>
      <li>Upload, edit, and delete images and videos</li>
      <li>Secure media download functionality</li>
      <li>Responsive and user-friendly interface</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li>MongoDB</li>
      <li>Express.js</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>Cloudinary / Cloud Storage</li>
      <li>Axios</li>
      <li>Material-UI (MUI)</li>
    </ul>
  `,
  image: "/nikonik.png",
  imageType: "url",
  color: "from-indigo-500 to-cyan-500",
  tech: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Cloudinary",
    "Axios",
    "MUI",
  ],
  link: "https://niko-nikonik-rouge.vercel.app/",
}



];


  const categories = ["All", "Design", "Development", "Technology", "Personal","Career"];

  const headerOpacity = currentView === 'home' ? Math.max(0, 1 - scrollY / 300) : 0;
  const headerScale = currentView === 'home' ? Math.max(0.9, 1 - scrollY / 1000) : 0.9;

 const scrollToSection = (sectionId: string) => {
  if (currentView === 'article' || currentView === 'project') {
    setCurrentView('home');
    setSelectedArticle(null);
    setSelectedProject(null);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setIsMenuOpen(false);
};

const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
  const email = emailInput?.value ?? '';

  alert(`Thank you! Subscription request sent for: ${email}`);
  form.reset();
};

const openArticle = (article: any) => {
  setSelectedArticle(article);
  setSelectedProject(null);
  setCurrentView('article');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeArticle = () => {
  setCurrentView('home');
  setSelectedArticle(null);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const openProject = (project: any) => {
  setSelectedProject(project);
  setSelectedArticle(null);
  setCurrentView('project');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeProject = () => {
  setCurrentView('home');
  setSelectedProject(null);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleLike = (articleId: ArticleId) => {
    setLikedArticles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };


 const toggleBookmark = (articleId: ArticleId) => {
    setBookmarkedArticles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };

  const shareArticle = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const shareProject = (project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  if (showWelcome) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center welcome-bg transition-opacity duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center px-6">
          <h1
            className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-pulse-slow"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hi, welcome to my blog
          </h1>
          <p
            className="mt-6 text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            explore • create • learn
          </p>
        </div>
      </div>
    );
  }

  if (currentView === 'article' && selectedArticle) {
    return (
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-stone-50 text-zinc-900'}`}>
        <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-zinc-950/90' : 'bg-stone-50/90'} backdrop-blur-xl shadow-lg`}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <button
              onClick={closeArticle}
              className="flex items-center gap-2 font-medium hover:text-violet-500 transition-colors bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={() => shareArticle(selectedArticle)}
                className={`p-2 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                aria-label="Share article"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={() => toggleBookmark(selectedArticle.id)}
                className={`p-2 rounded-full ${bookmarkedArticles.has(selectedArticle.id) ? 'bg-violet-600 text-white' : isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                aria-label={bookmarkedArticles.has(selectedArticle.id) ? "Remove bookmark" : "Bookmark article"}
              >
                <Bookmark size={18} fill={bookmarkedArticles.has(selectedArticle.id) ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300'}`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>
        <article className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/10 text-violet-600 mb-6">
                {selectedArticle.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {selectedArticle.title}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {selectedArticle.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => toggleLike(selectedArticle.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${likedArticles.has(selectedArticle.id) ? 'bg-rose-600 text-white' : isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                >
                  <Heart size={16} fill={likedArticles.has(selectedArticle.id) ? 'currentColor' : 'none'} />
                  <span>{likedArticles.has(selectedArticle.id) ? 'Liked' : 'Like'}</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            <div className={`mt-16 pt-8 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4">
                  <button
                    onClick={() => toggleLike(selectedArticle.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${likedArticles.has(selectedArticle.id) ? 'bg-rose-600 text-white' : isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                  >
                    <Heart size={20} fill={likedArticles.has(selectedArticle.id) ? 'currentColor' : 'none'} />
                    {likedArticles.has(selectedArticle.id) ? 'Liked' : 'Like this article'}
                  </button>
                  <button
                    onClick={() => shareArticle(selectedArticle)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                  >
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                More Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(post => post.id !== selectedArticle.id && post.category === selectedArticle.category)
                  .slice(0, 2)
                  .map(post => (
                    <div
                      key={post.id}
                      onClick={() => openArticle(post)}
                      className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1`}
                    >
                      <div className={`h-32 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                        {post.imageType === 'url' ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-5xl">{post.image}</span>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 hover:text-violet-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {post.title}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} line-clamp-2`}>
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                          <span>•</span>
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </article>
        <Footer
          isDark={isDark}
          scrollToSection={scrollToSection}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    );
  }

  if (currentView === 'project' && selectedProject) {
    return (
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-stone-50 text-zinc-900'}`}>
        <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-zinc-950/90' : 'bg-stone-50/90'} backdrop-blur-xl shadow-lg`}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <button
              onClick={closeProject}
              className="flex items-center gap-2 font-medium hover:text-violet-500 transition-colors bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={() => shareProject(selectedProject)}
                className={`p-2 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-all`}
                aria-label="Share project"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300'}`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>

        <article className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-600/10 text-violet-600 mb-6">
                Project
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {selectedProject.title}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-violet-600/10 text-violet-600 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
                >
                  Visit Live Site <ArrowRight size={18} />
                </a>
              )}
            </div>

            <div
              className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: selectedProject.longDescription || selectedProject.description }}
            />

            <div className="mt-20">
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => p.id !== selectedProject.id)
                  .slice(0, 2)
                  .map((p) => (
                    <div
                      key={p.id}
                      onClick={() => openProject(p)}
                      className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1`}
                    >
                      <div className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                        {p.imageType === 'url' ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-5xl">{p.image}</span>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 hover:text-violet-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {p.title}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} line-clamp-2`}>
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </article>

        <Footer
          isDark={isDark}
          scrollToSection={scrollToSection}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-stone-50 text-zinc-900'}`}>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
      <header
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{
          opacity: headerOpacity,
          transform: `scale(${headerScale})`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-violet-600/30 shadow-2xl ring-4 ring-violet-600/10">
                <img
                  src="/pp1.png"
                  alt="Nikko MP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`${mounted ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-2"
                  style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: '#8b5cf6',
                    fontFamily: 'Outfit, sans-serif'
                  }}
                >
                  Available for freelance ✨
                </div>
              </div>
            </div>
            <h2
              className={`text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}
              style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.1s' }}
            >
              Hi, I'm Nikko 👋
            </h2>
            <p
              className={`text-xl md:text-2xl mb-8 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'} ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}
              style={{ fontFamily: 'Outfit, sans-serif', animationDelay: '0.2s' }}
            >
              A designer & developer crafting delightful digital experiences at the intersection of creativity and code.
            </p>
            <p
              className={`text-lg mb-12 leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500'} ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}
              style={{ fontFamily: 'Outfit, sans-serif', animationDelay: '0.3s' }}
            >
              I write about design, development, and the beautiful moments where they collide.
            </p>
            <div className={`flex flex-wrap gap-4 ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollToSection("articles")}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-none"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Read Latest <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-zinc-100 shadow-lg'} rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-none`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Get in Touch
              </button>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, i) => (
                <div key={i} className={`${isDark ? 'bg-zinc-900/50' : 'bg-white'} rounded-2xl p-6 text-center backdrop-blur-sm shadow-lg`}>
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-violet-600" />
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl" />
      </header>
      <div className="px-6 mb-12 sticky top-20 z-40 bg-inherit pt-4 -mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-300 cursor-pointer ${
                  cat === selectedCategory
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-105'
                    : isDark
                      ? 'bg-zinc-800 hover:bg-zinc-700'
                      : 'bg-white hover:bg-zinc-100 shadow'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedCategory === "All" && featuredPost && (
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-violet-600" size={24} />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured Article
              </h3>
            </div>
            <div
              className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => openArticle(featuredPost)}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="text-xs font-bold tracking-widest mb-4 text-violet-500 uppercase">
                    {featuredPost.category}
                  </div>
                  <h4 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {featuredPost.title}
                  </h4>
                  <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mb-8 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openArticle(featuredPost);
                    }}
                    className="self-start px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 border-none cursor-pointer"
                  >
                    Read Article <ChevronRight size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${featuredPost.color} flex items-center justify-center shadow-inner relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    {featuredPost.imageType === 'url' ? (
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="transform group-hover:scale-110 transition-transform duration-300 text-9xl">
                        {featuredPost.image}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section id="articles" className="px-6 pb-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            {selectedCategory === "All"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => selectedCategory !== "All" || !post.featured)
              .map((post, index) => (
                <article
                  key={post.id}
                  onClick={() => openArticle(post)}
                  className={`group ${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
                    {post.imageType === 'url' ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="transform group-hover:scale-110 transition-transform duration-300 text-7xl">
                        {post.image}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold tracking-widest mb-3 text-violet-500 uppercase">
                      {post.category}
                    </div>
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-violet-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {post.title}
                    </h4>
                    <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className={`px-2 py-1 rounded-full text-xs ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-4 text-zinc-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-violet-600 group-hover:text-violet-500 transition-colors">
                        <span>Read</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-zinc-500 text-lg">
              No articles found in "{selectedCategory}" yet.
            </div>
          )}
        </div>
      </section>
      <section id="about" className="px-6 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl p-10 md:p-16 shadow-2xl`}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  About Me
                </h3>
                <div className="prose max-w-none text-lg leading-relaxed space-y-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    Hi, I'm <span className="font-bold text-violet-600">Nikko</span> — a designer and developer obsessed with creating clean, intentional, and high-performance digital experiences.
                  </p>
                  <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    I love the sweet spot where beautiful design meets solid engineering. My work usually revolves around minimalism that actually means something, fast websites, accessible interfaces, and learning in public.
                  </p>
                  <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    When I'm not coding or designing, you'll find me exploring new coffee shops, reading about design systems, or tinkering with side projects that probably won't see the light of day (but I learn a ton from them anyway).
                  </p>
                  <h4 className="text-2xl font-bold mt-8 mb-4">What drives me</h4>
                  <ul className="space-y-2">
                    {[
                      "Minimalism with purpose",
                      "Performance as a feature",
                      "Accessibility by default",
                      "Sharing what I learn along the way"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ChevronRight className="text-violet-600 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-2xl font-bold mt-8 mb-4">Currently exploring</h4>
                  <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                    AI-assisted creative workflows • Next.js + Tailwind side projects • Better component systems • Trying (and failing) to reduce caffeine intake ☕
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6">Skills & Expertise</h4>
                <div className="space-y-6">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-violet-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className={`h-3 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-1000"
                          style={{
                            width: mounted ? `${skill.level}%` : '0%',
                            transitionDelay: `${i * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-violet-600/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-violet-600" size={24} />
                    <h4 className="text-xl font-bold">Awards & Recognition</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      🏆 
                    </li>
                    <li className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      ⭐ 
                    </li>
                    <li className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                      🎨 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="px-6 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Selected Projects
          </h3>
          <p className={`text-lg mb-12 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            A few things I've built that I'm proud of
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => openProject(project)}
                className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  {project.imageType === 'url' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <span className="group-hover:scale-110 transition-transform duration-500 text-8xl">
                      {project.image}
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-violet-500 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h4>
                  <p className={`mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-violet-600 font-medium hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="px-6 py-20 scroll-mt-24">
  <div className="max-w-4xl mx-auto">
    <div className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl p-10 md:p-16 shadow-2xl text-center`}>
      <h3 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
        Let's Work Together
      </h3>
      <p className={`text-xl mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        Interested in collaboration, have a question, or just want to say hi? I'd love to hear from you.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href="https://github.com/nikgitofficial"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} transition-all hover:scale-110`}
        >
          <Github size={28} />
        </a>
        <a
          href="linkedin.com/in/nikko-mp-undefined-458682298"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} transition-all hover:scale-110`}
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:nickforjobacc@gmail.com"
          className={`p-4 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} transition-all hover:scale-110`}
        >
          <Mail size={28} />
        </a>
        <a
          href="https://nikkport.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} transition-all hover:scale-110`}
        >
          🌐
        </a>
        <a
          href="tel:09514190949"
          className={`p-4 rounded-full ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} transition-all hover:scale-110`}
        >
          📞
        </a>
      </div>
      <a
        href="mailto:nickforjobacc@gmail.com?subject=Hello%20from%20your%20blog"
        className="inline-block px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Send me an email
      </a>
    </div>
  </div>
</section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className={`${isDark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Join the Newsletter
              </h3>
              <p className={`text-lg mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Get the latest articles, insights, and project updates delivered straight to your inbox. No spam, just quality content.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className={`flex-1 px-6 py-4 rounded-full ${isDark ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-100 border-zinc-200'} border focus:outline-none focus:ring-2 focus:ring-violet-600`}
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer border-none"
                >
                  Subscribe
                </button>
              </form>
              <p className={`text-xs mt-4 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                Join 2,500+ designers and developers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer
        isDark={isDark}
        scrollToSection={scrollToSection}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default PersonalBlog;