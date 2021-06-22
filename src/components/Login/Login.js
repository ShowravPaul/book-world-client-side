import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import loginPageImage from '../../images/loginPageImage.jpg'
import Footer from '../Footer/Footer';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  setLoggedInUser(loggedInUser);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
      history.replace(from);
      // ...
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        // console.log(idToken);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <>
    <section className="row d-flex align-items-center mt-3 ml-3 mb-5">
      <div className="col-md-8 login-image">
        <img src={loginPageImage} alt="" />
      </div>
      <div className="col-md-4">
        <h3>Login Now!</h3>
        <br />
        <button className="btn btn-info" onClick={handleGoogleSignIn}>Login with Google</button>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Login;