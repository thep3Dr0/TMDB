import { createAction,createReducer } from "@reduxjs/toolkit"
import axios from "axios"



export const login = createAction("LOGIN")
export const logout = createAction("LOGOUT")
export const addfav = createAction("ADDFAV")

const initialState = {
    value:null
}

const reducer = createReducer(initialState,{
    [login]: (state,action) =>{
        state.value = action.payload
    },
    [logout]: (state,action)=>{
        state.value = null
    },
    [addfav]:(state,action)=>{
        axios.post("http://localhost:3001/user/add-favorite",{
            id:state.value.id,
            element: action.payload
        }).then((res)=>console.log(res.data))
        .catch(err=>err)
    }
})

export default reducer