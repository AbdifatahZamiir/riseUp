import React from "react";
import About from "../components/about";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Team from "../components/team";

const AboutPage = () => {
	return (
		<Layout>
			<div className="top-image wrapper image-wrapper bg-image page-title-wrapper inverse-text">
				<div className="container inner text-center">
					<h1 className="page-title text-white">About Us</h1>
				</div>
			</div>
			<About />
			<Team />
			<Slider />
		</Layout>
	);
};

export default AboutPage;
