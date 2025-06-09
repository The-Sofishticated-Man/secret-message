import React from "react";
import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";

interface HamburgerMenuProps {
  links: Array<{ to?: string; label: string; onClick?: () => void }>;
  setOpen: (open: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links, setOpen }) => {
  return (
    <>
      {
        <div className={styles.menuOverlay} onClick={() => setOpen(false)}>
          <nav
            className={styles.menuLinks}
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to ? link.to : "#"}
                onClick={() => {
                  setOpen(false);
                  link.onClick && link.onClick();
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      }
    </>
  );
};

export default HamburgerMenu;
