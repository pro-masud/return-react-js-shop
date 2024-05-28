import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './routes/Router'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <RouterProvider router={ router} />
      <ToastContainer />
    </>
  )
}

export default App
