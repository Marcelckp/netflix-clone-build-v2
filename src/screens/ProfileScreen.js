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
// import { mdiCamera } from '@mdi/js';

function ProfileScreen() {

    const user = useSelector(selectUser);

    const [error, setError] = useState(null)

    const [showHint, setShowHint] = useState(null);

    const [editUserName, setEditUserName] = useState(null);

    const [loading, setLoading] = useState(null);

    const userNameString = useRef(user.email);
    // console.log(userNameString);

    const [usersUserName, setUsersUserName] = useState(null);

    const [open, setOpen] = useRecoilState(modalState);

    const filePickerRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const [profileImage, setUsersProfileImage] = useState(null);


    useEffect(() => {
        let mounted = true;

        firebase.database().ref('UserName/' + user.uid).on('value', (snapshot) => {
            if (mounted) {
                setUsersUserName(snapshot.val());
            }
        })

        firebase.database().ref('ProfilePicture/' + user.uid).on('value', (snapshot) => {
            if (mounted) {
                setUsersProfileImage(snapshot.val())
            }
        })

        return () => {
            mounted = false;
        }
    }, [usersUserName, user.uid])

    // console.log(profileImage)

    const addNewProfileImage = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        } 

    }

//================================================================

    const uploadPicture = async() => {
        
        setLoading(true);
        let mounted = true;
        firebase.database().ref('ProfilePicture/' + user.uid).set(selectedFile).then(() => {
            if (mounted) {
                console.log('Profile Photo set successfully');
                console.log(loading)
                setLoading(false);
                setOpen(false);
            }
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            setOpen(false);
        })
    }

//================================================================


    const changeUsername = (e) => {
        setLoading(true);

        let mounted = true

        if (userNameString.current.value.length > 0) { 
            firebase.database().ref('UserName/'+ user.uid).set(userNameString.current.value).then(() => {
                if (mounted) {
                    setLoading(false);
                    console.log('done');
                    setEditUserName(false);
                }
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            })
        } else {
            setError('The field cannot be empty')
        }

        return () => {
            mounted = false;
        }

    }

    // console.log(selectedFile);

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
                        {error ? <p className='error-message-edit subscription--title'>* {error}</p> : null}
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
                            <h3 className='edit-title'>Edit your Profile image</h3>
                            <div className='edit--imageProfile--btnDiv'>
                                <button className='btn--subscribe--enter edit-div-buttons-func increase-btn-width-pfp' onClick={() => setOpen(true)}>Click Here To Change Your Profile Image</button>
                            </div>
                            
                            {open ? 
                                    <div className='edit--profile-picture-modal fadein'>
                                        <div className='have-a-nice-weekend-Ye-SHEBAB'>
                                            <h4 className='edit-profile-img-title'>Choose A Profile Picture</h4>
                                            {/* <mdiCamera /> */}
                                            <div className='cam-svg-container'>
                                                { selectedFile ? 
                                                    <img className='profileImage-edit' onClick={() => filePickerRef.current.click()} src={selectedFile} alt={`${selectedFile}`} />
                                                :
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                    style={{fill: 'white', cursor: 'pointer'}} className='camera--icon-edit' 
                                                    xlink="http://www.w3.org/1999/xlink" 
                                                    version="1.1" width="24" height="24" viewBox="0 0 24 24"
                                                    onClick={() => filePickerRef.current.click()}>
                                                        <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                                                    </svg>
                                                }
                                                
                                            </div>
                                            
                                            <div><input ref={filePickerRef} type="file" onChange={addNewProfileImage} hidden /></div>
                                            <div className="cancel-button-div-edit">

                                                <button className='btn--subscribe--enter edit-div-buttons-func createSpace-between' onClick={() => {
                                                    uploadPicture()
                                                }}>Set Picture</button>

                                                <button className='btn--subscribe--enter edit-div-buttons-func' onClick={() => setOpen(false)}>Cancel</button>

                                            </div>
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
                            {profileImage ? 
                                <img src={profileImage} 
                                    className='profile-screen-profileIMG'
                                    style={{cursor: 'pointer'}}
                                    onMouseLeave={() => setShowHint(false)} 
                                    onMouseEnter={() => setShowHint(true)}
                                    onClick={() => {
                                        setShowHint(false);
                                        setEditUserName(true)
                                    }}
                                    alt="" />
                            :
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 

                                onMouseLeave={()=> setShowHint(false)} 

                                onMouseEnter={() => setShowHint(true)} 

                                onClick={() => {
                                    setEditUserName(true);
                                    setShowHint(false);
                                }}

                                className='profile-screen-profileIMG' style={{cursor: 'pointer'}} alt="Netflix Profile" />
                            }
                            
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
