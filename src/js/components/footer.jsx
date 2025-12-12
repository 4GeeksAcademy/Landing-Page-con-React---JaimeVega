const Footer = (props) => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">{props.text}</p>
            </div>
        </footer>
    );
};

export default Footer;