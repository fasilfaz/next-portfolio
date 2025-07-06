'use client';

import xyvin from '../../public/assets/clients/xyvin.png';
import cbs from '../../public/assets/clients/cbs.png';
import pointofline from '../../public/assets/clients/pointofline.jpeg';
import acute from '../../public/assets/clients/acute.png';
import acas from '../../public/assets/clients/acas.png';
import Image from 'next/image';

export default function Clients() {
  // Client logos data with images
  const clients = [
    { 
      name: 'Xyvin Technologies', 
      image: xyvin, 
      bgColor: 'bg-white', 
      borderColor: 'border-gray-200' 
    },
    { 
      name: 'Continuety Business Solutions', 
      image: cbs, 
      bgColor: 'bg-white', 
      borderColor: 'border-gray-200' 
    },
    { 
      name: 'Point of Line', 
      image: pointofline, 
      bgColor: 'bg-white', 
      borderColor: 'border-gray-200' 
    },
    { 
      name: 'Acute Endeavors', 
      image: acute, 
      bgColor: 'bg-white', 
      borderColor: 'border-gray-200' 
    },
    { 
      name: 'ACAS', 
      image: acas, 
      bgColor: 'bg-white', 
      borderColor: 'border-gray-200' 
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
            My Clients
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading companies worldwide - delivering exceptional digital solutions
          </p>
        </div>

        {/* Clients Grid Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`
                  ${client.bgColor} ${client.borderColor}
                  border-2 rounded-2xl p-6 md:p-8
                  shadow-lg hover:shadow-xl
                  transform hover:-translate-y-1
                  transition-all duration-300 ease-out
                  flex items-center justify-center
                  min-h-[100px] md:min-h-[120px]
                  group cursor-pointer
                `}
              >
                <div className="relative w-full h-16 md:h-20 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-600 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">1+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Client Family?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's work together to create something amazing. Join the companies that trust us with their digital transformation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}