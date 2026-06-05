import { PROJECTS } from '../data/projects';
import { ArrowIcon } from './ArrowIcon';
import { HighlightedText } from './HighlightedText';

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24'
      aria-label='Technical structural project logs'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 bg-corp-50/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-corp-950'>
          Projects
        </h2>
      </div>
      <div className='space-y-12'>
        {PROJECTS.map((proj) => (
          <div
            key={proj.title}
            className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50'
          >
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-corp-100' />

            <header className='z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-accent-muted sm:col-span-2 font-mono'>
              {proj.thumbnail ? (
                <img src={proj.thumbnail} alt={proj.title} />
              ) : (
                'Production System'
              )}
            </header>

            <div className='z-10 sm:col-span-6'>
              <h3 className='font-medium leading-snug text-corp-950'>
                <a
                  className='inline-flex items-baseline font-medium leading-tight text-corp-950 hover:text-accent group/link text-base'
                  href={proj.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>{proj.title}</span>
                  <ArrowIcon />
                </a>
              </h3>

              <p className='mt-2 text-xs leading-relaxed text-corp-700'>
                <HighlightedText text={proj.summary} />
              </p>

              <div className='mt-3 space-y-2'>
                <h4 className='text-xs font-bold uppercase tracking-widest text-corp-800 font-mono'>
                  Core Constraints & Deep Dives:
                </h4>
                <ul className='text-xs text-corp-700 list-disc pl-4 space-y-1'>
                  {proj.challenges.map((challenge) => (
                    <li key={challenge}>
                      <HighlightedText text={challenge} />
                    </li>
                  ))}
                </ul>
              </div>

              <ul
                className='mt-4 flex flex-wrap'
                aria-label='System framework allocation'
              >
                {proj.tags.map((tag) => (
                  <li key={tag} className='mr-1.5 mt-2'>
                    <span className='flex items-center rounded-full bg-corp-200 px-2.5 py-0.5 text-xs font-medium font-mono leading-5 text-corp-800'>
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
