import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/contato.module.css'
import Footer from './components/Footer'
import Navbar3 from './components/Navbar3'

const contato = () => {
    return (
        <>
         <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      </Head>
      <Navbar3 />

      <div className={styles.container}>
         
          <h1>Contato</h1>
           <div className={styles.info}>
          <div className={styles.form}>
              <h2>Envie uma mensagem</h2>
              <form className={styles.card} method="post">
                  <input placeholder="Nome" type="text" name="name" required maxlength="25" minlength="2" />

                  <input placeholder="Email" type="text" name="email" required maxlength="50" />

                  <input placeholder="Telefone" type="text" name="email" required maxlength="13" />

                  <textarea placeholder="Mensagem" type="text" name="message" required maxlength="100"></textarea>

                  <button className={styles.btn}>Enviar mensagem</button>
                  
              </form>
          </div>
          <div className={styles.contatos}>
            <h2>Entre em contato</h2>
            <span><i class="fab fa-instagram"></i>Instagram: Ligia Oliveira </span>
            <span><i class="fab fa-facebook-f"></i>Facebook: Ligia Oliveira</span>
            <span><i class="far fa-envelope"></i>Email: ligiaoliveirafotografia@gmail.com</span>
            <span> <i class="fab fa-whatsapp"></i>Telefone: (21) 9999 9999</span>
          </div>
          </div>
        
         
      </div>
     
        </>
    )
}

export default contato
