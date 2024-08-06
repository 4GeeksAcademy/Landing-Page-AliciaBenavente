import React from "react";

import Card from "./card";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";


const Home = () => {
	return (
		<>
			<div className="card-header"><NavBar /></div>
			<div className="container-fluid justify-content-center">
				<Jumbotron />
				<Card />
			</div>

			<div className="card-footer bg-dark text-light text-center py-3">
				Copyright @ Alicia's website 2024
			</div>
		</>
	);
};

export default Home;
