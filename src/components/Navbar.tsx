import { NavLink } from "react-router-dom";
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import UpdateProfilePicture from "./UpdateProfilePicture";
import { SetStateAction, useState } from "react";
interface NavbarProps {
  page?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {

  const { page } = props;
  let navigate = useNavigate();

  const [showUpdatedPicture, setShowUpdatedPicture] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    navigate('/');
  };

  // const handleUpdatePicture = (image: SetStateAction<null>) => {
  //   setShowUpdatedPicture(true);

  //   setProfilePicture(image);
  // };

  const data = sessionStorage.getItem("loggedIn");
  let dataCheck = '';
  if(data != null){
    dataCheck = JSON.parse(data);
  }

  return (
    <div className="main-nav">

    {page !== 'login-page' && (
      <div className="logo">
      <h2>
          <NavLink to="/" className="login-button"> <span>R</span>ecroot</NavLink> 
      </h2>
      </div>
    )}

    {page === 'login-page' && (
      <div className="logo-center">
      <h2>
          <NavLink to="/" className="login-button"> <span>R</span>ecroot</NavLink> 
      </h2>
      </div>
    )}
     
      {(page === 'home-page'&& dataCheck.toString() === true.toString()) && (
        <NavLink to = "/dashboard" className="dashboard"><h1>Dashboard</h1></NavLink>
      )} 

    {(page === 'dashboard-page') && (
      <div className="avatar">
      <div className="avatar-image">
        {/* Replace with your avatar image */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADr-3PrecoVO1hoAmq1qUaXmfmPNM30r2Nw&usqp=CAU" alt="Avatar" />
        {/* <img src="avatar.png" alt="Avatar" /> */}
      
      </div>
      <div className="dropdown-menu">
        <ul>
          {/* <li>
            <a onClick={handleUpdatePicture}>Update Picture</a>
          </li> */}
          <li>
            <a href="" onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
    )}

      {page !== 'login-page' && page !== 'dashboard-page' && !(page === 'home-page' && dataCheck.toString() === true.toString()) && (
      <div className="social-media">
        <ul>
          <li>
            <NavLink to="/login" className="login-button-box">Login</NavLink>
        </li>
        </ul>
      </div>
      )}
      {/* {showUpdatedPicture && <UpdateProfilePicture onUpdate={handleUpdatePicture}/>}s */}
    </div>

  );
}

