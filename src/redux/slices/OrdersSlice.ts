import { createSlice } from '@reduxjs/toolkit'


const initialState: Orders = {
    ordersList: [],
}

const OrdersSlice = createSlice({
    name: 'OrdersSlice',
    initialState,
    reducers:{
        addOrder: (state, action)=>{
            state.ordersList.push(action.payload)
        },
    }

})

export const { addOrder } = OrdersSlice.actions;
export default OrdersSlice.reducer;