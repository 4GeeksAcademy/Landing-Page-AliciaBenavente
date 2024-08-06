
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return(
        <div className="mb-3 row container-fluid justify-content-center" style={{width: "70%", marginLeft:"15%"}}>
            <div className="card me-2" style={{width: "24%"}}>
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card me-2" style={{width: "24%"}}>
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card me-2" style={{width: "24%"}}>
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{width: "24%"}}>
                <img src={rigoImage} className="card-img-top" alt="Rigo Baby Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Card