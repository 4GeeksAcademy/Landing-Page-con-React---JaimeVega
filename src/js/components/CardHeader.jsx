const CardHeader = (props) => {
    return (
        <div className="card bg-light border-0" >
			<div className="card-body">
				<h1 className="card-title">{props.title}</h1>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">{props.buttonDesc}</a>
			</div>
		</div>
    );
};

export default CardHeader;