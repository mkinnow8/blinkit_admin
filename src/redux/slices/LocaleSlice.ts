import { createSlice } from '@reduxjs/toolkit'
import { english, hindi, punjabi } from '../../utilities/locale';


const initialState = {
    locale: english,
}

const LocaleSlice = createSlice({
    name: 'LocaleSclice',
    initialState,
    reducers:{
        setEnglish: (state, action)=>{
            state.locale = english 
        },
        setHindi: (state, action)=>{
            state.locale = hindi 
        },
        setPunjabi: (state, action)=>{
            state.locale = punjabi 
        },
    }

})

export const { setEnglish, setHindi, setPunjabi } = LocaleSlice.actions;
export default LocaleSlice.reducer;