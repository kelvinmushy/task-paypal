import React, { useState } from 'react';
// import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
    const [currency, setCurrency] = useState(options.currency);
   

    console.log(props.amount);
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
                        value:props.amount,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
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