
import { Link } from "react-router-dom"

import "./home.module.css"
const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/">CREATE-USER</Link >
                <Link to="/users" >USERS</Link>
            </nav>



        </div>
    )
}

export default Home