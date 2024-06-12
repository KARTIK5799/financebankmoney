import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logoImg from '../../../public/assets/Logo.svg';
import logoText from '../../../public/assets/LogoText.svg'

const Navbar = () => {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.nav}>
        <div className={styles.leftSection}>
         
          <div className={styles.logoSection}>
          <Image src={logoImg} alt="Logo" className={styles.logoImg}/>
          <Image src={logoText} alt="LogoText" className={styles.logoText}/>
          </div>

          <ul className={styles.navLinks}>
            <li className={styles.active}>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>
        <button className={styles.button}>Download</button>
      </div>
    </div>
  );
};

export default Navbar;
