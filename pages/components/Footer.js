import Head from 'next/head'
import React from 'react'
import styles from '../../styles/footer.module.css'
const Footer = () => {
    return (
        <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      </Head>
        <div className={styles.footer}>
           <div className={styles.logo}>
              <img src="/logo.png" alt="logo" />
           </div>
           <div className={styles.social}>
           <i class="fab fa-instagram"></i>
           <i class="fab fa-facebook-f"></i>
           <i class="fab fa-whatsapp"></i>
           </div>
        </div>
        </>
    )
}

export default Footer
