import React, { useEffect, useRef, useState } from 'react';

// Custom hooks
const useTypewriter = (text: string, speed = 100, delay = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1)); // Ensures no missing characters
        setIndex(index + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return { displayText };
};

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const decorationRef = useRef(null);

  const { displayText: nameText } = useTypewriter('TARIF HUSSAIN', 100, 500);
  const { displayText: roleText } = useTypewriter('Full Stack Developer & AI Engineer', 50, 1500);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(${50 + Math.random() * 150}, ${100 + Math.random() * 100}, ${200 + Math.random() * 55}, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = []; // Reset array before adding new particles
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.length = 0; // Clear particles properly
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Particle Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />

      {/* Decoration Elements */}
      <div ref={decorationRef} className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div ref={decorationRef} className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <p ref={subtitleRef} className="text-primary font-mono mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>

          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-4">
            <span className="typing-container">{nameText}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-foreground/70 font-light mb-8">
            <span className="typing-container">{roleText}</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '3s' }}>
            <button onClick={() => scrollToElement('projects')} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollToElement('contact')} className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>


      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToElement('about')} aria-label="Scroll down" className="text-foreground/50 hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
