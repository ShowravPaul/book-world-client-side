import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';
import './AddBook.css'

const AddBook = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const bookData = {
            bookName: data.name,
            imageURL: imageURL,
            writerName: data.writer,
            price: data.price
        };

        const url = `https://project-3-2-book-world.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response', res))
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c941757cd751641abd35360261ba8de8');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="mb-5">
            <AdminPanelMain></AdminPanelMain>
            <div className="addBook">
                <h4>Add a new Book!</h4>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" placeholder="Book name" ref={register} required />
                    <br />
                    <br />
                    <p>Choose an image for the book:</p>
                    <input name="image" type="file" onChange={handleImageUpload} required />
                    <br />
                    <br />
                    <input name="writer" type="text" placeholder="Writer name" ref={register} required />
                    <br />
                    <br />
                    <input name="price" type="number" placeholder="Price" ref={register} required />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBook;
