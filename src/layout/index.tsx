import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getPageTitle = () => {
    const path = location.pathname;

    // You can reuse your navPath array to get the titles
    const currentPath = navPath.find((nav) => nav.href === path);
    return currentPath ? currentPath.name : "Title";
  };

  const navPath = [
    {
      name: "Profile",
      href: "/",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Web Log",
      href: "/weblog",
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <section className="relative min-h-[100dvh] bg-[#202222]">
      <div className="flex flex-row">
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              ></motion.div>

              <motion.nav
                className="w-64 max-w-[80%] absolute left-0 top-0 h-full p-6 bg-gradient-to-b from-[#202222] to-[#1a1b1b] text-white border-r border-gray-800/40 shadow-lg"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
              >
                {/* Close button */}
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Profile section */}
                <div className="relative mx-auto mt-6 mb-8">
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    src="https://avatars.githubusercontent.com/u/52118329?v=4"
                    className="relative size-24 select-none rounded-full mx-auto object-cover ring-2 ring-white/10 shadow-md"
                    alt="Profile"
                  />
                  <motion.h2
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-center mt-4 font-medium text-lg text-gray-200"
                  >
                    Ripin Densumite
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="text-center text-xs text-gray-400 mt-1"
                  >
                    Software Engineer
                  </motion.p>
                </div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-4"
                ></motion.div>

                {/* Navigation Links */}
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="text-xs uppercase text-gray-500 font-semibold tracking-wider ml-2 mb-3"
                  >
                    Navigation
                  </motion.h3>
                  <ul className="flex flex-col gap-2">
                    {navPath.map((nav, index) => (
                      <motion.li
                        key={nav.href}
                        className="w-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.4 + index * 0.07,
                          duration: 0.3,
                        }}
                      >
                        <motion.button
                          onClick={() => handleNavigation(nav.href)}
                          whileHover={{
                            backgroundColor: isActive(nav.href)
                              ? "rgba(59, 130, 246, 0.1)"
                              : "rgba(45, 46, 46, 0.7)",
                            x: 3,
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          disabled={isActive(nav.href)}
                          className={`w-full px-4 py-2.5 rounded-md flex items-center ${
                            isActive(nav.href)
                              ? "bg-gray-500/10 text-gray-400 font-medium"
                              : "text-gray-300 hover:text-white cursor-pointer"
                          }`}
                        >
                          <motion.div
                            className="relative flex items-center w-full"
                            animate={{
                              x: isActive(nav.href) ? 4 : 0,
                            }}
                          >
                            {isActive(nav.href) && (
                              <motion.div
                                layoutId="mobile-nav-indicator"
                                className="absolute -left-4 h-full w-1 bg-gray-200 rounded-r-full"
                              />
                            )}

                            <motion.div
                              animate={{
                                opacity: isActive(nav.href) ? 1 : 0,
                              }}
                              className="mr-2 text-gray-200"
                            >
                              <ChevronRight size={14} />
                            </motion.div>
                            {nav.name}
                          </motion.div>
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer section */}
                <div className="mt-auto pt-6 pb-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-4"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="flex justify-center gap-4"
                  >
                    <a
                      href="https://github.com/ripindensumite"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/arifindensumite/"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-64 max-w-64 hidden md:flex flex-col fixed left-0 top-0 h-full p-6 rounded-r-2xl text-white border-r border-gray-500/30 shadow-lg"
        >
          {/* Profile section */}
          <div className="relative mx-auto mt-6 mb-8">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              src="https://avatars.githubusercontent.com/u/52118329?v=4"
              className="relative size-32 select-none rounded-full mx-auto object-cover ring-2 ring-white/10 shadow-md"
              alt="Profile"
            />
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-center mt-4 font-medium text-lg text-gray-200"
            >
              Ripin Densumite
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-center text-xs text-gray-400 mt-1"
            >
              Software Engineer
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-4"
          ></motion.div>

          {/* Navigation Links */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <h3 className="text-xs uppercase text-gray-500 font-semibold tracking-wider ml-2 mb-3">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {navPath.map((nav, index) => (
                  <motion.li
                    key={nav.href}
                    className="w-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.07, duration: 0.3 }}
                  >
                    <motion.button
                      onClick={() => navigate(nav.href)}
                      whileHover={{
                        backgroundColor: isActive(nav.href)
                          ? "rgba(59, 130, 246, 0.1)"
                          : "rgba(45, 46, 46, 0.7)",
                        x: 5,
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        duration: 0.15,
                        type: "spring",
                        stiffness: 400,
                      }}
                      disabled={isActive(nav.href)}
                      className={`w-full px-4 py-2.5 rounded-md flex items-center ${
                        isActive(nav.href)
                          ? "bg-gray-500/10 text-gray-400 font-medium"
                          : "text-gray-300 hover:text-white cursor-pointer"
                      }`}
                    >
                      <motion.div
                        className="relative flex items-center w-full"
                        animate={{
                          x: isActive(nav.href) ? 4 : 0,
                        }}
                      >
                        {isActive(nav.href) && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute -left-4 h-full w-1 bg-gray-200 rounded-r-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}

                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{
                            opacity: isActive(nav.href) ? 1 : 0,
                            x: 0,
                          }}
                          exit={{ opacity: 0, x: -5 }}
                          className="mr-2 text-gray-200"
                        >
                          <ChevronRight size={14} />
                        </motion.div>
                        {nav.name}
                      </motion.div>
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Footer section */}
          <div className="mt-auto pt-6 pb-2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-4"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ripindensumite"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/arifindensumite/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.nav>

        <div className="min-h-[100dvh] md:pl-64 md:mx-3 w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-[#191a1a] rounded-xl min-h-[100dvh] md:min-h-[98dvh] md:max-h-[98dvh] w-full md:border-2 border-[#434343] overflow-y-scroll overflow-x-hidden"
          >
            <nav className="fixed md:sticky flex items-center top-0 left-0 right-0 h-16 rounded-t-xl bg-[#191a1a] border-b-2 border-[#2b2d2d] z-10">
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                whileTap={{ scale: 0.9 }}
                className="md:hidden ml-3 bg-[#1a1b1b] p-2 rounded-md shadow-md border border-gray-800/40"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-200" />
              </motion.button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  className="flex items-center ml-3 md:ml-5 gap-3"
                >
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-7 w-1.5 rounded-full bg-gray-500 origin-bottom"
                  ></motion.div>
                  <motion.h1
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{
                      duration: 0.25,
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="text-2xl font-bold text-white tracking-tight relative"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {getPageTitle()}
                    </span>
                    <motion.span
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      exit={{ width: "0%" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"
                    ></motion.span>
                  </motion.h1>
                </motion.div>
              </AnimatePresence>
            </nav>
            <AnimatePresence mode="wait">
              <motion.main
                key={location.pathname}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    staggerChildren: 0.08,
                  },
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(5px)",
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="w-full h-full mt-16 md:mt-0"
                >
                  {children}
                </motion.div>
              </motion.main>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
