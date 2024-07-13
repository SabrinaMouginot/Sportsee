import { useParams } from 'react-router-dom';
import './App.css'

function App() {
  const { userId } = useParams();

  return (
    <>
      {userId}
    </>
  )
}

export default App
