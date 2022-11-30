import { createSlice } from '@reduxjs/toolkit'

interface IBurgerMenu {
    open: boolean;
}

const initialState: IBurgerMenu = {
  open: false,
}

export const BurgerMenu = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = !action.payload;
      
        },  
    },
})

export const {setOpen} = BurgerMenu.actions;
export default BurgerMenu.reducer;