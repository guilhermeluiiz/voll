import { Button } from "@mui/material"

export default function MyButton(props){
    return <Button
    variant={props.variant}
    size={props.size}
    endIcon={props.icon}
    sx={{
        backgroundColor: '${props.color}',
        borderRadius: 2,
        '&:hover' : {
            backgroundColor: '#ffffff' ,
            color: '#3c52b2',
        },
    }}
    
    >{props.text}</Button>
}