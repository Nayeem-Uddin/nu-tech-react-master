import React from 'react';

const Contact = () =>{
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Phone No.</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile No. ..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Messege</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-sb" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;