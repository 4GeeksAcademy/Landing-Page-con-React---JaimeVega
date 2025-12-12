import Card from './Card';
import Navbar from './Navbar';
import Footer from './footer';
import CardHeader from './CardHeader';
import rigoImage from "../../img/500x325.svg";

const Home = () => {
	return (
		<div className='bodyContainer'>
			<div className='container-fluid p-0 m-0 d-flex flex-column'>
				<Navbar nameNavbar={"Navbar"}/>
				<main>
					<div className="row">
						<div className="col">
						<CardHeader 
						title={"A Warm Welcome!"} 
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsa, lorem, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."}
						buttonDesc={"Call to action!"}/>
						</div>
					</div>
					<div className="row">
						<Card 
						image={rigoImage}
						title = {"Card title"} 
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."}
						buttonName={"Find Out More!"}/>
						<Card 
						image={rigoImage}
						title = {"Card title"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."}
						buttonName={"Find Out More!"}/>
						<Card 
						image={rigoImage}
						title = {"Card title"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."}
						buttonName={"Find Out More!"}/>
						<Card 
						image={rigoImage}
						title = {"Card title"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."}
						buttonName={"Find Out More!"}/>
					</div>
				</main>
			</div>
			<Footer text={"Copyright @ 2025 Website. All rights reserved."} />	
		</div>
	);
};

export default Home;