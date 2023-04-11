import React from 'react';
import {StyleSheet, Text, View} from 'react';
import { Checkmark } from 'react-checkmark';

const CheckoutSuccess = () => {
    return (
        <>
        <br></br>
        <Checkmark size='250px'/>


        <div style={{
            textAlign: 'center',
        }}>
            <h1>Thank you for your purchase!</h1>
            <h2>Order Number: 123456789</h2>
            <h2>Order Total: $100.00</h2>
        </div>
        
        </>
        
    );
}


export default CheckoutSuccess;