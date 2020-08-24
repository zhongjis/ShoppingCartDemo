import {CART_ADD_ITEM} from '../constants/cartConstants';

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(
                (x) => x.productId === item.productId
            );
            if (product) {
                return {
                    cartItems: state.cartItems.map((x) =>
                        x.product === product.productId ? product : item
                    ),
                };
            } else {
                return {cartItems: [...state.cartItems, item]};
            }
        default:
            return state;
    }
}

export {cartReducer};