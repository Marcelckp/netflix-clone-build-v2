import React from 'react'
import './ProfileScreen.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

//components
import Nav from '../components/Nav';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profile-screen">
            <Nav />
            <div className="profileS-body">
                <h1>Edit Profile</h1>
                <div className="profileS-inform">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Profile Photo" />
                    <div className="profileS-details">
                        <h2>{user.email}</h2>
                        <div className="profileS-subscribe">
                            <h3>Subscription Plans (current plan: gold)</h3>
                            <p></p>
                            <button onClick={() => auth.signOut()} className="btn-signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
