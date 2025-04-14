import Alert from '@mui/material/Alert';


export default function CustomeAlert({ open, message }) {
    return <Alert  severity="success"  sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        transition: '0.7s',
        transform: open ? 'translateX(0)' : 'translateX(-150%)',
        zIndex: 9999
      }}>{message}</Alert>
  }