import React from 'react';

const skills = [
  "JavaScript", "Node", "React", "Prisma ORM", 
  "MongoDB", "PostgreSQL", "Git", "Swagger", "Postman"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">Professional Background</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Innovative software engineer with a strong foundation in programming and problem-solving. 
              Currently working at StepX Technologies as a Software Developer Intern, gaining hands-on 
              experience building scalable applications in both microservices and monolithic architectures.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate about staying up-to-date with emerging technologies and collaborating with 
              cross-functional teams to deliver cutting-edge products. Seeking opportunities for 
              career advancement and long-term growth.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
                <span>Hindi</span>
                <span>•</span>
                <span>English</span>
                <span>•</span>
                <span>Gujarati</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
