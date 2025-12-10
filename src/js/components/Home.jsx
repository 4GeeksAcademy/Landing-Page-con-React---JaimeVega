import Card from './Card';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='container-fluid p-0 m-0'>
			<div className='row'>
				<Navbar/>
			</div>

			
			<div className='row p-2' >
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	);
};

export default Home;