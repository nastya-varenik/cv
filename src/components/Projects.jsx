import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-pink-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Проекты</h2>
        <div 
          className="grid grid-cols-1 gap-y-6 justify-items-center"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
