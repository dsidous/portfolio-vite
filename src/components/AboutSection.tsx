export function AboutSection() {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24'
      aria-label='About profile summary'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          About
        </h2>
      </div>
      <p className='mb-4 leading-relaxed text-sm sm:text-base'>
        I am a strategic technical leader dedicated to engineering highly secure,
        accessible, and performant user interfaces. Bridging requirements
        seamlessly across Design, Marketing, and Product teams, I specialize in
        establishing pristine foundations for scalable web systems from the
        ground up.
      </p>
      <p className='leading-relaxed text-sm sm:text-base'>
        With deep domain expertise across decentralized architectures and state
        engines, I focus heavily on reducing technical friction—leveraging advanced
        monorepo tooling, AI-augmented developer pipelines, and rigid typing to
        guarantee maximum reliability at scale.
      </p>
    </section>
  );
}
