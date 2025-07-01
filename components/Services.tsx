import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Bot, Database, Cloud, Users, ArrowRight, Sparkles } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Crafting pixel-perfect, lightning-fast web experiences that captivate users and drive conversions.",
      features: ["React/Next.js", "Responsive Design", "Performance Optimization", "SEO Friendly"],
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      hoverColor: "hover:border-emerald-300"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      description: "Building intuitive mobile experiences that users love, from concept to app store success.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      hoverColor: "hover:border-blue-300"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Agent Development",
      description: "Transforming businesses with intelligent automation and cutting-edge AI solutions.",
      features: ["Chatbot Development", "Machine Learning", "Natural Language Processing", "API Integration"],
      color: "from-purple-400 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      hoverColor: "hover:border-purple-300"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design",
      description: "Architecting robust, scalable data solutions that grow with your business needs.",
      features: ["SQL/NoSQL Design", "Performance Tuning", "Data Migration", "Backup Strategies"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      hoverColor: "hover:border-orange-300"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions",
      description: "Deploying scalable, secure cloud infrastructure that powers modern applications.",
      features: ["AWS/Azure/GCP", "DevOps", "Containerization", "Serverless Architecture"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      hoverColor: "hover:border-cyan-300"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Technical Consulting",
      description: "Strategic technology guidance to accelerate your digital transformation journey.",
      features: ["Architecture Review", "Technology Strategy", "Code Auditing", "Team Training"],
      color: "from-pink-400 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      hoverColor: "hover:border-pink-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl animate-ping" style={{animationDuration: '8s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-6">
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-bounce" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-500">
                My Services
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transforming ambitious ideas into extraordinary digital experiences. 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> Let's build something amazing together.</span>
            </p>
            <div className="flex justify-center">
              <div className="animate-bounce">
                <ArrowRight className="w-6 h-6 text-purple-500 transform rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/30 ${service.hoverColor} hover:-translate-y-3 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  background: hoveredCard === index ? `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))` : undefined
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10`}></div>
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {service.icon}
                  </div>

                  {/* Title with gradient hover effect */}
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text  transition-all duration-500`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features with animated bullets */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-600 group-hover:text-gray-700 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-4 group-hover:scale-150 transition-all duration-300`}></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover overlay with subtle pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-30 transition-all duration-500 -z-5`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-12 sm:p-16 shadow-2xl border border-white/30 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Ready to Create Magic?
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Let's transform your vision into reality with innovative solutions that exceed expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button className="group px-10 py-5 bg-white/80 text-gray-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:bg-white hover:text-purple-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    View My Work
                    <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin transition-all duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;