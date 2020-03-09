import React from "react";
import ImageOne from "../images/par1.png";
import ImageTwo from "../images/par2.jpg";

const Slider = ({ partnerTitle }) => {
	return (
		<div className="container inner pb-5">
			<h3
				className="display-3 text-center mt-4"
				style={{ marginBottom: "8rem" }}
			>
				{partnerTitle}
			</h3>
			<div className="clients">
				<div className="row" style={{ zIndex: `0` }}>
					<div className="text-center col-lg-6 col-md-6">
						<span className="text-center item pl-5 pr-5">
							<img style={{ width: `13rem` }} src={ImageOne} alt="partners" />
						</span>
					</div>
					<div className="text-center col-lg-6 col-md-6">
						<span className="text-center item pl-5 pr-5">
							<img style={{ width: `13rem` }} src={ImageTwo} alt="partners" />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
