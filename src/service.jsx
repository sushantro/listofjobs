import React from 'react'
import ser from "./New folder/images/ser1.jpg";
import ser1 from "./New folder/images/ser2.gif";
import ser3 from "./New folder/images/ser3.jpg"
import { Link } from "react-router-dom"

const Service = () => {
    return (
        <>
            <section id="service">
                <div className="row">
                    <div className="faka">
                    <h1 className="text-center " >OUR SERVICES</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow mt-5 ">
                            <img src={ser} className="card-img-top rounded kopa" alt="kal" />
                            <div className="card-body">
                                <h5 className="card-title">COMPUTER SERVICE</h5>
                                <p className="card-text">THESE COMPUTER SERVICING CAN BE DONE TO IMPORVE 
                                UR QUALITY OF COMPUTER AND FOR REMOVING VIRUS .IF FACING ISSUE RELATED
                                 TO HARDWARE SOFTWARE BID HERE
                                </p>
                                <Link to="" type="button" className="btn btn-success">Bid $4000</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow mt-5">
                            <img src={ser1} className="card-img-top rounded kopa" alt="kal" />
                            <div className="card-body ja">
                                <h5 className="card-title">EXERCISE TRAINER</h5>
                                <p className="card-text">WANT TO REMOVE UR FATS WANT TO FREE FROM ANXIETY 
                                THROUGH EXERCISE .MAINTAIN A GOOD HEALTH BID HERE.CONTROL DIABTESE BLOOD SUGAR
                                 IN QUARANTINE ALSO AND FREE FROM CORONA BY DOING EXERCISE
                                </p>
                                <Link to="" type="button" className="btn btn-success jaga ">Bid $4000</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow mt-5">
                            <img src={ser3} className="card-img-top rounded kopa" alt="kal" />
                            <div className="card-body">
                                <h5 className="card-title">ANIMATION </h5>
                                <p className="card-text">WANT TO MAKE ANY ANIMATIVE LOGO CARDS RESPONSIVENESS
                                MAKE A STRONGER IMPRESSION THROUGH LOGOS ANIMATIONS .THESE WILL HELP U TO GROW
                                WANT TO MOVE FASTER BID HERE 
                                </p>
                                <Link to="" type="button" className="btn btn-success jaga ">Bid $4000</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Service
