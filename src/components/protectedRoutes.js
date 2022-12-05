import { useEffect } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { API, LOCAL_STORAGE_KEYS, ROUTES, SERVER_ERROR_MESSAGE } from '../globalConstants';
import useRedux from '../hooks/useRedux';
import useApi from '../hooks/useApi';
import { MODAL_STATE, PROFILE_DATA } from '../state-manager/stateConstants';

export default function ProtectedRoutes() {
    const location = useLocation();
    const performApiCall = useApi();
    const updateProfileData = useRedux(PROFILE_DATA);
    const updateModalInfo = useRedux(MODAL_STATE);

    const isLogged = useSelector(state => state.profileData) != null || 
    localStorage.getItem(LOCAL_STORAGE_KEYS.isLogged) === '1';
    localStorage.removeItem(LOCAL_STORAGE_KEYS.isLogged);

    const isLocationAuth = location.pathname == ROUTES.auth;
    const requiredRoutes = [ROUTES.main];

    window.onbeforeunload = () => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.isLogged, isLogged? '1' : '0');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);

        if (requiredRoutes.includes(location.pathname)){
            async function getProfileData(){
                const requestString = `${API.endpoints.users}?${API.params.type}=2`;
                const { ok, responseBody } = await performApiCall(requestString, API.methods.get);
                
                if (ok){
                    updateProfileData(responseBody.result? responseBody.data[0] : null);
                }
                else{
                    updateModalInfo({
                        isActive: true,
                        message: SERVER_ERROR_MESSAGE
                    });
                }
            }

            getProfileData();
        }
    }, [location.pathname]);

    let component;
    if (isLocationAuth){
        component = isLogged? <Navigate to={ ROUTES.main } /> : <Outlet />;
    }
    else{
        component = isLogged? <Outlet /> : <Navigate to={ ROUTES.auth } />;
    }

    return component;
}