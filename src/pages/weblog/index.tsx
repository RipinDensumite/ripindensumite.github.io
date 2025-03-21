import { motion } from "motion/react";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getBlogPosts } from "@/utils/mdx";

export default function WebLogPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Get blog posts from MDX files
  const blogPosts = getBlogPosts();
  console.log("Blog posts loaded:", blogPosts.length); // Add this for debugging

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      (post.description &&
        post.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto">
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Web Log
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Thoughts, stories and ideas about web development, design, and
          technology. Join me on this journey of continuous learning and
          exploration.
        </p>
      </motion.div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#232525] border border-gray-700 rounded-lg py-3 px-4 pl-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
      </motion.div>

      {/* Blog posts */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => navigate(`/weblog/${post.slug}`)}
              className="bg-[#232525] border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600 transition-colors duration-300 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {post.excerpt || post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No posts found matching "{searchQuery}"
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
