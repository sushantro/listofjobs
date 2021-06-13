import React from 'react'
import "./Dofa.css"

const Login1 = () => {
    return (
        <div>
            <>
                <section className="main_heading my-5">
                    <div className="text-center">
                        <h1 className="display-4">Login page</h1>
                        <hr className="w-25 mx-auto" />
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                            <figure >
                                <img  
                                src="https://th.bing.com/th/id/OIP.5uZm2CmwSuB0M4wdfjhBxwHaFj?w=273&h=204&c=7&o=5&dpr=1.47&pid=1.7"  alt="login" className="logini"/>
                            </figure>


                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-xxl-6 TEXT">
                            <form>


                                <div className="form-group">
                                   <h1>email</h1>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    
                                </div>
                                <div className="form-group">
                                    <h1>password</h1>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="submit" className="btn btn-primary">login with Google </button>

                            </form>



                        </div>




                    </div>
                </div>

            </>

        </div>
    )
}

export default Login1

