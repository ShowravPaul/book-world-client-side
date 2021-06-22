import React from 'react';
import { useHistory } from 'react-router';
import './AdminPanelMain.css'

const AdminPanelMain = () => {
    const history = useHistory();

    const handleOrderList = () => {
        history.push(`/orderList`);
    }

    const handleAddBook = () => {
        history.push(`/addBook`);
    }

    const handleMakeAdmin = () => {
        history.push(`/makeAdmin`);
    }

    const handleManageBooks = () => {
        history.push(`/manageBooks`);
    }

    return (
        <div className="mb-5">
            <div className="text-center mt-5">
                <h2>ADMIN PANEL</h2>
            </div>
            <div className="container admin-panel row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <button className="btn btn-success" onClick={() => handleOrderList()}>Order List</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <button className="btn btn-primary" onClick={() => handleAddBook()}>Add a Book</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <button className="btn btn-success" onClick={() => handleMakeAdmin()}>Make an Admin</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <button className="btn btn-primary" onClick={() => handleManageBooks()}>Manage Books</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelMain;
