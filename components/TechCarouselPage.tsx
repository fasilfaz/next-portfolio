import React from "react";
import { 
  FaCogs, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaPaintBrush, 
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaRobot,
  FaTools,
  FaNodeJs,
} from "react-icons/fa";
import { 
  SiNextdotjs, SiVuedotjs, SiAngular, SiTypescript, 
  SiTailwindcss, SiSharp, SiGo, SiMongodb, SiPostgresql,
  SiMysql, SiRedis, SiFirebase, SiElasticsearch, SiAmazon, 
  SiDocker, SiKubernetes, SiJenkins, SiTerraform, 
  SiReact, SiFlutter, SiApple, SiAndroid, SiIonic,  
  SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiPandas, SiNumpy, 
} from "react-icons/si";
import { TbBrandXamarin } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

const TechCarouselPage = () => {
  // Organize technologies into rows for the carousel
  const techRows = [
    // Row 1 - Frontend (Left to Right)
    [
      { name: "React", icon: <RiReactjsFill className="w-8 h-8 text-blue-500" />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "#000000" },
      { name: "Vue.js", icon: <SiVuedotjs className="w-8 h-8 text-green-500" />, color: "#4FC08D" },
      { name: "Angular", icon: <SiAngular className="w-8 h-8 text-red-500" />, color: "#DD0031" },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-600" />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-teal-500" />, color: "#06B6D4" },
      { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-500" />, color: "#339933" },
      { name: "Python", icon: <FaPython className="w-8 h-8 text-yellow-500" />, color: "#3776AB" },
      { name: "Java", icon: <FaJava className="w-8 h-8 text-orange-500" />, color: "#ED8B00" },
      { name: "PHP", icon: <FaPhp className="w-8 h-8 text-purple-500" />, color: "#777BB4" },
      { name: "C#", icon: <SiSharp className="w-8 h-8 text-purple-600" />, color: "#239120" },
      { name: "Go", icon: <SiGo className="w-8 h-8 text-blue-500" />, color: "#00ADD8" },
    ],
    // Row 2 - Backend (Right to Left)
    [
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-600" />, color: "#336791" },
      { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-orange-500" />, color: "#4479A1" },
      { name: "Redis", icon: <SiRedis className="w-8 h-8 text-red-500" />, color: "#DC382D" },
      { name: "Firebase", icon: <SiFirebase className="w-8 h-8 text-yellow-500" />, color: "#FFCA28" },
      { name: "Elasticsearch", icon: <SiElasticsearch className="w-8 h-8 text-yellow-600" />, color: "#005571" },
       { name: "AWS", icon: <SiAmazon className="w-8 h-8 text-orange-500" />, color: "#FF9900" },
      { name: "Azure", icon: <FaAws className="w-8 h-8 text-blue-500" />, color: "#0078D4" },
      { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-600" />, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 text-blue-700" />, color: "#326CE5" },
      { name: "Jenkins", icon: <SiJenkins className="w-8 h-8 text-gray-600" />, color: "#D24939" },
      { name: "Terraform", icon: <SiTerraform className="w-8 h-8 text-purple-600" />, color: "#7B42BC" },
    ],
    // Row 4 - Cloud & DevOps (Right to Left)
    
    [
      { name: "React Native", icon: <SiReact className="w-8 h-8 text-blue-500" />, color: "#61DAFB" },
      { name: "Flutter", icon: <SiFlutter className="w-8 h-8 text-blue-400" />, color: "#02569B" },
      { name: "iOS", icon: <SiApple className="w-8 h-8" />, color: "#000000" },
      { name: "Android", icon: <SiAndroid className="w-8 h-8 text-green-500" />, color: "#3DDC84" },
      { name: "Ionic", icon: <SiIonic className="w-8 h-8 text-blue-500" />, color: "#3880FF" },
      { name: "Xamarin", icon: <TbBrandXamarin className="w-8 h-8 text-blue-600" />, color: "#3498DB" },
       { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8 text-orange-500" />, color: "#FF6F00" },
      { name: "PyTorch", icon: <SiPytorch className="w-8 h-8 text-red-500" />, color: "#EE4C2C" },
      { name: "OpenAI", icon: <SiOpenai className="w-8 h-8" />, color: "#412991" },
      { name: "Scikit-learn", icon: <SiScikitlearn className="w-8 h-8 text-orange-400" />, color: "#F7931E" },
      { name: "Pandas", icon: <SiPandas className="w-8 h-8 text-blue-600" />, color: "#150458" },
      { name: "NumPy", icon: <SiNumpy className="w-8 h-8 text-blue-500" />, color: "#013243" },
    ],
  
  ];

  const categories = [
    { name: "Frontend", icon: <FaPaintBrush className="w-6 h-6" />, color: "#FF6B6B" },
    { name: "Backend", icon: <FaCogs className="w-6 h-6" />, color: "#4ECDC4" },
    { name: "Database", icon: <FaDatabase className="w-6 h-6" />, color: "#45B7D1" },
    { name: "Cloud & DevOps", icon: <FaCloud className="w-6 h-6" />, color: "#96CEB4" },
    { name: "Mobile", icon: <FaMobile className="w-6 h-6" />, color: "#FFEAA7" },
    { name: "AI/ML", icon: <FaRobot className="w-6 h-6" />, color: "#DDA0DD" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <FaTools className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
              Technology Arsenal
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Tech Stack Mastery
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Powered by cutting-edge technologies and frameworks to deliver 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> exceptional digital solutions</span>
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
                style={{ borderColor: `${category.color}30` }}
              >
                <span style={{ color: category.color }}>{category.icon}</span>
                <span className="font-semibold text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Tech Carousel */}
      <section className="py-16 relative">
        <div className="space-y-8">
          {techRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              style={{ height: '120px' }}
            >
              {/* Animated Row */}
              <div
                className={`flex items-center gap-8 absolute top-0 animate-scroll-${rowIndex % 2 === 0 ? 'left' : 'right'}`}
                style={{
                  width: 'fit-content',
                  whiteSpace: 'nowrap',
                }}
              >
                {/* Duplicate the row content for seamless loop */}
                {[...row, ...row, ...row].map((tech, techIndex) => (
                  <div
                    key={`${rowIndex}-${techIndex}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="flex flex-col items-center justify-center w-32 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-white/20 cursor-pointer">
                      <div className="mb-2 group-hover:scale-125 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "35+", label: "Technologies", color: "from-blue-500 to-purple-500" },
              { number: "6", label: "Categories", color: "from-purple-500 to-pink-500" },
              { number: "100%", label: "Modern Stack", color: "from-pink-500 to-red-500" },
              { number: "5+", label: "Years Experience", color: "from-red-500 to-orange-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechCarouselPage;