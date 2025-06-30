import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Play, Calendar, MapPin, FileCode } from 'lucide-react';
import { PiGameControllerThin } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Card from './Card';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "College Chat App",
      category: "Full-Stack Web Development",
      year: "2023",
      image: "https://img.freepik.com/free-vector/messaging-application-abstract-concept-illustration-texting-desktop-application-mobile-phone-chat-app-messaging-mobile-soft-social-media-messenger-video-call-sms_335657-930.jpg",
      color: "#F5E6D3"
    },
    {
      title: "Food Delivery Website(Hungry Heist)", 
      category: "Food, MERN stack web app",
      year: "2024",
      image: "https://img.freepik.com/free-vector/food-delivery-service-abstract-concept-illustration-online-food-order-24-7-service-pizza-sushi-online-menu-payment-options-no-contact-delivery-download-app_335657-3507.jpg",
      color: "#6B7280"
    },
    {
      title: "Recom.ANI",
      category: "ML Model, Frontend dev", 
      year: "2024",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      color: "#D1D5DB"
    }
  ];  

  const latestWorks = [
    {
      title: "AWS Certified Cloud practioner",
      category: "Cloud",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HjqVeAf3LyV2VvUEGHzkNy0QwdTQsVbpOQ&s"
    },
    {
      title: "DSA - Zero to Mastery (Udemy)", 
      category: "DSA",
      image: "https://images.ctfassets.net/aq13lwl6616q/34oTrOaPCY3VKnubPKZCKv/a8eb7d89a56594d9d5acb91252b451b5/MTCI.png"
    },
    {
      title: "Deep Learning A-Z Super Data Science",
      category: "Deep learning", 
      image: "https://img-c.udemycdn.com/course/750x422/1151632_de9b.jpg"
    }
  ];

  const designInsights = [
    {
      title: "Designing for digital interfaces and web applications",
      category: "UI/UX Design",
      color: "#EF4444",
      accent: "#DC2626"
    },
    {
      title: "Designing for optimal interfaces and user experience", 
      category: "User Research",
      color: "#F59E0B",
      accent: "#D97706"
    },
    {
      title: "Branding digital stories and strategic brand positioning",
      category: "Brand Strategy",
      color: "#10B981", 
      accent: "#059669"
    }
  ];

  const experiences = [
    {
      company: "Cantilever Labs, pvt.",
      position: "ML Intern",
      period: "May 2024 - July 2024",
      type: "Full-time"
    }
  ];

  const skills =[
    { name: "Tailwind", src: "./tailwind-css-icon.png" },
      { name: "JavaScript", src: "./javascript-icon.png" },
      { name: "React", src: "./react-js-icon.png" },
      { name: "Node.js", src: "./node-js-icon.png" },
      { name: "Express.js", src: "./express-js-icon.png" },
      { name: "MySQL", src: "./mysql-icon.png" },
      { name: "AWS", src: "./aws-icon.png" },
      { name: "Agile", src: "./agile-icon.png" },
      { name: "Python", src: "./python-icon.png" },
      { name: "TensorFlow", src: "./google-tensorflow-icon.png" },
      { name: "MongoDB", src: "./mongodb-icon.png" },
      { name: "Github", src: "./github-icon.png" },
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#E5E7DE', color: '#1D1D1D'}}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`} style={{backgroundColor: isScrolled ? 'rgba(229, 231, 222, 0.95)' : 'transparent'}}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-medium" style={{fontFamily: '"Recoleta", serif'}}>Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Certifications','Blog'].map((item) => (
                <button
                  key={item}
                  className="text-sm hover:opacity-70 transition-opacity duration-200"
                  style={{fontFamily: '"Arial", sans-serif'}}
                  onClick={()=>{scrollToSection(item)}}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="text-sm" style={{fontFamily: '"Arial", sans-serif'}} onClick={()=>{scrollToSection("Footer")}}>
              Schedule Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen items-center flex px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl" style={{fontFamily: '"Arial", sans-serif'}}>+10</span>
                <span className="text-4xl" style={{fontFamily: '"Arial", sans-serif'}}>+0</span>
              </div>
              <div className="text-xs text-gray-600 mb-8" style={{fontFamily: '"Arial", sans-serif'}}>
                Completed Projects • Satisfied Clients
              </div>
            </div> */}
            
            <h1 className="text-6xl md:text-8xl font-light mb-4" style={{fontFamily: '"Recoleta", serif', lineHeight: '0.9'}}>
              Hello
            </h1>
            <div className="text-xl text-gray-600 mb-8" style={{fontFamily: '"Arial", sans-serif'}}>
                - It's Parameshwara Rao Kunchala
              </div>
            
            <p className="text-lg mb-8 text-gray-700 leading-relaxed max-w-md" style={{fontFamily: '"Arial", sans-serif'}}>
              {/* I'm an aspiring Full Stack Developer and AI enthusiast passionate about building intuitive, impactful digital experiences. From smart web apps to creative AI-powered tools, I love turning ideas into functional and elegant solutions. */}
              Software Engineer based in India, specializing in technical education through hands-on learning and building applications.
            </p>
            
            <button className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity duration-200" style={{fontFamily: '"Arial", sans-serif'}} onClick={()=>{scrollToSection("About")}}>
              <span>Read About →</span>
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="/my_professional_pic_resized.jpg"
              alt="Portrait"
              className=" max-w-md mx-auto h-125 rounded-lg grayscale"
            />
          </div>
        </div>
      </section>
      <div class="flex justify-center gap-10 text-black -700 text-lg py-5">
            <a href="https://www.linkedin.com/in/parameshwararaokunchala" target="_blank" class="flex items-center gap-2 hover:text-gray transition">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href="mailto:kunchalaparameshwararao@gmail.com" class="flex items-center gap-2 hover:text-gray transition">
              <SiGmail />
              kunchalaparameshwararao@gmail.com
            </a>
            <a href="tel:+916305086189" class="flex items-center gap-2 hover:text-gray transition">
              <FaPhoneAlt />
              +91 63050 86189
            </a>
        </div>

      {/* About Section */}
      <section className="py-10 pt-20 px-8" style={{ backgroundColor: '#F3F3F3' }} id='About'>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className='relative'>
                <h2 className="text-5xl mb-6" style={{fontFamily: '"Recoleta", serif'}}>About Me</h2>
                <p className="text-sm text-gray-700 leading-relaxed" style={{fontFamily: '"Arial", sans-serif'}}>
                I'm a full-stack developer and AI enthusiast who enjoys building smart, user-focused applications.
                I work with languages like React, Express, Python, and Pytorch, and I love turning ideas into fast, functional, and clean digital products. 
                I'm always exploring better ways to combine design and logic to create real impact.
                </p>
                <img src="./side_arrow.png" alt="" className='absolute h-50 rotate-260 top-50 left-60 scale-x-[-1] hidden md:block' />
              </div>
              {/* <p className="mt-8 italic text-gray-600">
                "Building with code is my way of solving puzzles that matter."
              </p> */}
            </div>
            
            <div className="text-center rounded-lg" style={{backgroundColor: "#FEFEFE"}}>
              <PiGameControllerThin className='absolute text-4xl border border-black rounded-lg m-5' />
              <div className="text-4xl font-light mb-2 pt-5" style={{fontFamily: '"Recoleta", serif'}}>1st place</div>
              <p className="text-xs text-gray-600 m-4 leading-5" style={{fontFamily: '"Arial", sans-serif'}}>
                I recently participated in a 36-hour national-level hackathon where I along with my team build an AI-powered game from scratch — solving real-world problems under intense deadlines.
                Me and my team built an AI ghost model that can track movements of player and predict the next movement.<br/>
                (A real world application of Markov Model).
              </p>
              <div className="flex justify-center m-5 rounded-lg">
                <img 
                  src="./BBG_winning.jpeg"
                  alt="Profile"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="flex space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-16 h-16 rounded-full grayscale"
              />
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs" style={{fontFamily: '"Arial", sans-serif'}}>Available for projects</span>
                </div>
                <p className="text-sm text-gray-700" style={{fontFamily: '"Arial", sans-serif'}}>
                  I'm currently looking for new opportunities to grow my career.
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs" style={{fontFamily: '"Arial", sans-serif'}}>Years of experience</span>
              </div>
              <p className="text-sm text-gray-700" style={{fontFamily: '"Arial", sans-serif'}}>
                With over 2 years in the industry, I bring deep expertise in user-centered design and modern development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6" id='Projects'>
        <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl mb-6" style={{fontFamily: '"Recoleta", serif'}}>Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div 
                  className="aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden"
                  style={{backgroundColor: project.color}}
                >
                  
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-1" style={{fontFamily: '"Recoleta", serif'}}>{project.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span style={{fontFamily: '"Arial", sans-serif'}}>{project.category}</span>
                  <span style={{fontFamily: '"Arial", sans-serif'}}>{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-white">
        <h2 className="text-2xl font-semibold mb-6">🛠 My Tech Stack</h2>
        <p className="text-gray-600 mb-10 max-w-xl">
          Tools and technologies I work with — combining logic, performance, and beautiful interfaces.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Skill Tile */}
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:shadow-xl hover:scale-105 transition duration-300 group"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 mb-2 grayscale group-hover:grayscale-0 transition duration-300"
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-black transition duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* Experience Section */}
      <section className="pt-15 px-6" id='Experience'>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl mb-4" style={{fontFamily: '"Recoleta", serif'}}>Explore My Software Journey</h2>
              <p className="text-sm text-gray-700" style={{fontFamily: '"Arial", sans-serif'}}>
                A timeline of my professional growth and the amazing teams I've worked with.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                  <h3 className="font-medium mb-1" style={{fontFamily: '"Recoleta", serif'}}>{exp.company}</h3>
                  <p className="text-sm text-gray-600" style={{fontFamily: '"Arial", sans-serif'}}>{exp.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm mb-1" style={{fontFamily: '"Arial", sans-serif'}}>{exp.period}</p>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600" style={{fontFamily: '"Arial", sans-serif'}}>
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4" style={{fontFamily: '"Recoleta", serif', color: 'white'}}>
              Have any exciting Job offer!
            </h2>
            <p className="text-sm mb-8 opacity-80" style={{fontFamily: '"Arial", sans-serif'}}>
              I am open for work opportunities - let's discuss over coffee or meeting
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200" style={{fontFamily: '"Arial", sans-serif'}}>
              contact me
            </button>
          </div>
        </div>
      </section>

      {/* Latest Works */}
      <section className="py-20 px-6" id='Certifications'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4" style={{fontFamily: '"Recoleta", serif'}}>Latest Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestWorks.map((work, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-1" style={{fontFamily: '"Recoleta", serif'}}>{work.title}</h3>
                <p className="text-xs text-gray-600" style={{fontFamily: '"Arial", sans-serif'}}>{work.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Insights */}
      <section className="py-5 px-6" id='Blog'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12" style={{fontFamily: '"Recoleta", serif'}}>Blogs</h2>
          
          {/* <div className="grid md:grid-cols-3 gap-8">
            {designInsights.map((insight, index) => (
              <div key={index} className="group cursor-pointer">
                <div 
                  className="aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{backgroundColor: insight.color}}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full`} style={{backgroundColor: insight.accent}}></div>
                  </div>
                </div>
                <h3 className="font-medium mb-2" style={{fontFamily: '"Recoleta", serif'}}>{insight.title}</h3>
                <p className="text-xs text-gray-600" style={{fontFamily: '"Arial", sans-serif'}}>{insight.category}</p>
              </div>
            ))}
          </div> */}
          <div className="text-center">
            <h1 className='text-4xl mb-4'>Coming Soon!</h1>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white" style={{color:"f8f8f8"}} id='Footer'>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-4" style={{fontFamily: '"Recoleta", serif'}}>Let's Connect</h2>
            <p className="text-sm text-white-700 mb-8 max-w-2xl mx-auto" style={{fontFamily: '"Arial", sans-serif'}}>
              Feel free to reach out for collaborations, internships, or freelance opportunities.
            </p>
            <div class="flex justify-center gap-10 text-white -700 text-lg">
              <a href="https://www.linkedin.com/in/parameshwararaokunchala" target="_blank" class="flex items-center gap-2 hover:text-gray transition">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href="mailto:kunchalaparameshwararao@gmail.com" class="flex items-center gap-2 hover:text-gray transition">
                <SiGmail />
                kunchalaparameshwararao@gmail.com
              </a>
              <a href="tel:+916305086189" class="flex items-center gap-2 hover:text-gray transition">
                <FaPhoneAlt />
                +91 63050 86189
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;