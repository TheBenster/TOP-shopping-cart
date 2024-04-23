import Navbar from './components/Navbar.jsx'
import Hero from './components/HeroHome.jsx'
import './App.css'
import CategoryBar from './components/CategoryBar.jsx'
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx'
import { Outlet } from 'react-router-dom';

// import  { useFetch } from './hooks/useFetch.jsx'

function App() {
  // const { data, isLoading, error } = useFetch();
  return (
    <RouterProvider router={router}/>
  )
}

export default App
