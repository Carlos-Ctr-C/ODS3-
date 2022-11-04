import React, { useContext } from 'react';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { AuthContext } from '../contexts/auth';


function Routes() {

    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <AuthRoutes />
        )
    } else {
        return (
            <AppRoutes />
        )
    }
}
export default Routes;