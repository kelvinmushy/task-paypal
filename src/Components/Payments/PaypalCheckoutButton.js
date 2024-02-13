import React, { useState,useEffect } from 'react';
import http from "../Https/http";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {useNavigate} from "react-router-dom";
const PaypalCheckoutButton = props => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

      
    const [currency, setCurrency] = useState(options.currency);

    const vavigate=useNavigate();
    // var x;



    // console.log(price);

    // useEffect(()=>{
    //     lastOrder();
    //     x=price;
    //    },[]);
    

    // const lastOrder=()=>{
    //     http.get('/order').then((res)=>{
    //         setPrice(res.data.price);
    //     });
    //   }


    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);

        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
       }
    const onCreateOrder = (data,actions) => {

        
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value:121
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {

            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);

            http.get('/update/status').then((res)=>{

                vavigate('/home');

              });

        });
    }
  
   
   

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                   <div className='from-group SelectCurrency'>
                    
                    <select value={currency} onChange={onCurrencyChange} className='form-control'>
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                    </select>
                    
                   </div>

                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                        
                    />
                </>
            )}
        </div>
    );
}

export default PaypalCheckoutButton;