import { createContext,useContext,useState } from "react";
import Alert from '@mui/material/Alert';

const ToastContext = createContext();
export const useToast = ()=>{
    return useContext(ToastContext);
}
export const ToastProvider = ({children}) => {
    const [alert, setAlert] = useState({ open: false, message: '' });

    function showAlert(message){
        setAlert({ open: true, message });
        setTimeout(() => setAlert((prev) => {
        return {...prev,open:false}
        }), 3000);}

    return <ToastContext.Provider value={{showAlert}}> 
            <Alert  severity="success"  sx={{
                position: 'fixed',
                bottom: 20,
                left: 20,
                transition: '0.7s',
                transform: alert.open ? 'translateX(0)' : 'translateX(-150%)',
                zIndex: 9999
            }}>{alert.message}
            </Alert>
            {children}
        </ToastContext.Provider>
}


