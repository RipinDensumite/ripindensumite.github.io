import './App.css'
import NavBarLayout from './layout/navbar'
import AboutModule from './modules/about'
import SkillsModule from './modules/skills'
import AchievementsModule from './modules/achievements'
import QualificationsModule from './modules/qualifications'
import ProjectsModule from './modules/projects'
import ContactModule from './modules/contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-mono p-8">
      <NavBarLayout />

      <main className="max-w-2xl mx-auto space-y-16">
        <AboutModule />
        <SkillsModule />
        <AchievementsModule />
        <QualificationsModule />
        <ProjectsModule />
        <ContactModule />
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 RipinDensumite :: Aspiring Software Engineer
      </footer>
    </div>
  )
}

export default App
