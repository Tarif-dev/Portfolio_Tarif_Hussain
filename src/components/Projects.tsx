
import React, { useState } from 'react';
import { useReveal } from '../utils/animations';

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useReveal();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'AI-Powered Personal Assistant',
      description: 'An intelligent personal assistant that uses natural language processing to help users manage their tasks, schedule, and information.',
      thumbnail: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1000&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'TensorFlow', 'NLP'],
      problem: 'Creating a responsive and accurate AI assistant that understands natural language queries and provides helpful responses.',
      solution: 'Implemented a custom NLP model trained on diverse conversational data, with a React frontend for seamless user interaction.',
      impact: 'Reduced task management time by 35% for users while increasing productivity through intelligent automation.',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, user authentication, shopping cart, and payment processing.',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Redux'],
      problem: 'Building a scalable e-commerce solution that handles large product catalogs and high transaction volumes.',
      solution: 'Developed a Next.js application with server-side rendering for SEO, MongoDB for flexible data storage, and Stripe for secure payments.',
      impact: 'Platform processes over 10,000 transactions monthly with 99.9% uptime and sub-second page load times.',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets through customizable charts, graphs, and filters.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      tags: ['D3.js', 'React', 'Node.js', 'PostgreSQL'],
      problem: 'Making complex data accessible and understandable through intuitive visual representations.',
      solution: 'Created a modular dashboard with D3.js visualizations, React components for UI, and a Node.js backend for data processing.',
      impact: 'Helped clients reduce data analysis time by 60% and identify key trends that were previously overlooked.',
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology to ensure tamper-proof election results.',
      thumbnail: 'https://images.unsplash.com/photo-1639322537231-2f206f0da556?q=80&w=1000&auto=format&fit=crop',
      tags: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
      problem: 'Addressing concerns about election security and transparency through immutable record-keeping.',
      solution: 'Implemented Ethereum smart contracts for vote recording with a React frontend for voter interaction.',
      impact: 'Successfully deployed in a university election with 5,000+ voters, ensuring complete transparency and no disputes.',
    },
  ];

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 ${
          sectionVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <h2 className="section-heading text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => {
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
                <div 
                  className={`glass-card rounded-lg overflow-hidden transition-all duration-300 card-hover h-full ${
                    activeProject === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs font-mono px-2 py-1 rounded-full bg-primary/20 text-primary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    
                    <button 
                      onClick={() => toggleProject(index)} 
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      {activeProject === index ? 'Show Less' : 'View Details'}
                      <svg 
                        className={`ml-1 transition-transform duration-300 ${
                          activeProject === index ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    
                    <div 
                      className={`mt-4 space-y-3 overflow-hidden transition-all duration-500 ${
                        activeProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div>
                        <h4 className="font-medium text-primary">Problem</h4>
                        <p className="text-sm text-foreground/70">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Solution</h4>
                        <p className="text-sm text-foreground/70">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Impact</h4>
                        <p className="text-sm text-foreground/70">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
