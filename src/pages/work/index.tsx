import { motion } from "motion/react";
import { projects } from "@/data/works";

export function Card({
  title,
  description,
  imgSrc,
  link,
  category,
}: {
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
  category?: string;
}) {
  const CardContent = () => (
    <>
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img
          className="rounded-t-lg w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />
        {category && (
          <span className="absolute top-3 right-3 bg-blue-600 text-xs font-semibold px-2.5 py-1 rounded text-white">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
          {title}
        </h5>
        <p className="mb-4 font-normal text-gray-400 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-sm bg-[#202222] border border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out h-full transform hover:-translate-y-1">
      {link ? (
        <a href={link} className="block h-full">
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </div>
  );
}

export default function WorkPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white p-5 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-2">My Work</h1>
      <p className="text-lg text-gray-300 mb-8">
        Selected projects from 2021 to 2024
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            link={`/work/${project.id}`}
            // link={project.link}
            category={project.category}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
