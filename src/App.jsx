import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Linkdn from './components/Linkdn'
// import { Articles } from './components/Articles'
// import { Jobs } from './components/Jobs'
// import { Games } from './components/Games'
// import { People } from './components/People'
// import { Learning } from './components/Learning'

import Home from "./CRUD/Home"
import CreateUser from './CRUD/CreateUser'
import Users from './CRUD/Users'
import Edituser from './CRUD/Edituser'

const App = () => {
    return (
        <div>
            <Router>
                <Home />
                <Routes>
                    <Route path='/' element={<CreateUser />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/edit/:id' element={<Edituser />} />
                </Routes>
            </Router>

            
        </div>
    )
}

export default App