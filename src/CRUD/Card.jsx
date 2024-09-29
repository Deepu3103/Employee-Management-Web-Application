import axios from "axios";
import { Link } from "react-router-dom"

const Card = ({ user, setFlag }) => {

    let handleDelete = (id) => {
        // console.log(user.id, user);
        axios.delete(`http://localhost:5000/employees/${id}`)
            .then(() => {
                console.log("deleted");
                setFlag(true);
            })
    }

    return (

        <table>
            <tr>
                <td>Name:</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Salary:</td>
                <td>{user.salary}</td>
            </tr>
            <tr>
                <td>Company:</td>
                <td>{user.company}</td>
            </tr>
            <tr>
                <td><button><Link to={`/edit/${user.id}`}>EDIT</Link></button></td>
                <td><button onClick={() => { handleDelete(`${user.id}`) }}>DELETE</button></td>
            </tr>
        </table>

    )
}

export default Card