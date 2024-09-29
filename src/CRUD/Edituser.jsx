import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edituser = () => {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");
    let [company, setCompany] = useState("");

    let navigate = useNavigate();

    let obj = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/employees/${obj.id}`)
            .then((resp) => {
                setName(resp.data.name);
                setSalary(resp.data.salary);
                setCompany(resp.data.company);
            })
            .catch(() => console.log("did not get data"))

    }, [])

    const formHandle = (e) => {
        e.preventDefault();
        let payload = { name, salary, company };
        axios.put(`http://localhost:5000/employees/${obj.id}`, payload)
            .then(() => {
                console.log("updated");
                navigate("/users");
            })
            .catch(() => console.log("failed to update")
            )
    }
    return (
        <div id={style.userForm}>
            <form action="">
                <h1>EDIT USER DETAILS</h1>
                <input type="text" placeholder='name' value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='salary' value={salary}
                    onChange={(e) => setSalary(e.target.value)} />
                <input type="text" placeholder='company' value={company}
                    onChange={(e) => setCompany(e.target.value)} />
                <button onClick={formHandle} >SUBMIT</button>
            </form>
        </div >
    )
}
export default Edituser