'use client';

import { useState } from 'react';
import { Code, Database, Smartphone, Cloud, Bot, Server, Palette, Shield } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive user interfaces',
      skills: [
        { name: 'React', level: 95, experience: '4+ years' },
        { name: 'Next.js', level: 90, experience: '3+ years' },
        { name: 'TypeScript', level: 85, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '2+ years' },
        { name: 'JavaScript', level: 95, experience: '5+ years' },
        { name: 'HTML/CSS', level: 95, experience: '5+ years' },
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      skills: [
        { name: 'Node.js', level: 90, experience: '4+ years' },
        { name: 'Express.js', level: 85, experience: '4+ years' },
        { name: 'Python', level: 80, experience: '2+ years' },
        { name: 'REST APIs', level: 90, experience: '4+ years' },
        { name: 'GraphQL', level: 75, experience: '2+ years' },
        { name: 'Microservices', level: 80, experience: '2+ years' },
      ]
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      skills: [
        { name: 'React Native', level: 85, experience: '3+ years' },
        { name: 'Expo', level: 80, experience: '2+ years' },
        { name: 'Mobile UI/UX', level: 85, experience: '3+ years' },
        { name: 'App Store Deploy', level: 80, experience: '2+ years' },
        { name: 'Push Notifications', level: 75, experience: '2+ years' },
        { name: 'Offline Storage', level: 80, experience: '2+ years' },
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Cloud',
      description: 'Data management and cloud infrastructure',
      skills: [
        { name: 'MongoDB', level: 90, experience: '4+ years' },
        { name: 'PostgreSQL', level: 85, experience: '3+ years' },
        { name: 'Firebase', level: 90, experience: '3+ years' },
        { name: 'Supabase', level: 85, experience: '2+ years' },
        { name: 'AWS', level: 75, experience: '2+ years' },
        { name: 'Docker', level: 80, experience: '2+ years' },
      ]
    },
    ai: {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent systems and automation',
      skills: [
        { name: 'AI Agents', level: 85, experience: '1+ years' },
        { name: 'LangChain', level: 80, experience: '1+ years' },
        { name: 'OpenAI API', level: 85, experience: '1+ years' },
        { name: 'Automation', level: 90, experience: '3+ years' },
        { name: 'Chatbots', level: 85, experience: '2+ years' },
        { name: 'ML Integration', level: 75, experience: '1+ years' },
      ]
    },
    design: {
      icon: Palette,
      title: 'Design & UX',
      description: 'User experience and visual design',
      skills: [
        { name: 'UI/UX Design', level: 80, experience: '3+ years' },
        { name: 'Figma', level: 75, experience: '2+ years' },
        { name: 'Responsive Design', level: 90, experience: '4+ years' },
        { name: 'Accessibility', level: 80, experience: '2+ years' },
        { name: 'Design Systems', level: 75, experience: '2+ years' },
        { name: 'Prototyping', level: 70, experience: '2+ years' },
      ]
    }
  };

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Slack', 'Jira', 'Notion', 'Chrome DevTools', 'Terminal'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills across the full development stack and emerging AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-lg text-left transition-all duration-200 ${
                    activeCategory === key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <div>
                    <div className="font-medium">{category.title}</div>
                    <div className={`text-xs ${activeCategory === key ? 'text-blue-100' : 'text-gray-500'}`}>
                      {category.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="h-8 w-8 text-blue-600" />;
                })()}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                  <p className="text-gray-600">
                    {skillCategories[activeCategory as keyof typeof skillCategories].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={index} className="space-y-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-blue-600">{skill.level}%</div>
                        <div className="text-xs text-gray-500">{skill.experience}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full font-medium hover:shadow-md transition-shadow duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}