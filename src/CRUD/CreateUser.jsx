
import { useState } from 'react'
import style from './home.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");
    let [company, setCompany] = useState("");
    let navigate = useNavigate();

    const formHandle = (e) => {
        e.preventDefault()
        const payload = { name, salary, company }
        // use axios to connect with json server api
        axios.post("http://localhost:5000/employees", payload)
            .then(() => {
                console.log("Saved")
                navigate("/users");
            })
            .catch(() => console.log("did't saved")
            )
    }
    return (
        <div id={style.userForm}>
            <form action="">
                <h1>CREATE USER</h1>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
                <input type="text" placeholder='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                <button onClick={formHandle}>submit</button>
            </form>
        </div >
    )
}

export default CreateUser