
import React from 'react';
import { useReveal } from '../utils/animations';

const Blog = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useReveal();
  
  const articles = [
    {
      title: 'Building Intelligent Systems with Modern AI Techniques',
      excerpt: 'A deep dive into how to structure AI systems that can adapt and learn from user interactions.',
      date: 'Oct 15, 2023',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
      categories: ['AI', 'Machine Learning'],
    },
    {
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Practical techniques to make your React applications faster, more responsive, and user-friendly.',
      date: 'Sep 28, 2023',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000&auto=format&fit=crop',
      categories: ['React', 'Performance'],
    },
    {
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt: 'Exploring upcoming trends, technologies, and paradigms that will shape web development.',
      date: 'Aug 12, 2023',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop',
      categories: ['Web Dev', 'Trends'],
    },
  ];

  const renderCodeSnippet = () => {
    return (
      <div className="bg-secondary/80 rounded-xl p-6 font-mono text-sm overflow-x-auto border border-border/50">
        <pre className="text-foreground/90">
          <code>
{`// Example of a React hook for data fetching
function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);

  return { data, loading, error };
}`}
          </code>
        </pre>
      </div>
    );
  };

  return (
    <section id="blog" className="py-20 bg-background relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div 
        ref={sectionRef}
        className={`container max-w-6xl mx-auto px-6 ${
          sectionVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Insights</h2>
          <div className="h-1 w-20 bg-primary/80 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Explore articles about AI, web development, and technology innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => {
            const { ref, isVisible } = useReveal(0.2);
            return (
              <div 
                key={index}
                ref={ref}
                className={`${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-secondary/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center text-xs text-foreground/80 mb-2">
                        <span>{article.date}</span>
                        <span>{article.readTime} read</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex} 
                            className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{article.title}</h3>
                    <p className="text-foreground/70 mb-5 flex-grow">{article.excerpt}</p>
                    
                    <button 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Article
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary/30 backdrop-blur-sm border border-border/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Code Snippets</h3>
            <p className="text-foreground/70 mb-6">
              Useful code patterns and solutions to common development challenges.
            </p>
            {renderCodeSnippet()}
          </div>
          
          <div className="bg-secondary/30 backdrop-blur-sm border border-border/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Latest Technologies</h3>
            <p className="text-foreground/70 mb-6">
              I'm constantly learning and experimenting with new technologies. Here are some I'm currently exploring:
            </p>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Next.js 13</span>
                  <p className="text-sm text-foreground/70 mt-1">Exploring the App Router and React Server Components</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Three.js & React Three Fiber</span>
                  <p className="text-sm text-foreground/70 mt-1">Creating immersive 3D experiences on the web</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg">Large Language Models</span>
                  <p className="text-sm text-foreground/70 mt-1">Implementing custom solutions with GPT and LLM APIs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
