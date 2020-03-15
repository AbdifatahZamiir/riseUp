import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FaClock } from "react-icons/fa";

const LatestProject = () => {
	const allPosts = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "project-post" } } }
				sort: { fields: frontmatter___publishedDate, order: DESC }
				limit: 3
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
	`);

	return (
		<div className="wrapper white-wrapper">
			<div className="container inner">
				<h3
					className="display-3 text-center mt-4"
					style={{ paddingBottom: "5rem" }}
				>
					<span className="title-underline">Current Projects </span>
				</h3>
				<div className="row">
					{allPosts.allMarkdownRemark.edges.map(({ node }) => {
						const { id } = node;
						const { slug } = node.fields;
						const { featuredImg, title, publishedDate } = node.frontmatter;
						return (
							<div className="item post grid-sizer col-md-4 col-lg-4" key={id}>
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
								<h2 className="post-title">
									<Link style={{ boxShadow: `none` }} to={slug}>
										{title}
									</Link>
								</h2>

								<div className="meta mb-0">
									<span className="date">
										<FaClock size="19px" color="d8681d" className="mb-2" />
										{"     "}
										{publishedDate}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default LatestProject;
