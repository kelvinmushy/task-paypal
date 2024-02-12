import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import TaskComponent from '../components/Task/TaskComponent';
import NewTaskForm from '../components/Task/NewTaskForm';
import PaymentFrom from '../components/Payments/PaymentForm';
import PayHistory from '../components/Payments/PayHistory';
import Home from '../components/Home';

function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/task-list">Task</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" to="/payment/history">Payment History</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    <Route path="/task-list" element={<TaskComponent/>} />
                    <Route path="/new/task" element={<NewTaskForm/>} />
                    <Route path="/paypal/payment/method/:id" element={<PaymentFrom/>}/>
                    <Route path="/payment/history" element={<PayHistory/>}/>
                </Routes>
            </div>
        </>
    );
}

export default Auth;
