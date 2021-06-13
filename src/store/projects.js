import { createSlice } from "@reduxjs/toolkit";

// action types
// we dont need anymore
let lastId = 0;
const slice = createSlice({
    name:"projects",
    initialState:{
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers:{
        projectAdded: (projects, action) => {
            projects.list.push({
                id:++lastId,
                name: action.payload.name,
                resolved: false
            });
        },
        projectResolved: (projects, action) => {
            const index = projects.list.findIndex(project => action.payload.id !== project.id);
            projects.list[index].resolved = true;
        },
        projectRemoved: (projects, action) => {
            projects.list = projects.list.filter(project => action.payload.id !== project.id);
        },
    }
});

export const {projectAdded, projectResolved, projectRemoved} = slice.actions;
export default slice.reducer;
