import { createSlice } from '@reduxjs/toolkit'

interface IModal {
    isOpen: boolean;
    isClose: boolean;
}

const initialState: IModal = {
    isOpen: false,
    isClose: true,
}

export const Modal = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        setIsOpenModal: (state, action) => {
            state.isOpen = action.payload;
        },
        setIsCloseModal: (state, action) => {
            state.isClose = action.payload;
        }  
    },
})

export const {setIsOpenModal, setIsCloseModal} = Modal.actions;
export default Modal.reducer;