import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Trophy, Briefcase, GraduationCap, Globe, Code } from 'lucide-react';

// Define skills data structure
const skillsData = [
  {
    title: "Technical",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Google Cloud", level: 80 },
      { name: "Docker", level: 75 }
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "CorelDraw", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Communication", level: 95 },
      { name: "Project Management", level: 85 }
    ]
  }
];

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section 
        className="h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">Ayush K Shetty</h1>
          <p className="text-xl md:text-2xl text-neutral-200 animate-slide-up-delay">Information Science & Engineering Student</p>
          <div className="mt-8 animate-bounce">
            <a href="#portfolio" className="text-white">
              <div className="w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center">
                <span className="transform rotate-45 translate-y-1 block w-3 h-3 border-r-2 border-b-2 border-white"></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-white" id="skills">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, index) => (
              <div key={index} className="p-6 rounded-lg bg-neutral-50 shadow-lg hover:shadow-xl transition-all fade-in">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative pt-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                        <span className="text-sm font-medium text-neutral-700">{skill.level}%</span>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
                        <div 
                          style={{ width: `${skill.level}%` }}
                          className="animate-progress-bar bg-neutral-800 rounded"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="portfolio">
        <h2 className="text-3xl font-bold mb-12 text-center fade-in">Project Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Aviary Drift",
              description: "A modern web-based recreation of Flappy Bird using HTML5, CSS3, and JavaScript. Features physics-based mechanics and responsive gameplay.",
              link: "https://github.com/Ayushk3001/Aviary-Drift"
            },
            {
              title: "FactTrack: Fake News Detection System",
              description: "Addresses misinformation using ML and NLP to classify news articles as authentic or fake with high accuracy.",
              link: "https://github.com/Ayushk3001/MachineLearningProject/tree/main"
            },
            {
              title: "Generative AI-Powered Resume Processing",
              description: "Automates resume screening using Generative AI and OCR, extracting structured insights from PDF resumes.",
              link: "https://github.com/Ayushk3001/Generative-AI-Powered-Resume-Processing-"
            },
            {
              title: "Sonar Object Classifier: Rock vs. Mine Detection",
              description: "ML model for classifying sonar signals to identify rocks or mines, with applications in marine exploration and defense.",
              link: "https://github.com/Ayushk3001/MachineLearningProject"
            },
            {
              title: "Location Based Service Application",
              description: "GIS-based web app for the Indian defense sector, offering real-time location services with geofencing alerts.",
              link: "https://github.com/Ayushk3001/Location-Based-Service-Application"
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 fade-in"
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-neutral-700 mb-4 text-center">{project.description}</p>
                <div className="text-center">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-white border border-black bg-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-100" id="certifications">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Computing",
                issuer: "Indian Institute of Technology, Kharagpur",
                date: "November 2024",
                link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S105280274003803938"
              },
              {
                title: "Data Structure and Algorithms using Java",
                issuer: "Indian Institute of Technology, Kharagpur",
                date: "November 2024",
                link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS96S45280083303803938"
              },
              {
                title: "Object-Oriented Design",
                issuer: "University of Alberta",
                date: "November 2024",
                link: "https://www.coursera.org/account/accomplishments/records/U1LWTWKGGGY6"
              },
              {
                title: "Business English: Making Presentations",
                issuer: "University of Washington",
                date: "November 2024",
                link: "https://www.coursera.org/account/accomplishments/records/WQZ1MF55RULR"
              },
              {
                title: "Information Systems Specialization",
                issuer: "University of Minnesota",
                date: "October 2024",
                link: "https://www.coursera.org/account/accomplishments/specialization/LXO8DKWJ5HCU"
              },
              {
                title: "Advanced Data Modeling",
                issuer: "Meta",
                date: "November 2024",
                link: "https://www.coursera.org/account/accomplishments/records/TDUPS67WYMUB"
              },
              {
                title: "AWS Cloud Practitioner Essentials",
                issuer: "Amazon Web Services (AWS)",
                date: "August 2024",
                link: "https://www.coursera.org/account/accomplishments/records/UA3HKM53Q1X1"
              },
              {
                title: "Data Visualization with Python",
                issuer: "IBM",
                date: "August 2023",
                link: "https://coursera.org/verify/L36VNBX3ZP33"
              },
              {
                title: "Business English: Networking",
                issuer: "University of Washington",
                date: "December 2022",
                link: "https://www.coursera.org/account/accomplishments/certificate/3HQ8G5CHW8ZF"
              },
              {
                title: "Effective Problem-Solving and Decision-Making",
                issuer: "University of California, Irvine Division of Continuing Education",
                date: "December 2022",
                link: "https://www.coursera.org/account/accomplishments/certificate/356HR3HX5GRT"
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 fade-in"
              >
                <div className="flex items-start mb-4 animate-fade-in-up delay-100">
                  <BookOpen className="w-8 h-8 text-neutral-700 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-neutral-600 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-neutral-500 text-sm">{cert.date}</p>
                  </div>
                </div>
                <p className="text-neutral-600">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-colors duration-300 hover:text-blue-700">View Certificate</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 bg-white" id="education">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                institution: "Jain University, Bengaluru",
                degree: "B.Tech - Information Science and Engineering",
                duration: "2022 – 2026",
                location: "Bengaluru, Karnataka"
              },
              {
                institution: "Karkala Jnanasudha PU College",
                degree: "12th - PCMB",
                duration: "2019 – 2021",
                location: "Karkala, Karnataka"
              },
              {
                institution: "St. Mary's International School",
                degree: "10th Grade",
                duration: "2009 – 2019",
                location: "Chikkamagaluru, Karnataka"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 fade-in">
                <div className="flex items-start mb-4">
                  <GraduationCap className="w-8 h-8 text-neutral-700 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                    <p className="text-neutral-600 text-sm mb-2">{edu.degree}</p>
                    <p className="text-neutral-500 text-sm">{edu.duration}</p>
                    <p className="text-neutral-500 text-sm">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
{/* Internship Section */}
<section className="py-20 px-4 md:px-8 bg-neutral-100" id="internships">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center fade-in">Internships</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          company: "Bharat Electronics Limited",
          role: "GIS Intern",
          duration: "June 2024 – July 2024",
          description:
            "Contributed to GIS-based web applications focusing on geospatial data analysis for the Indian defense sector, enhancing data visualization, decision-making capabilities, and operational efficiency.",
        },
        {
          company: "Craftech 360",
          role: "Software Intern",
          duration: "January 2025 – Present",
          description:
            "Currently developing a Hotel Operation System to enhance guest experiences and streamline operations with features like digital check-ins, service requests, and staff dashboards. It ensures efficient management through role-based access and analytics.",
        },
      ].map((intern, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 fade-in"
        >
          <div className="flex items-start mb-4">
            <Briefcase className="w-10 h-10 text-neutral-700 mr-3" /> {/* Consistent Briefcase Icon */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{intern.company}</h3>
              <p className="text-neutral-600 text-sm mb-2">{intern.role}</p>
              <p className="text-neutral-500 text-sm">{intern.duration}</p>
              <p className="text-neutral-700 mt-2">{intern.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Achievements Section */}
      <section className="py-20 px-4 md:px-8 bg-white" id="achievements">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in animate-fade-in">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Completed a GIS Internship at Bharat Electronics Limited",
                description: "Contributed to the development of GIS-based web applications for defense, focusing on geospatial data analysis and mapping technologies.",
                year: "June 2024 - July 2024"
              },
              {
                title: "Built a Generative AI-Powered Resume Analyzer",
                description: "Automated resume screening using OCR and AI for efficient data extraction and scoring.",
                year: "January 2025"
              },
              {
                title: "Represented University Volleyball Team",
                description: "Demonstrated teamwork and leadership in university-level sports competitions.",
                year: "2022 - Present"
              },
              {
                title: "Technical Team Member at Infosphere Club",
                description: "Contributed to technical projects, focusing on emerging technology solutions.",
                year: "2024 - Present"
              }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-neutral-50 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-500 ease-in-out fade-in animate-fade-in-up"
              >
                <div className="mr-4 animate-bounce">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="transition-opacity duration-700 ease-in-out opacity-100">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-neutral-600 mb-2">{achievement.description}</p>
                  <span className="text-sm text-neutral-500">{achievement.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-100" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://i.postimg.cc/C5c6L1z1/Whats-App-Image-2025-02-03-at-20-28-54-e336255b.jpg" 
              alt="Ayush K Shetty"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover fade-in hover:scale-105 transition-transform duration-300"
            />
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                I'm Ayush K Shetty, a B.Tech student in Information Science and Engineering at Jain University (2022–2026). 
                Passionate about leveraging technology to solve real-world problems, I have hands-on experience in developing 
                projects that combine Machine Learning, Artificial Intelligence, and GIS technologies.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                I've worked on impactful projects such as the Generative AI-Powered Resume Analyzer and a Location-Based Service Application 
                for the Indian defense sector during my internship at Bharat Electronics Limited. My technical proficiency spans languages 
                like C, Java, Python, and tools such as GitHub, Google Cloud Platform, and PostgreSQL.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Beyond academics, I'm an active member of the Infosphere Club, contributing to innovative tech projects, and I proudly represent 
                my university's volleyball team, showcasing my teamwork and leadership skills both on and off the field.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Ayushk3001" className="text-neutral-700 hover:text-neutral-900 transition-colors transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-k-shetty-8135b8254/" className="text-neutral-700 hover:text-neutral-900 transition-colors transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:22btris010@jainuniversity.ac.in" className="text-neutral-700 hover:text-neutral-900 transition-colors transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Ayush K Shetty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;