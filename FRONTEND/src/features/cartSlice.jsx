import {createSlice} from '@reduxjs/toolkit';
const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addbook:(state,action)=>{
            const {book,quantity}=action.payload;
            const quantity_num=parseInt(quantity);
            let isExisting=state.find((cartbook)=>cartbook.id===book.id);
         
            if(isExisting){
                   let isExisting_quantity=parseInt(isExisting.quantity);
                   isExisting_quantity+=quantity_num;
                   isExisting.quantity =isExisting_quantity;
            }
            else{
                state.push({...book,quantity});
            }
        },
        removebook:(state,action)=>{
            const id=action.payload;
            return state.filter((item)=>item.id!==id);
        },
    }
});
export const {addbook,removebook}=cartSlice.actions;
export default cartSlice.reducer;