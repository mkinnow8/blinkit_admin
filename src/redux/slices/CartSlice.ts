import { createSlice } from '@reduxjs/toolkit'

const initialState: Cart = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers:{
        addItemToCart: (state, action)=>{
            if(state.cartItems.length !== 0){
                const index = state.cartItems.findIndex((item)=>{
                    return item.productId === action.payload.productId
                })
                if(index!== -1){
                    state.cartItems[index].quantity += 1;
                }else{
                    state.cartItems.push(action.payload);
                }
            }else{
                state.cartItems.push(action.payload);
            }

            if(action.payload.discountAvailable){
                state.totalPrice += +action.payload.discountPrice;
            }else{
                state.totalPrice += +action.payload.actualPrice;
            }
            state.totalItems += 1;
                  
        },
        removeItemFromCart: (state, action)=>{
            if(state.cartItems.length !== 0){
                const index = state.cartItems.findIndex((item)=>{
                    return item.productId === action.payload.productId
                })
                if(index!== -1){
                    if(state.cartItems[index].discountAvailable){
                        state.totalPrice -= +state.cartItems[index].discountPrice;
                    }else{
                        state.totalPrice -= +state.cartItems[index].actualPrice;
                    }
                    state.totalItems -= 1;

                    if(state.cartItems[index].quantity > 1)
                        state.cartItems[index].quantity -= 1;
                    else{
                        state.cartItems.splice(index, 1);
                    }
                }

            }
        },
        emptyCart: (state, action)=>{
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalItems = 0;
        },
    }

})

export const { addItemToCart, removeItemFromCart, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;