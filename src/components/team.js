import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Team = () => {
	const allPosts = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "teams" } } }
			) {
				edges {
					node {
						id
						frontmatter {
							title
							status
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
		<div className="wrapper light-wrapper">
			<div className="container inner">
				<h2 className="section-title text-center">Meet the Team</h2>
				<p className="lead larger text-center">
					We are made up of industry expertise and innovators.
				</p>
				<div className="grid-view">
					<div className="row  gap-small text-center">
						{allPosts.allMarkdownRemark.edges.map(({ node }) => {
							const { id } = node;
							const {
								featuredImg,
								title,
								description,
								status
							} = node.frontmatter;
							return (
								<div className="item col-lg-4 col-md-4 col-sm-6" key={id}>
									<div className="item-inner">
										<div className="box bg-white shadow">
											<div className="img-blob blob1 mb-4">
												{!!featuredImg && !!featuredImg.childImageSharp ? (
													<Img
														fluid={featuredImg.childImageSharp.fluid}
														alt={title}
													/>
												) : (
													<img src={featuredImg.publicURL} alt={title} />
												)}{" "}
											</div>
											<h5 className="mb-15">{title}</h5>
											<div className="meta mb-10">{status}</div>
											<p className="mb-10">{description} </p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
