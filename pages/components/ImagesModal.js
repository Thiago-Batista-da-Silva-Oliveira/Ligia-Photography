import React, { useContext} from 'react'
import { AuthContext } from '../../context/context'


const Images = ({id,alt,src}) => {
    const {getId} = useContext(AuthContext)

    return (
        <>

        <img  onClick={ () => getId(id)} data-animee= "left" src={src} alt={alt} />

        </>

      
            
        
    )
}

export default Images
