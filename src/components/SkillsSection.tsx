import { TECH_SKILLS } from '../data/tech-skills';

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className='flex flex-wrap gap-1.5'>
      {skills.map((skill) => (
        <span
          key={skill}
          className='bg-corp-200 px-2.5 py-1 rounded text-xs text-corp-800 font-mono'
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id='skills'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24'
      aria-label='Technical skill distributions'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 bg-corp-50/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sticky lg:top-0 lg:mx-0 lg:px-0 lg:py-0 lg:sr-only'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-corp-950'>
          Skills
        </h2>
      </div>
      <div className='space-y-6 text-sm'>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider text-corp-800 mb-2 font-mono'>
            Core & Architecture
          </h4>
          <SkillTags
            skills={TECH_SKILLS.core.concat(TECH_SKILLS.architecture)}
          />
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider text-corp-800 mb-2 font-mono'>
            State, Data & UI Ecosystem
          </h4>
          <SkillTags skills={TECH_SKILLS.stateData.concat(TECH_SKILLS.uiUx)} />
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider text-corp-800 mb-2 font-mono'>
            Infrastructure & Intelligent Tooling
          </h4>
          <SkillTags
            skills={TECH_SKILLS.infraTesting.concat(TECH_SKILLS.aiProductivity)}
          />
        </div>
      </div>
    </section>
  );
}
