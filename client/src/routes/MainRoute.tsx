import { Page } from '../constants'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const MainRoute = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={ <Page.Home /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default MainRoute