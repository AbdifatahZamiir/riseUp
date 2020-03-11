import React from "react";
import ImageOne from "../images/par1.png";
import ImageTwo from "../images/par2.jpg";

const Slider = ({ partnerTitle }) => {
	return (
		<div className="wrapper white-wrapper">
			<div className="container inne pb-4">
				<h3 className="display-3 text-center" style={{ paddingBottom: "5rem" }}>
					<span className="title-underline">{partnerTitle}</span>
				</h3>
				<div className="clients">
					<div className="row" style={{ zIndex: `0` }}>
						<div className="text-center col-lg-6 col-md-6">
							<span className="text-center item pl-5 pr-5">
								<img style={{ width: `12rem` }} src={ImageOne} alt="partners" />
							</span>
						</div>
						<div className="text-center col-lg-6 col-md-6">
							<span className="text-center item pl-5 pr-5">
								<img style={{ width: `12rem` }} src={ImageTwo} alt="partners" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
