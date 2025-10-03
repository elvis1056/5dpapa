'use client';

import styled from 'styled-components';

import style from './style';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon?: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  title: string;
  categories: SkillCategory[];
  className?: string;
}

function SkillsSection({ title, categories, className }: SkillsSectionProps) {
  return (
    <div className={className}>
      <div className="skills-container">
      <h2 className="skills-title">{title}</h2>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">
              {category.icon && (
                <span className="category-icon" aria-label={category.title}>
                  {category.icon}
                </span>
              )}
              {category.title}
            </h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default styled(SkillsSection)`
  ${style}
`;
