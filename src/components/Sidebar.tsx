import { NAV_SECTIONS } from '../data/nav-sections';
import { GitHubIcon } from './GitHubIcon';
import { LinkedInIcon } from './LinkedInIcon';

type SidebarProps = {
  activeSection: string;
};

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-corp-950 sm:text-5xl'>
          <a href='/'>Tamas Jonas</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-corp-950 sm:text-xl'>
          Strategic Senior Frontend Architect
        </h2>

        <p className='mt-4 max-w-sm leading-normal text-corp-700 text-sm'>
          Architecting high-scale web applications with 10+ years of technical
          leadership. Specialist in React ecosystems, secure fintech setups, and
          optimized monorepo infrastructures.
        </p>

        <nav
          className='nav hidden lg:block'
          aria-label='In-page fast scroll navigators'
        >
          <ul className='mt-12 w-max'>
            {NAV_SECTIONS.map((sec) => (
              <li key={sec}>
                <a
                  className={`group flex items-center py-2.5 ${activeSection === sec ? 'active' : ''}`}
                  href={`#${sec}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === sec ? 'w-16 bg-corp-950' : 'w-8 bg-corp-300 group-hover:w-16 group-hover:bg-corp-950'}`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${activeSection === sec ? 'text-corp-950' : 'text-corp-600 group-hover:text-corp-950'}`}
                  >
                    {sec}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='mt-8 lg:mt-0'>
        <ul
          className='flex items-center gap-5 font-mono text-xs font-bold tracking-wider uppercase text-corp-600'
          aria-label='Professional channels'
        >
          <li>
            <a
              className='hover:text-accent flex items-center gap-1.5 group'
              href='https://www.linkedin.com/in/tamas-jonas-571469b/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon className='h-6 w-6' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className='hover:text-accent flex items-center gap-1.5 group'
              href='https://github.com/dsidous'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon className='h-6 w-6' />
              <span className='sr-only'>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
