import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { ProjectsSection } from './components/ProjectsSection';
import { Sidebar } from './components/Sidebar';
import { SkillsSection } from './components/SkillsSection';
import { SpotlightBackground } from './components/SpotlightBackground';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useActiveSection } from './hooks/useActiveSection';
import { useMousePosition } from './hooks/useMousePosition';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const mousePos = useMousePosition();
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='theme-root relative min-h-screen bg-corp-50 text-corp-700 antialiased font-sans'>
      <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
      <SpotlightBackground x={mousePos.x} y={mousePos.y} />

      <div className='mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Sidebar activeSection={activeSection} />

          <main className='pt-24 lg:w-1/2 lg:py-24 group/list'>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
