import React from 'react';

import { connect } from 'react-redux';

// Selectors
import { createSelector } from 'reselect';

const Cart = ({ cart, total, addProduct, setShipping }) => (
    <div>
        <h1>Carrinho</h1>
        <p> Items: <strong> {cart.items.length} </strong> </p>
        <p> Flete: <strong> {cart.shipping_value} </strong> </p>
        <p> Total: <strong> {total} </strong> </p>

        <button onClick={addProduct}>Adicionar Producto</button>
        <button onClick={setShipping}>Calcular flete</button>
    </div>
);

// Funcion para calcular el total
// Para el selector solo vamos a monitorear los items del state
const calculateTotal = createSelector(
    state => state.items,
    (items) => {
        console.log('Estamos usando selector para el item');

        return items.reduce((subtotal, item) => subtotal + item.price, 0);
    }
);

const hola=()=>{
    console.log("esta es la funcion");
    
}

// Map state to props
const mapStateToProps = state => ({
    cart: state,
    //total: hola()
    total: calculateTotal(state)
});

// Map distpatch to props
const mapDispatchToProps = dispatch => ({
    addProduct: () => dispatch({ type: "ADD" }),
    setShipping: () => dispatch({ type: "SET_SHIPPING" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);