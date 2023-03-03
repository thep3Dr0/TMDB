import {configureStore} from"@reduxjs/toolkit"
import UserReducer from "./UserContext"
import ElementReducer from "./ElementContex"

const store = configureStore({
    reducer: {
        user: UserReducer,
        element: ElementReducer,
    }
})

export default store