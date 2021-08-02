import React from 'react'
import styles from './navbar.module.css'
const navbar = () => {
    return (
        <div className={styles.navbar}>
           <div className={styles.email}>
           <i class="far fa-envelope"></i>  ligiaoliveirafotografia@gmail.com
           </div>
           <div className={styles.social_media}>
           <i class="fab fa-instagram"></i>
           <i class="fab fa-facebook-f"></i>
           <i class="fab fa-whatsapp"></i>
           </div>

        </div>
    )
}

export default navbar
