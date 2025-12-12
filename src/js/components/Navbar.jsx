
const NavbarItem = (props) => {
    const activeState = (props.active)? "active" : "";
    return (
        <a className={`nav-link ${activeState}`} aria-current="page" href="#">{props.nameItem}</a>
    )     
};


const Navbar = (props) => {
    return (
        <div className="col-12">
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.nameNavbar}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavbarItem nameItem={"Home"} active={true}/>
                            <NavbarItem nameItem={"About"}/>
                            <NavbarItem nameItem={"Services"}/>
                            <NavbarItem nameItem={"Contact"}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;