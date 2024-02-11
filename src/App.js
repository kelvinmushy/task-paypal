
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CreateTaskForm from './Components/Task/CreateTaskForm';
import PaymentComponents from './Components/Payments/PaymentComponents';
import TaskComponent from './Components/Task/TaskComponent';

function App() {
  return (
    <div>
      
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomeComponent />}/>
        <Route path="/new/task" element={<CreateTaskForm/>}/>
        <Route path="/all-task" element={<TaskComponent/>}/>
        <Route path="/paypal/payment/method/:id" element={<PaymentComponents/>}/>
        
       </Routes>
   </BrowserRouter>
    </div>
   
  );
}

export default App;