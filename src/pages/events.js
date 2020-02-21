import React from "react";
import B1 from "../images/art/b1.jpg";
import B2 from "../images/art/b2.jpg";
import B3 from "../images/art/b3.jpg";
import B4 from "../images/art/b4.jpg";
import B6 from "../images/art/a1.jpg";
import B7 from "../images/art/a2.jpg";
import B8 from "../images/art/a3.jpg";
import TitleImg from "../images//mylogo.jpg";

import { FaClock, FaSearch } from "react-icons/fa";
import Layout from "../components/layout";

const Event = () => {
	return (
		<Layout>
			<div
				className="wrapper image-wrapper bg-image page-title-wrapper inverse-text"
				style={{
					backgroundImage: `url(${TitleImg})`,
					backgroundSize: `cover`,
					backgroundPosition: `center`
				}}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">Events</h1>
				</div>
			</div>
			<div class="wrapper light-wrapper">
				<div class="container inner">
					<div class="row">
						<div class="col-lg-8">
							<div class="blog grid grid-view">
								<div class="row isotope">
									<div class="item post grid-sizer col-md-6">
										<figure class="overlay overlay1 rounded mb-30">
											<a href="/">
												<img src={B1} alt="" />
											</a>
											<figcaption>
												<h5 class="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div class="category">
											<a href="/" class="badge badge-pill bg-purple">
												Concept
											</a>
										</div>
										<h2 class="post-title">
											<a href="blog-post.html">
												Ligula tristique quis risus eget urna mollis ornare
												porttitor
											</a>
										</h2>
										<div class="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div class="meta mb-0">
											<span class="date">
												<i class="jam jam-clock">
													<FaClock />
												</i>
												5 Jul 2018
											</span>
										</div>
									</div>
									<div class="item post grid-sizer col-md-6">
										<figure class="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B2} alt="" />
											</a>
											<figcaption>
												<h5 class="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div class="category">
											<a href="/" class="badge badge-pill bg-meander">
												Business
											</a>
										</div>
										<h2 class="post-title">
											<a href="blog-post.html">
												Nullam id dolor elit id nibh pharetra augue venenatis
											</a>
										</h2>
										<div class="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div class="meta mb-0">
											<span class="date">
												<i class="jam jam-clock">
													<FaClock />
												</i>
												18 Jun 2018
											</span>
										</div>
									</div>
									<div class="item post grid-sizer col-md-6">
										<figure class="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B3} alt="" />
											</a>
											<figcaption>
												<h5 class="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div class="category">
											<a href="/" class="badge badge-pill bg-pink">
												Design
											</a>
										</div>
										<h2 class="post-title">
											<a href="blog-post.html">
												Ultricies fusce porta elit pharetra augue faucibus
											</a>
										</h2>
										<div class="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div class="meta mb-0">
											<span class="date">
												<i class="jam jam-clock">
													<FaClock />
												</i>
												14 May 2018
											</span>
										</div>
									</div>
									<div class="item post grid-sizer col-md-6">
										<figure class="overlay overlay1 rounded mb-30">
											<a href="/">
												{" "}
												<img src={B4} alt="" />
											</a>
											<figcaption>
												<h5 class="from-top mb-0">Read More</h5>
											</figcaption>
										</figure>
										<div class="category">
											<a href="/" class="badge badge-pill bg-violet">
												Ideas
											</a>
										</div>
										<h2 class="post-title">
											<a href="blog-post.html">
												Morbi leo risus porta eget metus est non commodolacus
											</a>
										</h2>
										<div class="post-content">
											<p>
												Mauris convallis non ligula non interdum. Gravida
												vulputate convallis vestibulum. Cras imperdiet nun eu
												dolor vestibulum ultrices diam tempus.
											</p>
										</div>
										<div class="meta mb-0">
											<span class="date">
												<i class="jam jam-clock">
													<FaClock />
												</i>
												9 Apr 2018
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="space30 d-block d-md-none"></div>
						</div>
						<aside class="col-lg-4 sidebar">
							<div class="sidebox widget">
								<h3 class="widget-title">Search</h3>
								<form class="search-form fields-white">
									<div class="form-group">
										<span className="fa fa-search form-control-feedback">
											<FaSearch size="18px" color="#000" />
										</span>
										<input
											style={{ backgroundColor: `#fff` }}
											type="text"
											class="form-control"
											placeholder="Search something"
										/>
									</div>
								</form>
							</div>

							<div class="sidebox widget">
								<h3 class="widget-title">Popular Posts</h3>
								<ul class="image-list">
									<li>
										<figure class="rounded">
											<a href="blog-post.html">
												<img src={B6} alt="" />
											</a>
										</figure>
										<div class="post-content">
											<h6 class="post-title">
												{" "}
												<a href="blog-post.html">
													Magna Mollis Ultricies Mauris
												</a>{" "}
											</h6>
											<div class="meta">
												<span class="date">
													<i class="jam jam-clock">
														<FaClock />
													</i>
													12 Nov 2017
												</span>
											</div>
										</div>
									</li>
									<li>
										<figure class="rounded">
											{" "}
											<a href="blog-post.html">
												<img src={B7} alt="" />
											</a>
										</figure>
										<div class="post-content">
											<h6 class="post-title">
												{" "}
												<a href="blog-post.html">
													Ornare Nullam Risus Cursus
												</a>{" "}
											</h6>
											<div class="meta">
												<span class="date">
													<i class="jam jam-clock">
														<FaClock />
													</i>
													12 Nov 2017
												</span>
											</div>
										</div>
									</li>
									<li>
										<figure class="rounded">
											<a href="blog-post.html">
												<img src={B8} alt="" />
											</a>
										</figure>
										<div class="post-content">
											<h6 class="post-title">
												{" "}
												<a href="blog-post.html">Euismod Nullam Fusce</a>{" "}
											</h6>
											<div class="meta">
												<span class="date">
													<i class="jam jam-clock">
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
