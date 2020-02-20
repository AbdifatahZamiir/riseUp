import React from "react";
import Layout from "../components/layout";
import Service from "../components/services";
import Slider from "../components/slider";
import SlideShow from "../components/slideShow";
import ContactCom from "../components/contactCom";
import About from "../components/about";

const Index = () => {
	return (
		<Layout>
			<SlideShow />
			<About />
			<Service />
			<ContactCom />
			<Slider />
		</Layout>
	);
};

export default Index;
