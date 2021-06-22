// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import header from '../../images/BackGround.jpg';
// import logo from '../../images/icons/logo.png';
// import { UserContext } from '../../App';

// const Header = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     setLoggedInUser(loggedInUser);// extra line, just for using it

//     function handleLogout(){
//         setLoggedInUser({});
//     }

//     return (
//         <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1.5) ), url(${header})` }} className="header">
//             {/* {{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }}  */}
//             <nav className="nav">
//                 <ul>
//                     <li>
//                         <img className="logo" src={logo} alt="" />
//                     </li>
//                     <li>
//                         <Link to="/home">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/our-services">Our Services</Link>
//                     </li>
//                     <li>
//                         <Link to="/dashboard">Dashboard</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact-us">Contact us</Link>
//                     </li>
//                     <li>
//                         {
//                             loggedInUser.name ? <h5 style={{ color: 'gold' }}> {loggedInUser.name} </h5> : <Link to="/login">Login</Link>
//                         }
//                     </li>
//                     <li>
//                         {
//                             loggedInUser.name ? <button onClick={() => handleLogout()}>Logout</button> : <></>
//                         }
//                     </li>
//                 </ul>
//             </nav>
//             <div className="title-container">
//                 <h1>BOOK WORLD</h1>
//                 <h3>An online shop for BOOKS!!</h3>
//             </div>
//         </div>
//     );
// };

// export default Header;

import React from 'react';

const Header = () => {
    return (
        <div>
            
        </div>
    );
};

export default Header;