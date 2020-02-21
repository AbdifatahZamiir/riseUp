import React from "react";
import About from "../components/about";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Team from "../components/team";
import TitleImg from "../images//mylogo.jpg";

const AboutPage = () => {
	return (
		<Layout>
			<div
				className="wrapper image-wrapper bg-image page-title-wrapper inverse-text"
				style={{
					backgroundImage: `url(${TitleImg})`,
					backgroundSize: `cover`,
					backgroundPosition: `center`
				}}
			>
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
