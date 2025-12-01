import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css"

function Axios01() {
    //useEffect 보다 then이 먼저 실행됨(상황에 맞춰서)

    const [ users, setUsers ] = useState([]);
    const [refetch, setRefetch ] = useState(true);

    const getUserApi = async () => {
        console.log("콘솔")
        if (refetch) {
           const response = await axios.get("http://192.168.2.101:8080/users")
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
                setRefetch(false);
                
            });
        }

    }

    
    useEffect(() => {
        console.log("useEffect!!!")
    })

    useEffect(() => {
        axios.get("http://192.168.2.101:8080/users")
        .then(response => {
        console.log(a.data);
        setUsers(response.data);
        setRefetch(false);
         }).then(a.data[0], username);
    }, [refetch])
   
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role1</th>
                    <th>role2</th>
                </tr>
            </thead>
            <tbody>
                
                { //users의 상태가 변하면 map이 매번 새로 돈다
                 // json 데이터를 상태로 변환해야 함
                    users.map(u => <tr>
                        <td>{u.username}</td>
                        <td>{u.password}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.roles[0]}</td>
                        <td>{u.roles[1]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Axios01;