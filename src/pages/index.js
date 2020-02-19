import React from "react";
import Layout from "../components/layout";
import Service from "../components/services";
import Slider from "../components/slider";
import SlideShow from "../components/slideShow";

const Index = () => {
	return (
		<Layout>
			<SlideShow />
			<Service />
			<Slider />
		</Layout>
	);
};

export default Index;
