import { Page } from '../constants'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const MainRoute = () => {
  return (
    <div className='w-full'>
        <Router>
            <Routes>
                <Route path='/' element={ <Page.Home /> } />
                <Route path='/dev' element={ <Page.Dev /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default MainRoute