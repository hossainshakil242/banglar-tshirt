import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {

    let message ; 
    if(cart.length === 0){
         message = <p>Please add some products</p>
    }
    else{

        message = <div><small>Thanks to add product{cart.length > 1 && 's'}.</small></div>
    }

    return (
        <div>
            <h2 className={cart.length > 3 ? 'red' : 'khaki'}>Order summary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 || <h4><small>here no two products.</small></h4>
            }
        </div>
    );
};

export default Cart;

/**
*  Conditional Rendering.
1. use if else to set variable that will contain an element , components 
2. ternary = condition ? true : false.
3. logical && = if the condition id true then the next thing will be displayed.
4. logical || = if the condition id false then the next thing will be displayed.
*/

/**
 * Conditional Css
 * 1. use ternary
 * 2. ternary inside template string.
*/