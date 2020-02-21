import React from "react";
import Te1 from "../images/art/te1.jpg";
import Te2 from "../images/art/te2.jpg";
import Te3 from "../images/art/te3.jpg";

const Team = () => {
	return (
		<div className="wrapper light-wrapper">
			<div className="container inner">
				<h2 className="section-title text-center">Meet the Team</h2>
				<p className="lead larger text-center">
					Save your time and money by choosing our professional team.
				</p>
				<div className="grid-view">
					<div className="row  gap-small text-center">
						<div className="item col-lg-4 col-md-4 col-sm-6">
							<div className="item-inner">
								<div className="box bg-white shadow">
									<div className="img-blob blob1 mb-20">
										<img src={Te1} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 className="mb-15">Connor Gibson</h5>
									<div className="meta mb-10">Financial Analyst</div>
									<p className="mb-10">
										Pellentesque ornare sem lacinia quam venenatis.
									</p>
								</div>
							</div>
						</div>
						<div className="item col-lg-4 col-md-4 col-sm-6">
							<div className="item-inner">
								<div className="box bg-white shadow">
									<div className="img-blob blob1 mb-20">
										<img src={Te2} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 className="mb-15">Coriss Ambady</h5>
									<div className="meta mb-10">Marketing Specialist</div>
									<p className="mb-10">
										Pellentesque ornare sem lacinia quam venenatis.
									</p>
								</div>
							</div>
						</div>
						<div className="item col-lg-4 col-md-4 col-sm-6">
							<div className="item-inner">
								<div className="box bg-white shadow">
									<div className="img-blob blob1 mb-20">
										<img src={Te3} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 className="mb-15">Barclay Widerski</h5>
									<div className="meta mb-10">Sales Manager</div>
									<p className="mb-10">
										Pellentesque ornare sem lacinia quam venenatis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
