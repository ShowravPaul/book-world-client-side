import React from 'react';
import { useForm } from 'react-hook-form';
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        const url = `https://project-3-2-book-world.herokuapp.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log('server side response', res))
    }

    return (
        <div className="mb-5">
            <div>
            <AdminPanelMain></AdminPanelMain>
            </div>
            <div className="text-center">
                <h1>You can add an admin</h1>
                <h3>Just submit his gmail</h3>
                <br />
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: "300px" }} name="gmail" type="text" placeholder="enter gmail of new admin" ref={register} required />
                    <br />
                    <br />
                    <button className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
