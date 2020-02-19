import React from "react";
import Hshours from "../images/icons/hs-24-hours-1.png";
import Payment from "../images/icons/st-payment-method.png";
import Cloud from "../images/icons/ms-cloud-computing.png";
import Diagram from "../images/icons/of-diagram.png";
import Setting from "../images/icons/sm-setting.png";
import Globe from "../images/icons/de-earth-globe-3.png";

const Service = () => {
	return (
		<div className="container mb-4">
			<h3 className="display-3 text-center mt-4 mb-4">
				The full service we are offering is specifically{" "}
				<br className="d-none d-lg-block" />
				designed to meet your business needs.
			</h3>
			<div className="space40"></div>
			<div className="row text-center">
				<div className="col-md-6 col-lg-4">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Hshours} alt="" />
						</div>
						<h5>24/7 Support</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Payment} alt="" />
						</div>
						<h5>Secure Payments</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
				<div className="space30 d-none d-md-block d-lg-none"></div>
				<div className="col-md-6 col-lg-4">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Cloud} alt="" />
						</div>
						<h5>Daily Updates</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mt-3">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Diagram} alt="" />
						</div>
						<h5>Research & Marketing</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mt-3">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Setting} alt="" />
						</div>
						<h5>System Integration</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mt-3">
					<div className="box bg-white shadow shadow-hover">
						<div className="icon icon-svg mb-20">
							<img src={Globe} alt="" />
						</div>
						<h5>SEO Service</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
							porta gravida at eget metus. Cras justo odio donec elit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
