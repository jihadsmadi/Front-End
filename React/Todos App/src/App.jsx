import Tasks from './Components/Tasks'
import Container from '@mui/material/Container';
import { createTheme,ThemeProvider} from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TasksContext } from './contexts/TasksContext';
import './App.css'
import { Details } from '@mui/icons-material';
import CustomeAlert from './Components/CustomeAlert';


function App() {
  const [tasks,setTasks] = useState([]);
  const [alert, setAlert] = useState({ open: false, message: '' });

 
  const theme = createTheme({
    typography:{
      fontFamily:"Lemonada",
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
      <Container   maxWidth="sm"  style={{backgroundColor:'white',textAlign:"center",transition:"0.5s",padding:"15px",borderRadius:"10px"}}>
      <Typography variant="h3" >
        مهامي
      </Typography>
      <hr style={{width:"75%",marginTop:"15px"}}/>
      <TasksContext.Provider value={{ tasks, setTasks, showAlert: (message) => {
        setAlert({ open: true, message });
        setTimeout(() => setAlert((prev) => {
          return {...prev,open:false}
        }), 3000);
      }}}>

      <Tasks/>
      </TasksContext.Provider>
      </Container>
      </ThemeProvider>
      <CustomeAlert open={alert.open} message={alert.message}/>
    </>
  )
}

export default App
