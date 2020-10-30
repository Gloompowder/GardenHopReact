import React, { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'

function UserDiv(){
    const url = 'http://localhost:3000/api/v1/users'
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(data =>setUsers(data))
    })
    console.log(users)
    const userCards = users.map(eachUser => <UserCard User={eachUser} key={eachUser.id}/>)
    return(
        <div className="Users">
            {userCards}
        </div>
    )
}

export default UserDiv
