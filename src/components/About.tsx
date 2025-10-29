import React from 'react';

const skills = [
  "JavaScript", 
  "Node.js", 
  "React.js", 
  "Prisma ORM", 
  "MongoDB", 
  "PostgreSQL", 
  "Google Firebase", 
  "Git & GitHub", 
  "REST API", 
  "Swagger UI", 
  "Postman", 
  "API Integration",
  "0Auth & JWT",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional Background
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Versatile Web Developer with hands-on experience in <strong>Node.js</strong>, 
              <strong> React</strong>, and modern databases like <strong>PostgreSQL</strong>, <strong>Firebase</strong> and <strong>MongoDB</strong>. Skilled in developing scalable, API-driven 
              applications while ensuring code reliability using tools like 
              <strong> Express Validator</strong>, <strong>Postman</strong>, and 
              <strong> Swagger UI</strong>.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I’ve worked on both <strong>monolithic</strong> and 
              <strong> microservices</strong> architectures — building end-to-end systems 
              at companies like <strong>Aiptek</strong>, <strong>StepX Technologies</strong>, 
              and <strong>Crest Infotech</strong>. My contributions have included 
              optimizing APIs for better scalability, designing efficient database schemas, 
              and developing full-stack interfaces that improve business efficiency.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I’m passionate about clean code, performance optimization, and continuous 
              learning. My goal is to contribute to innovative projects that encourage 
              collaboration and forward-thinking software solutions.
            </p>
          </div>

          {/* Right - Skills & Languages */}
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
                <span>English</span>
                <span>•</span>
                <span>Hindi</span>
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
