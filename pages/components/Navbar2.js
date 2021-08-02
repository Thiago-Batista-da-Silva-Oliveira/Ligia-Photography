import React, { useState } from 'react'
import styles from './navbar2.module.css'
import Link from 'next/link'

function navbar2() {

     const [click, setClick] = useState(false);
   
     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);
    return (
         <>
              <div className={styles.navContainer}>

             
              <div className={styles.navbar}>
               <div className={styles.navbar_container}>

                  
           <div className={styles.navbar_logo}>
            <Link href='/'>
             <img src="/logo.png" alt="logo"/>
            </Link> 
           
           </div>
           <div className={styles.menu_icon} onClick={handleClick}>
            {click? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
           </div>
           <div  className={click ? ` ${styles.nav_menu} ${styles.Active}`  : styles.nav_menu}>
              <Link   href="/sobre">
                 <a className={styles.nav_link} onClick={closeMobileMenu}>Sobre</a>
              </Link>
              <Link className={styles.nav_link} href="/newborn">
                 <a className={styles.nav_link} onClick={closeMobileMenu}>  NewBorn </a>
              </Link>
              <Link className={styles.nav_link} href="/infantil">
              <a className={styles.nav_link} onClick={closeMobileMenu}>Infantil</a> 
              </Link>
              <Link className={styles.nav_link} href="/festainfantil">
              <a className={styles.nav_link} onClick={closeMobileMenu}>Festas</a>  
              </Link>
              <Link  className={styles.nav_link} href="/contato">
              <a className={styles.nav_link} onClick={closeMobileMenu}>Contatos</a>    
              </Link>
             
           </div>
           </div>
        </div>
        </div>
   </>
    )
}

export default navbar2
