import NavBarLayout from './layout/navbar'
import AboutModule from './modules/about'
import SkillsModule from './modules/skills'
import AchievementsModule from './modules/achievements'
import QualificationsModule from './modules/qualifications'
import ProjectsModule from './modules/projects'
import ContactModule from './modules/contact'
import { TextFade } from './components/text animation/TextFade'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-mono p-8 overflow-auto">
      <NavBarLayout />

      <main className="max-w-2xl mx-auto space-y-16">
        <TextFade direction="up">
          <AboutModule />
        </TextFade>
        <TextFade direction="up">
          <SkillsModule />
        </TextFade>
        <TextFade direction="up">
          <AchievementsModule />
        </TextFade>
        <TextFade direction="up">
          <QualificationsModule />
        </TextFade>
        <TextFade direction="up">
          <ProjectsModule />
        </TextFade>
        <TextFade direction="up">
          <ContactModule />
        </TextFade>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 RipinDensumite :: Aspiring Software Engineer
      </footer>
    </div>
  )
}

export default App
