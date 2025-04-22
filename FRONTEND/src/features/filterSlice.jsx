import {createSlice} from '@reduxjs/toolkit';
const initialState={
    selectedGenres:[],
    searchItem:"",
    selectedSort:"",
};
const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{
        genereCheckboxReducer:(state,action)=>{
            const selectedGenre=action.payload;
            if(state.selectedGenres.includes(selectedGenre)){
                state.selectedGenres=state.selectedGenres.filter((genre)=>genre!==selectedGenre);
            }
            else{
                state.selectedGenres.push(selectedGenre);
            }
        },
        addSearchItem:(state,action)=>{
            state.searchItem=action.payload;
        },
        addSortType:(state,action)=>{
            if(state.selectedSort===action.payload){
                state.selectedSort="";
            }
            else{
                state.selectedSort=action.payload;
            }
        }
    }
})
export const { genereCheckboxReducer,addSearchItem,addSortType} = filterSlice.actions;
export default filterSlice.reducer;