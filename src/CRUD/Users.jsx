import React, { useEffect, useState } from 'react'

import style from './home.module.css'
import axios from 'axios';
import Card from './Card';
const Users = () => {
    let [users, setUsers] = useState([]);
    let [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/employees")
            .then((resp) => { setUsers(resp.data); })
            .catch(() => console.log("Did't got data")
            )
        setFlag(false);
    }, [flag])

    return (
        <div id={style.usersPage}>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Card user={user} flag={flag} setFlag={setFlag} />
                    </div>
                )
            })}
        </div>
    )
}

export default Users