
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Cursor from '../components/Cursor';

const Index = () => {
  useEffect(() => {
    // Add font links to head
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(linkElement);
    
    // Add favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>';
    document.head.appendChild(favicon);
    
    // Update page title
    document.title = 'John Doe | Full Stack Developer & AI Engineer';
    
    return () => {
      // Clean up
      document.head.removeChild(linkElement);
      document.head.removeChild(favicon);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      
      <footer className="bg-background py-8 relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Designed and developed with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
