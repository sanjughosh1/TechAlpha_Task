import React,{useState,useRef} from 'react';
import LoginForm from '../components/HomeComponents/Login.jsx';
import SignUpForm from '../components/HomeComponents/SignUp.jsx';

import Modal from '../Model/model.one.jsx';

import HomeNavBar from '../components/navBar/HomeNavBar.jsx';
import GetMyApp from '../components/HomeComponents/GetMyApp.jsx';
import Localities from "../components/HomeComponents/Localities.jsx";
import ExploreOptions from "../components/HomeComponents/ExploreOptions.jsx";
import Collections from '../components/HomeComponents/Collections.jsx';
import Footer from '../components/footer.jsx';

const HomePage = () => {
    const [showForm, setShowForm] = useState('');
    const getMyAppRef = useRef(null);

    const handleLoginClick = () => {
      setShowForm('login');
    };
  
    const handleSignUpClick = () => {
      setShowForm('signup');
    };
    const handleCloseModal = () => {
      setShowForm('');
    };
    const scrollToGetMyApp = () => {
        getMyAppRef.current.scrollIntoView({ behavior: 'smooth' });
          
      };
  
    return (
      <div>
        <HomeNavBar 
        onGetMyAppClick={scrollToGetMyApp} 
        onLoginClick={handleLoginClick} 
        onSignUpClick={handleSignUpClick} />
        
        {showForm && (
          <Modal
          className=" absolute h-auto right-1/3 z-10" 
          onClose={handleCloseModal}>
            {showForm === 'login' && <LoginForm />}
            {showForm === 'signup' && <SignUpForm />}
          </Modal>
        )}
        <Collections/>
        <Localities/>
        <div id="get-my-app" ref={getMyAppRef}>
          <GetMyApp />
        </div>
        <ExploreOptions/>
        <Footer />
      </div>
    );
  };

export default HomePage;
