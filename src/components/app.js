import { Route, Routes } from 'react-router-dom';

import Content from './content';
import Error404 from './error404';
import AuthenticationWrap from './authentication/authenticationWrap';
import ProtectedRoutes from './protectedRoutes';
import { routes } from '../globalConstants';
import '../styles/placeholder.css';
import '../styles/validation.css';
import '../styles/body.css';

export default function App() {
    return (
        <div id="App" className="d-flex w-100 h-100">
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path={routes.main} element={<Content />} />
                    <Route path={routes.auth} element={<AuthenticationWrap />} />
                </Route>
                <Route path={routes.notFound} element={<Error404 />} />
            </Routes>
        </div>
    )
}