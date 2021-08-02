import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/context'
import Navbar3 from './components/Navbar3'
import styles from '../styles/newborn.module.css'
import Footer from './components/Footer'
import Images from './components/Images'
import ImagesModal from './components/ImagesModal'
import data from '../data'

const newborn = () => {
  const {modalId, nextImage7,prevImage7,close,modal} = useContext(AuthContext)
  const modalPhoto = data.photosNewBorn.find((e) => e.id === modalId)
  if (typeof window === 'object') {
    useEffect(() => {
      const targett = document.querySelectorAll('[data-animee]')
      function animeScrolll(){
       
      
        const animationClasss = 'animatee'
          targett.forEach(function(element){
           
               element.classList.add(animationClasss)
            
          })
        }
        animeScrolll()
       
    }, [modal])
  }

    return (
       <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      </Head>
      <Navbar3 />
      {
        modalId ? (
          <div className="modalContainer">
          <div className="modalContainerPhotos">
             <img src={modalPhoto.src} alt={modalPhoto.alt} /> 
          </div>
          <i   className="fas fa-arrow-circle-right" onClick={nextImage7}></i>
       
          <i  className="fas fa-arrow-circle-left" onClick={prevImage7}></i>  
         
          <div className="close" onClick={close}>X</div>

          <div className="modalContainerSmall" >
          {data.photosNewBorn.map((photo) => (
               <ImagesModal key={photo.id} id={photo.id} alt={photo.alt} src={photo.src} />
             ))} 
          </div>
         
          </div>
        ) : (
          <div className={styles.container}>
          <div className={styles.text}>
              <h1>NewBorn</h1>
              <p> O ensaio newborn é uma calma e linda experiencia. Nele é registrado os doces e delicados momentos do bebê, os detalhes de uma nova vida e o inicio de uma jornada para</p>
              <p>a família formada! É um momento de criar fotos atemporais que nunca serão esquecidas!</p>
              <p><strong>Ensaio Newborn no Rio de Janeiro </strong></p>
              <p>Confira abaixo em nossas galerias os ensaios newborn realizados aqui no Rio de Janeiro.</p>
          </div>
        <div className={styles.img_container}>
              <div  className={styles.images}>
              {data.photosNewBorn.map((photo) => (
                <Images key={photo.id} id={photo.id} alt={photo.alt} src={photo.src} />
              ))} 
              </div>
        </div>
        <Footer />
      </div>
        )
       }
       </>
    )
}

export default newborn
