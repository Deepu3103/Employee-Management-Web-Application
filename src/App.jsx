import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


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
