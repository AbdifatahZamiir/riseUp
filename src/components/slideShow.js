import React from "react";
import Concept21 from "../images/concept/concept2.png";

const SlideShow = ({ mainTitle, subTitle }) => {
	return (
		<div className="wrapper white-wrapper img-back">
			<div className="container rev_slider_wrapper fullwidth-container dark-spinner dark-nav">
				<div id="slider16" className="row rev_slider fullwidthbanner">
					<div className="col-lg-6 col-md-6 col-sm-6 heading-con">
						<div className="heading-one color-dark mt-3">{mainTitle} </div>
						<div className="heading-two color-dark mt-3 mb-4">{subTitle}</div>
						<a className="btn btn-l btn-default animated-btn" href="/">
							Learn More
						</a>
					</div>
					<div className="col-md-6 col-lg-6 col-sm-6 r-pic">
						<img className="size-pic" src={Concept21} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SlideShow;
