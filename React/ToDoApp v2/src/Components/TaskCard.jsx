import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import { useToast } from '../contexts/ToastContext';
import { useTasks } from '../contexts/TasksContext';

export default function TaskCard({todo,openDeleteDialog,openUpdateDialog}){
    const {dispatch} = useTasks()
    const {showAlert} = useToast()

    function completeTaskHandler(){
        dispatch({
            type:"checkIsCompleted",
            payload:todo
        })
        if(!todo.isCompleted)
            showAlert("تم الانتهام من المهمة بنجاح")
    }
    
    return (
        <Card className="card"  sx={{minWidth: 275,backgroundColor:"#626566bf",transition:"0.4s",color:'white' }}>
            <CardContent>
                <Grid container  >
                    <Grid size={4} className="operations">
                        <Button onClick={()=> openDeleteDialog(todo)} style={{background:"white",padding:0,height:"25px",minWidth:"fit-content",color:"#f44336"}}>
                            <DeleteOutlineOutlinedIcon/>
                        </Button>
                        <Button  onClick={()=> openUpdateDialog(todo)} style={{background:"white",padding:0,height:"25px",minWidth:"fit-content",color:"#2baae3d6"}}>
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
        </Card>
    )
}
