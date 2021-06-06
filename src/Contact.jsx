import React from 'react'

const Services = () => {
    return (
        <>
            <section className="main_heading my-5 pt-5">
                <div className="text-center">
                    <h1 className="display-4">Contact us</h1>
                    <hr className="w-25 mx-auto" />


                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-10 col-mid-8 mx-auto">
                            <form>
                            <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">ENTER NAME</label>
                                    <input type="email" className="form-control" id="exampleInputENTER NAME" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">PLZ ENTER UR NAME</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">MOBILE NO</label>
                                    <input type="password" className="form-control" id="exampleInputMOBILE NO" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>













        </>
    )
}

export default Services;
