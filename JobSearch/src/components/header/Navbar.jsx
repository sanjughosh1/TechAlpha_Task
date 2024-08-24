import React ,{useState} from "react";
import LoginForm from "../forms/login";
import RegisterForm from "../forms/Register";

const Navbar = () => {

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  return (
    <nav className="flex justify-between h-[5rem] items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" // Replace with your logo link
              alt="Logo"
              className="h-8"
            />
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Companies</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a>
          </div>
          {/* Right Section */}
          <div className="flex justify-center items-center bg-gray-100">
            <div className="space-x-4">
              <button onClick={openRegister} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Register
              </button>
              <button onClick={openLogin} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Login
              </button>
            </div>

             {isRegisterOpen && <RegisterForm onClose={closeRegister} />}
             {isLoginOpen && <LoginForm onClose={closeLogin} />}
          </div>
        </nav>

  );
};

export default Navbar;
