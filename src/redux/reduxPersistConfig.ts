import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import UserReducer from './slices/UserSlice';
import CartReducer from './slices/CartSlice';
import OrdersReducer from './slices/OrdersSlice';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['reducer1', 'reducer2'],
    // whitelist: ['reducer3'],
}

const rootReducer = combineReducers({
    User: UserReducer,
    Cart: CartReducer,
    Order: OrdersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer}