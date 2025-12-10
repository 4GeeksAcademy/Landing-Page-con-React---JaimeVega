import React from "react";
import rigoImage from "../../img/500x325.svg";

const style = {
    width: '18rem',
    marginTop:'10px'
}
const Card = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card" style={style}>
                <img src={rigoImage} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;