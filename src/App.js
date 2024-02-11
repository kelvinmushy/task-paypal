
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CreateTaskForm from './Components/Task/CreateTaskForm';
import PaymentComponents from './Components/Payments/PaymentComponents';
import TaskComponent from './Components/Task/TaskComponent';
import PaymentHistory from './Components/Payments/PaymentHistory';
function App() {
  return (
    <div>
      
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomeComponent />}/>
        <Route path="/new/task" element={<CreateTaskForm/>}/>
        <Route path="/all-task" element={<TaskComponent/>}/>
        <Route path="/paypal/payment/method/:id" element={<PaymentComponents/>}/>
        <Route path="/payment/history" element={<PaymentHistory/>}/>
        
       </Routes>
   </BrowserRouter>
    </div>
   
  );
}

export default App;