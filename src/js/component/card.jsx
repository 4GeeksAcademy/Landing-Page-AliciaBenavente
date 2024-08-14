
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return(
        <div className="mb-3 row container-fluid justify-content-center d-flex gap-1" style={{width: "70%", marginLeft:"15%"}}>
             <div className="card col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary btn-sm col-12 mx-auto">Go somewhere</button>
                </div>
            </div>
            <div className="card col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary btn-sm col-12 mx-auto">Go somewhere</button>
                </div>
            </div>
            <div className="card col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary btn-sm col-12 mx-auto">Go somewhere</button>
                </div>
            </div>
            <div className="card col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 mb-2">
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary btn-sm col-12 mx-auto">Go somewhere</button>
                </div>
            </div>
        </div>
    )
}
export default Card