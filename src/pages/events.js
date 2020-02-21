import React from "react";
import { graphql, Link } from "gatsby";
import "../styles/bootstrap.min.css";
import Img from "gatsby-image";
import { FaClock, FaSearch } from "react-icons/fa";
import Layout from "../components/layout";
import Popular from "../components/popularPost";

const Event = props => {
	const { data } = props;
	const allPosts = data.allMarkdownRemark.edges;

	const emptyQuery = "";

	const [state, setState] = React.useState({
		filteredData: [],
		query: emptyQuery
	});

	const handleInputChange = event => {
		const query = event.target.value;
		const { data } = props;

		const posts = data.allMarkdownRemark.edges || [];

		const filteredData = posts.filter(post => {
			const { description, title, tag, publishedDate } = post.node.frontmatter;
			const { slug } = post.node.fields;
			const { id } = post.node;
			return (
				description.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase()) ||
				slug.toLowerCase().includes(query.toLowerCase()) ||
				id.toLowerCase().includes(query.toLowerCase()) ||
				tag.toLowerCase().includes(query.toLowerCase()) ||
				publishedDate.toLowerCase().includes(query.toLowerCase())
			);
		});

		setState({
			query,
			filteredData
		});
	};

	const { filteredData, query } = state;
	const hasSearchResults = filteredData && query !== emptyQuery;
	const posts = hasSearchResults ? filteredData : allPosts;

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
									{posts.map(({ node }) => {
										const { id } = node;
										const { slug } = node.fields;
										const {
											featuredImg,
											title,
											description,
											tag,
											publishedDate
										} = node.frontmatter;
										return (
											<div className="item post grid-sizer col-md-6" key={id}>
												<figure className="overlay overlay1 rounded mb-3">
													<Link to={slug}>
														{!!featuredImg && !!featuredImg.childImageSharp ? (
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
												<div className="category">
													<p className="badge badge-pill bg-meander">{tag}</p>
												</div>
												<h2 className="post-title">
													<Link to={slug}>{title}</Link>
												</h2>
												<div className="post-content">
													<p>{description}</p>
												</div>
												<div className="meta mb-0">
													<span className="date">
														<i className="jam jam-clock">
															<FaClock />
														</i>
														{publishedDate}
													</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
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
										onChange={handleInputChange}
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
};

export default Event;

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "event-post" } } }
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
						publishedDate
						tag
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
