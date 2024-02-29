import { createSlice } from "@reduxjs/toolkit";
import { deleteUsersImport } from "../actions/userAction";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action){
            // console.log("delete called")
            return []
        }
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteUsers, ()=>{
            return []
        })
    }
})

console.log(userSlice.actions)

export default userSlice
export const {addUser, removeUser, deleteUsers} = userSlice.actions