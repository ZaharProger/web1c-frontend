import { Route, Routes } from 'react-router-dom';

import Authentication from './authentication';
import ProtectedRoutes from './protectedRoutes';
import { routes } from '../globalConstants';
import '../styles/placeholder.css';
import '../styles/body.css'

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