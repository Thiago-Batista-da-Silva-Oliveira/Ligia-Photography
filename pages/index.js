import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import ImageSlider from '../sliderData/ImageSlider'
import {SliderData} from '../sliderData/SliderData'
import Link from 'next/link'
import { useEffect } from 'react'
import Footer from './components/Footer'

export default function Home() {
  if (typeof window === 'object') {
    useEffect(() => {
      const target = document.querySelectorAll('[data-anime]')
      function animeScrolll(){
       
      
        const animationClasss = 'animate'
          target.forEach(function(element){
           
               element.classList.add(animationClasss)
            
          })
        }
        animeScrolll()
       
    }, [])
  }

  return (
    <>
         <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      </Head>
      <Navbar />
      <Navbar2/>
      <div className={styles.container}>
        <div className={styles.img_container}>
           <ImageSlider slides={SliderData}/>
        </div>
        <div className={styles.pacotes}>
        <div className={styles.options}>
         <div className={styles.card}>
           <i class="fas fa-baby"></i>
           <h1>New Born</h1>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
         </div>

         <div className={styles.card}>
         <i class="fas fa-child"></i>
           <h1>Infantil</h1>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
         </div>

         <div className={styles.card}>
         <i class="fas fa-gifts"></i>
           <h1>Festas</h1>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
           <span>Texto</span>
         </div>
        </div>
        </div>
        
       <div className={styles.trabalhos}>
         <h1>Ultimos ensaios</h1>
       </div>
      
      <div className={styles.ultimosTrabalhos}>
        <div className={styles.ultimos2}>
          
           <div className={styles.ultimoCard}>
             <Link href="/newborn">
                <img  data-anime= 'left' src='/IMG_3095.jpg' alt="Ensaio Fotográfico" />
             </Link>
           </div>

           <div className={styles.ultimoCard}>
           <Link href="/infantil">
           <img  data-anime= 'left' src='/IMG_9545.jpg' alt="Ensaio Fotográfico" />
           </Link>
           </div>
        </div>

        <div className={styles.ultimos3}>

        <div className={styles.ultimoCard}>
        <Link href="/festainfantil">
           <img  data-anime= 'left' src='/IMG_8758.jpg' alt="Ensaio Fotográfico" />
        </Link>
        </div>
        <div className={styles.ultimoCard}>
        <Link href="/festainfantil">
           <img  data-anime= 'left' src='/FestaAnaJulia (1).jpeg' alt="Ensaio Fotográfico" />
        </Link>
        </div>
        <div className={styles.ultimoCard}>
          <Link href="/infantil">
           <img  data-anime= 'left' src='/Bebe.jpg' alt="Ensaio Fotográfico" />
           </Link>
        </div>
         
        </div>
      </div>
      <Footer />
     </div>

    </>
  )
}
