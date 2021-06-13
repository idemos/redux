import { createSlice } from "@reduxjs/toolkit";

// action types
// we dont need anymore
let lastId = 0;
const slice = createSlice({
    name:"bugs",
    initialState:{
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers:{
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id:++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => action.payload.id !== bug.id);
            bugs.list[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            bugs.list = bugs.list.filter(bug => action.payload.id !== bug.id);
            // const index = bugs.list.findIndex(bug => action.payload.id !== bug.id);
            // bugs.list.slice(index,1);
        },
    }
});

export const {bugAdded, bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;
