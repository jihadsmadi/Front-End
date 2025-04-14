import { useState,useContext,useEffect } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CustomeAlert from './CustomeAlert';
import { v4 as uuidv4 } from 'uuid';

import TaskCard from './TaskCard';
import {TasksContext}  from '../contexts/TasksContext';


export default function Tasks(){
    const {tasks,setTasks,showAlert} = useContext(TasksContext);
    const [alignment, setAlignment] = useState('all');
    const [addingInput,setAddingInput] = useState("")
    
     useEffect(()=>{
        let storedTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        setTasks(storedTasks);
    },[])
    function handleChange(e){
        setAlignment(e.target.value)
    }
    
    let tasksFilter = tasks.filter((t)=>{
        if(alignment === "all")
            return t;

        if(alignment === "complete" && t.isCompleted)
            return t

        if(alignment === 'progress' && !t.isCompleted)
            return t;
    })
    let tasksLists = tasksFilter.map((task)=>{
        return (
            <TaskCard key={task.id} todo={task} />
        )
    })

    function AddTask(title,details = ""){

        const newTask = {
            id : uuidv4(),
            isCompleted : false,
            title : title,
            details : details,
        }
        const newTasks = [...tasks,newTask];
        setTasks(newTasks);
        localStorage.setItem("tasks",JSON.stringify(newTasks));
    }
    function handleAddingInputOnClick(){
        if(addingInput === null || addingInput === "")
        {
            alert("Input Validation Error, pls enter a valied todo");
            return false;
        }
        
        AddTask(addingInput);
        showAlert("تم اضافة المهمة الجديدة")
        setAddingInput("")
    }
    return (
        <div >
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={(e)=>{
        handleChange(e)
      }}
      aria-label="Platform"
      style={{margin: "15px 0"}}
    >
      <ToggleButton style={{fontSize:"10px"}} value="all">الكل</ToggleButton>
      <ToggleButton style={{fontSize:"10px"}} value="complete">منجز</ToggleButton>
      <ToggleButton style={{fontSize:"10px"}} value="progress">غير منجز</ToggleButton>
    </ToggleButtonGroup>
    <div className='tasks' >
    {tasksLists}
    </div>
    {/* Add Input  */}
    <Grid container style={{marginTop:"15px"}}  >
          <Grid size={4} className="">
          <Button className="btnAddNewTask" variant="contained" style={{width:"100%",height:"100%",border:"2px solid #1976d2",transition:"0.4s"}} onClick={handleAddingInputOnClick}>أضافة</Button>
         </Grid>
         <Grid size={8} >

         <TextField value={addingInput} onChange={(e)=>{
            setAddingInput(e.target.value)
         }} className='addingInput' size='small' label="عنوان المهمة" variant="outlined" style={{marginLeft:"5px" }}/>
         </Grid>
     </Grid>
    {/* End Add Input  */}
    
   
    </div>
    )
}