import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('footer');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHideNavbar(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <nav className={`sidebar ${hideNavbar ? 'hide-navbar' : ''}`}>
      <ul>
        <li>
          <a href="#hero" title="Home">
            <img src="/Icons/whiteIcons/solar--home-boldwhite.svg" alt="Home" width="28" height="28" />
          </a>
        </li>
        <li>
          <a href="#about" title="About">
            <img src="/Icons/whiteIcons/tabler--bookswhite.svg" alt="About" width="28" height="28" />
          </a>
        </li>
        <li>
          <a href="#skills" title="Skills">
            <img src="/Icons/whiteIcons/solar--code-square-boldwhite.svg" alt="Skills" width="28" height="28" />
          </a>
        </li>
        <li>
          <a href="#projects" title="Projects">
            <img src="/Icons/whiteIcons/lucide--puzzlewhite.svg" alt="Projects" width="28" height="28" />
          </a>
        </li>
        <li>
  <a href="#footer" title="Contact">
    <img src="/Icons/whiteIcons/emojione-monotone--telephonewhite.svg" alt="Contact" width="28" height="28" />
  </a>
</li>

      </ul>
    </nav>
  );
}

export default Navbar;
