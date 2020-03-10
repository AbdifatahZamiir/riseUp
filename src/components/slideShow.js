import React from "react";
import Concept21 from "../images/icons/ui-idea.png";
import Employ from "../images/employ.png";
import { Carousel } from "react-bootstrap";
import { Link } from "gatsby";

const SlideShow = ({ mainTitle, subTitle }) => {
	return (
		<div className="wrapper white-wrapper text-center pt-5">
			<div className="container rev_slider_wrapper fullwidth-container dark-spinner dark-nav">
				<Carousel style={{ zIndex: `0` }} className="carousel-fade">
					<Carousel.Item>
						<div id="slider16" className="row rev_slider fullwidthbanner">
							<div className="col-lg-6 col-md-6 col-sm-6 heading-con">
								<div className="heading-one color-dark mt-3 mb-4">
									{mainTitle}
								</div>
								{/* <div className="heading-two color-dark mt-3 mb-4">
									{subTitle}
								</div> */}
								<Link
									className="btn btn-l btn-default animated-btn mb-4"
									to="/about"
								>
									Learn More
								</Link>
							</div>
							<div className="col-md-6 col-lg-6 col-sm-6 r-pic">
								<img className="size-pic" src={Concept21} alt="" />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div id="slider16" className="row rev_slider fullwidthbanner">
							<div className="col-lg-6 col-md-6 col-sm-6 heading-con">
								<div className="heading-one color-dark mt- mb-4">
									{subTitle}
								</div>
								{/* <div className="heading-two color-dark mt-3 mb-4">
									{subTitle}
								</div> */}
								<Link
									className="btn btn-l btn-default animated-btn mb-4"
									to="/about"
								>
									Learn More
								</Link>
							</div>
							<div className="col-md-6 col-lg-6 col-sm-6 r-pic">
								<img className="size-pic" src={Employ} alt="empleyment" />
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default SlideShow;
