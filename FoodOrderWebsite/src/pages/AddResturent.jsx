import react, { useState } from "react";

import LoginForm from '../components/HomeComponents/Login.jsx';
import SignUpForm from '../components/HomeComponents/SignUp.jsx';

import Modal from '../Model/model.one.jsx';

import FindRestaurant from "../components/addResturentcompunants/FindRestaurant.jsx";
import FAQ from "../components/addResturentcompunants/FAQ.jsx";
import AlreadyListed from "../components/addResturentcompunants/AlreadyListed.jsx";
import HowItWorks from "../components/addResturentcompunants/HowItWorks.jsx";
import WhyPartner from "../components/addResturentcompunants/WhyPartner.jsx";
import AddResturentNavBanner from '../components/navBar/AddResturentNavBanner.jsx';
import Footer from '../components/footer.jsx';


const AddResturent = () => {
    const [showForm,setShowForm] = useState('')

    const handleLoginClick = () => {
        setShowForm('login');
      };
    
      const handleSignUpClick = () => {
        setShowForm('signup');
      };
      const handleCloseModal = () => {
        setShowForm('');
      };

    return (
        <>
            <AddResturentNavBanner
             onLoginClick={handleLoginClick} 
             onSignUpClick={handleSignUpClick}/>

            {showForm && (
                <Modal
                     className=" absolute top-10 right-1/3 z-10" 
                     onClose={handleCloseModal}>
                        {showForm === 'login' && <LoginForm />}
                        {showForm === 'signup' && <SignUpForm />}
                </Modal>
        )}
        <WhyPartner/>
        <HowItWorks/>
        <AlreadyListed/>
        <FindRestaurant/>
        <FAQ/>
        <Footer/>
        </>

    );
};

export default AddResturent