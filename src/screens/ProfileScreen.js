import React, { useState, useRef, useEffect } from 'react'
import './ProfileScreen.css';
import firebase from 'firebase';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

//components
import Nav from '../components/Nav';
import { auth } from '../firebase';

function ProfileScreen() {

    const user = useSelector(selectUser);

    const [showHint, setShowHint] = useState(null);

    const [editUserName, setEditUserName] = useState(null);

    const [loading, setLoading] = useState(null);

    const userNameString = useRef(user.email);
    // console.log(userNameString);

    const [usersUserName, setUsersUserName] = useState(null);

    const [open, setOpen] = useRecoilState(modalState)

    useEffect(() => {
        let mounted = true;
        console.log(open)
        firebase.database().ref('UserName/' + user.uid).on('value', (snapshot) => {
            if (mounted) {
                setUsersUserName(snapshot.val());
            }
        })

        return () => {
            mounted = false;
        }
    }, [usersUserName])

    const changeUsername = (e) => {
        setLoading(true);

        let mounted = true

        firebase.database().ref('UserName/'+ user.uid).set(userNameString.current.value).then(() => {
            if (mounted) {
                setLoading(false);
                console.log('done');
                setEditUserName(false);
            }
        }).catch((err) => {
            console.log(err);
        })

        return () => {
            mounted = false;
        }

    }

    return (
        <div className="profile-screen">
            <Nav class={'blackDrop'}/>
            <div className="profileS-body">
                <h1>Edit Profile</h1>
                {editUserName ?
                    <div className="fadein">
                    {editUserName ? null: null}
                    <div className="editUserName-screen fadein">

                        <p className='subscription--title'>* Edit the field to change your profiles User Name</p>

                        <br />

                        <p className='subscription--title'>* If your haven't set your username before the field will be empty type a username to set it </p>

                        <h3 className='edit-title'>Edit UserName</h3>

                        <input ref={userNameString} 
                        onChange={() => console.log(userNameString.current.value)} className='username-change' 
                        placeholder='Enter Your UserName Here...' 
                        type="text" defaultValue={usersUserName || ''}
                        maxLength='35'/>

                        <div className="buttons--edit-div">
                            <button className='btn--subscribe--enter createSpace-between edit-div-buttons-func' onClick={() => changeUsername()} >Submit</button>

                            <button className='btn--subscribe--enter edit-div-buttons-func' onClick={() => setEditUserName(false)}>Cancel</button>
                        </div>
                        <div>
                            <p>Edit your Profile image</p>
                            <button onClick={() => setOpen(true)}>pfp</button>
                            {open ? 
                                    <div className='edit--profile-picture-modal'>

                                        <div className='have-a-nice-weekend-Ye-SHEBAB'>
                                            <p>Inshala</p>
                                        </div>

                                    </div> 
                                : null}
                        </div>
                        
                    </div>
                    </div>
                :
                    <>
                        <div className={`informational--div ${showHint ? 'show-info-div' : 'hide-info-div'}`}>
                            <p className='info-div-info'>Click here to edit your profile username</p>
                        </div>
                        <div className="profileS-inform fadein">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 

                            onMouseLeave={()=> setShowHint(false)} 
                            
                            onMouseEnter={() => setShowHint(true)} 

                            onClick={() => {
                                setEditUserName(true);
                                setShowHint(false);
                            }}

                            className='profile-screen-profileIMG' style={{cursor: 'pointer'}} alt="Netflix Profile" />
                            <div className="profileS-details">
                                <h2>{ usersUserName || user.email}</h2>
                                <div className="profileS-subscribe">
                                    <h3>Subscription Plans (current plan: gold)</h3>
                                    <p></p>
                                    <div className="subscriptionPlans--div">
                                        <p className="subscription--renewal">Renewal date: 08/04/2022</p>
                                        <div className="subscription--info first--div">
                                            
                                            <div>
                                                <p className='subscription--title'>NetFlix Standard</p> 
                                                <p className='subscription--title'>1040p</p>
                                            </div>

                                            <button className='btn--subscribe--enter'>Subscribe</button>
                                        </div>
                                        <div className="subscription--info">
                                            
                                            <div>
                                                <p className='subscription--title'>NetFlix Basic</p>
                                                <p className='subscription--title'>1440p</p>
                                            </div>

                                            <button className='btn--subscribe--enter'>Subscribe</button>
                                        </div>
                                        <div className="subscription--info">

                                            <div>
                                                <p className='subscription--title'>Netflix Platinum</p>
                                                <p className='subscription--title'>4k HD</p>
                                            </div>
                                            
                                            <button className='btn--subscribe--enter'>Subscribe</button>
                                        </div>
                                    </div>
                                    
                                    <button onClick={() => auth.signOut()} className="btn-signOut">Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default ProfileScreen
