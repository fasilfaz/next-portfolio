
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Bot, ArrowRight, Terminal, Code, Coffee, Zap } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert', 
    'React Native Dev',
    'AI Agent Creator',
    'Firebase Specialist'
  ];

  const terminalCommands = [
    { command: 'whoami', output: 'passionate_developer' },
    { command: 'ls skills/', output: 'React  Node.js  Python  TypeScript  MongoDB' },
    { command: 'cat experience.txt', output: '5+ years building amazing products' },
    { command: 'npm run create-magic', output: '✨ Building something awesome...' }
  ];

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const currentCmd = terminalCommands[currentCommand];
    const fullText = `$ ${currentCmd.command}\n${currentCmd.output}`;
    let index = 0;
    
    setTerminalText('');
    
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % terminalCommands.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentCommand]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const stats = [
    { icon: Code, label: 'Projects', value: '50+' },
    { icon: Coffee, label: 'Coffee Cups', value: '∞' },
    { icon: Zap, label: 'Years Exp', value: '5+' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 ">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              {/* Greeting with slide-in animation */}
              <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                <p className="text-lg text-indigo-600 font-medium mb-2">Hello World! 👋</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x">Fasil M</span>
                </h1>
              </div>
              
              {/* Dynamic role with enhanced animation */}
              <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] h-16 flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <span className="text-2xl sm:text-3xl text-slate-600 font-semibold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 ease-in-out transform">
                      {roles[currentRole]}
                    </span>
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left scale-x-0 animate-[scaleX_0.5s_ease-out_forwards]"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about crafting scalable web applications, mobile experiences, and intelligent AI agents. 
                Specialized in modern tech stack with a focus on performance and user experience.
              </p>
            </div>

            {/* Stats */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <div className="flex justify-center lg:justify-start space-x-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://github.com/your-username" // ❗️ Replace with your GitHub URL
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/your-username" // ❗️ Replace with your LinkedIn URL
                  className="group inline-flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:your-email@example.com" // ❗️ Replace with your email
                  className="group inline-flex items-center space-x-2 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* AI Badge */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full border border-purple-200">
                <Bot className="h-5 w-5 text-purple-600 animate-pulse" />
                <span className="text-purple-700 font-medium text-sm">AI Agent Development Specialist</span>
              </div>
            </div>

            {/* View Work Link */}
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards] pt-4">
              <a
                href="/projects"
                className="group inline-flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="opacity-0 animate-[fadeInRight_1s_ease-out_0.6s_forwards] lg:justify-self-end">
            <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden max-w-md w-full mx-auto border border-slate-700">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2 border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Terminal className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm font-medium">terminal</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 h-48 font-mono text-sm bg-slate-900">
                <div className="text-green-400">
                  <div className="text-slate-400 mb-2">Welcome to my portfolio terminal</div>
                  <div className="min-h-[80px]">
                    <pre className="text-green-400 whitespace-pre-wrap">
                      {terminalText}
                      {showCursor && <span className="bg-green-400 text-slate-900">_</span>}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'AWS'].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 bg-white/80 backdrop-blur-sm text-slate-700 text-sm rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-out_${1.6 + index * 0.1}s_forwards] opacity-0`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToBottom}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]"
        >
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
            <ChevronDown className="h-6 w-6 text-slate-600" />
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}