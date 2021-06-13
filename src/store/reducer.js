import { combineReducers } from "redux";

import bugsReducer from './bugs';
import projectsReducer from './projects';

const entitiesReducer = combineReducers({
    bugs: bugsReducer, 
    projects: projectsReducer
})

export default combineReducers({
    entities: entitiesReducer
})