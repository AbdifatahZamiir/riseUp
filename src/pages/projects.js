import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { paginate } from "../utils/paginate";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import Img from "gatsby-image";
import { FaClock, FaSearch } from "react-icons/fa";
import Head from "../components/Head";
import Popular from "../components/popularPost";

class Projects extends Component {
	state = {
		posts: [],
		pageSize: 4,
		currentPage: 1,
		searchQuery: ""
	};

	componentDidMount() {
		const { data } = this.props;
		this.setState({ posts: data.allMarkdownRemark.edges });
	}
	handleSearch = query => {
		this.setState({ searchQuery: query, currentPage: 1 });
	};
	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	getPagedData = () => {
		const { posts: allPosts, currentPage, pageSize, searchQuery } = this.state;

		let filtered = allPosts;
		if (searchQuery)
			filtered = allPosts.filter(post =>
				post.node.frontmatter.title
					.toLowerCase()
					.includes(searchQuery.toLowerCase())
			);
		else filtered = allPosts;

		const posts = paginate(filtered, currentPage, pageSize);
		return { totalCount: filtered.length, data: posts };
	};

	render() {
		const { currentPage, pageSize, searchQuery } = this.state;
		const { totalCount, data: posts } = this.getPagedData();
		return (
			<Layout>
				<Head title="Current Projects" />
				<div
					className=" gray-wrapper top-image"
					style={{ paddingBottom: `15rem`, backgroundAttachment: `fixed` }}
				>
					<div className="container inner text-center">
						<h1 className="page-title text-white">Current Projects </h1>
					</div>
				</div>
				<div className="wrapper white-wrapper">
					<div className="container inner">
						<div className="row">
							<div className="col-lg-8">
								<div className="blog grid grid-view">
									<div className="row isotope mb-5">
										{posts.map(({ node }) => {
											const { id } = node;
											const { slug } = node.fields;
											const {
												featuredImg,
												title,
												description,
												publishedDate
											} = node.frontmatter;
											return (
												<div className="item post grid-sizer col-md-6" key={id}>
													<figure className="overlay overlay1 rounded mb-3">
														<Link to={slug}>
															{!!featuredImg &&
															!!featuredImg.childImageSharp ? (
																<Img
																	style={{ width: "100%", height: "300px" }}
																	fluid={featuredImg.childImageSharp.fluid}
																	alt={title}
																/>
															) : (
																<img
																	style={{ width: "100%", height: "300px" }}
																	src={featuredImg.publicURL}
																	alt={title}
																/>
															)}
														</Link>
														<figcaption>
															<h5 className="from-top mb-0">Read More</h5>
														</figcaption>
													</figure>
													<h2 className="post-title">
														<Link style={{ boxShadow: `none` }} to={slug}>
															{title}
														</Link>
													</h2>
													<div className="post-content">
														<p>{description}</p>
													</div>
													<div className="meta mb-0">
														<span className="date">
															<FaClock
																size="19px"
																color="d8681d"
																className="mb-2"
															/>
															{"     "}
															{publishedDate}
														</span>
													</div>
												</div>
											);
										})}
									</div>
									<Pagination
										itemCount={totalCount}
										currentPage={currentPage}
										pageSize={pageSize}
										onPageChange={this.handlePageChange}
									/>
								</div>
							</div>
							<aside className="col-lg-4 sidebar">
								<div className="sidebox widget">
									<h3 className="widget-title">Search</h3>
									<div className="form-group  has-search">
										<span
											className="fa fa-search form-control-feedback"
											style={{ zIndex: `0` }}
										>
											<FaSearch
												size="18px"
												color="#d8681d"
												style={{
													cursor: `pointer`
												}}
											/>
										</span>
										<input
											className="form-control search-input"
											style={{ backgroundColor: `#fff`, paddingLeft: `2rem` }}
											type="text"
											value={searchQuery}
											placeholder="Search..."
											onChange={e => this.handleSearch(e.currentTarget.value)}
										/>
									</div>
								</div>
								<Popular />
							</aside>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Projects;
export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "project-post" } } }
			sort: { fields: frontmatter___publishedDate, order: DESC }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						publishedDate(formatString: "MMMM DD, YYYY")
						description
						featuredImg {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
							publicURL
						}
					}
				}
			}
		}
	}
`;
