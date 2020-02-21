import React from "react";
import "../styles/bootstrap.min.css";
import B1 from "../images/art/b1.jpg";
import B2 from "../images/art/b2.jpg";
import B3 from "../images/art/b5.jpg";
import B4 from "../images/art/b4.jpg";
import B6 from "../images/art/a1.jpg";
import B7 from "../images/art/a2.jpg";
import B8 from "../images/art/a3.jpg";

import { FaClock, FaSearch } from "react-icons/fa";
import Layout from "../components/layout";

const Event = () => {
	return (
		<Layout>
			<div className="top-image wrapper image-wrapper bg-image page-title-wrapper inverse-text">
				<div className="container inner text-center">
					<h1 className="page-title text-white">Events</h1>
				</div>
			</div>
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog grid grid-view">
								<div className="row isotope">
									<div className="item post grid-sizer col-md-6">
										<figure className="overlay overlay1 rounded mb-30">
											<a href="/">
												<img src={B1} alt="" />
											</a>
											<figcaption>
												<h5 className="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div className="category">
											<a href="/" className="badge badge-pill bg-meander">
												Concept
											</a>
										</div>
										<h2 className="post-title">
											<a href="blog-post.html">
												Ligula tristique quis risus eget urna mollis ornare
												porttitor
											</a>
										</h2>
										<div className="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div className="meta mb-0">
											<span className="date">
												<i className="jam jam-clock">
													<FaClock />
												</i>
												5 Jul 2018
											</span>
										</div>
									</div>
									<div className="item post grid-sizer col-md-6">
										<figure className="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B2} alt="" />
											</a>
											<figcaption>
												<h5 className="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div className="category">
											<a href="/" className="badge badge-pill bg-meander">
												Business
											</a>
										</div>
										<h2 className="post-title">
											<a href="blog-post.html">
												Nullam id dolor elit id nibh pharetra augue venenatis
											</a>
										</h2>
										<div className="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div className="meta mb-0">
											<span className="date">
												<i className="jam jam-clock">
													<FaClock />
												</i>
												18 Jun 2018
											</span>
										</div>
									</div>
									<div className="item post grid-sizer col-md-6">
										<figure className="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B3} alt="" />
											</a>
											<figcaption>
												<h5 className="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div className="category">
											<a href="/" className="badge badge-pill bg-meander">
												Design
											</a>
										</div>
										<h2 className="post-title">
											<a href="blog-post.html">
												Ultricies fusce porta elit pharetra augue faucibus
											</a>
										</h2>
										<div className="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div className="meta mb-0">
											<span className="date">
												<i className="jam jam-clock">
													<FaClock />
												</i>
												14 May 2018
											</span>
										</div>
									</div>
									<div className="item post grid-sizer col-md-6">
										<figure className="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B4} alt="" />
											</a>
											<figcaption>
												<h5 className="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div className="category">
											<a href="/" className="badge badge-pill bg-meander">
												Ideas
											</a>
										</div>
										<h2 className="post-title">
											<a href="blog-post.html">
												Morbi leo risus porta eget metus est non commodolacus
											</a>
										</h2>
										<div className="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div className="meta mb-0">
											<span className="date">
												<i className="jam jam-clock">
													<FaClock />
												</i>
												9 Apr 2018
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="space30 d-block d-md-none"></div>
						</div>
						<aside className="col-lg-4 sidebar">
							<div className="sidebox widget">
								<h3 className="widget-title">Search</h3>
								<div className="form-group has-search inner-addon left-addon">
									<span className="fa fa-search form-control-feedback">
										<FaSearch
											size="18px"
											color="#d8681d"
											style={{
												cursor: `pointer`
											}}
										/>
									</span>
									<input
										className="form-control"
										style={{ backgroundColor: `#fff`, paddingLeft: `2rem` }}
										type="text"
										placeholder="Search something"
									/>
								</div>
							</div>

							<div className="sidebox widget">
								<h3 className="widget-title">Popular Posts</h3>
								<ul className="image-list">
									<li>
										<figure className="rounded">
											<a href="blog-post.html">
												<img src={B6} alt="" />
											</a>
										</figure>
										<div className="post-content">
											<h6 className="post-title">
												{" "}
												<a href="blog-post.html">
													Magna Mollis Ultricies Mauris
												</a>{" "}
											</h6>
											<div className="meta">
												<span className="date">
													<i className="jam jam-clock">
														<FaClock />
													</i>
													12 Nov 2017
												</span>
											</div>
										</div>
									</li>
									<li>
										<figure className="rounded">
											{" "}
											<a href="blog-post.html">
												<img src={B7} alt="" />
											</a>
										</figure>
										<div className="post-content">
											<h6 className="post-title">
												{" "}
												<a href="blog-post.html">
													Ornare Nullam Risus Cursus
												</a>{" "}
											</h6>
											<div className="meta">
												<span className="date">
													<i className="jam jam-clock">
														<FaClock />
													</i>
													12 Nov 2017
												</span>
											</div>
										</div>
									</li>
									<li>
										<figure className="rounded">
											<a href="blog-post.html">
												<img src={B8} alt="" />
											</a>
										</figure>
										<div className="post-content">
											<h6 className="post-title">
												{" "}
												<a href="blog-post.html">Euismod Nullam Fusce</a>{" "}
											</h6>
											<div className="meta">
												<span className="date">
													<i className="jam jam-clock">
														<FaClock />
													</i>
													12 Nov 2017
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Event;
