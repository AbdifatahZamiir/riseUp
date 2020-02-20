import React from "react";
import Z1 from "../images/art/z1.svg";
import Z2 from "../images/art/z2.svg";
import Z3 from "../images/art/z3.svg";
import Z4 from "../images/art/z4.svg";
import Z5 from "../images/art/z5.svg";
import Z6 from "../images/art/z6.svg";
import Z7 from "../images/art/z7.svg";
import Z8 from "../images/art/z8.svg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
	return (
		<div>
			<div className="container inner pb-5">
				<h3 className="text-center mb-5 ">
					We are creative company that values quality not quantity and focuses
					on establishing long-term relationships with clients.
				</h3>
				<div className="carousel owl-carousel clients ">
					<Carousel>
						<Carousel.Item className="text-center">
							<span className="item pl-5 pr-5">
								<img src={Z1} alt="" style={{ width: `150px` }} />
							</span>
							<span className="item pl-5 pr-5">
								<img src={Z7} alt="" style={{ width: `150px` }} />
							</span>
							<span className="item pl-5 pr-5">
								<img src={Z8} alt="" style={{ width: `150px` }} />
							</span>{" "}
							<span className="item pl-5 pr-5">
								<img src={Z6} alt="" style={{ width: `150px` }} />
							</span>
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item className="text-center">
							<span className="item pl-5 pr-5">
								<img src={Z4} alt="" style={{ width: `150px` }} />
							</span>

							<span className="item pl-5 pr-5">
								<img src={Z3} alt="" style={{ width: `150px` }} />
							</span>

							<span className="item pl-5 pr-5">
								<img src={Z2} alt="" style={{ width: `150px` }} />
							</span>
							<span className="item pl-5 pr-5">
								<img src={Z5} alt="" style={{ width: `150px` }} />
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
