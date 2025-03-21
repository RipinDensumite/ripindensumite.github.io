import { motion } from "motion/react";
import { projects } from "@/data/works";
import { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router";

// Category filter component with corrected types
// Category filter component with corrected types
const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: (string | undefined)[];
  activeCategory: string | null;
  setActiveCategory: Dispatch<SetStateAction<string | null>>;
}) => (
  <div className="flex flex-wrap gap-2 mb-6">
    <button
      onClick={() => setActiveCategory(null)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        activeCategory === null
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
      }`}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => category && setActiveCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeCategory === category
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

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
      <div className="relative overflow-hidden rounded-t-lg h-48 group">
        <img
          className="rounded-t-lg w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />
        {category && (
          <span className="absolute top-3 right-3 bg-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full text-white shadow-md">
            {category}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 group-hover:text-blue-400 transition-colors">
          {title}
        </h5>
        <p className="mb-4 font-normal text-gray-400 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform">
            View Project
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
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#202222] border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out h-full group"
    >
      {link ? (
        <NavLink to={link} className="block h-full">
          <CardContent />
        </NavLink>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
}

export default function WorkPage() {
  // Extract unique categories from projects
  const allCategories = [
    ...new Set(projects.map((project) => project.category).filter(Boolean)),
  ] as string[];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      !activeCategory || project.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white px-6 md:px-10 py-12 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Work
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Selected projects from 2021 to 2024 showcasing my skills and
          experience.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CategoryFilter
          categories={allCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2.5 pl-10 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                link={`/work/${project.id}`}
                category={project.category}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-300">
            No projects found
          </h3>
          <p className="mt-1 text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory(null);
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Reset filters
          </button>
        </div>
      )}
    </motion.section>
  );
}
