import { motion } from "motion/react";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function WebLogPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog posts - replace with your actual data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and Motion",
      excerpt:
        "Learn how to create smooth animations in your React applications using the Motion library.",
      date: "March 15, 2025",
      readTime: "5 min read",
      tags: ["React", "Animation", "Frontend"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    // {
    //   id: 2,
    //   title: "Building a Modern Portfolio Website",
    //   excerpt: "A step-by-step guide to creating an impressive portfolio site with React and Tailwind CSS.",
    //   date: "March 10, 2025",
    //   readTime: "7 min read",
    //   tags: ["Portfolio", "Tailwind", "Design"],
    //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   id: 3,
    //   title: "The Future of Web Development",
    //   excerpt: "Exploring emerging trends and technologies that will shape web development in the coming years.",
    //   date: "March 5, 2025",
    //   readTime: "6 min read",
    //   tags: ["Trends", "Web Dev", "Future"],
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // }
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
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
        {/* <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          My Blog
        </h1> */}
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
              onClick={() => navigate(`/weblog/${post.id}`)}
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
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
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

      {/* Newsletter */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 bg-gradient-to-br from-[#2a2c2c] to-[#212323] p-6 rounded-xl border border-gray-700/50"
      >
        <h3 className="text-xl font-semibold text-gray-200 mb-2">Stay updated</h3>
        <p className="text-gray-400 mb-4 text-sm">Get notified when I publish new articles.</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-[#1a1b1b] border border-gray-700 rounded-lg py-2 px-3 text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <button className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 font-medium text-sm hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div> */}
    </div>
  );
}
