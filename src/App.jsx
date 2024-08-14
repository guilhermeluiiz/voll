import './App.css'
import MyButton from './componentes/MyButton'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

function App() {

  return (
    <>
      <div>
        <MyButton text='Label button' color='error' size='small' icon={<DeleteIcon/>} variant='contained'/>
        <MyButton text='Label button'size='large' icon={<SendIcon/>} variant='text'/>
      </div>
    </>
  )
}

export default App
