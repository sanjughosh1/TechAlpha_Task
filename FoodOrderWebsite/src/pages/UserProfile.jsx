import React from 'react';
import ProfileHeader from '../components/UserPrifileComponends/ProfileHeader.jsx';
import SideMenu from '../components/UserPrifileComponends/SideMenu.jsx';
import Footer from '../components/footer.jsx';
import { Outlet } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="flex flex-col w-screen">
      <ProfileHeader />
      <div className="flex ">
        <SideMenu />
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;
