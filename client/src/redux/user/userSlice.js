import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error: null,
    loading:false
}
// here the user info is reffered to as action 
//{"_id":{"$oid":"6797bb0b988850a346caf9cf"},"username":"xyz","password":"$2a$10$IgYvhqTUReb4z00g4MedQ.Fe42wOGrs/s75SV1d5P0jsU8AB2b.M2","createdAt":{"$date":{"$numberLong":"1737997067922"}},"updatedAt":{"$date":{"$numberLong":"1737997067922"}},"__v":{"$numberInt":"0"}}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export const {signInFailure,signInStart,signInSuccess} = userSlice.actions;

export default userSlice.reducer;