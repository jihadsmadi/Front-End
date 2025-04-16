import Tasks from './Components/Tasks'
import Container from '@mui/material/Container';
import { createTheme,ThemeProvider} from '@mui/material/styles'
import Typography from '@mui/material/Typography';

import './App.css'
import { ToastProvider } from './contexts/ToastContext';
import {TasksProvider} from './contexts/TasksContext'

function App() {

  const theme = createTheme({
    typography:{
      fontFamily:"Lemonada",
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <TasksProvider>
          <ToastProvider >
          <Container   maxWidth="sm"  style={{backgroundColor:'white',textAlign:"center",transition:"0.5s",padding:"15px",borderRadius:"10px"}}>
            <Typography variant="h3" >
              مهامي
            </Typography>
            <hr style={{width:"75%",marginTop:"15px"}}/>
            <Tasks/>
          </Container>
          </ToastProvider>
        </TasksProvider>
      </ThemeProvider>
    </>
  )
}

export default App
