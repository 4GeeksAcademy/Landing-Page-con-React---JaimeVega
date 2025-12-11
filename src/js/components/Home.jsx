import Card from './Card';
import Navbar from './Navbar';
import Footer from './footer';
import CardHeader from './CardHeader';

const Home = () => {
	return (
		<div className='bodyContainer'>
			<div className='container-fluid p-0 m-0 d-flex flex-column'>
				<Navbar/>
					
				<main>
					<div className="row">
						<div className="col">
						<CardHeader/>
						</div>
					</div>
					<div className="row">
						<div className="col d-flex justify-content-center">
						<Card/>
						</div>
						<div className="col d-flex justify-content-center">
						<Card/>
						</div>
						<div className="col d-flex justify-content-center">
						<Card/>
						</div>
						<div className="col d-flex justify-content-center">
						<Card/>
						</div>
					</div>
				</main>
			</div>
			<Footer />	
		</div>
	);
};

export default Home;