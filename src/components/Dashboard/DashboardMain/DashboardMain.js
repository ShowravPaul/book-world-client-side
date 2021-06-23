import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanelMain from '../Adminpanel/AdminPanelMain/AdminPanelMain';
import UserDashboardMain from '../UserDashboard/UserDashboardMain/UserDashboardMain';

const DashboardMain = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('https://project-3-2-book-world.herokuapp.com/admins')
            .then(response => response.json())
            .then(data => setAdmins(data))
    }, [])

    let isAdmin = false;

    console.log(admins);

    for (let i = 0; i < admins.length; i++) {
        if (admins[i].gmail === loggedInUser.email) {
            isAdmin = true;
            break;
        }
    }

    const [person, setPerson] = useState(null);

    const admin = () => {
        setPerson("admin")
    }
    const user = () => {
        setPerson("user")
    }
    return (
        <div>
            {/* <AdminPanelMain></AdminPanelMain> */}
            {/* <UserDashboardMain></UserDashboardMain> */}
            {/* {
                isAdmin ? <AdminPanelMain></AdminPanelMain> : <UserDashboardMain></UserDashboardMain>
            } */}

            <div>
                <h4 className="text-center">
                    For testing purpose, one can access userpanel as well as admin panel.
                    <br />
                    Anyone can login with a gmail account.
                    <br />
                    <br />
                    <button onClick={() => admin()}>As an admin</button>
                    <button onClick={() => user()}>As an user</button>
                </h4>
            </div>
            {
                person === "admin" ? <AdminPanelMain></AdminPanelMain> : <UserDashboardMain></UserDashboardMain>
            }
            {
                isAdmin==="abcde" ? isAdmin=false : isAdmin=true // pls skip this line, just for using the isAdmin var 
            }
        </div>
    );
};

export default DashboardMain;
