import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Content from './content';
import Error404 from './error404';
import Modal from './modal';
import AuthenticationWrap from './authentication/authenticationWrap';
import ProtectedRoutes from './protectedRoutes';
import { ROUTES } from '../globalConstants';
import '../styles/placeholder.css';
import '../styles/validation.css';
import '../styles/body.css';

export default function App() {
    const { isActive, message } = useSelector(state => state.modalState);
  
    return (
        <div id="App" className="d-flex w-100 h-100">
            {
                isActive? <Modal message={ message } /> : null
            }
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path={ROUTES.main} element={<Content />} />
                    <Route path={ROUTES.auth} element={<AuthenticationWrap />} />
                </Route>
                <Route path={ROUTES.notFound} element={<Error404 />} />
            </Routes>
        </div>
    )
}