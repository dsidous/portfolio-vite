import { useEffect, useState } from 'react';

export function useActiveSection(defaultSection = 'about') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = defaultSection;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id') || defaultSection;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [defaultSection]);

  return activeSection;
}
