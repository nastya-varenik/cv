import { FaHtml5, FaCss3Alt, FaFigma, FaJs, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiCplusplus, SiGithub } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={36} />, name: 'HTML' },
    { icon: <FaCss3Alt size={36} />, name: 'CSS' },
    { icon: <FaFigma size={36} />, name: 'Figma' },
    { icon: <FaJs size={36} />, name: 'JavaScript' },
    { icon: <FaReact size={36} />, name: 'React' },
    { icon: <FaDatabase size={36} />, name: 'Databases' },
    { icon: <FaGitAlt size={36} />, name: 'Git' },
    { icon: <SiTypescript size={36} />, name: 'TypeScript' },
    { icon: <SiRedux size={36} />, name: 'Redux' },
    { icon: <SiCplusplus size={36} />, name: 'C++' },
    { icon: <SiGithub size={36} />, name: 'GitHub' },
  ];

  return (
    <section id="skills" className="py-16 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Навыки</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {skill.icon}
              <span className="text-lg font-medium text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;