import { motion } from "motion/react";

export default function ProfilePage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-10 py-8 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-200 mb-6">
          Hi, I'm{" "}
          <span className="font-semibold text-gray-200">Ripin Densumite</span>,
          a passionate developer and tech enthusiast. I love building things
          that solve real-world problems and make life easier. My journey in
          tech started with a curiosity for how things work, and it has grown
          into a full-fledged passion for coding and creating.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Skills</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>Web Development (HTML, CSS, JavaScript, React)</li>
            <li>Backend Development (Node.js, Express)</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>UI/UX Design (Figma, Tailwind CSS)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Interests
          </h3>
          <p className="text-gray-200">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and learning about AI and
            machine learning. I also love sharing my knowledge through blogging
            and helping others in the developer community.
          </p>
        </div>
      </motion.section>
    </>
  );
}
