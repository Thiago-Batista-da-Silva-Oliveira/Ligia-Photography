import {useState,createContext} from 'react'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [modal, setModal] = useState(false)
    const [modalId, setModalId] = useState()
    
   
    function getId (id){
       setModal(true)
       setModalId(id)

    }

    function nextImage () {
        if(modalId === 14) {
            setModalId(1)
        }else{
        setModalId( modalId + 1 )
        }
    }

    function nextImage7 () {
        if(modalId === 7) {
            setModalId(1)
        }else{
        setModalId( modalId + 1 )
        }
    }

    function prevImage () {
        if(modalId === 1) {
            setModalId(14)
        }else{
        setModalId( modalId - 1 )
        }
    }

    
    function prevImage7 () {
        if(modalId === 1) {
            setModalId(7)
        }else{
        setModalId( modalId - 1 )
        }
    }

    function close () {
        setModalId(null)
        setModal(false)
    }

      return(
     <AuthContext.Provider value={{
        modal,setModal,modalId,setModalId,getId,nextImage,prevImage,close,nextImage7,prevImage7

}
}
    >
       {children}
     </AuthContext.Provider>
    )
}
export default AuthProvider