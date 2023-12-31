import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, productDetailsReducer} from './reducers/productReducers';
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer } from './reducers/orderReducers';
import { newReviewReducer } from './reducers/productReducers';

const reducer = combineReducers({
    // reducers
    products : productsReducer,
    productDetails : productDetailsReducer,
    auth : authReducer,
    user : userReducer,
    forgotPassword : forgotPasswordReducer,
    cart: cartReducer,
    order: orderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
})
let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

