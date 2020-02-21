import React from "react";
import { graphql } from "gatsby";

const Program = () => {
	return <h1>Program detail</h1>;
};

export default Program;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				description
				featuredImg {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
			}
		}
	}
`;
