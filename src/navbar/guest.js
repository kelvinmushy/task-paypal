import { Routes, Route, Link } from 'react-router-dom';

import Login from '../components/login';
import Register from '../components/register';

function Guest() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;
