
import React from 'react';
import { useReveal } from '../utils/animations';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useReveal();
  const { ref: skillsRef, isVisible: skillsVisible } = useReveal();
  
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'TensorFlow', level: 70 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'Next.js', level: 85 },
    { name: 'GraphQL', level: 75 },
    { name: 'MongoDB', level: 70 },
  ];
  
  const timeline = [
    {
      year: '2023',
      title: 'Lead Developer',
      company: 'AI Solutions Inc.',
      description: 'Leading a team of developers building next-gen AI applications.',
    },
    {
      year: '2021',
      title: 'Senior Developer',
      company: 'Tech Innovations Ltd.',
      description: 'Architected and developed full-stack applications using React and Node.js.',
    },
    {
      year: '2019',
      title: 'Full Stack Developer',
      company: 'Digital Frontiers',
      description: 'Built responsive web applications and RESTful APIs.',
    },
    {
      year: '2018',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      description: 'Started my journey developing front-end interfaces with React.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 ${
          sectionVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6 leading-relaxed text-foreground/80">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer and AI Engineer</span> with a 
              focus on creating intuitive and high-performance applications. With over 5 years of 
              experience in software development, I specialize in building robust solutions that leverage 
              the latest technologies.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-foreground/80">
              My journey in tech began with a deep curiosity about how things work in the digital world. 
              This led me to explore various programming languages and frameworks, eventually finding my 
              passion in creating seamless user experiences backed by powerful backend systems.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-foreground/80">
              I'm particularly interested in <span className="text-accent font-semibold">AI and machine learning</span>, and how these 
              technologies can be integrated into everyday applications to create more intelligent and 
              responsive user experiences.
            </p>
          </div>
          
          <div 
            ref={timelineRef}
            className={`${timelineVisible ? 'animate-fade-left' : 'opacity-0'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Professional Journey</h3>
            <div className="relative border-l border-primary/30 pl-8 space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-background"></div>
                  <time className="text-sm font-mono text-primary">{item.year}</time>
                  <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                  <p className="text-foreground/70 italic">{item.company}</p>
                  <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          ref={skillsRef}
          className={`mt-16 ${skillsVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/90">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: skillsVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
