import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
function CardItem(props) {
  const [modal, setModal] = useState(false)

  function modalHandler(){
    setModal(true)
    const target = document.querySelectorAll('[data-anime]')
    
    const animationClasss = 'remove'
    target.forEach(function(element){
     
         element.classList.add(animationClasss)
      
    })
  }

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
     {
       modal? ( <div className="modal open">
         <img src="/IMG_3095.jpg" />
       </div>) : (
        <li className={styles.cards__item}>
        <Link href="/" className={styles.cards__item__link} >
            <a>
          <figure  data-anime= 'left'  className={styles.cards__item__pic_wrap} data_category={props.label}>
            <img
              // onClick={modalHandler}
              className={styles.cards__item__img}
              alt='Fotos dos ensaios'
              src={props.src}
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5 data-anime= 'left' className={styles.cards__item__text}>{props.text}</h5>
          </div>
          </a>
        </Link>
      </li>
      
       )
     }
       
      
      
    </>
  );
}

export default CardItem;