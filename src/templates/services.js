import React from "react";
import Service from "../pages/programs";
import Layout from "../components/layout";
const Services = props => {
	return (
		<Layout>
			{/* <Head title={markdownRemark.frontmatter.title} /> */}
			<Service data={props.data.markdownRemark} />
		</Layout>
	);
};

export default Services;

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
