import React from "react";
import rigoImage from "../../img/500x325.svg";

const style = {
    width: '20rem',
    marginTop:'10px'
}
const Card = () => {
    return (
        <div >
            <div className="card" style={style}>
                <img src={rigoImage} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;