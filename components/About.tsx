'use client';

import { User, Award, Clock, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: User, label: 'Happy Clients', value: '30+' },
    { icon: Heart, label: 'Lines of Code', value: '100k+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full stack developer with expertise in modern web technologies and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a dedicated full stack developer with a passion for creating innovative web applications 
                and intelligent AI solutions. With expertise spanning the entire development stack, I specialize 
                in building scalable, user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in software development has led me to master various technologies including the 
                MERN and MEAN stacks, React Native for mobile development, and modern cloud platforms like 
                Firebase and Supabase. I'm particularly excited about the potential of AI agents and have 
                been actively developing intelligent automation solutions.
              </p>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to 
                open-source projects, and mentoring aspiring developers. I believe in writing clean, 
                maintainable code and creating exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}