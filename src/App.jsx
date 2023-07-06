import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Advertis from './pages/Advertis'
import Adopte from './pages/Adopte'
import Error from './pages/Error'

function App() {
  return (
    <>
    <Navbar/>



      {/* Routes */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adopte' element={<Adopte/>}/>
      <Route path='/advertis' element={<Advertis/>}/>
      <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
