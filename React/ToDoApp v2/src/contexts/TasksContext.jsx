import { createContext,useContext,useReducer } from "react";
import taskReducer from '../reducers/tasksReducer'

const TasksContext = createContext([]);

export const TasksProvider = ({children})=>{
    const [tasks,dispatch] = useReducer(taskReducer,[]);
    return <TasksContext.Provider value={{tasks,dispatch}}>
            {children}
        </TasksContext.Provider>
}

export const useTasks = ()=>{
    return useContext(TasksContext);
}