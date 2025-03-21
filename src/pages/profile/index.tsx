import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Minimal Animated Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
          fill="none"
          stroke="#3f4040"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            d: `M0,${50 + mousePosition.y * 0.01} Q25,${
              30 + mousePosition.x * 0.01
            } 50,${50 + mousePosition.y * 0.005} T100,${
              50 + mousePosition.x * 0.005
            } V100 H0 Z`,
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,70 Q30,58 60,68 T100,70 V100 H0 Z"
          fill="none"
          stroke="#2c2d2d"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            d: `M0,${70 - mousePosition.y * 0.008} Q30,${
              58 - mousePosition.x * 0.01
            } 60,${68 - mousePosition.y * 0.007} T100,${
              70 - mousePosition.x * 0.006
            } V100 H0 Z`,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="80"
          cy="20"
          r="1.5"
          fill="#434343"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            cx: 80 + mousePosition.x * 0.01,
            cy: 20 + mousePosition.y * 0.01,
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 py-8"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#2b2d2d] mr-5"
            >
              <div className="w-full h-full rounded-full bg-[#202222] flex items-center justify-center">
                <span className="text-2xl font-medium text-[#6b6d6d]">RD</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-bold text-[#d4d4d4]"
            >
              About Me
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base text-[#a3a3a3] mb-8 leading-relaxed border-l-2 border-[#434343] pl-4 py-1"
          >
            Hi, I'm{" "}
            <span className="font-medium text-[#d4d4d4]">Ripin Densumite</span>,
            A person who enjoys using the keyboard. I solve real-world problems
            and simplify people's lives. My interest in technology started with
            developing video games and has grown into a passion for coding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 border border-[#2b2d2d] rounded-lg p-5 bg-[#1d1e1e]"
          >
            <h3 className="text-lg font-medium text-[#d4d4d4] mb-4 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[#6b6d6d]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#a3a3a3]">
              {[
                {
                  name: "Web Development",
                  tech: "HTML, CSS, JavaScript, React, PHP",
                },
                { name: "Backend Development", tech: "Node.js, Express" },
                { name: "Database Management", tech: "SQLite, SQL" },
                { name: "Version Control", tech: "Git, GitHub" },
                { name: "UI/UX Design", tech: "Figma, Tailwind CSS" },
                { name: "Programming Language", tech: "Java, C" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#434343] mr-2"></div>
                  <div>
                    <span className="font-medium text-[#c2c2c2]">
                      {skill.name}
                    </span>
                    <p className="text-sm text-[#6b6d6d]">{skill.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-8 border border-[#2b2d2d] rounded-lg p-5 bg-[#1d1e1e]"
          >
            <h3 className="text-lg font-medium text-[#d4d4d4] mb-4 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[#6b6d6d]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              Interests
            </h3>
            <p className="text-[#a3a3a3] leading-relaxed">
              In addition to coding, I enjoy learning new technologies, editing
              videos and images, and sharing my experiences and expertise on my
              web log.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col items-center mt-10"
          >
            <motion.a
              href="mailto:ariffindensumite@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-[#202222] border border-[#2b2d2d] rounded-md text-[#d4d4d4] font-medium hover:bg-[#2b2d2d] transition-colors duration-200 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </motion.a>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-[#6b6d6d] text-sm mt-2"
            >
              ariffindensumite@gmail.com
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}
