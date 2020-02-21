import React from "react";
import Te1 from "../images/art/te1.jpg";
import Te2 from "../images/art/te2.jpg";
import Te3 from "../images/art/te3.jpg";

const Team = () => {
	return (
		<div class="wrapper light-wrapper">
			<div class="container inner">
				<h2 class="section-title text-center">Meet the Team</h2>
				<p class="lead larger text-center">
					Save your time and money by choosing our professional team.
				</p>
				<div class="grid-view">
					<div class="row  gap-small text-center">
						<div class="item col-lg-4 col-md-4 col-sm-6">
							<div class="item-inner">
								<div class="box bg-white shadow">
									<div class="img-blob blob1 mb-20">
										<img src={Te1} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 class="mb-15">Connor Gibson</h5>
									<div class="meta mb-10">Financial Analyst</div>
									<p class="mb-10">
										Pellentesque ornare sem lacinia quam venenatis.
									</p>
								</div>
							</div>
						</div>
						<div class="item col-lg-4 col-md-4 col-sm-6">
							<div class="item-inner">
								<div class="box bg-white shadow">
									<div class="img-blob blob1 mb-20">
										<img src={Te2} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 class="mb-15">Coriss Ambady</h5>
									<div class="meta mb-10">Marketing Specialist</div>
									<p class="mb-10">
										Pellentesque ornare sem lacinia quam venenatis.
									</p>
								</div>
							</div>
						</div>
						<div class="item col-lg-4 col-md-4 col-sm-6">
							<div class="item-inner">
								<div class="box bg-white shadow">
									<div class="img-blob blob1 mb-20">
										<img src={Te3} style={{ width: `7rem` }} alt="" />
									</div>
									<h5 class="mb-15">Barclay Widerski</h5>
									<div class="meta mb-10">Sales Manager</div>
									<p class="mb-10">
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
