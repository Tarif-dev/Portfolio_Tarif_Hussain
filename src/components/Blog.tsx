
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
      title: 'The Future of Web Development: What's Coming in 2024',
      excerpt: 'Exploring upcoming trends, technologies, and paradigms that will shape web development.',
      date: 'Aug 12, 2023',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop',
      categories: ['Web Dev', 'Trends'],
    },
  ];

  const renderCodeSnippet = () => {
    return (
      <div className="bg-secondary/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
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
        className={`container mx-auto px-6 ${
          sectionVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <h2 className="section-heading text-center">Technical Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 card-hover h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center text-xs text-foreground/70 mb-2">
                        <span>{article.date}</span>
                        <span>{article.readTime} read</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex} 
                            className="text-xs font-mono px-2 py-1 rounded-full bg-primary/20 text-primary-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-foreground/70 mb-4">{article.excerpt}</p>
                    
                    <button 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Code Snippets</h3>
              <p className="text-foreground/70 mb-6">
                Useful code patterns and solutions to common development challenges.
              </p>
              {renderCodeSnippet()}
            </div>
            
            <div className="glass-card rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Latest Technologies</h3>
              <p className="text-foreground/70 mb-6">
                I'm constantly learning and experimenting with new technologies. Here are some I'm currently exploring:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <div>
                    <span className="font-medium">Next.js 13</span>
                    <p className="text-sm text-foreground/70">Exploring the App Router and React Server Components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <div>
                    <span className="font-medium">Three.js & React Three Fiber</span>
                    <p className="text-sm text-foreground/70">Creating immersive 3D experiences on the web</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <div>
                    <span className="font-medium">Large Language Models</span>
                    <p className="text-sm text-foreground/70">Implementing custom solutions with GPT and LLM APIs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
