const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path)  => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
        return sum + value;
    }, 0);
}

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
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        case 'REMOVE_CART_ITEM':
            const newItems = {...state.items};
            const currentTotalPrice = newItems[payload].totalPrice;
            const currentTotalCount = newItems[payload].items.length;
            delete newItems[payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };

        case 'PLUS_CART_ITEM':{
            const newObjItems = [
                ...state.items[payload].items,
                state.items[payload].items[0],
            ]
            const newItems = {
                ...state.items,
                [payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            }
            
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        
            case 'MINUS_CART_ITEM':{
                
                const oldItems = state.items[payload].items;
                const newObjItems = oldItems.length > 1 ? state.items[payload].items.slice(payload) : oldItems;
                
                const newItems = {
                    ...state.items,
                    [payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                    }
                }

                const totalCount = getTotalSum(newItems, 'items.length');
                const totalPrice = getTotalSum(newItems, 'totalPrice');
                
                return {
                    ...state,
                    items: newItems, 
                    totalCount,
                    totalPrice,
                };
            }

        default:
            return state;
    };
}

export default cart;
