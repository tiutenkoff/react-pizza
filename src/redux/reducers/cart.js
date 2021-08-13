const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_PIZZA_CART':{
            const currentPizzaItems = !state.items[payload.id]
            ? [payload]
            : [...state.items[payload.id].items , payload]
            const newItems = {
                ...state.items,
                [payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            };

            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);
            
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        default:
            return state;
    };
}

export default cart;
