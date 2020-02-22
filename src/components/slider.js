import React from "react";
import { Carousel } from "react-bootstrap";
import Img from "gatsby-image";

const Slider = ({
	partnerTitle,
	imageOne,
	imageTwo,
	imageThree,
	imageFour,
	imageFive,
	imageSix,
	imageSeven,
	imageEight
}) => {
	return (
		<div>
			<div className="container inner pb-5">
				<h3 className="text-center mb-5 ">{partnerTitle}</h3>
				<div className="carousel owl-carousel clients ">
					<Carousel className="row">
						<Carousel.Item className="text-center">
							<span className="item pl-5 pr-5">
								{!!imageOne && !!imageOne.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageOne.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageOne.publicURL}
										alt="partners"
									/>
								)}
							</span>
							<span className="item pl-5 pr-5">
								{!!imageTwo && !!imageTwo.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageTwo.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageTwo.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>
							<span className="item pl-5 pr-5">
								{!!imageThree && !!imageThree.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageThree.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageThree.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>{" "}
							<span className="item pl-5 pr-5">
								{!!imageFour && !!imageFour.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageFour.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageFour.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<span className="item pl-5 pr-5">
								{!!imageFive && !!imageFive.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageFive.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageFive.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>

							<span className="item pl-5 pr-5">
								{!!imageSix && !!imageSix.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageSix.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageSix.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>

							<span className="item pl-5 pr-5">
								{!!imageSeven && !!imageSeven.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageSeven.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageSeven.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>
							<span className="item pl-5 pr-5">
								{!!imageEight && !!imageEight.childImageSharp ? (
									<Img
										style={{ width: `150px` }}
										fluid={imageEight.childImageSharp.fluid}
										alt="partners"
									/>
								) : (
									<img
										style={{ width: `150px` }}
										src={imageEight.publicURL}
										alt="partners"
									/>
								)}{" "}
							</span>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Slider;
