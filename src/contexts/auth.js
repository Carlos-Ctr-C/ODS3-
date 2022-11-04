import React, { createContext, useState } from 'react';
import {ModalApp} from '../components/ModalApp/index';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(true);
    const [mVisible, setmVisible] = useState(false);

    function signIn (){
        setUser(false);
    }
    function signOut (){
        setUser(true);
    }

    function OpenModal() {
        setmVisible(true);
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
        }}>
            {children}
            <ModalApp visible={mVisible} setMVisibel={setmVisible} />
        </AuthContext.Provider>
    )
}

export default AuthProvider;