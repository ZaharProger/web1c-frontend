import { Route, Routes } from 'react-router-dom';

import Authentication from './authentication';
import ProtectedRoutes from './protectedRoutes';
import { routes } from '../globalConstants';
import '../styles/placeholder.css';

export default function App(){
    return(
        <Routes>
            <Route element={ <ProtectedRoutes /> }>
                {/* <Route path={ routes.main } element={ <Content /> } /> */}
                <Route path={ routes.auth } element={ <Authentication /> } />
            </Route>
            {/* <Route path={ routes.not_found } element={ <NotFoundPage /> } /> */}
        </Routes>
    )
}

//TODO:
//Сделать страницу 404 и пока что заглушку для главного меню, куда будут перенаправляться авторизованные юзеры,
//после чего раскомментить роуты.

//Немного теории:
//Когда создаешь компоненты лучше писать export default вместо export.
//В таком случае ты можешь при импорте явно писать имя компонента (например, import Authentication from ...).
//А если писать export, то нужно будет указывать имя в скобках фигурных (import { Authentication } from ...). 
//Обычный export уместнее использовать, если нужно много чего импортировать из одного js файла.