'use client';

import { User, Award, Clock, Heart, Code, Sparkles, Zap, Target, Lightbulb, Rocket, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { 
      icon: Clock, 
      label: 'Years Experience', 
      value: '2+',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description: 'Years of coding excellence'
    },
    { 
      icon: Award, 
      label: 'Projects Completed', 
      value: '30+',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      description: 'Successful deployments'
    },
    { 
      icon: User, 
      label: 'Happy Clients', 
      value: '5+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      description: 'Satisfied customers'
    },
    { 
      icon: Heart, 
      label: 'Lines of Code', 
      value: '100k+',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      description: 'Written with passion'
    },
  ];

  const storyCards = [
    {
      icon: Rocket,
      title: "The Journey Begins",
      content: "I'm a dedicated full stack developer with a passion for creating innovative web applications and intelligent AI solutions. With expertise spanning the entire development stack, I specialize in building scalable, user-friendly applications that solve real-world problems.",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: Brain,
      title: "Technical Mastery",
      content: "My journey in software development has led me to master various technologies including the MERN and MEAN stacks, React Native for mobile development, and modern cloud platforms like Firebase and Supabase. I'm particularly excited about the potential of AI agents and have been actively developing intelligent automation solutions.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Lightbulb,
      title: "Beyond Code",
      content: "When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers. I believe in writing clean, maintainable code and creating exceptional user experiences.",
      gradient: "from-orange-500 to-pink-600",
      bgGradient: "from-orange-50 to-pink-50"
    }
  ];
type ColorVariant = 'blue' | 'green' | 'purple' | 'orange';

interface Skill {
  name: string;
  icon: any; // Replace with the actual type of the icon
  color: ColorVariant;
}
  const skills: Skill[] = [
    { name: 'Problem Solver', icon: Target, color: 'blue' },
    { name: 'Team Player', icon: User, color: 'green' },
    { name: 'AI Enthusiast', icon: Sparkles, color: 'purple' },
    { name: 'Continuous Learner', icon: Zap, color: 'orange' },
  ];

  const colorVariants = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
    green: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
    orange: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-purple-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-emerald-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-orange-200 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 animate-pulse">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate full stack developer with expertise in modern web technologies and AI solutions
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Cards Section */}
          <div className="space-y-8">
            {/* Story Cards */}
            <div className="space-y-6">
              {storyCards.map((card, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                    hoveredCard === index ? 'scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  {/* Floating icon background */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-all duration-500">
                    <card.icon className="h-24 w-24 text-gray-400" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-br ${card.gradient} p-3 rounded-xl mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <card.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {card.content}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-6 flex items-center space-x-2">
                      {storyCards.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === index 
                              ? `w-8 bg-gradient-to-r ${card.gradient}` 
                              : 'w-2 bg-gray-300'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} 
                       style={{ padding: '2px', background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box` }}>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                Core Strengths
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${colorVariants[skill.color]} px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex items-center justify-center space-x-2`}
                  >
                    <skill.icon className="h-4 w-4" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Professional Journey
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${stat.bgColor} p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group relative overflow-hidden`}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    {/* Animated background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl inline-flex mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2 transform transition-all duration-300 group-hover:scale-105">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm font-medium mb-1">
                        {stat.label}
                      </div>
                      <div className={`text-xs text-gray-500 transition-all duration-300 ${hoveredStat === index ? 'opacity-100' : 'opacity-0'}`}>
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
             
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-blue-100 mb-6">
                Let's collaborate on your next project and bring your ideas to life with cutting-edge technology.
              </p>
               <Link href="/contact" >
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg transform hover:scale-105">
                Get In Touch
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}