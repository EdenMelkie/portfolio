import React from "react";

const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Laravel",
    "PHP",
    "Flutter",
    "Dart",
    "MySQL",
  ];

  return (
    <section id="skills" className="pt-20 pb-12 px-6 md:px-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
