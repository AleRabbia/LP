// src/components/Skills.js
import React from "react";

function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <section id="skills" className="container">
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
