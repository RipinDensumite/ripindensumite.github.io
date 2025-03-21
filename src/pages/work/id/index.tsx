import { useParams, useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, ProjectType } from "@/data/works";

export default function WorkIdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // This would typically fetch from an API, but we're using hardcoded data for demo
  useEffect(() => {
    // Simulate a network request
    setIsLoading(true);

    // Find the project with the matching ID
    const projectId = parseInt(id as string);
    const foundProject = projects.find((p) => p.id === projectId) || null;

    // Simulate network delay
    setTimeout(() => {
      setProject(foundProject);
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate("/work")}
        className="cursor-pointer mb-6 flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to projects
      </motion.button>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center h-96"
          >
            <motion.div
              className="size-8 border-4 border-t-blue-500 border-b-gray-700 border-l-gray-700 border-r-gray-700 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ) : !project ? (
          <motion.div
            key="not-found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-200 mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="project"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden mb-8 border border-gray-700/50">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-gray-200"
                >
                  {project.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex gap-3"
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#24292e] text-white rounded-md flex items-center gap-2 hover:bg-[#1d2125] transition-colors"
                    >
                      <Github size={18} />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-700 text-white rounded-md flex items-center gap-2 hover:bg-gray-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="hidden sm:inline">Visit Site</span>
                    </a>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.category && (
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    {project.category}
                  </span>
                )}
                {project.year && (
                  <span className="px-3 py-1 bg-gray-700/40 text-gray-300 rounded-full text-sm">
                    {project.year}
                  </span>
                )}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 text-lg mb-8"
              >
                {project.fullDescription || project.description}
              </motion.p>

              {project.technologies && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h2 className="text-xl font-semibold text-gray-200 mb-3">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#232525] border border-gray-700/50 text-gray-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
