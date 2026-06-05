import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { ProjectsSection } from './components/ProjectsSection';
import { Sidebar } from './components/Sidebar';
import { SkillsSection } from './components/SkillsSection';
import { SpotlightBackground } from './components/SpotlightBackground';
import { useActiveSection } from './hooks/useActiveSection';
import { useMousePosition } from './hooks/useMousePosition';

export default function App() {
  const mousePos = useMousePosition();
  const activeSection = useActiveSection();

  return (
    <div className='relative min-h-screen bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 font-sans'>
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
