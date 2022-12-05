import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import changeProfileData from '../state-manager/actions/changeProfileData';
import changeModalState from '../state-manager/actions/changeModalState';
import { PROFILE_DATA, MODAL_STATE } from '../state-manager/stateConstants';

export default function useRedux(reduxAction){
    const dispatch = useDispatch();

    //Хук формирует функцию-callback, которая направляет запрос на изменение данных в Redux в
    //зависимости от переданного ключа экшена.
    let callback = null;
    switch(reduxAction){
        case PROFILE_DATA:
            callback = (profileData) => dispatch(changeProfileData(profileData));
            break;
        case MODAL_STATE:
            callback = (modalState) => dispatch(changeModalState(modalState));
            break;
    }

    //Оборачиваем полученный callback в хук UseCallback для того, чтобы кэшировать функцию.
    //Возвращаем окончательный callback как результат работы хука.
    return useCallback(callback, []);
}