import React from "react";
import About3 from "../images/art/about3.jpg";
const About = () => {
	return (
		<div>
			<div className="col-lg-6 pl-60 pl-md-15">
				<h2 className="title-color color-gray">About Us</h2>
				<h3 className="display-3">
					We are a creative company that focuses on establishing long-term
					relationships with customers.
				</h3>
				<p>
					Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
					venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.
				</p>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
					eget risus varius blandit sit amet non magna. Cras justo odio, dapibus
					ac facilisis in, egestas eget quam. Nullam id dolor id nibh.
				</p>
			</div>

			<div className="row align-items-center">
				<div className="col-lg-6 order-lg-2 text-center">
					<div className="img-blob blob4">
						<img src={About3} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
