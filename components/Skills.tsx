'use client';

import { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Cloud, Bot, Server, Star, TrendingUp, Award, Zap } from 'lucide-react';
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  type SkillCategory = keyof typeof skillCategories;

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimateSkills(false);
    const timer = setTimeout(() => setAnimateSkills(true), 200);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      subtitle: 'Crafting Beautiful User Experiences',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'React', level: 95, trending: true },
        { name: 'Next.js', level: 90, trending: true },
        { name: 'TypeScript', level: 85, trending: false },
        { name: 'Tailwind CSS', level: 90, trending: true },
        { name: 'JavaScript', level: 95, trending: false },
        { name: 'HTML/CSS', level: 95, trending: false },
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      subtitle: 'Building Robust Server Solutions',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      skills: [
        { name: 'Node.js', level: 90, trending: true },
        { name: 'Express.js', level: 85, trending: false },
        { name: 'Python', level: 80, trending: true },
        { name: 'REST APIs', level: 90, trending: false },
        { name: 'GraphQL', level: 75, trending: true },
        // { name: 'Microservices', level: 80, trending: true },
      ]
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      subtitle: 'Cross-Platform Mobile Excellence',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'React Native', level: 85, trending: true },
        { name: 'Expo', level: 80, trending: true },
        { name: 'Mobile UI/UX', level: 85, trending: false },
        { name: 'App Store Deploy', level: 80, trending: false },
        { name: 'Push Notifications', level: 75, trending: false },
        // { name: 'Offline Storage', level: 80, trending: false },
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Cloud',
      subtitle: 'Scalable Data Solutions',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'MongoDB', level: 90, trending: false },
        { name: 'PostgreSQL', level: 85, trending: false },
        { name: 'Firebase', level: 90, trending: true },
        { name: 'Supabase', level: 85, trending: true },
        { name: 'AWS', level: 70, trending: true },
        { name: 'Docker', level: 80, trending: true },
      ]
    },
    ai: {
      icon: Bot,
      title: 'AI & Automation',
      subtitle: 'Next-Gen Intelligent Solutions',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      skills: [
        { name: 'AI Agents', level: 85, trending: true },
        // { name: 'LangChain', level: 80, trending: true },
        { name: 'OpenAI API', level: 85, trending: true },
        { name: 'Automation', level: 90, trending: true },
        { name: 'Chatbots', level: 85, trending: true },
        // { name: 'ML Integration', level: 75, trending: true },
      ]
    }
  };

  const getSkillLevelText = (level : any) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelIcon = (level : any) => {
    if (level >= 90) return Award;
    if (level >= 80) return Star;
    if (level >= 70) return TrendingUp;
    return Zap;
  };

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills across the full development stack and emerging AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-3">
              {Object.entries(skillCategories).map(([key, category], index) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
                  className={`w-full group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-blue-500/25`
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeCategory === key 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : `${category.bgColor}`
                    }`}>
                      <category.icon className={`h-6 w-6 ${
                        activeCategory === key ? 'text-white' : 'text-gray-700'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                      <p className={`text-sm ${
                        activeCategory === key ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Category Header */}
              <div className={`flex items-center justify-between mb-8 p-6 rounded-2xl bg-gradient-to-r ${currentCategory.color}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <currentCategory.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {currentCategory.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {currentCategory.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-sm">Skills</div>
                  <div className="text-2xl font-bold text-white">
                    {currentCategory.skills.length}
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-6">
                {currentCategory.skills.map((skill, index) => {
                  const LevelIcon = getSkillLevelIcon(skill.level);
                  return (
                    <div
                      key={index}
                      className={`group p-6 bg-gray-50 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100 ${
                        animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${currentCategory.color}`}>
                            <LevelIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 text-lg">{skill.name}</span>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm text-gray-500">
                                {getSkillLevelText(skill.level)}
                              </span>
                              {skill.trending && (
                                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                  <TrendingUp className="h-3 w-3" />
                                  <span>Trending</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: animateSkills ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100 + 200}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Technologies', value: '25+', icon: Code },
            { label: 'Years Experience', value: '2+', icon: Award },
            { label: 'Projects Completed', value: '30+', icon: Star },
            { label: 'Skill Categories', value: '5', icon: TrendingUp },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}