import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-mono p-8">
      <header className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
        <div className="flex space-x-4">
          <button className="text-2xl">☼</button>
          <button className="text-2xl">☾</button>
          <button className="text-2xl">⧉</button>
        </div>
        <nav>
          <a href="#about" className="mr-4 underline">about</a>
          <a href="#skills" className="mr-4 underline">skills</a>
          <a href="#achievements" className="mr-4 underline">achievements</a>
          <a href="#qualifications" className="mr-4 underline">qualifications</a>
          <a href="#projects" className="mr-4 underline">projects</a>
          <a href="#contact" className="underline">contact</a>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto space-y-16">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2>
          <p>Hi there,</p>
          <p>I&apos;m [Your Name], an aspiring full-stack web developer. My pronouns are [Your Pronouns].</p>
          <p>I&apos;m passionate about creating efficient, user-friendly web applications and always eager to learn new technologies.</p>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript / TypeScript</li>
            <li>React.js / Next.js</li>
            <li>Node.js / Express.js</li>
            <li>HTML5 / CSS3 / Tailwind CSS</li>
            <li>Git / GitHub</li>
            <li>SQL / NoSQL Databases</li>
          </ul>
        </section>

        <section id="achievements">
          <h2 className="text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
          <ul className="list-disc list-inside">
            <li>Winner, [Hackathon Name] 2023</li>
            <li>Top Contributor, [Open Source Project] 2022</li>
            <li>[Any other relevant achievements]</li>
          </ul>
        </section>

        <section id="qualifications">
          <h2 className="text-2xl font-bold mb-4">QUALIFICATIONS</h2>
          <ul className="list-disc list-inside">
            <li>B.S. in Computer Science, [University Name] (Expected [Graduation Year])</li>
            <li>[Any relevant certifications]</li>
            <li>[Any relevant coursework]</li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Project 1: [Project Name]</h3>
              <p>[Brief description of the project and your role]</p>
              <p>Tech stack: [List of technologies used]</p>
              <a href="[Project URL]" className="underline">View Project</a>
            </div>
            <div>
              <h3 className="font-bold">Project 2: [Project Name]</h3>
              <p>[Brief description of the project and your role]</p>
              <p>Tech stack: [List of technologies used]</p>
              <a href="[Project URL]" className="underline">View Project</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
          <p>You can find me on:</p>
          <ul className="list-disc list-inside">
            <li>Github: <a href="https://github.com/RipinDensumite/" className="underline">@RipinDensumite</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/[Your LinkedIn Profile]" className="underline">@[Your Name]</a></li>
            <li>Email: <a href="mailto:[Your Email]" className="underline">[Your Email]</a></li>
          </ul>
        </section>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 RipinDensumite :: Aspiring Software Engineer
      </footer>
    </div>
  )
}

export default App
