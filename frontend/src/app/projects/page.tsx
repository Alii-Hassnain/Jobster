type Project = {
    id: number;
    title: string;
    description: string;
  };
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Todo App",
      description: "A simple todo app to manage daily tasks.",
    },
  ];
  
  export default function Projects() {
    return (
      <main className="min-h-screen py-8">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          My Projects
        </h1>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }