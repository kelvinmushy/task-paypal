
import "./../style.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState}  from "react";
import  { Form ,CardBody, Col,Row, CardHeader, Card, CardFooter} from 'react-bootstrap';
import NavComponent from '../Layouts/NavComponent';
import PaypalCheckoutButton from "../PayPal/PaypalCheckoutButton";
import {useParams } from "react-router-dom";
import http from "../Https/http";

const PaymentComponents= () => {
    const [inputs,setInputs]=useState({});
    const {id}=useParams();   
  

    useEffect(()=>{
      fetchTask();
    },[]);
    
    const fetchTask=()=>{
      http.get('/show/'+id).then((res)=>{
        setInputs({
          name:res.data.data.name,
          price:res.data.data.price
        });
        
      });
    }
 

  

    const initialOptions = {
     "client-id": "Ad9Yt25RQZKk8DWP95PHAtRbgAPaQAOMyOJrkzjyJZkQ8gTxm6ww5OqkYsUmwQegc5e2uvZIJtTTd7Is",
      currency: "USD",
      intent: "capture",
      
    };
    



  return (
 <div>

<NavComponent/>
<Row>
<Col md={3}>
         
         </Col>
             <Col md={6}>
               <Card className='TaskContent'>
                 <CardHeader className="CardCenter"><h5>{inputs.name}</h5></CardHeader>
                 <CardBody>
                 <h5 ><span className="text-warning" >This Amount Will Be Reducted From Your Balance</span>:{inputs.price}</h5>
                 </CardBody>
                 <CardFooter>
                 <PayPalScriptProvider options={initialOptions}>
                 <PaypalCheckoutButton  amount={inputs.price}
                 task_id={inputs.id}
                 />
                 </PayPalScriptProvider>
                 </CardFooter>
               </Card>
             
              </Col>
              <Col md={3}>
              
              </Col>
         </Row>

    </div>
   
  )
}

export default PaymentComponents