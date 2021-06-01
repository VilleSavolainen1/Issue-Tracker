import React from 'react'
import './profile-style.css'
import Anon from '../details/images/profile.png'

const Profile = ({user}) => {
    return (
        <div className="profile">
            <h1>{user}</h1>
            <img src={Anon} alt=""></img>
        </div>
    )
}

export default Profile;