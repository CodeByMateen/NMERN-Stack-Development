import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "./UserSlice";

const AdminSlice = createSlice({
    name: 'admin',
    initialState: [],
    reducers: {
        
    },
    extraReducers(builder){
        builder.addCase(deleteUsers, ()=>{
            return []
        })
    }
})

export default AdminSlice