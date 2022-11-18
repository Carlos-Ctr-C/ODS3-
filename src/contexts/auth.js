import React, { createContext, useState } from 'react';
import {ModalApp} from '../components/ModalApp/index';
import {ModalAula} from '../components/ModalAula/index';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(true);
    const [mVisible, setmVisible] = useState(false);
    const [AulaVisible, setAulaVisible] =useState(false);
    const [Video, setVideo] = useState('');
    const [Desc, setDesc] = useState('');
    const [Icon, setIcon] = useState('');
    const [Qnt, setQnt] = useState('');
    const [Nota, setNota] = useState('');
    const [Nome, setNome] = useState('');

    function signIn (){
        setUser(false);
    }
    function signOut (){
        setUser(true);
    }

    function OpenModal() {
        setmVisible(true);
    }

    function OpenModalAula(vid) {
        setAulaVisible(true);
    }

    function closeModal() {
        setmVisible(false);
    }


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signIn,
            signOut,
            mVisible,
            setmVisible,
            closeModal,
            OpenModal,
            AulaVisible,
            setAulaVisible,
            OpenModalAula,
            setVideo,
            setDesc,
            setIcon,
            setQnt,
            setNota,
            setNome,

        }}>
            {children}
            <ModalApp visible={mVisible} setMVisibel={setmVisible} />
            <ModalAula visibleAula={AulaVisible} Listvideo={Video} Listdesc={Desc} setMVisibelAula={setAulaVisible} 
                       ListIcon={Icon} ListQnt={Qnt} ListNota={Nota} ListNome={Nome}
            />
        </AuthContext.Provider>
    )
}

export default AuthProvider;