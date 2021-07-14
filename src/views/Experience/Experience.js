import React from "react";
import { v4 as createId } from "uuid";
const SKILLS_MAP = [
  {
    name: "ReactJS Developer",
    description: "Google Workplace Incubation ",
    location: "Cape Town South Africa",
    year: "2021",
  },
  {
    name: " Agile Web Development",
    description: "Project Codex",
    location: "Cape Town South Africa",
    year: "2020",
  },
  {
    name: "Bachelor of Science (Honours) in Applied Biology and Biochemistry.",
    description:
      "National University Of Science And Technology, Publications: http://www.nust.ac.zw/zjst/index.php/volume-12-2017# The Effects of Sub Lethal Levels of Lead on Acetylcholinesterase Activity in the Rock Pigeon, (Columba Livia) Y. L. Muusha et al.",
    location: "Bulawayo Zimbabwe",
    year: "September 2011 - May 2015",
  },
  {
    name: "Advanced Level Chemistry, Biology And Chemistry",
    description: "Mtshabezi High School",
    location: "Bulawayo Zimbabwe",
    year: "2010",
  },
];
const Experience = () => {
  return (
    <div >
      <h1>Experience</h1>
      <h3>And Education</h3>
      {SKILLS_MAP.map((skill) => {
        return (
          <section key={createId()}>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            <p>
              {skill.location}. {skill.year}
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default Experience;
