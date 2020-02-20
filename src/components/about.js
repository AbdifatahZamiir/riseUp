import React from "react";
import About3 from "../images/art/about7.png";
const About = () => {
	return (
		<div className="wrapper white-wrapper">
			<div className="container inner">
				<div className="row align-items-center">
					<div className="col-lg-6 order-lg-2 text-center">
						<div>
							<figure>
								<img src={About3} alt="" />
							</figure>
							<div
								className="row counter counter-s position-absolute"
								// style="top: 45%; right: 8%;"
								style={{ top: `45%`, right: `8%` }}
							>
								<div className="col-md-10 text-center">
									<div className="box bg-white shadow">
										<h3>
											<span className="value">450</span>+
										</h3>
										<p>
											Successful <br className="d-md-none" />
											StartUps
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space30 d-none d-md-block d-lg-none"></div>
					<div className="col-lg-6 pr-60 pr-md-15">
						<h2 className="title-color color-gray">About Us</h2>
						<h3 className="display-3">
							We are a creative company that focuses on establishing long-term
							relationships with customers.
						</h3>
						<div className="space10"></div>
						<p>
							Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
							quam venenatis vestibulum. Aenean lacinia bibendum nulla sed
							consectetur.
						</p>
						<p>
							Cras mattis consectetur purus sit amet fermentum. Maecenas sed
							diam eget risus varius blandit sit amet non magna. Cras justo
							odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor
							id nibh.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
