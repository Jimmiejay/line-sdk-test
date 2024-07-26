import React, { useEffect, useState } from 'react'
import './profile.css'
import useLineLogin from '../../components/useLineLogin'
import liffID from '../../assets/liffID'

const Profile = () => {
    const [lineProfile, setlineProfile] = useState(null);

    useEffect(() => {
        LineLogin();
    }, [])

    const LineLogin = async () => {
        await useLineLogin(liffID.Profile);
        const ProfileStorage = localStorage.getItem('lineProfile');
        console.log('Stored Profile Storeage:', ProfileStorage);
        const profile = ProfileStorage ? JSON.parse(ProfileStorage) : null;
        setlineProfile(profile);
        console.log('parse Profile:', profile);
    }

    return (
        <>
            {lineProfile ? (
                <div className='profileContainer'>
                    <div className='profileBox'>
                        <div className='profileCard'>
                        <div >
                            <img className='profileImg' src={lineProfile.picture_url} alt="Profile Pic" />
                        </div>
                            <div className='profileTxt'>
                                <p>{lineProfile.display_name}</p>
                                <p>User ID:{lineProfile.user_id}</p>
                                <p>State Message:{lineProfile.status_messeage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading....</div>
            )
            }
        </>

    )
}
export default Profile