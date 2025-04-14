import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { useContext, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';


export default function TaskCard({todo}){
    const {tasks,setTasks,showAlert} = useContext(TasksContext);
    const [openConfirmDeleteDialog ,setOpenConfirmDeleteDialog] = useState(false);
    const [openEditDialog ,setOpenEditDialog] = useState(false);
    const [updateTodo,setUpdateTodo] =useState({title:todo.title,details:todo.details})

    function addingTasksToStateAndLocalStorage(updatedTasks){
        setTasks(updatedTasks);
        localStorage.setItem("tasks",JSON.stringify(updatedTasks));
    }
    function completeTaskHandler(){
        let showAlert = false;
        let newTasks = tasks.map((task) =>{
            if(task.id === todo.id){
                const newTask = {...task, isCompleted: !task.isCompleted}
                showAlert = newTask.isCompleted;
                return newTask
            }
            return task;
        })
        
        addingTasksToStateAndLocalStorage(newTasks)
        if(showAlert)
            handleAlert("تم الانتهاء من المهمة بنجاح")
    }
    function DeleteTaskHandler(){
        let newTasks = tasks.filter((t)=> t.id !== todo.id)
        addingTasksToStateAndLocalStorage(newTasks)
        setOpenConfirmDeleteDialog(false);
        handleAlert("تم حذف المهمة بنجاح");
    }
    function UpdateTaskHandler(){
        let updatedTasks = tasks.map((t)=>{
            if(t.id === todo.id){
                t.title = updateTodo.title;
                t.details = updateTodo.details;
            }
            return t;
        })
        addingTasksToStateAndLocalStorage(updatedTasks);
        setOpenEditDialog(false);
        handleAlert("تم تعديل المهمة بنجاح")
    }
    function handleAlert(title){
        showAlert(title)
    }
    return (
        <Card className="card"  sx={{minWidth: 275,backgroundColor:"#626566bf",transition:"0.4s",color:'white' }}>
            <CardContent>
                <Grid container  >
                    <Grid size={4} className="operations">
                        <Button onClick={()=> setOpenConfirmDeleteDialog(true)} style={{background:"white",padding:0,height:"25px",minWidth:"fit-content",color:"#f44336"}}>
                            <DeleteOutlineOutlinedIcon/>
                        </Button>
                        <Button  onClick={()=> setOpenEditDialog(true)} style={{background:"white",padding:0,height:"25px",minWidth:"fit-content",color:"#2baae3d6"}}>
                            <EditIcon/>
                        </Button>
                        <Button onClick={completeTaskHandler} style={{background:todo.isCompleted ? '#4caf50': "white",padding:0,height:"25px",minWidth:"fit-content",color:todo.isCompleted ? "white" : "#4caf50"}}>
                            <DoneIcon/>
                        </Button>
                        
                    </Grid>
                    <Grid size={8}>
                        <Typography variant="h3" style={{fontSize:"12px",lineHeight:"1.8"}}>{todo.title}</Typography>
                        <Typography variant="h5" style={{fontSize:"8px",fontWeight:400}}>{todo.details}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

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
                value={updateTodo.title}
                onChange={(e)=> setUpdateTodo({...updateTodo,title:e.target.value})}
            autoFocus
            margin="dense"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
          />

            <TextField
            value={updateTodo.details}
            onChange={(e)=> setUpdateTodo({...updateTodo,details:e.target.value})}
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
        </Card>
    )
}
