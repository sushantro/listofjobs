import React from 'react'

const Cards = () => {
    return (
       
        <>
            <div className="container">
                <h1 className="ser">OUR SERVICES</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card" >
                            <img className="card-img-fluid" src="https://th.bing.com/th/id/OIP.NgT6CH4DTs8wOWG-xbMyPAHaE8?w=254&h=180&c=7&o=5&dpr=1.47&pid=1.7" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">AC REPAIRING</h5>
                                <p className="card-text">These service will be in door step to help u in Lockdown
                                they Ac freelancer will help u to clean service ur Ac</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" >
                            <img className="card-img-top" src="https://th.bing.com/th?q=Graphic+Pencil+Drawings&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.47&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Drawing</h5>
                                <p className="card-text">U can use these niche photo to showcase it its and antique pic
                                which will make home designable</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" >
                            <img className="img-fluid" src="https://th.bing.com/th/id/OIP.v2LeWxS3apoM5b7rk_Pi7gHaH_?w=179&h=193&c=7&o=5&dpr=1.47&pid=1.7" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Plumber services</h5>
                                <p className="card-text">Our plumbers will fixed ou whole home pipes basins and if facing issues related to Taps
                                Contact them on urgent basis</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Cards

