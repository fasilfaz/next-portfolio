

import type { Metadata } from 'next';
import { Calendar, MapPin, Building, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience - Fasil M',
  description: 'Explore the professional journey of Fasil M, a senior full stack developer with expertise in MERN, AI integration, React Native, and more. View my work history and certifications.',
};

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications using MERN stack and AI integration.',
      achievements: [
        'Developed 15+ production applications serving 100k+ users',
        'Implemented AI chatbot system reducing customer support tickets by 40%',
        'Led team of 5 developers in agile development environment',
        'Optimized application performance resulting in 60% faster load times'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed scalable web applications and mobile apps using modern JavaScript frameworks.',
      achievements: [
        'Built 20+ responsive web applications using React and Next.js',
        'Developed cross-platform mobile apps with React Native',
        'Integrated payment systems and third-party APIs',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Next.js', 'React Native', 'Firebase', 'Stripe', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Specialized in creating beautiful, responsive user interfaces and optimizing user experience.',
      achievements: [
        'Converted 50+ design mockups into pixel-perfect web interfaces',
        'Improved website performance scores by 45% on average',
        'Implemented accessibility standards (WCAG 2.1)',
        'Collaborated with UX designers to enhance user experience'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      location: 'Austin, TX',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey building websites and learning modern development practices.',
      achievements: [
        'Developed 10+ small to medium business websites',
        'Learned and implemented responsive design principles',
        'Gained experience with version control and team collaboration',
        'Contributed to open-source projects'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: Award
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: Award
    },
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2021',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, from junior developer to senior full stack expert
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <cert.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}