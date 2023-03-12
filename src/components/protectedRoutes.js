import React, {useCallback, useEffect} from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {API, LOCAL_STORAGE_KEYS, ROUTES, SERVER_ERROR_MESSAGE} from '../globalConstants';
import useRedux from '../hooks/useRedux';
import useApi from '../hooks/useApi';
import { MODAL_STATE, PROFILE_DATA } from '../state-manager/stateConstants';

export default function ProtectedRoutes() {
    const location = useLocation();
    const performApiCall = useApi();
    const updateProfileData = useRedux(PROFILE_DATA);
    const updateModalInfo = useRedux(MODAL_STATE);

    const prevRoute = localStorage.getItem(LOCAL_STORAGE_KEYS.prevRoute)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.prevRoute)

    const getProfileData = useCallback(async () => {
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
    }, [])

    const isLogged = useSelector(state => state.profileData) != null
    const isLocationAuth = location.pathname === ROUTES.auth;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        getProfileData();

    }, [location]);

    let component;
    if (isLocationAuth){
        localStorage.setItem(LOCAL_STORAGE_KEYS.prevRoute, prevRoute)
        component = isLogged? <Navigate to={ prevRoute !== null? prevRoute : ROUTES.main } /> : <Outlet />;
    }
    else{
        localStorage.setItem(LOCAL_STORAGE_KEYS.prevRoute, location.pathname)
        component = isLogged? <Outlet /> : <Navigate to={ ROUTES.auth } />;
    }

    return component;
}