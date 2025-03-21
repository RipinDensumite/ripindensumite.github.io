import { useParams, useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion"; // Fixed import
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { getBlogPosts, BlogPost } from "@/utils/mdx";
import { MDXProvider } from "@mdx-js/react";
import React, { HTMLAttributes } from "react"; // Added for typing props

// Define types for the MDX component props
type MDXComponentProps = HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Define MDX components for styling with proper typing
const MDXComponents = {
  h1: (props: MDXComponentProps) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-100" {...props} />
  ),
  h2: (props: MDXComponentProps) => (
    <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-200" {...props} />
  ),
  h3: (props: MDXComponentProps) => (
    <h3 className="text-xl font-bold mt-5 mb-3 text-gray-200" {...props} />
  ),
  p: (props: MDXComponentProps) => (
    <p className="my-4 text-gray-300 leading-relaxed" {...props} />
  ),
  ul: (props: MDXComponentProps) => (
    <ul className="list-disc pl-6 my-4 text-gray-300" {...props} />
  ),
  ol: (props: MDXComponentProps) => (
    <ol className="list-decimal pl-6 my-4 text-gray-300" {...props} />
  ),
  li: (props: MDXComponentProps) => <li className="mb-2" {...props} />,
  a: (props: MDXComponentProps & { href?: string }) => (
    <a
      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: MDXComponentProps) => (
    <blockquote
      className="border-l-4 border-gray-600 pl-4 my-4 italic text-gray-400"
      {...props}
    />
  ),
  code: (props: MDXComponentProps) => (
    <code
      className="bg-gray-800 text-gray-200 rounded px-1 py-0.5"
      {...props}
    />
  ),
  pre: (props: MDXComponentProps) => (
    <pre
      className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto"
      {...props}
    />
  ),
};

export default function WebLogIdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Find the post with matching slug
    const posts = getBlogPosts();
    const foundPost = posts.find((p) => p.slug === id || p.id === id) || null;

    // Simulate a small delay for loading state demonstration
    setTimeout(() => {
      setPost(foundPost);
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div className="px-6 md:px-10 py-8 max-w-4xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate("/weblog")}
        className="cursor-pointer mb-6 flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to all posts
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
        ) : !post ? (
          <motion.div
            key="not-found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-200 mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
          </motion.div>
        ) : (
          <motion.article
            key="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            {/* Header */}
            <header className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
              >
                {post.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6"
              >
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                )}
              </motion.div>

              {post.tags && post.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm flex items-center gap-1"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}

              {post.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8 rounded-xl overflow-hidden border border-gray-700/50"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}
            </header>

            {/* MDX Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mdx-content"
            >
              <MDXProvider components={MDXComponents}>
                <post.component />
              </MDXProvider>
            </motion.div>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
