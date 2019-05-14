const INITIAL_SATE = {
    items: [],
    shipping_value: 0
};

export default function cart(state = INITIAL_SATE, action) {
    switch (action.type) {
        case 'ADD':
        
            // Asigna a la llave price del campo items un valor randómico entre 1 y 400
            return {
                ...state,
                items: [...state.items, { price: Math.floor(Math.random() * 400) + 1 }]
            }

        case 'SET_SHIPPING':
            // Asigna un valor randómico entre 1 y 100 a shipping_value
            return {
                ...state,
                shipping_value: Math.floor(Math.random() * 100) + 1
            }

        default:
            return state;
    }
}