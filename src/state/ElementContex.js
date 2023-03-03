import { createAction,createReducer } from "@reduxjs/toolkit"


export const selectElement = createAction("SELECTELEMENT")
export const deselectElement = createAction("DESELECTELEMENT")


const initialState = {
    value:null
}

const reducer = createReducer(initialState,{
    [selectElement]: (state,action) =>{
        state.value = action.payload
    },
    [deselectElement]: (state,action)=>{
        state.value = null
    }
})

export default reducer