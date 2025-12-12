const style = {
    width: '20rem',
    marginTop:'10px'
}
const Card = (props) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card " style={style}>
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="d-flex justify-content-center py-2 border-top " >
                    <a href="#" className="btn btn-primary">{props.buttonName}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;