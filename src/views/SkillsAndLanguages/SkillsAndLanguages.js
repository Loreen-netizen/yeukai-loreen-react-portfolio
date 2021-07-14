import React from "react";
import { v4 as createID } from "uuid";
import styled from "styled-components";

const StyledLogo = styled.img`
height:60px;
width:auto;
border-radius:50%
`

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  
`;
const StyledLi = styled.li`
  flex-basis: 33%;
  // padding: 0.5rem;
`;

const LANGUAGES_MAP = [
  { name: "ReactJS", logo_src: `${process.env.PUBLIC_URL}/images/css.png` },
  { name: "NodeJS", logo_src: `${process.env.PUBLIC_URL}/images/nodejs.png` },
  {
    name: "Database (PostgreSQL)",
    logo_src: `${process.env.PUBLIC_URL}/images/database.png`,
  },

  {
    name: "Version Control using Git & GitHub",
    logo_src: `${process.env.PUBLIC_URL}/images/github.png`,
  },

  { name: "Netlify", logo_src: `${process.env.PUBLIC_URL}/images/netlify.png` },
  {
    name: "IndexedDB",
    logo_src: `${process.env.PUBLIC_URL}/images/indexeddb.png`,
  },
  { name: "Figma", logo_src: `${process.env.PUBLIC_URL}/images/figma.png` },
  { name: "FaunaDB", logo_src: `${process.env.PUBLIC_URL}/images/fauna.png` },
  { name: "HTML5", logo_src: `${process.env.PUBLIC_URL}/images/html-5.png` },
  { name: "CSS", logo_src: `${process.env.PUBLIC_URL}/images/css.png` },
  {
    name: "Bootstrap CSS",
    logo_src: `${process.env.PUBLIC_URL}/images/bootstrap.png`,
  },
  { name: "JavaScript", logo_src: `${process.env.PUBLIC_URL}/images/es6.jpeg` },
];

const SkillsAndLanguages = () => {
  return (
    <div>
      <h1>Skills </h1>
      <h4>And Languages</h4>
     
        <StyledUl key={createID()}>
          {LANGUAGES_MAP.map((language) => {
            return (
              <StyledLi>
                <StyledLogo src={language.logo_src} alt="language logo" />
                {language.name}
              </StyledLi>
            );
          })}
        </StyledUl>
      
    </div>
  );
};

export default SkillsAndLanguages;
