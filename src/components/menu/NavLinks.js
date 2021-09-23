import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import SideLinks from "./SideLinks";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const [sideNav, setSideNav] = useState(false);

  function sideNavigation() {
    if (window.scrollY >= 500) {
      setSideNav(true);
    } else {
      setSideNav(false);
    }
  }

  window.addEventListener("scroll", sideNavigation);

  return (
    <>
      <ul>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#work">
            Work
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#resume">
            Résumé
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#about">
            About Me
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link smooth to="#contact">
            Contact
          </Link>
        </motion.li>
      </ul>
      {sideNav && <SideLinks />}
    </>
  );
};

export default NavLinks;
