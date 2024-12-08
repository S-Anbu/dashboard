import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MyCourse from './components/MyCourse/MyCourse'
import ViewDetails from './components/ViewDetails/ViewDetails'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/MyCourse" element={<MyCourse />} />
    <Route path="/ViewDetails" element={<ViewDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
