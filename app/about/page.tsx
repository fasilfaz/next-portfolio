'use client';

import { useEffect, useState, useRef } from 'react';
import { User, Award, Clock, Heart, MapPin, Calendar, GraduationCap, Code, Coffee, Rocket, Target, Lightbulb, Users } from 'lucide-react';
import AboutHero from '@/components/AboutHero';
import Clients from '../clients/page';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<string, number>>({ experience: 0, projects: 0, clients: 0, lines: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { icon: Clock, label: 'Years Experience', value: 5, suffix: '+', key: 'experience' as const },
    { icon: Award, label: 'Projects Completed', value: 50, suffix: '+', key: 'projects' as const },
    { icon: User, label: 'Happy Clients', value: 30, suffix: '+', key: 'clients' as const },
    { icon: Code, label: 'Lines of Code', value: 100, suffix: 'k+', key: 'lines' as const },
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Your City, Country' },
    { icon: Calendar, label: 'Age', value: '28 Years' },
    { icon: GraduationCap, label: 'Education', value: 'Computer Science Degree' },
    { icon: Coffee, label: 'Status', value: 'Always Coding' },
  ];

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 88 },
    { name: 'Python/AI', level: 85 },
    { name: 'Database Design', level: 82 },
    { name: 'Cloud Platforms', level: 80 },
  ];

  const missions = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Delivering high-quality, scalable solutions that exceed expectations and stand the test of time.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Building strong partnerships with clients to understand their needs and deliver tailored solutions.',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying at the forefront of technology trends, especially in AI and automation solutions.',
      color: 'purple'
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const initialCounters: Record<string, number> = stats.reduce((acc, stat) => {
        acc[stat.key] = 0;
        return acc;
      }, {} as Record<string, number>);

      const interval = setInterval(() => {
        setCounters(prevCounters => {
          const newCounters = { ...prevCounters };
          let allComplete = true;

          stats.forEach(stat => {
            if (newCounters[stat.key] < stat.value) {
              newCounters[stat.key] = Math.min(
                newCounters[stat.key] + Math.ceil(stat.value / steps),
                stat.value
              );
              allComplete = false;
            }
          });

          if (allComplete) {
            clearInterval(interval);
          }

          return newCounters;
        });
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 pt-20" ref={sectionRef}>
      <AboutHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
              Get to know me
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A passionate full stack developer crafting innovative solutions with modern technologies and AI
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.4s_forwards]">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Rocket className="h-6 w-6 text-indigo-600 mr-3" />
                  My Journey
                </h2>
                <div className="prose prose-lg text-slate-600 space-y-6">
                  <p>
                    I'm a dedicated full stack developer with a passion for creating innovative web applications 
                    and intelligent AI solutions. My journey began with curiosity about how things work, which 
                    evolved into a deep love for building digital experiences that make a difference.
                  </p>
                  <p>
                    With expertise spanning the entire development stack, I specialize in the MERN ecosystem, 
                    React Native for mobile development, and cutting-edge AI technologies. I'm particularly 
                    excited about the potential of AI agents and have been actively developing intelligent 
                    automation solutions that bridge the gap between human creativity and machine efficiency.
                  </p>
                  <p>
                    Beyond coding, I'm committed to continuous learning, mentoring aspiring developers, and 
                    contributing to the open-source community. I believe in writing clean, maintainable code 
                    and creating exceptional user experiences that users love.
                  </p>
                </div>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.6s_forwards]">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">What Drives Me</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { text: 'Problem Solver', emoji: '🧩' },
                    { text: 'Team Player', emoji: '🤝' },
                    { text: 'AI Enthusiast', emoji: '🤖' },
                    { text: 'Continuous Learner', emoji: '📚' },
                    { text: 'Coffee Lover', emoji: '☕' },
                    { text: 'Open Source', emoji: '🌐' }
                  ].map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 cursor-default"
                    >
                      {trait.emoji} {trait.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-8">
            
            {/* Animated Stats */}
            <div className="opacity-0 animate-[fadeInRight_0.8s_ease-out_0.4s_forwards]">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {counters[stat.key]}{stat.suffix}
                    </div>
                    <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="opacity-0 animate-[fadeInRight_0.8s_ease-out_0.6s_forwards]">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-indigo-600 mr-3" />
                  Personal Info
                </h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <info.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-medium text-slate-700">{info.label}:</span>
                        <span className="text-slate-600 font-medium">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="opacity-0 animate-[fadeInRight_0.8s_ease-out_0.8s_forwards]">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Code className="h-6 w-6 text-indigo-600 mr-3" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Mission</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Driven by three core principles that guide every project and collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {missions.map((mission, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-20 h-20 ${getColorClasses(mission.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <mission.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{mission.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Clients/>
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
      `}</style>
    </div>
  );
}