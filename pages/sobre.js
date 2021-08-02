import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/sobre.module.css'
import Footer from './components/Footer'
import Navbar3 from './components/Navbar3'
const sobre = () => {
    return (
        <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      </Head>
           <Navbar3 />
           <div className={styles.container}>
             <div className={styles.containerAbout}>
             <div className={styles.img_container}>
            <div className={styles.img}>
                   <img src="/Perfil.jpg" alt="Perfil"/>
            </div>
            </div>
            <div className={styles.about}>
                <p>Me chamo Ligia Oliveira,  atuo há 5 aos como fotógrafa e sou apaixonada pelo que faço.</p>
                <p>A fotografia entrou na minha vida em meio a um tratamento contra a síndrome do pânico e crises de ansiedade, e de uma terapia virou profissão,  que exerço com muito amor e dedicação.</p>
                <p>Atualmente meu foco é no <strong>Ensaio Gestante</strong>, <strong>Newborn posado ou lifestyle</strong>, <strong>Acompanhamento Infantil</strong> e <strong>Festa Infantil</strong>.</p>
                <p>Esse acompanhamento desde a gestação facilita para que eu atenda o cliente da melhor forma no primeiro ano de vida da família com o bebê,  registrando as fases mais importantes.</p>
                <p>Fotografar é eternizar os momentos, e pra mim o principal é fazer desses registros memórias inesquecíveis de um dia especial.</p>
                <div className={styles.btn_container}>
                  <Link href="/contato">
                 <button className={styles.btn}>Entre em contato</button>
                 </Link>
                 </div>
            </div>
            </div>
            <Footer/>
           </div>
          
      </>
    )
}

export default sobre
