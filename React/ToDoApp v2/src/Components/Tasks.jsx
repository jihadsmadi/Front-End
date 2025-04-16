import { useState, useEffect, useMemo } from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Button,
  TextField,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from '@mui/material';


import TaskCard from './TaskCard';
import { useToast } from '../contexts/ToastContext';
import { useTasks } from '../contexts/TasksContext';


export default function Tasks(){
    const {tasks, dispatch} = useTasks()
    const {showAlert} = useToast()
    const [alignment, setAlignment] = useState('all');
    const [addingInput,setAddingInput] = useState("")

    // Dialog States
    const [openConfirmDeleteDialog ,setOpenConfirmDeleteDialog] = useState(false);
    const [openEditDialog ,setOpenEditDialog] = useState(false);
    const [dialogTodo,setDialogTodo] = useState({id:"",title:"",details:"",isCompleted:false});

    useEffect(()=>{
        dispatch({type:"get"})
    },[])

    function handleChange(e){
        setAlignment(e.target.value)
    }
    //caching
    const completedTasks = useMemo(() => tasks.filter((t) => t.isCompleted), [tasks]);
    const notCompleteTasks = useMemo(() => tasks.filter((t) => !t.isCompleted), [tasks]);

    const filteredTasks = useMemo(() => {
        if (alignment === "complete") return completedTasks;
        if (alignment === "progress") return notCompleteTasks;
        return tasks;
        }, [alignment, tasks]);

    const tasksToBeRender = useMemo(
    () => filteredTasks.map((t) => <TaskCard key={t.id} todo={t} openDeleteDialog={DeleteDialogHandler} openUpdateDialog={UpdateDialogHandler} />),
    [filteredTasks]
    );

    function AddTaskHandler(){
        if(addingInput === null || addingInput === "")
        {
            alert("Input Validation Error, pls enter a valied todo");
            return false;
        }
        
        dispatch({type:"adding",payload:{
            newTitle: addingInput
        }})
        showAlert("تم اضافة المهمة الجديدة")
        setAddingInput("")
    }
    function DeleteTaskHandler(){
        dispatch({
            type:"delete",
            payload:{
                taskId: dialogTodo.id
            }
        })
        setOpenConfirmDeleteDialog(false);
        showAlert("تم حذف المهمة بنجاح");
    }
    function UpdateTaskHandler(){
        dispatch({
            type:"update",
            payload:{
                task : dialogTodo
            }
        })
        setOpenEditDialog(false);
        showAlert("تم تعديل المهمة بنجاح")
    }
    function DeleteDialogHandler(todo){
        setOpenConfirmDeleteDialog(true)
        setDialogTodo(todo)
    }
    function UpdateDialogHandler(todo){
        setOpenEditDialog(true);
        setDialogTodo(todo)
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
        {tasksToBeRender}
        </div>
        {/* Add Input  */}
        <Grid container style={{marginTop:"15px"}}  >
            <Grid size={4} className="">
            <Button className="btnAddNewTask" variant="contained" style={{width:"100%",height:"100%",border:"2px solid #1976d2",transition:"0.4s"}} onClick={AddTaskHandler}>أضافة</Button>
            </Grid>
            <Grid size={8} >

            <TextField value={addingInput}onKeyPress={(e) => e.key === 'Enter' && AddTaskHandler()} onChange={(e)=>{
                setAddingInput(e.target.value)
            }} className='addingInput' size='small' label="عنوان المهمة" variant="outlined" style={{marginLeft:"5px" }}/>
            </Grid>
        </Grid>
        {/* End Add Input  */}
        
        {/* Confirm Delete Dialog  */}
        <Dialog
            open={openConfirmDeleteDialog}
            onClose={()=> setOpenConfirmDeleteDialog(false)}
            style={{direction:"rtl",color:"red"}}
        >
            <DialogTitle style={{fontSize:"13px"}}>هل انت متأكد من رغبتك في القيام بحذف المهمة؟</DialogTitle>
            <DialogContent>
            <DialogContentText style={{fontSize:"10px"}} >
                لايمكنك التراجع عن عملية الحذف بعد اختيار القيام بالحذف
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button style={{fontSize:"10px"}} onClick={()=> setOpenConfirmDeleteDialog(false)}>أغلاق</Button>
            <Button onClick={DeleteTaskHandler} className="btnConfirmDelete" style={{fontSize:"10px",color:"rgb(235 19 0)"}} >نعم, تأكيد الحذف</Button>
            </DialogActions>
        </Dialog>   
        {/* End Confirm Delete Dialog  */}
            
        {/* Edit Dialog  */}
        <Dialog
                open={openEditDialog}
                onClose={()=> setOpenEditDialog(false)}
                style={{direction:"rtl"}}
                maxWidth="xs"
            >
                <DialogTitle style={{fontSize:"13px"}}>تعديل المهمة</DialogTitle>
                <DialogContent>
                <TextField
                value={dialogTodo.title}
                onChange={(e)=> setDialogTodo({...dialogTodo,title:e.target.value})}
            
            margin="dense"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
          />

            <TextField
            value={dialogTodo.details}
            onChange={(e)=> setDialogTodo({...dialogTodo,details:e.target.value})}
            margin="dense"
            label="تفاصيل المهمة"
            fullWidth
            variant="standard"
          />
                </DialogContent>
                <DialogActions>
                <Button style={{fontSize:"10px"}} onClick={()=> setOpenEditDialog(false)}>أغلاق</Button>
                <Button onClick={UpdateTaskHandler} style={{fontSize:"10px"}} >تعديل</Button>
                </DialogActions>
        </Dialog>   
        {/* === End Edit Dialog === */}
        
    </div>
    )
}