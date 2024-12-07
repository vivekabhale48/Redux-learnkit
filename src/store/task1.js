const ADD_TASK = 'ADD_TASK';
const UPDATE_COMPLETED = 'UPDATE_COMPLETED';
const REMOVE_TASk = 'REMOVE_TASK';


export const addTask = (name) => {
    return {type: ADD_TASK, payload: {taskName: name}}
}

export const removeTask = (id) => {
    return {type: REMOVE_TASk, payload: {id}}
}

export const updateComplete = (id) => {
    return {type: UPDATE_COMPLETED, payload: {id}}
}

let id=0;
export const reducer = (state=[], action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, {id: ++id, name: action.payload.taskName, completed: false }];

        case REMOVE_TASk:
            return state.filter((task) => task.id !== action.payload.id);

        case UPDATE_COMPLETED:
            return state.map((task) => task.id === action.payload.id ? {...task, completed: true} : task);
    }
}
