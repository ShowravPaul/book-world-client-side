import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    // learned from: https://www.youtube.com/watch?v=NgWGllOjkbs

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4zw7ky8', 'template_9d74mxs', e.target, 'user_FX5p6LU9NIkvkpUBEayWT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div class="App container justify-content-center mb-5 p-5">
            <section class="shadow mb-5 bg-body rounded p-3"> {/* p-3 has been deleted */}
                <div>
                    <h2>Send a mail:</h2>
                </div>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Your Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            {/* <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div> */}
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Email"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;