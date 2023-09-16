import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import React from 'react'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
        <div>
            <ProfileUserDetails />
        </div>
        <div>
          <ReqUserPostPart />
        </div>
    </div>

  )
}

export default Profile