import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState}  from "react";
import  {CardBody, Col,Row, CardHeader, Card, CardFooter} from 'react-bootstrap';
import {useParams } from "react-router-dom";
import http from '../Https/http'
import PaypalCheckoutButton from "./PaypalCheckoutButton";



const PaymentFrom = () => {

  
    const [inputs,setInputs]=useState({});
    const {id}=useParams();   
  
    const amount=inputs.price;
    useEffect(()=>{
      fetchTask();
    },[]);
    
    
    const fetchTask=()=>{

      http.get('/show/'+id).then((res)=>{
        setInputs({
          name:res.data.data.name,
          price:res.data.data.price,
          id:res.data.data.id
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


<Row>
<Col md={3}>
         
         </Col>
             <Col md={6}>
               <Card className='TaskContent'>
                 <CardHeader className="CardCenter"><h5>{inputs.name}</h5></CardHeader>
                 <CardBody>
                 <h5 ><span className="text-warning" >This Amount Will Be Reducted From Your Balance</span>:${inputs.price}</h5>
                 </CardBody>
                  <CardFooter>
                  
                  <PayPalScriptProvider options={initialOptions}>
                     <PaypalCheckoutButton  amount={amount}
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

export default PaymentFrom